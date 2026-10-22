import { useEffect, useMemo, useRef } from 'react'
import { createScrollManager, type ScrollManager, type ScrollOptions } from '../animation/ScrollManager'

export interface ScrollApi {
  scrollTo: (target: string | number | HTMLElement, opts?: ScrollOptions) => void
}

/** Owns the Lenis instance (or a native fallback) for the lifetime of the page. Returns a stable API. */
export function useScrollManager(smooth: boolean, reduced: boolean): ScrollApi {
  const ref = useRef<ScrollManager | null>(null)

  useEffect(() => {
    const manager = createScrollManager(smooth, reduced)
    ref.current = manager
    return () => {
      manager.destroy()
      ref.current = null
    }
  }, [smooth, reduced])

  return useMemo(() => ({ scrollTo: (target, opts) => ref.current?.scrollTo(target, opts) }), [])
}
