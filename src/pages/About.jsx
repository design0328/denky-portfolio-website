import styles from './About.module.css'

const skills = [
  { category: 'Design',       items: ['Figma', 'FigJam', 'MUI', 'Google Sites'] },
  { category: 'Development',  items: ['VS Code', 'GitHub', 'Netlify', 'Vite + React'] },
  { category: 'Collaboration',items: ['Jira', 'Confluence', 'Slack', 'Slack Block Kit'] },
  { category: 'Standards',    items: ['WCAG / W3C', 'Accessibility', 'Design Systems', 'Design Ops'] },
  { category: 'AI & Tools',   items: ['Claude', 'Claude Code', 'ChatGPT', 'Google Gemini', 'Antigravity'] },
]

const values = [
  {
    num: '01',
    title: 'Design from need',
    desc: 'Every solution begins with understanding the audience. I see designers as mediators — our job is to listen, evaluate, and translate real needs into experiences that feel effortless.',
  },
  {
    num: '02',
    title: 'Accessible by default',
    desc: 'Inclusive design isn\'t a checklist — it\'s a commitment. I build systems where everyone feels considered, no matter their ability, context, or device.',
  },
  {
    num: '03',
    title: 'Simple on the surface, rigorous underneath',
    desc: 'The simplest solutions often involve the most research and the most redirections. I embrace that complexity quietly, so the people using the product never have to feel it.',
  },
  {
    num: '04',
    title: 'Collaboration over credit',
    desc: 'I don\'t mind being in the shadows if the work speaks for itself. I\'d rather ask one more question than make one wrong assumption — and the best ideas usually come from listening.',
  },
]

export default function About() {
  return (
    <main className={styles.page}>

      {/* ── Hero ── */}
      <header className={styles.hero}>
        <div className={styles.heroLeft}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowRule} />
            <span className={styles.eyebrowText}>About</span>
          </div>
          <h1 className={styles.title}>
            The person<br />
            <span className={styles.titleAccent}>behind the systems.</span>
          </h1>
          <p className={styles.location}>
            <span className={styles.locationDot} />
            New York City Metro Area
          </p>
        </div>

        {/* Headshot */}
        <div className={styles.headshotWrap}>
          <div className={styles.headshotFrame}>
            <img
              src="/headshot_bg.png"
              alt="Denky Girasaki Begonja"
              className={styles.headshot}
            />
          </div>
          <div className={styles.headshotTag}>
            <span className={styles.headshotTagDot} />
            Open to Work
          </div>
        </div>
      </header>

      {/* ── Bio ── */}
      <section className={styles.section}>
        <div className={styles.sectionLabel}>
          <span className={styles.labelNum}>01</span>
          <span className={styles.labelText}>Background</span>
        </div>
        <div className={styles.bioGrid}>
          <div className={styles.bioMain}>
            <p className={styles.bioPull}>
              I was always the kid who stayed inside to draw — getting lost in the act of creating something from nothing.
            </p>
            <p className={styles.bioPara}>
              That instinct carried me through art school at the New York Institute of Technology and into my first design role at CA Technologies, where I got to work on projects I didn't even know existed yet — like designing specs for a recreation of our Internet Security boxes scaled to 10 feet for display at CES. It was the kind of work that taught me design lives far beyond the screen.
            </p>
            <p className={styles.bioPara}>
              As technology evolved, so did I. I've always been quick to adapt and hungry to learn — and somewhere along the way, I started noticing the gaps no one else was filling. Not the missing pixels, but the missing systems. The inconsistent patterns. The accessibility gaps. The teams building AI features without any shared language for what those features should feel like, or how they should behave when something goes wrong.
            </p>
            <p className={styles.bioPara}>
              So I built those systems myself. At ZoomInfo, that meant creating the AIUI Pattern Library, the Design Quality Engine, the Design Hub — infrastructure that didn't exist until someone decided it needed to. That someone tends to be me.
            </p>
          </div>
          <div className={styles.bioSide}>
            <div className={styles.bioCard}>
              <div className={styles.bioCardLabel}>Education</div>
              <div className={styles.bioCardValue}>New York Institute of Technology</div>
              <div className={styles.bioCardSub}>BFA Graphic Design · Fine Arts · Computer Graphics</div>
            </div>
            <div className={styles.bioCard}>
              <div className={styles.bioCardLabel}>Most Recent Role</div>
              <div className={styles.bioCardValue}>ZoomInfo</div>
              <div className={styles.bioCardSub}>AI Enablement · Design Systems · Accessibility</div>
            </div>
            <div className={styles.bioCard}>
              <div className={styles.bioCardLabel}>Specialization</div>
              <div className={styles.bioCardValue}>UX Systems · AI/UX · Design Ops · Accessibility</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Philosophy ── */}
      <section className={styles.section}>
        <div className={styles.sectionLabel}>
          <span className={styles.labelNum}>02</span>
          <span className={styles.labelText}>How I Think</span>
        </div>
        <div className={styles.valuesGrid}>
          {values.map((v) => (
            <div key={v.num} className={styles.valueCard}>
              <div className={styles.valueNum}>{v.num}</div>
              <h3 className={styles.valueTitle}>{v.title}</h3>
              <p className={styles.valueDesc}>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Skills ── */}
      <section className={styles.section}>
        <div className={styles.sectionLabel}>
          <span className={styles.labelNum}>03</span>
          <span className={styles.labelText}>Tools & Skills</span>
        </div>
        <div className={styles.skillsGrid}>
          {skills.map(({ category, items }) => (
            <div key={category} className={styles.skillGroup}>
              <div className={styles.skillCategory}>{category}</div>
              <div className={styles.skillItems}>
                {items.map((item) => (
                  <span key={item} className={styles.skillTag}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Community ── */}
      <section className={styles.section}>
        <div className={styles.sectionLabel}>
          <span className={styles.labelNum}>04</span>
          <span className={styles.labelText}>Beyond the Work</span>
        </div>
        <div className={styles.communityWrap}>
          <div className={styles.communityText}>
            <p className={styles.communityPull}>
              The most fulfilling work I've ever done has nothing to do with a screen.
            </p>
            <p className={styles.communityPara}>
              I volunteer with the North Shore Hispanic Chamber of Commerce, supporting community outreach programs and events — turkey drives, toy drives, backpack giveaways, cultural celebrations, and educational seminars and webinars for families in the community.
            </p>
            <p className={styles.communityPara}>
              What makes it especially meaningful is that my daughter, who is 12, has been part of many of these experiences alongside me. Watching her learn what it means to show up for others — that's the work that makes me a better person.
            </p>
          </div>
          <div className={styles.communityCard}>
            <div className={styles.communityCardIcon}>⬡</div>
            <div className={styles.communityCardTitle}>North Shore Hispanic Chamber of Commerce</div>
            <div className={styles.communityCardRole}>Volunteer · Secretary</div>
            <div className={styles.communityCardItems}>
              <span>Turkey & Toy Drives</span>
              <span>Backpack Giveaways</span>
              <span>Cultural Celebrations</span>
              <span>Community Seminars</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <div className={styles.cta}>
        <p className={styles.ctaText}>
          Want to work together or just talk design?
        </p>
        <a href="mailto:design@denkybegonja.com" className={styles.ctaBtn}>
          Get in touch
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>

    </main>
  )
}
