import { Icon } from './icons'
import { NAV, ids } from './nav'
import Logo from '../assets/bppl-logo.png'


function Footer() {
  return (
    <footer id="contact" className="relative mt-10 text-footer-text">
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="block w-full h-14 md:h-20 text-footer-bg -mb-px" aria-hidden="true">
        <path d="M0 40C240 0 480 80 720 40s480-40 720 0v40H0Z" fill="currentColor" />
      </svg>
      <div className="relative overflow-hidden bg-footer-bg">
        {/* <Icon.stalk className="absolute -right-10 -bottom-16 w-96 h-96 text-footer-border" strokeWidth={0.6} /> */}
        <img src={Logo} alt="Logo" className="absolute -right-10 -bottom-16 w-96 h-96 text-footer-border" strokeWidth={0.6} />
        <div className="relative max-w-6xl mx-auto px-5 pt-10 pb-8 grid md:grid-cols-[1.3fr_1fr_1.4fr] gap-10 text-sm">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-11 h-11 rounded-full bg-footer-fill text-footer-onfill grid place-items-center"><img src={Logo} alt="Logo" className="w-6 h-8" /></span>
              <b className="font-display text-2xl font-medium text-footer-title">Bardhaman Agro</b>
            </div>
            <p className="leading-relaxed max-w-xs">An ISO 9001:2015 certified company, delivering premium rice from the fields of West Bengal since 2001.</p>
          </div>
          <div>
            <h4 className="font-display text-lg text-footer-title mb-4">Quick links</h4>
            <div className="flex flex-col gap-2.5">
              {NAV.map((n) => <a key={n} href={'#' + ids[n]} className="w-fit transition hover:translate-x-1.5 hover:text-footer-title">{n}</a>)}
            </div>
          </div>
          <div>
            <h4 className="font-display text-lg text-footer-title mb-4">Contact</h4>
            <ul className="space-y-3.5 leading-relaxed">
              <li className="flex gap-3"><Icon.pin className="w-5 h-5 shrink-0 mt-0.5" />Vill. Ahaladipur, P.O. Shyamsundar, P.S. Raina, Purba Bardhaman, West Bengal 713424</li>
              <li className="flex gap-3"><Icon.phone className="w-5 h-5 shrink-0" />+91 84366 38544 / +91 90645 48356</li>
              <li className="flex gap-3"><Icon.mail className="w-5 h-5 shrink-0" />bapindia.pvt.ltd@gmail.com</li>
            </ul>
          </div>
        </div>
        <p className="relative max-w-6xl mx-auto px-5 pb-8 text-xs opacity-70"><span className="block border-t border-footer-border pt-5">© Bardhaman Agro Products India Private Limited. All rights reserved.</span></p>
      </div>
    </footer>
  )
}

export default Footer
