import { useParams, Link, Navigate } from 'react-router-dom'
import { projects } from '../data/projects'
import styles from './CaseStudy.module.css'

export default function CaseStudy() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  if (!project) return <Navigate to="/work" replace />

  const { title, company, year, discipline, desc, chips, thumbnail, overview, role, impact } = project

  return (
    <main className={styles.page}>

      {/* Back */}
      <Link to="/work" className={styles.back}>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M11 7H3M7 3L3 7l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        All Work
      </Link>

      {/* Hero banner */}
      <div className={styles.banner}>
        <img src={thumbnail} alt={title} style={{width:'100%', height:'100%', objectFit:'contain', objectPosition:'center', background:'#13131f'}} />
      </div>

      {/* Header */}
      <header className={styles.header}>
        <div className={styles.meta}>
          {company}
          <span className={styles.metaDot} />
          {year}
          <span className={styles.metaDot} />
          {discipline}
        </div>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.desc}>{desc}</p>
        <div className={styles.chips}>
          {chips.map((chip) => (
            <span key={chip.label} className={`${styles.chip} ${chip.accent ? styles[chip.accent] : ''}`}>
              {chip.label}
            </span>
          ))}
        </div>
      </header>

      {/* Content sections */}
      <div className={styles.body}>

        <Section title="Overview" items={overview} />
        <Section title="My Role" items={role} />
        <Section title="Impact" items={impact} accent />

        {project.screenshots && project.screenshots.length > 0 && (
          <div className={styles.screenshotsSection}>
            {[...new Set(project.screenshots.map((s) => s.section))].map((section) => (
              <div key={section} className={styles.screenshotGroup}>
                <h3 className={styles.screenshotGroupLabel}>{section}</h3>
                <div className={styles.screenshotGrid}>
                  {project.screenshots
                    .filter((s) => s.section === section)
                    .map((shot) => (
                      <figure key={shot.file} className={styles.screenshotFigure}>
                        <img
                          src={`/denky-portfolio-website/screenshots/${project.slug}/${shot.file}`}
                          alt={shot.label}
                          className={styles.screenshotImg}
                        />
                        <figcaption className={styles.screenshotCaption}>{shot.label}</figcaption>
                      </figure>
                    ))}
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* Next project */}
      <NextProject current={slug} />

    </main>
  )
}

function Section({ title, items, accent }) {
  const num = { Overview: '01', 'My Role': '02', Impact: '03' }[title] || '00'
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>
        <span className={styles.sectionNum}>{num}</span>
        {title}
      </h2>
      <ul className={styles.list}>
        {items.map((item, i) => (
          <li key={i} className={`${styles.listItem} ${accent ? styles.accent : ''}`}>
            <span className={styles.listDot} />
            {item}
          </li>
        ))}
      </ul>
    </section>
  )
}

function NextProject({ current }) {
  const idx  = projects.findIndex((p) => p.slug === current)
  const next = projects[(idx + 1) % projects.length]
  return (
    <div className={styles.nextWrap}>
      <span className={styles.nextLabel}>Next Project</span>
      <Link to={`/work/${next.slug}`} className={styles.nextLink}>
        {next.title}
        <svg width="18" height="18" viewBox="0 0 14 14" fill="none">
          <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </Link>
    </div>
  )
}
