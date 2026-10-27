// Small line-icon set drawn for the rice / paddy theme. All use currentColor.
const mk = (children, fill = false) =>
  function IconSvg({ className = 'w-6 h-6', strokeWidth = 1.6, ...rest }) {
    return (
      <svg viewBox="0 0 24 24" fill={fill ? 'currentColor' : 'none'} stroke={fill ? 'none' : 'currentColor'}
        strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true" {...rest}>
        {children}
      </svg>
    )
  }

export const Icon = {
  stalk: mk(<><path d="M12 22V9" /><path d="M12 4c-1 1-1 3 0 4 1-1 1-3 0-4Z" /><path d="M12 9c-2.5-.5-3.8-2.3-3.8-4.5 2.5.3 3.8 2 3.8 4.5Z" /><path d="M12 9c2.5-.5 3.8-2.3 3.8-4.5-2.5.3-3.8 2-3.8 4.5Z" /><path d="M12 14c-2.5-.5-4-2.3-4-4.5 2.5.3 4 2 4 4.5Z" /><path d="M12 14c2.5-.5 4-2.3 4-4.5-2.5.3-4 2-4 4.5Z" /><path d="M12 19c-2.5-.5-4-2-4-4 2.5.3 4 1.7 4 4Z" /><path d="M12 19c2.5-.5 4-2 4-4-2.5.3-4 1.7-4 4Z" /></>),
  grain: mk(<><path d="M12 3c3.5 3 5 7 4 12-1 3.5-2.5 5.5-4 6-1.5-.5-3-2.5-4-6-1-5 .5-9 4-12Z" /><path d="M12 8v10" /></>),
  bowl: mk(<><path d="M3 11h18a9 9 0 0 1-18 0Z" /><path d="M9 21h6" /><path d="M8 7c0-1.5 1-2 1-3.5M12 7c0-1.5 1-2 1-3.5M16 7c0-1.5 1-2 1-3.5" /></>),
  sack: mk(<><path d="M9 3h6l-1 3c3 1.5 5 5 5 9a4 4 0 0 1-4 5H9a4 4 0 0 1-4-5c0-4 2-7.5 5-9L9 3Z" /><path d="M8 6h8" /><path d="M12 17v-5M10 14l2-2 2 2" /></>),
  sun: mk(<><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></>),
  mill: mk(<><path d="M3 21V10l6 3v-3l6 3V6h6v15Z" /><path d="M7 17h1M12 17h1M17 17h1M17 10h1" /></>),
  sparkle: mk(<><path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z" /><path d="M19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8L19 16Z" /></>),
  search: mk(<><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3M8 11l2 2 3.5-3.5" /></>),
  box: mk(<><path d="M3 7.5 12 3l9 4.5v9L12 21l-9-4.5v-9Z" /><path d="M3 7.5 12 12l9-4.5M12 12v9" /></>),
  truck: mk(<><path d="M2 6h11v10H2Z" /><path d="M13 9h4l4 3v4h-8" /><circle cx="7" cy="18" r="1.8" /><circle cx="17" cy="18" r="1.8" /></>),
  ship: mk(<><path d="M5 14l1-5h12l1 5Z" /><path d="M12 4v5M9 6h6" /><path d="M2 18c2 1.5 4 1.5 6 0s4-1.5 6 0 4 1.5 6 0" /></>),
  shield: mk(<><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3Z" /><path d="M8.5 12l2.5 2.5 4.5-5" /></>),
  globe: mk(<><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" /></>),
  leaf: mk(<><path d="M5 19c0-9 5-14 15-14 0 10-5 15-14 15" /><path d="M5 19l8-8" /></>),
  arrow: mk(<path d="M5 12h14M13 6l6 6-6 6" />),
  user: mk(<><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4 3.6-7 8-7s8 3 8 7" /></>),
  users: mk(<><circle cx="9" cy="8" r="3.2" /><path d="M3 20v-1a5 5 0 0 1 5-5h2a5 5 0 0 1 5 5v1M17 5a3.2 3.2 0 0 1 0 6M21 20v-1a5 5 0 0 0-3-4.6" /></>),
  calendar: mk(<><path d="M4 6h16v14H4ZM4 10h16M8 3v4M16 3v4" /></>),
  pin: mk(<><path d="M12 21s7-6 7-11a7 7 0 1 0-14 0c0 5 7 11 7 11Z" /><circle cx="12" cy="10" r="2.5" /></>),
  mail: mk(<><path d="M3 6h18v12H3Z" /><path d="M3 7l9 6 9-6" /></>),
  phone: mk(<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />),
  rose: mk(<><path d="M12 12c0-3 2-5 4-5 0 3-1 5-4 5ZM12 12c3 0 5 2 5 4-3 0-5-1-5-4ZM12 12c0 3-2 5-4 5 0-3 1-5 4-5ZM12 12c-3 0-5-2-5-4 3 0 5 1 5 4Z" /><circle cx="12" cy="12" r="9" /></>),
  quote: mk(<path d="M10 7H6a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2c0 2-1 3-3 3v2c4 0 5-3 5-6V7Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2c0 2-1 3-3 3v2c4 0 5-3 5-6V7Z" />, true),
}
