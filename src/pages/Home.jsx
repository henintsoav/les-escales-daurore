import { Link } from 'react-router-dom'
import styles from './Home.module.css'

const LAST_ESCALES = [
  {
    id: 1,
    title: 'Santorin, Grèce',
    category: 'Europe',
    excerpt: 'Les maisons blanches, la mer turquoise et des couchers de soleil à couper le souffle.',
    img: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=600&q=80',
    slug: '/destinations',
  },
  {
    id: 2,
    title: 'Lisbonne, Portugal',
    category: 'City Trips',
    excerpt: 'Pastéis de nata, tramways colorés et le fado qui résonne dans les ruelles.',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    slug: '/city-trips',
  },
  {
    id: 3,
    title: 'Carnets d\'adresses — Côte Amalfitaine',
    category: 'Carnets',
    excerpt: 'Mes meilleures tables, hôtels secrets et spots photographiques sur la côte.',
    img: 'https://images.unsplash.com/photo-1612698093158-e07ac200d44e?w=600&q=80',
    slug: '/carnets',
  },
  {
    id: 4,
    title: '10 conseils pour voyager léger',
    category: 'Conseils',
    excerpt: 'Comment partir 3 semaines avec un seul bagage cabine et voyager sans stress.',
    img: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80',
    slug: '/conseils',
  },
]

const CATEGORIES = [
  { icon: '✈️', label: 'Destinations', to: '/destinations' },
  { icon: '🏙️', label: 'City trips', to: '/city-trips' },
  { icon: '🍽️', label: 'Food', to: '/carnets' },
  { icon: '📖', label: 'Conseils', to: '/conseils' },
  { icon: '📷', label: 'Carnets', to: '/carnets' },
  { icon: '☀️', label: 'Good vibes', to: '/' },
  { icon: '🌿', label: 'Nature', to: '/destinations' },
  { icon: '💛', label: 'À propos', to: '/a-propos' },
]

export default function Home() {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <img
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1600&q=80"
          alt="Paysage de voyage"
          className={styles.heroBg}
        />
        <div className={styles.heroContent}>
          <span className={styles.heroLabel}>Les Escales d'Aurore</span>
          <h1 className={styles.heroTitle}>
            Voyager, découvrir,<br />s'émerveiller.
          </h1>
          <Link to="/destinations" className={styles.heroCta}>
            Découvrir le blog
          </Link>
        </div>
        <div className={styles.heroScroll}>
          <span>↓</span>
        </div>
      </section>

      {/* Intro */}
      <section className={styles.intro}>
        <div className={styles.introSun}>
          <SunIcon />
        </div>
        <p className={styles.introQuote}>
          "De belles escales, toujours plus loin…"
        </p>
        <p className={styles.introText}>
          Plus qu'un blog voyage, une invitation à voir la vie du bon côté.
          Chaque escale est une histoire, chaque découverte un cadeau.
        </p>
      </section>

      {/* Dernières escales */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Mes dernières escales</h2>
          <div className={styles.sectionLine} />
        </div>

        <div className={styles.grid}>
          {LAST_ESCALES.map(post => (
            <Link key={post.id} to={post.slug} className={styles.card}>
              <div className={styles.cardImg}>
                <img src={post.img} alt={post.title} loading="lazy" />
                <span className={styles.cardCategory}>{post.category}</span>
              </div>
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{post.title}</h3>
                <p className={styles.cardExcerpt}>{post.excerpt}</p>
                <span className={styles.cardLink}>Découvrir →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className={styles.catSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Explorer par thème</h2>
          <div className={styles.sectionLine} />
        </div>
        <div className={styles.catGrid}>
          {CATEGORIES.map(cat => (
            <Link key={cat.label} to={cat.to} className={styles.catCard}>
              <span className={styles.catIcon}>{cat.icon}</span>
              <span className={styles.catLabel}>{cat.label}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className={styles.newsletter}>
        <div className={styles.newsletterInner}>
          <SunIcon />
          <h2 className={styles.newsletterTitle}>Une nouvelle escale bientôt</h2>
          <p className={styles.newsletterText}>
            Reçois mes carnets de voyage, bons plans et inspirations directement dans ta boîte mail.
          </p>
          <form className={styles.newsletterForm} onSubmit={e => e.preventDefault()}>
            <input type="email" placeholder="ton@email.com" className={styles.newsletterInput} />
            <button type="submit" className={styles.newsletterBtn}>S'inscrire</button>
          </form>
        </div>
      </section>
    </div>
  )
}

function SunIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="28" r="9" fill="#E9B949" opacity="0.9"/>
      <line x1="24" y1="6" x2="24" y2="2" stroke="#E9B949" strokeWidth="2" strokeLinecap="round"/>
      <line x1="34" y1="9" x2="36" y2="5" stroke="#E9B949" strokeWidth="2" strokeLinecap="round"/>
      <line x1="42" y1="18" x2="46" y2="16" stroke="#E9B949" strokeWidth="2" strokeLinecap="round"/>
      <line x1="14" y1="9" x2="12" y2="5" stroke="#E9B949" strokeWidth="2" strokeLinecap="round"/>
      <line x1="6" y1="18" x2="2" y2="16" stroke="#E9B949" strokeWidth="2" strokeLinecap="round"/>
      <path d="M8 38 Q14 33 20 38 Q26 43 32 38 Q38 33 40 36" stroke="#DDB8BB" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
    </svg>
  )
}
