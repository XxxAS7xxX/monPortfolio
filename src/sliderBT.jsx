import React, { useState, useCallback } from 'react';
import styles from './styles/sliderBT.module.css';

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
      // image: img1,
      image: null, // retire ce null une fois tes images importées
      placeholder: 'VPN OpenVPN',
      title: 'Configuration VPN — OpenVPN',
      description:
        'Mise en place du tunnel VPN sur le serveur de développement. ' +
        'Configuration des certificats, des routes réseau et des droits d\'accès ' +
        'pour permettre aux développeurs de travailler à distance en toute sécurité.',
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
      // image: img4,
      image: null,
      placeholder: 'React + PHP',
      title: 'Intégration React dans un environnement PHP',
      description:
        'Adaptation du routage et des redirections URL React pour les rendre compatibles ' +
        'avec l\'architecture PHP du site Vigilia IoT. Travail d\'harmonisation ' +
        'esthétique pour assurer la cohérence visuelle entre toutes les pages.',
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