
# 🌐 My Developer Portfolio

This is a React + Vite + Tailwind CSS rebuild of my personal portfolio. It showcases my skills, projects, and experience as a developer.

Live site: https://mhaques.co.uk

---

## 🧩 Features

- 💼 About, Projects, Contact sections
- 📫 Contact form integrates with Netlify Forms (honeypot + client-side submit)
- 🎨 Tailwind CSS, responsive design, dark/light theme with OS-default fallback
- ⚡ Vite dev server and optimized production build

---

## 🛠 Stack

- React 18
- Vite
- Tailwind CSS v4 (local; via @tailwindcss/vite)
- Netlify Forms (static form handling)

Project layout (partial):
- src/components/* — UI sections (Navbar, Hero, About, Projects, Contact, Footer)
- src/hooks/useDarkMode.js — theme toggle with OS-default fallback
- src/index.css — Tailwind and custom animations
- src/main.jsx — app bootstrap

---

## 🔧 Development

- Install dependencies (uses package-lock):
```bash
npm ci
```

- Start dev server:
```bash
npm run dev
```

- Build for production:
```bash
npm run build
```

- Preview the production build locally:
```bash
npm run preview
```

Note: The dist/ folder is build output; it’s removed from the repo for local testing.

---

## 🌙 Theme (dark/light)

- Defaults to the system preference (prefers-color-scheme) when no user choice is stored.
- Clicking the theme toggle overrides the system and persists the choice in localStorage.
- If localStorage is cleared (or a reset is invoked), the site falls back to system preference.

Implementation details:
- Tailwind is configured for class-based dark mode (dark: variants apply when <html> has class="dark").
- A small preload script in index.html sets the initial class before React mounts and keeps it in sync with the system when no override exists.

---

## ✉️ Contact form (Netlify)

- Single visible form in the Contact section, with a hidden honeypot field.
- Submits via application/x-www-form-urlencoded to Netlify (no-cors).
- After the first deployment, submit once to ensure Netlify provisions the form if it doesn’t appear automatically.

---

