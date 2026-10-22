# The Department of Me

A scroll-driven, hand-drawn portfolio for Sushant Chauhan. A cartoon employee walks into a bureaucratic
department; the visitor's scroll position is the animation timeline.

**Status:** Scene 1 (The Mysterious Entrance) is fully built. Scenes 2–7 are not animated yet. Their content
already renders as plain, accessible HTML below the intro (see "What is and is not done").

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
npm run typecheck
npm run lint       # oxlint
npm test           # vitest (content model + URL safety)
npm run build      # type-check + production build into dist/
npm run preview    # serve dist/ locally
```

Requires Node 20+ (developed on Node 22).

## Stack

React 19, TypeScript, Vite, GSAP (ScrollTrigger, DrawSVG, SplitText), Lenis, hand-built SVG, plain CSS.
Fonts (Fraunces, DM Sans, Caveat) are bundled locally through `@fontsource`. No API keys, no network
calls at runtime.

## How the animation works

- **Native scroll stays in charge.** Lenis only smooths mouse-wheel input on fine-pointer devices, is driven by
  GSAP's ticker and feeds ScrollTrigger. Touch devices and reduced-motion users get plain native scrolling
  with no Lenis instance (`src/animation/ScrollManager.ts`).
- **One scrubbed, pinned timeline per scene** (`src/animation/entranceScene.ts`). Everything is tied to scroll
  progress, so scrolling up rewinds it.
- **Single-writer state.** Timelines tween numbers on `rig.state` (character), `cam` (camera and parallax)
  and `door`; one renderer per object writes the SVG transforms. Two timelines cannot fight over one limb, and
  walk steps are tied to distance travelled (`src/animation/characterRig.ts`).
- **Ambient life** (blinking, clouds, paper scraps, the pigeon and the window watching your cursor) runs
  separately from the scrubbed timeline.
- Portrait and landscape get different camera plans; resizing rebuilds the timeline inside a `gsap.context`
  that is reverted on every rebuild and on unmount.

## Reduced motion

Honours `prefers-reduced-motion` and has a visible "Reduce motion" toggle (persisted in `localStorage`). In
reduced mode there is no pinning, no scrubbing and no Lenis: the entrance is one composed still and all
content and links remain.

## Editing content

All personal content lives in `src/content/portfolio.ts` (typed in `types.ts`). Anything not in the CV is left
`undefined` and shows as a labelled placeholder rather than a made-up value. Currently missing: **email,
LinkedIn, GitHub, portfolio URL, project links, availability**. Project order is `projectOrder`. In dev,
`validateContent` logs remaining gaps to the console. Replace the résumé by overwriting
`public/Sushant_Chauhan_CV.pdf`.

## Deploy

`npm run build`, then upload `dist/` to any static host (Netlify, Vercel, Cloudflare Pages, GitHub Pages).
Single-page, no rewrites needed. For GitHub Pages under a sub-path, set `base` in `vite.config.ts`.

## What is and is not done

Done and checked in a real headless Chromium (desktop 1440×900 and mobile 390×844): the entrance scene
end-to-end, state identical when scrolling back to the same positions, direct navigation, Skip/Replay, resize
rebuilds without duplicate pins, motion toggle, no horizontal overflow, no console errors, lint/typecheck/unit
tests/production build.

Not done: scenes 2–7 as animated scenes (employee file, skills lab, project corridor, career elevator, final
inspection, exit), project detail dialogs, the Playwright test suite, an Open Graph image, and real-device
touch testing. No frame-rate measurement has been taken.

## Notes

- Linting uses oxlint (the Vite 8 template default) instead of ESLint.
- The résumé PDF contains a phone number, and the contact section lists it. Remove it from
  `src/content/portfolio.ts` and the PDF if you do not want it public.
