import { useEffect, useRef, useState } from 'react'
import { Icon } from './icons'

// thin reading-progress bar at the top of the page
export function ScrollProgress() {
  const r = useRef()
  useEffect(() => {
    const f = () => {
      const h = document.documentElement.scrollHeight - innerHeight
      r.current.style.transform = `scaleX(${h > 0 ? scrollY / h : 0})`
    }
    addEventListener('scroll', f, { passive: true })
    return () => removeEventListener('scroll', f)
  }, [])
  return <div ref={r} className="fixed top-0 inset-x-0 h-1 z-[60] origin-left bg-progress-fill" style={{ transform: 'scaleX(0)' }} />
}

export function BackToTop() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const f = () => setShow(scrollY > 700)
    addEventListener('scroll', f, { passive: true })
    return () => removeEventListener('scroll', f)
  }, [])
  return (
    <a href="#top" aria-label="Back to top"
      className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-top-fill text-top-onfill grid place-items-center shadow-lift transition duration-500 hover:-translate-y-1"
      style={{ opacity: show ? 1 : 0, transform: show ? 'none' : 'translateY(20px)', pointerEvents: show ? 'auto' : 'none' }}>
      <Icon.arrow className="w-5 h-5 -rotate-90" />
    </a>
  )
}
