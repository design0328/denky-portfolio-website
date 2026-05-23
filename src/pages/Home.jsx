import { useState } from 'react'
import Hero from '../components/Hero'
import styles from './Home.module.css'

const BASE = '/denky-portfolio-website'

const testimonials = [
  {
    id: 1,
    quote:
      "Denky is one of those rare people who elevates both the work and the people around her — someone who consistently led with empathy, positivity, curiosity, and a genuine desire to help others succeed.",
    name: 'Megan Daoedsjah',
    title: 'Product Design Manager',
    company: 'ZoomInfo',
    avatar: `${BASE}/testimonials/megan_D.png`,
    initials: 'MD',
  },
  {
    id: 2,
    quote:
      "She didn't just learn the rules of accessibility; she truly understood the purpose behind them. She builds for impact, not just for the moment.",
    name: 'Talyah Aviran',
    title: 'CPWA / HFI CUA — Accessibility Specialist',
    company: '',
    avatar: `${BASE}/testimonials/Talyah.jpeg`,
    initials: 'TA',
  },
  {
    id: 3,
    quote:
      "Denky is far from 'yet another creative' designer. She consistently proved that this demanding work can be executed flawlessly, balancing high professional standards with an incredibly positive attitude.",
    name: 'Denis Levkov',
    title: 'Software Engineering Manager',
    company: 'ZoomInfo',
    avatar: `${BASE}/testimonials/denis_L.jpeg`,
    initials: 'DL',
  },
  {
    id: 4,
    quote:
      "The Design Quality Engine initiative created a lot of excitement across design, PM, and engineering teams — a great example of raising quality while still moving incredibly fast.",
    name: 'Roni Mergie',
    title: 'UX Manager',
    company: 'ZoomInfo',
    avatar: `${BASE}/testimonials/roni_mergie.jpeg`,
    initials: 'RM',
  },
  {
    id: 5,
    quote:
      "When it came to anything UI/UX, I always reached out to Denky to get well-written, well-thought-out feedback.",
    name: 'Urmzd Mukhammadnaim',
    title: 'AI Engineer',
    company: 'ZoomInfo',
    avatar: `${BASE}/testimonials/urmzd_M.jpeg`,
    initials: 'UM',
  },
  {
    id: 6,
    quote:
      "Her expertise in accessibility guided many decisions that were critical to the scalability and wide spread adoption of our work.",
    name: 'Vineet Kaushik',
    title: 'Senior Software Engineer',
    company: 'ZoomInfo',
    avatar: null,
    initials: 'VK',
  },
]

export default function Home() {
  const [current, setCurrent] = useState(0)
  const [animKey, setAnimKey] = useState(0)
  const [dir, setDir] = useState('next')

  const goNext = () => {
    setDir('next')
    setAnimKey((k) => k + 1)
    setCurrent((c) => (c + 1) % testimonials.length)
  }

  const goPrev = () => {
    setDir('prev')
    setAnimKey((k) => k + 1)
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
  }

  const t = testimonials[current]

  return (
    <>
      <Hero />

      {/* ── Testimonials carousel ── */}
      <section className={styles.testimonials}>
        <div className={styles.testimonialsInner}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowDot} />
            What people say
          </div>

          <div className={styles.card}>
            <div className={styles.cardTop}>
              {/* Avatar + name */}
              <div className={styles.person}>
                <div className={styles.avatar}>
                  {t.avatar ? (
                    <img src={t.avatar} alt={t.name} className={styles.avatarImg} />
                  ) : (
                    <span className={styles.avatarInitials}>{t.initials}</span>
                  )}
                </div>
                <div className={styles.personInfo}>
                  <div className={styles.personName}>{t.name}</div>
                  <div className={styles.personTitle}>
                    {t.title}{t.company ? ` @ ${t.company}` : ''}
                  </div>
                </div>
              </div>

              {/* Counter + arrows */}
              <div className={styles.controls}>
                <span className={styles.counter}>
                  {current + 1} / {testimonials.length}
                </span>
                <button
                  className={styles.arrowBtn}
                  onClick={goPrev}
                  aria-label="Previous testimonial"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <button
                  className={styles.arrowBtn}
                  onClick={goNext}
                  aria-label="Next testimonial"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Quote */}
            <div
              key={animKey}
              className={`${styles.quoteWrap} ${dir === 'next' ? styles.slideNext : styles.slidePrev}`}
            >
              <svg className={styles.quoteMark} width="32" height="24" viewBox="0 0 32 24" fill="none" aria-hidden="true">
                <path d="M0 24V14.4C0 6.4 4.8 1.6 14.4 0l1.6 2.4C10.4 3.6 7.6 6.4 7.2 10.4H13.6V24H0zm18.4 0V14.4C18.4 6.4 23.2 1.6 32.8 0l1.6 2.4C28.8 3.6 26 6.4 25.6 10.4H32V24H18.4z" fill="currentColor" opacity="0.12" />
              </svg>
              <blockquote className={styles.quote}>"{t.quote}"</blockquote>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
