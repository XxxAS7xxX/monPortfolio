import './styles/projets.css';
function Projets() {
  return (
    <div className="projets">
      <h1>Mes Projets</h1>
      <table>
        <tbody>
          <tr>
            <div className="container">
              <div className="card">
                <td>Projet Magic Hanout</td>
                <td>Site de vente en ligne, de produits fictifs magiques</td>
                <td>Symfony</td>
                <td><a href="https://github.com/btssiojvpromo2025-2026/ppe3-microsoft-support-indian-not-scam.git">Aller voir</a></td>
              </div>
              <div className="card">
                <td>Extention Chrome</td>
                <td>Prise en main des outils de developpement chrome, afin de créer une extension</td>
                <td>Json, environnement chrome</td>
                <td><a href="https://github.com/XxxAS7xxX/chromeFH.git">Aller voir</a></td>
              </div>
              <div className="card">
                <td>Projet Gestionnaire de Musique</td>
                <td>Site de gestion de musique, à partir d'une base de données</td>
                <td>Symfony</td>
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