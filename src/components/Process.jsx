import { useState, useEffect, useRef } from 'react'
import { Reveal, Title, Em, Sec } from './ui'
import { Icon } from './icons'

const STEPS = [
  ['stalk', 'Paddy sourcing', 'Paddy is sourced from trusted local farmers and checked the moment it arrives.'],
  ['sun', 'Drying', 'Sun and mechanical drying bring the moisture to exactly the right level.'],
  ['mill', 'Milling', 'The husk is removed and grains are milled gently to protect their shape.'],
  ['sparkle', 'Fine cleaning', 'Sorters and polishers remove broken grains and any impurities.'],
  ['search', 'Quality check', 'Samples are tested for length, aroma and purity before anything is packed.'],
  ['sack', 'Packing', 'Rice is weighed and sealed into clean, clearly labelled bags.'],
  ['truck', 'Dispatch', 'Orders travel by road and sea to customers at home and abroad.'],
]
const BLOB = { borderRadius: '58% 42% 55% 45% / 50% 55% 45% 50%' }

function Process() {
  const [a, setA] = useState(0)
  const [auto, setAuto] = useState(true)
  const [inView, setInView] = useState(false)
  const ref = useRef()
  const n = STEPS.length
  const pct = (a / (n - 1)) * 100

  useEffect(() => {
    const o = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.35 })
    o.observe(ref.current)
    return () => o.disconnect()
  }, [])
  // plays through the steps by itself until the visitor clicks one
  useEffect(() => {
    if (!auto || !inView) return
    const t = setInterval(() => setA((x) => (x + 1) % n), 2800)
    return () => clearInterval(t)
  }, [auto, inView, n])

  const pick = (k) => { setA((k + n) % n); setAuto(false) }
  const node = (k) =>
    'relative w-16 h-16 rounded-full border-2 grid place-items-center transition-all duration-500 ' +
    (k < a ? 'bg-process-fill text-process-onfill border-process-fill'
      : k === a ? 'bg-process-card text-process-accent border-process-fill scale-110 shadow-lift'
      : 'bg-process-card text-process-accent border-process-line hover:border-process-fill')
  const Big = Icon[STEPS[a][0]]

  const Btn = ({ k }) => {
    const I = Icon[STEPS[k][0]]
    return (
      <button onClick={() => pick(k)} aria-label={STEPS[k][1]} className={node(k)}>
        {k === a && <span className="absolute inset-0 rounded-full bg-process-fill animate-ping opacity-25" />}
        <I className="relative w-7 h-7" />
        <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-process-fill text-process-onfill text-[11px] grid place-items-center">{k + 1}</span>
      </button>
    )
  }

  return (
    <Sec theme="process" id="process" glow="right">
      <div ref={ref}>
        <Title theme="process" n="06" k="Our process">From paddy to <Em>pantry</Em></Title>

        {/* desktop: horizontal chain */}
        <Reveal className="hidden md:block">
          <div className="relative">
            <div className="absolute top-8 h-1 rounded-full bg-process-line" style={{ left: 'calc(100% / 14)', right: 'calc(100% / 14)' }}>
              <div className="h-full rounded-full bg-process-linefill transition-all duration-700 ease-out" style={{ width: pct + '%' }} />
            </div>
            <ol className="relative grid grid-cols-7">
              {STEPS.map(([, t], k) => (
                <li key={t} className="flex flex-col items-center text-center">
                  <Btn k={k} />
                  <p className={'mt-4 text-sm transition-colors duration-500 ' + (k === a ? 'text-process-title font-medium' : 'text-process-text')}>{t}</p>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>

        {/* mobile: vertical chain */}
        <div className="relative md:hidden">
          <div className="absolute left-8 -translate-x-1/2 top-10 w-1 rounded-full bg-process-line" style={{ height: (n - 1) * 80 }}>
            <div className="w-full rounded-full bg-process-linefill transition-all duration-700" style={{ height: a * 80 }} />
          </div>
          <ol className="relative">
            {STEPS.map(([, t], k) => (
              <li key={t} className="h-20 flex items-center gap-5">
                <Btn k={k} />
                <p className={'transition-colors duration-500 ' + (k === a ? 'text-process-title font-medium' : 'text-process-text')}>{t}</p>
              </li>
            ))}
          </ol>
        </div>

        {/* detail card */}
        <div key={a} className="fade-in mt-14 mx-auto max-w-2xl rounded-[2rem] bg-process-card border border-process-border p-6 md:p-8 flex items-center gap-6">
          <div style={BLOB} className="shrink-0 w-20 h-20 grid place-items-center bg-process-tile text-process-accent"><Big className="w-10 h-10" /></div>
          <div className="flex-1">
            <p className="text-xs tracking-[.25em] uppercase text-process-eyebrow mb-1">Step {a + 1} of {n}</p>
            <h3 className="font-display text-2xl text-process-title">{STEPS[a][1]}</h3>
            <p className="text-process-text mt-1">{STEPS[a][2]}</p>
          </div>
          <div className="hidden sm:flex flex-col gap-2">
            {[-1, 1].map((d) => (
              <button key={d} aria-label={d < 0 ? 'Previous step' : 'Next step'} onClick={() => pick(a + d)}
                className="w-10 h-10 rounded-full border border-process-line text-process-accent grid place-items-center transition hover:bg-process-fill hover:text-process-onfill">
                <Icon.arrow className={'w-4 h-4 ' + (d < 0 ? '-rotate-90' : 'rotate-90')} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </Sec>
  )
}

export default Process
