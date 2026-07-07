# 🌻 Page Nous rejoindre — `data/rejoindre.js`

Variable : `rejoindreData`. Affichée par `rejoindre.html` + `js/rejoindre.js`.

---

## `intro` (bloc unique)

| Propriété | Type | Obligatoire ? | Rôle |
|---|---|---|---|
| `titre` | texte | Oui | Titre principal de la page. |
| `sousTitre` | texte | Oui | Sous-titre. |
| `texte` | texte (long) | Oui | Paragraphe d'introduction. |

---

## `pourquoi` (bloc unique — "Pourquoi nous rejoindre ?")

| Propriété | Type | Obligatoire ? | Rôle |
|---|---|---|---|
| `titre` | texte | Oui | Titre de la section. |
| `raisons` | liste `[ ]` de blocs `{ icone, titre, texte }` | Oui | Une carte par raison. |

Pour ajouter une raison, dupliquez un bloc `{ icone, titre, texte }` dans
`pourquoi.raisons: [ ... ]`.

---

## `missions` (liste de blocs — les types de missions bénévoles)

Chaque élément : `{ icone, titre, description, competences, disponibilite }`

| Propriété | Type | Obligatoire ? | Rôle |
|---|---|---|---|
| `icone` | emoji | Oui | Icône de la mission. |
| `titre` | texte court | Oui | Nom de la mission. Sert aussi de **valeur de la case à cocher** dans le formulaire de candidature en bas de page. |
| `description` | texte (long) | Oui | Description de la mission. |
| `competences` | liste `[ ]` de textes courts | Oui | Étiquettes de compétences recherchées. |
| `disponibilite` | texte court | Oui | Disponibilité demandée (ex. `"Week-ends & événements"`). |

### Pour ajouter une mission
Dupliquez un bloc `{ ... }` dans `missions: [ ... ]`. Une nouvelle case à
cocher apparaîtra automatiquement dans le formulaire de candidature, sans
autre action nécessaire.

---

## `temoignages` (liste de blocs — citations de bénévoles)

Chaque élément : `{ icone, prenom, role, citation }`

| Propriété | Type | Obligatoire ? | Rôle |
|---|---|---|---|
| `icone` | emoji | Oui | Avatar du témoignage. |
| `prenom` | texte court | Oui | Prénom affiché. |
| `role` | texte court | Oui | Rôle/fonction affichée sous le prénom. |
| `citation` | texte (long) | Oui | Texte de la citation. |

---

## `faq` (liste de blocs — questions fréquentes)

Chaque élément : `{ question, reponse }`

| Propriété | Type | Obligatoire ? | Rôle |
|---|---|---|---|
| `question` | texte | Oui | Question affichée (cliquable pour dérouler la réponse). |
| `reponse` | texte (long) | Oui | Réponse affichée quand on clique sur la question. |

### Pour ajouter une question
Dupliquez un bloc `{ question: "...", reponse: "..." }` dans `faq: [ ... ]`.

---

## `formulaire` (bloc unique — configuration du formulaire de candidature)

| Propriété | Type | Obligatoire ? | Rôle |
|---|---|---|---|
| `titre` | texte | Oui | Titre du formulaire. |
| `sousTitre` | texte | Oui | Sous-titre du formulaire. |
| `email` | adresse email | Oui | **Adresse qui recevra les candidatures.** Le formulaire ouvre le logiciel de messagerie du visiteur avec un message pré-rempli adressé à cet email. Doit impérativement être une adresse email valide (avec un `@`). |

⚠️ Le formulaire ne "envoie" pas directement l'email depuis le site : il
ouvre la messagerie du visiteur (Outlook, Gmail...) avec un message déjà
rédigé, que la personne doit ensuite envoyer elle-même. C'est pourquoi
`formulaire.email` doit être une adresse surveillée régulièrement.

---

## Bonnes pratiques spécifiques à cette page
- Les intitulés de `missions[].titre` apparaissent tels quels dans les
  emails de candidature reçus : gardez-les clairs et courts.
