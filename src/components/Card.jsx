import { Icon } from './icons'

// Product card used by "Most popular"
function Card({ p }) {
  return (
    <div className="group w-64 rounded-[2rem] bg-product-card border border-product-border p-5 transition duration-500 hover:-translate-y-2 hover:shadow-lift">
      <div className="h-40 rounded-3xl bg-product-tile grid place-items-center text-product-btn transition duration-500 group-hover:scale-[1.03]">
        <Icon.bowl className="w-16 h-16 transition duration-500 group-hover:-rotate-6 group-hover:scale-110" strokeWidth={1.2} />
      </div>
      <h3 className="font-display text-xl text-product-title mt-5 leading-snug">{p[0]}</h3>
      <p className="text-xs tracking-wide uppercase text-product-text mb-5 mt-1">{p[1]}</p>
      <a href="#contact" className="btn bg-product-btn text-product-btntext !py-2 !px-5 text-xs">Enquire now <Icon.arrow className="w-3.5 h-3.5" /></a>
    </div>
  )
}

export default Card
