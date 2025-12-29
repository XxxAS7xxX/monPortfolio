import styles from './styles/competences.module.css';
import js from './assets/js.png';
import reactLogo from './assets/react.png';
import php from './assets/php.png';
import python from './assets/python.png';
import csharp from './assets/Csharp.png';
import symfony from './assets/symfony.png';
import windows from './assets/windows.png';
import linux from './assets/linux.png';
import ubuntu from './assets/ubuntu.png';
import macos from './assets/macos.png';
import useOverflow from './useOverflow';



function Competences() {
  useOverflow('scroll');
  return (
    <div className={styles.competences}>
      <h1>Mes Compétences</h1>
      <div className={styles.language}>
        <h2>Langages de Programmation</h2>
        <div className={styles.logos}>
          <div className={styles.logo}>
            <img src={js} alt="JavaScript Logo" />
            <p>JavaScript</p>
          </div>
          <div className={styles.logo}>
            <img src={python} alt="Python Logo" />
            <p>Python</p>
          </div>
          <div className={styles.logo}>
            <img src={php} alt="PHP Logo" />
            <p>PHP</p>
          </div>
          <div className={styles.logo}>
            <img src={csharp} alt="C# Logo" />
            <p>C#</p>
          </div>
        </div>
      </div>
      <div className={styles.frameworkContainer}>
        <h2>Framework et Bibliothèques</h2>
        <div className={styles.frameworks}>
          <div className={styles.framework}>
            <img src={reactLogo} alt="React Logo" />
            <p>React</p>
          </div>
          <div className={styles.framework}>
            <img src={symfony} alt="Symfony Logo" />
            <p>Symfony</p>
          </div>
        </div>
      </div>
      <div className={styles.systemeExploitation}>
        <h2>Systèmes d'Exploitation</h2>
          <div className={styles.systemes}>
            <div className={styles.systeme}>
              <img src={windows} alt="Windows Logo" />
              <p>Windows</p>
            </div>
            <div className={styles.systeme}>
              <img src={linux} alt="Linux Logo" />
              <p>Linux</p>
            </div>
            <div className={styles.systeme}>
              <img src={ubuntu} alt="Ubuntu Logo" />
              <p>Ubuntu</p>
            </div>
            <div className={styles.systeme}>
              <img src={macos} alt="MacOS Logo" />
              <p>MacOS</p>
            </div>
          </div>
      </div>
    </div>
  )
}
export default Competences