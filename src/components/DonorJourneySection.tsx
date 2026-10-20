import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  DollarSign, 
  Heart, 
  FileText, 
  Stethoscope, 
  Hospital, 
  Home, 
  Sparkles, 
  ArrowRight, 
  HelpCircle,
  Plane,
  Coins,
  Shield,
  Award,
  ChevronRight,
  Info
} from 'lucide-react';
import { RecipientProfile } from '../types';

interface DonorJourneySectionProps {
  profile?: RecipientProfile;
  onOpenScreening: () => void;
}

interface JourneyStep {
  id: number;
  phase: 'screening' | 'evaluation' | 'surgery' | 'recovery' | 'longterm';
  phaseLabel: string;
  phaseColor: string;
  title: string;
  timeline: string;
  commitmentLevel: 'Low' | 'Moderate' | 'Short-Term' | 'Zero Lifetime Disruption';
  commitmentBadgeColor: string;
  icon: React.ElementType;
  summary: string;
  whatHappens: string[];
  supportProvided: {
    title: string;
    description: string;
    icon: React.ElementType;
  }[];
  donorAutonomyTip: string;
  reassuranceNote: string;
}

export const DonorJourneySection: React.FC<DonorJourneySectionProps> = ({
  profile,
  onOpenScreening
}) => {
  const [activeStepId, setActiveStepId] = useState<number>(1);
  const [selectedPhaseFilter, setSelectedPhaseFilter] = useState<string>('all');

  const journeySteps: JourneyStep[] = [
    {
      id: 1,
      phase: 'screening',
      phaseLabel: 'Step 1: Confidential Questionnaire',
      phaseColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
      title: 'Online Health Questionnaire (15–20 Mins)',
      timeline: '15 to 20 minutes • Completed from home phone or laptop',
      commitmentLevel: 'Low',
      commitmentBadgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      icon: FileText,
      summary: 'A completely confidential 15-minute digital survey to assess basic health eligibility with the MGH Transplant Center.',
      whatHappens: [
        'Answer routine health history questions (allergies, prior surgeries, general wellness).',
        'No medical records or blood draws needed at this stage.',
        'Submitted directly to the independent living donor clinical coordinator (never seen by recipient).'
      ],
      supportProvided: [
        {
          title: 'Independent Donor Advocate (ILDA)',
          description: 'A licensed clinical advocate is assigned exclusively to you—their sole job is your health and interests, completely separate from the recipient.',
          icon: ShieldCheck
        },
        {
          title: '100% Confidentiality',
          description: 'The candidate is never notified that you took the survey unless you explicitly choose to tell them.',
          icon: Shield
        }
      ],
      donorAutonomyTip: 'Taking this initial survey commits you to nothing. It simply verifies if you are eligible to learn more.',
      reassuranceNote: 'Over 85% of volunteers complete this step while sitting on their couch with an evening cup of tea.'
    },
    {
      id: 2,
      phase: 'screening',
      phaseLabel: 'Step 2: Local Blood & Routine Labs',
      phaseColor: 'bg-teal-100 text-teal-800 border-teal-200',
      title: 'Local Lab Workup (At Your Neighborhood Clinic)',
      timeline: '1 to 2 hours • Scheduled at a LabCorp or Quest near your house',
      commitmentLevel: 'Low',
      commitmentBadgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      icon: Stethoscope,
      summary: 'Convenient blood typing, metabolic panel, and urine clearance arranged at a certified lab within 10 minutes of where you live.',
      whatHappens: [
        'Routine blood type check and standard chemistry panels.',
        'Viral screening and kidney clearance testing.',
        'Blood samples can be taken anywhere in the U.S.—you do not need to travel to Boston for this.'
      ],
      supportProvided: [
        {
          title: '$0 Out-of-Pocket Expense',
          description: 'All testing is billed directly to the recipient’s transplant insurance or NKR Donor Shield. You never pay a single dime or copay.',
          icon: DollarSign
        },
        {
          title: 'Paired Exchange Protection',
          description: 'Even if your blood type is not a direct match, the NKR Paired Kidney Exchange allows you to save this candidate through a synchronized chain.',
          icon: Sparkles
        }
      ],
      donorAutonomyTip: 'You do not have to have matching blood type to donate. Every healthy blood type can save our candidate.',
      reassuranceNote: 'Results are reviewed with you privately by an independent nephrologist.'
    },
    {
      id: 3,
      phase: 'evaluation',
      phaseLabel: 'Step 3: Comprehensive Evaluation',
      phaseColor: 'bg-blue-100 text-blue-800 border-blue-200',
      title: 'Full Evaluation Day at MGH (or Your Regional Center)',
      timeline: 'Single 1-day appointment • Flexible scheduling around work/vacation',
      commitmentLevel: 'Moderate',
      commitmentBadgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
      icon: Hospital,
      summary: 'A deep-dive, world-class health evaluation at the MGH Transplant Center in Boston, often described as the most thorough physical of a lifetime.',
      whatHappens: [
        'High-resolution CT angiogram to map kidney anatomy and ensure pristine vascular health.',
        'Private 1-on-1 consultations with an independent transplant surgeon, nephrologist, clinical social worker, and donor coordinator.',
        'Electrocardiogram (ECG) and cardiovascular health screening.'
      ],
      supportProvided: [
        {
          title: 'Full Travel & Hotel Reimbursement',
          description: 'NKR Donor Shield covers flights/trains, hotel accommodations, meals, and taxi fare for both you and a support companion.',
          icon: Plane
        },
        {
          title: 'Independent Donor Advocacy Team',
          description: 'Every specialist in this room is sworn to protect your safety alone; they will decline approval if there is any safety risk to you.',
          icon: ShieldCheck
        }
      ],
      donorAutonomyTip: 'Living donors consistently report that this evaluation provided invaluable peace of mind about their own peak cardiovascular and renal health.',
      reassuranceNote: 'If you live out of state, the evaluation can often be performed at an accredited NKR partner hospital near your hometown.'
    },
    {
      id: 4,
      phase: 'evaluation',
      phaseLabel: 'Step 4: Clinical Review & Consent',
      phaseColor: 'bg-indigo-100 text-indigo-800 border-indigo-200',
      title: 'Committee Review & Voluntary Informed Consent',
      timeline: '1 to 2 weeks for committee review • Zero rush',
      commitmentLevel: 'Low',
      commitmentBadgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      icon: Award,
      summary: 'The multidisciplinary MGH Living Donor Committee reviews clinical findings and gives final medical approval.',
      whatHappens: [
        'The independent committee confirms that donating will not compromise your long-term health.',
        'You receive a comprehensive explanation of surgical risks, recovery timelines, and life after donation.',
        'You choose your surgery date in coordination with your family and work schedule.'
      ],
      supportProvided: [
        {
          title: 'Absolute Right to Pause or Withdraw',
          description: 'You can halt the process at any second, up until the moment of surgery. The hospital provides a private medical reason so you never face awkwardness.',
          icon: Shield
        },
        {
          title: 'Living Donor Peer Mentor',
          description: 'Opportunity to talk 1-on-1 with an experienced living donor who walked this exact path and can answer every practical question.',
          icon: Heart
        }
      ],
      donorAutonomyTip: 'Your consent is 100% voluntary. You are in the driver’s seat throughout every single step.',
      reassuranceNote: 'Surgeries are never scheduled under time pressure—you pick a month and week that suits your personal calendar.'
    },
    {
      id: 5,
      phase: 'surgery',
      phaseLabel: 'Step 5: Minimally Invasive Surgery',
      phaseColor: 'bg-purple-100 text-purple-800 border-purple-200',
      title: 'Laparoscopic Surgery Day at MGH Boston',
      timeline: '2 to 3 hour procedure • 1 to 2 nights in hospital recovery suite',
      commitmentLevel: 'Short-Term',
      commitmentBadgeColor: 'bg-purple-50 text-purple-700 border-purple-200',
      icon: Hospital,
      summary: 'State-of-the-art laparoscopic surgery using 2 to 3 micro-incisions under 1 inch, followed by dedicated post-op care in a private room.',
      whatHappens: [
        'General anesthesia with continuous specialized monitoring by Harvard-affiliated anesthesiologists.',
        'Gentle laparoscopic removal through tiny band-aid size incisions.',
        'Most donors are up, walking hallways, and drinking clear liquids within 4 to 6 hours after surgery.'
      ],
      supportProvided: [
        {
          title: 'Donor Shield Complication Insurance',
          description: 'Comprehensive specialized medical complication insurance policy covers unexpected medical needs at $0 out-of-pocket.',
          icon: ShieldCheck
        },
        {
          title: 'Life & Disability Backstop Coverage',
          description: 'Complimentary life and disability protection provided through NKR Donor Shield for total family financial safety.',
          icon: Coins
        }
      ],
      donorAutonomyTip: 'Living kidney donation is one of the safest and most commonly performed organ transplants in modern medicine.',
      reassuranceNote: 'Hospital stay is brief (usually 24 to 48 hours). You have private room accommodations and personal support staff.'
    },
    {
      id: 6,
      phase: 'recovery',
      phaseLabel: 'Step 6: Early Home Recovery',
      phaseColor: 'bg-amber-100 text-amber-800 border-amber-200',
      title: 'Discharge & Gentle Healing at Home (Weeks 1–2)',
      timeline: '1 to 2 weeks resting at home • Walking daily and relaxing',
      commitmentLevel: 'Short-Term',
      commitmentBadgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
      icon: Home,
      summary: 'Comfortable recovery at home with mild oral pain relievers, daily walking, movies, reading, and healthy meals.',
      whatHappens: [
        'Discharged home with personalized recovery instructions and direct phone line to your nursing team.',
        'Gentle daily walks to stimulate circulation and rapid digestive recovery.',
        'No heavy lifting over 10 lbs for the first two weeks.'
      ],
      supportProvided: [
        {
          title: 'Lost Wage Reimbursement (Up to $2,000/week)',
          description: 'NKR Donor Shield replaces your lost work wages directly up to $2,000 per week for up to 6 weeks, so you do not use up vacation or sick pay.',
          icon: DollarSign
        },
        {
          title: 'Caregiver & Childcare Reimbursement',
          description: 'Financial assistance for childcare, elder care, or companion assistance while you focus purely on resting.',
          icon: Heart
        }
      ],
      donorAutonomyTip: 'Most donors describe early recovery as feeling like having done a strenuous core workout at the gym.',
      reassuranceNote: 'Pain is typically mild to moderate and managed easily with standard oral medications.'
    },
    {
      id: 7,
      phase: 'recovery',
      phaseLabel: 'Step 7: Return to Work & Passions',
      phaseColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
      title: 'Return to Work, Fitness & Routine (Weeks 2–6)',
      timeline: 'Weeks 2 to 3 for desk jobs • Weeks 4 to 6 for gym & heavy sports',
      commitmentLevel: 'Short-Term',
      commitmentBadgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      icon: Clock,
      summary: 'Resuming your everyday career, favorite workouts, social life, and hobbies with full vigor.',
      whatHappens: [
        'Desk and remote workers frequently resume light duties within 10 to 14 days.',
        'Full cardiovascular exercise, running, swimming, and heavy lifting resume by week 4 to 6.',
        'Post-operative check-in with your surgeon to celebrate your recovery milestones.'
      ],
      supportProvided: [
        {
          title: 'Continuous Wage Protection',
          description: 'Reimbursement continues until your surgeon issues formal medical clearance to resume work duties.',
          icon: DollarSign
        },
        {
          title: 'Direct Clinical Access 24/7',
          description: 'Access to the MGH transplant triage line whenever you have questions or need guidance.',
          icon: Stethoscope
        }
      ],
      donorAutonomyTip: 'Many living donors report running marathons, lifting personal bests, and traveling the globe within months.',
      reassuranceNote: 'You do not have to change your lifestyle, hobbies, or diet after donating.'
    },
    {
      id: 8,
      phase: 'longterm',
      phaseLabel: 'Step 8: Lifelong Wellness & Protection',
      phaseColor: 'bg-teal-100 text-teal-800 border-teal-200',
      title: 'Lifelong Health & The Living Donor Return Guarantee',
      timeline: 'Decades of normal, healthy, full living • 1 remaining kidney',
      commitmentLevel: 'Zero Lifetime Disruption',
      commitmentBadgeColor: 'bg-teal-50 text-teal-700 border-teal-200',
      icon: Sparkles,
      summary: 'Your remaining kidney naturally enlarges (compensatory hypertrophy) within weeks to maintain 70% to 80% of normal total function.',
      whatHappens: [
        'The remaining kidney seamlessly filters all bodily wastes without medication or dietary changes.',
        'Free routine follow-up lab checks at 6 months, 1 year, and 2 years (all prepaid by MGH).',
        'Normal lifespan: Long-term clinical studies from Johns Hopkins confirm living donors have the same life expectancy as non-donors.'
      ],
      supportProvided: [
        {
          title: 'NKR Lifetime Donor Priority Guarantee',
          description: 'In the extremely rare event that a living donor ever needs a kidney transplant themselves in their lifetime, NKR prioritizes them at the top of the national waiting list.',
          icon: Award
        },
        {
          title: 'Donor Shield Lifelong Health Backstop',
          description: 'Ongoing peace of mind with access to the National Kidney Registry advocacy network for life.',
          icon: ShieldCheck
        }
      ],
      donorAutonomyTip: 'You can drink alcohol in moderation, have children, play sports, and live a completely unrestricted life.',
      reassuranceNote: 'The profound pride of having saved a father, neighbor, or friend stays with you every single day.'
    }
  ];

  const currentStep = journeySteps.find(s => s.id === activeStepId) || journeySteps[0];

  const filteredSteps = journeySteps.filter(s => {
    if (selectedPhaseFilter === 'all') return true;
    if (selectedPhaseFilter === 'screening') return s.phase === 'screening';
    if (selectedPhaseFilter === 'evaluation') return s.phase === 'evaluation';
    if (selectedPhaseFilter === 'surgery-recovery') return s.phase === 'surgery' || s.phase === 'recovery';
    if (selectedPhaseFilter === 'longterm') return s.phase === 'longterm';
    return true;
  });

  return (
    <section id="donor-journey" className="py-20 lg:py-28 bg-gradient-to-b from-stone-50 via-teal-50/20 to-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-100 text-teal-800 text-xs font-semibold uppercase tracking-wider mb-3.5">
            <Sparkles className="w-3.5 h-3.5 text-teal-700" />
            <span>Interactive Visual Roadmap</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-['Outfit',sans-serif] text-slate-900 tracking-tight">
            The Living Donor Journey
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed">
            Wondering what actually happens if you raise your hand? From a quick 15-minute phone questionnaire to complete recovery, here is the exact step-by-step roadmap showing every commitment, timeline, and the unmatched <strong>$0 financial protection</strong> provided by NKR Donor Shield.
          </p>
        </div>

        {/* Top 3 Core Guarantees Banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <div className="bg-white rounded-2xl p-5 border border-stone-200/90 shadow-2xs flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
              <DollarSign className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm">$0 Out-of-Pocket Expense</h4>
              <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                100% of medical workup, surgery, hospital recovery, travel, and meals are covered under NKR Donor Shield.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-stone-200/90 shadow-2xs flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center shrink-0">
              <Coins className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm">Lost Wage Reimbursement</h4>
              <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                Up to <strong>$2,000/week</strong> in lost wage protection directly deposited so you never forfeit vacation or sick pay.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-stone-200/90 shadow-2xs flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm">Independent Donor Advocate</h4>
              <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                A separate medical team whose sole legal duty is your safety. You retain full autonomy to pause at any second.
              </p>
            </div>
          </div>
        </div>

        {/* Phase Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          <span className="text-xs font-bold text-stone-600 uppercase tracking-wider mr-2 hidden sm:inline">
            Filter Phase:
          </span>
          {[
            { id: 'all', label: 'All 8 Steps' },
            { id: 'screening', label: '1. Screening & Labs' },
            { id: 'evaluation', label: '2. MGH Evaluation' },
            { id: 'surgery-recovery', label: '3. Surgery & Recovery' },
            { id: 'longterm', label: '4. Lifelong Health' }
          ].map(filter => (
            <button
              key={filter.id}
              onClick={() => setSelectedPhaseFilter(filter.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                selectedPhaseFilter === filter.id
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-white text-stone-600 border border-stone-200 hover:bg-stone-100'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Step Nodes Horizontal Bar */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 border border-stone-200/90 shadow-xs mb-8 overflow-x-auto">
          <div className="flex items-center min-w-[720px] justify-between relative">
            {/* Horizontal Connecting Line */}
            <div className="absolute top-1/2 left-6 right-6 h-1 bg-stone-100 -translate-y-1/2 z-0" />
            
            {journeySteps.map((step) => {
              const StepIcon = step.icon;
              const isActive = activeStepId === step.id;
              const isPast = step.id < activeStepId;

              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStepId(step.id)}
                  className={`relative z-10 flex flex-col items-center group cursor-pointer focus:outline-hidden transition-all ${
                    isActive ? 'scale-105' : 'hover:scale-102 opacity-75 hover:opacity-100'
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-sm transition-all border ${
                      isActive
                        ? 'bg-teal-700 text-white border-teal-800 shadow-md ring-4 ring-teal-100'
                        : isPast
                        ? 'bg-teal-100 text-teal-800 border-teal-300'
                        : 'bg-white text-stone-600 border-stone-200 hover:border-teal-400'
                    }`}
                  >
                    <StepIcon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold text-slate-800 mt-2 text-center whitespace-nowrap">
                    Step {step.id}
                  </span>
                  <span className="text-[10px] text-stone-600 font-medium max-w-[85px] text-center truncate">
                    {step.phase === 'screening' ? 'Screening' : step.phase === 'evaluation' ? 'Evaluation' : step.phase === 'surgery' ? 'Surgery' : step.phase === 'recovery' ? 'Recovery' : 'Lifelong'}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Interactive Step Card Inspector */}
        <div className="bg-white rounded-3xl border border-stone-200/90 shadow-sm p-6 sm:p-8 lg:p-10 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Step Details */}
            <div className="lg:col-span-7">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className={`px-2.5 py-1 rounded-md text-xs font-bold border ${currentStep.phaseColor}`}>
                  {currentStep.phaseLabel}
                </span>
                <span className={`px-2.5 py-1 rounded-md text-xs font-semibold border ${currentStep.commitmentBadgeColor}`}>
                  Commitment: {currentStep.commitmentLevel}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold font-['Outfit',sans-serif] text-slate-900 tracking-tight mt-2">
                {currentStep.title}
              </h3>

              <div className="flex items-center gap-2 text-xs font-semibold text-teal-800 bg-teal-50 px-3 py-1.5 rounded-lg w-fit mt-3">
                <Clock className="w-3.5 h-3.5 text-teal-700 shrink-0" />
                <span>{currentStep.timeline}</span>
              </div>

              <p className="mt-4 text-stone-700 text-base leading-relaxed">
                {currentStep.summary}
              </p>

              {/* What Happens Checklist */}
              <div className="mt-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-600 mb-3 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-600" />
                  <span>What Actually Happens:</span>
                </h4>
                <ul className="space-y-2.5">
                  {currentStep.whatHappens.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-stone-700 leading-relaxed">
                      <span className="w-5 h-5 rounded-full bg-stone-100 text-stone-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Reassurance Callout */}
              <div className="mt-6 p-4 rounded-xl bg-amber-50/80 border border-amber-200/70 text-xs sm:text-sm text-amber-900 flex items-start gap-3">
                <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <strong className="font-bold">Donor Peace-of-Mind: </strong>
                  {currentStep.reassuranceNote}
                </div>
              </div>
            </div>

            {/* Right Column: Support Provided & Protections */}
            <div className="lg:col-span-5 bg-stone-50 rounded-2xl p-6 border border-stone-200">
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-600 mb-4 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-700" />
                <span>Support & Protections Provided:</span>
              </h4>

              <div className="space-y-4">
                {currentStep.supportProvided.map((supp, sIdx) => {
                  const SuppIcon = supp.icon;
                  return (
                    <div key={sIdx} className="bg-white p-4 rounded-xl border border-stone-200 shadow-2xs">
                      <div className="flex items-center gap-2.5 mb-1.5">
                        <div className="w-7 h-7 rounded-lg bg-teal-100 text-teal-800 flex items-center justify-center shrink-0">
                          <SuppIcon className="w-4 h-4" />
                        </div>
                        <h5 className="font-bold text-slate-900 text-xs sm:text-sm">{supp.title}</h5>
                      </div>
                      <p className="text-xs text-stone-600 leading-relaxed ml-9.5">
                        {supp.description}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Donor Autonomy Quote */}
              <div className="mt-5 p-3.5 rounded-xl bg-teal-900 text-white text-xs leading-relaxed">
                <div className="font-bold text-teal-200 mb-1 flex items-center gap-1.5">
                  <Heart className="w-3.5 h-3.5 fill-teal-300 text-teal-300" />
                  <span>Donor Sovereignty Rule</span>
                </div>
                <p>{currentStep.donorAutonomyTip}</p>
              </div>

              {/* Step Navigation Buttons */}
              <div className="flex items-center justify-between gap-3 mt-6 pt-4 border-t border-stone-200">
                <button
                  onClick={() => setActiveStepId(prev => Math.max(1, prev - 1))}
                  disabled={activeStepId === 1}
                  className="px-3.5 py-2 rounded-xl text-xs font-semibold border border-stone-300 bg-white text-stone-700 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-stone-100 transition-colors"
                >
                  ← Previous Step
                </button>

                <div className="text-xs font-bold text-stone-600">
                  Step {activeStepId} of {journeySteps.length}
                </div>

                <button
                  onClick={() => setActiveStepId(prev => Math.min(journeySteps.length, prev + 1))}
                  disabled={activeStepId === journeySteps.length}
                  className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-teal-800 text-white disabled:opacity-40 disabled:cursor-not-allowed hover:bg-teal-900 transition-colors flex items-center gap-1 shadow-xs"
                >
                  <span>Next Step</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Commitment vs Support Summary Grid */}
        <div className="bg-stone-900 text-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-stone-800 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-900/80 border border-teal-700 text-teal-300 text-xs font-semibold mb-3">
                <Award className="w-3.5 h-3.5 text-teal-300" />
                <span>The Big Picture</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-['Outfit',sans-serif] tracking-tight text-white">
                Low Personal Disruption. Infinite Life Given.
              </h3>
              <p className="mt-3 text-sm sm:text-base text-stone-300 leading-relaxed">
                By donating a kidney, you give someone 15 to 20+ vibrant years with their family, children, and passions. In return, the medical system and the non-profit <strong>NKR Donor Shield</strong> envelop you with total financial coverage, lost wage replacement, independent advocacy, and lifetime reciprocal prioritization.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
                <div className="p-3.5 rounded-xl bg-stone-800/80 border border-stone-700">
                  <div className="text-xs text-stone-400 font-medium">Screening Time</div>
                  <div className="text-lg font-bold text-teal-300 mt-0.5">15 Mins</div>
                  <div className="text-[11px] text-stone-400">Zero obligation</div>
                </div>
                <div className="p-3.5 rounded-xl bg-stone-800/80 border border-stone-700">
                  <div className="text-xs text-stone-400 font-medium">Donor Cost</div>
                  <div className="text-lg font-bold text-emerald-400 mt-0.5">$0.00</div>
                  <div className="text-[11px] text-stone-400">100% reimbursed</div>
                </div>
                <div className="p-3.5 rounded-xl bg-stone-800/80 border border-stone-700">
                  <div className="text-xs text-stone-400 font-medium">Hospital Stay</div>
                  <div className="text-lg font-bold text-teal-300 mt-0.5">1–2 Nights</div>
                  <div className="text-[11px] text-stone-400">Laparoscopic</div>
                </div>
                <div className="p-3.5 rounded-xl bg-stone-800/80 border border-stone-700">
                  <div className="text-xs text-stone-400 font-medium">Life Expectancy</div>
                  <div className="text-lg font-bold text-emerald-400 mt-0.5">100% Normal</div>
                  <div className="text-[11px] text-stone-400">Zero deficit</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <button
                onClick={onOpenScreening}
                className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold text-base shadow-lg hover:shadow-xl transition-all cursor-pointer flex items-center justify-center gap-2 group"
              >
                <span>Take the 15-Min Screening</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <p className="text-center text-[11px] text-stone-400">
                Confidential • Handled directly by MGH Transplant Center • Commits you to nothing
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
