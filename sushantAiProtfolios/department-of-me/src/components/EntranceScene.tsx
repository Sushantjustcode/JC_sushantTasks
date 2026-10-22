import { useEffect, useMemo, useRef } from 'react'
import { buildEntrance, type EntranceView } from '../animation/entranceScene'
import { gsap, ScrollTrigger, setupGsap } from '../animation/gsap'
import { EntranceWorld } from '../illustrations/EntranceWorld'
import { C } from '../illustrations/palette'
import { portfolio } from '../content/portfolio'
import { safeUrl } from '../content/validate'
import type { Viewport } from '../utils/useViewport'

interface Props {
  viewport: Viewport
  reduced: boolean
  smooth: boolean
  onSkip: (endPosition: number) => void
  onNavigate: (hash: string) => void
}

function deriveView({ w, h }: Viewport): EntranceView {
  const aspect = w / h
  return aspect >= 1
    ? { mode: 'wide', vh: 900, vw: Math.round(900 * aspect) }
    : { mode: 'tall', vh: 1250, vw: Math.round(1250 * aspect) }
}

export function EntranceScene({ viewport, reduced, smooth, onSkip, onNavigate }: Props) {
  const sectionRef = useRef<HTMLElement>(null)
  const stageRef = useRef<HTMLDivElement>(null)
  const svgRef = useRef<SVGSVGElement>(null)
  const nameRef = useRef<HTMLHeadingElement>(null)
  const cueRef = useRef<HTMLDivElement>(null)

  const { mode, vw, vh } = useMemo(() => deriveView(viewport), [viewport])
  const { owner } = portfolio
  const resume = safeUrl(owner.resumeUrl)
  const [first, ...rest] = owner.name.toUpperCase().split(' ')

  useEffect(() => {
    setupGsap()
    let cancelled = false
    let ctx: gsap.Context | undefined
    let cleanup = () => {}

    const start = async () => {
      // Split text and pin distances depend on the real font metrics.
      await Promise.race([document.fonts?.ready, new Promise((r) => setTimeout(r, 1500))])
      if (cancelled || !sectionRef.current || !stageRef.current || !svgRef.current || !nameRef.current) return
      const stage = stageRef.current
      ctx = gsap.context(() => {
        cleanup = buildEntrance(
          {
            section: sectionRef.current!,
            stage,
            svg: svgRef.current!,
            heroName: nameRef.current!,
            heroRest: Array.from(stage.querySelectorAll<HTMLElement>('[data-hero-rest]')),
            cue: cueRef.current,
          },
          { view: { mode, vw, vh }, lenisActive: smooth, reduced },
        )
      }, sectionRef)
      ScrollTrigger.refresh()
    }
    void start()

    return () => {
      cancelled = true
      cleanup()
      ctx?.revert()
    }
  }, [mode, vw, vh, reduced, smooth])

  const skip = () => {
    const st = ScrollTrigger.getById('entrance')
    if (st) onSkip(st.end + 2)
    else onNavigate('#file')
  }

  return (
    <section
      id="top"
      ref={sectionRef}
      className={`entrance entrance--${mode}${reduced ? ' entrance--static' : ''}`}
      aria-labelledby="hero-name"
    >
      <div className="entrance__stage" ref={stageRef}>
        <svg
          ref={svgRef}
          className="entrance__svg"
          viewBox={`0 0 ${vw} ${vh}`}
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
          focusable="false"
        >
          <EntranceWorld />
          <rect data-flash x="0" y="0" width={vw} height={vh} fill={C.paperHi} opacity="0" />
        </svg>

        <div className="hero">
          <p className="hero__stamp" data-hero-rest>
            File No. 001 · Under investigation
          </p>
          <h1 id="hero-name" className="hero__name" ref={nameRef}>
            {first} {rest.join(' ')}
          </h1>
          <p className="hero__title" data-hero-rest>
            {owner.title}
          </p>
          <p className="hero__lede" data-hero-rest>
            {owner.positioning}
          </p>
          <p className="hero__tagline" data-hero-rest>
            {owner.tagline}
          </p>
          <div className="hero__ctas" data-hero-rest>
            <a
              className="btn btn--primary"
              href="#file"
              onClick={(e) => {
                e.preventDefault()
                onNavigate('#file')
              }}
            >
              Open the file
            </a>
            <a
              className="btn"
              href="#projects"
              onClick={(e) => {
                e.preventDefault()
                onNavigate('#projects')
              }}
            >
              View projects
            </a>
            {resume && (
              <a className="btn btn--ghost" href={resume} download>
                Résumé (PDF)
              </a>
            )}
          </div>
        </div>

        {!reduced && (
          <>
            <div className="entrance__cue" ref={cueRef} aria-hidden="true">
              <span>Scroll to investigate</span>
              <svg viewBox="0 0 24 40" width="22" height="36">
                <path
                  d="M12 2 Q11 14 12 30 M4 24 Q10 32 12 36 Q15 31 21 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <button type="button" className="skip-intro" onClick={skip}>
              Skip intro
            </button>
          </>
        )}
      </div>
    </section>
  )
}
