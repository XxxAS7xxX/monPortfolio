import styles from './styles/profil.module.css';
import photoProfil from './assets/portraitphoto.avif';
import useOverflow from './useOverflow';


const Profil = () => {
  useOverflow('hidden');
  return (
    <div className={styles.profil}>
        <h1>À propos de moi</h1>
        <div className={styles.content}>
            <img src={photoProfil} alt="Photo de Profil" className={styles.photo} />
            <div className={styles.description}>
                <p>
                    Je m'appelle Axel DELPIERRE, étudiant en 2ème année de BTS SIO au lycée Jean Vilar, 
                    spécialisé en SLAM (Solutions Logicielles et Applications Métiers). 
                    Passioné par l'innovation et l'originalité, je suis constamment à la recherche de nouvelles idées
                    ou de nouveaux concepts. Je suis également très curieux et j'aime explorer différents domaines 
                    pour élargir mes connaissances et compétences.
                </p>
                <br />
                <p>
                    Mon objectif est d’acquérir un maximum de compétences dans différents domaines 
                    afin de pouvoir m’adapter à toutes les situations et répondre efficacement à toute éventualité. 
                    Cette polyvalence me permettra d’élargir mes capacités, 
                    de mieux comprendre des problématiques variées et d’apporter des solutions pertinentes, 
                    quelles que soient les circonstances.
                </p>
            </div>
        </div>
        <a href="/cv/cv.pdf" target="_blank" rel="noopener noreferrer" className={styles.btnCv}>Télécharger mon CV</a>
    </div>
  );
};

export default Profil;