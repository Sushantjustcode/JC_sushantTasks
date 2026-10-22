import type { MotionMode } from '../animation/motion'

const LINKS = [
  { href: '#file', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

interface Props {
  motion: MotionMode
  onMotionChange: (mode: MotionMode) => void
  onNavigate: (hash: string) => void
  onReplay: () => void
}

export function SiteHeader({ motion, onMotionChange, onNavigate, onReplay }: Props) {
  return (
    <header className="site-header">
      <a
        className="site-header__brand"
        href="#top"
        onClick={(e) => {
          e.preventDefault()
          onReplay()
        }}
        aria-label="The Department of Me, back to the top"
      >
        <span aria-hidden="true">▣</span> The Department of Me
      </a>
      <nav aria-label="Sections" className="site-header__nav">
        <ul>
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={(e) => {
                  e.preventDefault()
                  onNavigate(l.href)
                }}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="site-header__tools">
        <button type="button" className="chip" onClick={onReplay}>
          Replay intro
        </button>
        <button
          type="button"
          className="chip"
          aria-pressed={motion === 'reduced'}
          onClick={() => onMotionChange(motion === 'reduced' ? 'full' : 'reduced')}
        >
          Reduce motion: {motion === 'reduced' ? 'on' : 'off'}
        </button>
      </div>
    </header>
  )
}
