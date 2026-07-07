# 📷 Page Photothèque — `data/phototeque.js`

Variable : `phototequeData`. Affichée par `phototeque.html` + `js/phototeque.js`.

C'est le fichier de données le plus simple du site : deux propriétés
seulement, sans sous-blocs.

```js
const phototequeData = {
  folder: 'assets/phototeque/',
  photos: [
    '484494400_122110221116795564_2164289881900878363_n.jpg',
    '495527814_122140371734795564_8385096046508600925_n.jpg',
    ...
  ]
};
```

---

## Propriétés

| Propriété | Type | Obligatoire ? | Rôle / règle d'usage |
|---|---|---|---|
| `folder` | texte (chemin de dossier, terminé par `/`) | Oui | Indique où se trouvent les photos. Doit correspondre exactement au dossier `assets/phototeque/`. Ne le modifiez pas, sauf si le dossier physique est renommé. |
| `photos` | liste `[ ]` de noms de fichiers texte | Oui (peut être vide `[]`) | Liste des photos affichées dans la galerie, **dans l'ordre où elles apparaissent** sur la page. Chaque nom doit être identique (majuscules, espaces, accents compris) au nom du fichier réellement présent dans `assets/phototeque/`. |

---

## Pour ajouter une photo
1. Déposez le fichier image (`.jpg`, `.jpeg`, `.png`, `.webp` ou `.gif`) dans
   le dossier `assets/phototeque/`.
2. Ajoutez son nom exact, entre guillemets et suivi d'une virgule, dans la
   liste `photos: [ ... ]` de `data/phototeque.js`.
3. Enregistrez, puis vérifiez sur la page Photothèque que la photo apparaît.

## Pour retirer une photo
Supprimez simplement sa ligne dans la liste `photos: [ ... ]`. Vous pouvez
aussi supprimer le fichier du dossier `assets/phototeque/`, mais ce n'est
pas indispensable : une photo présente dans le dossier mais absente de la
liste ne s'affichera de toute façon pas sur le site.

## Pour réordonner les photos
Changez simplement l'ordre des lignes dans la liste `photos: [ ... ]` : les
photos s'affichent dans le même ordre que celui de la liste.

---

## Pourquoi une liste, et pas juste le dossier ?
Le site est hébergé sur **GitHub Pages**, qui ne permet pas de "lister"
automatiquement le contenu d'un dossier (contrairement à un ordinateur
personnel). La page a donc besoin de cette liste explicite pour savoir
quelles photos afficher — exactement comme `data/animaux.js` liste les
photos de chaque animal (voir [`02-animaux.md`](02-animaux.md)).

## Bonnes pratiques spécifiques à cette page
- Respectez l'orthographe exacte du nom de fichier (attention aux espaces,
  ex. `"Wimpie _1.jpg"` sur d'autres pages contient une espace volontaire) :
  la moindre différence empêche la photo de s'afficher.
- N'oubliez pas la virgule `,` après chaque ligne de la liste `photos`.
