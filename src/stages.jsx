import styles from './styles/stages.module.css';
import useOverflow from './useOverflow';
import acensi2 from './assets/acensi2.jpg';
import acensi3 from './assets/stage1/acensi3.png';
import acensi4 from './assets/stage1/acensi4.png';
import acensi5 from './assets/stage1/acensi5.png';
import Slider from './slider.jsx';

function Stages() {
  useOverflow('scroll');
  return (
    <div className={styles.stages}>
      <h1 style={{padding:'1em 0 0.4em 0', fontSize:'3em', fontFamily:'orbitron'}}>Mes Stages</h1>
      <div className={styles.stage1}>
        <div className={styles.titreS1}>
          <h1 style={{padding:'0.6em 0 0 0', fontSize:'2.4em', fontFamily:'orbitron'}}>Stage 1</h1>
        </div>
        <div className={styles.contenuS1}>
          <img src={acensi2} alt="" className={styles.imgs1}/>
          <div className={styles.descriptions1}>
            <h1>Qu'est ce que Acensi</h1>
            <p >ACENSI est une société de services du numérique (ESN) spécialisée dans le conseil en informatique et la transformation digitale. Fondée en 2003, elle accompagne les grandes entreprises et les institutions dans la conception, le développement et la mise en œuvre de solutions technologiques innovantes. Présente en France et à l’international, ACENSI intervient dans divers secteurs tels que la finance, l’assurance, l’énergie ou encore les télécommunications, en mettant l’accent sur l’expertise technique, la qualité des prestations et la proximité avec ses clients.</p>
          </div>
        </div>
        <div className={styles.contenuCardS1}>
            <div className={styles.card}>
              <div><h2>Cybersécurité</h2></div>
              <img src={acensi3} alt="" />
              <div className={styles.description}>
                
                <p>Les experts d'ACENSI vous accompagnent à chaque étape : de la définition de la stratégie à l’implémentation en passant par l’audit et l’optimisation continue de vos dispositifs de cybersécurité</p>
              </div>
            </div>
            <div className={styles.card}>
              <div><h2>Développement d'application</h2></div>
              <img src={acensi4} alt="" />
              <div className={styles.description}>
                
                <p>La Digital Factory d'ACENSI conçoit et développe des solutions innovantes en mode agile, en intégrant UX/UI, DevOps et industrialisation pour accélérer la mise sur le marché des produits numériques</p>
              </div>
            </div>
            <div className={styles.card}>
              <div><h2>Infrastructure et Cloud</h2></div>
              <img src={acensi5} alt="" />
              <div className={styles.description}>
                
                <p>ACENSI accompagne la modernisation des infrastructures IT en prenant en compte vos attentes métiers avec des solutions Cloud hybrides, sécurisées et scalables, pour une performance et un équilibre entre souveraineté, performance et coûts</p>
              </div>
            </div>
        </div>
        <div className={styles.realisation}>
          <h2>Missions et travaux réalisés</h2>

          <h3>Service Desk (4 semaines)</h3>
          <p>Durant le premier mois de mon stage, j'ai intégré le service desk d'Acensi, 
            dont la mission principale est d'assurer le support technique aux collaborateurs 
            et de garantir le bon fonctionnement de l'infrastructure informatique.</p>

          <h3>Préparation et maintenance du matériel</h3>
          <p>J'ai pris en charge la préparation complète des postes de travail, 
            incluant l'installation de l'environnement d'entreprise via clé bulk pour l'enrôlement des machines, 
            ainsi que des interventions matérielles telles que le remplacement de disques SSD et l'ajout de barrettes RAM. 
            J'ai également géré le déploiement des téléphones professionnels en utilisant Apple Configurator pour l'enrôlement 
            et l'installation des protections de sécurité nécessaires.</p>

          <h3>Support technique et gestion des incidents</h3>
          <p>Mon rôle comprenait la résolution d'incidents variés : dépannage d'imprimantes, 
            intervention directe dans les différents services suite aux tickets remontés par les utilisateurs, 
            et orientation des demandes vers les équipes spécialisées lorsque celles-ci dépassaient mon périmètre d'action. 
            Cette expérience m'a permis de développer mes compétences en diagnostic technique et en relation client interne.
          </p>
          
          <h3 style={{margin:'3em 0 1em 0'}}>Équipe de développement (2 semaines)</h3>
          <p>Pour la seconde partie de mon stage, j'ai rejoint l'équipe de développement web, 
            découvrant ainsi un environnement professionnel orienté méthodologie agile.</p>

          <h3>Environnement technique</h3>
          <p>J'ai configuré mon environnement de travail en utilisant WSL (Windows Subsystem for Linux) afin de travailler sur Ubuntu, 
            conformément aux standards de l'équipe. Les développeurs utilisent principalement React comme framework 
            et appliquent la méthode Scrum pour organiser leur travail.</p>

          <h3>Apprentissage et réalisations</h3>
          <p>N'ayant jamais pratiqué JavaScript auparavant, j'ai commencé par réaliser un site test regroupant plusieurs mini-projets, 
            dont un jeu inspiré du dinosaure de Google Chrome. 
            Ces exercices pratiques m'ont permis de monter en compétence sur les fondamentaux du langage. j'ai par la suite on a voulu me mettre sur un projet interne</p>

          <h3>Immersion dans la méthode agile</h3>
          <p>J'ai participé à l'ensemble des cérémonies Scrum (daily meetings, sprint planning, retrospective), 
            ce qui m'a offert une vision complète du cycle de développement d'un projet client 
            et des interactions entre les différents membres de l'équipe. 
            Cette expérience m'a fait découvrir les enjeux du développement en environnement professionnel 
            et la gestion de projet selon les principes agiles.</p>
            
        </div>
        <Slider />
      </div>
    </div>
  )
}
export default Stages