import styles from './PageTemplate.module.css'

const POSTS = [
  { title: 'Santorin, Grèce', img: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=600&q=80', tag: 'Europe', desc: 'Maisons blanches, caldera vertigineuse et couchers de soleil inoubliables.' },
  { title: 'Bali, Indonésie', img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=80', tag: 'Asie', desc: 'Rizières en terrasses, temples sacrés et douceur de vivre balinaise.' },
  { title: 'Marrakech, Maroc', img: 'https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=600&q=80', tag: 'Afrique', desc: 'Souks colorés, riads secrets et cuisine épicée au cœur de la médina.' },
  { title: 'Patagonie, Argentine', img: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&q=80', tag: 'Amérique du Sud', desc: 'Glaciers immenses, pumas sauvages et vents du bout du monde.' },
  { title: 'Kyoto, Japon', img: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&q=80', tag: 'Asie', desc: 'Temples zen, geishas et cerisiers en fleurs au printemps.' },
  { title: 'Toscane, Italie', img: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600&q=80', tag: 'Europe', desc: 'Collines ondulées, cyprès élancés et villages médiévaux perchés.' },
]

export default function Destinations() {
  return (
    <div className={styles.page}>
      <div className={styles.hero} style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=1400&q=80)' }}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <span className={styles.heroEyebrow}>✈️</span>
          <h1 className={styles.heroTitle}>Destinations</h1>
          <p className={styles.heroSub}>Du bout du monde au coin de la rue, chaque lieu a son histoire.</p>
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
