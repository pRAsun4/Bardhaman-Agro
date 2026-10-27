import { Reveal, Title, Em, Sec } from './ui'
import { Icon } from './icons'

const NEWS = [
  ['17 Sep 2023', 'Blood donation camp', 'Our team organised a community blood donation camp.', 'users', 'md:col-span-2'],
  ['18 Aug 2023', 'Cultural heritage of rice as Bengal’s beloved staple', 'Bengal grows a huge share of India’s rice, and Bengalis proudly call themselves rice-lovers.', 'leaf', 'md:col-span-3'],
]

function News() {
  return (
    <Sec theme="news" id="news" glow="right">
      <Title theme="news" n="10" k="News and articles">Latest from <Em>BAPPL</Em></Title>
      <div className="grid md:grid-cols-5 gap-6">
        {NEWS.map(([date, t, d, ic, span], k) => {
          const I = Icon[ic]
          return (
            <Reveal key={t} delay={k * 120} className={span}>
              <article className="group h-full overflow-hidden rounded-[2.2rem] bg-news-card border border-news-border transition duration-500 hover:-translate-y-1.5 hover:shadow-lift">
                <div className="relative h-48 bg-news-tile grid place-items-center text-news-accent overflow-hidden">
                  <span className="absolute w-72 aspect-square rounded-full border border-news-border -right-16 -top-24" />
                  <I className="w-20 h-20 transition duration-700 group-hover:scale-110 group-hover:rotate-6" strokeWidth={1.1} />
                  <span className="absolute left-5 top-5 rounded-full bg-news-card border border-news-border px-3.5 py-1 text-xs text-news-title">{date}</span>
                </div>
                <div className="p-7">
                  <h3 className="font-display text-2xl text-news-title leading-snug mb-3">{t}</h3>
                  <p className="text-news-text mb-5">{d}</p>
                  <a href="#" className="inline-flex items-center gap-2 text-sm font-medium text-news-accent">View details <Icon.arrow className="w-4 h-4 transition group-hover:translate-x-1.5" /></a>
                </div>
              </article>
            </Reveal>
          )
        })}
      </div>
    </Sec>
  )
}

export default News
