import './styles/stages.css';
import useOverflow from './useOverflow';
import acensi2 from './assets/acensi2.jpg';
function Stages() {
  useOverflow('scroll');
  return (
    <div className="stages">
      <h1>Mes Stages</h1>
      <div className="stage1">
        <div className="titreS1">
          <h1>Stage 1</h1>
        </div>
        <div className="contenuS1">
          <img src={acensi2} alt="" className='imgs1'/>
          <div className='descriptions1'>
            <h1>Qu'est ce que Acensi</h1>
            <p >ACENSI est une société de services du numérique (ESN) spécialisée dans le conseil en informatique et la transformation digitale. Fondée en 2003, elle accompagne les grandes entreprises et les institutions dans la conception, le développement et la mise en œuvre de solutions technologiques innovantes. Présente en France et à l’international, ACENSI intervient dans divers secteurs tels que la finance, l’assurance, l’énergie ou encore les télécommunications, en mettant l’accent sur l’expertise technique, la qualité des prestations et la proximité avec ses clients.</p>
          </div>
        </div>
        <div className="contenuCardS1">
            <div className="card">
                <div><h2>Projet Magic Hanout</h2></div>
                <div className='description'>Site de vente en ligne, de produits fictifs magiques</div>
                <div><h5>Symfony</h5></div>
                <div><a href="https://github.com/btssiojvpromo2025-2026/ppe3-microsoft-support-indian-not-scam.git">Aller voir</a></div>
              </div>
            <div className="card">
                <div><h2>Projet Magic Hanout</h2></div>
                <div className='description'>Site de vente en ligne, de produits fictifs magiques</div>
                <div><h5>Symfony</h5></div>
                <div><a href="https://github.com/btssiojvpromo2025-2026/ppe3-microsoft-support-indian-not-scam.git">Aller voir</a></div>
              </div>
            <div className="card">
                <div><h2>Projet Magic Hanout</h2></div>
                <div className='description'>Site de vente en ligne, de produits fictifs magiques</div>  
              <div><h5>Symfony</h5></div>
            <div><a href="https://github.com/btssiojvpromo2025-2026/ppe3-microsoft-support-indian-not-scam.git">Aller voir</a></div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Stages