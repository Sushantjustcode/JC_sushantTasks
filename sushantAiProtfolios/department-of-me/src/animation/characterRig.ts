/**
 * Character rig. Timelines never touch the SVG directly: they tween numeric values on
 * `rig.state`, and one renderer turns that state into transform attributes. Because every
 * limb has exactly one writer, two timelines cannot fight over the same property, and a
 * scrubbed timeline can be played backwards without any stale DOM state.
 */

export interface RigState {
  x: number
  y: number
  scale: number
  /** 0..1 blend of the walk cycle. */
  walk: number
  /** Walk phase in radians. Tweened by the timeline so steps are tied to distance travelled. */
  phase: number
  /** 0..1 front arm lets go of the stack and reaches for the door handle. */
  reach: number
  /** 0..1 amplitude of the document-stack wobble. */
  wobble: number
  /** Drives the wobble oscillation. */
  wobblePhase: number
  /** 0..1 how far the top sheet has flown off the stack. */
  sheetFly: number
  /** -1..1 eye direction. */
  lookX: number
  lookY: number
  /** -1 (frown) .. 1 (smile). */
  mouth: number
  /** -1..1 eyebrow tilt, positive = worried/confused. */
  brow: number
  /** 0..1 head tilt toward the door. */
  headTilt: number
  /** Lean into the door while struggling. */
  lean: number
  opacity: number
}

export const initialRigState = (): RigState => ({
  x: 0,
  y: 0,
  scale: 1,
  walk: 0,
  phase: 0,
  reach: 0,
  wobble: 0.15,
  wobblePhase: 0,
  sheetFly: 0,
  lookX: 0.6,
  lookY: 0,
  mouth: 0.2,
  brow: 0,
  headTilt: 0,
  lean: 0,
  opacity: 1,
})

const HIP_Y = -62
const SHOULDER = { x: 16, y: -112 }
const SHOULDER_BACK = { x: -4, y: -112 }
const NECK = { x: 2, y: -126 }

const r = (n: number) => Math.round(n * 100) / 100

export interface Rig {
  state: RigState
  /** Ambient values owned by the idle loop (blink), never by a scrubbed timeline. */
  ambient: { blink: number; breath: number }
  render: () => void
}

export function createRig(root: SVGGElement, initial?: Partial<RigState>): Rig {
  const q = (name: string) => root.querySelector<SVGGElement>(`[data-rig="${name}"]`)!
  const parts = {
    root,
    legBackU: q('legBackU'),
    legBackL: q('legBackL'),
    legFrontU: q('legFrontU'),
    legFrontL: q('legFrontL'),
    body: q('body'),
    head: q('head'),
    eyes: q('eyes'),
    pupils: q('pupils'),
    browL: q('browL'),
    browR: q('browR'),
    mouth: root.querySelector<SVGPathElement>('[data-rig="mouth"]')!,
    stack: q('stack'),
    sheet: q('sheet'),
    armBackU: q('armBackU'),
    armBackL: q('armBackL'),
    armFrontU: q('armFrontU'),
    armFrontL: q('armFrontL'),
  }

  const state = { ...initialRigState(), ...initial }
  const ambient = { blink: 0, breath: 0 }
  const last = new Map<Element, string>()

  const set = (el: Element, value: string) => {
    if (last.get(el) === value) return
    last.set(el, value)
    el.setAttribute('transform', value)
  }

  const render = () => {
    const s = state
    const w = s.walk
    const sinP = Math.sin(s.phase)
    const cosP = Math.cos(s.phase)

    set(parts.root, `translate(${r(s.x)} ${r(s.y)}) scale(${r(s.scale)})`)
    parts.root.style.opacity = String(s.opacity)

    // Legs. Negative rotation swings the foot forward (the character faces +x).
    const swing = 27 * w
    set(parts.legFrontU, `translate(8 ${HIP_Y}) rotate(${r(-sinP * swing)})`)
    set(parts.legFrontL, `translate(0 31) rotate(${r((0.5 + 0.5 * cosP) * 34 * w)})`)
    set(parts.legBackU, `translate(-8 ${HIP_Y}) rotate(${r(sinP * swing)})`)
    set(parts.legBackL, `translate(0 31) rotate(${r((0.5 - 0.5 * cosP) * 34 * w)})`)

    // Upper body: bob on each step, breathe when idle, lean into the door.
    const bob = -Math.abs(sinP) * 3.2 * w + ambient.breath * (1 - w) * 1.2
    set(parts.body, `translate(0 ${r(bob)}) rotate(${r(-s.lean * 7 + w * 2)} 0 ${HIP_Y})`)

    // Head.
    set(parts.head, `translate(${NECK.x} ${NECK.y}) rotate(${r(s.headTilt * 14 + sinP * 1.5 * w)})`)
    set(parts.eyes, `scale(1 ${r(1 - ambient.blink * 0.92)})`)
    set(parts.pupils, `translate(${r(s.lookX * 2.4)} ${r(s.lookY * 2)})`)
    set(parts.browL, `translate(0 ${r(-s.brow * 2.2)}) rotate(${r(s.brow * 14)} -9 -12)`)
    set(parts.browR, `translate(0 ${r(s.brow * 1.2)}) rotate(${r(-s.brow * 10)} 9 -12)`)
    const m = s.mouth
    const mouthD = `M -7 9 Q 0 ${r(9 + m * 7)} 7 9`
    if (last.get(parts.mouth) !== mouthD) {
      last.set(parts.mouth, mouthD)
      parts.mouth.setAttribute('d', mouthD)
    }

    // Document stack: base pivot at the hands, wobbles harder the more the character struggles.
    const wob = Math.sin(s.wobblePhase) * 7 * s.wobble + Math.sin(s.phase * 2) * 2.2 * w
    // While reaching, the stack is tucked behind the character so the front hand is free.
    set(parts.stack, `translate(${r(46 - 64 * s.reach)} ${r(-86 + 14 * s.reach)}) rotate(${r(wob)})`)
    const fly = s.sheetFly
    set(parts.sheet, `translate(${r(fly * 46)} ${r(-fly * 60 + fly * fly * 234)}) rotate(${r(fly * 170)})`)

    // Arms. Back arm swings gently; front arm carries the stack or reaches for the handle.
    const carry = 1 - s.reach
    set(
      parts.armBackU,
      `translate(${SHOULDER_BACK.x} ${SHOULDER_BACK.y}) rotate(${r(-26 * carry + 40 * s.reach + sinP * 14 * w * carry)})`,
    )
    set(parts.armBackL, `translate(0 18) rotate(${r(-52 * carry + 30 * s.reach + cosP * 6 * w * carry)})`)
    const upper = -30 * carry + -78 * s.reach
    const lower = -60 * carry + -12 * s.reach + Math.sin(s.wobblePhase * 1.3) * 6 * s.reach * s.wobble
    set(parts.armFrontU, `translate(${SHOULDER.x} ${SHOULDER.y}) rotate(${r(upper - sinP * 4 * w)})`)
    set(parts.armFrontL, `translate(0 18) rotate(${r(lower)})`)
  }

  render()
  return { state, ambient, render }
}
