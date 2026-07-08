const benevolesData = {
  intro: {
    titre: "Nos Bénévoles",
    sousTitre: "Le cœur qui fait battre la ferme",
    texte:
      "La Ferme du Petit Bois Joli existe grâce à l'engagement et à la passion de ses bénévoles. Ces hommes et femmes donnent de leur temps, de leur énergie et de leur amour pour faire vivre ce beau projet.",
  },

  benevoles: [
    {
      icone: "👩‍🌾",
      prenom: "Claire",
      role: "Présidente de l'association",
      description:
        "À l'origine du projet, Claire a fondé la ferme avec la conviction que le lien entre l'humain et l'animal est source de guérison et d'épanouissement. Elle coordonne l'ensemble des activités avec une énergie communicative.",
      competences: ["Gestion associative", "Bien-être animal", "Communication"],
      isResponsable: true,
    },
    {
      icone: "👨‍⚕️",
      prenom: "Matthieu",
      role: "COACH SPORTIF & ANIMATEUR",
      description:
        "Diplômé d'un BP JEPS AGFF depuis 2013. Je possède également les diplômés Fédéraux FFA. J'accompagne les personnes individuelles ou en famille dans la marche nordique, course à pied, musculation, pour objectif de se tonifier, perte de poids, prise de masse.",
      competences: ["Pédagogie", "Animation enfants", "Marche nordique"],
      isResponsable: true,
    },
    {
      icone: "👩‍🏫",
      prenom: "Marie",
      isResponsable: false,
    },
    {
      icone: "🧑‍🔧",
      prenom: "Pierre",
      isResponsable: false,
    },
    {
      icone: "👩‍🍳",
      prenom: "Laurence",
      isResponsable: false,
    },
    {
      icone: "🧑‍💼",
      photo: "benevoles/brieuc.png",
      prenom: "Brieuc",
      isResponsable: false,
    },
    {
      icone: "👩‍🦽",
      prenom: "Nathalie",
      isResponsable: false,
    // },
    // {
    //   icone: "🌻",
    //   prenom: "Et vous ?",
    //   role: "Futur·e bénévole",
    //   description:
    //     "La ferme grandit et a toujours besoin de nouvelles énergies ! Que vous aimiez les animaux, la nature, l'animation ou le bricolage, votre place est ici. Rejoignez notre belle équipe !",
    //   competences: ["Passion", "Bonne humeur", "Envie de partager"],
    //   isResponsable: true,
    //   rejoindre: true,
    }
  ],

  parrainage: {
    titre: "Merci à nos parrains et marraines !",
    intro:
      "À La Ferme du Petit Bois Joli, le parrainage est une aide précieuse pour prendre soin de nos animaux au quotidien. Grâce à nos parrains et marraines, nous pouvons continuer à leur offrir nourriture, soins et attention. 💚",

    parrains: 
    {
      imageFolder: "assets/parrainage/",
      parrains: [
        { icone: "🐴", nom: "Micro", parrains: ["Corinne"], images: ["MicroCorinne.png"] },
        { icone: "🐴", nom: "Punto", parrains: ["Léane"], images: ["puntoleane.png"] },
        { icone: "🐴", nom: "Funny", parrains: ["Michel"] , images: ["FunnyMichel.png"]},
        { icone: "🫏", nom: "Ponpon", parrains: ["Sylvia"], images:["ponponsylvia.png"]},
      ],
      actionsParrains:[
        {file: 'puntoleane.png', label: 'Séance photo'},
        {file: 'nourrissage.jpg', label: 'Nourissage des animaux'},
      ]
    },

    merci:
      "Un immense merci à eux pour leur engagement et leur générosité ! 🙏",

    attente: "Mais l'aventure du parrainage continue… Il reste encore plusieurs animaux qui attendent leur parrain ou leur marraine :",

    animaux_attente: [
      "🐰 lapins",
      "🐹 cochons d'Inde",
      "🐐 chèvres",
      "🐑 moutons",
      "🐷 cochons",
      "🐴 chevaux",
      "🫏 ânes",
      "🐴 poneys",
      "🐶 chiens",
      "🐱 chats",
      "🐔 poules",
    ],

    conclusion:
      "Parrainer un animal, c'est participer concrètement à son bien-être et soutenir la vie de la ferme. C'est aussi créer un lien particulier avec lui. 💫",

    cta: "📩 Nous serons ravis de vous expliquer comment rejoindre cette belle aventure solidaire !",
   },

  rejoindre: {
    titre: "Rejoindre l'équipe",
    texte:
      "Vous souhaitez rejoindre notre équipe de bénévoles ? Que ce soit pour quelques heures par mois ou davantage, toutes les bonnes volontés sont les bienvenues !",
    bouton: {
      label: "Rejoindre l'équipe",
      link: "rejoindre.html"
    }
  },
};
