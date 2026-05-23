import styles from './Contact.module.css'

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
