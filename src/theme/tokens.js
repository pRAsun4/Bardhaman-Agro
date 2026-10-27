// ============================================================
// THEME TOKENS: the single place to change colours.
// Format: 'name': [lightValue, optionalDarkValue]
// Any CSS colour works (hex, rgba, color-mix, var(--c-other-token)).
// Every name becomes a CSS variable (--c-name) and a Tailwind colour
// (bg-name, text-name, border-name). Edit one section's tokens to restyle only that
// section; edit GLOBAL tokens to restyle everything still pointing at them.
// Only the green + white are "real" colours; every tint is mixed from them.
// ============================================================
export const tokens = {
  // ---------- GLOBAL ----------
  // Change 'primary' and almost every shade on the site follows (tints are mixed from it).
  'primary': ['#17703a'],
  'on-primary': ['#ffffff'],
  'ink': ['color-mix(in srgb, var(--c-primary) 30%, #000)'],
  'muted': ['color-mix(in srgb, var(--c-ink) 70%, #fff)'],
  'page-bg': ['color-mix(in srgb, var(--c-primary) 3.5%, #fff)'],
  'tint1': ['color-mix(in srgb, var(--c-primary) 7%, #fff)'],
  'tint2': ['color-mix(in srgb, var(--c-primary) 14%, #fff)'],
  'tint3': ['color-mix(in srgb, var(--c-primary) 26%, #fff)'],
  'deep': ['color-mix(in srgb, var(--c-primary) 72%, #000)'],
  'surface': ['rgba(255,255,255,.72)'],
  'surface-line': ['color-mix(in srgb, var(--c-primary) 15%, transparent)'],
  'glass-highlight': ['rgba(255,255,255,.7)'],
  'glow-a': ['color-mix(in srgb, var(--c-primary) 24%, transparent)'],
  'glow-b': ['color-mix(in srgb, var(--c-primary) 14%, transparent)'],
  'shadow': ['color-mix(in srgb, var(--c-primary) 22%, transparent)'],
  'btn-bg': ['var(--c-primary)'],
  'btn-text': ['var(--c-on-primary)'],
  'btn-shadow': ['color-mix(in srgb, var(--c-primary) 38%, transparent)'],

  // ---------- HEADER ----------
  'header-title': ['var(--c-ink)'],
  'header-text': ['var(--c-muted)'],
  'header-accent': ['var(--c-primary)'],
  'header-fill': ['var(--c-primary)'],
  'header-onfill': ['var(--c-on-primary)'],
  'header-card': ['var(--c-surface)'],
  'header-border': ['var(--c-surface-line)'],
  'header-btn': ['var(--c-btn-bg)'],
  'header-btntext': ['var(--c-btn-text)'],

  // ---------- HERO ----------
  'hero-bg': ['var(--c-tint2)'],
  'hero-card': ['rgba(255,255,255,.4)'],
  'hero-border': ['rgba(255,255,255,.65)'],
  'hero-btn': ['rgba(255,255,255,.55)'],
  'hero-btntext': ['var(--c-deep)'],
  'hero-badge': ['var(--c-primary)'],
  'hero-badgetext': ['var(--c-on-primary)'],
  'hero-dot': ['var(--c-on-primary)'],

  // ---------- WELCOME ----------
  'welcome-bg': ['transparent'],
  'welcome-eyebrow': ['var(--c-primary)'],
  'welcome-title': ['var(--c-ink)'],
  'welcome-text': ['var(--c-muted)'],
  'welcome-accent': ['var(--c-primary)'],
  'welcome-fill': ['var(--c-primary)'],
  'welcome-onfill': ['var(--c-on-primary)'],
  'welcome-tile': ['var(--c-tint1)'],
  'welcome-card': ['var(--c-on-primary)'],
  'welcome-border': ['var(--c-surface-line)'],
  'welcome-btn': ['var(--c-btn-bg)'],
  'welcome-btntext': ['var(--c-btn-text)'],

  // ---------- WHY ----------
  'why-bg': ['transparent'],
  'why-eyebrow': ['var(--c-primary)'],
  'why-title': ['var(--c-ink)'],
  'why-text': ['var(--c-muted)'],
  'why-accent': ['var(--c-primary)'],
  'why-fill': ['var(--c-primary)'],
  'why-onfill': ['var(--c-on-primary)'],
  'why-tile': ['var(--c-tint1)'],
  'why-card': ['var(--c-on-primary)'],
  'why-border': ['var(--c-surface-line)'],
  'why-numeral': ['var(--c-tint2)'],

  // ---------- PRODUCTS ----------
  'products-bg': ['transparent'],
  'products-eyebrow': ['var(--c-primary)'],
  'products-title': ['var(--c-ink)'],
  'products-text': ['var(--c-muted)'],
  'products-accent': ['var(--c-primary)'],
  'products-fill': ['var(--c-primary)'],
  'products-onfill': ['var(--c-on-primary)'],
  'products-card': ['var(--c-on-primary)'],
  'products-border': ['var(--c-surface-line)'],

  // ---------- PRODUCT ----------
  'product-title': ['var(--c-ink)'],
  'product-text': ['var(--c-muted)'],
  'product-tile': ['var(--c-tint1)'],
  'product-card': ['var(--c-on-primary)'],
  'product-border': ['var(--c-surface-line)'],
  'product-btn': ['var(--c-btn-bg)'],
  'product-btntext': ['var(--c-btn-text)'],

  // ---------- CHAIRMAN ----------
  'chairman-bg': ['transparent'],
  'chairman-eyebrow': ['var(--c-primary)'],
  'chairman-title': ['var(--c-ink)'],
  'chairman-text': ['var(--c-muted)'],
  'chairman-accent': ['var(--c-primary)'],
  'chairman-tile': ['var(--c-tint1)'],
  'chairman-card': ['var(--c-tint1)'],
  'chairman-border': ['var(--c-surface-line)'],
  'chairman-quote': ['color-mix(in srgb, var(--c-primary) 16%, transparent)'],

  // ---------- NUMBERS ----------
  'numbers-bg': ['var(--c-tint1)'],
  'numbers-eyebrow': ['var(--c-primary)'],
  'numbers-title': ['var(--c-ink)'],
  'numbers-text': ['var(--c-muted)'],
  'numbers-cell': ['var(--c-surface)'],
  'numbers-border': ['color-mix(in srgb, var(--c-primary) 20%, transparent)'],
  'numbers-line': ['color-mix(in srgb, var(--c-primary) 16%, transparent)'],
  'numbers-num': ['var(--c-primary)'],
  'numbers-pattern': ['color-mix(in srgb, var(--c-primary) 9%, transparent)'],

  // ---------- PROCESS ----------
  'process-bg': ['transparent'],
  'process-eyebrow': ['var(--c-primary)'],
  'process-title': ['var(--c-ink)'],
  'process-text': ['var(--c-muted)'],
  'process-accent': ['var(--c-primary)'],
  'process-fill': ['var(--c-primary)'],
  'process-onfill': ['var(--c-on-primary)'],
  'process-tile': ['var(--c-tint1)'],
  'process-card': ['var(--c-on-primary)'],
  'process-border': ['var(--c-surface-line)'],
  'process-line': ['color-mix(in srgb, var(--c-primary) 24%, transparent)'],
  'process-linefill': ['var(--c-primary)'],

  // ---------- POPULAR ----------
  'popular-bg': ['transparent'],
  'popular-eyebrow': ['var(--c-primary)'],
  'popular-title': ['var(--c-ink)'],
  'popular-accent': ['var(--c-primary)'],
  'popular-card': ['var(--c-on-primary)'],
  'popular-border': ['var(--c-surface-line)'],

  // ---------- MARQUEE ----------
  'marquee-bg': ['transparent'],
  'marquee-eyebrow': ['var(--c-primary)'],
  'marquee-title': ['var(--c-ink)'],
  'marquee-card': ['var(--c-on-primary)'],
  'marquee-border': ['var(--c-on-primary)'],

  // ---------- TESTIMONIALS ----------
  'testimonials-bg': ['var(--c-tint1)'],
  'testimonials-eyebrow': ['var(--c-primary)'],
  'testimonials-title': ['var(--c-ink)'],
  'testimonials-text': ['var(--c-muted)'],
  'testimonials-accent': ['var(--c-primary)'],
  'testimonials-fill': ['var(--c-primary)'],
  'testimonials-onfill': ['var(--c-on-primary)'],
  'testimonials-card': ['var(--c-on-primary)'],
  'testimonials-border': ['var(--c-surface-line)'],
  'testimonials-line': ['color-mix(in srgb, var(--c-primary) 28%, transparent)'],
  'testimonials-ornament': ['color-mix(in srgb, var(--c-primary) 20%, transparent)'],

  // ---------- NEWS ----------
  'news-bg': ['transparent'],
  'news-eyebrow': ['var(--c-primary)'],
  'news-title': ['var(--c-ink)'],
  'news-text': ['var(--c-muted)'],
  'news-accent': ['var(--c-primary)'],
  'news-tile': ['var(--c-tint1)'],
  'news-card': ['var(--c-on-primary)'],
  'news-border': ['var(--c-surface-line)'],

  // ---------- FACTS ----------
  'facts-bg': ['transparent'],
  'facts-eyebrow': ['var(--c-primary)'],
  'facts-title': ['var(--c-ink)'],
  'facts-text': ['var(--c-muted)'],
  'facts-accent': ['var(--c-primary)'],
  'facts-fill': ['var(--c-primary)'],
  'facts-onfill': ['var(--c-on-primary)'],
  'facts-card': ['var(--c-on-primary)'],
  'facts-line': ['color-mix(in srgb, var(--c-primary) 22%, transparent)'],
  'facts-num': ['var(--c-primary)'],

  // ---------- GALLERY ----------
  'gallery-bg': ['transparent'],
  'gallery-eyebrow': ['var(--c-primary)'],
  'gallery-title': ['var(--c-ink)'],
  'gallery-accent': ['var(--c-primary)'],
  'gallery-tile': ['var(--c-tint1)'],
  'gallery-card': ['var(--c-on-primary)'],
  'gallery-border': ['var(--c-surface-line)'],
  'gallery-overlay': ['color-mix(in srgb, var(--c-deep) 72%, transparent)'],

  // ---------- BRANDS ----------
  'brands-bg': ['transparent'],
  'brands-eyebrow': ['var(--c-primary)'],
  'brands-title': ['var(--c-ink)'],
  'brands-accent': ['var(--c-primary)'],
  'brands-tile': ['var(--c-tint1)'],
  'brands-card': ['var(--c-on-primary)'],
  'brands-border': ['var(--c-surface-line)'],

  // ---------- ACCRED ----------
  'accred-bg': ['transparent'],
  'accred-eyebrow': ['var(--c-primary)'],
  'accred-title': ['var(--c-ink)'],
  'accred-text': ['var(--c-muted)'],
  'accred-accent': ['var(--c-primary)'],
  'accred-card': ['var(--c-on-primary)'],
  'accred-border': ['var(--c-surface-line)'],

  // ---------- FOOTER ----------
  'footer-bg': ['var(--c-deep)'],
  'footer-title': ['var(--c-on-primary)'],
  'footer-text': ['color-mix(in srgb, var(--c-on-primary) 78%, var(--c-primary))'],
  'footer-fill': ['var(--c-primary)'],
  'footer-onfill': ['var(--c-on-primary)'],
  'footer-border': ['color-mix(in srgb, var(--c-on-primary) 12%, transparent)'],

  // ---------- PROGRESS ----------
  'progress-fill': ['var(--c-primary)'],

  // ---------- TOP ----------
  'top-fill': ['var(--c-primary)'],
  'top-onfill': ['var(--c-on-primary)'],
}
