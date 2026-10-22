import { useCallback, useEffect, useState } from 'react'
import { ScrollTrigger } from './animation/gsap'
import { useMotionMode } from './animation/motion'
import { portfolio } from './content/portfolio'
import { validateContent } from './content/validate'
import { ContentSections } from './components/ContentSections'
import { EntranceScene } from './components/EntranceScene'
import { ScrollProgress } from './components/ScrollProgress'
import { SiteHeader } from './components/SiteHeader'
import { useScrollManager } from './utils/useScrollManager'
import { useViewport } from './utils/useViewport'

const HEADER_OFFSET = -72
const YEAR = new Date().getFullYear()

function useFinePointer() {
  const [fine] = useState(() => window.matchMedia('(pointer: fine)').matches)
  return fine
}

export default function App() {
  const { mode, setMode } = useMotionMode()
  const reduced = mode === 'reduced'
  const fine = useFinePointer()
  const smooth = !reduced && fine
  const viewport = useViewport()
  const scroll = useScrollManager(smooth, reduced)

  useEffect(() => {
    if (import.meta.env.DEV) {
      const issues = validateContent(portfolio)
      if (issues.length) console.info(`[content] ${issues.length} placeholder(s):\n- ${issues.join('\n- ')}`)
    }
  }, [])

  const navigate = useCallback(
    (hash: string) => {
      const target = document.querySelector<HTMLElement>(hash)
      if (!target) return
      scroll.scrollTo(target, { immediate: false, offset: HEADER_OFFSET })
      // Land focus on the section so keyboard and screen-reader users arrive where the page did.
      target.focus({ preventScroll: true })
      history.replaceState(null, '', hash)
    },
    [scroll],
  )

  const jump = useCallback((y: number) => scroll.scrollTo(y, { immediate: true }), [scroll])

  const replay = useCallback(() => {
    scroll.scrollTo(0, { immediate: true })
    ScrollTrigger.update()
  }, [scroll])

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <SiteHeader motion={mode} onMotionChange={setMode} onNavigate={navigate} onReplay={replay} />
      <ScrollProgress />
      <EntranceScene viewport={viewport} reduced={reduced} smooth={smooth} onSkip={jump} onNavigate={navigate} />
      <ContentSections />
      <footer className="site-footer">
        <p>
          © {YEAR} {portfolio.owner.name}. {portfolio.owner.tagline}
        </p>
      </footer>
    </>
  )
}
