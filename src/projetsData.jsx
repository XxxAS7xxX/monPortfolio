import bibliotheque1 from './assets/projets/biblioutheque1.png';
import bibliotheque2 from './assets/projets/biblioutheque2.png';
import bibliotheque3 from './assets/projets/biblioutheque3.png';
import bibliotheque4 from './assets/projets/compo/2ram8go.webp';
import bibliotheque5 from './assets/projets/compo/cartemere.webp';
import bibliotheque6 from './assets/projets/compo/hdd.webp';
import bibliotheque7 from './assets/projets/compo/intel.jpg';
import bibliotheque8 from './assets/projets/compo/1030.png';
import extension1 from './assets/projets/extension1.png';

export const projets = [
  {
    id: 'magic-hanout',
    titre: 'Projet Magic Hanout',
    description: 'Site de vente en ligne, de produits fictifs magiques',
    descriptionLongue:
    'Magic Hanout est un site e-commerce fictif à thème dark fantaisiste développé avec Symfony. ' +
    'Il repose sur 3 entités principales — Forgeron, Création et Catégorie — reliées entre elles via Doctrine ORM, ' +
    'avec une gestion des utilisateurs distinguant les rôles visiteur et administrateur. ' +
    'Chaque entité dispose d\'un CRUD complet côté administration (ajout, modification, suppression) ' +
    'ainsi que d\'une barre de recherche avec filtres sur la vue publique. ' +
    'Les pages publiques présentent les forgerons et créations sous forme de cards cliquables ' +
    'menant à des fiches détaillées, avec des relations entre entités navigables directement depuis ces fiches. ' +
    'La page d\'accueil affiche les 4 dernières créations ajoutées et intègre un mini-jeu (Dragon Nemesis). ' +
    'Ce projet m\'a permis de mettre en pratique les fondamentaux de Symfony : ' +
    'entités et relations Doctrine, repositories avec requêtes DQL personnalisées pour la recherche, ' +
    'formulaires, sécurité et gestion des rôles.',
    technologies: 'Symfony',
    lien: 'https://github.com/btssiojvpromo2025-2026/ppe3-microsoft-support-indian-not-scam.git',
  },
  {
    id: 'extension-chrome',
    titre: 'Extension Chrome',
    description: "Prise en main des outils de développement chrome, afin de créer une extension",
    descriptionLongue: `This theme highlights a dark, minimalist, and immersive atmosphere, perfect for users who want a cleaner and more eye-friendly browser while keeping the unique aesthetic of the game.

Features :
  - Dark background for better visual comfort
  - Colors inspired by the Fear and Hunger universe
  - Active tab text in white and inactive tabs in gray for better readability
  - Harmonized icons and toolbars for total immersion

Perfect for :
  - Fans of Fear and Hunger
  - Dark mode enthusiasts
  - Anyone who wants an aesthetic and immersive browser
  
  lien de téléchargement : https://chromewebstore.google.com/detail/blmlbmhhlbpleecdigmpbhpenljdfkhl?utm_source=item-share-cb`,
    technologies: 'Json, environnement chrome',
    lien: 'https://github.com/XxxAS7xxX/chromeFH.git',
    images: [ extension1 ],
  },
  {
    id: 'gestion-musique',
    titre: 'Gestion de Musique',
    description: "Site de gestion de musique, à partir d'une base de données",
    technologies: 'Symfony',
    lien: 'https://github.com/btssiojvpromo2025-2026/gestionmusique-XxxAS7xxX.git',
  },
  {
    id: 'projet-labjs',
    titre: 'Projet LabJS',
    description: 'Site brouillon pour tester des fonctionnalités en JavaScript avec plusieurs mini-projets',
    technologies: 'Javascript, html, css',
    lien: 'https://github.com/XxxAS7xxX/siteLabJS.git',
  },
  {
    id: 'projet-animaux',
    titre: 'Projet Animaux',
    description: "Prise en main de react et MUI à travers un site sur les animaux et leurs caractéristiques",
    technologies: 'React, Mui',
    lien: 'https://github.com/XxxAS7xxX/react-app.git',
  },
  {
    id: 'jeu-qix',
    titre: 'Jeu QIX',
    description: "Projet d'étude en python, recréation du jeu QIX avec une bibliothèque très limitée",
    technologies: 'Python',
    lien: 'https://github.com/XxxAS7xxX/QIX.git',
  },
  {
    id: 'biblioutheque',
    titre: 'Bibliouthèque di Films',
    description: 'Serveur multimédia personnel type Netflix, auto-hébergé sur un vieux PC recyclé avec accès distant sécurisé.',
    descriptionLongue: `Projet de A à Z consistant à transformer un ancien PC en serveur multimédia complet. 
    Installation d'Ubuntu Server 24.04 LTS sur un disque de 4 To, déploiement de Jellyfin via Docker, 
    configuration d'un partage réseau Samba pour le transfert de fichiers depuis Windows, 
    et mise en place d'un accès distant via DuckDNS et redirection de ports Freebox. 
    L'interface a été entièrement personnalisée avec le thème ElegantFin (CSS), une charte graphique 
    rouge et noire, un backdrop cinématique plein écran, et le plugin Home Screen Sections pour 
    un rendu inspiré de Netflix avec des sections par genre (Action, Thriller, Sci-Fi, Crime, Drame). 
    Le serveur tourne 24h/24 avec reconnexion WiFi automatique, mise à jour DuckDNS toutes les 5 minutes, 
    et redémarrage automatique des conteneurs Docker.`,
    technologies: 'Ubuntu Server 24.04, Docker, Jellyfin, Samba, Nginx Proxy Manager, DuckDNS, CSS, Netplan, Bash',
    etapes: [
      '1. Installation Ubuntu Server 24.04 LTS sur disque 4 To (partitionnement LVM)',
      '2. Configuration WiFi via wpa_supplicant et Netplan pour reconnexion automatique',
      '3. Installation Docker et déploiement Jellyfin via docker-compose',
      '4. Configuration Samba pour partage réseau accessible depuis Windows',
      '5. Extension de la partition LVM de 98 Go à 3,6 To',
      '6. Mise en place DuckDNS + redirection de ports Freebox pour accès distant',
      '7. Installation Nginx Proxy Manager pour reverse proxy',
      '8. Personnalisation CSS complète : thème ElegantFin, charte rouge/noir, backdrop cinématique',
      '9. Installation plugins : Home Screen Sections, Media Bar, Collection Sections',
      '10. Automatisation : watchdog WiFi, mise à jour DuckDNS toutes les 5 minutes',
    ],
    images: [ bibliotheque1, bibliotheque2, bibliotheque3, bibliotheque4, bibliotheque5, bibliotheque6, bibliotheque7, bibliotheque8 ],
  }
];