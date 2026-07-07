# 💚 Page Faire un don — `data/dons.js`

Variable : `donsData`. Affichée par `dons.html` + `js/dons.js`.

C'est le fichier de données le plus long du site : il est organisé en
plusieurs blocs indépendants (un par section de la page).

---

## `intro` (bloc unique — bannière du haut)

| Propriété | Type | Obligatoire ? | Rôle |
|---|---|---|---|
| `titre` | texte | Oui | Titre principal. |
| `sousTitre` | texte | Oui | Sous-titre. |
| `texte` | texte (long) | Oui | Paragraphe d'introduction. |

---

## `pourquoi` (bloc unique — "Pourquoi faire un don ?")

| Propriété | Type | Obligatoire ? | Rôle |
|---|---|---|---|
| `titre` | texte | Oui | Titre de la section. |
| `points` | liste `[ ]` de blocs `{ icone, titre, texte }` | Oui | Une carte par raison de donner. |

Pour ajouter une raison : dupliquez un bloc `{ icone, titre, texte }` dans
`pourquoi.points: [ ... ]`.

---

## `montants` (liste de blocs — exemples "10€ = ...", "25€ = ...")

Chaque élément : `{ montant, icone, impact }`

| Propriété | Type | Obligatoire ? | Rôle |
|---|---|---|---|
| `montant` | texte court | Oui | Montant affiché (ex. `"10 €"`). Toujours du texte, même si c'est un nombre. |
| `icone` | emoji | Oui | Icône de la carte. |
| `impact` | texte court/moyen | Oui | Ce que permet de financer ce montant. |

---

## `methodes` (liste de blocs — moyens de faire un don)

Chaque élément : `{ icone, titre, description, cta, href, couleur, principal }`

| Propriété | Type | Obligatoire ? | Rôle / règle d'usage |
|---|---|---|---|
| `icone` | emoji | Oui | Icône de la méthode. |
| `titre` | texte court | Oui | Nom de la méthode (ex. `"En ligne"`, `"Chèque"`). |
| `description` | texte (long) | Oui | Explication de la méthode. |
| `cta` | texte court ou `null` | Non (optionnel) | Texte du bouton d'action. Si `null` (ex. pour "Chèque"), **aucun bouton n'est affiché**. |
| `href` | texte (URL/ancre/email) | Oui si `cta` n'est pas `null` | Destination du bouton. Peut être une ancre (`"#helloasso"`), un email (`"mailto:...?subject=..."`), etc. Ignoré si `principal: true` (voir ci-dessous). |
| `couleur` | code couleur hexadécimal | Oui | Couleur de fond de l'icône (ex. `"#00B0A0"`). |
| `principal` | `true` / `false` | Non (optionnel) | Si `true` : la carte est mise en avant avec un badge "⭐ Recommandé", et le bouton **ouvre une fenêtre HelloAsso** au lieu de suivre `href`. Une seule méthode devrait avoir `principal: true`. |

⚠️ Si `principal: true`, la propriété `href` n'est **pas utilisée** pour ce
bloc (le bouton ouvre toujours la fenêtre HelloAsso). Ne modifiez `href`
que pour les méthodes non principales.

---

## `fiscalite` (bloc unique — encart avantage fiscal)

| Propriété | Type | Obligatoire ? | Rôle |
|---|---|---|---|
| `titre` | texte | Oui | Titre de l'encart. |
| `texte` | texte (long) | Oui | Explication de la réduction d'impôt. |
| `exemple` | texte court | Oui | Exemple chiffré (ex. `"Exemple : un don de 50 € ne vous coûte réellement que 17 €."`). |

---

## `adhesion` (bloc unique — devenir adhérent)

| Propriété | Type | Obligatoire ? | Rôle |
|---|---|---|---|
| `titre` | texte | Oui | Titre de la section. |
| `texte` | texte (long) | Oui | Paragraphe explicatif. |
| `tarifs` | liste `[ ]` de blocs `{ label, prix }` | Oui | Une ligne par type d'adhésion. |

Pour ajouter un tarif d'adhésion : dupliquez un bloc `{ label, prix }` dans
`adhesion.tarifs: [ ... ]`.

---

## `besoins` (bloc unique — "Ce dont nous avons besoin" en nature)

| Propriété | Type | Obligatoire ? | Rôle |
|---|---|---|---|
| `titre` | texte | Oui | Titre de la section. |
| `sousTitre` | texte | Oui | Sous-titre. |
| `categories` | liste `[ ]` de blocs `{ icone, titre, items }` | Oui | Une carte par catégorie de besoin. |

### Détail d'une catégorie
| Propriété | Type | Obligatoire ? | Rôle |
|---|---|---|---|
| `icone` | emoji | Oui | Icône de la catégorie. |
| `titre` | texte court | Oui | Nom de la catégorie (ex. `"Pour les animaux"`). |
| `items` | liste `[ ]` de textes courts | Oui | Liste des objets recherchés dans cette catégorie. |

Pour ajouter un objet recherché : ajoutez simplement un texte entre
guillemets dans la liste `items: [ ... ]` correspondante, ex.
`items: ["Gamelles", "Seaux", "Nouvelle brouette"]`.

---

## `parrainage` (bloc unique — section "Merci à nos parrains")

| Propriété | Type | Obligatoire ? | Rôle |
|---|---|---|---|
| `titre` | texte | Oui | Titre de la section. |
| `intro` | texte (long) | Oui | Paragraphe d'introduction. |
| `parraines` | liste `[ ]` de blocs `{ icone, nom, parrain }` | Oui | Une carte par binôme animal/parrain. |
| `merci` | texte | Oui | Phrase de remerciement. |
| `attente` | texte | Oui | Phrase d'introduction de la liste des animaux en attente. |
| `animaux_attente` | liste `[ ]` de textes courts | Oui | Liste des animaux qui cherchent un parrain (ex. `"🐰 des lapins"`). |
| `conclusion` | texte (long) | Oui | Paragraphe de conclusion. |
| `cta` | texte | Oui | Phrase d'appel à l'action finale. |

### Détail de `parraines`
| Propriété | Type | Rôle |
|---|---|---|
| `icone` | emoji | Icône de l'animal parrainé. |
| `nom` | texte court | Nom de l'animal. |
| `parrain` | texte court | Prénom du parrain/marraine. |

Pour ajouter un parrainage : dupliquez un bloc `{ icone, nom, parrain }`
dans `parrainage.parraines: [ ... ]`. Pour ajouter un animal en attente de
parrain, ajoutez un texte dans `parrainage.animaux_attente: [ ... ]`.

⚠️ Notez le nom exact de la propriété : **`animaux_attente`** (avec un
`_` souligné), à ne pas confondre avec les autres propriétés qui utilisent
plutôt la casse "chameau" (ex. `sousTitre`). Respectez l'orthographe exacte.

---

## `merci` (bloc unique — encart de remerciement final)

| Propriété | Type | Obligatoire ? | Rôle |
|---|---|---|---|
| `titre` | texte | Oui | Titre de l'encart. |
| `texte` | texte (long) | Oui | Message de remerciement. |

---

## Bonnes pratiques spécifiques à cette page
- Une seule méthode de don doit avoir `principal: true` à la fois (sinon
  plusieurs boutons ouvriront la fenêtre HelloAsso au lieu de leur propre
  lien).
- Ce fichier étant long, pensez à utiliser la recherche de votre éditeur de
  texte (`Ctrl+F`) pour retrouver rapidement le bloc à modifier plutôt que
  de faire défiler tout le fichier.
