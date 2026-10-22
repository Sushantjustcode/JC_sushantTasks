import { portfolio } from '../content/portfolio'
import { isExternal, orderedProjects, safeUrl } from '../content/validate'
import type { ContactLink } from '../content/types'

/**
 * The readable content layer. It is plain semantic HTML rendered from the typed content
 * model, so it works with no animation at all. The remaining story scenes will animate
 * this same data rather than replace it.
 */
export function ContentSections() {
  const { owner, about, strengths, skills, milestones, achievements, contacts } = portfolio
  const projects = orderedProjects(portfolio)
  const resume = safeUrl(owner.resumeUrl)

  return (
    <main id="main" className="content">
      {import.meta.env.DEV && (
        <p className="dev-note">
          Dev note: scene 1 (the entrance) is the animated build so far. The sections below are the plain-HTML content
          layer that scenes 2–7 will animate. This note does not appear in production builds.
        </p>
      )}

      <section id="file" className="sheet" aria-labelledby="file-h" tabIndex={-1}>
        <p className="eyebrow">Scene 2 · The Employee File</p>
        <h2 id="file-h">About {owner.name}</h2>
        {about.map((p) => (
          <p key={p} className="prose">
            {p}
          </p>
        ))}
        <h3>Core strengths</h3>
        <ul className="tags">
          {strengths.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </section>

      <section id="skills" className="sheet" aria-labelledby="skills-h" tabIndex={-1}>
        <p className="eyebrow">Scene 3 · The Skills Laboratory</p>
        <h2 id="skills-h">Technical skills</h2>
        <div className="skill-grid">
          {skills.map((g) => (
            <div key={g.id} className="skill-group">
              <h3>{g.label}</h3>
              <ul className="tags">
                {g.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="sheet" aria-labelledby="projects-h" tabIndex={-1}>
        <p className="eyebrow">Scene 4 · The Project Corridor</p>
        <h2 id="projects-h">Selected projects</h2>
        <ol className="project-list">
          {projects.map((p) => {
            const live = safeUrl(p.liveUrl)
            const repo = safeUrl(p.repoUrl)
            return (
              <li key={p.id} id={`project-${p.id}`} className="project">
                <h3>{p.title}</h3>
                <p className="project__summary">{p.summary}</p>
                <ul className="project__points">
                  {p.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
                <ul className="tags" aria-label={`Technologies used in ${p.title}`}>
                  {p.technologies.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                {(live || repo) && (
                  <p className="project__links">
                    {live && (
                      <a href={live} target="_blank" rel="noopener noreferrer">
                        Live demo
                      </a>
                    )}
                    {repo && (
                      <a href={repo} target="_blank" rel="noopener noreferrer">
                        Source code
                      </a>
                    )}
                  </p>
                )}
              </li>
            )
          })}
        </ol>
      </section>

      <section id="experience" className="sheet" aria-labelledby="exp-h" tabIndex={-1}>
        <p className="eyebrow">Scene 5 · The Career Elevator</p>
        <h2 id="exp-h">Experience & education</h2>
        <ol className="timeline">
          {milestones.map((m) => (
            <li key={m.id}>
              <p className="timeline__period">{m.period}</p>
              <h3>{m.title}</h3>
              {m.organisation && <p className="timeline__org">{m.organisation}</p>}
              {m.points.length > 0 && (
                <ul className="project__points">
                  {m.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ol>
      </section>

      <section id="inspection" className="sheet" aria-labelledby="ach-h" tabIndex={-1}>
        <p className="eyebrow">Scene 6 · The Final Inspection</p>
        <h2 id="ach-h">Achievements</h2>
        <ul className="achievements">
          {achievements.map((a) => (
            <li key={a.id}>{a.text}</li>
          ))}
        </ul>
        <p className="prose prose--small">References and additional project links available on request.</p>
      </section>

      <section id="contact" className="sheet" aria-labelledby="contact-h" tabIndex={-1}>
        <p className="eyebrow">Scene 7 · The Exit Interview</p>
        <h2 id="contact-h">Get in touch</h2>
        {owner.availability && <p className="prose">{owner.availability}</p>}
        <ul className="contacts">
          {contacts.map((c) => (
            <ContactItem key={c.id} contact={c} />
          ))}
          {resume && (
            <li>
              <span className="contacts__label">Résumé</span>
              <a href={resume} download>
                Download PDF
              </a>
            </li>
          )}
        </ul>
        <p className="prose prose--small">Based in {owner.location}.</p>
      </section>
    </main>
  )
}

function ContactItem({ contact }: { contact: ContactLink }) {
  const href = safeUrl(contact.href)
  return (
    <li>
      <span className="contacts__label">{contact.label}</span>
      {href ? (
        <a href={href} {...(isExternal(href) ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
          {contact.display ?? href.replace(/^(https?:\/\/|mailto:)/, '')}
        </a>
      ) : (
        <span className="placeholder" title="Add this in src/content/portfolio.ts">
          [{contact.label.toUpperCase()} — not provided yet]
        </span>
      )}
    </li>
  )
}
