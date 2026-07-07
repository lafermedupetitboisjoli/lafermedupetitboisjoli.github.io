# 🐾 Page Nos animaux — `data/animaux.js`

Variable : `animauxData`. Affichée par `animaux.html` + `js/animaux.js`.

---

## `intro` (bloc unique)

| Propriété | Type | Obligatoire ? | Rôle |
|---|---|---|---|
| `titre` | texte | Non (actuellement non affiché) | Présent dans le fichier mais **non utilisé** par la page (le titre affiché vient du HTML). Vous pouvez le laisser tel quel. |
| `sousTitre` | texte | Oui | Sous-titre affiché sous le titre de la page. |
| `texte` | texte (long) | Oui | Paragraphe d'introduction de la page. |

---

## `animaux` (liste de fiches — une par animal ou groupe d'animaux)

Chaque élément est un bloc de ce type :

```js
{
  icone: "🐴",
  photos: ["Wimpie _1.jpg"],
  nom: "Wimpie",
  espece: "Poney Shetland",
  caractere: "Doux & joueur",
  description: "...",
  alimentation: "Herbe, foin, pommes",
  particularite: "Il sait faire la révérence !",
  tag: "Équidé",
  nouveaute: true,
  pension: true,
},
```

| Propriété | Type | Obligatoire ? | Rôle / règle d'usage |
|---|---|---|---|
| `icone` | emoji | Oui | Utilisé comme visuel si l'animal n'a **aucune photo** (`photos: []`). |
| `photos` | liste `[ ]` de noms de fichiers texte | Oui (peut être vide `[]`) | Noms des fichiers image à afficher en carrousel sur la fiche. **Les fichiers doivent déjà exister dans le dossier `assets/photos/`** (ne mettez pas le chemin complet, juste le nom du fichier, ex. `"Wimpie _1.jpg"`). Vous pouvez en mettre plusieurs : `["Wimpie _1.jpg", "Wimpie _2.jpg"]`. Si la liste est vide, l'`icone` est affichée à la place. |
| `nom` | texte court | Oui | Nom de l'animal (titre de la fiche). |
| `espece` | texte court | Oui | Espèce/race, aussi utilisée pour les **filtres par espèce** en haut de la page (les boutons "🐴 Poney Shetland", etc. sont générés automatiquement à partir de cette valeur). |
| `caractere` | texte court | Oui | Affiché avec un cœur jaune 💛 sur la fiche. |
| `description` | texte (long) | Oui | Paragraphe de présentation de l'animal. |
| `alimentation` | texte court | Oui | Ligne "🌿 Alimentation". |
| `particularite` | texte court | Oui | Ligne "⭐ Le saviez-vous ?". |
| `tag` | texte court | Oui | Petite étiquette en haut de la carte (ex. `"Équidé"`, `"Caprin"`). |
| `nouveaute` | `true` / `false` (sans guillemets) | Non (optionnel) | Si `true`, affiche le badge **"✨ Nouveau"**. Omettez la ligne ou mettez `false` pour ne pas l'afficher. |
| `pension` | `true` / `false` (sans guillemets) | Non (optionnel) | Si `true`, affiche le badge **"🤗 Pension"**. Mêmes règles que `nouveaute`. |

### Pour ajouter un animal
1. Dupliquez un bloc `{ ... }` complet dans la liste `animaux: [ ... ]`.
2. Modifiez chaque propriété (nom, espèce, description...).
3. Si vous avez des photos : déposez-les dans `assets/photos/` puis inscrivez
   leurs noms exacts (avec l'extension `.jpg`/`.png`...) dans `photos: [ ]`.
4. N'oubliez pas la virgule `,` après le bloc précédent dans la liste.

### Pour retirer un animal
Supprimez tout le bloc, de sa `{` à sa `}` (accolade comprise), ainsi que la
virgule qui le sépare des autres blocs.

---

## `actions` (liste de blocs — sections "Parrainage" et "Médiation animale" en bas de page)

Chaque élément : `{ titre, icone, texte, boutton: { label, lien } }`

| Propriété | Type | Obligatoire ? | Rôle |
|---|---|---|---|
| `titre` | texte court | Oui | Titre de la section. |
| `icone` | emoji | Oui | Icône affichée. |
| `texte` | texte (long) | Oui | Paragraphe descriptif. |
| `boutton.label` | texte court | Oui | Texte du bouton. |
| `boutton.lien` | texte (chemin) | Oui | Page/ancre vers laquelle mène le bouton (ex. `"dons.html#parrainage"`). |

⚠️ Notez l'orthographe **`boutton`** (avec deux "t") : c'est le nom exact
utilisé dans le fichier, ne le corrigez pas en "bouton" sinon le bouton ne
s'affichera plus.

---

## Bonnes pratiques spécifiques à cette page
- Le nom du fichier photo doit être **identique, espaces et majuscules
  comprises**, à celui présent dans `assets/photos/` (ex. `"Wimpie _1.jpg"`
  contient volontairement une espace avant le `1`).
- Si vous ajoutez une nouvelle espèce (ex. "Cochon"), un nouveau bouton de
  filtre apparaîtra automatiquement en haut de page — vous n'avez rien
  d'autre à faire.
