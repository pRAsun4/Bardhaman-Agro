import { useState, useEffect } from 'react'
import { Reveal, Title, Em, Sec } from './ui'
import { Icon } from './icons'

const BASE = 'https://www.bardhamanagroproducts.com/public/images/gallery/'
const IMAGES = [
  'gallery-5864_1716016831.jpeg',
  'gallery-3865_1688215779.jpg',
  'gallery-7570_1687885900.jpg',
  'gallery-9462_1687885494.jpg',
  'gallery-9209_1687873006.JPG',
  'gallery-3985_1687872011.JPG',
].map((f) => BASE + f)

// bento layout: first tile is large, fourth is wide
const SPANS = ['md:col-span-2 md:row-span-2', '', '', 'md:col-span-2', '', '']

function Gallery() {
  const [o, setO] = useState(null)
  const n = IMAGES.length

  // keyboard: Esc closes, arrows move between photos
  useEffect(() => {
    if (o === null) return
    const f = (e) => {
      if (e.key === 'Escape') setO(null)
      if (e.key === 'ArrowRight') setO((x) => (x + 1) % n)
      if (e.key === 'ArrowLeft') setO((x) => (x + n - 1) % n)
    }
    addEventListener('keydown', f)
    return () => removeEventListener('keydown', f)
  }, [o, n])

  return (
    <Sec theme="gallery" id="gallery" glow="right">
      <Title theme="gallery" n="12" k="Gallery">Inside our <Em>mills and fields</Em></Title>

      <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[160px] md:auto-rows-[190px] gap-4">
        {IMAGES.map((src, k) => (
          <Reveal key={src} delay={k * 70} from="zoom" className={SPANS[k]}>
            <button
              onClick={() => setO(k)}
              aria-label={`Open photo ${k + 1}`}
              className="group relative w-full h-full overflow-hidden rounded-[2rem] bg-gallery-tile border border-gallery-border"
            >
              <img
                src={src}
                alt={`Bardhaman Agro Products gallery photo ${k + 1}`}
                loading="lazy"
                draggable="false"
                className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
              />
              <span className="absolute inset-0 bg-gallery-overlay opacity-0 transition duration-500 group-hover:opacity-30" />
              <span className="absolute left-4 bottom-4 flex items-center gap-2 translate-y-3 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100 rounded-full bg-gallery-card border border-gallery-border pl-3.5 pr-1.5 py-1.5 text-xs text-gallery-title">
                View
                <span className="w-6 h-6 rounded-full bg-gallery-accent text-gallery-card grid place-items-center">
                  <Icon.arrow className="w-3.5 h-3.5 -rotate-45" />
                </span>
              </span>
            </button>
          </Reveal>
        ))}
      </div>

      {o !== null && (
        <div onClick={() => setO(null)} className="fixed inset-0 z-[70] grid place-items-center p-4 md:p-8 bg-gallery-overlay backdrop-blur-sm">
          <div onClick={(e) => e.stopPropagation()} className="fade-in w-full max-w-4xl rounded-[2rem] bg-gallery-card border border-gallery-border p-3 md:p-4">
            <div className="rounded-[1.5rem] overflow-hidden bg-gallery-tile">
              <img key={o} src={IMAGES[o]} alt={`Bardhaman Agro Products gallery photo ${o + 1}`} className="fade-in w-full max-h-[70vh] object-contain" />
            </div>
            <div className="flex items-center justify-between gap-3 pt-3 md:pt-4 px-1">
              <span className="font-display text-gallery-title">{o + 1} <span className="opacity-50">/ {n}</span></span>
              <div className="flex gap-2">
                <button aria-label="Previous photo" onClick={() => setO((o + n - 1) % n)} className="w-11 h-11 rounded-full border border-gallery-border text-gallery-accent grid place-items-center hover:bg-gallery-tile"><Icon.arrow className="w-5 h-5 rotate-180" /></button>
                <button aria-label="Next photo" onClick={() => setO((o + 1) % n)} className="w-11 h-11 rounded-full border border-gallery-border text-gallery-accent grid place-items-center hover:bg-gallery-tile"><Icon.arrow className="w-5 h-5" /></button>
                <button aria-label="Close" onClick={() => setO(null)} className="px-5 h-11 rounded-full bg-gallery-accent text-gallery-card text-sm">Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Sec>
  )
}

export default Gallery