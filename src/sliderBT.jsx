import React, { useState, useCallback } from 'react';
import styles from './styles/sliderBT.module.css';
import sc_rust from './assets/stage2/screen_rust.png';
import sc_deploi from './assets/stage2/screen_deploiement.png';

// ── Remplace les imports par tes vraies images ──
// import img1 from './assets/stage2/vpn-config.png';
// import img2 from './assets/stage2/audit-form.png';
// import img3 from './assets/stage2/pdf-export.png';
// import img4 from './assets/stage2/code-react.png';

function SliderBT() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(null); // 'left' | 'right'

  const slides = [
    {
      id: 1,
      image: sc_rust,
      placeholder: 'Rust',
      title: 'Initiation au langage Rust',
      description:
        'Durant ce stage, je me suis initié à Rust, un langage système axé sur la ' +
        'sécurité mémoire et les performances. J\'ai découvert ses concepts fondamentaux ' +
        'tels que l\'ownership, le borrowing et les types stricts, qui font de Rust ' +
        'un langage particulièrement rigoureux et fiable.',
    },
    {
      id: 2,
      // image: img2,
      image: null,
      placeholder: 'Audit Form',
      title: 'Formulaire d\'audit chaufferie',
      description:
        'Interface multi-étapes guidant un non-technicien à travers l\'audit complet ' +
        'd\'une chaufferie. Chaque section collecte photos et données spécifiques ' +
        'pour établir un diagnostic précis sans déplacement technique préalable.',
    },
    {
      id: 3,
      // image: img3,
      image: null,
      placeholder: 'PDF Export',
      title: 'Génération de rapport PDF',
      description:
        'Après soumission du formulaire, les données sont mises en forme et envoyées ' +
        'par e-mail sous forme de rapport PDF structuré. Cette fonctionnalité automatise ' +
        'entièrement la phase de pré-devis pour les équipes BT-Régulation.',
    },
     {
      id: 4,
      image: sc_deploi,
      placeholder: 'Déploiement',
      title: 'Déploiement et hébergement',
      description:
        'Mise en ligne des nouvelles fonctionnalités développées durant le stage. ' +
        'Cette étape comprenait la préparation de l\'environnement de production, ' +
        'la vérification de l\'intégration avec les modules existants et le suivi ' +
        'de la stabilité après déploiement.',
    },
  ];

  const goToPrevious = useCallback(() => {
    setDirection('right');
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, [slides.length]);

  const goToNext = useCallback(() => {
    setDirection('left');
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 'left' : 'right');
    setCurrentIndex(index);
  };

  const slide = slides[currentIndex];

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.sectionTitle}>
        <span>Exemples de réalisations</span>
      </h2>

      <div className={styles.sliderBlock}>

        {/* ── Zone image — SANS bordure, plein cadre ── */}
        <div className={styles.imageWrapper}>
          {slide.image ? (
            <img
              src={slide.image}
              alt={slide.title}
              className={styles.image}
            />
          ) : (
            /* Placeholder à retirer une fois les images disponibles */
            <div className={styles.imagePlaceholder}>
              <span className={styles.placeholderIcon}>🖼</span>
              <span className={styles.placeholderLabel}>{slide.placeholder}</span>
            </div>
          )}

          {/* Boutons navigation superposés */}
          <button
            onClick={goToPrevious}
            className={`${styles.navBtn} ${styles.navLeft}`}
            aria-label="Slide précédente"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <button
            onClick={goToNext}
            className={`${styles.navBtn} ${styles.navRight}`}
            aria-label="Slide suivante"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          {/* Compteur */}
          <div className={styles.counter}>
            {currentIndex + 1} / {slides.length}
          </div>
        </div>

        {/* ── Description collée directement sous l'image ── */}
        <div className={styles.caption}>
          <h3 className={styles.captionTitle}>{slide.title}</h3>
          <p className={styles.captionText}>{slide.description}</p>
        </div>

        {/* ── Dots ── */}
        <div className={styles.dots}>
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`${styles.dot} ${i === currentIndex ? styles.dotActive : ''}`}
              aria-label={`Aller à la slide ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </div>
  );
}

export default SliderBT;