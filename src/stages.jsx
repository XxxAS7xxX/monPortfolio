import styles from './styles/stages.module.css';
import useOverflow from './useOverflow';
import acensi2 from './assets/acensi2.jpg';
import acensi3 from './assets/stage1/acensi3.png';
import acensi4 from './assets/stage1/acensi4.png';
import acensi5 from './assets/stage1/acensi5.png';

function Stages() {
  useOverflow('scroll');
  return (
    <div className={styles.stages}>
      <h1>Mes Stages</h1>
      <div className={styles.stage1}>
        <div className={styles.titreS1}>
          <h1>Stage 1</h1>
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
      </div>
    </div>
  )
}
export default Stages