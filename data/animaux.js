const animauxData = {
  intro: {
    titre: "Nos Animaux",
    sousTitre: "Venez faire leur connaissance !",
    texte:
      "À la Ferme du Petit Bois Joli, chaque animal a son histoire et sa personnalité. Ils sont au cœur de notre projet et accueillent avec joie petits et grands visiteurs.",
  },

  animaux: [
    {
      icone: "🐴",
      photos: ["Wimpie _1.jpg"],
      nom: "Wimpie",
      espece: "Poney Shetland",
      caractere: "Doux & joueur",
      description:
        "Wimpie est notre poney Shetland adoré. Avec sa belle crinière et son caractère espiègle, il est le chouchou des enfants. Il adore être brossé et ne dit jamais non à une petite pomme.",
      alimentation: "Herbe, foin, pommes",
      particularite: "Il sait faire la révérence !",
      tag: "Équidé",
    },
    {
      icone: "🫏",
      photos: [],
      nom: "Barnabé",
      espece: "Âne de Provence",
      caractere: "Sage & affectueux",
      description:
        "Barnabé est le patriarche de la ferme. Toujours calme et bienveillant, cet âne de Provence accueille chaque visiteur avec sérénité. Il est particulièrement apprécié lors des séances de médiation animale.",
      alimentation: "Foin, paille, légumes",
      particularite: "Expert en câlins thérapeutiques",
      tag: "Équidé",
      nouveaute: true,
      pension:true
    },
    {
      icone: "🐐",
      photos: [],
      nom: "Noisette & Praline",
      espece: "Chèvres naines",
      caractere: "Curieuses & vives",
      description:
        "Ces deux chipies ne manquent jamais une occasion d'explorer. Noisette et Praline sont inséparables et adorent rencontrer de nouvelles personnes. Elles se laissent volontiers caresser et nourrir à la main.",
      alimentation: "Herbe, foin, branches, légumes",
      particularite: "Elles répondent à leur prénom",
      tag: "Caprin",
    },
    {
      icone: "🐇",
      photos: [],
      nom: "Blanche & Réglisse",
      espece: "Lapins nains",
      caractere: "Câlins & curieux",
      description:
        "Nos deux lapins nains sont arrivés récemment à la ferme. Blanche, toute blanche aux yeux bleus, et Réglisse, noir comme la nuit. Ils adorent être câlinés et font le bonheur des plus jeunes visiteurs.",
      alimentation: "Foin, légumes frais, granulés",
      particularite: "Fans inconditionnels de carottes",
      tag: "Lapin",
      nouveaute: false,
    },
    {
      icone: "🐓",
      photos: [],
      nom: "Le Coq & ses Poulettes",
      espece: "Poules pondeuses",
      caractere: "Libres & nature",
      description:
        "Notre joyeuse basse-cour est composée d'un beau coq et de plusieurs poules en liberté. Elles se promènent dans la ferme et pondent de beaux œufs frais. Les enfants adorent les nourrir de graines.",
      alimentation: "Graines, herbes, vers",
      particularite: "Elles pondent des œufs pour vous !",
      tag: "Volaille",
    },
    {
      icone: "🐹",
      photos: [],
      nom: "Noisettine & Caramel",
      espece: "Cochons d'Inde",
      caractere: "Doux & bavards",
      description:
        "Ces petits cochons d'Inde sont très bavards ! Ils communiquent avec toutes sortes de petits sons et apprécient la compagnie humaine. Parfaits pour les plus jeunes enfants qui souhaitent approcher un animal.",
      alimentation: "Foin, légumes frais, granulés",
      particularite: "Couinements de bonheur garantis",
      tag: "Rongeur",
    },
    {
      icone: "🐕",
      photos: [],
      nom: "Filou",
      espece: "Chien de ferme",
      caractere: "Fidèle & protecteur",
      description:
        "Filou veille sur tous les habitants de la ferme. Ce grand chien doux comme un agneau est le gardien attentionné de la ferme. Sociable et joueur, il accueille les visiteurs avec enthousiasme.",
      alimentation: "Croquettes, restes de la ferme",
      particularite: "Meilleur ami de Barnabé l'âne",
      tag: "Chien",
    },
  ],

  actions: [
    {
    titre: "Parrainage d'animaux",
    icone: "🐾",
    texte:
      "Vous souhaitez soutenir nos animaux et participer à leur bien-être ? Le parrainage est une belle manière de contribuer à la vie de la ferme. En parrainant un animal, vous recevrez des nouvelles régulières et pourrez suivre son évolution.",
    boutton: { 
      label: "Parrainer un animal", 
      lien: "benevoles.html#parrainage" },
    },
    {
    titre: "Médiation animale",
    icone: "🌿",
    texte:
      "Nos animaux participent également à des séances de médiation animale. Ce contact bienveillant entre humains et animaux favorise l'apaisement, la confiance en soi et le lien social. Ces séances sont proposées à des groupes en situation de fragilité sur demande.",
    boutton: { 
      label: "Découvrir la médiation animale", 
      lien: "activites.html#mediation" },
    }
  ]
};
