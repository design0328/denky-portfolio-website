import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/denky-girasaki-begonja/',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    href: 'mailto:design@denkybegonja.com',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M2 7l10 7 10-7" />
      </svg>
    ),
  },
]

const workLinks = [
  { to: '/work/dqe',                label: 'Design Quality Engine' },
  { to: '/work/ai-training-portal', label: 'AI Training Portal'    },
  { to: '/work/design-hub',         label: 'Design Hub'            },
]

const pageLinks = [
  { to: '/',        label: 'Home'       },
  { to: '/work',    label: 'Work'       },
  { to: '/gallery', label: 'Gallery'    },
  { to: '/about',   label: 'About'      },
  { to: '/process', label: 'Process'    },
  { to: '/contact', label: 'Contact'    },
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
              <li>
                <Link to="/work" className={styles.colLinkAll}>View all work →</Link>
              </li>
            </ul>
          </div>

          {/* Page links */}
          <div className={styles.col}>
            <div className={styles.colLabel}>Pages</div>
            <ul className={styles.colLinks}>
              {pageLinks.map(({ to, label }) => (
                <li key={label}>
                  <Link to={to} className={styles.colLink}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <span className={styles.copy}>
            © 2026 <span className={styles.copyAccent}>Denky Begonja</span> · All rights reserved
          </span>

          <div className={styles.socialIcons}>
            {socialLinks.map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                className={styles.socialIcon}
                aria-label={label}
              >
                {icon}
              </a>
            ))}
          </div>

          <span className={styles.byline}>DESIGNED &amp; BUILT BY DENKY</span>
        </div>

      </div>
    </footer>
  )
}
