# 🎯 Page Nos activités — `data/activites.js`

Variable : `activitesData`. Affichée par `activites.html` + `js/activites.js`.

---

## `intro` (bloc unique)

| Propriété | Type | Obligatoire ? | Rôle |
|---|---|---|---|
| `titre` | texte | Non (non affiché actuellement) | Non utilisé par la page ; laissez-le tel quel. |
| `sousTitre` | texte | Oui | Sous-titre affiché en haut de page. |
| `texte` | texte (long) | Oui | Paragraphe d'introduction. |

---

## `activites` (liste de blocs — une par activité proposée)

Il existe **deux présentations différentes** selon la propriété `isMajeur` :
- **Carte standard** (`isMajeur` absent ou `false`) : affichée sous forme de
  petite carte dans la grille d'activités.
- **Section pleine largeur** (`isMajeur: true`) : affichée comme un grand
  bloc mis en avant (utilisé pour "Groupes scolaires" et "Club nature").

### Propriétés communes aux deux présentations

| Propriété | Type | Obligatoire ? | Rôle / règle d'usage |
|---|---|---|---|
| `icone` | emoji | Oui | Icône de l'activité. |
| `titre` | texte court | Oui | Titre de l'activité. |
| `description` | texte (long) | Oui | Paragraphe de présentation. |
| `details` | liste `[ ]` de textes courts | Oui | Liste à puces affichée sous la description (durée, public, conditions...). Chaque élément est un texte entre guillemets, ex. `"Durée : 45 à 60 minutes"`. |
| `isMajeur` | `true` / `false` | Non (optionnel) | Détermine la présentation (voir ci-dessus). Absent = équivaut à `false`. |

### Propriétés supplémentaires pour une **carte standard** (`isMajeur` absent/`false`)

| Propriété | Type | Obligatoire ? | Rôle |
|---|---|---|---|
| `categorie` | texte court | Oui | Étiquette de catégorie affichée (ex. `"Découverte"`). |
| `categorieColor` | texte court | Non (optionnel) | Couleur de l'étiquette. Valeurs reconnues : `"green"`, `"orange"`, `"pink"`, `"brown"`. Toute autre valeur = couleur par défaut. |
| `couleur` | code couleur (ex. `"#3A6B35"`) | Oui | Couleur de la bordure gauche de la carte. Doit être un code hexadécimal commençant par `#`. |

### Propriétés supplémentaires pour une **section majeure** (`isMajeur: true`)

| Propriété | Type | Obligatoire ? | Rôle |
|---|---|---|---|
| `contact` | texte | Oui | Phrase affichée en bas de section (ex. `"Pour réserver votre sortie, contactez-nous."`). ⚠️ Le bouton "✉️ Réserver une sortie" utilise `mailto:${a.contact}` : si `contact` n'est pas une adresse email valide, le bouton ne fonctionnera pas correctement (aujourd'hui le texte est une phrase, pas un email — voir remarque ci-dessous). |
| `image` | chemin de fichier | Non | Présent dans les données (ex. section "Club nature") **mais actuellement non affiché par la page** : cette propriété est prête pour un usage futur, elle n'a aujourd'hui aucun effet visible. |

⚠️ **Remarque technique repérée** : pour les sections majeures, le bouton de
contact est construit avec `mailto:` + le texte de `contact`. Aujourd'hui
`contact` contient une phrase ("Pour réserver votre sortie, contactez-nous.")
et non une adresse email, donc le bouton n'ouvrira pas correctement un
email. Si vous voulez que ce bouton fonctionne, il faudrait soit remplacer
le texte par une vraie adresse email, soit demander une correction du code
(je n'ai pas modifié le code, seulement documenté ce constat).

### Pour ajouter une activité
Dupliquez un bloc `{ ... }` existant du bon type (carte standard ou section
majeure) dans la liste `activites: [ ... ]`, puis modifiez son contenu.

---

## `tarifs` (bloc unique — tableau des tarifs en bas de page)

| Propriété | Type | Obligatoire ? | Rôle |
|---|---|---|---|
| `titre` | texte | Oui | Titre de la section tarifs. |
| `items` | liste `[ ]` de blocs `{ label, prix }` | Oui | Une ligne de tableau par élément. `label` = nom de la prestation, `prix` = tarif affiché (texte libre, ex. `"Sur devis"`, `"à partir de 10€/an"`). |

### Pour ajouter une ligne de tarif
Dupliquez un bloc `{ label: "...", prix: "..." }` dans `tarifs.items: [ ... ]`.

---

## Bonnes pratiques spécifiques à cette page
- Respectez bien le mot-clé `isMajeur` (avec cette orthographe exacte et
  cette casse) si vous dupliquez une section majeure.
- Le fichier contient aussi, en commentaire (précédé de `//`), un ancien
  bloc de code non utilisé (`groupesScolaires`, `clubNature`). Ces lignes
  commentées n'ont aucun effet sur le site — vous pouvez les ignorer sans
  risque, mais mieux vaut ne pas les décommenter sans vérification.
