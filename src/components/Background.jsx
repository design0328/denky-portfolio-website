import styles from './Background.module.css'

export default function Background() {
  return (
    <div className={styles.root} aria-hidden="true">
      <div className={styles.grid} />
      <div className={styles.glow} />
      <div className={styles.glowBottom} />
      <div className={styles.scanlines} />
    </div>
  )
}
