import { Reveal, Title, Em, Sec } from './ui'
import { Icon } from './icons'
import Logo from '../assets/bppl-logo.png'


const FACTS = [['grain', '33+ varieties'], ['globe', '9 countries'], ['shield', 'ISO certified']]

function Welcome() {
  return (
    <Sec theme="welcome" id="about" glow="left" className="grid md:grid-cols-[1fr_1.15fr] gap-16 items-center">
      <Reveal from="left">
        <div className="relative mx-auto max-w-sm">
          <div className="relative aspect-[4/5] rounded-t-full rounded-b-[2rem] bg-welcome-tile border border-welcome-border overflow-hidden grid place-items-center">
            <span className="absolute w-[130%] aspect-square rounded-full border border-welcome-border" />
            <span className="absolute w-[85%] aspect-square rounded-full border border-welcome-border" />
            <img src={Logo} alt="Logo" className="relative w-40 h-50 text-welcome-accent" strokeWidth={1} />
          </div>
          <span className="absolute -bottom-7 -right-5 w-32 h-32 rounded-full bg-welcome-fill text-welcome-onfill grid place-items-center text-center bob">
            <span><b className="font-display text-4xl font-medium block leading-none">22+</b><i className="text-[11px] tracking-[.2em] uppercase not-italic">years</i></span>
          </span>
          <span className="absolute top-12 -left-6 w-14 h-14 rounded-full bg-welcome-card border border-welcome-border text-welcome-accent grid place-items-center shadow-soft bob" style={{ animationDelay: '1.2s' }}>
            <Icon.grain className="w-7 h-7" />
          </span>
        </div>
      </Reveal>

      <div>
        <Title theme="welcome" n="01" k="About us" align="left" className="mb-6">
          Welcome to <Em>Bardhaman Agro</Em> Products India Private Limited
        </Title>
        <Reveal delay={120}>
          <p className="text-welcome-text leading-relaxed mb-7 text-[17px]">
            BAPPL is a leading name in rice manufacturing, founded in 2001 with a simple goal: bring the best rice to every home. From a small mill in fertile farmland, we have grown into a trusted brand serving India, UAE, Oman, Saudi Arabia, Kuwait, Bahrain and Qatar.
          </p>
          <div className="flex flex-wrap gap-3 mb-9">
            {FACTS.map(([ic, t]) => {
              const I = Icon[ic]
              return (
                <span key={t} className="flex items-center gap-2 rounded-full bg-welcome-card border border-welcome-border px-4 py-2 text-sm text-welcome-title">
                  <I className="w-5 h-5 text-welcome-accent" />{t}
                </span>
              )
            })}
          </div>
          <a href="#" className="btn bg-welcome-btn text-welcome-btntext">Read our story <Icon.arrow className="w-4 h-4" /></a>
        </Reveal>
      </div>
    </Sec>
  )
}

export default Welcome
