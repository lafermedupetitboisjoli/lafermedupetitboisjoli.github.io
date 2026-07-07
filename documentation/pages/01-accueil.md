# 🏡 Page Accueil — `data/accueil.js`

Variable : `accueilData`. Affichée par `index.html` + `js/accueil.js`.

---

## `hero` (bloc unique — la grande bannière du haut)

| Propriété | Type | Obligatoire ? | Rôle / règle d'usage |
|---|---|---|---|
| `titre` | texte | Oui | Grand titre affiché en haut de la page. |
| `sousTitre` | texte | Oui | Phrase juste sous le titre. |
| `description` | texte | Oui | Paragraphe d'introduction sous le sous-titre. |
| `badges` | liste `[ ]` de blocs `{ icon, label }` | Oui (peut être une liste vide `[]`) | Petites pastilles affichées (ex. "🌿 Ferme pédagogique"). Chaque élément doit avoir `icon` (un emoji) et `label` (texte court). Pour ajouter un badge, dupliquez un bloc `{ icon: "...", label: "..." }`. |
| `btnPrimary` | bloc `{ label, href }` | Oui | Bouton principal (vert). `label` = texte du bouton, `href` = fichier vers lequel il pointe (ex. `"animaux.html"`). |
| `btnSecondary` | bloc `{ label, href }` | Oui | Deuxième bouton (à côté du premier). Mêmes règles que `btnPrimary`. |

⚠️ `href` doit être le **nom exact d'une page existante** du site
(ex. `activites.html`), sinon le bouton mènera vers une page introuvable.

---

## `mission` (bloc unique)

| Propriété | Type | Obligatoire ? | Rôle |
|---|---|---|---|
| `titre` | texte | Oui | Titre de la section "Notre mission". |
| `icone` | emoji | Oui | Icône affichée à côté du titre. |
| `texte` | texte (long) | Oui | Paragraphe de présentation de l'association. |

---

## `chiffres` (liste de blocs — les chiffres-clés en gros caractères)

Chaque élément : `{ icone, valeur, label }`

| Propriété | Type | Obligatoire ? | Rôle |
|---|---|---|---|
| `icone` | emoji | Oui | Icône au-dessus du chiffre. |
| `valeur` | texte court | Oui | Le chiffre affiché en grand (ex. `"60+"`, `"100%"`). Toujours entre guillemets même si c'est un nombre. |
| `label` | texte court | Oui | Légende sous le chiffre (ex. `"Animaux accueillis"`). |

Pour ajouter/retirer un chiffre-clé : dupliquez ou supprimez un bloc complet
dans la liste `chiffres: [ ... ]`.

---

## `cartes` (liste de blocs — les 3 grandes cartes de présentation)

Chaque élément : `{ icone, titre, texte, tag, tagCouleur }`

| Propriété | Type | Obligatoire ? | Rôle / règle d'usage |
|---|---|---|---|
| `icone` | emoji | Oui | Icône de la carte. |
| `titre` | texte court | Oui | Titre de la carte. |
| `texte` | texte (long) | Oui | Paragraphe descriptif. |
| `tag` | texte court | Oui | Petite étiquette affichée en bas de carte (ex. `"Découverte"`). |
| `tagCouleur` | texte court | **Non (optionnel)** | Couleur de l'étiquette. Valeurs reconnues : `"orange"`, `"pink"`. Si absent, l'étiquette prend la couleur verte par défaut. Toute autre valeur sera ignorée (couleur par défaut appliquée). |

---

## Bloc "Nous trouver" (adresse en bas de page)

Ce bloc n'est **pas** dans `data/accueil.js` : il vient automatiquement du
fichier partagé `data/contact.js` (voir la fiche
[`10-contact.md`](10-contact.md)). Vous n'avez rien à modifier ici pour
changer l'adresse ou les réseaux sociaux — tout se fait dans `contact.js`.

---

## Bonnes pratiques spécifiques à cette page
- Gardez toujours **au moins un badge** dans `hero.badges` et **au moins une
  carte** dans `cartes` : une liste vide `[]` est autorisée techniquement,
  mais la section paraîtra vide sur la page.
- Ne renommez jamais `hero`, `mission`, `chiffres`, `cartes` : ce sont les
  noms que `js/accueil.js` utilise pour aller chercher les informations.
