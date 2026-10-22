import { useCallback, useEffect, useState } from 'react'

export type MotionMode = 'full' | 'reduced'
const KEY = 'dom:motion'

function systemPrefersReduced() {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function stored(): MotionMode | null {
  try {
    const v = localStorage.getItem(KEY)
    return v === 'full' || v === 'reduced' ? v : null
  } catch {
    return null
  }
}

/** System preference by default; an explicit visitor choice (the toggle) wins and persists. */
export function useMotionMode() {
  const [mode, setMode] = useState<MotionMode>(() => stored() ?? (systemPrefersReduced() ? 'reduced' : 'full'))

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const onChange = () => {
      if (!stored()) setMode(mq.matches ? 'reduced' : 'full')
    }
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  const set = useCallback((next: MotionMode) => {
    try {
      localStorage.setItem(KEY, next)
    } catch {
      /* storage can be blocked; the choice still applies for this session */
    }
    setMode(next)
  }, [])

  return { mode, setMode: set }
}
