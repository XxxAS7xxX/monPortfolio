import React, { useState } from 'react';
import styles from './styles/slider.module.css';
import img1 from './assets/installationAcenstream.jpg';
import img2 from './assets/extraitCode1.png';
import img3 from './assets/extraitCode2.png';
import img4 from './assets/extraitCode3.png';

//fait en grande partie par une IA

function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      id: 1,
      image: img1,
      title: 'installation AcenStream',
      description: 'Mise en place de rasberry pi pour le projet de diffusion de flux vidéo en continu AcenStream.'
    },
    {
      id: 2,
      image: img2,
      title: 'Extrait de code react',
      description: "Extrait de code react pour automatiser l'affichage de données d'une certaine manière."
    },
    {
      id: 3,
      image: img3,
      title: 'Extrait de code react',
      description: 'Extrait de code react montrant la structure d\'un formulaire.'
    },
    {
      id: 4,
      image: img4,
      title: 'Extrait de code JavaScript',
      description: 'Extrait de code JavaScript montrant la structure de fonction d\'un mini projet.'
    }
  ];

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Exemples</h2>

        <div className={styles.sliderContainer}>
          {/* Image */}
          <div className={styles.imageContainer}>
            <img
              src={slides[currentIndex].image}
              alt={slides[currentIndex].title}
              className={styles.image}
            />
            
            {/* Boutons de navigation */}
            <button
              onClick={goToPrevious}
              className={styles.buttonLeft}
              aria-label="Previous slide"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            
            <button
              onClick={goToNext}
              className={styles.buttonRight}
              aria-label="Next slide"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>

          {/* Descriptif */}
          <div className={styles.description}>
            <h2 className={styles.projectTitle}>
              {slides[currentIndex].title}
            </h2>
            <p className={styles.projectDescription}>
              {slides[currentIndex].description}
            </p>
          </div>

          {/* Indicateurs (dots) */}
          <div className={styles.indicators}>
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`${styles.dot} ${index === currentIndex ? styles.dotActive : ''}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;