import styles from './PageTemplate.module.css'

const POSTS = [
  { title: 'Carnets d\'adresses — Côte Amalfitaine', img: 'https://images.unsplash.com/photo-1612698093158-e07ac200d44e?w=600&q=80', tag: 'Italie', desc: 'Tables avec vue, hôtels secrets et spots photographiques sur la côte.' },
  { title: 'Mes adresses à Lisbonne', img: 'https://images.unsplash.com/photo-1517091748056-61bb57049802?w=600&q=80', tag: 'Portugal', desc: 'Cafés vintage, restaurants cachés et concept stores à ne pas manquer.' },
  { title: 'Bali côté gastronomie', img: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80', tag: 'Indonésie', desc: 'Des warungs aux restaurants de chef, le meilleur de la cuisine balinaise.' },
]

export default function Carnets() {
  return (
    <div className={styles.page}>
      <div className={styles.hero} style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1400&q=80)' }}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <span className={styles.heroEyebrow}>📷</span>
          <h1 className={styles.heroTitle}>Carnets d'Adresses</h1>
          <p className={styles.heroSub}>Mes sélections coup de cœur — tables, hôtels, boutiques et spots secrets.</p>
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
