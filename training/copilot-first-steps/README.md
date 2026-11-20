# Copilot First Steps

A beginner-friendly, local-first, seven-lesson guided learning website for basic Microsoft Copilot Chat users.

## Run

Open `index.html` in a modern browser. No installation, build step, backend, or API key is required. For local hosting, run `python3 -m http.server 8000` in this folder, then visit `http://localhost:8000`.

## Included

- Seven interactive lessons, including mobile installation and voice dictation guidance.
- Practice questions, copy-to-clipboard controls, links to the real Microsoft Copilot Chat, and short knowledge checks.
- Progress and optional reflection saved in this browser's localStorage only.
- Responsive layout, keyboard-focus styling, and large controls.
- Exact palette: background #FAF9F6, cards #FFFFFF, text #252525, borders #E5DFDC, maroon #4A252B.

## Important limitations

This is a training site, **not** a Microsoft Copilot simulator or an integration with a work account. It does not access emails, files, calendars, phone microphones, or Copilot responses. Completion is learner-reported, not verified by Microsoft. Progress is per browser/device, not shared with a trainer. App names, availability, licensing, voice-input UI, and organization-specific permissions may change; IT should validate these before rollout. Dictation is not the same as meeting recording/transcription. Follow your organization's security, consent, and data-handling policies.

## Deploy

Host these static files on any approved internal web server or static website host. For organizational rollout, verify that `https://copilot.cloud.microsoft` is the correct work-account entry point and that mobile app installation is permitted. The `design-reference.png` file is the original visual concept and is not required at runtime.
