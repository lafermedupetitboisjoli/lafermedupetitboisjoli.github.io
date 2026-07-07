# 📖 Guide d'utilisation du site — La Ferme du Petit Bois Joli

Ce guide s'adresse à une personne **qui ne connaît pas la programmation**.
Il explique, avec des mots simples, comment modifier le contenu du site :
les textes, les données affichées, et les photos.

Pas de panique : vous n'avez rien à "compiler" ni à installer. Il suffit
d'ouvrir les bons fichiers avec un éditeur de texte (Bloc-notes, ou mieux :
[Notepad++](https://notepad-plus-plus.org/) ou [VS Code](https://code.visualstudio.com/),
gratuits), de modifier le texte, puis d'enregistrer.

---

## 1. Comment le site est organisé (en 30 secondes)

```
lafermedupetitboisjoli.github.io/
├── index.html, animaux.html, dons.html, ...   → les PAGES du site (une par sujet)
├── data/        → le CONTENU (textes, infos) de chaque page
├── js/          → le "moteur" qui affiche le contenu sur la page (à ne pas toucher)
├── style/       → les couleurs, polices, mise en page (à ne pas toucher)
└── assets/      → les images et photos
    └── phototeque/   → les photos de la page "Photothèque"
```

**Règle d'or : pour changer un texte ou une info, on modifie toujours un
fichier du dossier `data/`, jamais un fichier du dossier `js/`.**
Le dossier `js/` contient uniquement la mécanique qui va chercher les
informations dans `data/` pour les afficher joliment sur la page — on n'a
normalement pas besoin d'y toucher.

---

## 2. Comment fonctionne le "JSON" (les données du site)

Il n'y a pas, à proprement parler, de fichier `.json` dans ce site. Les
données sont dans des fichiers `.js` (dans le dossier `data/`), mais elles
sont écrites dans un format **très proche du JSON** : une grande liste
d'informations entre accolades `{ }`, avec des paires **clé : valeur**.

Exemple, tiré de `data/dons.js` :

```js
const donsData = {
  intro: {
    titre: "Soutenir la ferme",
    sousTitre: "Votre don fait toute la différence",
    texte: "La Ferme du Petit Bois Joli est une association à but non lucratif..."
  },
  ...
};
```

Comment le lire :
- `const donsData = { ... }` → c'est le "tiroir" qui contient toutes les
  données de la page des dons. Ne touchez jamais ce nom (`donsData`), il est
  utilisé par le site pour retrouver les informations.
- `titre:`, `sousTitre:`, `texte:` → ce sont des **étiquettes**. À droite des
  `:` se trouve la valeur, toujours entre guillemets `" "` si c'est du texte.
- Chaque ligne se termine par une **virgule** `,` (sauf la toute dernière
  d'un groupe `{ }`).

### Les règles à respecter absolument

1. **Ne touchez jamais ce qui est à gauche des `:`** (les noms comme `titre`,
   `texte`, `icone`...) — c'est le "nom de l'étiquette", le site sait où
   chercher grâce à ces noms exacts.
2. **Modifiez uniquement le texte entre guillemets** `" ... "` (à droite des `:`).
3. **Gardez les guillemets, les deux-points, les accolades `{ }`, les
   crochets `[ ]` et les virgules exactement où ils sont.** Si vous en
   supprimez ou déplacez un par erreur, la page peut ne plus s'afficher du
   tout.
4. Si votre texte contient lui-même un guillemet droit `"`, remplacez-le par
   un guillemet simple `'` ou par `\"` pour ne pas casser le fichier.
5. Après modification, enregistrez le fichier normalement (il doit toujours
   se terminer par `.js`, ne changez pas l'extension).

### Comment ajouter un élément dans une liste

Beaucoup de sections sont des **listes** repérées par des crochets `[ ]`,
par exemple la liste des articles d'actualité (`data/actualite.js`) :

```js
articles: [
  {
    date: "Juin 2026",
    titre: "La ferme accueille deux nouveaux lapins nains !",
    texte: "Deux adorables lapins nains ont rejoint la grande famille...",
    icone: "🐰",
    tag: "Nouveauté",
  },
  {
    date: "Mai 2026",
    titre: "Atelier marche nordique : un franc succès",
    ...
  },
]
```

Pour ajouter un nouvel article, il suffit de **copier un bloc existant**
(de la première `{` à la dernière `}` de ce bloc), de le **coller juste
avant ou après**, de **modifier le texte**, et de vérifier qu'une virgule
`,` sépare bien chaque bloc.

💡 **Astuce simple et sans risque** : dupliquez toujours un bloc qui existe
déjà et modifiez seulement son contenu, plutôt que d'écrire un bloc à la main
depuis zéro. Vous éviterez ainsi le risque d'oublier une accolade ou une
virgule.

⚠️ **Avant d'enregistrer**, comptez que vous avez bien autant d'accolades
ouvrantes `{` que de fermantes `}`, et autant de crochets `[` que de `]`.
Une seule paire manquante empêche toute la page de s'afficher.

---

## 3. Comment fonctionne la partie "Data" (les fichiers `.js`)

### À quoi ça sert
Chaque page du site a **son propre fichier de données** dans `data/` :

| Page du site        | Fichier de données         |
|----------------------|-----------------------------|
| Accueil              | `data/accueil.js`          |
| Nos animaux          | `data/animaux.js`          |
| Actualités           | `data/actualite.js`        |
| Historique           | `data/historique.js`       |
| Activités            | `data/activites.js`        |
| Bénévoles            | `data/benevoles.js`        |
| Nous rejoindre       | `data/rejoindre.js`        |
| Partenariat          | `data/partenariat.js`      |
| Faire un don         | `data/dons.js`             |
| Coordonnées / réseaux sociaux (utilisé partout, dont le pied de page) | `data/contact.js` |

### Comment ça s'articule avec les pages
Chaque page (`animaux.html`, `dons.html`, etc.) charge **deux scripts** à la
fin du fichier :

```html
<script src="data/animaux.js"></script>   <!-- 1. les données -->
<script src="js/animaux.js"></script>     <!-- 2. l'affichage -->
```

1. Le fichier de `data/` est chargé en premier : il contient uniquement les
   informations (textes, noms, dates, photos...).
2. Le fichier de `js/` (même nom, mais dans un autre dossier) va ensuite lire
   ces informations et construire automatiquement les blocs visuels
   (cartes, titres, listes...) sur la page.

**Conséquence pratique : pour changer un texte affiché sur le site, il suffit
de modifier le fichier correspondant dans `data/`. Vous n'avez jamais besoin
de toucher au fichier du même nom dans `js/`.**

### Exemple concret : modifier la fiche d'un animal
Dans `data/animaux.js`, chaque animal est un bloc du même type :

```js
{
  icone: "🐴",
  photos: ["Wimpie _1.jpg"],
  nom: "Wimpie",
  espece: "Poney Shetland",
  caractere: "Doux & joueur",
  description: "Wimpie est notre poney Shetland adoré. ...",
  alimentation: "Herbe, foin, pommes",
  particularite: "Il sait faire la révérence !",
  tag: "Équidé",
},
```

- Pour changer la description → modifiez uniquement le texte après
  `description:`.
- Pour ajouter une photo à un animal → mettez le nom du fichier image (déjà
  déposé dans `assets/photos/`) entre guillemets, dans la liste `photos: [ ]`,
  par exemple : `photos: ["Wimpie _1.jpg", "Wimpie _2.jpg"]`.
- Pour ajouter un nouvel animal → dupliquez un bloc `{ ... }` complet (voir
  méthode ci-dessus) et modifiez son contenu.

---

## 4. Comment fonctionne la Photothèque (page "photos")

### Comment ajouter ou retirer une photo
Contrairement à ce qu'on pourrait croire, **ajouter le fichier dans le
dossier ne suffit pas à lui seul** : il faut aussi déclarer son nom dans un
fichier de données, exactement comme pour les animaux (voir section 3). Il
y a donc **deux étapes** :

1. **Déposer le fichier image** (`.jpg`, `.jpeg`, `.png`, `.webp` ou `.gif`)
   dans le dossier :
   ```
   assets/phototeque/
   ```
2. **Ajouter son nom de fichier** dans la liste `photos` du fichier
   `data/phototeque.js` :
   ```js
   const phototequeData = {
     folder: 'assets/phototeque/',
     photos: [
       '484494400_122110221116795564_2164289881900878363_n.jpg',
       '495527814_122140371734795564_8385096046508600925_n.jpg',
       ...
       'ma-nouvelle-photo.jpg',   // ← nouvelle ligne ajoutée ici
     ]
   };
   ```

| Propriété | Type | Obligatoire ? | Rôle / règle d'usage |
|---|---|---|---|
| `folder` | texte (chemin de dossier, terminé par `/`) | Oui | Dossier où se trouvent les photos. Ne le modifiez pas sauf si vous renommez le dossier `assets/phototeque/` lui-même. |
| `photos` | liste `[ ]` de noms de fichiers texte | Oui (peut être vide `[]`) | Liste des photos affichées, dans l'ordre d'apparition sur la page. Chaque nom doit être **identique** (majuscules, espaces, accents compris) à celui du fichier déposé dans `assets/phototeque/`. |

Pour **retirer** une photo : supprimez sa ligne dans `photos: [ ... ]` (vous
pouvez aussi supprimer le fichier du dossier, mais ce n'est pas obligatoire
s'il n'est plus référencé dans la liste — une photo présente dans le dossier
mais absente de la liste n'apparaît simplement pas sur le site).

⚠️ N'oubliez pas la virgule `,` à la fin de chaque ligne de la liste, sauf
si vous préférez suivre l'exemple existant qui garde une virgule même sur la
dernière ligne (les deux fonctionnent).

### Pourquoi cette étape supplémentaire est nécessaire
Le site est hébergé sur **GitHub Pages**, qui ne permet pas de "lister"
automatiquement le contenu d'un dossier (contrairement à un ordinateur
personnel). La page a donc besoin qu'on lui indique explicitement, via
`data/phototeque.js`, quelles photos afficher — exactement comme
`data/animaux.js` indique quelles photos afficher pour chaque animal.

### En résumé
1. Déposer la photo dans `assets/phototeque/`.
2. Ajouter son nom exact dans `photos: [ ... ]` du fichier
   `data/phototeque.js`.
3. Vérifier sur le site que la photo apparaît bien dans la galerie.

---

## 5. Fiche détaillée par page

Pour aller plus loin, chaque page du site a sa propre fiche listant
**toutes ses propriétés une par une**, avec leur rôle et leurs règles
d'usage précises (obligatoire ou non, format attendu, pièges à éviter) :
voir le dossier [`documentation/pages/`](pages/00-lire-avant.md).

---

## 6. Bon réflexe avant toute modification

1. **Faites une copie du fichier** que vous voulez modifier avant de le
   modifier (par exemple en la renommant `animaux-copie.js`), pour pouvoir
   revenir en arrière facilement en cas d'erreur.
2. Modifiez uniquement le texte entre guillemets, jamais les noms
   d'étiquettes, ni les symboles `{ } [ ] : ,`.
3. Après modification, ouvrez la page correspondante dans votre navigateur
   pour vérifier que tout s'affiche correctement.
4. En cas de doute ou de page "cassée", comparez avec la copie de
   sauvegarde pour repérer la différence.

---

*Document rédigé pour faciliter la prise en main du site par une personne
non technique. Pour toute modification plus poussée (mise en page, nouvelles
pages, correction de bug), il est recommandé de faire appel à une personne à
l'aise avec le développement web.*
