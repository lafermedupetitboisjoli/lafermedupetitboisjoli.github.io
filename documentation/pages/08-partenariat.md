# 🤝 Page Partenariats — `data/partenariat.js`

Variable : `partenariatData`. Affichée par `partenariat.html` + `js/partenariat.js`.

---

## `hero` (bloc unique)

| Propriété | Type | Obligatoire ? | Rôle |
|---|---|---|---|
| `titre` | texte | Non (non affiché actuellement) | Présent mais non utilisé par la page. |
| `sousTitre` | texte | Oui | Sous-titre affiché en haut de page. |

---

## `intro`

⚠️ **Particularité de cette page** : contrairement à toutes les autres pages,
`intro` n'est **pas un bloc `{ }`** mais **directement un texte** entre
guillemets :

```js
intro: "Nos partenariats locaux sont essentiels pour faire vivre la ferme...",
```

| Propriété | Type | Obligatoire ? | Rôle |
|---|---|---|---|
| `intro` | texte (long), directement entre guillemets | Oui | Paragraphe d'introduction affiché sous le titre. |

Ne transformez pas cette ligne en bloc `{ texte: "..." }` : la page attend
un texte brut à cet endroit précis.

---

## `partenaires` (liste de blocs — un par partenaire)

Deux présentations possibles selon `isMajeur` :
- `isMajeur: true` → grand bloc avec une galerie de plusieurs photos
  (utilisé pour un partenaire important, ex. "Hyper U Aizenay").
- `isMajeur: false` (ou absent) → petite carte avec un logo et un lien.

### Propriétés communes

| Propriété | Type | Obligatoire ? | Rôle |
|---|---|---|---|
| `icone` | emoji | Non (optionnel) | Utilisé uniquement pour les partenaires majeurs ; si absent, un icône par défaut (🤝) est utilisé. |
| `isMajeur` | `true` / `false` | Non (optionnel, équivaut à `false` si absent) | Détermine la présentation. |
| `nom` | texte court | Oui | Nom du partenaire. |
| `texte` | texte (long) | Oui pour un partenaire majeur ; Oui aussi pour une petite carte | Description du partenariat. |

### Propriétés supplémentaires pour un **partenaire majeur** (`isMajeur: true`)

| Propriété | Type | Obligatoire ? | Rôle |
|---|---|---|---|
| `images` | liste `[ ]` de chemins de fichiers | Non (optionnel, mais recommandé) | Photos affichées en galerie. Chaque chemin doit être **complet**, en commençant par `assets/partenariat/...` (contrairement aux photos d'animaux, ici il faut écrire le chemin entier). |
| `lien` | texte (URL) ou `null` | Non (optionnel) | Présent dans les données mais non utilisé pour l'affichage des partenaires majeurs (pas de bouton affiché pour ce type de bloc). |
| `cta` | texte court ou `null` | Non (optionnel) | Idem, non affiché pour un partenaire majeur. |

### Propriétés supplémentaires pour une **petite carte** (`isMajeur` absent/`false`)

| Propriété | Type | Obligatoire ? | Rôle |
|---|---|---|---|
| `logo` | chemin de fichier complet | Oui | Image du logo affichée sur la carte. Chemin complet, ex. `"assets/partenariat/educanin.jpg"`. |
| `lien` | texte (URL) ou `null` | Non (optionnel) | Si renseigné (ex. `"https://..."`), affiche un bouton cliquable menant vers ce lien (ouvert dans un nouvel onglet). Si `null`, **aucun bouton n'est affiché**. |
| `cta` | texte court | Oui si `lien` est renseigné | Texte du bouton (ex. `"Voir la page Facebook"`). Inutile si `lien` est `null`. |

### Pour ajouter un partenaire
- **Partenaire important avec plusieurs photos** → dupliquez le bloc "Hyper
  U Aizenay" (`isMajeur: true`), déposez vos photos dans
  `assets/partenariat/` et listez leurs chemins complets dans `images: [ ]`.
- **Partenaire simple avec un logo** → dupliquez un bloc comme "Estelle
  Educani" (`isMajeur: false` ou absent), déposez le logo dans
  `assets/partenariat/` et renseignez `logo`, `texte`, et éventuellement
  `lien` + `cta`.

---

## Bonnes pratiques spécifiques à cette page
- Les chemins d'images de cette page (`images`, `logo`) doivent **toujours**
  commencer par `assets/partenariat/` — contrairement à `data/animaux.js`
  où l'on ne met que le nom du fichier. Ne mélangez pas les deux styles.
- Si vous ne voulez pas de bouton sur une petite carte, mettez bien
  `lien: null` (sans guillemets autour de `null`) plutôt que de supprimer la
  ligne.
