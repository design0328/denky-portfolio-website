import { useState } from 'react'
import styles from './About.module.css'

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '')

function CompanyLogo({ domain, initials }) {
  const [imgError, setImgError] = useState(false)
  return (
    <div className={styles.companyLogo}>
      {!imgError ? (
        <img
          src={`https://logo.clearbit.com/${domain}`}
          alt=""
          width={40}
          height={40}
          onError={() => setImgError(true)}
          className={styles.companyLogoImg}
        />
      ) : (
        <span className={styles.monogram}>{initials}</span>
      )}
    </div>
  )
}

const testimonials = [
  {
    id: 1,
    quote:
      "She has a great ability to take complex problems — especially around AI, workflows, and design operations — and turn them into practical, scalable solutions.",
    name: 'Meghan Cartlidge',
    title: 'Director of Product Design',
    company: 'ZoomInfo',
    avatar: `${BASE}/testimonials/meghan-cartlidge.jpeg`,
    initials: 'MC',
  },
  {
    id: 2,
    quote:
      "Denky brought a rare combination of reliability, creativity, and genuine care to everything she did. She took ownership of her work, followed through on commitments, and approached challenges with a positive attitude and willingness to learn.",
    name: 'Seth Hartman',
    title: 'Staff Product Designer',
    company: 'ZoomInfo',
    avatar: `${BASE}/testimonials/seth-hartman.jpeg`,
    initials: 'SH',
  },
  {
    id: 3,
    quote:
      "I watched her grow from a UI and graphic design background into a genuinely strong UX designer — and she did it faster than most people do.",
    name: 'Oren Cohen',
    title: 'Senior Product Manager',
    company: 'ZoomInfo',
    avatar: `${BASE}/testimonials/oren-cohen.jpeg`,
    initials: 'OC',
  },
  {
    id: 4,
    quote:
      "One of the things I appreciated most was her ability to make accessibility guidance, workflows, and resources feel approachable and useful for teams across the organization.",
    name: 'Ofra Pinhas Matalon',
    title: 'Senior Product Designer',
    company: 'ZoomInfo',
    avatar: `${BASE}/testimonials/ofra-pinhas-matalon.jpeg`,
    initials: 'OM',
  },
  {
    id: 5,
    quote:
      "Denky brings a thoughtful and structured approach to her work, with a strong balance of UX thinking, systems mindset, collaboration, and operational thinking.",
    name: 'Roni Mergie',
    title: 'Director of Product Design',
    company: 'SysAid',
    avatar: `${BASE}/testimonials/roni_mergie.jpeg`,
    initials: 'RM',
  },
  {
    id: 6,
    quote:
      "Denky is one of those rare people who elevates both the work and the people around her — someone who consistently led with empathy, positivity, curiosity, and a genuine desire to help others succeed.",
    name: 'Megan Daoedsjah',
    title: 'Product Design Manager',
    company: 'ZoomInfo',
    avatar: `${BASE}/testimonials/megan_D.png`,
    initials: 'MD',
  },
  {
    id: 7,
    quote:
      "Denky has an eye for detail and her expertise in accessibility guided many decisions that were critical to the scalability and wide spread adoption of our work.",
    name: 'Vineet Kaushik',
    title: 'Senior Software Engineer',
    company: 'ZoomInfo',
    avatar: null,
    initials: 'VK',
  },
  {
    id: 8,
    quote:
      "I highly recommend Denky as an exceptional UX/UI designer and a remarkably solid professional. We worked closely together on building our corporate Component Library and establishing comprehensive accessibility (WCAG 2.2 AA) standards across the company.",
    name: 'Denis Levkov',
    title: 'Software Engineering Manager',
    company: 'ZoomInfo',
    avatar: `${BASE}/testimonials/denis_L.jpeg`,
    initials: 'DL',
  },
  {
    id: 9,
    quote:
      "When it came to anything UI/UX, I always reached out to Denky to get well-written, well-thought-out feedback — which motivated a project that Denky initiated to help review and automate the improvement of accessibility and usability components across various projects.",
    name: 'Urmzd Mukhammadnaim',
    title: 'Senior AI Engineer',
    company: 'ZoomInfo',
    avatar: `${BASE}/testimonials/urmzd_M.jpeg`,
    initials: 'UM',
  },
  {
    id: 10,
    quote:
      "She didn't just learn the rules of accessibility; she truly understood the purpose behind them. That distinction matters enormously.",
    name: 'Talyah Aviran',
    title: 'Certified Professional in Web Accessibility',
    company: 'Client',
    avatar: `${BASE}/testimonials/Talyah.jpeg`,
    initials: 'TA',
  },
]

const experience = [
  {
    years: '2025–2026',
    company: 'ZoomInfo',
    domain: 'zoominfo.com',
    logoInitials: 'ZI',
    role: 'UX/UI Product Designer — AI Enablement & Workflow Infrastructure',
    desc: 'Built DQE guardrail system, Design Hub, AI Training Portal, and accessibility-aware evaluation workflows.',
  },
  {
    years: '2023–2025',
    company: 'ZoomInfo',
    domain: 'zoominfo.com',
    logoInitials: 'ZI',
    role: 'UX/UI Product Designer — Design Systems & Accessibility',
    desc: 'WCAG operationalization, AIUI pattern library, cross-functional governance and design-engineering workflow alignment.',
  },
  {
    years: '2021–2023',
    company: 'ZoomInfo',
    domain: 'zoominfo.com',
    logoInitials: 'ZI',
    role: 'UX/UI Designer',
    desc: 'Interface design across complex B2B SaaS ecosystems, workflow optimization, cross-functional product collaboration.',
  },
  {
    years: '2016–2021',
    company: 'RingLead / ZoomInfo',
    domain: 'ringlead.com',
    logoInitials: 'RL',
    role: 'Senior Graphic Designer → UX/UI Designer',
    desc: 'Led digital creative initiatives; transitioned into UX during acquisition integration and platform scaling.',
  },
  {
    years: '2013–2016',
    company: 'Total Defense',
    domain: 'totaldefense.com',
    logoInitials: 'TD',
    role: 'Digital Designer',
    desc: 'Designed onboarding flows, dashboards, and in-product UI for cybersecurity software including the Xfinity BotScanner experience.',
  },
  {
    years: '2006–2013',
    company: 'CA Technologies',
    domain: 'ca.com',
    logoInitials: 'CA',
    role: 'Graphic Designer',
    desc: 'Customer-facing digital and print for the Internet Security Business Unit; contributed to web campaigns, product collateral, and events including RSA and DEF CON.',
  },
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
              src={`${BASE}/headshot_bg.png`}
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

      {/* ── Experience ── */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionLabel}>
            <span className={styles.labelNum}>03</span>
            <span className={styles.labelText}>Experience</span>
          </div>
          <a
            href={`${BASE}/Denky_Girasaki_Begonja_Resume_2026.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.resumeBtn}
          >
            View Full Resume ↗
          </a>
        </div>

        <div className={styles.timeline}>
          {experience.map((entry, i) => (
            <div key={i} className={styles.timelineItem}>
              <div className={styles.timelineRail}>
                <div className={styles.timelineDot} />
                {i < experience.length - 1 && <div className={styles.timelineLine} />}
              </div>
              <div className={styles.timelineCard}>
                <div className={styles.timelineCardHeader}>
                  <CompanyLogo domain={entry.domain} initials={entry.logoInitials} />
                  <div className={styles.timelineCardMain}>
                    <div className={styles.timelineMeta}>
                      <span className={styles.timelineYears}>{entry.years}</span>
                      <span className={styles.timelineCompany}>{entry.company}</span>
                    </div>
                    <div className={styles.timelineRole}>{entry.role}</div>
                  </div>
                </div>
                <div className={styles.timelineDesc}>{entry.desc}</div>
              </div>
            </div>
          ))}

          {/* Education */}
          <div className={styles.timelineEdu}>
            <div className={styles.timelineEduInner}>
              <CompanyLogo domain="nyit.edu" initials="NY" />
              <div>
                <div className={styles.timelineEduLabel}>Education</div>
                <div className={styles.timelineEduSchool}>New York Institute of Technology</div>
                <div className={styles.timelineEduDegree}>BFA Graphic Design / Fine Arts / Computer Graphics</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className={styles.section}>
        <div className={styles.sectionLabel}>
          <span className={styles.labelNum}>04</span>
          <span className={styles.labelText}>Testimonials</span>
        </div>

        <div className={styles.testimonialsGrid}>
          {testimonials.map((t) => (
            <div key={t.id} className={styles.testimonialCard}>
              <p className={styles.testimonialQuote}>"{t.quote}"</p>
              <div className={styles.testimonialPerson}>
                <div className={styles.testimonialAvatar}>
                  {t.avatar ? (
                    <img src={t.avatar} alt={t.name} className={styles.testimonialAvatarImg} />
                  ) : (
                    <span className={styles.testimonialInitials}>{t.initials}</span>
                  )}
                </div>
                <div>
                  <div className={styles.testimonialName}>{t.name}</div>
                  <div className={styles.testimonialTitle}>
                    {t.title}{t.company ? ` @ ${t.company}` : ''}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Community ── */}
      <section className={styles.section}>
        <div className={styles.sectionLabel}>
          <span className={styles.labelNum}>05</span>
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
