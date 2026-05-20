import styles from './Placeholder.module.css'

function PlaceholderPage({ title, subtitle }) {
  return (
    <main className={styles.page}>
      <div className={styles.eyebrow}>
        <span className={styles.rule} />
        <span>{subtitle}</span>
      </div>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.note}>This page is coming soon — check back shortly.</p>
    </main>
  )
}

export function About()   { return <PlaceholderPage title="About"   subtitle="The Person"     /> }
export function Process() { return <PlaceholderPage title="Process" subtitle="How I Think"    /> }
export function Contact() { return <PlaceholderPage title="Contact" subtitle="Get In Touch"   /> }
