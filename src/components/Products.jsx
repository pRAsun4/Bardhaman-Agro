import { useState } from 'react'
import { Reveal, Title, Em, Sec, Slider } from './ui'
import { Icon } from './icons'

const BASE = 'https://product.bappl.in/public/images/product/'
const PRODUCTS = {
  domestic: [
    'product-1168_1730196883.png', 'product-4795_1688124070.jpg', 'product-4935_1729772782.png',
    'product-9645_1688125599.jpg', 'product-4469_1729771156.png', 'product-8497_1688124947.jpg',
  ].map((f) => BASE + f),
  international: [
    'product-3930_1788718985.png', 'product-4415_1688985489.jpg', 'product-4802_1788719111.png',
  ].map((f) => BASE + f),
}
const TABS = [['domestic', 'Domestic'], ['international', 'International']]

function Products() {
  const [tab, setTab] = useState('domestic')
  const [visible, setVisible] = useState(true)
  const idx = TABS.findIndex(([k]) => k === tab)

  const switchTab = (k) => {
    if (k === tab) return
    setVisible(false)
    setTimeout(() => { setTab(k); setVisible(true) }, 250)
  }

  return (
    <Sec theme="products" id="products" glow="left">
      <Title theme="products" n="03" k="Our products">Rice for <Em>every table</Em></Title>

      <Reveal className="flex justify-center mb-10">
        <div className="relative flex rounded-full bg-products-card border border-products-border p-1.5">
          <span className="absolute top-1.5 bottom-1.5 left-1.5 w-36 rounded-full bg-products-fill transition-transform duration-500 ease-out" style={{ transform: `translateX(${idx * 100}%)` }} />
          {TABS.map(([k, label]) => (
            <button key={k} onClick={() => switchTab(k)}
              className={'relative z-10 w-36 py-2.5 text-sm font-medium transition-colors duration-300 ' + (tab === k ? 'text-products-onfill' : 'text-products-text')}>
              {label}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="transition-opacity duration-300" style={{ opacity: visible ? 1 : 0 }}>
        <Slider theme="products" key={tab}>
          {PRODUCTS[tab].map((src, k) => (
            <a key={src} href="#contact" className="group block w-64 rounded-[2rem] bg-product-card border border-product-border p-4 transition duration-500 hover:-translate-y-2 hover:shadow-lift">
              <div className="aspect-square rounded-3xl bg-product-tile overflow-hidden grid place-items-center">
                <img src={src} loading="lazy" draggable="false" alt={`${tab} rice product ${k + 1}`}
                  className="w-full h-full object-contain p-2 transition duration-700 group-hover:scale-110 group-hover:-rotate-2" />
              </div>
              <div className="flex items-center justify-between px-1 pt-4 pb-1">
                <span className="text-sm text-product-text">Enquire now</span>
                <span className="w-9 h-9 rounded-full bg-product-btn text-product-btntext grid place-items-center transition group-hover:translate-x-1">
                  <Icon.arrow className="w-4 h-4" />
                </span>
              </div>
            </a>
          ))}
        </Slider>
      </div>
    </Sec>
  )
}

export default Products
