import styles from './styles/competences.module.css';
import js from './assets/js.png';
import reactLogo from './assets/react.png';
import php from './assets/php.png';
import python from './assets/python.png';
import csharp from './assets/Csharp.png';
import html5 from './assets/html5.png';
import css from './assets/css.png';
import sql from './assets/sql.png';
import symfony from './assets/symfony.png';
import mui from './assets/mui.png';
import bootstrap from './assets/bootstrap.png';
import windows from './assets/windows.png';
import linux from './assets/linux.png';
import ubuntu from './assets/ubuntu.png';
import macos from './assets/macos.png';
import vscode from './assets/vscode.png';
import postman from './assets/postman.png';
import github from './assets/github.png';
import cisco from './assets/cisco.png';
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
            <img src={html5} alt="HTML5 Logo" />
            <p>HTML5</p>
          </div>
          <div className={styles.logo}>
            <img src={css} alt="CSS Logo" />
            <p>CSS</p>
          </div>
          <div className={styles.logo}>
            <img src={js} alt="JavaScript Logo" />
            <p>JavaScript</p>
          </div>
          <div className={styles.logo}>
            <img src={php} alt="PHP Logo" />
            <p>PHP</p>
          </div>
          <div className={styles.logo}>
            <img src={python} alt="Python Logo" />
            <p>Python</p>
          </div>
          <div className={styles.logo}>
            <img src={csharp} alt="C# Logo" />
            <p>C#</p>
          </div>
          <div className={styles.logo}>
            <img src={sql} alt="SQL Logo" />
            <p>SQL</p>
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
            <img src={mui} alt="Mui Logo" />
            <p>Mui</p>
          </div>
          <div className={styles.framework}>
            <img src={symfony} alt="Symfony Logo" />
            <p>Symfony</p>
          </div>
          <div className={styles.framework}>
            <img src={bootstrap} alt="Bootstrap Logo" />
            <p>Bootstrap</p>
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
      <div className={styles.outilsContainer}>
        <h2>Outils</h2>
        <div className={styles.outils}>
          <div className={styles.outil}>
            <img src={vscode} alt="VSCode Logo" />
            <p>VSCode</p>
          </div>
          <div className={styles.outil}>
            <img src={postman} alt="Postman Logo" />
            <p>Postman</p>
          </div>
          <div className={styles.outil}>
            <img src={github} alt="GitHub Logo" />
            <p>GitHub</p>
          </div>
          <div className={styles.outil}>
            <img src={cisco} alt="Cisco Logo" />
            <p>Cisco Packet Tracer</p>
          </div> 
        </div>
      </div>
    </div>
  )
}
export default Competences