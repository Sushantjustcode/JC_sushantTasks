import { describe, expect, it } from 'vitest'
import { portfolio } from './portfolio'
import { orderedProjects, safeUrl, validateContent } from './validate'

describe('safeUrl', () => {
  it('accepts http, https, mailto, tel, bare emails and root-relative paths', () => {
    expect(safeUrl('https://example.com')).toBe('https://example.com/')
    expect(safeUrl('mailto:a@b.co')).toBe('mailto:a@b.co')
    expect(safeUrl('a@b.co')).toBe('mailto:a@b.co')
    expect(safeUrl('tel:+911234567890')).toBe('tel:+911234567890')
    expect(safeUrl('/cv.pdf')).toBe('/cv.pdf')
  })
  it('rejects scripts, protocol-relative and empty values', () => {
    expect(safeUrl('javascript:alert(1)')).toBeUndefined()
    expect(safeUrl('//evil.example')).toBeUndefined()
    expect(safeUrl('')).toBeUndefined()
    expect(safeUrl(undefined)).toBeUndefined()
  })
})

describe('portfolio content', () => {
  it('has a consistent project order', () => {
    const issues = validateContent(portfolio).filter((i) => /projectOrder|Duplicate|missing from/.test(i))
    expect(issues).toEqual([])
  })
  it('returns every project in the configured order', () => {
    expect(orderedProjects(portfolio).map((p) => p.id)).toEqual(portfolio.projectOrder)
  })
  it('contains no unsafe URLs', () => {
    expect(validateContent(portfolio).filter((i) => /unsafe/.test(i))).toEqual([])
  })
})
