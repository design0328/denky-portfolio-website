import { useState } from 'react'
import Hero from '../components/Hero'
import styles from './Home.module.css'

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '')

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
      "I highly recommend Denky as an exceptional UX/UI designer and a remarkably solid professional. We worked closely together on building our corporate Component Library and establishing comprehensive accessibility (WCAG 2.2 AA) standards across the company.",
    name: 'Denis Levkov',
    title: 'Software Engineering Manager',
    company: 'ZoomInfo',
    avatar: `${BASE}/testimonials/denis_L.jpeg`,
    initials: 'DL',
  },
  {
    id: 3,
    quote:
      "Denky is one of those rare people who elevates both the work and the people around her — someone who consistently led with empathy, positivity, curiosity, and a genuine desire to help others succeed.",
    name: 'Megan Daoedsjah',
    title: 'Product Design Manager',
    company: 'ZoomInfo',
    avatar: `${BASE}/testimonials/megan_D.png`,
    initials: 'MD',
  },
  {
    id: 4,
    quote:
      "Denky brings a thoughtful and structured approach to her work, with a strong balance of UX thinking, systems mindset, collaboration, and operational thinking.",
    name: 'Roni Mergie',
    title: 'Director of Product Design',
    company: 'SysAid',
    avatar: `${BASE}/testimonials/roni_mergie.jpeg`,
    initials: 'RM',
  },
  {
    id: 5,
    quote:
      "She didn't just learn the rules of accessibility; she truly understood the purpose behind them. That distinction matters enormously.",
    name: 'Talyah Aviran',
    title: 'Certified Professional in Web Accessibility',
    company: 'Client',
    avatar: `${BASE}/testimonials/Talyah.jpeg`,
    initials: 'TA',
  },
  {
    id: 6,
    quote:
      "When it came to anything UI/UX, I always reached out to Denky to get well-written, well-thought-out feedback — which motivated a project that Denky initiated to help review and automate the improvement of accessibility and usability components across various projects.",
    name: 'Urmzd Mukhammadnaim',
    title: 'Senior AI Engineer',
    company: 'ZoomInfo',
    avatar: `${BASE}/testimonials/urmzd_M.jpeg`,
    initials: 'UM',
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
