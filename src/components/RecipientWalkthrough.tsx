import React, { useState, useEffect, useRef } from 'react';
import { 
  Sparkles, 
  ChevronRight, 
  ChevronLeft, 
  X, 
  Check, 
  User, 
  Building2, 
  Camera, 
  Heart, 
  BookOpen, 
  Copy, 
  Download, 
  ExternalLink, 
  HelpCircle,
  ShieldCheck,
  FileCheck2,
  Lock,
  ArrowRight,
  Settings2,
  CheckCircle2,
  Lightbulb
} from 'lucide-react';
import { RecipientProfile } from '../types';

interface RecipientWalkthroughProps {
  isOpen: boolean;
  onClose: () => void;
  profile: RecipientProfile;
  onUpdateProfile: (updated: Partial<RecipientProfile>) => void;
  onOpenFullCustomizer: () => void;
  onOpenScreening?: () => void;
}

interface WalkthroughStep {
  id: string;
  targetId: string;
  badge: string;
  title: string;
  summary: string;
  detailedGuide: string[];
  fieldLabel?: string;
  fieldType?: 'text' | 'email' | 'toggle' | 'center-selector' | 'custom';
  fieldKey?: keyof RecipientProfile;
  placeholder?: string;
  tip: string;
}

const WALKTHROUGH_STEPS: WalkthroughStep[] = [
  {
    id: 'welcome',
    targetId: 'top',
    badge: 'Introduction',
    title: 'Welcome: Use This As Your Living Kidney Microsite',
    summary: 'This template is an open-source, HIPAA-shielded, NOTA-compliant microsite engineered for kidney transplant candidates to find an altruistic living donor or paired exchange champion.',
    detailedGuide: [
      'Built specifically around MGH Transplant Center and National Kidney Registry (NKR) best practices.',
      'Features a strict 2-tier privacy model: anonymous pre-NDA view, followed by full story and photos once an advocate signs the electronic NDA.',
      'Use this interactive 8-step tooltip walkthrough to preview where each piece of your personal information belongs, or customize it live right here!'
    ],
    tip: 'Everything you edit in this walkthrough immediately reflects live in the preview. You can also export the finished configuration with one click.'
  },
  {
    id: 'privacy-identity',
    targetId: 'hero-section',
    badge: 'Step 1 of 7 · Privacy & Identity',
    title: 'Anonymous Candidate Code vs. Real Identity',
    summary: 'To protect your medical privacy from search engines and unauthorized scraping, the landing page presents only an anonymous candidate code until visitors execute an electronic NDA.',
    detailedGuide: [
      'Candidate Code: Displayed to the public before NDA execution (e.g. "Candidate A. / Recipient #BOS-774").',
      'Real Full Name: Revealed only to authorized signers after executing the DocuSign Mutual NDA.',
      'Pre-NDA anonymity complies with NOTA regulations and protects you from spam.'
    ],
    fieldLabel: 'Your Real Full Name (post-NDA)',
    fieldType: 'text',
    fieldKey: 'realName',
    placeholder: 'e.g. Alex Miller',
    tip: 'Your real name is guarded by 256-bit encryption and only unlocked upon electronic signature verification.'
  },
  {
    id: 'candidate-code',
    targetId: 'hero-section',
    badge: 'Step 2 of 7 · Pre-NDA Public Code',
    title: 'Public Anonymized Identifier',
    summary: 'Choose the public identifier that visitors see on the landing page before executing the Mutual NDA.',
    detailedGuide: [
      'Keeps your identity completely private during initial social media sharing or flier distribution.',
      'Can be your first initial and city code (e.g., "Candidate A. (Recipient #BOS-774)").',
      'You can toggle between Anonymous Mode and Public Mode anytime in the Privacy Controls.'
    ],
    fieldLabel: 'Public Display Name / Candidate Code',
    fieldType: 'text',
    fieldKey: 'displayName',
    placeholder: 'e.g. Candidate A. (Recipient #BOS-774)',
    tip: 'We recommend keeping this anonymous for initial public distribution.'
  },
  {
    id: 'transplant-center',
    targetId: 'clinical-disclosure',
    badge: 'Step 3 of 7 · Transplant Center',
    title: 'Your Transplant Center & Living Donor Office',
    summary: 'Direct all donor screening inquiries straight to your accredited hospital transplant center.',
    detailedGuide: [
      'Transplant Center: MGH Transplant Center (Massachusetts General Hospital, Boston MA) is pre-configured.',
      'Prospective donors never pay anything; all testing is 100% covered by the recipient’s insurance or Donor Shield.',
      'Independent Donor Advocates (IDA) ensure the donor’s safety and autonomy at all times.'
    ],
    fieldLabel: 'Your Transplant Hospital / Center',
    fieldType: 'text',
    fieldKey: 'transplantCenter',
    placeholder: 'e.g. MGH Transplant Center',
    tip: 'If registered at MGH, your donor candidates can reference your name or NKR registration ID directly to the coordinator.'
  },
  {
    id: 'story-and-life',
    targetId: 'story',
    badge: 'Step 4 of 7 · Story & Life Chapters',
    title: 'Your Story, Hobbies, Career & Community Impact',
    summary: 'Donors step forward when they connect with your human story. Fill in the life chapters that make you who you are.',
    detailedGuide: [
      'Early Life & Roots: Where you grew up and your family foundation.',
      'Career & Purpose: Your professional work, craftsmanship, or trade.',
      'Community Impact: Volunteering, youth coaching, mentoring, or neighborhood leadership.',
      'Comedy & Humor: How you stay upbeat, laugh, and find humor through health challenges.',
      'Family & Friends: Your core support crew, including voices like nephew Ben.'
    ],
    fieldLabel: 'Subtitle / Profession / Calling',
    fieldType: 'text',
    fieldKey: 'pseudonymTitle',
    placeholder: 'e.g. The Woodworker, Youth Coach & Storyteller',
    tip: 'Focus on your vitality, community contributions, and dreams for the future—no mention of dialysis.'
  },
  {
    id: 'photos-and-media',
    targetId: 'gallery',
    badge: 'Step 5 of 7 · Photos, Video & Audio',
    title: 'Your Photos, Video Message & Voice Memo',
    summary: 'Authentic visuals build deep, heartfelt connections. The microsite includes an interactive gallery, video player, and audio note.',
    detailedGuide: [
      'Hero Portrait: A warm, smiling photo in your natural element (e.g. Alex’s Boston portrait).',
      'Nephew Ben & Family Photos: Real moments showing your circle of care.',
      'Video Greeting: A personal 1-2 minute video message introducing yourself to potential donors.',
      'Gallery Tags: Categorize photos by Family, Craftsmanship, Dreams, Travels, and Comedy.'
    ],
    tip: 'All photos are stored locally in public/assets/aistudio/ and automatically tracked in GitHub without third-party hosting dependencies.'
  },
  {
    id: 'donor-journey',
    targetId: 'donor-journey',
    badge: 'Step 6 of 7 · Donor Journey & Protections',
    title: 'The 5-Stage Donor Roadmap & Donor Shield',
    summary: 'Prospective donors need clear reassurance that donation is safe, minimally invasive, and financially protected.',
    detailedGuide: [
      'Phase 1: Confidential 10-minute online health history questionnaire (zero obligation).',
      'Phase 2: Comprehensive health workup and kidney function testing.',
      'Phase 3: Minimally invasive laparoscopic procedure with a 1-2 day hospital stay.',
      'Phase 4: NKR Donor Shield provides 100% lost wage reimbursement & travel coverage.',
      'Phase 5: Living Donor Priority Guarantee—if a donor ever needs a kidney in the future, they jump to the top of the NKR list.'
    ],
    tip: 'Any healthy person with ANY blood type can donate on your behalf via the NKR Paired Kidney Exchange network!'
  },
  {
    id: 'docusign-export',
    targetId: 'footer',
    badge: 'Step 7 of 7 · Notification Email & 1-Click Launch',
    title: 'DocuSign Relays & Free 1-Click Deployment',
    summary: 'Receive immediate email notifications whenever someone executes the NDA or registers as a potential donor.',
    detailedGuide: [
      'Recipient Notification Email: Envelopes, audit certificates, and candidate questions are routed here.',
      '100% Free Hosting: Push to GitHub and deploy to Vercel in 20 seconds using the pre-configured vercel.json.',
      'Zero Backend Required: Entire application runs as a secure, blazing-fast client SPA with zero server fees.'
    ],
    fieldLabel: 'Your Notification / Relay Email',
    fieldType: 'email',
    fieldKey: 'docusignRecipientEmail',
    placeholder: 'e.g. recipient-relay@yourdomain.com',
    tip: 'You can copy your customized JSON data below or open the full profile editor for in-depth tweaking.'
  }
];

export const RecipientWalkthrough: React.FC<RecipientWalkthroughProps> = ({
  isOpen,
  onClose,
  profile,
  onUpdateProfile,
  onOpenFullCustomizer,
  onOpenScreening
}) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [copiedConfig, setCopiedConfig] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null);

  const currentStep = WALKTHROUGH_STEPS[currentStepIndex];

  // Auto-scroll target into view on step change
  useEffect(() => {
    if (!isOpen) return;

    if (currentStep.targetId === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const elem = document.getElementById(currentStep.targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth', block: 'center' });
      // Add a temporary glow highlight
      elem.classList.add('ring-4', 'ring-teal-500/60', 'transition-all', 'duration-500');
      const timer = setTimeout(() => {
        elem.classList.remove('ring-4', 'ring-teal-500/60');
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [currentStepIndex, isOpen, currentStep.targetId]);

  // Handle keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'n') {
        if (currentStepIndex < WALKTHROUGH_STEPS.length - 1) {
          setCurrentStepIndex(prev => prev + 1);
        }
      } else if (e.key === 'ArrowLeft' || e.key === 'p') {
        if (currentStepIndex > 0) {
          setCurrentStepIndex(prev => prev - 1);
        }
      } else if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentStepIndex, onClose]);

  if (!isOpen) return null;

  const handleNext = () => {
    if (currentStepIndex < WALKTHROUGH_STEPS.length - 1) {
      setCurrentStepIndex(prev => prev + 1);
    } else {
      onClose();
    }
  };

  const handlePrev = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(prev => prev - 1);
    }
  };

  const handleCopyConfig = () => {
    const configData = {
      realName: profile.realName,
      displayName: profile.displayName,
      transplantCenter: profile.transplantCenter,
      location: profile.location,
      bloodType: profile.bloodType,
      docusignRecipientEmail: profile.docusignRecipientEmail,
      contactProxyEmail: profile.contactProxyEmail,
      micrositeSlug: profile.micrositeSlug
    };
    navigator.clipboard.writeText(JSON.stringify(configData, null, 2));
    setCopiedConfig(true);
    setTimeout(() => setCopiedConfig(false), 2500);
  };

  const handleDownloadConfig = () => {
    const blob = new Blob([JSON.stringify(profile, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `microsite-config-${profile.realName.toLowerCase().replace(/\s+/g, '-') || 'recipient'}.json`;
    a.click();
    URL.revokeObjectURL(url);
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 2500);
  };

  const progressPercent = Math.round(((currentStepIndex + 1) / WALKTHROUGH_STEPS.length) * 100);

  return (
    <div className="fixed inset-0 z-50 pointer-events-none flex flex-col justify-end sm:justify-center items-center p-3 sm:p-6">
      {/* Semi-transparent dark ambient veil that allows clicks through */}
      <div 
        className="fixed inset-0 bg-stone-950/40 backdrop-blur-[2px] pointer-events-auto transition-opacity"
        onClick={onClose}
      />

      {/* Interactive Floating Tooltip Card */}
      <div 
        ref={tooltipRef}
        className="pointer-events-auto relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border-2 border-teal-500/80 overflow-hidden z-10 animate-in slide-in-from-bottom-4 duration-300 flex flex-col max-h-[88vh]"
      >
        {/* Top Gradient Progress Accent Bar */}
        <div className="w-full bg-stone-100 h-1.5">
          <div 
            className="bg-linear-to-r from-teal-500 to-emerald-400 h-1.5 transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {/* Card Header */}
        <div className="p-4 sm:p-5 border-b border-stone-200 bg-linear-to-r from-teal-50/80 via-white to-emerald-50/50 flex items-start justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-teal-600 text-white flex items-center justify-center shrink-0 shadow-xs">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold text-teal-800 bg-teal-100/90 px-2 py-0.5 rounded-full uppercase tracking-wider font-mono">
                  {currentStep.badge}
                </span>
                <span className="text-[11px] text-stone-500 font-medium">
                  {progressPercent}% Complete
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-bold font-['Outfit',sans-serif] text-slate-900 mt-0.5 leading-snug">
                {currentStep.title}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors cursor-pointer shrink-0"
            title="Exit Walkthrough"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Card Body - Scrollable if needed */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-4 text-xs sm:text-sm text-stone-700">
          <p className="font-medium text-stone-800 leading-relaxed text-sm">
            {currentStep.summary}
          </p>

          {/* Bulleted Points */}
          <div className="bg-stone-50 rounded-2xl p-3.5 border border-stone-200/80 space-y-2">
            {currentStep.detailedGuide.map((point, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs text-stone-600 leading-relaxed">
                <div className="w-4 h-4 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center shrink-0 text-[10px] font-bold mt-0.5">
                  ✓
                </div>
                <span>{point}</span>
              </div>
            ))}
          </div>

          {/* Interactive Live Input Field directly inside tooltip */}
          {currentStep.fieldKey && currentStep.fieldLabel && (
            <div className="p-3.5 rounded-2xl bg-teal-50/70 border border-teal-200 space-y-2">
              <label className="block text-xs font-bold text-teal-900 flex items-center justify-between">
                <span>{currentStep.fieldLabel}</span>
                <span className="text-[10px] text-teal-700 font-normal font-mono">Live In-Place Edit</span>
              </label>
              <div className="flex items-center gap-2">
                <input
                  type={currentStep.fieldType || 'text'}
                  value={String(profile[currentStep.fieldKey] || '')}
                  onChange={(e) => {
                    if (currentStep.fieldKey) {
                      onUpdateProfile({ [currentStep.fieldKey]: e.target.value });
                    }
                  }}
                  placeholder={currentStep.placeholder}
                  className="flex-1 px-3 py-2 bg-white rounded-xl border border-teal-300 text-slate-900 text-xs sm:text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-teal-500 shadow-2xs"
                />
                <button
                  type="button"
                  onClick={() => {
                    // Quick confirmation flash
                    const elem = document.getElementById(currentStep.targetId);
                    if (elem) elem.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  }}
                  className="px-3 py-2 rounded-xl bg-teal-700 hover:bg-teal-800 text-white text-xs font-bold shrink-0 transition-colors shadow-2xs cursor-pointer"
                >
                  Apply
                </button>
              </div>
            </div>
          )}

          {/* Quick Pro-Tip Box */}
          <div className="flex items-start gap-2 px-3 py-2 rounded-xl bg-amber-50/80 border border-amber-200/80 text-amber-900 text-xs">
            <Lightbulb className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <p className="leading-snug">
              <strong>Tip:</strong> {currentStep.tip}
            </p>
          </div>

          {/* Step 7 Quick Actions: Copy JSON, Download, Full Customizer */}
          {currentStepIndex === WALKTHROUGH_STEPS.length - 1 && (
            <div className="pt-2 flex flex-wrap items-center gap-2">
              <button
                onClick={handleCopyConfig}
                className="px-3 py-2 rounded-xl bg-stone-100 hover:bg-stone-200 border border-stone-300 text-stone-800 text-xs font-semibold transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <Copy className="w-3.5 h-3.5 text-stone-600" />
                <span>{copiedConfig ? '✓ Copied Config JSON!' : 'Copy My Config JSON'}</span>
              </button>

              <button
                onClick={handleDownloadConfig}
                className="px-3 py-2 rounded-xl bg-stone-100 hover:bg-stone-200 border border-stone-300 text-stone-800 text-xs font-semibold transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5 text-stone-600" />
                <span>{downloadSuccess ? '✓ Downloaded!' : 'Download Config File'}</span>
              </button>

              <button
                onClick={onOpenFullCustomizer}
                className="px-3 py-2 rounded-xl bg-teal-700 hover:bg-teal-800 text-white text-xs font-semibold transition-colors cursor-pointer flex items-center gap-1.5 shadow-xs"
              >
                <Settings2 className="w-3.5 h-3.5" />
                <span>Open Advanced Editor</span>
              </button>
            </div>
          )}
        </div>

        {/* Card Footer Navigation Controls */}
        <div className="p-4 sm:p-5 bg-stone-50 border-t border-stone-200 flex items-center justify-between gap-3">
          <div className="flex items-center gap-1.5">
            {WALKTHROUGH_STEPS.map((step, idx) => (
              <button
                key={step.id}
                onClick={() => setCurrentStepIndex(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                  idx === currentStepIndex 
                    ? 'w-7 bg-teal-600' 
                    : idx < currentStepIndex 
                    ? 'bg-teal-400' 
                    : 'bg-stone-300 hover:bg-stone-400'
                }`}
                title={`Jump to ${step.title}`}
              />
            ))}
          </div>

          <div className="flex items-center gap-2">
            {currentStepIndex > 0 && (
              <button
                onClick={handlePrev}
                className="px-3.5 py-2 rounded-xl bg-white hover:bg-stone-100 border border-stone-300 text-stone-700 text-xs font-semibold transition-colors cursor-pointer flex items-center gap-1 shadow-2xs"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Back</span>
              </button>
            )}

            <button
              onClick={handleNext}
              className="px-4 py-2 rounded-xl bg-teal-700 hover:bg-teal-800 text-white text-xs font-bold transition-all shadow-md shadow-teal-700/20 flex items-center gap-1.5 cursor-pointer transform hover:scale-[1.02]"
            >
              <span>{currentStepIndex === WALKTHROUGH_STEPS.length - 1 ? 'Finish Tour ✓' : 'Next Step'}</span>
              {currentStepIndex < WALKTHROUGH_STEPS.length - 1 && (
                <ChevronRight className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
