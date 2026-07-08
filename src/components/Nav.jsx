import { useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'
import styles from './Nav.module.css'

const links = [
  { to: '/work',    label: 'Work'    },
  { to: '/gallery', label: 'Gallery' },
  { to: '/about',   label: 'About'   },
  { to: '/process', label: 'Process' },
  { to: '/contact', label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const drawerRef = useRef(null)
  const hamburgerRef = useRef(null)
  const wasOpenRef = useRef(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  // Trap Tab/Shift+Tab inside the open drawer and close on Escape.
  useEffect(() => {
    if (!menuOpen) return

    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMenuOpen(false)
        return
      }
      if (e.key !== 'Tab') return

      const focusables = drawerRef.current?.querySelectorAll('a, button')
      if (!focusables || focusables.length === 0) return
      const first = focusables[0]
      const last = focusables[focusables.length - 1]

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [menuOpen])

  // Return focus to the hamburger button once the drawer closes.
  useEffect(() => {
    if (menuOpen) {
      wasOpenRef.current = true
    } else if (wasOpenRef.current) {
      wasOpenRef.current = false
      hamburgerRef.current?.focus()
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <Link to="/" className={styles.logo} onClick={closeMenu}>
        db<span className={styles.logoDot}>.design</span>
      </Link>

      <ul className={styles.links}>
        {links.map(({ to, label }) => (
          <li key={to}>
            <NavLink
              to={to}
              className={({ isActive }) =>
                `${styles.link} ${isActive ? styles.active : ''}`
              }
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>

      <div className={styles.actions}>
        <span className={styles.themeToggleDesktop}>
          <ThemeToggle />
        </span>

        <button
          ref={hamburgerRef}
          type="button"
          className={styles.menuToggle}
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          <span className={`${styles.menuBar} ${menuOpen ? styles.menuBarTop : ''}`} />
          <span className={`${styles.menuBar} ${menuOpen ? styles.menuBarMid : ''}`} />
          <span className={`${styles.menuBar} ${menuOpen ? styles.menuBarBot : ''}`} />
        </button>
      </div>

      <div id="mobile-menu" ref={drawerRef} className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}>
        <ul className={styles.mobileLinks}>
          {links.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `${styles.mobileLink} ${isActive ? styles.active : ''}`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className={styles.mobileToggleRow}>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}
