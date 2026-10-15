import styles from './About.module.css'

export default function About() {
  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <div className={styles.heroOverlay} style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1502301103665-0b95cc738daf?w=1400&q=80)' }} />
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>À propos</h1>
        </div>
      </div>

      <div className={styles.inner}>
        <div className={styles.portrait}>
          <img
            src="https://images.unsplash.com/photo-1530785602389-07594beb8b73?w=400&q=80"
            alt="Aurore"
            className={styles.portraitImg}
          />
          <div className={styles.portraitDecor} />
        </div>

        <div className={styles.content}>
          <span className={styles.eyebrow}>Bonjour, moi c'est</span>
          <h2 className={styles.name}>Aurore</h2>
          <div className={styles.divider} />
          <p className={styles.bio}>
            Je voyage depuis que j'ai 18 ans avec un sac à dos, un carnet et une irrépressible envie de découvrir.
            Les Escales d'Aurore, c'est l'endroit où je partage mes aventures, mes coups de cœur et tout ce qui
            fait que le voyage est, à mes yeux, la plus belle façon de vivre.
          </p>
          <p className={styles.bio}>
            Ici tu trouveras des carnets de voyage sincères, des adresses testées et approuvées,
            des conseils pratiques et surtout beaucoup d'inspiration pour que toi aussi tu oses partir.
          </p>
          <blockquote className={styles.quote}>
            "Collectionne les moments, pas les choses."
            <span className={styles.quoteHeart}>♥</span>
          </blockquote>

          <div className={styles.values}>
            {[
              { icon: '☀️', label: 'Authenticité', desc: 'Des récits vrais, sans filtre.' },
              { icon: '🌿', label: 'Slow travel', desc: 'Prendre le temps de savourer.' },
              { icon: '♥', label: 'Curiosité', desc: 'S\'ouvrir à chaque culture.' },
            ].map(v => (
              <div key={v.label} className={styles.value}>
                <span className={styles.valueIcon}>{v.icon}</span>
                <strong className={styles.valueLabel}>{v.label}</strong>
                <span className={styles.valueDesc}>{v.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
