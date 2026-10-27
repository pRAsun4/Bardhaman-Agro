import { Reveal, Title, Em, Sec, Counter } from './ui'
import { Icon } from './icons'

const NUM = [
  ['globe', 9, '', 'Countries served'],
  ['grain', 33, '+', 'Rice varieties'],
  ['mill', 22, '+', 'Years manufacturing'],
  ['ship', 22, '+', 'Years trading'],
  ['box', 250, '+', 'Containers a year'],
  ['sack', 162650, ' MT', 'Annual production'],
]

function Numbers() {
  return (
    <Sec theme="numbers" glow="left" className="!py-14 md:!py-20">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2.5rem] bg-numbers-bg border border-numbers-border px-5 md:px-12 py-14 md:py-20"
          style={{ backgroundImage: 'radial-gradient(circle at 15% 0%, var(--c-glow-a), transparent 55%)' }}>
          <svg className="absolute inset-0 w-full h-full text-numbers-pattern" aria-hidden="true">
            <defs>
              <pattern id="paddy" width="56" height="56" patternUnits="userSpaceOnUse">
                <path d="M28 50V24M28 24c-4-1-6-4-6-8 4 .5 6 3 6 8ZM28 24c4-1 6-4 6-8-4 .5-6 3-6 8ZM28 33c-4-1-6-4-6-8M28 33c4-1 6-4 6-8" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#paddy)" />
          </svg>

          <div className="relative">
            <Title theme="numbers" n="05" k="By the numbers">Bardhaman Agro <Em>in numbers</Em></Title>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-px bg-numbers-line rounded-3xl overflow-hidden border border-numbers-line">
              {NUM.map(([ic, to, sx, label]) => {
                const I = Icon[ic]
                return (
                  <div key={label} className="group bg-numbers-cell px-4 py-9 md:py-12 text-center transition duration-500 hover:bg-numbers-bg">
                    <I className="w-7 h-7 mx-auto mb-4 text-numbers-text transition duration-500 group-hover:-translate-y-1 group-hover:text-numbers-num" />
                    <div className="font-display text-4xl md:text-6xl font-medium text-numbers-num leading-none"><Counter to={to} suffix={sx} /></div>
                    <p className="mt-3 text-[11px] md:text-xs tracking-[.2em] uppercase text-numbers-text">{label}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </Reveal>
    </Sec>
  )
}

export default Numbers
