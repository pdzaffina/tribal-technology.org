# Copilot First Steps — Use Case Guide

Open `index.html` in a modern browser. This static website uses no server, build tools, or API keys. It includes eight detailed use cases, copyable sample prompts, a model-selection cat GIF placeholder, and local progress tracking. No quizzes.

## Replace the cat GIF

Replace `assets/model-selector-cat.gif` with your own GIF **using exactly the same filename**. The page will show it in the First Steps use case. The GIF is intentionally an easily replaceable placeholder.

## Scope and licensing

The guide targets basic Microsoft Copilot Chat with a work account, not a paid Microsoft 365 Copilot add-on. Features including inbox search, calendar availability, Notebooks, model selection, Teams transcription, and document workflows vary by tenant, account, and license. The guide explicitly flags these limitations. Check your tenant before training users. Never share restricted data without authorization.

## Styling

Background `#FAF9F6`, cards `#FFFFFF`, text `#252525`, borders `#E5DFDC`, maroon `#4A252B`. Edit `styles.css` to change them.

## Hosting

Upload the folder to an approved internal static web host. Progress is saved only in each browser's localStorage and is not a measure of real Copilot usage.

## Prompt Library

Open `prompt-library.html` from the homepage or directly. The library supports search, category filters, copy, and temporary in-page customization. All prompts are stored in **`prompts-data.js`** — edit that one file to add or change prompts. Copy an existing object, use a new unique `id`, and update `title`, `category`, `description`, `tags`, and `prompt`. Save and refresh the page. Changes made in the Customize dialog are temporary and do not change the JS file.

No backend or account is required. Copying may require HTTPS or localhost in some browsers; a fallback is included for local file use.

## Mobile dictation use case

The eighth use case teaches approved mobile app installation and dictating a personal note. It distinguishes dictation from full meeting recording/transcription, which may not be available without additional licensing.
