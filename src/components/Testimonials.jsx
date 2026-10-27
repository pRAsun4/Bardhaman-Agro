import { useState, useEffect } from 'react'
import { Reveal, Title, Em, Sec } from './ui'
import { Icon } from './icons'

const TS = [
  ['I purchased a large quantity of rice from BAPPL. The ordering was smooth, delivery prompt, and the quality is the highest.', 'P.R Chandanam', 'Shop owner'],
  ['The rice consistently earns compliments from my catering clients. Professional and dependable.', 'Maneesh P Chandran', 'Catering owner'],
  ['Excellent flavour and aroma. It exceeded my expectations.', 'Rincy K', 'Homemaker'],
]

function Testimonials() {
  const [i, setI] = useState(0)
  const [hold, setHold] = useState(false)
  const n = TS.length
  useEffect(() => {
    if (hold) return
    const t = setInterval(() => setI((x) => (x + 1) % n), 6500)
    return () => clearInterval(t)
  }, [hold, n])
  const [text, name, role] = TS[i]

  return (
    <Sec theme="testimonials" glow="left" band>
      <Title theme="testimonials" n="09" k="Testimonials">Words from <Em>our customers</Em></Title>
      <Reveal from="zoom">
        <div className="relative max-w-3xl mx-auto" onMouseEnter={() => setHold(true)} onMouseLeave={() => setHold(false)}>
          <Icon.stalk className="hidden md:block absolute -left-24 top-8 w-28 h-28 text-testimonials-ornament -rotate-12" strokeWidth={1} />
          <Icon.stalk className="hidden md:block absolute -right-24 top-8 w-28 h-28 text-testimonials-ornament rotate-12" strokeWidth={1} />
          <div className="relative rounded-[2.5rem] bg-testimonials-card border border-testimonials-border px-8 md:px-16 pt-16 pb-10 text-center">
            <span className="pointer-events-none absolute inset-3 rounded-[2.1rem] border border-testimonials-border" />
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-testimonials-fill text-testimonials-onfill grid place-items-center border-4 border-testimonials-card">
              <Icon.quote className="w-7 h-7" />
            </span>
            <div className="flex justify-center gap-1.5 mb-6 text-testimonials-accent">
              {[0, 1, 2, 3, 4].map((s) => <Icon.grain key={s} className="w-5 h-5" strokeWidth={1.4} />)}
            </div>
            <div key={i} className="fade-in">
              <p className="font-display italic font-light text-2xl md:text-3xl leading-snug text-testimonials-title mb-8">“{text}”</p>
              <div className="mx-auto mb-4 h-px w-16 bg-testimonials-line" />
              <p className="font-display text-lg text-testimonials-title">{name}</p>
              <p className="text-xs tracking-[.22em] uppercase text-testimonials-text">{role}</p>
            </div>
            <div className="mt-8 flex items-center justify-center gap-5">
              <button aria-label="Previous" onClick={() => setI((i + n - 1) % n)} className="w-10 h-10 rounded-full border border-testimonials-line text-testimonials-accent grid place-items-center transition hover:bg-testimonials-fill hover:text-testimonials-onfill"><Icon.arrow className="w-4 h-4 rotate-180" /></button>
              <div className="flex gap-2">
                {TS.map((_, k) => <button key={k} aria-label={`Testimonial ${k + 1}`} onClick={() => setI(k)} className="h-2 rounded-full bg-testimonials-fill transition-all" style={{ width: k === i ? 26 : 8, opacity: k === i ? 1 : 0.3 }} />)}
              </div>
              <button aria-label="Next" onClick={() => setI((i + 1) % n)} className="w-10 h-10 rounded-full border border-testimonials-line text-testimonials-accent grid place-items-center transition hover:bg-testimonials-fill hover:text-testimonials-onfill"><Icon.arrow className="w-4 h-4" /></button>
            </div>
          </div>
        </div>
      </Reveal>
    </Sec>
  )
}

export default Testimonials
