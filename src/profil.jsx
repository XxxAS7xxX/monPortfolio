import styles from './styles/profil.module.css';
// import photoProfil from './assets/photoProfil.jpg';
import useOverflow from './useOverflow';

const Profil = () => {
  useOverflow('scroll');
  return (
    <div className={styles.profil}>
      <h1>À propos de moi</h1>
      <div className={styles.content}>
        {/* <img src={photoProfil} alt="Photo de Profil" className={styles.photo} /> */}
        <div className={styles.description}>
          <p>
            Bonjour! Je m'appelle Axel DELPIERRE, un étudiant passionné en 2ème année de BTS SIO au lycée Jean Vilar, spécialisé en SLAM (Solutions Logicielles et Applications Métiers). Mon parcours académique m'a permis d'acquérir des compétences solides en développement logiciel, gestion de projets informatiques et analyse des besoins métiers.
          </p>
          <p>
            En dehors de mes études, je suis un fervent amateur de nouvelles technologies et je consacre une partie de mon temps libre à explorer les dernières tendances en matière de développement web et mobile. J'aime également participer à des hackathons et des projets open source pour mettre en pratique mes compétences et collaborer avec d'autres passionnés.
          </p>
          <p>
            Mon objectif est de devenir un développeur compétent et polyvalent, capable de concevoir des solutions innovantes qui répondent aux besoins des utilisateurs. Je suis toujours à la recherche de nouvelles opportunités pour apprendre et grandir dans le domaine de l'informatique.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profil;