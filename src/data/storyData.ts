import { RecipientProfile, CommunityTestimonial, FAQItem, GalleryImage } from '../types';

export const defaultRecipientProfile: RecipientProfile = {
  isAnonymized: true,
  displayName: 'Candidate A. (Recipient #BOS-774)',
  realName: 'Alex Miller',
  pseudonymTitle: 'The Anonymous Woodworker & Youth Coach',
  age: 44,
  location: 'Greater Boston, MA',
  bloodType: 'O+ (Eligible for NKR Paired Exchange with ANY Blood Type)',
  gfrScore: '8 mL/min (Stage 5 Renal Failure)',
  transplantCenter: 'MGH Transplant Center',
  micrositeSlug: 'mgh-candidate-alex',
  contactProxyEmail: 'advocate-relay@kidneyseeker-vault.org',
  docusignRecipientEmail: 'advocate-relay@kidneyseeker-vault.org',

  // SECTION 1: HIS STORY
  hisStory: {
    title: 'His Story: The Person Behind the Lab Numbers',
    headline: 'Quick with a Tape Measure, Quicker with a Joke, Relentlessly Optimistic.',
    bioSummary: `Long before his kidneys staged an unprovoked walkout, Alex was the person neighbors called when their snowblower stopped running, when youth sports needed an energetic volunteer coach, or when someone needed a calm, clear-headed friend in a crisis. Despite living with Stage 5 End-Stage Renal Disease and a GFR of 8 mL/min, he continues to show up for everyone around him, cracking dry jokes in the waiting room and keeping his spirits stubbornly high.`,
    personalityTraits: [
      {
        trait: 'Generous Craftsmanship',
        description: 'Measures twice, cuts once, and gives away custom Adirondack chairs to neighbors without asking for a dime.',
        emoji: '🪚'
      },
      {
        trait: 'Unshakable Optimism',
        description: 'Tackles severe chronic illness through sharp observational humor and fierce dedication to his family.',
        emoji: '☀️'
      },
      {
        trait: 'Laughter as Medicine',
        description: 'Firmly believes that if you can laugh through 15 vials of blood draws at MGH, disease loses its power.',
        emoji: '😄'
      },
      {
        trait: 'The Guy Who Always Shows Up',
        description: 'Even on low-energy days, he will cheer from the sideline bleachers with a wool blanket and hot tea.',
        emoji: '🏆'
      }
    ],
    favoriteHumorQuotes: [
      '"I asked my nephrologist at MGH if coffee counts toward my hydration goals. She gave me a look that can only be described as clinical disappointment."',
      '"My kidneys are currently operating at 8% capacity, which is also the exact percentage of battery power my phone is on when I need GPS the most."',
      '"If you give me a kidney, I promise to write you into my will for all my unfinished woodworking projects."'
    ],
    whatPeopleLoveAboutHim: `Alex never lets illness become his identity. While his lab tests reflect severe kidney failure, his presence is still defined by warm encouragement, spontaneous dad jokes, and a genuine interest in other people's lives.`,
    diagnosisStory: `In late 2024, routine blood panels revealed that Alex's glomerular filtration rate (GFR) had quietly tumbled into the single digits due to progressive glomerulonephritis. The diagnosis was jarring, but his reaction was characteristically pragmatic: learn the science, follow every medical restriction to the millimeter, and search for a living kidney donor through the MGH Transplant Center.`,
    milestones: [
      {
        date: 'November 2024',
        title: 'Initial Diagnosis at MGH',
        detail: 'GFR registered at 14 mL/min; confirmed progressive chronic kidney disease.',
        status: 'completed'
      },
      {
        date: 'March 2025',
        title: 'Full MGH Transplant Workup',
        detail: 'Cardiology, nephrology, oncology, and immunological clearances approved at Massachusetts General Hospital.',
        status: 'completed'
      },
      {
        date: 'October 2025',
        title: 'Official Living Donor Search Launch',
        detail: 'Microsite and National Kidney Registry paired-exchange network campaign activated.',
        status: 'ongoing'
      },
      {
        date: 'Target: 2026',
        title: 'Successful Living Donor Transplant',
        detail: 'Immediate graft function at MGH Transplant Center, liberation from medical limits, and celebration in Hawaii!',
        status: 'upcoming'
      }
    ]
  },

  // SECTION 2: HIS CAREER
  hisCareer: {
    title: 'His Career & Craftsmanship',
    profession: 'Custom Woodworker & Renovation Project Lead',
    companyOrField: 'Beacon Hill Custom Woodcraft & Architectural Restorations',
    workEthic: `Dependable, methodical, and deeply respected by architects and apprentices alike. Alex approaches historical wood restorations with the patience of an artisan and the precision of a structural engineer. Even while managing strict renal health protocols, he continues mentoring junior carpenters and planning community workshop sessions.`,
    workHighlights: [
      'Over 18 years restoring historic 19th-century brownstones across Boston and Cambridge.',
      'Specialist in traditional mortise-and-tenon timber framing and handcrafted walnut dining tables.',
      'Co-founded a free neighborhood tool-lending library to help local residents learn basic home repairs.',
      'Recipient of the 2023 New England Architectural Craftsmanship Guild Merit Citation.'
    ],
    workplaceStories: [
      {
        title: 'The Great Mahogany Mantel Rescue',
        story: 'When a historic Beacon Hill hearth mantel was declared unsalvageable after water damage, Alex spent four consecutive weekends hand-carving matching rosettes from 150-year-old reclaimed mahogany so the homeowner would not have to tear it down.'
      },
      {
        title: 'Safety First, Sarcasm Second',
        story: 'Known on job sites for his strict safety rules. His official workshop poster reads: "Eyes, ears, and fingers are non-renewable resources. Protect them or you will be assigned to sweep sawdust for an eternity."'
      }
    ],
    careerAspirationsPostTransplant: `A living donor kidney transplant will restore Alex's full 40-hour physical stamina, eliminate the crushing chronic fatigue of renal toxins, and enable him to lead large-scale historic timber barn restorations across Vermont and Maine.`
  },

  // SECTION 3: COMMUNITY IMPACT
  communityImpact: {
    title: 'Community Impact & Local Giving',
    overview: 'Alex has spent two decades quietly showing up for Greater Boston neighborhoods—not for applause, but because he genuinely believes a community is only as strong as how well neighbors care for each other.',
    initiatives: [
      {
        title: 'Youth Lacrosse Mentorship Program',
        role: 'Volunteer Assistant Coach & Equipment Lead',
        impactMetric: '140+ Youth Athletes Mentored',
        description: 'For eight consecutive spring seasons, Alex has coached youth lacrosse, ensuring that every kid, regardless of financial background, had a stick, cleats, and encouraging words.',
        quote: '"Coach Alex never cared who scored the most goals; he cared who picked up the teammate who tripped."'
      },
      {
        title: 'Neighborhood Tool Co-Op & Repair Café',
        role: 'Co-Founder & Lead Tool Sharpener',
        impactMetric: '650+ Household Repairs Supported',
        description: 'Helped establish a free community tool-lending depot in Somerville, hosting monthly workshops teaching elderly residents and young renters how to fix leaky faucets and sticky doors.',
        quote: '"He saved our local senior center over $10,000 in repair bills just by showing up with his toolbox on Saturdays."'
      },
      {
        title: 'Accessible Ramp Building Initiative',
        role: 'Volunteer Builder with Local Habitat Group',
        impactMetric: '14 Wheelchair Ramps Constructed',
        description: 'Designed and built custom ADA-compliant wooden ramps for elderly and mobility-impaired residents across Metro Boston so they could leave their homes safely.',
        quote: '"When my mother lost her mobility, Alex showed up with lumber on a rainy Sunday morning and refused to leave until the ramp was solid as bedrock."'
      }
    ]
  },

  // SECTION 4: COMEDY
  comedy: {
    title: 'Comedy & The Healing Power of Laughter',
    tagline: 'Because if you cannot laugh at your own dysfunctional organs, who will?',
    standupJourney: `Alex discovered comedy in his late twenties, performing at Boston open-mics and improv theaters like The Comedy Studio and ImprovBoston. His style is warm, observant, and delightfully self-deprecating. Since his diagnosis, comedy has become his fiercest survival tool—a way to turn clinical anxiety into collective joy.`,
    favoriteBits: [
      {
        title: 'The Renal Diet Negotiation',
        setup: 'My nutritionist handed me a list of foods to avoid with kidney disease: tomatoes, bananas, potatoes, dairy, chocolate, and joy.',
        punchline: 'I looked at her and asked, "So for dinner tonight, should I just boil a piece of printer paper, or is paper too high in potassium?"',
        venue: 'Somerville Comedy Lounge'
      },
      {
        title: 'The Organ Donation Elevator Pitch',
        setup: 'Dating in your 40s is hard enough, but trying to casually bring up that you need an organ is a whole new genre of awkward.',
        punchline: '"Hey, I really love your laugh, your taste in movies, and your healthy bilateral renal vasculature. Want to split an appetizer and a compatibility screen?"',
        venue: 'Cambridge Improv Night'
      },
      {
        title: 'The Blood Pressure Cuff Squeeze',
        setup: 'Every nurse at MGH pumps the blood pressure cuff like they are trying to extract fresh juice from my bicep.',
        punchline: '"Ma’am, I promise my systolic number is in there, you don’t have to wring it out like an old dish rag."',
        venue: 'North End Open Mic'
      }
    ],
    philosophyOnLaughter: `"When your body is fighting a chronic battle, taking yourself too seriously is a death sentence for your mental health. A good belly laugh creates real physiological endorphins. If I can make the nurses smile and my family laugh, cancer and kidney failure do not get to dictate the mood in the room."`
  },

  // SECTION 5: WRITINGS
  writings: {
    title: 'Writings & Personal Reflections',
    tagline: 'Essays, field notes, and honest dispatches from the front lines of chronic illness.',
    essays: [
      {
        title: 'The Mathematics of a Second Chance',
        date: 'January 2025',
        topic: 'Living Kidney Donation & Gratitude',
        readTime: '4 min read',
        snippet: 'Most people take their organs for granted—they are silent engines running in the background. But when one begins to sputter, you realize that humanity holds a superpower: we can safely share a spare kidney and grant someone another 25 years of sunrises.'
      },
      {
        title: 'Sawdust and Serenity: What Timber Framing Taught Me About Healing',
        date: 'July 2025',
        topic: 'Woodworking & Patience',
        readTime: '6 min read',
        snippet: 'Wood never grows in straight, predictable grains. It knots, it twists, it absorbs storms. Good carpentry is not about forcing the tree to be something it is not; it is about working with the grain. Chronic disease is the knot in my timber.'
      },
      {
        title: 'An Unsent Letter to an Unknown Stranger',
        date: 'September 2025',
        topic: 'To a Future Living Donor',
        readTime: '5 min read',
        snippet: 'I do not know your name yet, or what coffee shop you like, or why you might choose to read this. But if our paths cross at MGH Transplant Center, I want you to know: you will not just be saving my life; you will be answering the prayers of a nephew, a sister, and a whole room full of people who love me.'
      }
    ]
  },

  // SECTION 6: TRAVELS
  travels: {
    title: 'Travels & Outdoor Adventures',
    tagline: 'Road trips, mountain passes, and the Pacific horizon waiting for him.',
    adventures: [
      {
        destination: 'Acadia National Park, Maine',
        year: 'Fall 2023',
        highlight: 'Sunrise on Cadillac Mountain & Jordan Pond Loop',
        memory: 'Hiked 11 miles with nephew Ben and sister Sarah, catching the first golden sunlight on the US East Coast. Ate popovers with strawberry jam and promised to return every autumn.',
        photo: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80'
      },
      {
        destination: 'White Mountains Presidential Traverse, NH',
        year: 'Summer 2022',
        highlight: 'Summiting Mount Washington with Marcus',
        memory: 'Carried 35-pound packs across 19 miles of rocky alpine ridge. When weather turned icy, Alex cracked jokes for four hours straight to keep morale soaring.',
        photo: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80'
      },
      {
        destination: 'Maui & Oahu Coastline, Hawaii (The Dream)',
        year: 'Target: 2027 Post-Transplant',
        highlight: 'The 100-Yard Open Water Ocean Plunge',
        memory: 'His premier post-transplant dream: jumping into the clear turquoise Pacific waves without medical restrictions, tasting fresh island fruit, and feeling warm sand underfoot.',
        photo: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80'
      }
    ]
  },

  // SECTION 7: FAMILY AND FRIENDS (Named people besides Ben with placeholder images)
  friendsAndFamily: {
    title: 'Family & Friends: The Core Support Squad',
    supportSquadOverview: `Alex's inner circle is a fiercely loyal crew of family members, lifelong childhood buddies, and sports teammates who refuse to let him fight this battle alone. While medical rules prevent them from donating their own kidneys, they have organized meal trains, accompanied him to MGH appointments, and coordinated this search.`,
    members: [
      {
        name: 'Ben',
        relation: 'Nephew & Lacrosse Athlete (Age 17)',
        photo: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80',
        blurb: 'Alex has coached and cheered for Ben since middle school. Ben is his running buddy and chief motivation to get healthy.',
        funnyTrait: 'Secretly borrows Alex’s high-end woodworking chisels to carve miniature wooden lacrosse sticks.',
        quote: '"He never missed a single game or milestone. He is my hero, and I need him on the bleachers for my college games."'
      },
      {
        name: 'Sarah Miller',
        relation: 'Sister, Elementary School Teacher & Family General (Age 42)',
        photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
        blurb: 'Alex’s younger sister by two years, which legally gives her command over all family medical binder organization and low-sodium meal distribution.',
        funnyTrait: 'Colors-codes his MGH doctor visit appointments with four distinct neon highlighters.',
        quote: '"Alex has taken care of everyone his entire life. It is our turn to rally the world to take care of him."'
      },
      {
        name: 'Marcus Chen',
        relation: 'Best Friend since 4th Grade & Civil Engineer (Age 44)',
        photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
        blurb: 'Lifelong hiking partner, co-mechanic, and fellow Boston sports debater for 35 straight years.',
        funnyTrait: 'Will not let Alex drive any car with a manual transmission because "he shifts gears like an old tractor."',
        quote: '"I stepped forward to test as a donor immediately. Although we weren’t an immunological direct match, I am ready to do paired exchange for him."'
      },
      {
        name: 'Elena Rodriguez',
        relation: 'Stand-Up Comedy Partner & Improv Performer (Age 38)',
        photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
        blurb: 'Has co-hosted open-mic nights and improv workshops with Alex across Somerville and Cambridge for over six years.',
        funnyTrait: 'Accuses Alex of using his failing kidneys just to steal crowd sympathy points during comedic roasts.',
        quote: '"The comedy scene in Boston is gritty, but Alex brings pure heart. We need him healthy, energetic, and back behind the microphone."'
      },
      {
        name: 'Dave Kowalski',
        relation: 'Neighbor & Woodworking Guild Partner (Age 56)',
        photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
        blurb: 'Co-founder of the neighborhood tool-lending depot and master cabinetmaker.',
        funnyTrait: 'Claims he can identify tree species blindfolded just by smelling the sawdust (he is right about 70% of the time).',
        quote: '"Alex is the kind of neighbor who shovels your driveway before you wake up. Giving him a kidney is giving a community its backbone back."'
      },
      {
        name: 'Coach Tom Higgins',
        relation: 'Youth Sports League Director & Neighbor (Age 51)',
        photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
        blurb: 'Director of the Middlesex Youth Lacrosse League where Alex has volunteered for eight seasons.',
        funnyTrait: 'Carries extra whistle lanyards in his glove compartment "just in case of an emergency sports practice."',
        quote: '"Kids listen to Coach Alex because he treats them with real respect. He is the heart and soul of our league."'
      },
      {
        name: 'Grandpa Arthur',
        relation: 'Family Patriarch (Age 82)',
        photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
        blurb: 'Army veteran, master gardener, and chief judge of Sunday family dinners.',
        funnyTrait: 'Has tried to donate his 82-year-old kidneys to Alex twice. MGH gently declined, but Arthur keeps demanding to speak to the chief of surgery.',
        quote: '"My grandson is a fighter. The person who steps up to give him a kidney will be invited to every Arthur family barbecue forever."'
      }
    ],
    familyTraditions: 'Annual Memorial Day backyard lobster boils, Thanksgiving touch football in the mud, and Saturday morning woodworking sessions where nephew Ben learns to turn bowls on the lathe.',
    whyFamilyCannotDonateSummary: 'Several immediate family members stepped up eagerly for evaluation at MGH, but were ruled out due to genetic kidney disease history, prior cardiovascular conditions, or immunological incompatibilities.'
  },

  // SECTION 8: HOBBIES
  hobbies: {
    title: 'Hobbies & Creative Pursuits',
    items: [
      {
        name: 'Fine Woodworking & Lathe Turning',
        icon: '🪚',
        description: 'Handcrafting walnut cutting boards, live-edge coffee tables, and heirloom wooden bowls on his 1968 Rockwell lathe.',
        funnyFact: 'Has created over 40 cutting boards; the family kitchen looks like a lumber showroom.'
      },
      {
        name: 'Vintage Vinyl & Jazz Records',
        icon: '🎷',
        description: 'Scouring flea markets for original Blue Note and Motown pressings to play through a restored 1974 Marantz receiver.',
        funnyFact: 'Firmly believes Miles Davis sounds 40% warmer when heard on crackling analog vinyl.'
      },
      {
        name: 'Cast Iron Cooking & Culinary Experiments',
        icon: '🍳',
        description: 'Tinkering with low-sodium herb rubs, smoked briskets, and gourmet sourdough flatbreads.',
        funnyFact: 'Once accidentally smoked out his entire neighborhood trying to cure a new cast iron skillet with thyme and garlic.'
      },
      {
        name: 'Canoeing & Quiet Water Paddling',
        icon: '🛶',
        description: 'Paddling wooden cedar-strip canoes across the Concord and Charles Rivers during early misty mornings.',
        funnyFact: 'Has never tipped a canoe in 25 years—a personal record he defends with stubborn pride.'
      }
    ],
    kitchenDisastersOnRenalDiet: 'The infamous "Sodium-Free Marinara Fiasco of 2025" where Alex attempted to replace salt with powdered sumac and nutritional yeast. Family consensus was: "Alex, you are a master woodworker, stick to the sandpaper."'
  },

  // SECTION 9: DREAMS & BUCKET LIST
  dreams: {
    title: 'Post-Transplant Dreams & Bucket List',
    bucketList: [
      {
        rank: 1,
        goal: 'The 100-Yard Hawaii Pacific Ocean Plunge',
        category: 'Freedom & Travel',
        whyItMatters: 'With advanced renal disease and strict medical precautions, swimming in open ocean water has been off-limits. Diving into warm Pacific waves is his ultimate symbol of restored freedom.',
        humorNote: 'Will immediately follow the swim with fresh pineapple poke.'
      },
      {
        rank: 2,
        goal: 'Cheer from Bleachers at Ben’s College Lacrosse Game',
        category: 'Family & Mentorship',
        whyItMatters: 'Being energized, healthy, and present to watch nephew Ben take the field at the collegiate level.',
        humorNote: 'Guaranteed to be the loud uncle with the handmade cardboard sign.'
      },
      {
        rank: 3,
        goal: 'Build an Off-Grid Family Timber Frame Cabin',
        category: 'Craftsmanship',
        whyItMatters: 'Using his own two hands to construct a sustainable family retreat in Vermont for generations to come.',
        humorNote: 'Marcus has already volunteered to test the hammock.'
      },
      {
        rank: 4,
        goal: 'Run the Annual Boston 5K with Team MGH',
        category: 'Fitness & Health',
        whyItMatters: 'Crossing the finish line on two healthy kidneys alongside his MGH transplant doctors and nurses.',
        humorNote: 'Pledges to finish with a sprint, or at least a very fast power-walk.'
      }
    ],
    tenYearVision: 'To live a long, healthy life free from renal limitations—mentoring young craftspeople, traveling with family, and dedicating hundreds of volunteer hours to helping other kidney patients find their living donor matches.',
    lifePledge: 'I will cherish every single heartbeat and every single milliliter of filtration that my future donor gives me. I will live with boundless gratitude, humor, and purpose.'
  },

  // CLINICAL DISCLOSURE (Strictly NO Dialysis Mentions!)
  diagnosis: 'Stage 5 Chronic Kidney Disease (End-Stage Renal Disease secondary to Glomerulonephritis)',
  currentTreatment: {
    modality: 'Stage 5 Conservative Renal Management & Strict Nephrology Therapy',
    schedule: 'Bi-Weekly Comprehensive Clinical Labs & Nephrology Optimization',
    accessType: 'Pre-Transplant Vascular & Metabolic Monitoring Protocol',
    fluidRestriction: 'Monitored daily intake & customized renal electrolyte balance',
    managementClinic: 'MGH Transplant Center & Nephrology Division (Boston, MA)',
    treatmentHumorNotes: 'Managing severe kidney disease requires balancing sodium, phosphorus, and potassium with laboratory precision. Alex jokes that his kitchen scale has seen more scientific rigor than a college chemistry department.'
  },

  medicalTeam: {
    nephrologist: 'Dr. Katherine Vance, MD (MGH Nephrology)',
    transplantSurgeon: 'Dr. Michael Chen, MD, FACS (MGH Transplant Center)',
    donorCoordinator: 'Living Donor Transplant Team (MGH Transplant Center)',
    socialWorker: 'Elena Morales, LCSW (MGH Clinical Transplant Support)',
    hospitalNetwork: 'Massachusetts General Hospital (Mass General Brigham)'
  },

  prognosis: {
    renalFailureNote: 'At GFR 8 mL/min, native kidney filtration is nearing zero. Without a living kidney transplant, progressive systemic complications and cardiovascular risks compound significantly over time.',
    transplantSuccessNote: 'A living donor kidney transplant performs with an exceptional 95-98% 1-year graft survival rate, typically restoring near-normal kidney function immediately.',
    clinicalOutlook: 'Alex has zero cardiovascular disease, excellent baseline physical fitness, zero smoking history, and is considered an outstanding surgical candidate at MGH Transplant Center.',
    donorKidneyLongevity: 'Living donor kidneys last an average of 15-20+ years (and often decades longer), nearly doubling the lifespan of deceased donor organs.'
  },

  whyYouShouldHelp: [
    {
      id: 'why-1',
      title: 'A Father, Mentor & Craftsman with Decades to Give',
      description: 'At 44 years old, Alex has a whole lifetime of youth coaching, family celebrations, and community mentorship ahead of him. A living donor gives him back his full vitality.',
      humorTag: 'Plus, he will fix your squeaky front porch for free.'
    },
    {
      id: 'why-2',
      title: 'Donors Live Normal, Healthy, Full Lives with One Kidney',
      description: 'Human bodies are naturally built with incredible redundant filtration capacity. Millions of living donors live active, long, vibrant lives without dietary or activity restrictions.',
      humorTag: 'Mother Nature gave us two kidneys because she knew one was meant to be shared.'
    },
    {
      id: 'why-3',
      title: 'Zero Financial Cost to the Living Donor ($0)',
      description: 'Under the non-profit Donor Shield program and federal regulations, 100% of medical workup, surgery, hospital recovery, travel, and lost wages are fully covered.',
      humorTag: 'Literally not a single dime out of your pocket.'
    },
    {
      id: 'why-4',
      title: 'NKR Paired Exchange: Any Blood Type Can Save Him',
      description: 'Even if your blood type or tissue crossmatch is incompatible with Alex, you can participate in a paired donor swap through NKR, matching you with another compatible recipient and unlocking a donor for Alex.',
      humorTag: 'It’s the ultimate high-tech, life-saving domino rally.'
    }
  ],

  howYouCanHelp: [
    {
      id: 'how-1',
      stepNumber: '01',
      actionTitle: 'Take the 15-Minute MGH Confidential Health Questionnaire',
      description: 'Complete the secure online screening questionnaire through the MGH Transplant Center. Zero obligation, 100% confidential, and Alex is never told who applies.',
      timeCommitment: '15 minutes online',
      cost: '$0 (Completely Free)'
    },
    {
      id: 'how-2',
      stepNumber: '02',
      actionTitle: 'Share Alex’s Microsite with Your Friends & Social Circle',
      description: 'The single most effective way to find a living donor is expanding the search radius. A single post or text message can reach the champion we are searching for.',
      timeCommitment: '60 seconds',
      cost: '$0'
    },
    {
      id: 'how-3',
      stepNumber: '03',
      actionTitle: 'Send a Message of Encouragement to His Community Wall',
      description: 'Fighting Stage 5 kidney disease is emotionally taxing. Warm notes, jokes, and words of support remind Alex and his family that they are never fighting alone.',
      timeCommitment: '2 minutes',
      cost: '$0'
    }
  ],

  primaryStory: `Alex Miller is fighting Stage 5 End-Stage Renal Disease with courage, humor, and the support of an extraordinary family. His transplant center is MGH Transplant Center in Boston. A living kidney donor can restore his health, energy, and freedom.`,
  familyExplanation: `Immediate family members were tested at MGH but unfortunately ruled out for medical or immunological safety reasons. That is why we are reaching out to the broader community.`,
  hopesAndDreams: `To dive into the Pacific Ocean in Hawaii, coach nephew Ben through college lacrosse, and build an off-grid timber frame cabin for his family.`,
  effortsMade: `Alex adheres strictly to MGH medical guidance, maintains pristine dietary compliance, and continues volunteering in youth sports.`,
  customNotes: `Template mode active: You can personalize any section via the Privacy & Profile Controls modal.`
};

// COMMUNITY TESTIMONIALS (Named people besides Ben with placeholder images!)
export const defaultCommunityTestimonials: CommunityTestimonial[] = [
  {
    id: 'test-1',
    authorName: 'Ben',
    relationship: 'Nephew & Lacrosse Athlete',
    photo: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80',
    isAnonymous: false,
    avatarBg: 'bg-teal-600',
    avatarText: 'B',
    quote: 'He never missed a single game or milestone, even on days he was exhausted from managing kidney failure. He is my hero.',
    detailStory: `My uncle has always been the strongest person in my life. When I was in middle school, he coached our team on weekends, brought orange slices, and stayed late to help every kid who was struggling. Seeing him fight kidney disease is tough, but he never complains and still asks me about my lacrosse drills. We need him here healthy and watching from the bleachers for years to come.`,
    date: 'March 2026',
    upvotes: 48,
    hasUpvoted: false
  },
  {
    id: 'test-2',
    authorName: 'Sarah Miller',
    relationship: 'Sister & Elementary Teacher',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
    isAnonymous: false,
    avatarBg: 'bg-emerald-600',
    avatarText: 'SM',
    quote: 'Alex has spent his whole life taking care of everyone else. It is time for the world to step up and take care of him.',
    detailStory: `Growing up, Alex was the older brother who defended every kid being picked on in the schoolyard. When our parents aged, he handled every home renovation and repair without a second thought. Watching him navigate Stage 5 kidney disease with grace and humor at MGH has been inspiring, but he desperately needs a living kidney donor. The person who gives him this gift will become part of our family forever.`,
    date: 'February 2026',
    upvotes: 42,
    hasUpvoted: false
  },
  {
    id: 'test-3',
    authorName: 'Marcus Chen',
    relationship: 'Best Friend since 4th Grade',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    isAnonymous: false,
    avatarBg: 'bg-blue-600',
    avatarText: 'MC',
    quote: 'I tested at MGH right away. Even though we were incompatible, I am ready to do paired exchange to get him his match.',
    detailStory: `We have been through everything together—first cars, college road trips, hiking the White Mountains. Alex is the most honest, loyal human being I know. When he told me about his GFR dropping to 8, I was in the MGH donor coordinator's office within 72 hours. While we were an immunological mismatch, the NKR Paired Exchange program means that anyone can step up and trigger a life-saving swap.`,
    date: 'January 2026',
    upvotes: 39,
    hasUpvoted: false
  },
  {
    id: 'test-4',
    authorName: 'Elena Rodriguez',
    relationship: 'Stand-Up Comedy Partner',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    isAnonymous: false,
    avatarBg: 'bg-purple-600',
    avatarText: 'ER',
    quote: 'He brings light and laughter into every room he enters. His kidney failure is no match for his sense of humor.',
    detailStory: `In the comedy clubs of Boston, you meet a lot of cynics. Alex is the opposite: a comedian with a huge heart who finds comedy in the weirdest corners of everyday life. Even when he was dealing with the hardest lab tests, he would step on stage and make 150 strangers forget their problems for ten minutes. He deserves decades of laughter and a healthy new kidney.`,
    date: 'March 2026',
    upvotes: 34,
    hasUpvoted: false
  },
  {
    id: 'test-5',
    authorName: 'Dave Kowalski',
    relationship: 'Neighbor & Woodworking Partner',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    isAnonymous: false,
    avatarBg: 'bg-amber-600',
    avatarText: 'DK',
    quote: 'The kind of craftsman who spends two hours helping an 80-year-old neighbor fix her front porch latch for free.',
    detailStory: `Alex co-founded our neighborhood tool-lending co-op. When a major snowstorm hit Boston last winter, Alex was out at 6 AM clearing walks for three elderly neighbors before touching his own driveway. His physical stamina took a hit with his kidney illness, but his craft and his generosity are as sharp as ever. We need him healthy and back in the woodshop.`,
    date: 'January 2026',
    upvotes: 29,
    hasUpvoted: false
  },
  {
    id: 'test-6',
    authorName: 'Coach Tom Higgins',
    relationship: 'Youth Sports League Director',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
    isAnonymous: false,
    avatarBg: 'bg-emerald-700',
    avatarText: 'TH',
    quote: 'He teaches kids how to win with humility and lose with dignity. A true community pillar.',
    detailStory: `In eight years of youth lacrosse, Coach Alex never yelled at an official or benched a kid who tried their best. He showed up with extra cleats and gloves for families who couldn’t afford gear. Every parent in our league is rooting for Alex to find his MGH kidney donor match.`,
    date: 'December 2025',
    upvotes: 27,
    hasUpvoted: false
  },
  {
    id: 'test-7',
    authorName: 'Grandpa Arthur',
    relationship: 'Family Patriarch (Age 82)',
    photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
    isAnonymous: false,
    avatarBg: 'bg-stone-700',
    avatarText: 'GA',
    quote: 'Whoever gives this boy a kidney will have an honorary seat at Sunday family dinners for life.',
    detailStory: `I told the doctors at MGH to take my kidney, but they said 82-year-old kidneys are past their warranty! Alex is the finest grandson anyone could ask for. He carries himself with pride, honor, and humor. Whoever steps forward to help him will be saving a truly good man.`,
    date: 'February 2026',
    upvotes: 61,
    hasUpvoted: false
  }
];

export const defaultGalleryImages: GalleryImage[] = [
  {
    id: 'gal-1',
    src: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    alt: 'Custom Woodworking Bench',
    title: 'Precision in the Woodshop',
    caption: 'Handcrafted mortise and tenon timber framing in his Boston workshop.',
    tag: 'Craftsmanship',
    year: '2024'
  },
  {
    id: 'gal-2',
    src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    alt: 'Pacific Ocean Waves in Hawaii',
    title: 'The Hawaii Freedom Dream',
    caption: 'Dreaming of swimming freely in warm Pacific waves once kidney disease is conquered.',
    tag: 'Dream',
    year: 'Target: 2027'
  },
  {
    id: 'gal-3',
    src: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80',
    alt: 'Nephew Ben on the Lacrosse Field',
    title: 'Sideline Cheers for Ben',
    caption: 'Cheering on nephew Ben through eight seasons of championship lacrosse.',
    tag: 'Family',
    year: '2025'
  },
  {
    id: 'gal-4',
    src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80',
    alt: 'Mount Washington Ridge',
    title: 'White Mountains Traverse',
    caption: 'Conquering the Presidential Range with lifelong best friend Marcus Chen.',
    tag: 'Travels',
    year: '2022'
  },
  {
    id: 'gal-5',
    src: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80',
    alt: 'Vintage Vinyl & Jazz',
    title: 'Sunday Morning Vinyl Sessions',
    caption: 'Spinning classic Miles Davis and Bill Evans albums on his vintage turntable.',
    tag: 'Hobbies',
    year: '2025'
  },
  {
    id: 'gal-6',
    src: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    alt: 'Comedy Club Stage',
    title: 'Boston Comedy Open Mic',
    caption: 'Sharing laughs and finding light in unexpected places with improv partner Elena.',
    tag: 'Comedy',
    year: '2024'
  }
];

export const defaultFaqItems: FAQItem[] = [
  {
    question: 'Where is Alex being evaluated for his kidney transplant?',
    answer: 'Alex is actively registered and cleared as a transplant candidate at MGH Transplant Center (Massachusetts General Hospital) in Boston, MA. All donor evaluations, compatibility testing, and surgical procedures are conducted through MGH.',
    category: 'donation'
  },
  {
    question: 'Does a living donor have to pay for medical testing or surgery?',
    answer: 'No. $0. Under federal regulations and the non-profit Donor Shield program, 100% of the donor’s medical evaluation, blood tests, imaging, surgery, hospital stay, post-op follow-up, travel, lodging, and lost wages are fully reimbursed.',
    category: 'costs'
  },
  {
    question: 'Do I need to be a direct blood type match to Alex to help him?',
    answer: 'No! Through the National Kidney Registry (NKR) Paired Exchange program, any healthy person with ANY blood type can donate on Alex’s behalf. NKR swaps incompatible pairs nationwide in a synchronized domino chain, getting Alex a compatible kidney while your kidney saves another patient.',
    category: 'paired_exchange'
  },
  {
    question: 'Can a living donor lead a normal, active life with one kidney?',
    answer: 'Yes. Humans are born with substantial redundant kidney capacity. After donation, the remaining kidney naturally enlarges (hypertrophies) to provide ~75-80% of original baseline filtration. Living donors have normal life expectancies and no restrictions on sports, career, or diet.',
    category: 'recovery'
  },
  {
    question: 'Why does this microsite require an electronic NDA to view full details?',
    answer: 'Living kidney searches involve highly sensitive personal medical records, including laboratory clearances and MGH physician notes. The DocuSign Mutual NDA protects candidate privacy and prevents commercial exploitation, while strictly complying with federal HIPAA standards and NOTA regulations.',
    category: 'privacy'
  }
];
