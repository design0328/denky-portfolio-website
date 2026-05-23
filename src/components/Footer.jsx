import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

const workLinks = [
  { to: '/work/dqe',                label: 'Design Quality Engine' },
  { to: '/work/ai-training-portal', label: 'AI Training Portal'    },
  { to: '/work/aiui-pattern-library',label: 'AIUI Pattern Library' },
  { to: '/work/design-hub',         label: 'Design Hub'            },
]

const pageLinks = [
  { to: '/about',   label: 'About'      },
  { to: '/process', label: 'Process'    },
  { to: '/contact', label: 'Contact'    },
  { href: 'https://www.linkedin.com/in/denkybegonja/', label: 'LinkedIn ↗', external: true },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>

        <div className={styles.top}>
          {/* Brand */}
          <div className={styles.brand}>
            <div className={styles.logo}>DENKY BEGONJA</div>
            <p className={styles.tagline}>
              UX Systems · AI/UX Governance<br />
              Accessibility · Design Operations
            </p>
          </div>

          {/* Work links */}
          <div className={styles.col}>
            <div className={styles.colLabel}>Work</div>
            <ul className={styles.colLinks}>
              {workLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className={styles.colLink}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Page links */}
          <div className={styles.col}>
            <div className={styles.colLabel}>Pages</div>
            <ul className={styles.colLinks}>
              {pageLinks.map(({ to, href, label, external }) => (
                <li key={label}>
                  {external
                    ? <a href={href} target="_blank" rel="noreferrer" className={styles.colLink}>{label}</a>
                    : <Link to={to} className={styles.colLink}>{label}</Link>
                  }
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <span className={styles.copy}>
            © 2026 <span className={styles.copyAccent}>Denky Begonja</span> · All rights reserved
          </span>
          <span className={styles.byline}>DESIGNED &amp; BUILT BY DENKY</span>
        </div>

      </div>
    </footer>
  )
}
