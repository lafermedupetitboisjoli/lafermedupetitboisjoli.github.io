# 📰 Page Actualités — `data/actualite.js`

Variable : `actualiteData`. Affichée par `actualite.html` + `js/actualite.js`.

---

## `intro` (bloc unique)

| Propriété | Type | Obligatoire ? | Rôle |
|---|---|---|---|
| `titre` | texte | Non (non affiché actuellement) | Présent mais non utilisé par la page. |
| `sousTitre` | texte | Oui | Sous-titre affiché en haut de page. |

---

## `evenementALaUne` (liste de blocs — les événements mis en avant en haut de page)

Chaque élément est un événement complet :

| Propriété | Type | Obligatoire ? | Rôle / règle d'usage |
|---|---|---|---|
| `titre` | texte | Oui | Titre de l'événement. |
| `date` | texte court | Oui | Date affichée (texte libre, ex. `"27 et 28 juin 2026"`). |
| `heures` | texte court | Oui | Horaires affichés (texte libre). |
| `lieu` | texte court | Oui | Lieu affiché. |
| `entree` | texte court | Oui | Prix/condition d'entrée (ex. `"Entrée gratuite"`, `"10€ par personne"`). |
| `description` | texte (long) | Oui | Paragraphe de présentation de l'événement. |
| `highlights` | liste `[ ]` de blocs `{ icone, titre, texte }` | Oui | Petites cartes mises en avant sous la description (3-4 points forts). `texte` peut être une chaîne vide `""` si non utilisé. |
| `contact` | bloc `{ lien, texte }` | Oui | Bouton d'action de l'événement. `lien` = adresse du lien (email `mailto:...`, lien `tel:...`, ou URL `https://...`), `texte` = texte du bouton. |
| `programme` | bloc `{ samedi: [...], dimanche: [...] }` | Non (optionnel) | **Uniquement si l'événement dure 2 jours** avec un planning détaillé. Si présent, un tableau "Programme détaillé" s'affiche automatiquement. Si absent, la section n'apparaît simplement pas — ne mettez donc cette propriété que pour les événements avec un vrai planning. |

### Détail de `programme.samedi` / `programme.dimanche`
Liste `[ ]` de blocs `{ heure, activite, icone }` :

| Propriété | Type | Obligatoire ? | Rôle |
|---|---|---|---|
| `heure` | texte court | Oui | Heure affichée (ex. `"14h30"`). |
| `activite` | texte court | Oui | Nom de l'activité prévue à cette heure. |
| `icone` | emoji | Oui | Icône affichée devant la ligne. |

### Pour ajouter un événement à la une
Dupliquez un bloc `{ ... }` complet dans `evenementALaUne: [ ... ]`. Si
l'événement n'a pas de planning détaillé, **supprimez entièrement** la
propriété `programme` du bloc copié (ne laissez pas un `programme: {}` vide).

---

## `articles` (liste de blocs — les actualités classiques en bas de page)

Chaque élément : `{ date, titre, texte, icone, tag }`

| Propriété | Type | Obligatoire ? | Rôle |
|---|---|---|---|
| `date` | texte court | Oui | Date/période affichée (ex. `"Juin 2026"`). |
| `titre` | texte court | Oui | Titre de l'article. |
| `texte` | texte (long) | Oui | Contenu de l'article. |
| `icone` | emoji | Oui | Icône de la carte. |
| `tag` | texte court | Oui | Étiquette affichée en bas de carte (ex. `"Nouveauté"`, `"Partenariat"`). |

### Pour ajouter un article
Dupliquez un bloc `{ ... }` dans `articles: [ ... ]` (le plus simple : copiez
le premier bloc de la liste, qui est le plus complet).

---

## Bonnes pratiques spécifiques à cette page
- Les événements passés ne sont **pas retirés automatiquement** : pensez à
  supprimer manuellement (ou déplacer vers `articles`) les événements de
  `evenementALaUne` une fois qu'ils sont terminés, sinon ils resteront
  affichés en haut de page indéfiniment.
- N'ajoutez `programme` que si vous avez un vrai planning heure par heure à
  afficher : sinon laissez cette propriété totalement absente du bloc.
