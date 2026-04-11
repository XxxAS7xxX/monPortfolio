import { useParams, Link } from 'react-router-dom';
import { projets } from './projetsData';
import useOverflow from './useOverflow';
import bgVideo from './assets/videoProjets.mp4';
import styles from './styles/projetDetail.module.css';
import { useState } from 'react';

function ProjetDetail() {
  useOverflow('scroll');
  const [imageZoom, setImageZoom] = useState(null);
  const { id } = useParams();
  const projet = projets.find((p) => p.id === id);

  if (!projet) {
    return (
      <div className={styles.notFound}>
        <h1>Projet introuvable</h1>
        <Link to="/projets" className={styles.retour}>← Retour aux projets</Link>
      </div>
    );
  }

  return (
    <div className={styles.page}>

      {/* ── Vidéo en fond global ── */}
      {/* <video className={styles.videoBg} autoPlay loop muted playsInline>
        <source src={bgVideo} type="video/mp4" />
      </video> */}
      <div className={styles.fondProjetDetail}></div>
      <div className={styles.overlay} />

      <div className={styles.content}>

        {/* ── Bouton retour ── */}
        <Link to="/projets" className={styles.retour}>
          <span>←</span> Tous les projets
        </Link>

        {/* ── En-tête ── */}
        <header className={styles.header}>
          <div className={styles.headerLeft}>
            <p className={styles.label}>Projet</p>
            <h1 className={styles.titre}>{projet.titre}</h1>
          </div>
          {/* <a
            href={projet.lien}
            target="_blank"
            rel="noreferrer"
            className={styles.githubBtn}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            Voir sur GitHub
          </a> */}
          {projet.lien && (
            <a href={projet.lien} target="_blank" rel="noreferrer" className={styles.githubBtn}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              Voir sur GitHub
            </a>
      )}
        </header>

        {/* ── Technologies ── */}
        <div className={styles.technosRow}>
          {projet.technologies.split(',').map((tech) => (
            <span key={tech} className={styles.badge}>
              {tech.trim()}
            </span>
          ))}
        </div>

        {/* ── Description ── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Description</h2>
          <p className={styles.description}>
            {projet.descriptionLongue ?? projet.description}
          </p>
        </section>

        {/* ── Galerie images ── */}
              <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Aperçus</h2>
        <div className={styles.galerie}>
          {projet.images && projet.images.length > 0 ? (
            projet.images.map((src, i) => (
              <div key={i} className={styles.galerieItem} onClick={() => setImageZoom(src)}>
                <img src={src} alt={`Aperçu ${i + 1} — ${projet.titre}`} />
              </div>
            ))
          ) : (
            Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className={`${styles.galerieItem} ${styles.placeholder}`}>
                <span>🖼</span>
                <p>Image à venir</p>
              </div>
            ))
          )}
        </div>
      </section>

      {/* ── Modale zoom ── */}
      {imageZoom && (
        <div className={styles.modale} onClick={() => setImageZoom(null)}>
          <img src={imageZoom} alt="Aperçu agrandi" className={styles.modaleImg} />
          <button className={styles.modaleClose} onClick={() => setImageZoom(null)}>✕</button>
        </div>
      )}

        {projet.etapes && projet.etapes.length > 0 && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Procédure</h2>
            <ol className={styles.etapes}>
              {projet.etapes.map((etape, i) => (
                <li key={i} className={styles.etape}>{etape}</li>
              ))}
            </ol>
          </section>
        )}

      </div>
    </div>
  );
}

export default ProjetDetail;