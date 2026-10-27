import { Reveal, Title, Em, Sec } from './ui'
import { Icon } from './icons'

const WHY = [
  ['shield', 'Quality assurance', 'Hygiene and safety standards for building and equipment, maintained since 2009.'],
  ['truck', 'Prompt delivery', 'Orders reach your doorstep fast, using the quickest mode for your location.'],
  ['globe', 'Globally renowned', 'Integrity, quality, ethics and environmental care guide every shipment.'],
]
const BLOB = { borderRadius: '58% 42% 55% 45% / 50% 55% 45% 50%' }

function Why() {
  return (
    <Sec theme="why" glow="right">
      <Title theme="why" n="02" k="Why choose us">Three reasons to trust <Em>every grain</Em></Title>
      <div className="grid md:grid-cols-3 gap-6 md:items-start">
        {WHY.map(([ic, t, d], k) => {
          const I = Icon[ic]
          return (
            <Reveal key={t} delay={k * 120} className={k === 1 ? 'md:mt-14' : ''}>
              <article className="group relative overflow-hidden rounded-[2.2rem] bg-why-card border border-why-border p-8 transition duration-500 hover:-translate-y-2 hover:shadow-lift">
                <span className="absolute -right-2 -top-5 font-display text-[7.5rem] leading-none text-why-numeral select-none">0{k + 1}</span>
                <div style={BLOB} className="relative w-16 h-16 mb-7 grid place-items-center bg-why-tile text-why-accent transition duration-500 group-hover:bg-why-fill group-hover:text-why-onfill group-hover:-rotate-12">
                  <I className="w-8 h-8" />
                </div>
                <h3 className="relative font-display text-2xl text-why-title mb-3">{t}</h3>
                <p className="relative text-why-text leading-relaxed mb-6">{d}</p>
                <a href="#" className="relative inline-flex items-center gap-2 text-sm font-medium text-why-accent">Learn more <Icon.arrow className="w-4 h-4 transition group-hover:translate-x-1.5" /></a>
              </article>
            </Reveal>
          )
        })}
      </div>
    </Sec>
  )
}

export default Why
