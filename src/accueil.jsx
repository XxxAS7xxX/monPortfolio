import './styles/accueil.css';
import { Link } from 'react-router-dom';
import bgVideo from './assets/videoAccueil.mp4';
import useOverflow from './useOverflow';

const Accueil = () => {
  useOverflow('hidden');
    return (
    <div className="accueil">
        <video className="video-bg"
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
                    <Link to="/projets">Aller voir</Link>
                </div>
                <div className="box-stages box">
                    <h1>Stages</h1>
                    <p>Explorez les différents stages, illustrant mon adaptation et ma contribution dans des environnements réels.</p>
                    <Link to="/stages">Aller voir</Link>
                </div>
                <div className="box-competences box">
                    <h1>Compétences</h1>
                    <p>Découvrez mes compétences techniques et professionnelles acquises au cours de ma formation et de mes expériences.</p>
                    <Link to="/competences">Aller voir</Link>
                </div>
            </ul>
            <Link to="/profil" className='btnProfil'><i className="fa-solid fa-person"></i></Link>
            <Link to="/veille" className='btnVeille'><i className="fa-solid fa-magnifying-glass"></i></Link>
        </div>
    </div>
)
}
export default Accueil;