import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin'
import { SplitText } from 'gsap/SplitText'

let registered = false

/** Registers plugins exactly once. Import gsap from this module everywhere. */
export function setupGsap() {
  if (registered) return
  gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, SplitText)
  ScrollTrigger.config({ ignoreMobileResize: true })
  registered = true
}

export { gsap, ScrollTrigger, SplitText }
