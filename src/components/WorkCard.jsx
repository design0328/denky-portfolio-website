import { Link } from 'react-router-dom'
import styles from './WorkCard.module.css'

export default function WorkCard({ project, index }) {
  const { slug, title, company, discipline, desc, chips, thumbnail, featured, summary } = project

  return (
    <Link
      to={`/work/${slug}`}
      className={`${styles.card} ${featured ? styles.featured : ''}`}
      style={{ animationDelay: `${index * 0.14}s` }}
    >
      {/* Thumbnail */}
      <div className={styles.visual}>
        {thumbnail ? (
          <img
            src={thumbnail}
            alt={`${title} thumbnail`}
            className={styles.thumbnail}
            onError={(e) => { e.currentTarget.style.display = 'none' }}
          />
        ) : (
          <div className={styles.visualFallback}>
            <div className={styles.visualDots} />
            <div className={styles.visualGlow} />
            <div className={styles.visualLabel}>{title}</div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className={styles.content}>
        <div className={styles.meta}>
          {company}
          <span className={styles.metaDot} />
          {discipline}
        </div>
        {project.eyebrow && (
          <p className={styles.eyebrow}>{project.eyebrow}</p>
        )}
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.desc}>{summary || desc}</p>
        <div className={styles.footer}>
          <div className={styles.chips}>
            {chips.map((chip) => (
              <span key={chip.label} className={`${styles.chip} ${chip.accent ? styles[chip.accent] : ''}`}>
                {chip.label}
              </span>
            ))}
          </div>
          <span className={styles.arrow}>↗</span>
        </div>
      </div>
    </Link>
  )
}
