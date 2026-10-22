import { useEffect, useState } from 'react'

export interface Viewport {
  w: number
  h: number
}

const read = (): Viewport => ({ w: window.innerWidth, h: window.innerHeight })

/**
 * Window size, debounced. Height-only changes under 150px are ignored so mobile browser
 * toolbars collapsing while scrolling do not rebuild the scroll timelines mid-scroll.
 */
export function useViewport(): Viewport {
  const [vp, setVp] = useState<Viewport>(read)

  useEffect(() => {
    let timer = 0
    const onResize = () => {
      window.clearTimeout(timer)
      timer = window.setTimeout(() => {
        const next = read()
        setVp((prev) => (next.w !== prev.w || Math.abs(next.h - prev.h) > 150 ? next : prev))
      }, 200)
    }
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('resize', onResize)
      window.clearTimeout(timer)
    }
  }, [])

  return vp
}
