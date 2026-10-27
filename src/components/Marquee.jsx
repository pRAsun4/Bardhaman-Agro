import { Title, Em } from './ui'

const BANNERS = [
  'https://www.bardhamanagroproducts.com/public/images/banner/Ban-4610_1759995049.jpg',
  'https://www.bardhamanagroproducts.com/public/images/banner/Ban-4550_1759995207.jpg',
  'https://www.bardhamanagroproducts.com/public/images/banner/Ban-593_1759995223.jpg',
  'https://www.bardhamanagroproducts.com/public/images/banner/Ban-4168_1759995239.jpg',
]

// One row of banners. The list is tripled and the track slides by exactly one third, so the loop is seamless.
function Row({ items, dir }) {
  const list = [...items, ...items, ...items]
  return (
    <div className="marquee py-3">
      <div className={'marquee-track ' + (dir === 'left' ? 'mq-left' : 'mq-right')}>
        {list.map((src, k) => (
          <figure key={k} className="mq-item shrink-0 mr-5 w-[300px] md:w-[440px] aspect-[2.2/1] rounded-[1.75rem] overflow-hidden bg-marquee-card border border-marquee-border shadow-soft">
            <img src={src} alt="Bardhaman Agro Products" loading="lazy" draggable="false" className="w-full h-full object-cover" />
          </figure>
        ))}
      </div>
    </div>
  )
}

function Marquee() {
  return (
    <section id="moments" className="relative py-20 md:py-28" style={{ background: 'var(--c-marquee-bg)' }}>
      <span aria-hidden="true" className="glow" data-side="right" />
      <span aria-hidden="true" className="glow b" data-side="right" />
      <div className="relative z-10 max-w-6xl mx-auto px-5">
        <Title theme="marquee" n="08" k="Glimpses">Moments from <Em>our world</Em></Title>
      </div>
      <div className="relative z-10">
        <Row items={BANNERS} dir="left" />
        <Row items={[...BANNERS].reverse()} dir="right" />
      </div>
    </section>
  )
}

export default Marquee
