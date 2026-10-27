# BAPPL website redesign (Vite + React + Tailwind)

    npm install
    npm run dev      # http://localhost:5173
    npm run build    # output in dist/

## Structure
- `src/components/*.jsx`: one file per section, with its data at the top.
- `src/components/ui.jsx`: shared helpers (Reveal, Title, Em, Sec, Counter, Slider).
- `src/components/icons.jsx`: rice / paddy line icons (`<Icon.stalk />`, `<Icon.grain />`, ...).
- `src/hooks/useSmoothScroll.js`: inertia scrolling (Lenis). Tune `lerp` there.

## Theming (colours)
All colours live in `src/theme/tokens.js`; no colour is hard-coded in components or CSS.
- Only `primary` (green) and `on-primary` (white) are real colours; every tint, shade and glow is mixed from them with `color-mix`, so changing `primary` re-themes the whole site.
- Every section has its own tokens (`hero-bg`, `process-linefill`, `footer-title`, ...) that point at the globals by default. Overwrite one line to restyle one element.
- Roles: `bg` section bg, `eyebrow` small label, `title` headings, `text` body, `accent` links/icons, `fill`/`onfill` solid chips and the text on them, `tile` icon/image tile, `card`/`border` cards, `btn`/`btntext` buttons, `line`/`linefill` process connector, `num` big numerals.
- Runtime: `import { setTheme } from './theme'; setTheme({ 'hero-bg': '#0a3d62' })`.
