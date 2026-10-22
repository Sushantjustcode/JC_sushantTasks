import { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger, setupGsap } from '../animation/gsap'

/** A tiny walker on a hand-drawn line. Purely a visual echo of scroll position; the nav is the functional control. */
export function ScrollProgress() {
  const markerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setupGsap()
    const marker = markerRef.current
    if (!marker) return
    const setY = gsap.quickSetter(marker, 'y', 'px')
    const track = marker.parentElement!
    const st = ScrollTrigger.create({
      start: 0,
      end: 'max',
      onUpdate: (self) => setY(self.progress * (track.clientHeight - 30)),
    })
    return () => st.kill()
  }, [])

  return (
    <div className="progress" aria-hidden="true">
      <svg className="progress__line" viewBox="0 0 6 100" preserveAspectRatio="none">
        <path d="M3 0 Q1 25 3 50 T3 100" fill="none" stroke="currentColor" strokeWidth="1.6" strokeDasharray="3 3" />
      </svg>
      <div className="progress__marker" ref={markerRef}>
        <svg viewBox="0 0 24 30" width="24" height="30">
          <circle cx="12" cy="7" r="5.4" fill="#FFF8EB" stroke="#26231F" strokeWidth="2" />
          <path
            d="M12 12.5 V21 M12 15 L6 19 M12 15 L18 18 M12 21 L7 28 M12 21 L17 28"
            fill="none"
            stroke="#26231F"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  )
}
