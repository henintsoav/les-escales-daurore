import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from './Navbar.module.css'
import Logo from './Logo'

const NAV_LINKS = [
  { to: '/', label: 'Accueil' },
  { to: '/destinations', label: 'Destinations' },
  { to: '/conseils', label: 'Conseils' },
  { to: '/carnets', label: 'Carnets' },
  { to: '/a-propos', label: 'À propos' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setMenuOpen(false), [location])

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <nav className={styles.nav}>
        <Link to="/" className={styles.brand}>
          <Logo size={36} />
          <div className={styles.brandText}>
            <span className={styles.brandName}>Les Escales</span>
            <span className={styles.brandSub}>d'Aurore</span>
          </div>
        </Link>

        <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
          {NAV_LINKS.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                className={`${styles.link} ${location.pathname === to ? styles.active : ''}`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <button className={styles.burger} onClick={() => setMenuOpen(o => !o)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </nav>
    </header>
  )
}
