import { useState, useEffect } from 'react'
import { Icon } from './icons'
import { NAV, ids } from './nav'
import Logo from '../assets/bppl-logo.png'

function Header() {
  const [hide, setHide] = useState(false)
  const [open, setOpen] = useState(false)

  // hides when scrolling down, returns when scrolling up
  useEffect(() => {
    let y = scrollY
    const f = () => { const n = scrollY; setHide(n > y && n > 240); y = n }
    addEventListener('scroll', f, { passive: true })
    return () => removeEventListener('scroll', f)
  }, [])

  const link = 'relative py-1 transition hover:text-header-accent after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-header-accent after:transition-transform hover:after:scale-x-100'

  return (
    // <header className="fixed top-3 inset-x-0 z-50 px-3 transition-transform duration-500" style={{ transform: hide && !open ? 'translateY(-130%)' : 'none' }}>
    <header className="fixed top-3 inset-x-0 z-50 px-3 transition-transform duration-500" >
      <div className="glass bg-header-card border-header-border max-w-4xl mx-auto rounded-full pl-3 pr-3 py-2 flex items-center">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="w-10 h-10 rounded-full bg-header-fill text-header-onfill grid place-items-center">
            {/* <Icon.stalk className="w-6 h-6" /> */}
            <img src={Logo} alt="Logo" className="w-6 h-6" />
          </span>
          <span className="leading-none">
            <b className="font-display text-lg font-semibold text-header-title block">Bardhaman</b>
            <small className="text-[10px] tracking-[.25em] uppercase text-header-text">Agro Products</small>
          </span>
        </a>
        <nav className="hidden md:flex gap-7 mx-auto text-sm text-header-text">
          {NAV.map((n) => <a key={n} href={'#' + ids[n]} className={link}>{n}</a>)}
        </nav>
        <a href="#contact" className="btn bg-header-btn text-header-btntext !py-2.5 hidden md:inline-flex">Enquire <Icon.arrow className="w-4 h-4" /></a>
        <button className="md:hidden ml-auto w-10 h-10 text-header-title text-xl" aria-label="Menu" onClick={() => setOpen(!open)}>{open ? '✕' : '☰'}</button>
      </div>
      {open && (
        <div className="glass bg-header-card border-header-border md:hidden mt-2 rounded-3xl p-5 flex flex-col gap-4 text-center text-header-title">
          {NAV.map((n) => <a key={n} onClick={() => setOpen(false)} href={'#' + ids[n]}>{n}</a>)}
        </div>
      )}
    </header>
  )
}

export default Header
