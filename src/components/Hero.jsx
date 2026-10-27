import { useState, useEffect } from 'react'
import { Icon } from './icons'
import Logo from '../assets/bppl-logo.png'


const BANNERS = [
  'https://www.bardhamanagroproducts.com/public/images/banner/Ban-4610_1759995049.jpg',
  'https://www.bardhamanagroproducts.com/public/images/banner/Ban-4550_1759995207.jpg',
  'https://www.bardhamanagroproducts.com/public/images/banner/Ban-593_1759995223.jpg',
  'https://www.bardhamanagroproducts.com/public/images/banner/Ban-4168_1759995239.jpg',
]

function Hero() {
  const [i, setI] = useState(0)
  const [paused, setPaused] = useState(false)
  const n = BANNERS.length
  const go = (d) => setI((x) => (x + d + n) % n)

  useEffect(() => {
    if (paused) return
    const t = setInterval(() => setI((x) => (x + 1) % n), 5000)
    return () => clearInterval(t)
  }, [paused, n])

  return (
    <section id="top" className="relative px-3 pt-24 pb-14">
      <span aria-hidden="true" className="glow" data-side="right" />
      <div className="relative z-10 max-w-6xl mx-auto">
        <div
          className="relative rounded-[2.5rem] overflow-hidden bg-hero-bg h-[240px] sm:h-[360px] md:h-[520px]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {BANNERS.map((src, k) => (
            <img key={src} src={src} alt={`Bardhaman Agro Products banner ${k + 1}`} draggable="false"
              loading={k === 0 ? 'eager' : 'lazy'}
              className="absolute inset-0 w-full h-full object-cover transition-all duration-[1400ms] ease-out"
              style={{ opacity: k === i ? 1 : 0, transform: k === i ? 'scale(1)' : 'scale(1.07)' }} />
          ))}

          <div className="absolute left-5 bottom-5 glass bg-hero-card border-hero-border rounded-full px-4 py-2 text-sm font-display text-hero-btntext">
            0{i + 1} <span className="opacity-60">/ 0{n}</span>
          </div>

          <div className="absolute right-5 bottom-5 hidden sm:flex gap-2">
            {[-1, 1].map((d) => (
              <button key={d} aria-label={d < 0 ? 'Previous slide' : 'Next slide'} onClick={() => go(d)}
                className="glass bg-hero-btn border-hero-border text-hero-btntext w-11 h-11 rounded-full grid place-items-center hover:scale-110 transition">
                <Icon.arrow className={'w-5 h-5 ' + (d < 0 ? 'rotate-180' : '')} />
              </button>
            ))}
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 glass bg-hero-card border-hero-border rounded-full px-3 py-2 flex gap-2">
            {BANNERS.map((_, k) => (
              <button key={k} aria-label={`Go to slide ${k + 1}`} onClick={() => setI(k)}
                className="h-2 rounded-full transition-all bg-hero-dot" style={{ width: k === i ? 26 : 8, opacity: k === i ? 1 : 0.55 }} />
            ))}
          </div>
        </div>

        {/* rotating seal */}
        <div className="absolute -bottom-9 right-5 sm:right-36 w-28 h-28 md:w-32 md:h-32 rounded-full bg-hero-badge text-hero-badgetext grid place-items-center shadow-lift">
          <svg viewBox="0 0 120 120" className="absolute inset-0 animate-[spin_20s_linear_infinite]" aria-hidden="true">
            <defs><path id="seal" d="M60 60m-45 0a45 45 0 1 1 90 0a45 45 0 1 1-90 0" /></defs>
            <text fontSize="10" fill="currentColor" letterSpacing="2"><textPath href="#seal" textLength="280" lengthAdjust="spacing">ISO 9001:2015 • PREMIUM RICE •</textPath></text>
          </svg>
          <img src={Logo} alt="Logo" className="w-9 h-12" />
        </div>
      </div>
    </section>
  )
}

export default Hero
