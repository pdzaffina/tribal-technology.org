/*
  EDIT THIS FILE TO ADD OR CHANGE PROMPTS.
  Copy an object inside window.COPILOT_PROMPTS, change its id (unique), title,
  category, description, prompt and tags, then save and refresh prompt-library.html.
  Use fictional or approved work data in examples.
*/
window.COPILOT_PROMPTS = [
  {
    id: 'email-draft',
    title: 'Write a friendly work email',
    category: 'Email and Calendar',
    description: 'Turn a few points into a clear, professional email.',
    tags: ['writing', 'beginner'],
    prompt: 'Help me write a friendly, professional email to [AUDIENCE] about [TOPIC]. Include these points: [POINTS]. Keep it under 150 words and end with a clear next step.'
  },
  {
    id: 'email-rewrite',
    title: 'Make my email clearer',
    category: 'Email and Calendar',
    description: 'Improve the tone and readability of a draft you provide.',
    tags: ['editing', 'beginner'],
    prompt: 'Rewrite the following email to be concise, warm, and easy to understand. Keep the meaning and do not invent facts. Email: [PASTE APPROVED DRAFT]'
  },
  {
    id: 'meeting-time',
    title: 'Suggest a meeting plan',
    category: 'Email and Calendar',
    description: 'Prepare a scheduling message using times you already know are available.',
    tags: ['scheduling'],
    prompt: 'Draft a short message proposing these meeting times: [AVAILABLE TIMES]. The purpose is [PURPOSE]. Ask attendees to reply with their preferred option. Do not assume you can see anyone’s calendar.'
  },
  {
    id: 'day-plan',
    title: 'Organize my workday',
    category: 'Email and Calendar',
    description: 'Make a practical schedule from tasks you supply.',
    tags: ['planning', 'beginner'],
    prompt: 'Here are my tasks and commitments today: [TASKS AND TIMES]. Help me make a realistic priority list and simple schedule. Identify any conflicts or missing information.'
  },
  {
    id: 'meeting-notes',
    title: 'Turn a transcript into meeting notes',
    category: 'Meetings and Notes',
    description: 'Extract decisions, action items, owners, and due dates from an approved transcript.',
    tags: ['meetings', 'summary'],
    prompt: 'Using only the transcript below, create meeting notes with: purpose, key discussion points, decisions, and an action-item table with owner and due date. If an owner or date was not stated, write “Not specified.” Do not invent decisions. Transcript: [PASTE APPROVED TRANSCRIPT]'
  },
  {
    id: 'document-draft',
    title: 'Draft a one-page document',
    category: 'Draft a Document',
    description: 'Build a structured first draft from your own outline.',
    tags: ['documents', 'writing'],
    prompt: 'Draft a clear one-page document for [AUDIENCE] about [TOPIC]. Use this information: [FACTS OR OUTLINE]. Include a title, short introduction, useful headings, and next steps. Flag anything that needs verification.'
  },
  {
    id: 'notebook-brief',
    title: 'Create a project briefing',
    category: 'Notebooks',
    description: 'Summarize approved project materials into a reusable overview.',
    tags: ['projects', 'summary'],
    prompt: 'Using the project material I provide, create a briefing with the objective, current status, key milestones, open decisions, risks, and next actions. Cite which provided material supports each major claim. If something is unknown, say so.'
  },
  {
    id: 'expert-panel',
    title: 'Panel of Experts',
    category: 'Advanced',
    description: 'Challenge a proposal from several useful professional viewpoints.',
    tags: ['decisions', 'analysis'],
    prompt: 'Evaluate this proposal: [PROPOSAL]. Simulate perspectives from an operations leader, a finance analyst, a frontline employee, and a risk advisor. For each, explain their main concern and one recommendation. Then identify the strongest objections, assumptions to test, and a practical next step. These are simulated perspectives, not real expert opinions.'
  }
];
