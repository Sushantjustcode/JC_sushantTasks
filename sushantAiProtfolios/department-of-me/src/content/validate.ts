import type { PortfolioContent } from './types'

const SAFE_PROTOCOLS = new Set(['http:', 'https:', 'mailto:', 'tel:'])

/** Returns a normalised URL string if it is safe to render as a link, otherwise undefined. */
export function safeUrl(raw: string | undefined): string | undefined {
  if (!raw) return undefined

  const trimmed = raw.trim()
  if (!trimmed) return undefined
  if (trimmed.startsWith('/') && !trimmed.startsWith('//')) return trimmed

  const candidate = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed) ? `mailto:${trimmed}` : trimmed

  try {
    const url = new URL(candidate)
    return SAFE_PROTOCOLS.has(url.protocol) ? url.toString() : undefined
  } catch {
    return undefined
  }
}

export function isExternal(href: string): boolean {
  return /^https?:/i.test(href)
}

/** Lists content gaps so placeholders are visible during development. */
export function validateContent(content: PortfolioContent): string[] {
  const issues: string[] = []
  const ids = new Set(content.projects.map((p) => p.id))

  if (ids.size !== content.projects.length) issues.push('Duplicate project ids.')
  for (const id of content.projectOrder) {
    if (!ids.has(id)) issues.push(`projectOrder references unknown project "${id}".`)
  }
  for (const p of content.projects) {
    if (!content.projectOrder.includes(p.id)) issues.push(`Project "${p.id}" is missing from projectOrder.`)
  }
  for (const c of content.contacts) {
    if (c.href && !safeUrl(c.href)) issues.push(`Contact "${c.id}" has an unsafe or invalid URL.`)
    if (!c.href) issues.push(`Contact "${c.id}" has no URL yet (placeholder shown).`)
  }
  for (const p of content.projects) {
    for (const key of ['liveUrl', 'repoUrl'] as const) {
      const value = p[key]
      if (value && !safeUrl(value)) issues.push(`Project "${p.id}" ${key} is unsafe or invalid.`)
    }
  }
  if (!content.owner.resumeUrl) issues.push('No résumé URL set.')
  return issues
}

export function orderedProjects(content: PortfolioContent) {
  const byId = new Map(content.projects.map((p) => [p.id, p]))
  return content.projectOrder.flatMap((id) => {
    const project = byId.get(id)
    return project ? [project] : []
  })
}
