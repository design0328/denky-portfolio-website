import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { useParams, Link, Navigate } from 'react-router-dom'
import { projects } from '../data/projects'
import styles from './CaseStudy.module.css'

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '')

export default function CaseStudy() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  if (!project) return <Navigate to="/work" replace />

  return <CaseStudyContent project={project} slug={slug} />
}

function CaseStudyContent({ project, slug }) {
  const {
    title,
    company,
    year,
    discipline,
    desc,
    chips,
    thumbnail,
    overview,
    role,
    impact,
    roleLabel,
    timeline,
    team,
    outcome,
    heroImage,
    heroCaption,
    caseStudySections,
  } = project
  const heroSrc = heroImage || thumbnail
  const hasCuratedMedia = caseStudySections && caseStudySections.length > 0
  const hasSections = project.sections && project.sections.length > 0
  const hasScreenshots = project.screenshots && project.screenshots.length > 0
  const inspectableImages = getInspectableImages(project, heroSrc, hasCuratedMedia, hasSections)
  const [activeImageId, setActiveImageId] = useState(null)
  const activeImageIndex = inspectableImages.findIndex((image) => image.id === activeImageId)
  const activeImage = activeImageIndex >= 0 ? inspectableImages[activeImageIndex] : null
  const canStepImages = inspectableImages.length > 1

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  const openLightbox = (imageId) => setActiveImageId(imageId)
  const closeLightbox = () => setActiveImageId(null)
  const showImageAt = (index) => {
    const nextIndex = (index + inspectableImages.length) % inspectableImages.length
    setActiveImageId(inspectableImages[nextIndex].id)
  }

  useEffect(() => {
    if (!activeImage) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') closeLightbox()
      if (event.key === 'ArrowLeft' && canStepImages) {
        const nextIndex = (activeImageIndex - 1 + inspectableImages.length) % inspectableImages.length
        setActiveImageId(inspectableImages[nextIndex].id)
      }
      if (event.key === 'ArrowRight' && canStepImages) {
        const nextIndex = (activeImageIndex + 1 + inspectableImages.length) % inspectableImages.length
        setActiveImageId(inspectableImages[nextIndex].id)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [activeImage, activeImageIndex, canStepImages, inspectableImages])

  return (
    <main className={styles.page}>

      {/* Back */}
      <Link to="/work" className={styles.back}>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M11 7H3M7 3L3 7l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        All Work
      </Link>

      {/* Hero banner */}
      <figure className={styles.banner}>
        <InspectableImage
          src={heroSrc}
          alt={title}
          className={styles.bannerImg}
          buttonClassName={styles.bannerImageButton}
          onInspect={() => openLightbox('hero')}
        />
        {heroCaption && <figcaption className={styles.bannerCaption}>{heroCaption}</figcaption>}
      </figure>

      {/* Header */}
      <header className={styles.header}>
        <div className={styles.meta}>
          {company}
          <span className={styles.metaDot} />
          {year}
          <span className={styles.metaDot} />
          {discipline}
        </div>
        <div className={styles.titleRow}>
          <h1 className={styles.title}>{title}</h1>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.liveButton} ${styles.liveButtonDesktop}`}
            >
              {project.liveLabel || 'View Live'}
            </a>
          )}
        </div>
        <p className={styles.desc}>{desc}</p>
        <div className={styles.chips}>
          {chips.map((chip) => (
            <span key={chip.label} className={`${styles.chip} ${chip.accent ? styles[chip.accent] : ''}`}>
              {chip.label}
            </span>
          ))}
        </div>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.liveButton} ${styles.liveButtonMobile}`}
          >
            {project.liveLabel || 'View Live'}
          </a>
        )}
      </header>

      <ProjectSnapshot
        items={[
          { label: 'Role', value: roleLabel },
          { label: 'Timeline', value: timeline || year },
          { label: 'Team', value: team || company },
          { label: 'Outcome', value: outcome },
        ]}
      />

      {/* Content sections */}
      <div className={styles.body}>

        <StoryGrid
          sections={[
            { title: 'Overview', items: overview },
            { title: 'My Role', items: role },
            { title: 'Impact', items: impact },
          ]}
        />

        {hasCuratedMedia ? (
          <div className={styles.mediaSections}>
            {caseStudySections.map((section) => (
              <MediaSection
                key={`${section.label}-${section.title}`}
                projectSlug={project.assetFolder || project.slug}
                section={section}
                onInspect={openLightbox}
              />
            ))}
          </div>
        ) : hasSections ? (
          <ProjectSections sections={project.sections} onInspect={openLightbox} />
        ) : (
          <ProjectVisual project={project} onInspect={openLightbox} />
        )}

        {!hasCuratedMedia && !hasSections && hasScreenshots && (
          <div className={styles.screenshotsSection}>
            {[...new Set(project.screenshots.map((s) => s.section))].map((section) => (
              <div key={section} className={styles.screenshotGroup}>
                <h3 className={styles.screenshotGroupLabel}>{section}</h3>
                <div className={styles.screenshotGrid}>
                  {project.screenshots
                    .filter((s) => s.section === section)
                    .map((shot) => (
                      <figure key={shot.file} className={styles.screenshotFigure}>
                        <InspectableImage
                          src={`${BASE}/screenshots/${project.assetFolder || project.slug}/${shot.file}`}
                          alt={shot.label}
                          className={styles.screenshotImg}
                          buttonClassName={styles.screenshotButton}
                          onInspect={() => openLightbox(`screenshot-${shot.file}`)}
                        />
                        <figcaption className={styles.screenshotCaption}>{shot.label}</figcaption>
                      </figure>
                    ))}
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* Next project */}
      <NextProject current={slug} />

      {activeImage && createPortal(
        <ImageLightbox
          key={activeImage.id}
          image={activeImage}
          currentIndex={activeImageIndex}
          total={inspectableImages.length}
          canStep={canStepImages}
          onClose={closeLightbox}
          onPrevious={() => showImageAt(activeImageIndex - 1)}
          onNext={() => showImageAt(activeImageIndex + 1)}
        />,
        document.body,
      )}

    </main>
  )
}

function StoryGrid({ sections }) {
  const validSections = sections.filter((s) => Array.isArray(s.items) && s.items.length > 0)
  if (validSections.length === 0) return null
  return (
    <section className={styles.storySection} aria-label="Case study narrative">
      <div className={styles.storyIntro}>
        <span className={styles.mediaLabel}>Case Study</span>
        <h2 className={styles.storyTitle}>What changed, how it worked, and why it mattered</h2>
      </div>
      <div className={styles.storyGrid}>
        {validSections.map((section, index) => (
          <Section key={section.title} title={section.title} items={section.items} index={index + 1} />
        ))}
      </div>
    </section>
  )
}

function ProjectSnapshot({ items }) {
  const visibleItems = items.filter((item) => item.value)
  if (visibleItems.length === 0) return null

  return (
    <section className={styles.snapshot} aria-label="Project snapshot">
      {visibleItems.map((item) => (
        <div key={item.label} className={styles.snapshotItem}>
          <div className={styles.snapshotLabel}>{item.label}</div>
          <div className={styles.snapshotValue}>{item.value}</div>
        </div>
      ))}
    </section>
  )
}

function Section({ title, items, accent, index }) {
  const num = String(index || { Overview: 1, 'My Role': 2, Impact: 3 }[title] || 0).padStart(2, '0')
  if (!Array.isArray(items) || items.length === 0) return null
  return (
    <section className={styles.sectionCard}>
      <h2 className={styles.sectionTitle}>
        <span className={styles.sectionNum}>{num}</span>
        {title}
      </h2>
      <ul className={styles.list}>
        {items.map((item, i) => (
          <li key={i} className={`${styles.listItem} ${accent ? styles.accent : ''}`}>
            <span className={styles.listDot} />
            {typeof item === 'string' ? item : (
              <>
                {item.text && `${item.text} `}
                <Link to={item.linkTo} className={styles.inlineLink}>{item.linkLabel}</Link>
              </>
            )}
          </li>
        ))}
      </ul>
    </section>
  )
}

function ProjectVisual({ project, onInspect }) {
  return (
    <section className={styles.visualSection}>
      <div className={styles.mediaIntro}>
        <div className={styles.mediaLabel}>Project Visual</div>
        <h2 className={styles.mediaTitle}>The project at a glance</h2>
        <p className={styles.mediaBody}>{project.desc}</p>
      </div>

      <figure className={styles.deviceFrame}>
        <div className={styles.deviceBar}>
          <span />
          <span />
          <span />
        </div>
        <div className={styles.deviceScreen}>
          <InspectableImage
            src={project.thumbnail}
            alt={`${project.title} project visual`}
            className={styles.deviceImg}
            buttonClassName={styles.deviceImageButton}
            onInspect={() => onInspect('project-visual')}
          />
        </div>
        {project.heroCaption && <figcaption className={styles.deviceCaption}>{project.heroCaption}</figcaption>}
      </figure>
    </section>
  )
}

function ProjectSections({ sections, onInspect }) {
  return (
    <div className={styles.mediaSections}>
      {sections.map((section, i) => (
        <ProjectSection key={i} section={section} onInspect={onInspect} />
      ))}
    </div>
  )
}

function ProjectSection({ section, onInspect }) {
  const hasIntro = section.eyebrow || section.heading
  return (
    <section className={styles.mediaSection}>
      {hasIntro && (
        <div className={styles.mediaIntro}>
          {section.eyebrow && <div className={styles.sectionsEyebrow}>{section.eyebrow}</div>}
          {section.heading && <h2 className={styles.mediaTitle}>{section.heading}</h2>}
        </div>
      )}

      {section.type === 'text' && section.body && (
        <div className={styles.sectionsText}>
          {section.body.split('\n\n').map((para, i) => (
            <p key={i} className={styles.sectionsBody}>{para}</p>
          ))}
        </div>
      )}

      {section.type === 'featureImage' && section.src && (
        <figure className={styles.sectionsFeatureFigure}>
          <InspectableImage
            src={section.src}
            alt={section.caption || ''}
            className={styles.sectionsImg}
            buttonClassName={styles.sectionsImageButton}
            onInspect={() => onInspect(`section-feat-${section.src}`)}
          />
          {section.caption && <figcaption className={styles.sectionsCaption}>{section.caption}</figcaption>}
        </figure>
      )}

      {section.type === 'imagePair' && section.images && (
        <div className={styles.sectionsPair}>
          {section.images.map((image) => (
            <figure key={image.src} className={styles.sectionsFeatureFigure}>
              <InspectableImage
                src={image.src}
                alt={image.caption || ''}
                className={styles.sectionsImg}
                buttonClassName={styles.sectionsImageButton}
                onInspect={() => onInspect(`section-pair-${image.src}`)}
              />
              {image.caption && <figcaption className={styles.sectionsCaption}>{image.caption}</figcaption>}
            </figure>
          ))}
        </div>
      )}

      {section.type === 'imageGrid' && section.images && (
        <div className={styles.mediaGrid}>
          {section.images.map((image) => (
            <figure key={image.src} className={styles.sectionsFeatureFigure}>
              <InspectableImage
                src={image.src}
                alt={image.alt || image.caption || ''}
                className={styles.sectionsImg}
                buttonClassName={styles.sectionsImageButton}
                onInspect={() => onInspect(`section-grid-${image.src}`)}
              />
              {image.caption && <figcaption className={styles.sectionsCaption}>{image.caption}</figcaption>}
            </figure>
          ))}
        </div>
      )}
    </section>
  )
}

function MediaSection({ projectSlug, section, onInspect }) {
  const imagePath = (file, folder) =>
    file.startsWith('/') ? `${BASE}${file}` : `${BASE}/screenshots/${folder || projectSlug}/${file}`

  const imageFile = (image) => image.file || image.src

  const isLiveEmbed = section.type === 'featureImage' && section.liveEmbed

  return (
    <section className={styles.mediaSection}>
      {isLiveEmbed && (
        <div className={styles.liveEmbed}>
          {section.liveLabel && <div className={styles.liveEmbedLabel}>↓ {section.liveLabel}</div>}
          <iframe
            src={section.liveUrl}
            className={styles.liveEmbedFrame}
            title={section.liveLabel || section.title}
            sandbox="allow-same-origin allow-scripts"
            loading="lazy"
          />
        </div>
      )}

      <div className={styles.mediaIntro}>
        <div className={styles.mediaLabel}>{section.label}</div>
        <h2 className={styles.mediaTitle}>{section.title}</h2>
        {section.body && section.type !== 'text' && <p className={styles.mediaBody}>{section.body}</p>}
      </div>

      {section.type === 'featureImage' && !isLiveEmbed && (
        <div className={styles.featureMedia}>
          <figure className={styles.featureFigure}>
            <InspectableImage
              src={imagePath(section.image, section.folder)}
              alt={section.alt || section.caption || section.title}
              className={styles.featureImg}
              buttonClassName={styles.imageButton}
              onInspect={() => onInspect(`feature-${section.image}`)}
            />
            {section.caption && <figcaption className={styles.featureCaption}>{section.caption}</figcaption>}
          </figure>
          {section.notes && (
            <ul className={styles.mediaNotes}>
              {section.notes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          )}
        </div>
      )}

      {section.type === 'text' && (
        <div className={styles.textSection}>
          {section.heading && <h3 className={styles.textHeading}>{section.heading}</h3>}
          {section.body && <p className={styles.textBody}>{section.body}</p>}
        </div>
      )}

      {section.type === 'imagePair' && (
        <div className={styles.mediaPair}>
          {section.images.map((image) => (
            <MediaFigure
              key={imageFile(image)}
              src={imagePath(imageFile(image), image.folder)}
              alt={image.alt}
              caption={image.caption}
              onInspect={() => onInspect(`media-${imageFile(image)}`)}
            />
          ))}
        </div>
      )}

      {section.type === 'imageGrid' && (
        <>
          {section.table && (
            <table className={styles.domainTable}>
              <thead>
                <tr>
                  <th>Domain</th>
                  <th>What it evaluates</th>
                </tr>
              </thead>
              <tbody>
                {section.table.map((row) => (
                  <tr key={row.domain}>
                    <td><code>{row.domain}</code></td>
                    <td>{row.covers}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          {section.tableNote && <p className={styles.tableNote}>{section.tableNote}</p>}
          <div className={styles.mediaGrid}>
            {section.images.map((image) => (
              <MediaFigure
                key={imageFile(image)}
                src={imagePath(imageFile(image), image.folder)}
                alt={image.alt}
                caption={image.caption}
                onInspect={() => onInspect(`media-${imageFile(image)}`)}
              />
            ))}
          </div>
        </>
      )}
    </section>
  )
}

function MediaFigure({ src, alt, caption, onInspect }) {
  return (
    <figure className={styles.mediaFigure}>
      <InspectableImage
        src={src}
        alt={alt || caption}
        className={styles.mediaImg}
        buttonClassName={styles.imageButton}
        onInspect={onInspect}
      />
      {caption && <figcaption className={styles.mediaCaption}>{caption}</figcaption>}
    </figure>
  )
}

function InspectableImage({ src, alt, className, buttonClassName, onInspect }) {
  return (
    <button type="button" className={buttonClassName} onClick={onInspect} aria-label={`Inspect image: ${alt}`}>
      <img src={src} alt={alt} className={className} />
    </button>
  )
}

function ImageLightbox({ image, currentIndex, total, canStep, onClose, onPrevious, onNext }) {
  const caption = image.caption || image.alt
  const closeButtonRef = useRef(null)
  const [zoom, setZoom] = useState(1)
  const isZoomed = zoom > 1

  const zoomOut = () => setZoom((currentZoom) => Math.max(1, currentZoom - 0.25))
  const zoomIn = () => setZoom((currentZoom) => Math.min(3, currentZoom + 0.25))
  const resetZoom = () => setZoom(1)

  useEffect(() => {
    closeButtonRef.current?.focus()
  }, [image.src])

  return (
    <div className={styles.lightbox} role="dialog" aria-modal="true" aria-label={caption}>
      <button type="button" className={styles.lightboxBackdrop} aria-label="Close image preview" onClick={onClose} />
      <div className={styles.lightboxPanel}>
        <div className={styles.lightboxTopbar}>
          <div className={styles.lightboxMeta}>
            <span>{String(currentIndex + 1).padStart(2, '0')}</span>
            <span className={styles.lightboxDivider} />
            <span>{String(total).padStart(2, '0')}</span>
          </div>
        </div>

        <div className={styles.lightboxImageWrap}>
          {canStep && (
            <button type="button" className={`${styles.lightboxNav} ${styles.lightboxPrev}`} onClick={onPrevious} aria-label="Previous image">
              <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M12.5 5l-5 5 5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          )}
          <div className={`${styles.lightboxViewport} ${isZoomed ? styles.lightboxViewportZoomed : ''}`} tabIndex={isZoomed ? 0 : -1} aria-label={isZoomed ? 'Zoomed image. Scroll to pan around the image.' : undefined}>
            <img
              src={image.src}
              alt={image.alt}
              className={`${styles.lightboxImg} ${isZoomed ? styles.lightboxImgZoomed : ''}`}
              style={{ '--lightbox-zoom': zoom }}
            />
          </div>
          {canStep && (
            <button type="button" className={`${styles.lightboxNav} ${styles.lightboxNext}`} onClick={onNext} aria-label="Next image">
              <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M7.5 5l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          )}
        </div>

        {caption && <p className={styles.lightboxCaption}>{caption}</p>}
      </div>
      <div className={styles.lightboxControls} role="toolbar" aria-label="Image viewer controls">
        <button type="button" className={styles.lightboxControl} onClick={zoomOut} disabled={zoom === 1} aria-label="Zoom out">
          <span aria-hidden="true">-</span>
        </button>
        <button type="button" className={styles.lightboxControl} onClick={resetZoom} disabled={zoom === 1} aria-label="Reset image to fit screen">
          Fit
        </button>
        <span className={styles.lightboxZoom} aria-live="polite">{Math.round(zoom * 100)}%</span>
        <button type="button" className={styles.lightboxControl} onClick={zoomIn} disabled={zoom === 3} aria-label="Zoom in">
          <span aria-hidden="true">+</span>
        </button>
        <button ref={closeButtonRef} type="button" className={`${styles.lightboxControl} ${styles.lightboxCloseControl}`} onClick={onClose} aria-label="Close image viewer">
          <svg width="14" height="14" viewBox="0 0 18 18" aria-hidden="true">
            <path d="M4.5 4.5l9 9M13.5 4.5l-9 9" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
          </svg>
          Close
        </button>
      </div>
    </div>
  )
}

function getInspectableImages(project, heroSrc, hasCuratedMedia, hasSections) {
  const assetFolder = project.assetFolder || project.slug
  const images = [
    {
      id: 'hero',
      src: heroSrc,
      alt: project.title,
      caption: project.heroCaption,
    },
  ]

  if (hasCuratedMedia) {
    project.caseStudySections.forEach((section) => {
      const imagePath = (file, folder) =>
        file.startsWith('/') ? `${BASE}${file}` : `${BASE}/screenshots/${folder || assetFolder}/${file}`

      if (section.type === 'featureImage' && !section.liveEmbed) {
        images.push({
          id: `feature-${section.image}`,
          src: imagePath(section.image, section.folder),
          alt: section.alt || section.caption || section.title,
          caption: section.caption,
        })
      }

      if (section.images) {
        section.images.forEach((image) => {
          const file = image.file
          const src = image.src ?? (file != null ? imagePath(file, image.folder) : null)
          if (!src) return
          images.push({
            id: `media-${file ?? image.src}`,
            src,
            alt: image.alt || image.caption,
            caption: image.caption,
          })
        })
      }
    })

    return images
  }

  if (hasSections) {
    project.sections.forEach((section) => {
      if (section.type === 'featureImage' && section.src) {
        images.push({
          id: `section-feat-${section.src}`,
          src: section.src,
          alt: section.caption || '',
          caption: section.caption,
        })
      }
      if (section.type === 'imagePair' && section.images) {
        section.images.forEach((image) => {
          images.push({
            id: `section-pair-${image.src}`,
            src: image.src,
            alt: image.caption,
            caption: image.caption,
          })
        })
      }
      if (section.type === 'imageGrid' && section.images) {
        section.images.forEach((image) => {
          images.push({
            id: `section-grid-${image.src}`,
            src: image.src,
            alt: image.alt || image.caption,
            caption: image.caption,
          })
        })
      }
    })
    return images
  }

  images.push({
    id: 'project-visual',
    src: project.thumbnail,
    alt: `${project.title} project visual`,
    caption: project.heroCaption,
  })

  if (project.screenshots) {
    project.screenshots.forEach((shot) => {
      images.push({
        id: `screenshot-${shot.file}`,
        src: `${BASE}/screenshots/${assetFolder}/${shot.file}`,
        alt: shot.label,
        caption: shot.label,
      })
    })
  }

  return images
}

function NextProject({ current }) {
  const idx  = projects.findIndex((p) => p.slug === current)
  const next = projects[(idx + 1) % projects.length]
  return (
    <div className={styles.nextWrap}>
      <span className={styles.nextLabel}>Next Project</span>
      <Link to={`/work/${next.slug}`} className={styles.nextLink}>
        {next.title}
        <svg width="18" height="18" viewBox="0 0 14 14" fill="none">
          <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </Link>
    </div>
  )
}
