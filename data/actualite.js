const actualiteData = {
  intro: {
    titre: "Actualités",
    sousTitre: "Les dernières nouvelles de la ferme",
  },

  evenementALaUne: [
    {
      titre: "Matinée Intergénérationnelle",
      date: "24 juillet 2026",
      heures: "9h30 / 11h30",
      lieu: "2 La Brouardière, 85170 Beaufou",
      entree: "10€ par personne",
      description: "Sur réservation • Places limitées",
      highlights: [
        { icone: "🎨", titre: "Découvertes sensorielles", texte: "" },
        { icone: "🐴", titre: "Découverte et jeux autour des animaux", texte: "" },
        { icone: "📖", titre: "Histoires comptines", texte: "" }
      ],
      contact:{
        lien: "tel:06.15.85.47.33",
        texte: "Réserver par téléphone"
      }
    },
    {
      titre: "Après-midi Intergénérationnel",
      date: "22 juillet 2026",
      heures: "14h30 / 16h30",
      lieu: "2 La Brouardière, 85170 Beaufou",
      entree: "10€ par personne",
      description: "Sur réservation • Places limitées",
      highlights: [
        { icone: "🎨", titre: "Découvertes sensorielles", texte: "" },
        { icone: "🐴", titre: "Découverte et jeux autour des animaux", texte: "" },
        { icone: "📖", titre: "Histoires comptines", texte: "" }
      ],
      contact:{
        lien: "tel:06.15.85.47.33",
        texte: "Réserver par téléphone"
      }
    },
    {
      titre: "Week-end Portes Ouvertes — 27 & 28 Juin 2026",
      date: "27 et 28 juin 2026",
      heures: "Samedi 11h – 18h30 | Dimanche 10h – 17h",
      lieu: "2 La Brouardière, 85170 Beaufou",
      entree: "Entrée gratuite",
      contact: {
        lien: "mailto:contact@fermedupetitboisjoli.fr?subject=Info - Week-end Portes Ouvertes — 27 & 28 Juin 2026",
        texte: "Plus d'infos"
      },
      description: "Venez découvrir notre ferme pédagogique en famille ! Un week-end convivial rempli d'animations, de rencontres avec nos animaux et d'activités pour petits et grands.",
      programme: {
        samedi: [
          { heure: "11h30", activite: "Visite guidée de la ferme", icone: "🗺️" },
          { heure: "13h00", activite: "Lectures et comptines — Marie Éducatrice et Compagnie", icone: "📖" },
          { heure: "13h30", activite: "Initiation à la marche nordique (30 min)", icone: "🥾" },
          { heure: "14h00", activite: "Visite guidée de la ferme", icone: "🗺️" },
          { heure: "14h30", activite: "Initiation à la marche nordique (30 min)", icone: "🥾" },
          { heure: "15h00", activite: "Démonstration de danse country", icone: "🤠" },
          { heure: "15h00 – 18h00", activite: "Maquillage et loisirs créatifs — Nounou ADOM", icone: "🎨" },
          { heure: "16h00", activite: "Visite guidée de la ferme", icone: "🗺️" },
          { heure: "16h30", activite: "Lectures et comptines — Marie Éducatrice et Compagnie", icone: "📖" },
          { heure: "17h30", activite: "Visite guidée de la ferme", icone: "🗺️" },
          { heure: "18h00", activite: "Lectures et comptines — Marie Éducatrice et Compagnie", icone: "📖" },
        ],
        dimanche: [
          { heure: "10h30", activite: "Initiation à la marche nordique (30 min)", icone: "🥾" },
          { heure: "11h00", activite: "Démonstration de danse country", icone: "🤠" },
          { heure: "11h30", activite: "Visite guidée de la ferme", icone: "🗺️" },
          { heure: "13h30", activite: "Initiation à la marche nordique (30 min)", icone: "🥾" },
          { heure: "14h00", activite: "Visite guidée de la ferme", icone: "🗺️" },
          { heure: "15h30", activite: "Initiation à la marche nordique (30 min)", icone: "🥾" },
          { heure: "16h00", activite: "Visite guidée de la ferme", icone: "🗺️" },
          { heure: "16h30", activite: "Tirage au sort de la tombola 🎟️", icone: "🎉" },
        ],
      },
      highlights: [
        { icone: "🎨", titre: "Stand animations enfants", texte: "Activités créatives & maquillage gratuit" },
        { icone: "🌿", titre: "Pros du bien-être", texte: "Échanges, conseils et découvertes" },
        { icone: "🏡", titre: "Visite de la ferme", texte: "Rencontrez nos animaux et explorez la ferme" },
        { icone: "🍺", titre: "Buvette sur place", texte: "Restauration et boissons disponibles" },
      ],
    },
    {
      titre: "Test lien HelloAsso",
      date: "24 juillet 2026",
      heures: "9h30 / 11h30",
      lieu: "2 La Brouardière, 85170 Beaufou",
      entree: "10€ par personne",
      description: "Sur réservation • Places limitées",
      highlights: [
        { icone: "🎨", titre: "Découvertes sensorielles", texte: "" },
        { icone: "🐴", titre: "Découverte et jeux autour des animaux", texte: "" },
        { icone: "📖", titre: "Histoires comptines", texte: "" }
      ],
      contact:{
        lien: "https://www.helloasso.com/associations/la-ferme-du-petit-bois-joli/adhesions/adhesion-2026",
        texte: "S'inscrire"
      }
    }
  ],

  articles: [
    {
      date: "Juin 2026",
      titre: "La ferme accueille deux nouveaux lapins nains !",
      texte:
        "Deux adorables lapins nains ont rejoint la grande famille de la ferme. Ils sont déjà très câlins et attendent de vous rencontrer lors de vos prochaines visites.",
      icone: "🐰",
      tag: "Nouveauté",
    },
    {
      date: "Mai 2026",
      titre: "Atelier marche nordique : un franc succès",
      texte:
        "Les séances de marche nordique encadrées par Mathieu Dudit Gamant, éducateur sportif, font le plein à chaque session. Rejoignez-nous pour la prochaine édition !",
      icone: "🥾",
      tag: "Activité",
    },
    {
      date: "Avril 2026",
      titre: "Partenariat avec Marie Éducatrice et Compagnie",
      texte:
        "Nous sommes ravis d'accueillir régulièrement Marie pour des séances de lectures et comptines destinées aux plus jeunes. Un moment de douceur et de magie à partager en famille.",
      icone: "📖",
      tag: "Partenariat",
    },
    {
      date: "Mars 2026",
      titre: "Printemps : les bébés animaux arrivent !",
      texte:
        "La saison est propice aux naissances à la ferme. De petits chevreaux ont pointé le bout de leur nez ! Venez les découvrir lors de nos prochaines visites guidées.",
      icone: "🐐",
      tag: "Vie de la ferme",
    },
  ],
};
