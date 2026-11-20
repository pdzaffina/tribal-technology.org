(() => {
  'use strict';
  const prompts = Array.isArray(window.COPILOT_PROMPTS) ? window.COPILOT_PROMPTS.filter(p => p && typeof p.id === 'string' && typeof p.prompt === 'string') : [];
  const $ = id => document.getElementById(id);
  const search = $('promptSearch');
  const category = $('categoryFilter');
  const grid = $('promptGrid');
  const dialog = $('editorDialog');
  let active = null;
  const categories = [...new Set(prompts.map(p => p.category || 'Other'))].sort();
  categories.forEach(name => { const option = document.createElement('option'); option.value = name; option.textContent = name; category.append(option); });
  function el(tag, className, text) { const node = document.createElement(tag); if (className) node.className = className; if (text !== undefined) node.textContent = text; return node; }
  async function copyText(value, status) {
    try {
      if (navigator.clipboard && window.isSecureContext) await navigator.clipboard.writeText(value);
      else {
        const temp = document.createElement('textarea'); temp.value = value; temp.style.position = 'fixed'; temp.style.opacity = '0'; document.body.append(temp); temp.select();
        const ok = document.execCommand('copy'); temp.remove(); if (!ok) throw new Error('Copy unavailable');
      }
      status.textContent = 'Copied! Paste into Copilot Chat.';
    } catch (err) { status.textContent = 'Copy not available here. Select the text and copy it manually.'; }
  }
  function render() {
    const q = search.value.trim().toLowerCase();
    const c = category.value;
    const visible = prompts.filter(p => (c === 'all' || (p.category || 'Other') === c) && [p.title,p.description,p.prompt,p.category,...(p.tags || [])].join(' ').toLowerCase().includes(q));
    grid.replaceChildren();
    visible.forEach(p => {
      const card = el('article','prompt-card');
      card.append(el('div','prompt-category',p.category || 'Other'),el('h3','',p.title || 'Untitled prompt'),el('p','',p.description || ''));
      card.append(el('div','prompt-preview',p.prompt));
      const tags = el('div','prompt-tags'); (p.tags || []).forEach(t => tags.append(el('span','',t))); card.append(tags);
      const actions = el('div','prompt-actions');
      const customize = el('button','outline','Customize'); customize.type = 'button'; customize.addEventListener('click',() => openEditor(p));
      const copy = el('button','primary','Copy prompt'); copy.type = 'button'; const status = el('span','copy-status'); status.setAttribute('role','status');
      copy.addEventListener('click',() => copyText(p.prompt,status));
      actions.append(customize,copy); card.append(actions,status); grid.append(card);
    });
    $('resultCount').textContent = `${visible.length} of ${prompts.length} prompts`;
    $('emptyState').hidden = visible.length > 0;
  }
  function openEditor(p) { active = p; $('editorTitle').textContent = p.title || 'Edit prompt'; $('editorDescription').textContent = p.description || ''; $('editorText').value = p.prompt; $('editorStatus').textContent = ''; dialog.showModal(); $('editorText').focus(); }
  $('resetEditor').addEventListener('click',() => { if(active) $('editorText').value = active.prompt; $('editorStatus').textContent = 'Restored original prompt.'; });
  $('copyEdited').addEventListener('click',() => copyText($('editorText').value,$('editorStatus')));
  search.addEventListener('input',render); category.addEventListener('change',render);
  render();
})();
