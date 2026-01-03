import useOverflow from './useOverflow';
import styles from './styles/veille.module.css';

const Veille = () => {
    useOverflow('scroll');
    return (
        <div className={styles.veille}>
            <h1>Veille Technologique</h1>
            <div className={styles.veilleContainer}>
                <p>Bienvenue dans la section de veille technologique. 
                    Ici, vous trouverez des articles, des ressources 
                    et des mises à jour sur les dernières tendances en terme de sécurité de blockchain.</p>
                <iframe 
                    src="https://www.pearltrees.com/xxas7xx/technologique-blockchain/id90530680?embed=2&d=202601032331" 
                    style={{
                        background: "black", 
                        width: "853px", 
                        height: "604px", 
                        border: "0px"
                    }} 
                    allowTransparency="true"
                    title="Pearltrees Veille Technologique">
                </iframe>
                <span style={{display: "block", paddingTop: "2px", color: "#818181", fontSize: "13px"}}>
                    <a 
                        href="https://www.pearltrees.com/xxas7xx/technologique-blockchain/id90530680" 
                        style={{color: "#818181", fontSize: "13px"}} 
                        target="_blank"
                        rel="noopener noreferrer">
                        Veille technologique (Blockchain et leur sécurité)
                    </a>
                    , par <a 
                        href="https://www.pearltrees.com/xxas7xx" 
                        style={{color: "#818181", fontSize: "13px"}} 
                        target="_blank"
                        rel="noopener noreferrer">
                        xxas7xx
                    </a>
                </span>
            </div>
        </div>
    );
}
export default Veille;