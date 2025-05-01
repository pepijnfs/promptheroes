// services/trainingService.ts

export type Training = {
  id: string;
  title: string;
  subtitle: string;
  imageSrc: string;
  date: string;
  duration: string;
  location: string;
  isComingSoon: boolean;
  description: string;
  contentSections: {
    title: string;
    items: string[];
  }[];
  benefits: string[];
}

// Training data
export const trainings: Training[] = [
  {
    id: "introductie-ai",
    title: "Introductie AI",
    subtitle: "Geef je team een sterke basis in AI en leer hoe zij het direct kunnen toepassen in hun dagelijkse werk",
    imageSrc: "https://promptpilot.nl/600x400/1a1a2e/ffffff?text=Introductie+AI",
    date: "Flexibel - op aanvraag",
    duration: "Gemiddeld 3 uur",
    location: "In-company of online",
    isComingSoon: false,
    description: "Deze training biedt een praktische en toegankelijke introductie tot AI voor software developers. Je leert de fundamentele concepten, krijgt inzicht in de verschillende AI-tools die beschikbaar zijn, en ontdekt hoe je AI direct kunt inzetten om je productiviteit te verhogen.",
    contentSections: [
      {
        title: "Basis van AI voor developers",
        items: [
          "Wat is AI en machine learning",
          "Hoe werken LLMs",
          "AI-tools voor developers",
          "Ethiek en verantwoord AI-gebruik"
        ]
      },
      {
        title: "Praktische toepassingen",
        items: [
          "Code genereren met AI",
          "Debuggen met AI-assistentie",
          "Documentatie verbeteren",
          "Samenwerken met AI-tools"
        ]
      },
      {
        title: "Hands-on workshop",
        items: [
          "Aan de slag met AI-tools",
          "Oefeningen voor optimaal gebruik",
          "Feedback en best practices",
          "Q&A sessie"
        ]
      }
    ],
    benefits: [
      "Versnelde ontwikkeling",
      "Accurate en robuuste code",
      "Verbeterde documentatie",
      "Efficiëntere debugging",
      "Meer tijd voor complexe taken"
    ]
  },
  {
    id: "cursor",
    title: "Cursor",
    subtitle: "Verhoog de productiviteit van je team door effectief gebruik van Cursor in hun development workflow.",
    imageSrc: "https://promptpilot.nl/600x400/1a1a2e/ffffff?text=Cursor",
    date: "Flexibel - op aanvraag",
    duration: "Gemiddeld 4 uur",
    location: "In-company of online",
    isComingSoon: false,
    description: "Deze praktische training helpt je team om optimaal gebruik te maken van Cursor, de AI-gestuurde code-editor. Leer hoe je met Cursor sneller en beter kunt programmeren, bugs kunt opsporen en code kunt refactoren met behulp van geavanceerde AI-functionaliteiten.",
    contentSections: [
      {
        title: "Introductie tot Cursor",
        items: [
          "Wat is Cursor",
          "Installatie en configuratie",
          "Interface en functionaliteiten",
          "Integratie met workflows"
        ]
      },
      {
        title: "Werken met Cursor AI",
        items: [
          "Code genereren en wijzigen met AI",
          "Effectieve prompts schrijven",
          "Code begrijpen en uitleggen",
          "Debugging en troubleshooting"
        ]
      },
      {
        title: "Geavanceerde technieken",
        items: [
          "Refactoring met AI-assistentie",
          "Documentatie genereren",
          "Testen schrijven met AI",
          "Workflow optimalisatie"
        ]
      },
      {
        title: "Praktische workshop",
        items: [
          "Hands-on oefeningen",
          "Real-world scenario's",
          "Best practices en tips",
          "Q&A sessie"
        ]
      }
    ],
    benefits: [
      "Tot 30% hogere productiviteit",
      "Snellere onboarding",
      "Consistentere codebase",
      "Effectievere debugging",
      "Meer tijd voor complexe taken"
    ]
  },
  {
    id: "microsoft-copilot",
    title: "Microsoft Copilot",
    subtitle: "Verhoog de productiviteit van je team door effectief gebruik van Microsoft Copilot in hun development workflow",
    imageSrc: "https://promptpilot.nl/600x400/1a1a2e/ffffff?text=Microsoft+Copilot",
    date: "Flexibel - op aanvraag",
    duration: "Gemiddeld 4 uur",
    location: "In-company of online",
    isComingSoon: true,
    description: "Deze training biedt een diepgaand inzicht in Microsoft Copilot voor ontwikkelaars. Leer hoe je deze AI-assistent kunt gebruiken om code te genereren, te debuggen en te verbeteren binnen de Microsoft ecosysteem van ontwikkeltools.",
    contentSections: [
      {
        title: "Introductie tot Microsoft Copilot",
        items: [
          "Wat is Copilot en hoe werkt het",
          "Integratie met VS en VS Code",
          "Configuratie en personalisatie",
          "Vergelijking met andere AI-tools"
        ]
      },
      {
        title: "Werken met Microsoft Copilot",
        items: [
          "Effectieve prompts schrijven",
          "Code voor verschillende talen",
          "Refactoring en verbetering",
          "Documentatie genereren"
        ]
      },
      {
        title: "Geavanceerde toepassingen",
        items: [
          "Integratie met Azure DevOps",
          "CI/CD pipeline optimalisatie",
          "Debugging en troubleshooting",
          "Test automatisering"
        ]
      },
      {
        title: "Praktische workshop",
        items: [
          "Hands-on met echte projecten",
          "Uitdagingen en oplossingen",
          "Best practices",
          "Q&A en begeleiding"
        ]
      }
    ],
    benefits: [
      "Verhoogde code kwaliteit",
      "Snellere implementatie",
      "Verbeterde documentatie",
      "Verminderde bugs",
      "Meer focus op innovatie"
    ]
  },
  {
    id: "windsurf",
    title: "Windsurf",
    subtitle: "Verhoog de productiviteit van je team door effectief gebruik van Windsurf in hun development workflow.",
    imageSrc: "https://promptpilot.nl/600x400/1a1a2e/ffffff?text=Windsurf",
    date: "Flexibel - op aanvraag",
    duration: "Gemiddeld 4 uur",
    location: "In-company of online",
    isComingSoon: true,
    description: "Deze training richt zich op het optimaal benutten van Windsurf, een innovatieve AI-gedreven ontwikkelomgeving. Leer hoe deze tool je kan helpen bij het schrijven, testen en implementeren van code met ongekende snelheid en precisie.",
    contentSections: [
      {
        title: "Introductie tot Windsurf",
        items: [
          "Wat is Windsurf",
          "Installatie en setup",
          "Interface en functionaliteiten",
          "Vergelijking met andere tools"
        ]
      },
      {
        title: "Werken met Windsurf AI",
        items: [
          "Effectieve AI-prompts",
          "Code optimalisatie",
          "Automatische documentatie",
          "Debugging en troubleshooting"
        ]
      },
      {
        title: "Geavanceerde technieken",
        items: [
          "Integratie met CI/CD pipelines",
          "Automatiseren van taken",
          "Cross-platform ontwikkeling",
          "Performance optimalisatie"
        ]
      },
      {
        title: "Praktische workshop",
        items: [
          "Hands-on met voorbeelden",
          "Teamwork features",
          "Best practices",
          "Q&A en begeleiding"
        ]
      }
    ],
    benefits: [
      "Snellere development cycles",
      "Betere code kwaliteit",
      "Effectievere samenwerking",
      "Minder tijd aan routine taken",
      "Meer focus op business value"
    ]
  }
];

export const getTrainingById = (id: string): Training | undefined => {
  return trainings.find(training => training.id === id);
};

export const getRelatedTrainings = (id: string, limit: number = 3): Training[] => {
  // Filter out the current training and return a limited number of related trainings
  return trainings
    .filter(training => training.id !== id)
    .slice(0, limit);
}; 