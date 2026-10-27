import { useState, useEffect, useRef } from 'react'
import { Icon } from './icons'

// Fades/slides children in when they scroll into view. from: up | left | right | zoom
export function Reveal({ children, className = '', delay = 0, from = 'up' }) {
  const r = useRef()
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { r.current.classList.add('in'); o.disconnect() }
    }, { threshold: 0.12 })
    o.observe(r.current)
    return () => o.disconnect()
  }, [])
  return <div ref={r} className={`rv rv-${from} ${className}`} style={{ transitionDelay: delay + 'ms' }}>{children}</div>
}

// Italic accent word with a hand-drawn underline that draws itself
export function Em({ children }) {
  return (
    <span className="relative inline-block italic font-light" style={{ color: 'var(--c-primary)' }}>
      {children}
      <svg aria-hidden="true" viewBox="0 0 200 12" preserveAspectRatio="none" className="absolute left-0 -bottom-1.5 w-full h-2.5">
        <path className="draw" d="M2 8c30-6 60-6 96-2s70 3 100-2" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    </span>
  )
}

export function Title({ theme, n, k, align = 'center', className = 'mb-12', children }) {
  const c = align === 'center'
  return (
    <Reveal className={className + (c ? ' text-center' : '')}>
      <p className={'flex items-center gap-3 text-xs tracking-[.28em] uppercase mb-4 ' + (c ? 'justify-center' : '')} style={{ color: `var(--c-${theme}-eyebrow)` }}>
        {n && <span className="font-display text-base tracking-normal">{n}</span>}
        <span className="h-px w-10 bg-current" />
        {k}
      </p>
      <h2 className="font-display text-4xl md:text-5xl font-medium leading-[1.12]" style={{ color: `var(--c-${theme}-title)` }}>{children}</h2>
    </Reveal>
  )
}

// Section wrapper. Every section gets the same two soft radial glows, alternating sides.
export function Sec({ id, theme, glow = 'left', band = false, children, className = '' }) {
  return (
    <section id={id} className={'relative ' + (band ? 'border-y' : '')} style={{ background: `var(--c-${theme}-bg)`, borderColor: `var(--c-${theme}-border)` }}>
      <span aria-hidden="true" className="glow" data-side={glow} />
      <span aria-hidden="true" className="glow b" data-side={glow} />
      <div className={'relative z-10 max-w-6xl mx-auto px-5 py-20 md:py-28 ' + className}>{children}</div>
    </section>
  )
}

// Counts from 0 to `to` when scrolled into view
export function Counter({ to, suffix = '', dur = 1900, sep = true }) {
  const [v, setV] = useState(0)
  const r = useRef()
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      o.disconnect()
      const t0 = performance.now()
      const f = (t) => {
        const p = Math.min((t - t0) / dur, 1)
        setV(Math.round(to * (1 - Math.pow(1 - p, 3))))
        if (p < 1) requestAnimationFrame(f)
      }
      requestAnimationFrame(f)
    }, { threshold: 0.4 })
    o.observe(r.current)
    return () => o.disconnect()
  }, [])
  return <span ref={r}>{sep ? v.toLocaleString('en-IN') : v}{suffix}</span>
}

// Snap slider: arrows, mouse-drag and touch swipe
export function Slider({ theme, children }) {
  const r = useRef()
  const drag = useRef(null)
  const moved = useRef(false)
  const go = (d) => r.current.scrollBy({ left: d * 300, behavior: 'smooth' })
  const end = () => { drag.current = null; r.current.classList.remove('dragging') }
  const st = { background: `var(--c-${theme}-card)`, borderColor: `var(--c-${theme}-border)`, color: `var(--c-${theme}-accent)` }
  return (
    <div className="relative">
      <div
        ref={r}
        className="snap cursor-grab"
        onMouseDown={(e) => { drag.current = { x: e.pageX, l: r.current.scrollLeft }; moved.current = false }}
        onMouseMove={(e) => {
          if (!drag.current) return
          const dx = e.pageX - drag.current.x
          if (Math.abs(dx) > 5) { moved.current = true; r.current.classList.add('dragging') }
          r.current.scrollLeft = drag.current.l - dx
        }}
        onMouseUp={end}
        onMouseLeave={end}
        onClickCapture={(e) => { if (moved.current) { e.preventDefault(); e.stopPropagation() } }}
      >
        {children}
      </div>
      <div className="flex justify-center gap-3 mt-3">
        {[-1, 1].map((d) => (
          <button key={d} aria-label={d < 0 ? 'Previous' : 'Next'} onClick={() => go(d)} style={st}
            className="glass w-12 h-12 rounded-full grid place-items-center hover:scale-110 transition">
            <Icon.arrow className={'w-5 h-5 ' + (d < 0 ? 'rotate-180' : '')} />
          </button>
        ))}
      </div>
    </div>
  )
}
