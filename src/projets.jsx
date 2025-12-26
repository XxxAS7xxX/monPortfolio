import styles from './styles/projets.module.css';
import bgVideo from './assets/videoProjets.mp4';
import useOverflow from './useOverflow'; 

function Projets() {
  useOverflow('scroll');
  
  return (
    <div className={styles.projets}>
      <h1>Mes Projets</h1>
      
      <div className={styles.projectsGrid}>

        <div className={styles.row}>
          <div className={styles.card}>
            <video className={styles.videoBg} autoPlay loop muted playsInline>
              <source src={bgVideo} type="video/mp4" />
            </video>
            <h2>Projet Magic Hanout</h2>
            <p className={styles.description}>
              Site de vente en ligne, de produits fictifs magiques
            </p>
            <h5>Symfony</h5>
            <a href="https://github.com/btssiojvpromo2025-2026/ppe3-microsoft-support-indian-not-scam.git">
              Aller voir
            </a>
          </div>
          
          <div className={styles.card}>
            <video className={styles.videoBg} autoPlay loop muted playsInline>
              <source src={bgVideo} type="video/mp4" />
            </video>
            <h2>Extension Chrome</h2>
            <p className={styles.description}>
              Prise en main des outils de développement chrome, afin de créer une extension
            </p>
            <h5>Json, environnement chrome</h5>
            <a href="https://github.com/XxxAS7xxX/chromeFH.git">
              Aller voir
            </a>
          </div>
          
          <div className={styles.card}>
            <video className={styles.videoBg} autoPlay loop muted playsInline>
              <source src={bgVideo} type="video/mp4" />
            </video>
            <h2>Gestion de Musique</h2>
            <p className={styles.description}>
              Site de gestion de musique, à partir d'une base de données
            </p>
            <h5>Symfony</h5>
            <a href="https://github.com/btssiojvpromo2025-2026/gestionmusique-XxxAS7xxX.git">
              Aller voir
            </a>
          </div>
        </div>
        
        <div className={styles.row}>
          <div className={styles.card}>
            <video className={styles.videoBg} autoPlay loop muted playsInline>
              <source src={bgVideo} type="video/mp4" />
            </video>
            <h2>Projet Magic Hanout</h2>
            <p className={styles.description}>
              Site de vente en ligne, de produits fictifs magiques
            </p>
            <h5>Symfony</h5>
            <a href="https://github.com/btssiojvpromo2025-2026/ppe3-microsoft-support-indian-not-scam.git">
              Aller voir
            </a>
          </div>
          
          <div className={styles.card}>
            <video className={styles.videoBg} autoPlay loop muted playsInline>
              <source src={bgVideo} type="video/mp4" />
            </video>
            <h2>Extension Chrome</h2>
            <p className={styles.description}>
              Prise en main des outils de développement chrome, afin de créer une extension
            </p>
            <h5>Json, environnement chrome</h5>
            <a href="https://github.com/XxxAS7xxX/chromeFH.git">
              Aller voir
            </a>
          </div>
          
          <div className={styles.card}>
            <video className={styles.videoBg} autoPlay loop muted playsInline>
              <source src={bgVideo} type="video/mp4" />
            </video>
            <h2>Gestion de Musique</h2>
            <p className={styles.description}>
              Site de gestion de musique, à partir d'une base de données
            </p>
            <h5>Symfony</h5>
            <a href="https://github.com/btssiojvpromo2025-2026/gestionmusique-XxxAS7xxX.git">
              Aller voir
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projets;