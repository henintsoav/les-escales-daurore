import styles from './PageTemplate.module.css'

const POSTS = [
  { title: 'Lisbonne en 3 jours', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80', tag: 'Portugal', desc: 'Pastéis de nata, tramways colorés et le fado qui résonne dans les ruelles.' },
  { title: 'Prague, la ville dorée', img: 'https://images.unsplash.com/photo-1541849546-216549ae216d?w=600&q=80', tag: 'République Tchèque', desc: 'Ponts médiévaux, marchés de Noël et bière blonde à volonté.' },
  { title: 'Amsterdam à vélo', img: 'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=600&q=80', tag: 'Pays-Bas', desc: 'Canaux enchanteurs, tulipes et musées qui rivalisent d\'audace.' },
  { title: 'Barcelone côté local', img: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=600&q=80', tag: 'Espagne', desc: 'Gaudí, tapas, plage et nuits qui ne finissent jamais.' },
]

export default function CityTrips() {
  return (
    <div className={styles.page}>
      <div className={styles.hero} style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1400&q=80)' }}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <span className={styles.heroEyebrow}>🏙️</span>
          <h1 className={styles.heroTitle}>City Trips</h1>
          <p className={styles.heroSub}>48h, un week-end ou une semaine — explorer les villes comme une locale.</p>
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
