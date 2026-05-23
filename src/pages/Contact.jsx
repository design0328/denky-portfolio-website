import styles from './Contact.module.css'

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/denky-girasaki-begonja-b5136b119/',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=61590087941585',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    href: 'mailto:design@denkybegonja.com',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M2 7l10 7 10-7" />
      </svg>
    ),
  },
]

const lookingFor = [
  'Full-time roles',
  'Contract / freelance',
  'Advisory',
  'Collaborations',
]

const contactCards = [
  {
    id: 'email',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="5" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M2 8l9 5.5L20 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    label: 'Email',
    value: 'design@denkybegonja.com',
    href: 'mailto:design@denkybegonja.com',
    cta: 'Send a message',
  },
  {
    id: 'linkedin',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="2" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M6 9.5V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="6" cy="6.5" r="1" fill="currentColor" />
        <path d="M10 16v-3.5a2.5 2.5 0 015 0V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 9.5V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    label: 'LinkedIn',
    value: 'linkedin.com/in/denky-girasaki-begonja',
    href: 'https://www.linkedin.com/in/denky-girasaki-begonja-531936419',
    cta: 'View profile',
  },
]

export default function Contact() {
  return (
    <main className={styles.page}>

      {/* ── Hero ── */}
      <header className={styles.hero}>
        <div className={styles.eyebrow}>
          <span className={styles.eyebrowDot} />
          Get in touch
        </div>

        <h1 className={styles.title}>
          Let's build something<br />
          <span className={styles.titleAccent}>that scales.</span>
        </h1>

        <p className={styles.subtitle}>
          I'm open to full-time roles, contract work, and advisory conversations —
          especially in AI/UX, design systems, and accessibility.
        </p>

        <div className={styles.statusPill}>
          <span className={styles.statusDot} />
          Open to work — New York City Metro Area
        </div>
      </header>

      {/* ── Contact cards ── */}
      <section className={styles.section}>
        <div className={styles.sectionLabel}>
          <span className={styles.labelNum}>01</span>
          <span className={styles.labelText}>Reach out directly</span>
        </div>

        <div className={styles.cards}>
          {contactCards.map((card) => (
            <a
              key={card.id}
              href={card.href}
              target={card.id === 'linkedin' ? '_blank' : undefined}
              rel={card.id === 'linkedin' ? 'noopener noreferrer' : undefined}
              className={styles.card}
            >
              <span className={styles.cardIcon}>{card.icon}</span>
              <span className={styles.cardBody}>
                <span className={styles.cardLabel}>{card.label}</span>
                <span className={styles.cardValue}>{card.value}</span>
              </span>
              <span className={styles.cardCta}>
                {card.cta}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>
          ))}
        </div>

        <div className={styles.socialRow}>
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
      </section>

      {/* ── What I'm looking for ── */}
      <section className={styles.section}>
        <div className={styles.sectionLabel}>
          <span className={styles.labelNum}>02</span>
          <span className={styles.labelText}>What I'm looking for</span>
        </div>

        <p className={styles.lookingIntro}>
          I work best when the problem is structural and the team is thoughtful.
          Whether it's shaping a design system from scratch, embedding governance
          into an AI product, or helping a team get unstuck — I'm interested in work
          that has real scope and real stakes.
        </p>

        <div className={styles.chips}>
          {lookingFor.map((chip) => (
            <span key={chip} className={styles.chip}>{chip}</span>
          ))}
        </div>
      </section>

      {/* ── Closing note ── */}
      <div className={styles.closing}>
        <p className={styles.closingText}>
          Not sure if I'm the right fit? Reach out anyway.
          The best conversations start with curiosity.
        </p>
        <a href="mailto:design@denkybegonja.com" className={styles.closingBtn}>
          Email me
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>

    </main>
  )
}
