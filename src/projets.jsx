import './styles/projets.css';
import bgVideo from './assets/videoProjets.mp4';
import useOverflow from './useOverflow';


function Projets() {
  useOverflow('scroll');
  return (
    <div className="projets">
      <h1>Mes Projets</h1>
      <table>
        <tbody>
          <tr>
            <div className="container">
              <div className="card">
                <video className="video-bg" autoPlay loop muted playsInline>
                  <source src={bgVideo} type="video/mp4" />
                </video>
                <td><h2>Projet Magic Hanout</h2></td>
                
                <td className='description'>Site de vente en ligne, de produits fictifs magiques</td>
                
                <td><h5>Symfony</h5></td>
                <td><a href="https://github.com/btssiojvpromo2025-2026/ppe3-microsoft-support-indian-not-scam.git">Aller voir</a></td>
              </div>
              
              <div className="card">
                <video className="video-bg" autoPlay loop muted playsInline>
                  <source src={bgVideo} type="video/mp4" />
                </video>
                <td><h2>Extention Chrome</h2></td>
                
                <td className='description'>Prise en main des outils de developpement chrome, afin de créer une extension</td>
                
                <td><h5>Json, environnement chrome</h5></td>
                <td><a href="https://github.com/XxxAS7xxX/chromeFH.git">Aller voir</a></td>
              </div>
              
              <div className="card">
                <video className="video-bg" autoPlay loop muted playsInline>
                  <source src={bgVideo} type="video/mp4" />
                </video>
                <td><h2>Gestion de Musique</h2></td>
                
                <td className='description'>Site de gestion de musique, à partir d'une base de données</td>
                
                <td><h5>Symfony</h5></td>
                <td><a href="https://github.com/btssiojvpromo2025-2026/gestionmusique-XxxAS7xxX.git">Aller voir</a></td>
              </div>
            </div>
          </tr>
          <tr>
            <div className="container">
              <div className="card">
                <video className="video-bg" autoPlay loop muted playsInline>
                  <source src={bgVideo} type="video/mp4" />
                </video>
                <td><h2>Projet Magic Hanout</h2></td>
                
                <td className='description'>Site de vente en ligne, de produits fictifs magiques</td>
                
                <td><h5>Symfony</h5></td>
                <td><a href="https://github.com/btssiojvpromo2025-2026/ppe3-microsoft-support-indian-not-scam.git">Aller voir</a></td>
              </div>
              
              <div className="card">
                <video className="video-bg" autoPlay loop muted playsInline>
                  <source src={bgVideo} type="video/mp4" />
                </video>
                <td><h2>Extention Chrome</h2></td>
                
                <td className='description'>Prise en main des outils de developpement chrome, afin de créer une extension</td>
                
                <td><h5>Json, environnement chrome</h5></td>
                <td><a href="https://github.com/XxxAS7xxX/chromeFH.git">Aller voir</a></td>
              </div>
              
              <div className="card">
                <video className="video-bg" autoPlay loop muted playsInline>
                  <source src={bgVideo} type="video/mp4" />
                </video>
                <td><h2>Gestion de Musique</h2></td>
                
                <td className='description'>Site de gestion de musique, à partir d'une base de données</td>
                
                <td><h5>Symfony</h5></td>
                <td><a href="https://github.com/btssiojvpromo2025-2026/gestionmusique-XxxAS7xxX.git">Aller voir</a></td>
              </div>
            </div>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
export default Projets