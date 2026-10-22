import Lenis from 'lenis'
import { gsap, ScrollTrigger, setupGsap } from './gsap'

export interface ScrollOptions {
  immediate?: boolean
  /** Pixels added to the target position (negative leaves room for the fixed header). */
  offset?: number
}

export interface ScrollManager {
  lenis: Lenis | null
  scrollTo: (target: string | number | HTMLElement, opts?: ScrollOptions) => void
  destroy: () => void
}

/**
 * Lenis smooths wheel input only. The page still scrolls natively, so touch,
 * keyboard, find-in-page and anchor links behave normally. Lenis is driven by
 * GSAP's ticker and feeds ScrollTrigger, which is the integration Lenis documents.
 * Without `smooth` (reduced motion, touch devices) no Lenis instance exists at all.
 */
export function createScrollManager(smooth: boolean, reduced: boolean): ScrollManager {
  setupGsap()

  if (!smooth) {
    return {
      lenis: null,
      scrollTo: (target, opts) => {
        const offset = opts?.offset ?? 0
        const top =
          typeof target === 'number'
            ? target
            : (typeof target === 'string'
                ? document.querySelector<HTMLElement>(target)
                : target)!.getBoundingClientRect().top + window.scrollY
        window.scrollTo({ top: top + offset, behavior: opts?.immediate || reduced ? 'auto' : 'smooth' })
      },
      destroy: () => {},
    }
  }

  const lenis = new Lenis({ autoRaf: false, smoothWheel: true, lerp: 0.1, wheelMultiplier: 0.9 })
  const onScroll = () => ScrollTrigger.update()
  lenis.on('scroll', onScroll)
  const tick = (time: number) => lenis.raf(time * 1000)
  gsap.ticker.add(tick)
  gsap.ticker.lagSmoothing(0)

  return {
    lenis,
    scrollTo: (target, opts) =>
      lenis.scrollTo(target, { offset: opts?.offset ?? 0, duration: 1.4, immediate: opts?.immediate, lock: false }),
    destroy: () => {
      gsap.ticker.remove(tick)
      lenis.off('scroll', onScroll)
      lenis.destroy()
      gsap.ticker.lagSmoothing(500, 33)
    },
  }
}
