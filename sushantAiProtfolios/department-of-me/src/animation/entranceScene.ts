import { gsap, ScrollTrigger, SplitText } from './gsap'
import { createRig } from './characterRig'

export type EntranceMode = 'wide' | 'tall'

export interface EntranceView {
  mode: EntranceMode
  vw: number
  vh: number
}

export interface EntranceElements {
  section: HTMLElement
  stage: HTMLElement
  svg: SVGSVGElement
  heroName: HTMLElement
  heroRest: HTMLElement[]
  cue: HTMLElement | null
}

export interface EntranceOptions {
  view: EntranceView
  /** Lenis is smoothing wheel input, so ScrollTrigger scrub needs no extra smoothing. */
  lenisActive: boolean
  reduced: boolean
}

const DOOR = { hingeX: 1050, stopX: 915, centreX: 1000 }
const WALK_STEP = 140 // world units per full walk cycle (two steps)

const CLOUDS = {
  a: { y: 70, speed: 7, base: 200, s: 1.2 },
  b: { y: 125, speed: 11, base: 1100, s: 0.9 },
  c: { y: 38, speed: 5, base: 1900, s: 1.0 },
} as const

const camOrigin = (mode: EntranceMode) => (mode === 'wide' ? { fx: 800, fy: 450 } : { fx: 1000, fy: 365 })

/**
 * Builds the whole entrance sequence. Must run inside gsap.context() so every tween,
 * ScrollTrigger and SplitText is reverted by one ctx.revert() call. Returns a cleanup
 * for the things GSAP does not own (the ticker callback and pointer listener).
 *
 * Ownership rules, so timelines never fight:
 *   - character limbs / face / stack  -> rig.state  (one renderer)
 *   - camera + parallax layers        -> cam        (one renderer)
 *   - door                            -> door       (one renderer)
 *   - hero text, building strokes/fills, flash overlay -> animated directly, by this timeline only
 *   - blink, breathing, clouds, scraps, pigeon gaze -> ambient, never scrubbed
 */
export function buildEntrance(el: EntranceElements, opts: EntranceOptions): () => void {
  const { view, reduced } = opts
  const { svg, stage } = el
  const origin = camOrigin(view.mode)
  const q = <T extends Element>(sel: string) => Array.from(svg.querySelectorAll<T>(sel))
  const one = <T extends Element>(sel: string) => svg.querySelector<T>(sel)!

  // ---------- state owned by single renderers ----------
  const cam = { fx: origin.fx, fy: origin.fy, z: 1 }
  const door = { open: 0, shake: 0 }
  const layers = q<SVGGElement>('[data-layer]').map((node) => ({ node, depth: Number(node.dataset.depth) }))
  const doorEl = one<SVGGElement>('[data-door]')
  const characterRoot = one<SVGGElement>('[data-rig="root"]')
  const rig = createRig(characterRoot)
  const flash = svg.querySelector<SVGRectElement>('[data-flash]')

  const startFx = view.mode === 'wide' ? 800 : 640
  const startX = startFx - view.vw / 2 - 90
  rig.state.x = startX
  rig.state.y = 740
  rig.state.scale = 0.95

  const lastAttr = new WeakMap<Element, Record<string, string>>()
  const setAttr = (node: Element, name: string, value: string) => {
    let cache = lastAttr.get(node)
    if (!cache) lastAttr.set(node, (cache = {}))
    if (cache[name] === value) return
    cache[name] = value
    node.setAttribute(name, value)
  }

  // ---------- ambient, never scrubbed ----------
  const look = { x: 0, y: 0 }
  const pigeonHead = one<SVGGElement>('[data-pigeon="head"]')
  const pigeonPupil = one<SVGCircleElement>('[data-pigeon="pupil"]')
  const winPupils = q<SVGCircleElement>('[data-winpupil]')
  const clouds = q<SVGGElement>('[data-cloud]')
  const scraps = q<SVGGElement>('[data-scrap]')
  const scrapBase = scraps.map((_, i) => ({
    x: origin.fx - view.vw / 2 + ((i + 0.5) / scraps.length) * view.vw,
    y: origin.fy - view.vh / 2 + (0.18 + 0.14 * i) * view.vh,
  }))

  const renderCamera = () => {
    const mid = `translate(${view.vw / 2} ${view.vh / 2})`
    for (const { node, depth } of layers) {
      const sc = 1 + (cam.z - 1) * depth
      const lx = origin.fx + (cam.fx - origin.fx) * depth
      const ly = origin.fy + (cam.fy - origin.fy) * depth
      setAttr(node, 'transform', `${mid} scale(${sc.toFixed(4)}) translate(${(-lx).toFixed(2)} ${(-ly).toFixed(2)})`)
    }
  }

  const renderDoor = () => {
    const sx = 1 - door.open * 0.9
    const tilt = 0.12 * door.open * sx
    const shake = Math.sin(door.shake * Math.PI * 2) * 2.2 * (1 - door.open)
    const e = DOOR.hingeX * (1 - sx) + shake
    setAttr(
      doorEl,
      'transform',
      `matrix(${sx.toFixed(4)} ${tilt.toFixed(4)} 0 1 ${e.toFixed(2)} ${(-tilt * DOOR.hingeX).toFixed(2)})`,
    )
  }

  const renderAmbient = (t: number) => {
    const u = (t % 3.7) - 3.5
    rig.ambient.blink = u > 0 && u < 0.18 ? 1 - Math.abs(u - 0.09) / 0.09 : 0
    rig.ambient.breath = Math.sin(t * 2.1)

    for (const c of clouds) {
      const cfg = CLOUDS[c.dataset.cloud as keyof typeof CLOUDS]
      const x = ((cfg.base + t * cfg.speed) % 3000) - 900
      setAttr(c, 'transform', `translate(${x.toFixed(1)} ${cfg.y}) scale(${cfg.s})`)
    }
    scraps.forEach((s, i) => {
      const b = scrapBase[i]
      const x = b.x + Math.sin(t * 0.35 + i * 1.7) * 70
      const y = b.y + Math.sin(t * 0.55 + i * 2.3) * 38
      setAttr(
        s,
        'transform',
        `translate(${x.toFixed(1)} ${y.toFixed(1)}) rotate(${((t * 18 + i * 52) % 360).toFixed(1)})`,
      )
    })

    const ang = look.x * 14 - look.y * 8
    setAttr(pigeonHead, 'transform', `translate(-11 -28) rotate(${ang.toFixed(2)} 0 0)`)
    setAttr(pigeonPupil, 'cx', (-4.6 + look.x * 1.6).toFixed(2))
    setAttr(pigeonPupil, 'cy', (-8.8 + look.y * 1.2).toFixed(2))
    winPupils.forEach((p, i) => {
      const bx = i === 0 ? 856 : 886
      setAttr(p, 'cx', (bx + look.x * 3.2).toFixed(2))
      setAttr(p, 'cy', (575 + look.y * 3).toFixed(2))
    })
  }

  const render = () => {
    renderCamera()
    renderDoor()
    rig.render()
    renderAmbient(gsap.ticker.time)
  }

  // ---------- pointer gaze (fine pointers only) ----------
  let removePointer = () => {}
  if (!reduced && window.matchMedia('(pointer: fine)').matches) {
    const toX = gsap.quickTo(look, 'x', { duration: 0.45, ease: 'power3.out' })
    const toY = gsap.quickTo(look, 'y', { duration: 0.45, ease: 'power3.out' })
    const pigeonRoot = one<SVGGElement>('[data-pigeon-root]')
    let raf = 0
    let px = 0
    let py = 0
    const update = () => {
      raf = 0
      const r = pigeonRoot.getBoundingClientRect()
      const dx = px - (r.left + r.width / 2)
      const dy = py - (r.top + r.height / 2)
      const d = Math.hypot(dx, dy) || 1
      const k = Math.min(1, d / 260)
      toX((dx / d) * k)
      toY((dy / d) * k)
    }
    const onMove = (e: PointerEvent) => {
      px = e.clientX
      py = e.clientY
      if (!raf) raf = requestAnimationFrame(update)
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    removePointer = () => {
      window.removeEventListener('pointermove', onMove)
      if (raf) cancelAnimationFrame(raf)
    }
  }

  // ---------- targets ----------
  const lines = q<SVGGeometryElement>('.b-line')
  const fills = q<SVGElement>('.b-fill')
  const extras = q<SVGElement>('.b-extra')
  const sign = one<SVGTextElement>('.svg-sign')
  const pigeonRoot = one<SVGGElement>('[data-pigeon-root]')
  const frontLayer = one<SVGGElement>('[data-layer="front"]')

  // ---------- reduced motion: a composed still, full content, no scroll hijacking ----------
  if (reduced) {
    gsap.set(lines, { drawSVG: '100%', opacity: 1 })
    gsap.set([...fills, ...extras, sign, pigeonRoot], { opacity: 1 })
    Object.assign(cam, { fx: 880, fy: 560, z: 1.25 })
    Object.assign(rig.state, {
      x: DOOR.stopX - 10,
      walk: 0,
      reach: 0,
      wobble: 0.1,
      headTilt: 0.3,
      mouth: 0.6,
      lookX: 0.7,
    })
    door.open = 0.35
    if (flash) gsap.set(flash, { opacity: 0 })
    render()
    return () => {}
  }

  // ---------- initial states for the scrubbed build ----------
  gsap.set([...fills, ...extras, sign, pigeonRoot], { opacity: 0 })
  // Round line caps would show as dots at drawSVG 0%, so lines also start invisible.
  gsap.set(lines, { drawSVG: '0%', opacity: 0 })
  if (flash) gsap.set(flash, { opacity: 0 })

  const split = SplitText.create(el.heroName, {
    type: 'words,chars',
    wordsClass: 'hero__word',
    charsClass: 'hero__char',
  })

  const scrollLen = () => Math.round(window.innerHeight * (view.mode === 'wide' ? 7 : 5.5))
  const tl = gsap.timeline({
    defaults: { ease: 'none' },
    scrollTrigger: {
      id: 'entrance',
      trigger: el.section,
      start: 'top top',
      end: () => `+=${scrollLen()}`,
      pin: stage,
      pinSpacing: true,
      scrub: opts.lenisActive ? true : 0.5,
      anticipatePin: 1,
      invalidateOnRefresh: true,
    },
  })

  // 0. Cue fades the moment scrolling starts.
  if (el.cue) tl.to(el.cue, { autoAlpha: 0, duration: 0.5 }, 0)

  // 1. The building is drawn, then coloured in.
  tl.addLabel('draw', 0)
  tl.fromTo(lines, { drawSVG: '0%' }, { drawSVG: '100%', duration: 0.9, stagger: { each: 0.06 } }, 'draw')
  tl.fromTo(lines, { opacity: 0 }, { opacity: 1, duration: 0.05, stagger: { each: 0.06 } }, 'draw')
  tl.to(fills, { opacity: 1, duration: 0.7, stagger: { each: 0.05 } }, 'draw+=1.3')
  tl.to(sign, { opacity: 1, duration: 0.6 }, 'draw+=2.5')
  tl.to(pigeonRoot, { opacity: 1, duration: 0.4 }, 'draw+=2.3')
  tl.to(extras, { opacity: 1, duration: 0.6 }, 'draw+=2.8')

  // 2. The hero heading leaves like a file being whisked away.
  tl.addLabel('heroOut', 3.1)
  tl.to(
    split.chars,
    {
      yPercent: -130,
      rotation: (i: number) => (i % 2 ? 1 : -1) * (7 + (i % 5) * 3),
      opacity: 0,
      duration: 0.5,
      stagger: { each: 0.03 },
    },
    'heroOut',
  )
  tl.to(el.heroRest, { autoAlpha: 0, y: -28, duration: 0.7, stagger: 0.07 }, 'heroOut+=0.1')

  // 3. A protagonist appears, walking in. Steps are tied to distance, so scrubbing backwards un-walks.
  const walkStart = view.mode === 'wide' ? 4.2 : 4.4
  const walkEnd = 9.4
  const distance = DOOR.stopX - startX
  const cycles = distance / WALK_STEP
  tl.addLabel('walkIn', walkStart)
  if (view.mode === 'tall') {
    tl.to(cam, { fx: startFx, duration: 0.8, ease: 'power1.inOut' }, 'walkIn-=0.8')
  }
  tl.to(rig.state, { walk: 1, duration: 0.4, ease: 'power1.out' }, 'walkIn')
  tl.to(rig.state, { x: DOOR.stopX, duration: walkEnd - walkStart }, 'walkIn')
  tl.to(rig.state, { phase: cycles * Math.PI * 2, duration: walkEnd - walkStart }, 'walkIn')
  const walkWobble = cycles * Math.PI
  tl.to(rig.state, { wobblePhase: walkWobble, duration: walkEnd - walkStart }, 'walkIn')
  tl.to(rig.state, { walk: 0, duration: 0.5, ease: 'power1.in' }, walkEnd - 0.5)
  if (view.mode === 'wide') {
    tl.to(cam, { fx: 880, z: 1.12, duration: walkEnd - walkStart }, 'walkIn')
  } else {
    tl.to(cam, { fx: 940, duration: walkEnd - walkStart }, 'walkIn')
  }

  // 4. Arrival: the character looks up at the door, the camera leans in.
  tl.addLabel('arrive', walkEnd)
  tl.to(
    rig.state,
    { headTilt: 0.55, lookX: 0.9, lookY: -0.6, mouth: -0.1, brow: 0.5, duration: 0.6, ease: 'power2.out' },
    'arrive',
  )
  tl.to(
    cam,
    {
      fx: 960,
      fy: view.mode === 'wide' ? 590 : 600,
      z: view.mode === 'wide' ? 1.9 : 2.1,
      duration: 0.9,
      ease: 'power2.inOut',
    },
    'arrive',
  )

  // 5. The struggle: reach, tug, wobble, a sheet escapes.
  tl.addLabel('struggle', 10.2)
  tl.to(rig.state, { reach: 1, duration: 0.5, ease: 'power2.out' }, 'struggle')
  tl.to(rig.state, { wobble: 1, duration: 1.2, ease: 'power1.in' }, 'struggle')
  tl.to(rig.state, { wobblePhase: walkWobble + Math.PI * 9, duration: 2.8 }, 'struggle')
  tl.to(rig.state, { lean: 1, duration: 0.22, repeat: 7, yoyo: true, ease: 'sine.inOut' }, 'struggle+=0.5')
  tl.to(door, { shake: 6, duration: 2.6, ease: 'none' }, 'struggle+=0.5')
  tl.to(rig.state, { brow: 1, mouth: -0.7, duration: 0.8 }, 'struggle+=0.2')
  tl.to(rig.state, { sheetFly: 1, duration: 0.9, ease: 'power1.in' }, 'struggle+=1.7')

  // 6. The door opens. Relief.
  tl.addLabel('doorOpen', 13.3)
  tl.to(door, { open: 1, duration: 1.3, ease: 'power2.inOut' }, 'doorOpen')
  tl.to(rig.state, { reach: 0, lean: 0, wobble: 0.2, duration: 0.7, ease: 'power2.out' }, 'doorOpen+=0.2')
  tl.to(rig.state, { mouth: 0.9, brow: -0.3, lookY: 0, headTilt: 0.1, duration: 0.7 }, 'doorOpen+=0.4')

  // 7. She walks in; the camera follows and then dives through the doorway.
  tl.addLabel('enter', 14.6)
  tl.to(rig.state, { walk: 1, duration: 0.3, ease: 'power1.out' }, 'enter')
  tl.to(rig.state, { x: DOOR.centreX, scale: 0.62, duration: 1.6, ease: 'power1.inOut' }, 'enter')
  tl.to(rig.state, { phase: cycles * Math.PI * 2 + Math.PI * 3, duration: 1.6 }, 'enter')
  tl.to(rig.state, { opacity: 0, duration: 0.5 }, 'enter+=1.1')
  tl.to(cam, { fx: DOOR.centreX, fy: 640, z: 2.6, duration: 1.6, ease: 'power1.inOut' }, 'enter')

  tl.addLabel('dive', 16.2)
  tl.to(cam, { z: 13, duration: 2.4, ease: 'power2.in' }, 'dive')
  tl.to(frontLayer, { opacity: 0, duration: 0.6 }, 'dive')
  if (flash) tl.to(flash, { opacity: 1, duration: 0.9, ease: 'power1.in' }, 'dive+=1.6')
  tl.addLabel('end')

  gsap.ticker.add(render)
  render()

  // Fonts and images can change layout; recompute pin distances once they settle.
  const refresh = () => ScrollTrigger.refresh()
  window.addEventListener('load', refresh, { once: true })

  return () => {
    gsap.ticker.remove(render)
    removePointer()
    window.removeEventListener('load', refresh)
  }
}
