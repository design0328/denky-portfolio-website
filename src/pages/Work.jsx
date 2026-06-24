import { useEffect, useRef } from 'react'
import WorkCard from '../components/WorkCard'
import { projects } from '../data/projects'
import styles from './Work.module.css'

export default function Work() {
  const cardRefs = useRef([])

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
  }, [])

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

      {/* Grid */}
      <div className={styles.grid}>
        {projects.map((project, i) => (
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
