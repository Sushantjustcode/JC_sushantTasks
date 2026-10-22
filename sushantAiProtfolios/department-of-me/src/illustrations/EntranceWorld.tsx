import type { ReactNode } from 'react'
import { Character } from './Character'
import { Pigeon } from './Pigeon'
import { C } from './palette'

/** A path rendered as a colour fill (fades in) plus an ink outline (drawn on with DrawSVG). */
function Inked({ d, fill, w = 3.2 }: { d: string; fill?: string; w?: number }) {
  return (
    <>
      {fill && <path className="b-fill" d={d} fill={fill} />}
      <path
        className="b-line"
        d={d}
        fill="none"
        stroke={C.ink}
        strokeWidth={w}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  )
}

function Cloud({ id, scale = 1 }: { id: string; scale?: number }) {
  return (
    <g data-cloud={id} transform={`scale(${scale})`}>
      <path
        d="M0 40 Q-10 14 22 16 Q30 -10 62 4 Q86 -14 108 12 Q140 8 138 36 Q130 48 100 46 L18 48 Q2 50 0 40 Z"
        fill={C.paperHi}
        stroke={C.ink}
        strokeWidth="2.6"
        strokeLinejoin="round"
        opacity="0.92"
      />
      <path
        d="M26 34 Q40 28 52 34 M78 30 Q92 24 104 31"
        fill="none"
        stroke={C.ink}
        strokeWidth="1.6"
        strokeLinecap="round"
        opacity="0.4"
      />
    </g>
  )
}

function Scrap({ id, d }: { id: string; d: string }) {
  return (
    <g data-scrap={id}>
      <path d={d} fill={C.paperHi} stroke={C.ink} strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M-4 -1 H4 M-4 3 H2" stroke={C.ink} strokeWidth="1" opacity="0.5" strokeLinecap="round" />
    </g>
  )
}

function WindowFrame({
  x,
  y,
  w,
  h,
  rot,
  lit,
  children,
}: {
  x: number
  y: number
  w: number
  h: number
  rot: number
  lit?: boolean
  children?: ReactNode
}) {
  const cx = x + w / 2
  const cy = y + h / 2
  return (
    <g transform={`rotate(${rot} ${cx} ${cy})`}>
      <rect className="b-fill" x={x} y={y} width={w} height={h} rx="3" fill={lit ? C.mustard : C.paperHi} />
      {children}
      <rect className="b-line" x={x} y={y} width={w} height={h} rx="3" fill="none" stroke={C.ink} strokeWidth="3" />
      <path
        className="b-line"
        d={`M${cx} ${y} V${y + h} M${x} ${cy} H${x + w}`}
        stroke={C.ink}
        strokeWidth="2.2"
        fill="none"
        strokeLinecap="round"
      />
    </g>
  )
}

/**
 * Everything in the entrance illustration. Layers carry `data-depth` so the camera can
 * parallax them; the camera itself is applied by animation/entranceScene.ts.
 */
export function EntranceWorld() {
  return (
    <>
      {/* far sky: sun + sketchy rays */}
      <g data-layer="sky" data-depth="0.05">
        <rect x="-2400" y="-1600" width="6800" height="2400" fill={C.paper} />
        <circle cx="1390" cy="210" r="92" fill={C.mustard} opacity="0.5" />
        <circle
          cx="1390"
          cy="210"
          r="104"
          fill="none"
          stroke={C.ink}
          strokeWidth="2"
          strokeDasharray="6 9"
          opacity="0.35"
        />
        <path
          d="M1390 70 V40 M1510 110 L1534 88 M1270 110 L1246 88 M1530 212 H1560 M1250 212 H1220"
          stroke={C.ink}
          strokeWidth="2.4"
          strokeLinecap="round"
          opacity="0.35"
        />
      </g>

      <g data-layer="hills" data-depth="0.25">
        <path
          d="M-1400 760 Q-900 520 -420 640 Q80 470 560 640 Q1000 540 1500 650 Q2100 500 2700 700 L2700 900 L-1400 900 Z"
          fill={C.teal}
          opacity="0.32"
        />
        <path
          d="M-1400 760 Q-900 520 -420 640 Q80 470 560 640 Q1000 540 1500 650 Q2100 500 2700 700"
          fill="none"
          stroke={C.ink}
          strokeWidth="2"
          opacity="0.35"
          strokeDasharray="14 7"
        />
      </g>

      <g data-layer="clouds" data-depth="0.4">
        <Cloud id="a" scale={1.3} />
        <Cloud id="b" scale={0.9} />
        <Cloud id="c" scale={1.1} />
      </g>

      {/* the world layer: ground, building, character */}
      <g data-layer="world" data-depth="1">
        <path d="M-2400 744 Q-1000 738 0 744 T1400 742 T3500 744 L3500 1700 L-2400 1700 Z" fill={C.paperShade} />
        <path
          d="M-2400 744 Q-1000 738 0 744 T1400 742 T3500 744"
          fill="none"
          stroke={C.ink}
          strokeWidth="3.4"
          strokeLinecap="round"
        />
        <path
          d="M60 768 l30 -2 M240 790 l44 3 M520 772 l26 -2 M1290 770 l40 2 M1520 792 l30 -3 M760 806 l50 2"
          stroke={C.ink}
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.3"
        />
        <path
          d="M120 744 l-3 -14 l7 10 l4 -13 l4 14 M610 744 l-2 -12 l6 9 l4 -11 l3 13 M1330 744 l-3 -13 l6 9 l4 -12 l4 14"
          fill="none"
          stroke={C.teal}
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* THE BUILDING */}
        <g data-building>
          <Inked fill={C.teal} d="M812 741 L817 404 Q1000 396 1184 406 L1190 739 Z" />
          <Inked fill={C.burgundy} d="M786 410 L1002 296 L1216 412 Q1000 424 786 410 Z" />
          <path
            className="b-extra"
            d="M820 404 Q1000 414 1180 406"
            fill="none"
            stroke={C.paperHi}
            strokeWidth="2"
            strokeLinecap="round"
          />
          {/* oculus */}
          <g transform="translate(1002 360)">
            <circle className="b-fill" r="22" fill={C.paperHi} />
            <circle className="b-line" r="22" fill="none" stroke={C.ink} strokeWidth="3" />
            <path className="b-line" d="M-22 0 H22 M0 -22 V22" stroke={C.ink} strokeWidth="2" fill="none" />
          </g>
          {/* bent flag pole */}
          <path
            className="b-line"
            d="M1002 297 Q996 266 1008 232"
            fill="none"
            stroke={C.ink}
            strokeWidth="3.4"
            strokeLinecap="round"
          />
          <Inked fill={C.mustard} d="M1008 234 Q1034 222 1056 238 Q1036 250 1006 250 Z" w={2.6} />
          {/* lopsided chimney + smoke */}
          <Inked fill={C.gray} d="M872 376 L876 322 L916 320 L920 366" w={3} />
          <path
            className="b-extra"
            d="M896 312 Q880 292 900 278 Q918 264 902 244 Q892 230 906 218"
            fill="none"
            stroke={C.ink}
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeDasharray="1 7"
          />

          {/* sign plaque */}
          <g>
            <Inked fill={C.paperHi} d="M870 452 L1134 447 L1138 506 L866 511 Z" w={3} />
            <text
              x="1002"
              y="488"
              textAnchor="middle"
              textLength="236"
              lengthAdjust="spacingAndGlyphs"
              className="svg-sign"
              aria-hidden="true"
            >
              THE DEPARTMENT OF ME
            </text>
            <path
              className="b-extra"
              d="M876 458 l8 0 M1122 500 l8 0"
              stroke={C.ink}
              strokeWidth="2"
              strokeLinecap="round"
            />
          </g>

          {/* crooked windows */}
          <WindowFrame x={836} y={546} w={70} h={74} rot={-4} lit>
            {/* the suspicious window: two eyes watching the visitor */}
            <g data-winEyes className="b-fill">
              <ellipse cx="856" cy="574" rx="8" ry="9" fill="#fff" stroke={C.ink} strokeWidth="2" />
              <ellipse cx="886" cy="574" rx="8" ry="9" fill="#fff" stroke={C.ink} strokeWidth="2" />
              <circle data-winpupil cx="856" cy="575" r="3.4" fill={C.ink} />
              <circle data-winpupil cx="886" cy="575" r="3.4" fill={C.ink} />
              <path d="M846 563 L864 566 M896 563 L878 566" stroke={C.ink} strokeWidth="2.4" strokeLinecap="round" />
            </g>
          </WindowFrame>
          <WindowFrame x={1096} y={540} w={70} h={78} rot={5}>
            <path
              className="b-fill"
              d="M1098 542 Q1112 580 1098 616 L1134 616 Q1118 580 1134 542 Z"
              fill={C.burgundy}
              opacity="0.85"
            />
            <path
              className="b-fill"
              d="M1152 616 q-4 -16 6 -20 q-8 -2 -4 -14 q10 6 8 16 q6 -6 8 4 q-4 10 -18 14"
              fill={C.teal}
            />
          </WindowFrame>

          {/* steps + door frame */}
          <Inked fill={C.paperShade} d="M930 741 L934 726 L1066 725 L1070 740 Z" w={2.8} />
          <Inked fill={C.paperShade} d="M940 726 L944 712 L1058 711 L1060 725 Z" w={2.8} />
          <Inked fill={C.paperShade} d="M942 712 L944 520 Q1000 504 1058 520 L1058 712 Z" w={3.4} />

          {/* interior, revealed when the door opens */}
          <g data-interior className="b-fill">
            <defs>
              <linearGradient id="doorGlow" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor={C.paperHi} />
                <stop offset="1" stopColor={C.mustard} />
              </linearGradient>
              <clipPath id="doorClip">
                <path d="M950 712 L950 526 Q1000 512 1050 526 L1050 712 Z" />
              </clipPath>
            </defs>
            <g clipPath="url(#doorClip)">
              <rect x="940" y="500" width="120" height="230" fill="url(#doorGlow)" />
              <path
                d="M950 640 L1050 664 M950 600 L1050 620 M950 560 L1050 572"
                stroke={C.ink}
                strokeWidth="1.6"
                opacity="0.25"
              />
              <path d="M968 530 V572 M1000 522 V560 M1034 530 V572" stroke={C.ink} strokeWidth="2" opacity="0.5" />
              <rect x="958" y="606" width="26" height="106" fill={C.gray} stroke={C.ink} strokeWidth="2.4" />
              <path d="M958 628 H984 M958 650 H984 M958 672 H984 M958 694 H984" stroke={C.ink} strokeWidth="2" />
              <rect
                x="1010"
                y="640"
                width="30"
                height="72"
                fill={C.burgundy}
                stroke={C.ink}
                strokeWidth="2.4"
                opacity="0.9"
              />
            </g>
          </g>

          {/* the door itself: hinged on the right, so the handle side swings away from the visitor */}
          <g data-door className="b-fill">
            <path
              d="M950 712 L950 526 Q1000 512 1050 526 L1050 712 Z"
              fill={C.mustard}
              stroke={C.ink}
              strokeWidth="3.4"
              strokeLinejoin="round"
            />
            <path
              d="M966 530 L966 712 M984 524 L984 712 M1002 522 L1002 712 M1020 524 L1020 712 M1036 528 L1036 712"
              stroke={C.ink}
              strokeWidth="1.6"
              opacity="0.3"
            />
            <rect x="974" y="566" width="52" height="22" rx="2" fill={C.paperHi} stroke={C.ink} strokeWidth="2.2" />
            <path d="M980 574 H1018 M980 580 H1008" stroke={C.ink} strokeWidth="1.4" strokeLinecap="round" />
            <circle cx="966" cy="646" r="6.2" fill={C.paperHi} stroke={C.ink} strokeWidth="2.6" />
            <path
              d="M952 660 L962 664 M1040 612 l6 4"
              stroke={C.ink}
              strokeWidth="1.6"
              strokeLinecap="round"
              opacity="0.5"
            />
          </g>

          {/* the pigeon waits on the roof edge */}
          <g transform="translate(1166 413) scale(1.15)" data-pigeon-root>
            <Pigeon />
          </g>
        </g>

        {/* the protagonist */}
        <Character />
      </g>

      <g data-layer="front" data-depth="1.25">
        <Scrap id="s1" d="M-8 -6 L7 -9 L9 5 L-6 8 Z" />
        <Scrap id="s2" d="M-7 -8 L6 -6 L8 7 L-9 6 Z" />
        <Scrap id="s3" d="M-9 -4 L5 -9 L9 3 L-5 8 Z" />
        <Scrap id="s4" d="M-6 -7 L8 -8 L7 6 L-8 7 Z" />
        <Scrap id="s5" d="M-8 -5 L6 -8 L9 6 L-7 7 Z" />
      </g>
    </>
  )
}
