import { useEffect } from 'react'
import Lenis from 'lenis'

// Inertia ("buttery") scrolling for wheel/touch and #anchor links.
// Tweak `lerp` (lower = floatier) and `wheelMultiplier` to taste.
export default function useSmoothScroll() {
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const lenis = new Lenis({ lerp: 0.085, wheelMultiplier: 0.9, anchors: { offset: -80 } })
    let id
    const raf = (t) => { lenis.raf(t); id = requestAnimationFrame(raf) }
    id = requestAnimationFrame(raf)
    return () => { cancelAnimationFrame(id); lenis.destroy() }
  }, [])
}
