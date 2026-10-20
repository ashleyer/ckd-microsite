export interface RecipientProfile {
  // Identity & Privacy
  isAnonymized: boolean;
  displayName: string;
  realName: string;
  pseudonymTitle: string;
  age: number | string;
  location: string;
  bloodType: string;
  gfrScore: string;
  transplantCenter: string;
  micrositeSlug: string;
  contactProxyEmail: string;

  // Recipient / Advocate to receive executed DocuSign copies
  docusignRecipientEmail: string;

  // 1. His Story
  hisStory: {
    title: string;
    headline: string;
    bioSummary: string;
    personalityTraits: { trait: string; description: string; emoji: string }[];
    favoriteHumorQuotes: string[];
    whatPeopleLoveAboutHim: string;
    diagnosisStory: string;
    milestones: { date: string; title: string; detail: string; status: 'completed' | 'ongoing' | 'upcoming' }[];
  };

  // 2. His Career
  hisCareer: {
    title: string;
    profession: string;
    workEthic: string;
    companyOrField: string;
    workHighlights: string[];
    workplaceStories: { title: string; story: string }[];
    careerAspirationsPostTransplant: string;
  };

  // 3. Community Impact
  communityImpact: {
    title: string;
    overview: string;
    initiatives: {
      title: string;
      role: string;
      impactMetric: string;
      description: string;
      quote: string;
    }[];
  };

  // 4. Comedy
  comedy: {
    title: string;
    tagline: string;
    standupJourney: string;
    favoriteBits: { title: string; setup: string; punchline: string; venue: string }[];
    philosophyOnLaughter: string;
  };

  // 5. Writings
  writings: {
    title: string;
    tagline: string;
    essays: {
      title: string;
      date: string;
      topic: string;
      snippet: string;
      readTime: string;
    }[];
  };

  // 6. Travels
  travels: {
    title: string;
    tagline: string;
    adventures: {
      destination: string;
      year: string;
      highlight: string;
      memory: string;
      photo: string;
    }[];
  };

  // 7. Family and Friends (Named people besides Ben with placeholder images)
  friendsAndFamily: {
    title: string;
    supportSquadOverview: string;
    members: {
      name: string;
      relation: string;
      photo: string;
      blurb: string;
      funnyTrait: string;
      quote: string;
    }[];
    familyTraditions: string;
    whyFamilyCannotDonateSummary: string;
  };

  // 8. Hobbies
  hobbies: {
    title: string;
    items: {
      name: string;
      icon: string;
      description: string;
      funnyFact: string;
    }[];
    kitchenDisastersOnRenalDiet: string;
  };

  // 9. Dreams (Bucket List)
  dreams: {
    title: string;
    bucketList: {
      rank: number;
      goal: string;
      category: string;
      whyItMatters: string;
      humorNote: string;
    }[];
    tenYearVision: string;
    lifePledge: string;
  };

  // Clinical Disclosure (No dialysis mentions!)
  diagnosis: string;
  currentTreatment: {
    modality: string;
    schedule: string;
    accessType: string;
    fluidRestriction: string;
    managementClinic: string;
    treatmentHumorNotes: string;
  };

  medicalTeam: {
    nephrologist: string;
    transplantSurgeon: string;
    donorCoordinator: string;
    socialWorker: string;
    hospitalNetwork: string;
  };

  prognosis: {
    renalFailureNote: string;
    transplantSuccessNote: string;
    clinicalOutlook: string;
    donorKidneyLongevity: string;
  };

  // Why You Should Help (With Heart & Humor)
  whyYouShouldHelp: {
    id: string;
    title: string;
    description: string;
    humorTag: string;
  }[];

  // How You Can Help
  howYouCanHelp: {
    id: string;
    stepNumber: string;
    actionTitle: string;
    description: string;
    timeCommitment: string;
    cost: string;
  }[];

  // Story Elements
  primaryStory: string;
  familyExplanation: string;
  hopesAndDreams: string;
  effortsMade: string;
  customNotes: string;
}

export interface GoogleOAuthUser {
  provider: 'google';
  email: string;
  name: string;
  picture?: string;
  idToken?: string;
  authenticatedAt: string;
}

export interface SignedNDA {
  isSigned: boolean;
  signerName: string;
  signerEmail: string;
  signerTitle: string;
  signatureType: 'draw' | 'type';
  signatureText: string;
  signedAt: string;
  envelopeId: string;
  certificateId: string;
  securityHash: string;
  agreedClauses: {
    confidentiality: boolean;
    noHarassment: boolean;
    hipaaRespect: boolean;
    altruismNotaLaw: boolean;
    noCeleryJuiceAdvice: boolean;
  };
  recipientCopyEmail?: string;
  recipientCopyStatus?: 'pending' | 'sent' | 'delivered';
  recipientCopySentAt?: string;
  oauthUser?: GoogleOAuthUser | null;
}

export interface CommunityTestimonial {
  id: string;
  authorName: string;
  relationship: string;
  photo?: string;
  isAnonymous: boolean;
  avatarBg: string;
  avatarText: string;
  quote: string;
  detailStory: string;
  date: string;
  upvotes: number;
  hasUpvoted?: boolean;
}

export interface EmailSubscriber {
  email: string;
  frequency: 'weekly' | 'milestones_only' | 'urgent_calls';
  firstName?: string;
  notifyOnMatch: boolean;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  title: string;
  caption: string;
  tag: string;
  year: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'donation' | 'costs' | 'recovery' | 'paired_exchange' | 'privacy';
}
