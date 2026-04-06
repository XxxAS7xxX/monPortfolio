import styles from './styles/stages2.module.css';
import useOverflow from './useOverflow';
import SliderBT from './sliderBT.jsx';

// Remplace ces imports par tes vraies images
// import btLogo from './assets/stage2/bt-logo.png';
// import vigilia1 from './assets/stage2/vigilia1.png';
// import vigilia2 from './assets/stage2/vigilia2.png';
// import vigilia3 from './assets/stage2/vigilia3.png';

function Stages2() {
  useOverflow('scroll');
  return (
    <div className={styles.stages}>
      <h1 className={styles.mainTitle}>Mes Stages</h1>

      <div className={styles.stage2}>

        {/* ── Bandeau titre avec image de fond BT ── */}
        <div className={styles.titreS2}>
          <div className={styles.titreBadge}>Stage 2</div>
          <h2 className={styles.entrepriseName}>BT-Régulation <span>&amp;</span> Vigilia IoT</h2>
          <p className={styles.entrepriseSub}>Solutions de régulation de chauffage collectif connecté</p>
        </div>

        {/* ── Présentation entreprise ── */}
        <div className={styles.contenuS2}>
          {/* Placeholder logo — remplace par <img src={btLogo} … /> */}
          <div className={styles.logoPlaceholder}>
            <span>BT</span>
            <span className={styles.logoSub}>RÉGULATION</span>
          </div>
          <div className={styles.descriptionS2}>
            <h2>Qu'est-ce que BT-Régulation ?</h2>
            <p>
              BT-Régulation est une entreprise spécialisée dans la régulation de chauffage collectif
              et la gestion énergétique des bâtiments. Elle développe <strong>Vigilia IoT</strong>,
              une solution connectée permettant la supervision en temps réel des installations de
              chauffage, l'optimisation de la consommation énergétique et la maintenance prédictive.
              La plateforme s'adresse aux gestionnaires d'immeubles, syndics et bailleurs sociaux
              souhaitant moderniser leurs infrastructures thermiques tout en réduisant leur impact
              environnemental.
            </p>
          </div>
        </div>

        {/* ── Cartes expertises ── */}
        <div className={styles.contenuCardS2}>
          <div className={styles.card}>
            <div className={styles.cardIcon}>🌐</div>
            <h2>Développement Web</h2>
            <div className={styles.cardDescription}>
              <p>
                Adaptation et évolution d'une application React intégrée dans un environnement PHP,
                gestion des routes et des redirections d'URL selon les contraintes du serveur.
              </p>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>🔒</div>
            <h2>Infrastructure &amp; VPN</h2>
            <div className={styles.cardDescription}>
              <p>
                Configuration d'un VPN OpenVPN sur un serveur de développement pour sécuriser
                les accès distants et garantir la confidentialité des échanges techniques.
              </p>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>🔥</div>
            <h2>IoT &amp; Chauffage</h2>
            <div className={styles.cardDescription}>
              <p>
                Développement de fonctionnalités métier autour de la régulation de chauffage
                collectif : audit guidé, génération de devis, export PDF et cohérence UI.
              </p>
            </div>
          </div>
        </div>

        {/* ── Section missions ── */}
        <div className={styles.realisation}>
          <h2>Missions et travaux réalisés</h2>

          <h3>Configuration VPN avec OpenVPN</h3>
          <p>
            L'une de mes premières missions a été la mise en place d'un tunnel VPN sécurisé
            à l'aide d'OpenVPN sur le serveur de développement de l'entreprise. Cela permettait
            aux développeurs de travailler à distance en accédant aux ressources internes de façon
            sécurisée, tout en isolant l'environnement de test du réseau public.
          </p>

          <h3>Adaptation de code React dans un environnement PHP</h3>
          <p>
            Le site de Vigilia IoT repose sur une architecture PHP. Ma mission a consisté à intégrer
            des composants React dans cet environnement hybride, en adaptant notamment la gestion
            des routes et des redirections d'URL pour les rendre compatibles avec le routage
            côté serveur PHP. Ce travail m'a confronté aux défis réels de l'intégration frontend
            dans des systèmes legacy.
          </p>

          <h3>Développement de l'outil d'audit chaufferie</h3>
          <p>
            J'ai développé une nouvelle fonctionnalité majeure : un audit guidé destiné à des
            personnes sans connaissance technique en chaufferie. Sous forme de formulaire multi-étapes,
            l'outil accompagne l'utilisateur section par section pour recueillir les informations
            nécessaires au diagnostic (photos des équipements, références, états), puis génère
            automatiquement un rapport PDF envoyé par e-mail aux équipes commerciales. Ce module
            permet à BT-Régulation d'accélérer la phase de devis et de réduire les déplacements
            techniques non nécessaires.
          </p>

          <h3>Déploiement des nouvelles fonctionnalités</h3>
          <p>
            Après le développement, j'ai participé au déploiement des nouvelles fonctionnalités
            sur l'environnement de production, en m'assurant de la stabilité des mises à jour
            et de la bonne intégration avec les modules existants du site.
          </p>

          <h3>Cohérence esthétique du site</h3>
          <p>
            Pour garantir une expérience utilisateur homogène, j'ai travaillé à harmoniser
            le design des nouvelles sections avec le reste du site Vigilia IoT : respect de la
            charte graphique, alignement des composants, uniformisation des espacements
            et des typographies afin que chaque page s'inscrive dans une continuité visuelle claire.
          </p>
        </div>

        {/* ── Slider ── */}
        <SliderBT />

      </div>
    </div>
  );
}

export default Stages2;