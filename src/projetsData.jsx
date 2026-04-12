import bibliotheque1 from './assets/projets/biblioutheque1.png';
import bibliotheque2 from './assets/projets/biblioutheque2.png';
import bibliotheque3 from './assets/projets/biblioutheque3.png';
import bibliotheque4 from './assets/projets/compo/2ram8go.webp';
import bibliotheque5 from './assets/projets/compo/cartemere.webp';
import bibliotheque6 from './assets/projets/compo/hdd.webp';
import bibliotheque7 from './assets/projets/compo/intel.jpg';
import bibliotheque8 from './assets/projets/compo/1030.png';
import extension1 from './assets/projets/extension1.png';
import magic1 from './assets/projets/magic1.png';
import magic2 from './assets/projets/magic2.png';
import magic3 from './assets/projets/magic3.png';
import magic4 from './assets/projets/magic4.png';
import magic5 from './assets/projets/magic5.png';
import magic6 from './assets/projets/magic6.png';
import magic7 from './assets/projets/magic7.png';
import labjs1 from './assets/projets/labjs1.png';
import musique1 from './assets/projets/musique1.png';
import musique2 from './assets/projets/musique2.png';
import musique3 from './assets/projets/musique3.png';
import musique4 from './assets/projets/musique4.png';
import musique5 from './assets/projets/musique5.png';
import qix1 from './assets/projets/qix1.png';
import qix2 from './assets/projets/qix2.jpg';
import animaux1 from './assets/projets/animaux1.png';
import animaux2 from './assets/projets/animaux2.png';

export const projets = [
  {
    id: 'magic-hanout',
    titre: 'Projet Magic Hanout',
    description: 'Site de vente en ligne, de produits fictifs magiques',
    descriptionLongue:
    `Magic Hanout est un site e-commerce fictif à thème dark fantaisiste développé avec Symfony. 
    Il repose sur 3 entités principales: 
      - Forgeron
      - Création
      - Catégorie
    reliées entre elles via Doctrine ORM, avec une gestion des utilisateurs distinguant les rôles visiteur et administrateur. 
    Chaque entité dispose d\'un CRUD complet côté administration (ajout, modification, suppression) ainsi que d\'une barre de recherche avec filtres sur la vue publique. 
    Les pages publiques présentent les forgerons et créations sous forme de cards cliquables menant à des fiches détaillées, avec des relations entre entités navigables directement depuis ces fiches. 
    La page d\'accueil affiche les 4 dernières créations ajoutées et intègre un mini-jeu (Dragon Nemesis). 
    Ce projet m\'a permis de mettre en pratique les fondamentaux de Symfony : 
    entités et relations Doctrine, repositories avec requêtes DQL personnalisées pour la recherche, formulaires, sécurité et gestion des rôles. `,
    technologies: 'Symfony',
    lien: 'https://github.com/btssiojvpromo2025-2026/ppe3-microsoft-support-indian-not-scam.git',
    images: [ magic1, magic2, magic3, magic4, magic5, magic6, magic7 ],
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
    descriptionLongue: `Projet de première année réalisé en classe pour apprendre les bases de Symfony et la gestion d'une base de données relationnelle.

Le site impose une authentification obligatoire pour accéder à n'importe quelle page, avec une gestion des rôles distinguant les utilisateurs classiques des administrateurs.

Entités gérées :
  - Artiste
  - Album
  - Style musical

Chaque entité dispose d'un CRUD complet côté administration ainsi que de pages de listing public. 
Ce projet m'a permis de découvrir les fondamentaux de Symfony : entités et relations Doctrine, formulaires, système de sécurité et gestion des rôles, routage et controllers.`,
    technologies: 'Symfony',
    lien: 'https://github.com/btssiojvpromo2025-2026/gestionmusique-XxxAS7xxX.git',
    images: [ musique1, musique2, musique3, musique4, musique5 ],
  },
  {
    id: 'projet-labjs',
    titre: 'Projet LabJS',
    description: 'Site brouillon pour tester des fonctionnalités en JavaScript avec plusieurs mini-projets',
    descriptionLongue: `Projet d'apprentissage regroupant plusieurs mini-applications développées en JavaScript vanilla, HTML et CSS. Chaque module explore un concept fondamental du développement web front-end :

- Chronomètre: Gestion du temps réel avec setInterval, manipulation du DOM et contrôle d'état (start / stop / reset)
- Pierre-Papier-Ciseaux: Logique de jeu, génération aléatoire, gestion d'événements et affichage dynamique d'images
- Jeu du saut: Animations CSS, détection de collision via getComputedStyle et interaction clavier/bouton
- Générateur de code-barres: Validation de formulaire et manipulation dynamique du contenu

Ce projet m'a permis de consolider les bases de JavaScript : manipulation du DOM, événements, conditions, boucles et interaction avec le CSS.`,
    technologies: 'Javascript, html, css',
    lien: 'https://github.com/XxxAS7xxX/siteLabJS.git',
    images: [ labjs1 ],
  },
  {
    id: 'projet-animaux',
    titre: 'Projet Animaux',
    description: "Prise en main de react et MUI à travers un site sur les animaux et leurs caractéristiques",
    technologies: 'React, Mui',
    lien: 'https://github.com/XxxAS7xxX/react-app.git',
    images: [ animaux1, animaux2 ],
  },
  {
    id: 'jeu-qix',
    titre: 'Jeu QIX',
    description: "Projet d'étude en python, recréation du jeu QIX avec une bibliothèque très limitée",
    descriptionLongue: `Auteur : [Axel Delpierre et Raphael Daviot]

Date de création : [08/11/2023]

Description du jeu :

QIX est un jeu classique d'arcade où le joueur contrôle un carré qui doit remplir 75%de l'aire de jeu en dessinant des formes et par la même occasion evité l'objet nommer QIX qui ce deplace aléatoirement sur l'aire de jeu.

Instructions :

Utilisez les touches fléchées pour déplacer le carré.
Dessinez des formes à l'intérieur de l'aire de jeu en appuyant sur la barre d'espace lorsque vous êtes prêt à relier les bords.
Évitez de toucher le QIX en mouvement et les bordures de l'aire de jeu.
Votre objectif est de remplir 75% de l'aire de jeu sans vous faire toucher par le QIX
Fonctionnalités du jeu :

Affichage du pourcentage de surface révélée.
Affichage du "Game over" quand la partie est perdu.
Système de vie.
Système de score basé sur la surface révélée.
Compteur de vies pour le joueur.
Déplacement aléatoire du QIX pour créer un défi supplémentaire.
Déplacement du joueur avec les fèches.
Déplacement des sparks sur les ligne externes.
dessin de polygone en fonction des lignes de déplacement du joueur
Installation :

Assurez-vous d'avoir Python installé sur votre système.
Installez la bibliothèque FLTK pour Python si ce n'est pas déjà fait.
Exécutez le fichier jeu_qix.py pour lancer le jeu.`,
    technologies: 'Python',
    lien: 'https://github.com/XxxAS7xxX/QIX.git',
    images: [ qix1, qix2 ],
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