# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

Project overview
- Static single-page site (index.html) with sections: Home, About, Projects, Contact.
- Styling via Tailwind CSS v4 and a small custom stylesheet:
  - main.css contains @import "tailwindcss" and custom animation classes.
  - src/output.css is a built Tailwind CSS output used by the page.
  - index.html currently includes BOTH src/output.css and main.css, and also loads Tailwind via CDN; scripts.js sets a runtime tailwind.config for the CDN path. Prefer one pipeline when making changes to avoid duplicated styles.
- JavaScript:
  - scripts.js handles dark-mode toggle (persists in localStorage), mobile menu, and smooth scrolling. It also defines a runtime Tailwind config when the CDN script is present.
  - form-validation.js adds client-side validation for the Netlify-enabled contact form (form[name="contact"] with netlify attribute).
- Deployment target per README: GitHub Pages; contact form designed for Netlify Forms.

Common commands (pwsh on Windows)
- Install dependencies (package-lock.json present):
```bash path=null start=null
npm ci
```

- One-time Tailwind build (main.css → src/output.css):
```bash path=null start=null
npx @tailwindcss/cli -i ./main.css -o ./src/output.css
```

- Watch mode during development:
```bash path=null start=null
npx @tailwindcss/cli -i ./main.css -o ./src/output.css --watch
```

- Local preview options:
  - Open in default browser:
```powershell path=null start=null
Start-Process .\index.html
```
  - Or serve the folder (ephemeral dev server via npx):
```bash path=null start=null
npx http-server . -p 5500
```

Testing and linting
- No test framework or linter is configured. The only npm script is a placeholder "test" that exits with an error by design.

Architecture notes for future edits
- Tailwind usage:
  - No tailwind.config.js file; customizations for the CDN path are set in scripts.js (tailwind.config). If using the CLI build (recommended for production), place CSS-layer customizations in main.css and rebuild to update src/output.css.
  - If you add new utility classes in HTML, keep the CLI watch running so changes are reflected in src/output.css.
- JS organization:
  - scripts.js: UI behaviors (theme toggle, smooth scroll, mobile nav). Dark mode is toggled by adding/removing the "dark" class on <html> and persisted in localStorage.
  - form-validation.js: regex-based validation; adds/removes error messages and classes.
- Forms:
  - The contact form uses Netlify’s static form handling (netlify attribute). Client-side validation runs before submission.

Repository pointers
- README.md: high-level feature list and tech stack.
- package.json: minimal dependencies (tailwindcss and @tailwindcss/cli) and no build/test scripts beyond the placeholder test.
