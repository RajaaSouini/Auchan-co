# Auchan-co
Création d'un site web moderne et réactif pour le Centre Commercial AUCHAN, optimisant l'expérience d'achat en ligne avec une interface fluide. Le site proposera des filtres intuitifs, une gestion facile du panier, et la possibilité de personnaliser les achats .


## Structure du projet 
auchan/

├── index.html # Structure principale de la page

├── data/

│ └── data.json # Votre base de données locale (catalogue initial)

├── css/

│ └── style.css # Votre fichier de style (configuration Tailwind)

└── js/

├── main.js # Point d'entrée principal (initialisation et imports)

├── api.js # Logique de récupération des données (Fetch)

├── products.js # Logique métier : affichage, pagination, filtres et recherche

├── cart.js # Logique du panier : ajout, calcul des totaux, vérification des doublons

├── dragDrop.js # Gestion exclusive des événements de Glisser-Déposer

├── storage.js # Interactions avec le LocalStorage (JSON.stringify / parse)

├── ui.js # Manipulation du DOM (Vue Grille/Liste, mise à jour visuelle)

└── validation.js # Fonctions de vérification Regex pour le formulaire

## Contexte du projet 

***Le Centre Commercial AUCHAN souhaite déployer sa nouvelle plateforme e-commerce. L'équipe UX/UI a validé les maquettes, le projet entre donc dans sa phase de réalisation.***

***Votre mission est de développer une application web dynamique, modulaire et structurée côté client. Vous devrez intégrer l'interface client et un tableau de bord administrateur avec Tailwind CSS, exploiter toute la puissance de JavaScript ES6+ (Modules, Arrow functions), gérer des flux de données complexes (Fetch, Sérialisation, CRUD) et implémenter des interactions avancées (Drag & Drop)***
