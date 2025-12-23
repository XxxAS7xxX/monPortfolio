import './styles/accueil.css';
import bgVideo from './assets/videoAccueil.mp4';

const Accueil = () => (
    <div className="accueil">
        <video
        className="video-bg"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={bgVideo} type="video/mp4" />
      </video>
        <div className="haut">
            <h1>Bienvenue sur mon portfolio</h1>
            <br />
            <br />
            <h2 style={{textShadow:'0 0 10px yellow'}}>Bonjour, je suis Axel DELPIERRE</h2>
            <br />
            <h3 style={{ width: '40%', textAlign: 'center', textShadow: '0 0 10px yellow'}}>Étudiant en 2ème année de BTS SIO au lycée Jean Vilar, spécialisé en SLAM (Solutions Logicielles et Applications Métiers)</h3>
            <ul className="box-accueil">
                <div className="box-projets box">
                    <h1>Projets</h1>
                    <p>Découvrez les différents projets réalisés au cours de ma formation et en dehors</p>
                    <a href="/projets">Aller voir</a>
                </div>
                <div className="box-stages box">
                    <h1>Stages</h1>
                    <p>Explorez les différents stages, illustrant mon adaptation et ma contribution dans des environnements réels.</p>
                    <a href="/stages">Aller voir</a>
                </div>
                <div className="box-competences box">
                    <h1>Compétences</h1>
                    <p>Découvrez mes compétences techniques et professionnelles acquises au cours de ma formation et de mes expériences.</p>
                    <a href="/competences">Aller voir</a>
                </div>
            </ul>
        </div>
    </div>
);

export default Accueil;