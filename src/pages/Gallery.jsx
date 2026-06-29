import { useEffect, useRef, useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { galleryItems, categories } from '../data/gallery'
import styles from './Gallery.module.css'

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '')

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [lightbox, setLightbox]           = useState(null) // galleryItem | null
  const cardRefs = useRef([])

  // ── Filtering ──────────────────────────────────────────────────────────
  const filtered = galleryItems
    .filter((item) => activeCategory === 'All' || item.category === activeCategory)
    .sort((a, b) => Number(b.year) - Number(a.year))

  // ── Scroll reveal ──────────────────────────────────────────────────────
  useEffect(() => {
    cardRefs.current = cardRefs.current.slice(0, filtered.length)
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add(styles.visible)
            obs.unobserve(e.target)
          }
        })
      },
      { threshold: 0.08 }
    )
    cardRefs.current.forEach((el) => { if (el) obs.observe(el) })
    return () => obs.disconnect()
  }, [filtered])

  // ── Lightbox keyboard handling ─────────────────────────────────────────
  const closeLightbox = useCallback(() => setLightbox(null), [])

  useEffect(() => {
    if (!lightbox) return
    const handler = (e) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowRight') {
        const idx = filtered.findIndex((i) => i.id === lightbox.id)
        if (idx < filtered.length - 1) setLightbox(filtered[idx + 1])
      }
      if (e.key === 'ArrowLeft') {
        const idx = filtered.findIndex((i) => i.id === lightbox.id)
        if (idx > 0) setLightbox(filtered[idx - 1])
      }
    }
    window.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [lightbox, filtered, closeLightbox])

  const currentIdx = lightbox ? filtered.findIndex((i) => i.id === lightbox.id) : -1

  // ── Content-type accent colors ─────────────────────────────────────────
  const categoryColor = (category) => {
    if (category === 'Brand & Visual') return 'var(--orange)'
    if (category === 'Print & Packaging') return 'var(--fuchsia)'
    if (category === 'Web & Marketing') return '#ffb800'
    if (category === 'Design Systems') return '#00c4ff'
    if (category === 'UI & Screens') return 'var(--emerald)'
    if (category === 'AI & Governance') return '#7c5cff'
    return 'var(--muted)'
  }

  return (
    <main className={styles.page}>

      {/* ── Header ── */}
      <header className={styles.header}>
        <div className={styles.eyebrow}>
          <span className={styles.eyebrowRule} />
          <span className={styles.eyebrowText}>Career Archive</span>
        </div>
        <h1 className={styles.title}>Gallery</h1>
        <p className={styles.subtitle}>
          Selected visual work across design systems, digital products, brand, and print.
        </p>
      </header>

      {/* ── Category filters ── */}
      <div className={styles.filters}>
        {categories.map((cat) => (
          <button
            key={cat}
            className={`${styles.filter} ${activeCategory === cat ? styles.filterActive : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
        <span className={styles.count}>{filtered.length} items</span>
      </div>

      {/* ── Grid ── */}
      {filtered.length === 0 ? (
        <div className={styles.empty}>No items match this filter combination.</div>
      ) : (
        <div className={styles.grid}>
          {filtered.map((item, i) => (
            <button
              key={item.id}
              ref={(el) => (cardRefs.current[i] = el)}
              className={styles.card}
              style={{ '--i': i % 4 }}
              onClick={() => setLightbox(item)}
              aria-label={`View ${item.title}`}
            >
              {/* Image */}
              <div className={styles.imageWrap}>
                <img
                  src={item.image}
                  alt={item.title}
                  className={styles.image}
                  loading="lazy"
                  onError={(e) => { e.target.src = `${BASE}/gallery/placeholder.svg` }}
                />
                <div className={styles.imageOverlay}>
                  <span className={styles.overlayIcon}>↗</span>
                </div>
              </div>

              {/* Card body */}
              <div className={styles.cardBody}>
                <div className={styles.cardMeta}>
                  <span
                    className={styles.typeBadge}
                    style={{ color: categoryColor(item.category), borderColor: categoryColor(item.category) + '44' }}
                  >
                    {item.category}
                  </span>
                </div>
                <h2 className={styles.cardTitle}>{item.title}</h2>
                <p className={styles.cardSub}>{item.subtitle}</p>
                <div className={styles.tags}>
                  {item.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </button>
          ))}
        </div>
      )}

      {/* ── Lightbox ── */}
      {lightbox && (
        <div
          className={styles.lightboxBackdrop}
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label={`${lightbox.title} detail`}
        >
          <div
            className={styles.lightboxPanel}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button className={styles.lbClose} onClick={closeLightbox} aria-label="Close">✕</button>

            {/* Nav arrows */}
            {currentIdx > 0 && (
              <button
                className={`${styles.lbArrow} ${styles.lbArrowPrev}`}
                onClick={() => setLightbox(filtered[currentIdx - 1])}
                aria-label="Previous"
              >←</button>
            )}
            {currentIdx < filtered.length - 1 && (
              <button
                className={`${styles.lbArrow} ${styles.lbArrowNext}`}
                onClick={() => setLightbox(filtered[currentIdx + 1])}
                aria-label="Next"
              >→</button>
            )}

            {/* Image */}
            <div className={styles.lbImageWrap}>
              <img
                src={lightbox.image}
                alt={lightbox.title}
                className={styles.lbImage}
                onError={(e) => { e.target.src = `${BASE}/gallery/placeholder.svg` }}
              />
            </div>

            {/* Info */}
            <div className={styles.lbInfo}>
              <div className={styles.lbMeta}>
                <span
                  className={styles.lbTypeBadge}
                  style={{ color: categoryColor(lightbox.category), borderColor: categoryColor(lightbox.category) + '55' }}
                >
                  {lightbox.category}
                </span>
                <span className={styles.lbCompany}>{lightbox.company}</span>
                <span className={styles.lbYear}>{lightbox.year}</span>
              </div>

              <h2 className={styles.lbTitle}>{lightbox.title}</h2>
              <p className={styles.lbSubtitle}>{lightbox.subtitle}</p>
              <p className={styles.lbDescription}>{lightbox.description}</p>

              {lightbox.link && (
                <Link to={lightbox.link} className={styles.lbCaseStudyLink}>
                  View Case Study ↗
                </Link>
              )}

              <div className={styles.lbTags}>
                {lightbox.tags.map((tag) => (
                  <span key={tag} className={styles.lbTag}>{tag}</span>
                ))}
              </div>

              <div className={styles.lbCounter}>
                {currentIdx + 1} / {filtered.length}
              </div>
            </div>
          </div>
        </div>
      )}

    </main>
  )
}
