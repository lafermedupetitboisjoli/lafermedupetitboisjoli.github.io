const donsData = {
  intro: {
    titre: "Soutenir la ferme",
    sousTitre: "Votre don fait toute la différence",
    texte:
      "La Ferme du Petit Bois Joli est une association à but non lucratif. Elle vit grâce à l'engagement de ses bénévoles, aux adhésions et à la générosité de ses donateurs. Chaque contribution, petite ou grande, nous aide à continuer cette belle aventure."
  },

  pourquoi: {
    titre: "Pourquoi faire un don ?",
    points: [
      {
        icone: "🐴",
        titre: "Soins des animaux",
        texte: "Nourriture, soins vétérinaires, médicaments et bien-être au quotidien de nos pensionnaires."
      },
      {
        icone: "🏡",
        titre: "Entretien des installations",
        texte: "Réparation et amélioration des enclos, abris, et espaces d'accueil pour les visiteurs."
      },
      {
        icone: "🎨",
        titre: "Ateliers & activités",
        texte: "Financement du matériel pédagogique, des ateliers créatifs et des animations pour les enfants."
      },
      {
        icone: "♿",
        titre: "Accessibilité",
        texte: "Aménagements pour rendre la ferme accessible à tous, y compris aux personnes en situation de handicap."
      },
      {
        icone: "🌐",
        titre: "Faire connaître la ferme",
        texte: "Création de contenus, gestion du site internet, publications sur les réseaux sociaux et actions de communication pour sensibiliser et attirer de nouveaux visiteurs et soutiens."
      },
      {
        icone: "❤️",
        titre: "Sensibilisation du public",
        texte: "Organisation de campagnes d'information, partage de nos projets et valorisation de nos pensionnaires pour développer notre communauté de soutien."
      }
    ]
  },
  montants: [
    {
      montant: "10 €",
      icone: "🌾",
      impact: "Un sac de foin pour nourrir nos animaux pendant une semaine"
    },
    {
      montant: "25 €",
      icone: "💊",
      impact: "Participation aux frais vétérinaires d'un de nos animaux"
    },
    {
      montant: "50 €",
      icone: "🎒",
      impact: "Matériel pédagogique pour un atelier enfants"
    },
    {
      montant: "100 €",
      icone: "🏗️",
      impact: "Contribution à l'entretien ou à l'amélioration d'un enclos"
    }
  ],

  methodes: [
    {
      icone: "💳",
      titre: "En ligne",
      description:
        "HelloAsso est la plateforme de référence pour soutenir les associations françaises. Paiement sécurisé par carte bancaire, sans frais pour l'association.",
      cta: "Faire un don en ligne",
      href: "#helloasso",
      couleur: "#00B0A0",
      principal: true
    },
    {
      icone: "🏦",
      titre: "Virement bancaire",
      description:
        "Vous pouvez effectuer un virement directement sur le compte de l'association. Contactez-nous pour obtenir nos coordonnées bancaires (IBAN).",
      cta: "Demander l'IBAN",
      href: "mailto:contact@fermedupetitboisjoli.fr?subject=Demande IBAN pour don",
      couleur: "#3A6B35",
      principal: false
    },
    {
      icone: "✉️",
      titre: "Chèque",
      description:
        "Envoyez votre chèque à l'ordre de « La Ferme du Petit Bois Joli » à l'adresse de la ferme : 2 La Brouardière, 85170 Beaufou.",
      cta: null,
      couleur: "#7D5A3C",
      principal: false
    }
  ],

  fiscalite: {
    titre: "💡 Avantage fiscal",
    texte:
      "En tant qu'association reconnue d'intérêt général (loi 1901), vos dons peuvent ouvrir droit à une réduction d'impôt sur le revenu égale à 66 % du montant versé, dans la limite de 20 % de votre revenu imposable. Un reçu fiscal vous sera délivré sur demande.",
    exemple: "Exemple : un don de 50 € ne vous coûte réellement que 17 €."
  },

  adhesion: {
    titre: "Devenir adhérent·e",
    texte:
      "En plus du don, vous pouvez soutenir la ferme en devenant membre de l'association. L'adhésion vous permet de participer aux assemblées générales et de voter pour l'orientation du projet.",
    tarifs: [
      { label: "Adhésion individuelle", prix: "à partir de 10 € / an" },
      { label: "Adhésion famille", prix: "80 € / an" },
      { label: "Adhésion entrepreneur", prix: "50 € / an" }
    ]
  },

  besoins: {
    titre: "Ce dont nous avons besoin",
    sousTitre: "Vous pouvez aussi nous aider en nature !",
    categories: [
      {
        icone: "🐴",
        titre: "Pour les animaux",
        items: ["Gamelles", "Seaux", "Abreuvoirs", "Gros balai-brosse (grattoir)"]
      },
      {
        icone: "🛠️",
        titre: "Outils de bricolage",
        items: ["Marteaux", "Vis", "Palettes", "Planches", "Piquets de clôture"]
      },
      {
        icone: "🚜",
        titre: "Matériel de jardinage",
        items: ["Brouettes (petites et grandes)", "Arrosoirs", "Râteaux", "Pelles"]
      },
      {
        icone: "🎨",
        titre: "Jeux & pédagogie",
        items: ["Jeux pour enfants", "Matériel pédagogique", "Livres nature & animaux"]
      }
    ]
  },

  parrainage: {
    titre: "Merci à nos parrains et marraines !",
    intro:
      "À La Ferme du Petit Bois Joli, le parrainage est une aide précieuse pour prendre soin de nos animaux au quotidien. Grâce à nos parrains et marraines, nous pouvons continuer à leur offrir nourriture, soins et attention. 💚",

    parraines: [
      { icone: "🐴", nom: "Micro", parrains: ["Corinne"] },
      { icone: "🐴", nom: "Punto", parrains: ["Léane"] },
      { icone: "🐴", nom: "Funny", parrains: ["Michel"] },
      { icone: "🫏", nom: "Ponpon", parrains: ["Sylvia", "Azilys"] },
    ],

    merci:
      "Un immense merci à eux pour leur engagement et leur générosité ! 🙏",

    attente: "Mais l'aventure du parrainage continue… Il reste encore plusieurs animaux qui attendent leur parrain ou leur marraine :",

    animaux_attente: [
      "🐰 des lapins",
      "🐹 des cochons d'Inde",
      "🐔 des poules",
      "🐐 des chèvres",
      "🐑 des brebis",
      "🐷 des cochons",
      "🐴 des chevaux miniatures",
      "🐶 des chiens",
      "🐱 des chats",
    ],

    conclusion:
      "Parrainer un animal, c'est participer concrètement à son bien-être et soutenir la vie de la ferme. C'est aussi créer un lien particulier avec lui. 💫",

    cta: "📩 Nous serons ravis de vous expliquer comment rejoindre cette belle aventure solidaire !",
  },

  merci: {
    titre: "Merci pour votre générosité !",
    texte:
      "Chaque don est précieux et contribue directement au bien-être de nos animaux et à la continuité de nos activités. Au nom de toute l'équipe et de nos pensionnaires à quatre pattes, merci du fond du cœur ! 🐾❤️"
  }
};
