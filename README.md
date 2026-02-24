# Marketing Portfolio

A Y2K / webpunk-style landing page with a PSP menu and liquid glass UI. Built with React + Vite.

## Project structure

- `src/App.jsx` – Main layout and section state
- `src/constants/menuItems.js` – Menu configuration (labels, PDF paths)
- `src/components/` – Reusable UI (Hero, MenuBar, NavHint, TrophyToast, etc.)
- `src/components/sections/` – About, Portfolio, CV, Personal Details panels

## Sections

- **About Me** – Short bio (edit in `src/components/sections/AboutSection.jsx`)
- **Portfolio** – Description + downloadable PDF (put `portfolio.pdf` in `public/`)
- **CV** – Description + downloadable PDF (put `cv.pdf` in `public/`)
- **Personal Details** – Contact info (edit in `src/components/sections/PersonalDetailsSection.jsx` or pass `details` prop from `App.jsx`)

## Run locally

```bash
npm install
npm run dev
```

Then open the URL shown in the terminal (e.g. http://localhost:5173).

## Build for production

```bash
npm run build
```

Output is in `dist/`. Deploy that folder to any static host.

## Customize

1. **About Me** – Edit the paragraphs in `src/components/sections/AboutSection.jsx`.
2. **PDFs** – Add `portfolio.pdf` and `cv.pdf` to the `public/` folder (paths in `src/constants/menuItems.js`).
3. **Personal details** – Update the `details` array in `src/components/sections/PersonalDetailsSection.jsx`, or pass a `details` prop from `App.jsx`.
4. **Central image** – In `src/components/Hero.jsx`, add a background image to `.hero-figure` or replace the placeholder with an `<img>`.

## Keyboard

- **O** or **Escape** – Close the current section (back to menu).
