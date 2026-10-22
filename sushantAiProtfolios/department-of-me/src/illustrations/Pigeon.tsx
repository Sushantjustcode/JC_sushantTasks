import { C } from './palette'

/**
 * The suspicious pigeon. Origin is between its feet. `data-pigeon="head"` pivots at the neck
 * and `data-pigeon="pupil"` slides inside the eye; both are driven by the pointer in entranceScene.ts.
 * `badge` is revealed in the final scene so the same asset returns with an absurdly important badge.
 */
export function Pigeon({ badge = false }: { badge?: boolean }) {
  return (
    <g>
      <path
        d="M-4 -6 L-5 0 M-5 0 l-4 1 M-5 0 l1 2 M5 -6 L5 0 M5 0 l-4 1 M5 0 l1 2"
        stroke={C.mustard}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      {/* tail */}
      <path d="M12 -20 L30 -14 L28 -8 L10 -9 Z" fill={C.gray} stroke={C.ink} strokeWidth="2.4" strokeLinejoin="round" />
      {/* body */}
      <path
        d="M-14 -22 Q-8 -34 8 -31 Q20 -26 15 -14 Q8 -5 -6 -7 Q-18 -10 -14 -22 Z"
        fill={C.gray}
        stroke={C.ink}
        strokeWidth="2.6"
        strokeLinejoin="round"
      />
      <path d="M-12 -17 Q-6 -9 4 -9 Q-4 -14 -12 -17 Z" fill={C.paperShade} opacity="0.8" />
      {/* wing */}
      <path
        d="M-2 -26 Q10 -28 15 -18 Q6 -12 -4 -17 Z"
        fill="#6f6a61"
        stroke={C.ink}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M2 -22 Q8 -22 11 -19" stroke={C.ink} strokeWidth="1.2" fill="none" strokeLinecap="round" />
      {/* neck sheen */}
      <path d="M-14 -27 Q-18 -31 -14 -34" stroke={C.teal} strokeWidth="3" strokeLinecap="round" fill="none" />
      {/* head pivots at the neck */}
      <g data-pigeon="head" transform="translate(-11 -28)">
        <circle cx="-2" cy="-7" r="8.4" fill={C.gray} stroke={C.ink} strokeWidth="2.4" />
        <path
          d="M-9.5 -8 L-19 -5.5 L-9.5 -3 Z"
          fill={C.mustard}
          stroke={C.ink}
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <circle cx="-3.8" cy="-9" r="3.6" fill="#fff" stroke={C.ink} strokeWidth="1.5" />
        <circle data-pigeon="pupil" cx="-4.6" cy="-8.8" r="1.7" fill={C.ink} />
        {/* heavy, unimpressed eyelid */}
        <path
          d="M-7.6 -10.6 Q-3.8 -13.6 0 -10.4 L0 -9.2 L-7.6 -9.2 Z"
          fill={C.gray}
          stroke={C.ink}
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
      </g>
      {badge && (
        <g transform="translate(-4 -24) rotate(-8)">
          <circle r="6" fill={C.burgundy} stroke={C.ink} strokeWidth="1.6" />
          <path
            d="M-3 0 L-1 2.4 L3.4 -2.4"
            stroke={C.paperHi}
            strokeWidth="1.6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      )}
    </g>
  )
}
