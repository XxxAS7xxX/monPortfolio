import styles from './styles/competences.module.css';
import js from './assets/js.png';
import reactLogo from './assets/react.png';
import php from './assets/php.png';

function Competences() {
  return (
    <div className={styles.competences}>
      <h1>Mes Compétences</h1>
      <p>Technologies maîtrisées...</p>
      <img src={js} alt="JavaScript" />
      <img src={reactLogo} alt="React" />
      <img src={php} alt="PHP" />
    </div>
  )
}
export default Competences