# vue_assurance

Application de gestion de contrats d'assurance construite avec Vue 3.

## Stack
 
- **Vue 3** — Composition API avec `<script setup>`
- **Vue Router** — navigation entre les pages
- **Vite** — bundler

## Structure du projet

```
src/
├── assets/
│   └── contractCard.css  # styles des cartes de contrats de la vue globale
│   └── detailVue.css     # styles de la vue détaillé d'un contrat
│   └── detailVue.css     # styles de la page d'accueil
│   └── main.css          # styles globaux et fond
├── components/
│   ├── ContractCard.vue  # carte d'un contrat
│   └── FilterBar.vue     # Filtre
├── .env                  # Variables d'environnement
├── router/
│   └── index.js          # configuration des routes
├── views/
│   ├── HomeView.vue      # liste des contrats avec filtre
│   ├── DetailView.vue    # détail d'un contrat
└── main.js
```

## Routes
 
| Chemin | Vue | Description |
|--------|-----|-------------|
| `/` | `HomeView` | Liste de tous les contrats |
| `/detail/:contractnumber` | `DetailView` | Détail d'un contrat |


## Fonctionnalités
 
- Affichage des contrats depuis une api Springboot
- Filtrage par statut (Tous / Actif / Résilié)
- Navigation vers le détail d'un contrat au clic
- Badge de statut coloré (vert = actif, rouge = résilié)

## Concepts Vue utilisés
 
- `defineProps` / `defineEmits` — communication entre composants
- `ref` / `computed` — réactivité
- `v-for` / `v-if` — rendu conditionnel et listes
- `useRouter` / `useRoute` — navigation programmatique
- `:class` — classes dynamiques