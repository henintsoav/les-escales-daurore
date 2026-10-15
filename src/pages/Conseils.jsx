import styles from './PageTemplate.module.css'

const POSTS = [
  { title: '10 conseils pour voyager léger', img: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80', tag: 'Préparation', desc: 'Comment partir 3 semaines avec un seul bagage cabine et zéro stress.' },
  { title: 'Trouver les meilleurs vols pas chers', img: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&q=80', tag: 'Budget', desc: 'Mes outils et astuces pour dénicher les billets d\'avion au meilleur prix.' },
  { title: 'Voyager solo en tant que femme', img: 'https://images.unsplash.com/photo-1502301103665-0b95cc738daf?w=600&q=80', tag: 'Solo', desc: 'Conseils pratiques, destinations sûres et liberté au féminin.' },
  { title: 'Créer un carnet de voyage', img: 'https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?w=600&q=80', tag: 'Créativité', desc: 'De la sélection du carnet aux techniques pour capturer vos souvenirs.' },
]

export default function Conseils() {
  return (
    <div className={styles.page}>
      <div className={styles.hero} style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1400&q=80)' }}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <span className={styles.heroEyebrow}>📖</span>
          <h1 className={styles.heroTitle}>Conseils Voyage</h1>
          <p className={styles.heroSub}>Préparer, organiser, partir — tous mes conseils pour voyager mieux.</p>
        </div>
      </div>
      <div className={styles.grid}>
        {POSTS.map(p => (
          <div key={p.title} className={styles.card}>
            <div className={styles.cardImg}><img src={p.img} alt={p.title} loading="lazy" /></div>
            <div className={styles.cardBody}>
              <span className={styles.tag}>{p.tag}</span>
              <h3 className={styles.cardTitle}>{p.title}</h3>
              <p className={styles.cardDesc}>{p.desc}</p>
              <span className={styles.readMore}>Lire l'article →</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
