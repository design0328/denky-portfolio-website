import { Link } from 'react-router-dom'
import styles from './Hero.module.css'

const stats = [
  { value: '80%', label: 'Pilot Agreement Rate' },
  { value: '14',  label: 'AI Training Modules'  },
  { value: '4',   label: 'Enterprise Platforms' },
]

const disciplines = [
  'UX Systems',
  'AI/UX Governance',
  'Design Operations',
  'Accessibility',
  'Design Systems',
]

export default function Hero() {
  return (
    <section className={styles.hero}>

      {/* ── Glows ── */}
      <div className={styles.glowFuchsia} />
      <div className={styles.glowOrange} />

      {/* ── Eyebrow ── */}
      <div className={styles.eyebrow}>
        <span className={styles.eyebrowDot} />
        <span className={styles.eyebrowText}>Available for new opportunities</span>
      </div>

      {/* ── Name ── */}
      <h1 className={styles.name}>
        <span className={styles.nameLine1}>Denky</span>
        <span className={styles.nameLine2}>Begonja</span>
      </h1>

      {/* ── Title row ── */}
      <div className={styles.titleRow}>
        <span className={styles.title}>
          UX Systems Designer · AI/UX · Design Operations
        </span>
        <div className={styles.titleDivider} />
      </div>

      {/* ── Description ── */}
      <p className={styles.desc}>
        I design the systems behind the interfaces —{' '}
        <strong>governance frameworks, interaction patterns,</strong> and{' '}
        <strong>scalable design infrastructure</strong> that help teams build
        trustworthy, accessible, AI-assisted products.
      </p>

      {/* ── CTAs ── */}
      <div className={styles.ctaGroup}>
        <Link to="/work" className={styles.btnPrimary}>
          View Work
          <ArrowIcon />
        </Link>
        <Link to="/contact" className={styles.btnGhost}>
          Get in touch
          <ArrowIcon />
        </Link>
      </div>

      {/* ── Stat cards ── */}
      <div className={styles.statCluster}>
        {stats.map(({ value, label }) => (
          <div key={label} className={styles.statCard}>
            <div className={styles.statValue}>{value}</div>
            <div className={styles.statLabel}>{label}</div>
          </div>
        ))}
      </div>

      {/* ── Discipline tags ── */}
      <div className={styles.disciplines}>
        <span className={styles.disciplinesLabel}>Disciplines —</span>
        {disciplines.map((d) => (
          <span key={d} className={styles.discTag}>{d}</span>
        ))}
      </div>

    </section>
  )
}

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path
        d="M3 7h8M7 3l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
