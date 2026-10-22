export interface ContactLink {
  id: string
  label: string
  /** Leave undefined until the real URL is known. The UI shows a labelled placeholder instead of a link. */
  href?: string
  /** Text shown next to the label, e.g. a phone number. */
  display?: string
}

export interface Owner {
  name: string
  title: string
  tagline: string
  positioning: string
  location: string
  availability?: string
  resumeUrl?: string
}

export interface Project {
  id: string
  title: string
  kind: 'web' | 'game' | '3d'
  summary: string
  highlights: string[]
  technologies: string[]
  problem?: string
  solution?: string
  contribution?: string
  outcome?: string
  image?: string
  liveUrl?: string
  repoUrl?: string
  featured: boolean
}

export interface SkillGroup {
  id: string
  label: string
  items: string[]
}

export interface Milestone {
  id: string
  kind: 'work' | 'training' | 'education' | 'learning'
  title: string
  organisation?: string
  period: string
  points: string[]
}

export interface Achievement {
  id: string
  text: string
  category: 'hackathon' | 'game-dev' | 'sport'
}

export interface PortfolioContent {
  owner: Owner
  contacts: ContactLink[]
  about: string[]
  strengths: string[]
  skills: SkillGroup[]
  projects: Project[]
  milestones: Milestone[]
  achievements: Achievement[]
  /** Display order of project ids. Edit this to reorder the corridor. */
  projectOrder: string[]
}
