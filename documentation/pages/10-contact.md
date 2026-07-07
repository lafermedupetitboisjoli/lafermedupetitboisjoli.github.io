# ✉️ Coordonnées partagées — `data/contact.js`

Variable : `contactData`. Ce fichier est un peu différent des autres : il ne
correspond pas à une page précise, mais contient les **coordonnées de
l'association**, réutilisées automatiquement à plusieurs endroits du site :
- le pied de page (`js/main.js`, sur **toutes les pages**),
- le bloc "Nous trouver" de la page d'accueil (`js/accueil.js`).

C'est donc **le seul fichier à modifier** pour changer l'adresse, l'email ou
les réseaux sociaux affichés partout sur le site.

---

## Propriétés (bloc unique, pas de liste)

| Propriété | Type | Obligatoire ? | Rôle |
|---|---|---|---|
| `rue` | texte court | Oui | Numéro et nom de rue. |
| `codePostal` | texte court | Oui | Code postal. |
| `ville` | texte court | Oui | Ville. |
| `region` | texte court | Oui | Région. |
| `pays` | texte court | Oui | Pays. |
| `email` | adresse email | Oui | Email de contact affiché (et utilisé pour les liens `mailto:`). |
| `facebook` | texte (URL complète) | Oui | Lien vers la page Facebook. Doit commencer par `https://`. |
| `instagram` | texte (URL complète) | Oui | Lien vers la page Instagram. Doit commencer par `https://`. |
| `tiktok` | texte (URL complète) | Oui | Lien vers la page TikTok. Doit commencer par `https://`. |

---

## Règles d'usage importantes

1. **Ne renommez aucune propriété** (`rue`, `codePostal`, etc.) : elles sont
   utilisées telles quelles dans `js/main.js` et `js/accueil.js`.
2. **Toutes les propriétés sont obligatoires** : ce fichier sert de source
   unique pour tout le site ; si une propriété est manquante ou mal
   orthographiée, l'information correspondante n'apparaîtra pas (ou
   affichera `undefined`) à plusieurs endroits du site en même temps.
3. Les liens de réseaux sociaux doivent être des **adresses complètes**,
   toujours avec `https://` au début.

### Filet de sécurité intégré
Si ce fichier venait à être supprimé ou mal chargé, `js/main.js` et
`js/accueil.js` contiennent chacun une **copie de secours** des mêmes
coordonnées (les mêmes valeurs qu'aujourd'hui), utilisée automatiquement en
remplacement. Cela signifie que le site ne "casse" pas complètement si ce
fichier a un souci, mais que **vos modifications ne seront pas visibles**
si vous ne modifiez que ce filet de secours par erreur — modifiez toujours
`data/contact.js` en priorité pour que le changement soit pris en compte
partout.

---

## Pour mettre à jour les coordonnées
1. Ouvrez `data/contact.js`.
2. Modifiez uniquement le texte entre guillemets de la propriété concernée.
3. Enregistrez. Le changement s'appliquera automatiquement sur toutes les
   pages du site (pied de page inclus) sans rien modifier ailleurs.
