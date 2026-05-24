import { useParams, Link, Navigate } from 'react-router-dom'
import { projects } from '../data/projects'
import styles from './CaseStudy.module.css'

export default function CaseStudy() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  if (!project) return <Navigate to="/work" replace />

  const {
    title,
    company,
    year,
    discipline,
    desc,
    chips,
    thumbnail,
    overview,
    role,
    impact,
    roleLabel,
    timeline,
    team,
    outcome,
    heroImage,
    heroCaption,
    caseStudySections,
  } = project
  const heroSrc = heroImage || thumbnail

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
      <figure className={styles.banner}>
        <img src={heroSrc} alt={title} className={styles.bannerImg} />
        {heroCaption && <figcaption className={styles.bannerCaption}>{heroCaption}</figcaption>}
      </figure>

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

      <ProjectSnapshot
        items={[
          { label: 'Role', value: roleLabel },
          { label: 'Timeline', value: timeline || year },
          { label: 'Team', value: team || company },
          { label: 'Outcome', value: outcome },
        ]}
      />

      {/* Content sections */}
      <div className={styles.body}>

        <Section title="Overview" items={overview} />
        <Section title="My Role" items={role} />
        <Section title="Impact" items={impact} />

        {caseStudySections && caseStudySections.length > 0 ? (
          <div className={styles.mediaSections}>
            {caseStudySections.map((section) => (
              <MediaSection key={`${section.label}-${section.title}`} projectSlug={project.slug} section={section} />
            ))}
          </div>
        ) : project.screenshots && project.screenshots.length > 0 && (
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

function ProjectSnapshot({ items }) {
  const visibleItems = items.filter((item) => item.value)
  if (visibleItems.length === 0) return null

  return (
    <section className={styles.snapshot} aria-label="Project snapshot">
      {visibleItems.map((item) => (
        <div key={item.label} className={styles.snapshotItem}>
          <div className={styles.snapshotLabel}>{item.label}</div>
          <div className={styles.snapshotValue}>{item.value}</div>
        </div>
      ))}
    </section>
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

function MediaSection({ projectSlug, section }) {
  const imagePath = (file) => `/denky-portfolio-website/screenshots/${projectSlug}/${file}`

  return (
    <section className={styles.mediaSection}>
      <div className={styles.mediaIntro}>
        <div className={styles.mediaLabel}>{section.label}</div>
        <h2 className={styles.mediaTitle}>{section.title}</h2>
        {section.body && <p className={styles.mediaBody}>{section.body}</p>}
      </div>

      {section.type === 'featureImage' && (
        <div className={styles.featureMedia}>
          <figure className={styles.featureFigure}>
            <a href={imagePath(section.image)} target="_blank" rel="noopener noreferrer" className={styles.imageLink}>
              <img src={imagePath(section.image)} alt={section.caption || section.title} className={styles.featureImg} />
            </a>
            {section.caption && <figcaption className={styles.featureCaption}>{section.caption}</figcaption>}
          </figure>
          {section.notes && (
            <ul className={styles.mediaNotes}>
              {section.notes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          )}
        </div>
      )}

      {section.type === 'imagePair' && (
        <div className={styles.mediaPair}>
          {section.images.map((image) => (
            <MediaFigure key={image.file} src={imagePath(image.file)} caption={image.caption} />
          ))}
        </div>
      )}

      {section.type === 'imageGrid' && (
        <div className={styles.mediaGrid}>
          {section.images.map((image) => (
            <MediaFigure key={image.file} src={imagePath(image.file)} caption={image.caption} />
          ))}
        </div>
      )}
    </section>
  )
}

function MediaFigure({ src, caption }) {
  return (
    <figure className={styles.mediaFigure}>
      <a href={src} target="_blank" rel="noopener noreferrer" className={styles.imageLink}>
        <img src={src} alt={caption} className={styles.mediaImg} />
      </a>
      {caption && <figcaption className={styles.mediaCaption}>{caption}</figcaption>}
    </figure>
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
