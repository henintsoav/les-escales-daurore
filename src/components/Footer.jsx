import { Link } from 'react-router-dom'
import Logo from './Logo'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <Logo size={56} />
          <p className={styles.tagline}>
            De belles escales,<br />
            <em>toujours plus loin…</em>
          </p>
        </div>

        <nav className={styles.nav}>
          <span className={styles.navTitle}>Explorer</span>
          <Link to="/destinations">Destinations</Link>
          <Link to="/city-trips">City trips</Link>
          <Link to="/conseils">Conseils voyage</Link>
          <Link to="/carnets">Carnets d'adresses</Link>
          <Link to="/a-propos">À propos</Link>
        </nav>

        <div className={styles.social}>
          <span className={styles.navTitle}>Réseaux</span>
          <div className={styles.icons}>
            <a href="#" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
            </a>
            <a href="#" aria-label="Pinterest">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.24 2.65 7.86 6.39 9.29-.09-.78-.17-1.98.03-2.83.19-.77 1.27-5.38 1.27-5.38s-.32-.65-.32-1.6c0-1.5.87-2.62 1.95-2.62.92 0 1.37.69 1.37 1.52 0 .93-.59 2.31-.9 3.59-.25 1.07.53 1.94 1.58 1.94 1.9 0 3.19-2.43 3.19-5.3 0-2.19-1.48-3.83-4.17-3.83-3.04 0-4.91 2.27-4.91 4.79 0 .87.25 1.48.64 1.95.18.21.2.3.14.54l-.24.93c-.08.31-.32.42-.59.31-1.65-.68-2.42-2.5-2.42-4.55 0-3.38 2.86-7.44 8.52-7.44 4.58 0 7.59 3.32 7.59 6.88 0 4.72-2.62 8.25-6.46 8.25-1.29 0-2.51-.7-2.93-1.49l-.82 3.18c-.27 1.01-.98 2.28-1.53 3.06.92.27 1.9.42 2.91.42 5.52 0 10-4.48 10-10S17.52 2 12 2z"/></svg>
            </a>
            <a href="#" aria-label="YouTube">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.96-1.96C18.88 4 12 4 12 4s-6.88 0-8.58.46a2.78 2.78 0 0 0-1.96 1.96C1 8.12 1 12 1 12s0 3.88.46 5.58a2.78 2.78 0 0 0 1.96 1.96C5.12 20 12 20 12 20s6.88 0 8.58-.46a2.78 2.78 0 0 0 1.96-1.96C23 15.88 23 12 23 12s0-3.88-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none"/></svg>
            </a>
            <a href="#" aria-label="TikTok">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/></svg>
            </a>
          </div>
          <p className={styles.quote}>"Le monde est plus beau<br/>quand on le savoure"</p>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} Les Escales d'Aurore — Tous droits réservés</p>
        <p>Voyager · Découvrir · S'émerveiller</p>
      </div>
    </footer>
  )
}
