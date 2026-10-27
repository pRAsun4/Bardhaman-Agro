import { tokens } from './tokens'

const block = (i) =>
  Object.entries(tokens)
    .filter(([, v]) => i === 0 || v[1])
    .map(([k, v]) => `--c-${k}:${v[i] ?? v[0]};`)
    .join('')

// Writes every token as a CSS variable. Dark values apply with the OS dark
// setting, or by forcing <html data-theme="dark"> / "light".
export function injectTheme() {
  const el = document.createElement('style')
  el.id = 'theme-tokens'
  el.textContent =
    `:root{${block(0)}}` +
    `@media (prefers-color-scheme:dark){:root:not([data-theme="light"]){${block(1)}color-scheme:dark}}` +
    `:root[data-theme="dark"]{${block(1)}color-scheme:dark}`
  document.head.appendChild(el)
}

// Runtime override, e.g. setTheme({ 'hero-bg': '#0a3d62', 'footer-bg': '#111' })
export function setTheme(overrides) {
  Object.entries(overrides).forEach(([k, v]) =>
    document.documentElement.style.setProperty(`--c-${k}`, v)
  )
}

export { tokens }
