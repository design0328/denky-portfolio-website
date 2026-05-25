import { useTheme } from '../context/theme'
import styles from './ThemeToggle.module.css'

export default function ThemeToggle() {
  const { theme, toggle } = useTheme()
  const isLight = theme === 'light'

  return (
    <button
      type="button"
      className={styles.pill}
      onClick={toggle}
      aria-label={isLight ? 'Switch to dark mode' : 'Switch to light mode'}
    >
      {/* Sun */}
      <svg
        className={`${styles.icon} ${!isLight ? styles.iconActive : ''}`}
        width="15" height="15" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
      </svg>

      {/* Track */}
      <span className={styles.track} aria-hidden="true">
        <span className={`${styles.thumb} ${isLight ? styles.thumbLight : ''}`} />
      </span>

      {/* Moon */}
      <svg
        className={`${styles.icon} ${isLight ? styles.iconActive : ''}`}
        width="14" height="14" viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
      </svg>
    </button>
  )
}
