import useOverflow from "./useOverflow";
import styles from "./styles/formation.module.css";


const Formation = () => {
    useOverflow("scroll");
    return (
        <div className={styles.formation}>
            <div className={styles.formationContainer}>
                <h2>Formation</h2>
                <br />
            <p>L’acronyme BTS SIO fait référence au Brevet de Technicien Supérieur Services Informatiques aux Organisations. La formation associée à ce diplôme prépare l’apprenti à devenir administrateur de réseaux locaux ou développeur d’applications informatiques. De sa définition aux objectifs, en passant par les débouchés, voici ce qu’il faut savoir sur ce BTS.
Ce diplôme d'Etat vient remplacer, depuis septembre 2011, le BTS informatique de Gestion ou BTS IG. Ce diplôme constitue un bagage suffisant pour faire valoir ses compétences en informatique lors des stages. Présent dans 9 villes de France, Maestris prépare les étudiants à l’obtention de ce diplôme national d'État en bac+2, délivrant 120 crédits.
La formation pour obtenir ce BTS s’adresse à tous les bacheliers, donc titulaires d’un baccalauréat toutes spécialités. L’apprenti, selon sa disponibilité, peut choisir de suivre une formation classique ou en alternance. Le diplôme se prépare sur une durée de 2 ans, nécessitant au total 1350 heures d’apprentissage.
Suivant ses aspirations et ses appétences, l’étudiant peut choisir entre deux options de diplôme : le BTS SIO option SLAM et le BTS option SISR. La première est associée à l’option Solutions Logicielles et Applications Métiers. Elle prépare les techniciens à devenir experts des logiciels. La deuxième option SISR fait référence aux Solutions d’Infrastructures, Systèmes et Réseaux. Elle s’adresse aux futurs gestionnaires et administrateurs de réseau informatique.</p>
        </div></div>
            
    );
};

export default Formation;