import { useEffect, useRef, useState } from 'react'
import WorkCard from '../components/WorkCard'
import { projects } from '../data/projects'
import styles from './Work.module.css'

const filters = ['All', 'UX Systems', 'Design Ops', 'AI/UX']

export default function Work() {
  const [active, setActive] = useState('All')
  const cardRefs = useRef([])

  const filtered = active === 'All'
    ? projects
    : projects.filter(p =>
        p.discipline.toLowerCase().includes(active.toLowerCase()) ||
        p.chips.some(c => c.label.toLowerCase().includes(active.toLowerCase()))
      )

  // Intersection observer for scroll reveal
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.style.animationPlayState = 'running'
            obs.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12 }
    )
    cardRefs.current.forEach((el) => { if (el) obs.observe(el) })
    return () => obs.disconnect()
  }, [filtered])

  return (
    <main className={styles.page}>

      {/* Header */}
      <header className={styles.header}>
        <div className={styles.eyebrow}>
          <span className={styles.eyebrowRule} />
          <span className={styles.eyebrowText}>Selected Projects</span>
        </div>
        <h1 className={styles.title}>Work</h1>
      </header>

      {/* Filters */}
      <div className={styles.filters}>
        {filters.map((f) => (
          <button
            key={f}
            className={`${styles.filter} ${active === f ? styles.filterActive : ''}`}
            onClick={() => setActive(f)}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className={styles.grid}>
        {filtered.map((project, i) => (
          <div
            key={project.slug}
            ref={(el) => (cardRefs.current[i] = el)}
            style={{ animationPlayState: 'paused' }}
            className={project.featured ? styles.featuredItem : ''}
          >
            <WorkCard project={project} index={i} />
          </div>
        ))}
      </div>

    </main>
  )
}
