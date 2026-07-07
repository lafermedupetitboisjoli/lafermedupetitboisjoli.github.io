# 📜 Page Notre histoire — `data/historique.js`

Variable : `historiqueData`. Affichée par `historique.html` + `js/historique.js`.

C'est la fiche la plus simple du site : aucune propriété optionnelle.

---

## `intro` (bloc unique)

| Propriété | Type | Obligatoire ? | Rôle |
|---|---|---|---|
| `titre` | texte | Non (non affiché actuellement) | Présent mais non utilisé par la page. |
| `sousTitre` | texte | Oui | Sous-titre affiché en haut de page. |
| `texte` | texte (long) | Oui | Paragraphe d'introduction. |

---

## `timeline` (liste de blocs — la frise chronologique)

Chaque élément : `{ annee, icone, titre, texte }`

| Propriété | Type | Obligatoire ? | Rôle |
|---|---|---|---|
| `annee` | texte court | Oui | Année affichée (texte libre, peut contenir une flèche comme `"2025 →"`). |
| `icone` | emoji | Oui | Icône du point de la frise. |
| `titre` | texte court | Oui | Titre de l'étape. |
| `texte` | texte (long) | Oui | Paragraphe racontant cette étape de l'histoire. |

### Pour ajouter une nouvelle étape (ex. l'année en cours)
Dupliquez le **dernier bloc** de la liste `timeline: [ ... ]` (généralement
celui avec la flèche `→`), placez votre nouveau bloc juste avant ou après, et
adaptez le contenu. L'ordre d'affichage suit l'ordre des blocs dans le
fichier (du premier au dernier), pensez donc à insérer chaque nouvelle
étape au bon endroit chronologique.

---

## `valeurs` (liste de blocs — les 4 cartes "nos valeurs")

Chaque élément : `{ icone, titre, texte }`

| Propriété | Type | Obligatoire ? | Rôle |
|---|---|---|---|
| `icone` | emoji | Oui | Icône de la carte valeur. |
| `titre` | texte court | Oui | Nom de la valeur (ex. `"Bienveillance"`). |
| `texte` | texte court/moyen | Oui | Explication courte de la valeur. |

### Pour ajouter une valeur
Dupliquez un bloc `{ ... }` dans `valeurs: [ ... ]`.

---

## Bonnes pratiques spécifiques à cette page
- Gardez les années de `timeline` dans l'ordre chronologique pour que la
  frise reste cohérente visuellement.
