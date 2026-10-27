import { Reveal, Title, Em, Sec } from './ui'
import { Icon } from './icons'

const BR = ['Rose Brand', 'Double Rose', 'Three Rose', 'Four Rose', 'Seven Rose', 'Three Maan', 'Basumoti Rice', 'Bardhaman Rose']

function Brands() {
  return (
    <Sec theme="brands" glow="left">
      <Title theme="brands" n="13" k="Our reputed brands">Brands families <Em>trust</Em></Title>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
        {BR.map((b, k) => (
          <Reveal key={b} delay={(k % 4) * 80}>
            <div className="group relative overflow-hidden rounded-[2rem] bg-brands-card border border-brands-border p-7 text-center transition duration-500 hover:-translate-y-2 hover:shadow-lift hover:border-brands-accent">
              <span className="absolute inset-x-0 -bottom-16 h-32 rounded-full bg-brands-tile blur-2xl opacity-0 transition duration-500 group-hover:opacity-100" />
              <div className="relative w-20 h-20 mx-auto mb-4 rounded-full bg-brands-tile text-brands-accent grid place-items-center">
                <Icon.rose className="w-11 h-11 transition duration-700 group-hover:rotate-[90deg]" strokeWidth={1.3} />
              </div>
              <p className="relative font-display text-lg text-brands-title">{b}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Sec>
  )
}

export default Brands
