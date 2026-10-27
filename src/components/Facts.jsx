import { Reveal, Title, Em, Sec, Counter } from './ui'
import { Icon } from './icons'

const FACTS = [
  ['calendar', 2001, '', 'Year of establishment', false],
  ['users', 300, '+', 'Employees', true],
  ['mill', 3, '', 'Production units', true],
]

function Facts() {
  return (
    <Sec theme="facts" glow="left">
      <Title theme="facts" n="11" k="Key facts">At a <Em>glance</Em></Title>
      <div className="grid md:grid-cols-3 md:divide-x divide-facts-line">
        {FACTS.map(([ic, to, sx, label, sep], k) => {
          const I = Icon[ic]
          return (
            <Reveal key={label} delay={k * 120}>
              <div className="group text-center px-6 py-8">
                <div className="w-16 h-16 mx-auto mb-5 rounded-full border border-facts-line bg-facts-card text-facts-accent grid place-items-center transition duration-500 group-hover:bg-facts-fill group-hover:text-facts-onfill group-hover:-translate-y-1.5">
                  <I className="w-7 h-7" />
                </div>
                <div className="font-display text-6xl md:text-7xl font-medium text-facts-num leading-none"><Counter to={to} suffix={sx} sep={sep} /></div>
                <p className="mt-3 text-xs tracking-[.22em] uppercase text-facts-text">{label}</p>
              </div>
            </Reveal>
          )
        })}
      </div>
    </Sec>
  )
}

export default Facts
