import { PortfolioData } from "./types";

export const PORTFOLIO_DATA: { fr: PortfolioData; en: PortfolioData } = {
  fr: {
    name: "Aurore Dang Vu",
    title: "Junior Product Innovation Marketing",
    objective: "Recherche d'un Contrat à Durée Indéterminée (CDI) — Début Septembre 2026",
    profileText: "Passionnée par l'industrie des soins de la peau (skincare), je recherche une opportunité en CDI dans le marketing de l'innovation produit. Mon objectif est de contribuer au développement de soins cosmétiques performants, sensoriels et parfaitement adaptés aux attentes des consommateurs. Animée par la rigueur scientifique et la recherche de l'excellence en dermo-cosmétique, intégrer vos équipes me permettrait d'évoluer au sein d'un environnement exigeant et inspirant.",
    experiences: [
      {
        company: "Biologique Recherche",
        role: "Apprentie Assistante Développement Produits Cosmétiques",
        period: "Sept 2024 - Août 2025",
        tagline: "Marque emblématique de dermo-cosmétique haut de gamme, réputée pour sa méthodologie clinique.",
        category: "Skincare",
        bulletPoints: [
          "Pilotage de projets d'innovation et de rénovation de produits, en accord avec l'ADN de la marque et les nouvelles chartes artistiques.",
          "Coordination transversale entre la R&D, le Packaging, les Affaires Réglementaires, les Achats et le Studio de Création pour la rédaction et la validation des briefs produits.",
          "Optimisation du portefeuille produits (analyses de rationalisation, reformulations, arrêts de gammes ou repositionnements stratégiques).",
          "Analyse continue des performances des produits, des catégories et de la marque globale pour guider les choix stratégiques.",
          "Veille concurrentielle et études de marché régulières sur les segments Premium, Luxe et Dermo-cosmétique.",
          "Support quotidien aux chefs de produit grâce à une double expertise en physiologie cutanée et mise à jour des supports visuels de marque."
        ],
        skills: ["Formulation Skincare", "Management Transversal", "Réglementation Cosmétique", "Analyses de Portefeuille", "Veille Dermo-cosmétique"],
        logoColor: "from-blue-900 to-indigo-950"
      },
      {
        company: "L'Oréal Produits Professionnels",
        role: "Apprentie Chargée d'Études Consumer Insights & Marché",
        period: "Oct 2023 - Août 2024",
        tagline: "Leader mondial de la beauté, division des produits professionnels à destination des salons et particuliers.",
        category: "Consumer Insights",
        bulletPoints: [
          "Élaboration et suivi d'études qualitatives et quantitatives ad-hoc pour identifier les besoins des consommateurs et professionnels de la coiffure.",
          "Animation d'entretiens qualitatifs individuels pour décrypter les perceptions consommateurs face aux innovations capillaires.",
          "Validation des concepts marketing, claims et moodboards mis à l'épreuve lors des études consommateurs.",
          "Interface clé avec les instituts d'études externes et les équipes marketing internes pour le bon déploiement des projets.",
          "Extraction, analyse et synthèse de données complexes pour formuler des recommandations stratégiques activables.",
          "Suivi et analyse de la réputation de marque grâce aux avis consommateurs (ratings & reviews).",
          "Création de la newsletter interne 'Hair's the Thing...', diffusant les insights clés et tendances fortes à l'ensemble des équipes."
        ],
        skills: ["Études de Marché", "Interviews Qualitatives", "Analyses de Données", "Newsletter Éditoriale", "Ratings & Reviews"],
        logoColor: "from-slate-800 to-black"
      },
      {
        company: "Byredo (Puig)",
        role: "Stagiaire Assistante Développement Produits Maquillage",
        period: "Janv 2024 - Juin 2024",
        tagline: "Marque de niche de luxe suédoise, réputée pour sa vision artistique, sous l'égide du groupe Puig.",
        category: "Makeup",
        bulletPoints: [
          "Suivi opérationnel des lancements et développements de produits de maquillage pour les catégories teint, lèvres et yeux.",
          "Coordination étroite avec la maison mère PUIG et les équipes Byredo (Réglementaire, Achats, Packaging).",
          "Création et validation de briefs de création graphiques (mockups, artworks) auprès des agences et studios créatifs.",
          "Recherches créatives et séances d'idéation (recherche de noms de produits, création de moodboards de collection).",
          "Formulation de concepts innovants pour les campagnes digitales en parfait alignement avec l'ADN transgressif de Byredo.",
          "Analyse concurrentielle pointue (benchmarks, cartographie des assortiments, structure de prix, stratégies de lancements).",
          "Rédaction de rapports de veille mensuels sur les innovations maquillage et les meilleures pratiques du secteur."
        ],
        skills: ["Brief Créatif", "Benchmark Luxe", "Suivi Industriel", "Recherche Conceptuelle", "Nomenclature Maquillage"],
        logoColor: "from-amber-950 to-neutral-950"
      }
    ],
    hardSkills: [
      {
        category: "Outils de Recherche & Insights",
        items: ["Ratings & Reviews", "Talkwalker", "Usage & Attitude", "Brand Intex Tracker"]
      },
      {
        category: "Outils de Création",
        items: ["Canva", "Adobe Creative Suite", "Canva Pro", "Office 365 Pack"]
      },
      {
        category: "Gestion de Projet & Organisation",
        items: ["Notion", "Trello", "Méthodes Agiles", "Planification de Sprints"]
      }
    ],
    softSkills: [
      "Écoute active & empathie consommateur",
      "Esprit d'analyse aiguisé & esprit de synthèse",
      "Autonomie & prise d'initiative constante",
      "Gestion multi-projets sous contrainte de temps"
    ],
    education: [
      {
        school: "ESCE Paris",
        period: "2024 - 2026",
        degree: "Master en Marketing International du Consommateur",
        details: [
          "Matières clés : Communication marketing globale, Management stratégique de marque, Marketing Mix opérationnel, Design de packaging.",
          "Projets majeurs : Lancement fictif de concept d'innovation, études d'attractivité internationale."
        ]
      },
      {
        school: "Paris School of Luxury",
        period: "2021 - 2024",
        degree: "BBA en Management de la Communication du Luxe",
        details: [
          "Matières clés : ADN de marque de luxe, codes de la communication sélective, évènementiel de prestige.",
          "Séminaires intensifs : Creative Weeks & Sprints créatifs collaboratifs avec des grandes maisons de luxe."
        ]
      }
    ],
    languages: [
      { name: "Français", level: "Langue Maternelle", badge: "FR" },
      { name: "Vietnamien", level: "Langue Maternelle", badge: "VN" },
      { name: "Anglais", level: "Courant / Profil Professionnel", badge: "EN" },
      { name: "Chinois Mandarin", level: "En cours d'apprentissage", badge: "ZH" }
    ]
  },
  en: {
    name: "Aurore Dang Vu",
    title: "Junior Product Innovation Marketing",
    objective: "Looking for a Permanent Contract (CDI) — Starting September 2026",
    profileText: "Passionate about the skincare industry, I am seeking a permanent position in product innovation marketing to help develop effective, sensorial products that meet consumer expectations. Driven by science and skincare excellence, joining your team would allow me to learn, grow, and contribute in a demanding and inspiring environment.",
    experiences: [
      {
        company: "Biologique Recherche",
        role: "Apprenticeship | Beauty Product Development Assistant",
        period: "Sept 2024 - Aug 2025",
        tagline: "Iconic premium skincare brand, world-renowned for its clinical and customized methodology.",
        category: "Skincare",
        bulletPoints: [
          "Delivered product innovation & renovation projects, perfectly aligned with brand DNA and artistic creative guidelines.",
          "Led cross-functional coordination including R&D, Packaging, Regulatory, Purchase & Creative studio teams to complete briefs and validate.",
          "Optimized the core product portfolio by managing discontinuations and driving reformulation, merge, cut, or repositioning decisions.",
          "Analyzed product, category, and brand performance metrics to guide strategic commercial and identity priorities.",
          "Ran continuous market & trend intelligence across luxury/premium and clinical dermo-cosmetic segments.",
          "Supported Senior Product Managers with strong skin biology expertise and updated key product decks."
        ],
        skills: ["Skincare Formulation", "Cross-functional Coordination", "Cosmetics Regulation", "Portfolio Assessment", "Dermo-cosmetic Analytics"],
        logoColor: "from-blue-900 to-indigo-950"
      },
      {
        company: "L'Oréal Professional Products",
        role: "Apprenticeship | Marketing Consumer Insight Apprentice",
        period: "Oct 2023 - Aug 2024",
        tagline: "Global beauty leader, professional products division serving premium hair salons and retail.",
        category: "Consumer Insights",
        bulletPoints: [
          "Briefed and closely monitored quantitative and qualitative ad-hoc studies for both consumer segments and hairdressing professionals.",
          "Conducted individual qualitative interviews to gather consumer insights regarding brand perception and novel formulas.",
          "Validated testing materials during consumer studies (moodboards, creative concepts, claims).",
          "Interfaced as a leading contact with research agencies and internal marketing groups for study operations.",
          "Extracted and deeply analyzed complex consumer data to establish highly actionable marketing recommendations.",
          "Tracked ongoing brand perception and social sentiment via ratings & reviews analysis.",
          "Created 'Hair's the Thing...' internal interactive newsletter to make market insights and trend reports accessible to global teams."
        ],
        skills: ["Market Research", "Qualitative Interviews", "Data Analytics", "Editorial Newsletter", "Ratings & Reviews"],
        logoColor: "from-slate-800 to-black"
      },
      {
        company: "Byredo (Puig)",
        role: "Internship | Make Up Product Development Assistant",
        period: "Jan 2024 - June 24",
        tagline: "High-end luxury niche brand, known for its outstanding artistic vision, within the Puig group.",
        category: "Makeup",
        bulletPoints: [
          "Supported core product development projects for face, lip, and eye make-up categories.",
          "Coordinated production status and timelines across PUIG and Byredo departments (Regulatory, Purchasing, Packaging).",
          "Created and validated comprehensive creative briefs (mockups, design assets, artworks) in partnership with creative studios.",
          "Conducted artistic conceptual research: curated product names, developed color charts and moodboards.",
          "Recommended innovative concepts for digital marketing activations, matching Byredo's selective brand identity.",
          "Monitored competitive make-up landscape: benchmark, price reviews, assortment mapping, and beauty launch strategies.",
          "Authored monthly intelligence reports detailing cosmetic product launches and global industry best practices."
        ],
        skills: ["Creative Briefing", "Luxury Benchmarks", "Industrial Operations", "Conceptual Research", "Makeup Nomenclature"],
        logoColor: "from-amber-950 to-neutral-950"
      }
    ],
    hardSkills: [
      {
        category: "Insights & Consumer Research",
        items: ["Ratings & Reviews", "Talkwalker", "Usage & Attitude", "Brand Intex Tracker"]
      },
      {
        category: "Creative & Production Tools",
        items: ["Canva", "Adobe Creative Suite", "Canva Pro", "Office 365 Suite"]
      },
      {
        category: "Project & Organization Systems",
        items: ["Notion", "Trello", "Agile Frameworks", "Sprint Planning"]
      }
    ],
    softSkills: [
      "Active listening & deep empathy for consumer issues",
      "Sharp analytical proficiency & strong synthesising skills",
      "High autonomy & proactive initiative-taking mindset",
      "Managing multiple complex projects within strict timelines"
    ],
    education: [
      {
        school: "ESCE Paris",
        period: "2024 - 2026",
        degree: "Master's in International Consumer Marketing",
        details: [
          "Core competencies: Marketing communication, strategic brand management, marketing mix, packaging design.",
          "Major Projects: Fictional innovative product launch, international market entry feasibility assessments."
        ]
      },
      {
        school: "Paris School of Luxury",
        period: "2021 - 2024",
        degree: "BBA in Luxury Communication Management",
        details: [
          "Core competencies: Luxury brand identity, selective advertising codes, high-status event organization.",
          "Practical Highlights: Creative Weeks & sprint collaborations directly with legendary luxury houses."
        ]
      }
    ],
    languages: [
      { name: "French", level: "Native Speaker", badge: "FR" },
      { name: "Vietnamese", level: "Native Speaker", badge: "VN" },
      { name: "English", level: "Professional Proficiency", badge: "EN" },
      { name: "Mandarin Chinese", level: "Currently learning", badge: "ZH" }
    ]
  }
};

export const CHAT_SUGGESTIONS = {
  fr: [
    { text: "Quelles sont ses expériences en soins cosmétiques ?", label: "Skincare" },
    { text: "Est-elle disponible pour un poste dès maintenant ?", label: "Disponibilité" },
    { text: "Qu'a-t-elle réalisé chez Biologique Recherche ?", label: "Expérience" },
    { text: "Comment la contacter ou planifier un entretien ?", label: "Contact" }
  ],
  en: [
    { text: "What are her skincare industry experiences?", label: "Skincare" },
    { text: "When is she available to join a team?", label: "Availability" },
    { text: "What did she achieve at Biologique Recherche?", label: "Experience" },
    { text: "How can I contact her or schedule an interview?", label: "Contact" }
  ]
};
