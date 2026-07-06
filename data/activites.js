const activitesData = {
  intro: {
    titre: "Nos Activités",
    sousTitre: "Des expériences pour tous, toute l'année",
    texte:
      "La Ferme du Petit Bois Joli propose des activités variées, adaptées à tous les âges et toutes les envies. Venez vous ressourcer, apprendre et vous amuser !",
  },

  activites: [
    {
      icone: "🗺️",
      titre: "Visite guidée de la ferme",
      categorie: "Découverte",
      categorieColor: "green",
      description:
        "Partez à la rencontre de nos animaux lors d'une visite guidée commentée. Nos bénévoles passionnés vous feront découvrir la vie de chaque animal, ses habitudes et son rôle dans la ferme.",
      details: [
        "Durée : 45 à 60 minutes",
        "Public : tout public, familles, groupes scolaires",
        "Sur inscription ou lors des journées portes ouvertes",
        "Accessible aux personnes à mobilité réduite",
      ],
      couleur: "#3A6B35",
    },
    {
      icone: "🥾",
      titre: "Marche nordique",
      categorie: "Sport & Nature",
      categorieColor: "orange",
      description:
        "Initiez-vous à la marche nordique avec Mathieu Dudit Gamant, éducateur sportif diplômé. Profitez du cadre naturel de la ferme et de ses environs pour cette activité douce et complète.",
      details: [
        "Durée : 30 à 60 minutes",
        "Animateur : Mathieu Dudit Gamant, éducateur sportif",
        "Niveau débutant à confirmé",
        "Bâtons fournis sur place",
      ],
      couleur: "#E07B39",
    },
    {
      icone: "🤠",
      titre: "Danse country",
      categorie: "Fête & Culture",
      categorieColor: "pink",
      description:
        "Enfilez vos santiags et rejoignez-nous pour une démonstration de danse country ! Un moment festif et convivial proposé lors de nos événements. Débutants bienvenus, l'important c'est de s'amuser !",
      details: [
        "Proposé lors des journées portes ouvertes",
        "Pour tous les niveaux, dès 6 ans",
        "Animation festive et conviviale",
        "Ambiance garantie !",
      ],
      couleur: "#E87CA0",
    },
    {
      icone: "📖",
      titre: "Lectures & comptines",
      categorie: "Enfants & Familles",
      categorieColor: "brown",
      description:
        "Marie, de « Marie Éducatrice et Compagnie », propose des séances de lecture et de comptines pour les tout-petits et les enfants. Un moment doux et poétique pour éveiller l'amour de la nature et des animaux.",
      details: [
        "Animatrice : Marie — Marie Éducatrice et Compagnie",
        "Public : de 2 à 8 ans (parents bienvenus)",
        "Durée : 30 à 45 minutes",
        "Proposé lors des événements et sur demande",
      ],
      couleur: "#7D5A3C",
    },
    {
      icone: "🎨",
      titre: "Ateliers créatifs",
      categorie: "Créativité",
      categorieColor: "pink",
      description:
        "Nos ateliers créatifs proposés par Nounou ADOM permettent aux enfants de s'exprimer librement : peinture, dessin, bricolage nature… et du maquillage artistique offert lors de nos événements !",
      details: [
        "Animatrice : Nounou ADOM",
        "Maquillage gratuit lors des portes ouvertes",
        "Matériel fourni",
        "Pour les enfants de 3 à 12 ans",
      ],
      couleur: "#E87CA0",
    },
    {
      icone: "🐾",
      titre: "Médiation animale",
      categorie: "Thérapeutique",
      categorieColor: "green",
      description:
        "Des séances encadrées de médiation animale sont proposées à des groupes ou individus en situation de fragilité. Le contact bienveillant avec nos animaux favorise l'apaisement et la confiance en soi.",
      details: [
        "Sur demande et réservation préalable",
        "Encadrée par des bénévoles formés",
        "Accessible aux personnes en situation de handicap",
        "Partenariats avec structures médico-sociales",
      ],
      couleur: "#3A6B35",
    },
    {
      isMajeur: true,
      icone: "🏫",
      titre: "Groupes scolaires, centres de loisirs & établissements spécialisés",
      description:
        "Nous accueillons les classes maternelles, primaires, les centres de loisirs ainsi que les établissements médico-sociaux pour des sorties pédagogiques et de découverte. Nos visites s'adaptent aux thèmes abordés en classe ou aux besoins des groupes accueillis : animaux de la ferme, nature, cycle de vie, éveil sensoriel, découverte de l'environnement et moments de partage au contact des animaux. Nous pouvons également recevoir des résidents d'EHPAD, des personnes en situation de handicap accompagnées par des IME ou d'autres structures spécialisées, ainsi que des groupes encadrés par des services médico-sociaux ou psychiatriques.",
      details: [
        "Programme adapté à l'âge et aux capacités des participants",
        "Supports pédagogiques et activités de découverte",
        "Encadrement par nos professionnels adhérents",
        "Accueil de groupes scolaires, centres de loisirs, EHPAD et structures spécialisées",
        "Approche bienveillante favorisant l'échange et le lien avec les animaux"
      ],
      contact: "Pour réserver votre sortie, contactez-nous.",
    },
    {
      isMajeur: true,
      icone: "🌻",
      titre: "Club nature",
      description:
        "Le club nature est proposé comme un moment de découverte, d'observation et de partage autour du vivant. Les enfants apprennent à mieux connaître les animaux, la nature et les saisons à travers des activités adaptées, ludiques et bienveillantes.",
      details: [
        "Ateliers autour des animaux et de la nature",
        "Activités adaptées aux enfants et aux groupes",
        "Découverte sensorielle et observation du vivant",
        "Moment convivial au contact de la ferme"
      ],
      image: "C:/Personnel et Confidentiel/Ferme/web/552962365_17871577782431175_3184276863323972494_n.jpg",
      contact: "Pour organiser un club nature, contactez-nous.",
    },
  ],
  tarifs: {
    titre: "Tarifs & Accès",
    items: [
      { label: "Journées Portes Ouvertes", prix: "Entrée gratuite" },
      { label: "Visite guidée individuelle", prix: "Sur don libre" },
      { label: "Groupe scolaire / centre de loisirs", prix: "Sur devis" },
      { label: "Séance de médiation animale", prix: "Sur devis" },
      { label: "Adhésion à l'association", prix: "à partir de 10€/an" },
    ],
  },
};
