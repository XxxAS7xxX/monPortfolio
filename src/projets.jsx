import styles from './styles/projets.module.css';
import bgVideo from './assets/videoProjets.mp4';
import useOverflow from './useOverflow';
import { Link } from 'react-router-dom';
import { projets } from './projetsData';



function ProjetCard({id, titre, description, technologies, lien }) {
  return (
    <div className={styles.card}>
      <video className={styles.videoBg} autoPlay loop muted playsInline>
        <source src={bgVideo} type="video/mp4" />
      </video>
      <h2>{titre}</h2>
      <p className={styles.description}>{description}</p>
      <h5>{technologies}</h5>
      <Link to={`/projet/${id}`}>Voir plus</Link>
    </div>
  );
}

function Projets() {
  useOverflow('scroll');

  return (
    <div className={styles.projets}>
      <h1>Mes Projets</h1>

      <div className={styles.projectsGrid}>
        {Array.from({ length: Math.ceil(projets.length / 3) }).map((_, rowIndex) => (
          <div className={styles.row} key={rowIndex}>
            {projets.slice(rowIndex * 3, rowIndex * 3 + 3).map((projet) => (
              <ProjetCard key={projet.titre} {...projet} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projets;