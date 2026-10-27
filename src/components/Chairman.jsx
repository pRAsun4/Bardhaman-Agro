import { Reveal, Sec } from './ui'
import { Icon } from './icons'

function Chairman() {
  return (
    <Sec theme="chairman" id="chairman" glow="right" className="!py-14 md:!py-20">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2.5rem] bg-chairman-card border border-chairman-border p-8 md:p-14 grid md:grid-cols-[250px_1fr] gap-10 items-center">
          <span className="pointer-events-none absolute inset-3 rounded-[2rem] border border-chairman-border" />
          <Icon.quote className="absolute right-10 top-8 w-24 h-24 text-chairman-quote" />
          <div className="relative w-48 h-60 mx-auto rounded-t-full rounded-b-3xl bg-chairman-tile border border-chairman-border grid place-items-center text-chairman-accent overflow-hidden">
            <img src="https://www.bardhamanagroproducts.com/public/images/director-desk/director-desk-8753_1688206676.jpg" alt="chairman" className="w-full h-full object-cover" strokeWidth={1} />
          </div>
          <div className="relative">
            <p className="flex items-center gap-3 text-xs tracking-[.28em] uppercase text-chairman-eyebrow mb-5"><span className="h-px w-10 bg-current" />From the chairman</p>
            <blockquote className="font-display italic font-light text-2xl md:text-3xl leading-snug text-chairman-title mb-7">
              “Our website is a gateway to premium rice production and our commitment to delivering excellence in every grain. We promote sustainable farming and responsible production.”
            </blockquote>
            <p className="font-display text-xl text-chairman-title">Mr Sekh Rabiul Haque</p>
            <p className="text-sm text-chairman-text">Chairman &amp; Managing Director</p>
          </div>
        </div>
      </Reveal>
    </Sec>
  )
}

export default Chairman
