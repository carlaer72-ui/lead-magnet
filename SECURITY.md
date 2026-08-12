# Security Rules

These rules apply to all work in this project. They are not optional and are not project-specific — treat them as a baseline.

## Secrets and Credentials

- Never hardcode credentials, API keys, tokens, or connection strings in source code.
- Always load credentials and other environment-specific config from environment variables (or a secrets manager), never from committed files.
- Never commit `.env`, `.env.local`, or any file containing real credentials. Only `.env.example` (with placeholder values) belongs in version control.
- Never log secrets, tokens, or credentials — including in debug output, error messages, or stack traces.
- If a secret is ever committed by accident, rotate it immediately; removing it from a later commit does not remove it from history.

## Input Handling

- Treat all external input (user input, API responses, file uploads, query params) as untrusted.
- Validate and sanitize input at system boundaries — don't assume upstream validation happened.
- Use parameterized queries for all database access; never build SQL by string concatenation.
- Escape or sanitize output rendered in a browser to prevent XSS.

## Dependencies

- Review new dependencies before adding them — check maintenance status and known vulnerabilities.
- Keep dependencies up to date; address security advisories promptly.
- Don't add dependencies without a clear reason.

## Access and Permissions

- Follow least privilege: grant only the access a component or credential actually needs.
- Don't disable security checks, linters, or CI gates to unblock a merge — fix the underlying issue.
- Don't bypass authentication or authorization checks, even temporarily, in shared branches.

## Reporting

- If you find a security issue while working, stop and flag it — don't fix silently and move on without telling the project owner what was found.
