export type Lang = "fr" | "en";

export const translations = {
  // Navigation
  nav: {
    accueil: { fr: "Accueil", en: "Home" },
    soins: { fr: "Nos Soins", en: "Our Services" },
    institut: { fr: "L'Institut", en: "About" },
    contact: { fr: "Contact", en: "Contact" },
    rdv: { fr: "Rendez-vous", en: "Book now" },
  },

  // Footer
  footer: {
    tagline: {
      fr: "Votre institut de beaute a Papeete depuis 1993.",
      en: "Your beauty salon in Papeete since 1993.",
    },
    quote: {
      fr: "Revelez votre beaute naturelle.",
      en: "Reveal your natural beauty.",
    },
    telephone: { fr: "Telephone", en: "Phone" },
    messenger: { fr: "Messenger", en: "Messenger" },
    envoyerMessage: { fr: "Envoyer un message", en: "Send a message" },
    adresse: { fr: "Adresse", en: "Address" },
    horaires: { fr: "Horaires", en: "Hours" },
    horairesText: { fr: "Lun \u2014 Sam : 08h \u2014 18h", en: "Mon \u2014 Sat: 8am \u2014 6pm" },
    copyright: {
      fr: "Institut de Beaute Leely. Tous droits reserves.",
      en: "Institut de Beaute Leely. All rights reserved.",
    },
  },

  // OpenStatus
  openStatus: {
    days: {
      fr: ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"],
      en: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    },
    ouvert: { fr: "Ouvert", en: "Open" },
    ferme: { fr: "Ferme", en: "Closed" },
  },

  // Home page
  home: {
    heroSubtitle: {
      fr: "Papeete, Tahiti \u2014 Depuis 1993",
      en: "Papeete, Tahiti \u2014 Since 1993",
    },
    heroTitle1: { fr: "Revelez votre", en: "Reveal your" },
    heroTitle2: { fr: "beaute naturelle", en: "natural beauty" },
    heroDescription: {
      fr: "Specialiste du maquillage semi-permanent et des soins esthetiques depuis plus de 30 ans.",
      en: "Specialist in semi-permanent makeup and beauty treatments for over 30 years.",
    },
    ctaRdv: { fr: "Prendre rendez-vous", en: "Book an appointment" },
    ctaSoins: { fr: "Decouvrir nos soins", en: "Discover our services" },
    expertises: { fr: "Nos expertises", en: "Our expertise" },
    soinsException: { fr: "Des soins d'exception", en: "Exceptional treatments" },
    voirTousSoins: { fr: "Voir tous nos soins", en: "View all services" },
    specialite: { fr: "Notre specialite", en: "Our specialty" },
    semiPermanentTitle1: { fr: "Maquillage", en: "Semi-Permanent" },
    semiPermanentTitle2: { fr: "Semi-Permanent", en: "Makeup" },
    semiPermanentDesc: {
      fr: "Depuis 1993, nous sublimons votre regard grace au maquillage semi-permanent. Formee a Paris aupres des plus grands experts, notre estheticienne maitrise les techniques les plus avancees pour un resultat naturel et durable.",
      en: "Since 1993, we have been enhancing your look with semi-permanent makeup. Trained in Paris by leading experts, our beautician masters the most advanced techniques for a natural and lasting result.",
    },
    semiPermanentItems: {
      fr: [
        "Sourcils \u2014 restructuration et densification",
        "Eye-liner \u2014 regard intense et defini",
        "Levres \u2014 contour et couleur naturelle",
      ],
      en: [
        "Eyebrows \u2014 reshaping and filling",
        "Eyeliner \u2014 intense and defined look",
        "Lips \u2014 contour and natural color",
      ],
    },
    enSavoirPlus: { fr: "En savoir plus", en: "Learn more" },
    temoignages: { fr: "Temoignages", en: "Testimonials" },
    ceQueDisent: { fr: "Ce que disent nos clientes", en: "What our clients say" },
    services: {
      fr: [
        {
          title: "Maquillage Semi-Permanent",
          description: "Sourcils, eye-liner, levres \u2014 un regard sublime au quotidien.",
        },
        {
          title: "Soins du Visage",
          description: "Hydratants, anti-age, eclat \u2014 des protocoles sur-mesure.",
        },
        {
          title: "Massages",
          description: "Relaxants et modelants, une parenthese de bien-etre.",
        },
        {
          title: "Epilation",
          description: "Techniques douces pour une peau nette et soyeuse.",
        },
      ],
      en: [
        {
          title: "Semi-Permanent Makeup",
          description: "Eyebrows, eyeliner, lips \u2014 a refined look every day.",
        },
        {
          title: "Facial Treatments",
          description: "Hydrating, anti-aging, radiance \u2014 customized protocols.",
        },
        {
          title: "Massages",
          description: "Relaxing and sculpting, a moment of well-being.",
        },
        {
          title: "Waxing",
          description: "Gentle techniques for smooth, silky skin.",
        },
      ],
    },
    testimonials: {
      fr: [
        {
          name: "Vaiana M.",
          text: "Leely est mon institut depuis 10 ans. Le semi-permanent des sourcils a change ma routine beaute.",
        },
        {
          name: "Marie-Line T.",
          text: "Un accueil toujours chaleureux et des soins du visage qui font vraiment la difference.",
        },
        {
          name: "Hina R.",
          text: "Le massage relaxant est un pur moment de bonheur. L'ambiance est apaisante, on se sent comme chez soi.",
        },
      ],
      en: [
        {
          name: "Vaiana M.",
          text: "Leely has been my go-to salon for 10 years. The semi-permanent eyebrows changed my beauty routine.",
        },
        {
          name: "Marie-Line T.",
          text: "Always a warm welcome and facial treatments that truly make a difference.",
        },
        {
          name: "Hina R.",
          text: "The relaxing massage is pure bliss. The atmosphere is soothing, you feel right at home.",
        },
      ],
    },
  },

  // Soins page
  soins: {
    nosPrestations: { fr: "Nos prestations", en: "Our services" },
    catalogueTitle: { fr: "Catalogue des Soins", en: "Treatment Catalog" },
    catalogueDesc: {
      fr: "Tous nos soins sont realises sur rendez-vous par des professionnelles qualifiees.",
      en: "All treatments are by appointment only, performed by qualified professionals.",
    },
    tableHeaderSoin: { fr: "Soin", en: "Treatment" },
    tableHeaderDuree: { fr: "Duree", en: "Duration" },
    tableHeaderTarif: { fr: "Tarif", en: "Price" },
    categories: {
      fr: [
        {
          title: "Maquillage Semi-Permanent",
          services: [
            { name: "Sourcils complets", duration: "90 min", price: "25 000" },
            { name: "Eye-liner superieur", duration: "60 min", price: "20 000" },
            { name: "Eye-liner inferieur", duration: "45 min", price: "15 000" },
            { name: "Contour des levres", duration: "60 min", price: "22 000" },
            { name: "Retouche (dans les 3 mois)", duration: "45 min", price: "12 000" },
          ],
        },
        {
          title: "Soins du Visage",
          services: [
            { name: "Soin hydratant", duration: "60 min", price: "8 500" },
            { name: "Soin anti-age premium", duration: "75 min", price: "12 000" },
            { name: "Soin coup d'eclat", duration: "45 min", price: "7 000" },
            { name: "Nettoyage de peau", duration: "60 min", price: "7 500" },
            { name: "Soin contour des yeux", duration: "30 min", price: "5 500" },
          ],
        },
        {
          title: "Massages",
          services: [
            { name: "Massage relaxant", duration: "60 min", price: "9 000" },
            { name: "Massage relaxant", duration: "90 min", price: "13 000" },
            { name: "Modelage drainant", duration: "60 min", price: "9 500" },
            { name: "Massage dos & nuque", duration: "30 min", price: "5 500" },
            { name: "Gommage corps", duration: "30 min", price: "6 000" },
          ],
        },
        {
          title: "Epilation",
          services: [
            { name: "Jambes completes", duration: "30 min", price: "5 500" },
            { name: "Demi-jambes", duration: "20 min", price: "3 500" },
            { name: "Maillot classique", duration: "15 min", price: "3 000" },
            { name: "Maillot integral", duration: "20 min", price: "4 500" },
            { name: "Aisselles", duration: "10 min", price: "2 000" },
            { name: "Bras complets", duration: "20 min", price: "3 000" },
            { name: "Visage (levre + sourcils)", duration: "15 min", price: "2 500" },
            { name: "Sourcils", duration: "10 min", price: "1 500" },
          ],
        },
        {
          title: "Beaute des Mains & Pieds",
          services: [
            { name: "Manucure complete", duration: "45 min", price: "4 500" },
            { name: "Pedicure complete", duration: "45 min", price: "5 000" },
            { name: "Pose vernis semi-permanent mains", duration: "45 min", price: "5 500" },
            { name: "Pose vernis semi-permanent pieds", duration: "45 min", price: "5 500" },
            { name: "Depose vernis semi-permanent", duration: "20 min", price: "2 000" },
          ],
        },
        {
          title: "Maquillage",
          services: [
            { name: "Maquillage jour", duration: "30 min", price: "5 000" },
            { name: "Maquillage soiree / evenement", duration: "45 min", price: "7 000" },
            { name: "Maquillage mariee", duration: "60 min", price: "12 000" },
            { name: "Cours de maquillage", duration: "60 min", price: "8 000" },
          ],
        },
      ],
      en: [
        {
          title: "Semi-Permanent Makeup",
          services: [
            { name: "Full eyebrows", duration: "90 min", price: "25 000" },
            { name: "Upper eyeliner", duration: "60 min", price: "20 000" },
            { name: "Lower eyeliner", duration: "45 min", price: "15 000" },
            { name: "Lip contour", duration: "60 min", price: "22 000" },
            { name: "Touch-up (within 3 months)", duration: "45 min", price: "12 000" },
          ],
        },
        {
          title: "Facial Treatments",
          services: [
            { name: "Hydrating facial", duration: "60 min", price: "8 500" },
            { name: "Premium anti-aging facial", duration: "75 min", price: "12 000" },
            { name: "Radiance boost facial", duration: "45 min", price: "7 000" },
            { name: "Deep cleansing facial", duration: "60 min", price: "7 500" },
            { name: "Eye contour treatment", duration: "30 min", price: "5 500" },
          ],
        },
        {
          title: "Massages",
          services: [
            { name: "Relaxing massage", duration: "60 min", price: "9 000" },
            { name: "Relaxing massage", duration: "90 min", price: "13 000" },
            { name: "Draining body sculpt", duration: "60 min", price: "9 500" },
            { name: "Back & neck massage", duration: "30 min", price: "5 500" },
            { name: "Body scrub", duration: "30 min", price: "6 000" },
          ],
        },
        {
          title: "Waxing",
          services: [
            { name: "Full legs", duration: "30 min", price: "5 500" },
            { name: "Half legs", duration: "20 min", price: "3 500" },
            { name: "Classic bikini", duration: "15 min", price: "3 000" },
            { name: "Full bikini", duration: "20 min", price: "4 500" },
            { name: "Underarms", duration: "10 min", price: "2 000" },
            { name: "Full arms", duration: "20 min", price: "3 000" },
            { name: "Face (lip + eyebrows)", duration: "15 min", price: "2 500" },
            { name: "Eyebrows", duration: "10 min", price: "1 500" },
          ],
        },
        {
          title: "Hands & Feet",
          services: [
            { name: "Full manicure", duration: "45 min", price: "4 500" },
            { name: "Full pedicure", duration: "45 min", price: "5 000" },
            { name: "Semi-permanent nail polish (hands)", duration: "45 min", price: "5 500" },
            { name: "Semi-permanent nail polish (feet)", duration: "45 min", price: "5 500" },
            { name: "Semi-permanent polish removal", duration: "20 min", price: "2 000" },
          ],
        },
        {
          title: "Makeup",
          services: [
            { name: "Daytime makeup", duration: "30 min", price: "5 000" },
            { name: "Evening / event makeup", duration: "45 min", price: "7 000" },
            { name: "Bridal makeup", duration: "60 min", price: "12 000" },
            { name: "Makeup lesson", duration: "60 min", price: "8 000" },
          ],
        },
      ],
    },
    categoryIds: ["semi-permanent", "visage", "massages", "epilation", "mains-pieds", "maquillage"],
    categoryImages: [
      "https://imgs.search.brave.com/kMKypnZZVNgp-ZZHVhK5NIQpdDOXDzv3XeJ__48LZIo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9lc3Ro/ZXRpcXVlLXRyZW1v/aWxsZS5jb20vYXBw/L3VwbG9hZHMvMjAy/Mi8xMi9zb3VyY2ls/cy10cmVtb2lsbGUt/cGFyaXMtMS1zY2Fs/ZWQuanBn",
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80",
      "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=600&q=80",
      "https://imgs.search.brave.com/TdYV_s7dM6am6rr1fwzMoIORXFzmqeMZTbHzmThiSKk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cGhvdG9zLXByZW1p/dW0vbWFpdHJlLWFw/cGxpcXVlLWNpcmUt/ZXBpbGVyLXJvc2Ut/amFtYmUtamV1bmUt/ZmVtbWUtcG91ci1l/cGlsYXRpb24tZXBp/bGF0aW9uLWNpcmVf/Mjg5ODM2LTY1Ni5q/cGc_c2VtdD1haXNf/aHlicmlkJnc9NzQw/JnE9ODA",
      "https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=600&q=80",
      "https://imgs.search.brave.com/6CZ77rNJVssUnmmDw_Ed7BkldBEuggbLE2xcxAf8RWo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA1LzMxLzc0LzYy/LzM2MF9GXzUzMTc0/NjIzMF9vMGpaSTNZ/Y1RtZXZuSnZrZGx5/c2JGTm5TMVA1bVFi/US5qcGc",
    ],
  },

  // A Propos page
  aPropos: {
    notreHistoire: { fr: "Notre histoire", en: "Our story" },
    heroTitle1: { fr: "Un institut de beaute", en: "A beauty salon" },
    heroTitle2: { fr: "au coeur de Papeete", en: "in the heart of Papeete" },
    heroP1: {
      fr: "Depuis 1993, l'Institut de Beaute Leely accueille ses clientes dans un cadre chaleureux et apaisant, au 46 Rue Georges Lagarde a Papeete.",
      en: "Since 1993, Institut de Beaute Leely has welcomed its clients in a warm and soothing setting, at 46 Rue Georges Lagarde in Papeete.",
    },
    heroP2: {
      fr: "Fonde par une passionnee de l'esthetique, l'institut s'est rapidement impose comme une reference a Tahiti, notamment grace a son expertise unique en maquillage semi-permanent.",
      en: "Founded by a beauty enthusiast, the salon quickly established itself as a reference in Tahiti, thanks to its unique expertise in semi-permanent makeup.",
    },
    ceQuiNousAnime: { fr: "Ce qui nous anime", en: "What drives us" },
    nosValeurs: { fr: "Nos valeurs", en: "Our values" },
    values: {
      fr: [
        {
          title: "Expertise",
          text: "Plus de 30 ans de pratique et des formations regulieres a Paris pour rester a la pointe des techniques.",
        },
        {
          title: "Bienveillance",
          text: "Un accueil chaleureux et personnalise. Chaque cliente est unique et merite toute notre attention.",
        },
        {
          title: "Qualite",
          text: "Des produits professionnels selectionnes avec soin et des protocoles rigoureux pour des resultats durables.",
        },
      ],
      en: [
        {
          title: "Expertise",
          text: "Over 30 years of practice and regular training in Paris to stay at the forefront of techniques.",
        },
        {
          title: "Care",
          text: "A warm and personalized welcome. Every client is unique and deserves our full attention.",
        },
        {
          title: "Quality",
          text: "Carefully selected professional products and rigorous protocols for lasting results.",
        },
      ],
    },
    notreParcours: { fr: "Notre parcours", en: "Our journey" },
    momentsCles: { fr: "Les moments cles", en: "Key milestones" },
    milestones: {
      fr: [
        { year: "1993", text: "Ouverture de l'Institut de Beaute Leely a Papeete." },
        { year: "1998", text: "Premieres formations en maquillage semi-permanent a Paris." },
        { year: "2005", text: "Formations avancees \u2014 techniques de derniere generation." },
        { year: "2024", text: "Plus de 30 ans au service de la beaute a Tahiti." },
      ],
      en: [
        { year: "1993", text: "Opening of Institut de Beaute Leely in Papeete." },
        { year: "1998", text: "First semi-permanent makeup training in Paris." },
        { year: "2005", text: "Advanced training \u2014 latest generation techniques." },
        { year: "2024", text: "Over 30 years serving beauty in Tahiti." },
      ],
    },
    formationContinue: { fr: "Formation continue", en: "Ongoing training" },
    formeeParLesMeilleurs: { fr: "Formee par les meilleurs", en: "Trained by the best" },
    formationDesc: {
      fr: "Notre expertise en maquillage semi-permanent repose sur des formations dispensees par les plus grands noms du secteur a Paris.",
      en: "Our semi-permanent makeup expertise is built on training by the biggest names in the industry in Paris.",
    },
    formationItems: {
      fr: [
        "2 formations avec Bruno \u2014 pionnier du semi-permanent",
        "2 formations avec Melanie \u2014 techniques avancees",
        "2 formations avec Jen \u2014 dernieres innovations",
      ],
      en: [
        "2 training sessions with Bruno \u2014 semi-permanent pioneer",
        "2 training sessions with Melanie \u2014 advanced techniques",
        "2 training sessions with Jen \u2014 latest innovations",
      ],
    },
  },

  // Contact page
  contact: {
    nousTrouver: { fr: "Nous trouver", en: "Find us" },
    contactezNous: { fr: "Contactez-nous", en: "Contact us" },
    contactDesc: {
      fr: "Prenez rendez-vous par telephone ou passez nous voir directement a l'institut.",
      en: "Book an appointment by phone or visit us directly at the salon.",
    },
    telephone: { fr: "Telephone", en: "Phone" },
    surRdv: { fr: "Sur rendez-vous", en: "By appointment" },
    adresse: { fr: "Adresse", en: "Address" },
    rueAirFrance: { fr: "(Rue d'Air France)", en: "(Air France Street)" },
    parkingGratuit: { fr: "Parking gratuit en face", en: "Free parking across the street" },
    horaires: { fr: "Horaires d'ouverture", en: "Opening hours" },
    messenger: { fr: "Messenger", en: "Messenger" },
    envoyerMessage: { fr: "Envoyer un message", en: "Send a message" },
    facebook: { fr: "Facebook", en: "Facebook" },
  },
} as const;
