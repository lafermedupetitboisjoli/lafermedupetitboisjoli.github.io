# 🧭 Comment lire ces fiches par page

Chaque fichier de ce dossier documente **un fichier de données** du dossier
`data/` (donc une page du site). Pour chaque propriété, vous trouverez :

- **Propriété** : le nom exact à gauche des `:` (à ne jamais modifier).
- **Type** : ce que vous pouvez écrire à droite des `:`
  - `texte` → toujours entre guillemets `" texte "`.
  - `nombre/texte court` → une valeur courte, comme `"10 €"`.
  - `oui/non (true/false)` → **sans guillemets** : écrivez `true` ou `false`.
  - `liste [ ]` → plusieurs éléments entre crochets, séparés par des virgules.
  - `bloc { }` → un groupe d'informations liées entre accolades.
- **Obligatoire ?** : si "Oui", ne supprimez jamais cette propriété (la page
  plantera). Si "Non (optionnel)", vous pouvez la supprimer ou l'omettre sur
  un nouvel élément si elle n'est pas pertinente.
- **Rôle / règle d'usage** : ce que ça change sur la page, et les pièges à
  éviter.

### Rappel des symboles (voir aussi `documentation/GUIDE-SITE.md`)
- `{ }` = un groupe d'informations (un "bloc" : une carte, une fiche animal…).
- `[ ]` = une liste de blocs ou de textes (on peut en ajouter/retirer).
- `,` = sépare deux propriétés ou deux éléments de liste. **Ne mettez pas de
  virgule après le tout dernier élément** d'un bloc `{ }` (mais dans ce
  projet, une virgule finale en trop ne casse rien en pratique — dans le
  doute, copiez toujours un élément existant).
- `"texte"` = du texte affiché tel quel sur le site. Vous pouvez utiliser des
  emojis directement (ils sont déjà utilisés partout : 🐴 🌿 💚…).

### Fichiers disponibles
| Page du site | Fiche |
|---|---|
| Accueil | [`01-accueil.md`](01-accueil.md) |
| Nos animaux | [`02-animaux.md`](02-animaux.md) |
| Nos activités | [`03-activites.md`](03-activites.md) |
| Actualités | [`04-actualite.md`](04-actualite.md) |
| Notre histoire | [`05-historique.md`](05-historique.md) |
| Nos bénévoles | [`06-benevoles.md`](06-benevoles.md) |
| Nous rejoindre | [`07-rejoindre.md`](07-rejoindre.md) |
| Partenariats | [`08-partenariat.md`](08-partenariat.md) |
| Faire un don | [`09-dons.md`](09-dons.md) |
| Coordonnées (pied de page, partagé) | [`10-contact.md`](10-contact.md) |
| Photothèque | [`11-phototeque.md`](11-phototeque.md) |
