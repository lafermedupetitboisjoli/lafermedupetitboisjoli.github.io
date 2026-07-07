# 👥 Page Nos bénévoles — `data/benevoles.js`

Variable : `benevolesData`. Affichée par `benevoles.html` + `js/benevoles.js`.

---

## `intro` (bloc unique)

| Propriété | Type | Obligatoire ? | Rôle |
|---|---|---|---|
| `titre` | texte | Non (non affiché actuellement) | Présent mais non utilisé par la page. |
| `sousTitre` | texte | Oui | Sous-titre affiché en haut de page. |
| `texte` | texte (long) | Oui | Paragraphe d'introduction. |

---

## `benevoles` (liste de fiches — une par bénévole)

Il existe **deux présentations** selon la propriété `isResponsable` :
- `isResponsable: true` → grande carte détaillée (dans la section du haut).
- `isResponsable: false` → petit avatar avec juste le prénom (section "et
  aussi", en bas).

| Propriété | Type | Obligatoire ? | Rôle / règle d'usage |
|---|---|---|---|
| `icone` | emoji | Oui | Utilisé comme avatar **si aucune `photo` n'est renseignée**. |
| `photo` | chemin de fichier | Non (optionnel) | Nom du fichier photo, situé dans `assets/photos/` (ex. `"benevoles/brieuc.png"` → cherche le fichier dans `assets/photos/benevoles/brieuc.png`). Si présent, remplace l'`icone` par une vraie photo ronde. |
| `prenom` | texte court | Oui | Prénom affiché. |
| `role` | texte court | Non (optionnel, grandes cartes uniquement) | Fonction/rôle affiché sous le prénom (ex. `"Présidente de l'association"`). Si absent, aucune ligne de rôle ne s'affiche. |
| `description` | texte (long) | Non (optionnel, grandes cartes uniquement) | Paragraphe de présentation. Si absent, aucun paragraphe ne s'affiche. |
| `competences` | liste `[ ]` de textes courts | Non (optionnel, grandes cartes uniquement) | Étiquettes de compétences affichées en bas de carte. Si absente ou vide, aucune étiquette ne s'affiche. |
| `isResponsable` | `true` / `false` | Oui | Détermine la présentation (voir ci-dessus). |
| `rejoindre` | `true` / `false` | Non (optionnel) | Si `true` **et** `isResponsable: true`, ajoute un bouton "🌻 Rejoindre l'équipe" sur la carte (utilisé pour une carte "invitation à nous rejoindre" plutôt qu'un vrai bénévole). |

### Pour ajouter un bénévole avec une grande carte
Dupliquez un bloc avec `isResponsable: true` (ex. celui de "Claire"), et
renseignez au minimum `icone`/`photo`, `prenom`, `isResponsable: true`. Les
autres propriétés (`role`, `description`, `competences`) sont facultatives.

### Pour ajouter un bénévole en petit avatar simple
Dupliquez un bloc simple comme celui de "Marie" ou "Pierre" :
```js
{
  icone: "👩‍🏫",
  prenom: "Marie",
  isResponsable: false,
},
```

⚠️ **Point de vigilance repéré dans le fichier actuel** : le dernier bloc de
la liste (`"Nathalie"`) se termine par une ligne `// },` au lieu de `},` —
autrement dit, **un grand bloc de code est actuellement mis en commentaire**
(les lignes commençant par `//` à la fin du fichier, correspondant à une
carte "Et vous ? Futur·e bénévole"). Ces lignes commentées n'ont aucun effet
actuellement (elles ne s'affichent pas). Si vous voulez un jour réactiver
cette carte d'invitation, il faudra "décommenter" ces lignes avec précaution
(enlever les `//` et vérifier les accolades) — recommandé de le faire
accompagné si vous n'êtes pas à l'aise.

---

## `rejoindre` (bloc unique — encart "Rejoindre l'équipe" en bas de page)

| Propriété | Type | Obligatoire ? | Rôle |
|---|---|---|---|
| `titre` | texte | Oui | Titre de l'encart. |
| `texte` | texte (long) | Oui | Paragraphe d'invitation. |
| `bouton.label` | texte court | Oui | Texte du bouton. |
| `bouton.link` | texte (chemin) | Oui | Page vers laquelle mène le bouton (ex. `"rejoindre.html"`). |

---

## Bonnes pratiques spécifiques à cette page
- Pour les photos, respectez bien le sous-dossier : ici le code ajoute
  automatiquement `assets/photos/` devant la valeur de `photo`. N'écrivez
  donc jamais `assets/photos/...` vous-même dans cette propriété, juste le
  chemin relatif à l'intérieur (ex. `"benevoles/brieuc.png"`).
