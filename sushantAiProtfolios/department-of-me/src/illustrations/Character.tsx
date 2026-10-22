import type { ReactNode } from 'react'
import { C } from './palette'

interface LimbProps {
  length: number
  color: string
  width?: number
  children?: ReactNode
}

/** A limb is drawn twice (ink tube, then colour on top) so it reads as an outlined doodle. */
function Limb({ length, color, width = 6, children }: LimbProps) {
  const d = `M0 0 L0.6 ${length}`
  return (
    <>
      <path d={d} stroke={C.ink} strokeWidth={width + 3.4} strokeLinecap="round" fill="none" />
      <path d={d} stroke={color} strokeWidth={width} strokeLinecap="round" fill="none" />
      {children}
    </>
  )
}

const hand = <circle cx="0.6" cy="16.5" r="4.6" fill={C.paperHi} stroke={C.ink} strokeWidth="2.2" />

/**
 * The recurring protagonist. Deliberately neutral: no assumed gender, skin tone or hair,
 * just a doodle with a paper-white head, a teal jacket and a curl on top.
 * Origin (0,0) is the point between the feet; the figure faces +x.
 * Each `data-rig` node is moved by characterRig.ts and nothing else.
 */
export function Character({ stack = true }: { stack?: boolean }) {
  return (
    <g data-rig="root">
      {/* back leg */}
      <g data-rig="legBackU">
        <Limb length={31} color={C.burgundy} width={7}>
          <g data-rig="legBackL" transform="translate(0 31)">
            <Limb length={29} color={C.burgundy} width={7} />
            <path d="M-4 27 Q6 24 12 29 Q13 34 -5 34 Z" fill={C.ink} />
          </g>
        </Limb>
      </g>

      <g data-rig="body">
        {/* back arm */}
        <g data-rig="armBackU">
          <Limb length={18} color={C.teal} width={5.4}>
            <g data-rig="armBackL" transform="translate(0 18)">
              <Limb length={14} color={C.teal} width={5.4}>
                <circle cx="0.6" cy="14.5" r="4.4" fill={C.paperHi} stroke={C.ink} strokeWidth="2.2" />
              </Limb>
            </g>
          </Limb>
        </g>

        {/* torso */}
        <path
          d="M-20 -61 Q-25 -92 -17 -121 Q1 -127 19 -120 Q26 -92 21 -60 Q0 -54 -20 -61 Z"
          fill={C.teal}
          stroke={C.ink}
          strokeWidth="3"
          strokeLinejoin="round"
        />
        {/* lanyard + badge */}
        <path d="M-9 -121 Q-2 -100 6 -121" fill="none" stroke={C.ink} strokeWidth="1.8" />
        <rect
          x="-3"
          y="-103"
          width="12"
          height="15"
          rx="2"
          transform="rotate(-4 3 -95)"
          fill={C.paperHi}
          stroke={C.ink}
          strokeWidth="1.8"
        />
        <path d="M0 -97 H6 M0 -93 H5" stroke={C.ink} strokeWidth="1.4" strokeLinecap="round" />
        {/* hem scribble */}
        <path
          d="M-15 -66 L-6 -64 L2 -66 L10 -63"
          fill="none"
          stroke={C.ink}
          strokeWidth="1.3"
          strokeLinecap="round"
          opacity="0.6"
        />

        {/* head: group pivots at the neck, inner group moves the origin to the face centre */}
        <g data-rig="head">
          <g transform="translate(0 -26)">
            <path
              d="M-4 -22 Q-12 -40 0 -43 Q6 -38 2 -33"
              fill="none"
              stroke={C.ink}
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d="M-24 1 Q-26 -23 -2 -25.5 Q25 -25 25 -1 Q24 24 0 25.5 Q-24 24 -24 1 Z"
              fill={C.paperHi}
              stroke={C.ink}
              strokeWidth="3"
              strokeLinejoin="round"
            />
            <g data-rig="eyes">
              <ellipse cx="-9" cy="-2" rx="6.4" ry="7" fill="#fff" stroke={C.ink} strokeWidth="2" />
              <ellipse cx="10" cy="-2" rx="6.4" ry="7" fill="#fff" stroke={C.ink} strokeWidth="2" />
              <g data-rig="pupils">
                <circle cx="-8" cy="-2" r="2.8" fill={C.ink} />
                <circle cx="11" cy="-2" r="2.8" fill={C.ink} />
              </g>
            </g>
            <path
              data-rig="browL"
              d="M-15 -13 Q-9 -16 -3 -13"
              fill="none"
              stroke={C.ink}
              strokeWidth="2.4"
              strokeLinecap="round"
            />
            <path
              data-rig="browR"
              d="M4 -13 Q10 -16 16 -13"
              fill="none"
              stroke={C.ink}
              strokeWidth="2.4"
              strokeLinecap="round"
            />
            <path
              data-rig="mouth"
              d="M-7 9 Q0 15 7 9"
              fill="none"
              stroke={C.ink}
              strokeWidth="2.4"
              strokeLinecap="round"
            />
            <circle cx="-15" cy="6" r="3" fill={C.burgundy} opacity="0.28" />
            <circle cx="17" cy="6" r="3" fill={C.burgundy} opacity="0.28" />
          </g>
        </g>

        {/* ridiculous stack of documents */}
        <g data-rig="stack" style={{ display: stack ? undefined : 'none' }}>
          <StackSheets />
        </g>

        {/* front arm */}
        <g data-rig="armFrontU">
          <Limb length={18} color={C.teal} width={5.4}>
            <g data-rig="armFrontL" transform="translate(0 18)">
              <Limb length={14} color={C.teal} width={5.4}>
                {hand}
              </Limb>
            </g>
          </Limb>
        </g>
      </g>

      {/* front leg */}
      <g data-rig="legFrontU">
        <Limb length={31} color={C.burgundy} width={7}>
          <g data-rig="legFrontL" transform="translate(0 31)">
            <Limb length={29} color={C.burgundy} width={7} />
            <path d="M-4 27 Q6 24 12 29 Q13 34 -5 34 Z" fill={C.ink} />
          </g>
        </Limb>
      </g>
    </g>
  )
}

/** Base of the stack is at y=0, centred on x=0. Sheets are slightly crooked on purpose. */
function StackSheets() {
  const sheets: { y: number; dx: number; r: number; fill: string }[] = [
    { y: -6, dx: 0, r: 0, fill: C.paperHi },
    { y: -14, dx: 2, r: -1, fill: C.paper },
    { y: -22, dx: -3, r: 1.5, fill: C.paperHi },
    { y: -30, dx: 3, r: -1.2, fill: C.paperShade },
    { y: -38, dx: -1, r: 1, fill: C.paperHi },
    { y: -46, dx: 4, r: -2, fill: C.paper },
    { y: -54, dx: -3, r: 1.6, fill: C.paperHi },
    { y: -62, dx: 2, r: -1.4, fill: C.paper },
    { y: -70, dx: -4, r: 2, fill: C.paperHi },
    { y: -78, dx: 1, r: -1, fill: C.paperShade },
  ]
  return (
    <>
      {sheets.map((s, i) => (
        <g key={i} transform={`translate(${s.dx} ${s.y}) rotate(${s.r})`}>
          <rect x="-22" y="-8" width="44" height="9" rx="1.5" fill={s.fill} stroke={C.ink} strokeWidth="2" />
          <path d="M-15 -4 H3" stroke={C.ink} strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
        </g>
      ))}
      {/* a folder tab and a red stamp, because bureaucracy */}
      <path d="M-22 -50 h14 l3 -5 h-17 z" fill={C.mustard} stroke={C.ink} strokeWidth="1.6" />
      <circle cx="12" cy="-37" r="4.6" fill="none" stroke={C.burgundy} strokeWidth="1.8" />
      {/* the flyaway top sheet */}
      <g data-rig="sheet">
        <g transform="translate(0 -88) rotate(-4)">
          <rect x="-21" y="-8" width="42" height="9" rx="1.5" fill={C.paperHi} stroke={C.ink} strokeWidth="2" />
          <path d="M-14 -4 H8" stroke={C.burgundy} strokeWidth="1.4" strokeLinecap="round" />
        </g>
      </g>
    </>
  )
}
