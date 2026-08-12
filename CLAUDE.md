# Lead Magnet

A lead-gen landing page/tool that captures visitor information in exchange for a lead magnet offer.

## Tech Stack

- TypeScript + Next.js
- PostgreSQL via Supabase
- [Key libraries/tools]

## Always Do

- Explain your approach before implementing non-trivial changes.
- Keep changes small and focused; prefer incremental PRs.
- Run [test command] before considering work done.
- [Add any project-specific "always" rule]

## Never Do

- Add dependencies without asking first.
- Commit without explicit approval.
- Modify [PLACEHOLDER: list specific paths/directories that are off-limits].
- [Add any project-specific "never" rule]

## Security Rules

- Never log secrets.
- Always use environment variables for credentials/config, never hardcode them.
- Never commit credentials — see SECURITY.md for the full policy.

## Communication Style

- [e.g. "Be terse — just show the diff" or "Explain reasoning, not just conclusions"]
- [Any other preference for how you want updates/summaries delivered]

## Project Structure

- [Brief note on where core logic lives, e.g. "src/ contains..."]
- [Brief note on where tests live]

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
