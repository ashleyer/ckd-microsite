import React from 'react';
import { 
  Heart, 
  Share2, 
  MessageSquareHeart, 
  Users, 
  PhoneCall, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  ExternalLink,
  Sparkles,
  HelpCircle
} from 'lucide-react';
import { RecipientProfile } from '../types';

interface HowToHelpSectionProps {
  profile?: RecipientProfile;
  onOpenScreening: () => void;
  onOpenShareModal: () => void;
  onOpenCheerModal: () => void;
}

export const HowToHelpSection: React.FC<HowToHelpSectionProps> = ({
  profile,
  onOpenScreening,
  onOpenShareModal,
  onOpenCheerModal
}) => {
  const candidateName = profile ? (profile.isAnonymized ? profile.displayName : profile.realName) : 'Our Candidate';
  const shortName = profile ? (profile.isAnonymized ? 'Our Candidate' : profile.realName.split(' ')[0]) : 'Our Candidate';

  return (
    <section id="how-to-help" className="py-20 lg:py-28 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <Heart className="w-3.5 h-3.5 text-emerald-600 fill-emerald-600" />
            <span>Ways to Make a Difference</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-['Outfit',sans-serif] text-slate-900 tracking-tight">
            How You Can Help {shortName}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-stone-600 leading-relaxed">
            Finding a living kidney donor is a community effort. Even if donating a kidney isn't the right choice for you, every action—from sharing his link to sending an encouraging word—brings {shortName} one step closer to a match.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {/* Pathway 1: Consider Donation */}
          <div className="flex flex-col bg-stone-50 hover:bg-stone-100/80 rounded-2xl p-6 border border-stone-200 transition-all shadow-xs hover:shadow-md">
            <div className="w-12 h-12 rounded-xl bg-teal-600 text-white flex items-center justify-center mb-5 shadow-sm">
              <Heart className="w-6 h-6 fill-white" />
            </div>
            <div className="text-xs font-semibold text-teal-800 uppercase tracking-wider mb-1">
              Path 01 · Life-Saving
            </div>
            <h3 className="text-xl font-bold font-['Outfit',sans-serif] text-slate-900 mb-2">
              Step Forward as a Potential Donor
            </h3>
            <p className="text-stone-600 text-sm leading-relaxed mb-6 flex-1">
              Complete a confidential 15-minute online health questionnaire. It carries zero obligation, and your privacy is 100% protected. You can be tested anywhere in the country.
            </p>
            <button
              onClick={onOpenScreening}
              className="w-full py-3 bg-teal-700 hover:bg-teal-800 text-white font-semibold text-sm rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Start Screening</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Pathway 2: Share Story */}
          <div className="flex flex-col bg-stone-50 hover:bg-stone-100/80 rounded-2xl p-6 border border-stone-200 transition-all shadow-xs hover:shadow-md">
            <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center mb-5 shadow-sm">
              <Share2 className="w-6 h-6" />
            </div>
            <div className="text-xs font-semibold text-blue-800 uppercase tracking-wider mb-1">
              Path 02 · Community Reach
            </div>
            <h3 className="text-xl font-bold font-['Outfit',sans-serif] text-slate-900 mb-2">
              Share the Story & QR Poster
            </h3>
            <p className="text-stone-600 text-sm leading-relaxed mb-6 flex-1">
              Most living donors are found through friend-of-a-friend networks. Post this link on Facebook, Instagram, LinkedIn, or print out QR code flyers for your local gym or workplace.
            </p>
            <button
              onClick={onOpenShareModal}
              className="w-full py-3 bg-blue-700 hover:bg-blue-800 text-white font-semibold text-sm rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Share Campaign</span>
              <Share2 className="w-4 h-4" />
            </button>
          </div>

          {/* Pathway 3: Send Encouragement */}
          <div className="flex flex-col bg-stone-50 hover:bg-stone-100/80 rounded-2xl p-6 border border-stone-200 transition-all shadow-xs hover:shadow-md">
            <div className="w-12 h-12 rounded-xl bg-amber-600 text-white flex items-center justify-center mb-5 shadow-sm">
              <MessageSquareHeart className="w-6 h-6" />
            </div>
            <div className="text-xs font-semibold text-amber-800 uppercase tracking-wider mb-1">
              Path 03 · Emotional Lift
            </div>
            <h3 className="text-xl font-bold font-['Outfit',sans-serif] text-slate-900 mb-2">
              Send a Cheer or Message of Hope
            </h3>
            <p className="text-stone-600 text-sm leading-relaxed mb-6 flex-1">
              Managing advanced kidney disease is challenging, but kind words recharge the spirit. Leave {shortName} a personal note, prayer, or positive thought. His family reads every single message together.
            </p>
            <button
              onClick={onOpenCheerModal}
              className="w-full py-3 bg-amber-700 hover:bg-amber-800 text-white font-semibold text-sm rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Send Cheer to {shortName}</span>
              <MessageSquareHeart className="w-4 h-4" />
            </button>
          </div>

          {/* Pathway 4: Become an Advocate */}
          <div className="flex flex-col bg-stone-50 hover:bg-stone-100/80 rounded-2xl p-6 border border-stone-200 transition-all shadow-xs hover:shadow-md">
            <div className="w-12 h-12 rounded-xl bg-purple-600 text-white flex items-center justify-center mb-5 shadow-sm">
              <Users className="w-6 h-6" />
            </div>
            <div className="text-xs font-semibold text-purple-800 uppercase tracking-wider mb-1">
              Path 04 · Advocacy Squad
            </div>
            <h3 className="text-xl font-bold font-['Outfit',sans-serif] text-slate-900 mb-2">
              Join the Kidney Search Team
            </h3>
            <p className="text-stone-600 text-sm leading-relaxed mb-6 flex-1">
              Help coordinate digital campaigns, distribute flyers in your neighborhood, or introduce our story to running clubs, community groups, and local businesses.
            </p>
            <a
              href="#updates"
              className="w-full py-3 bg-purple-700 hover:bg-purple-800 text-white font-semibold text-sm rounded-xl transition-colors flex items-center justify-center gap-2 text-center"
            >
              <span>Join Progress Updates</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Clear Guidance Card: What to Expect When Contacting Transplant Center */}
        <div className="bg-stone-900 text-white rounded-3xl p-8 sm:p-10 shadow-xl relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-950 border border-teal-500/40 text-teal-300 text-xs font-semibold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-teal-400" />
                <span>Zero Obligation · 100% Confidential</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-['Outfit',sans-serif] text-white tracking-tight">
                What Happens When You Reach Out to the Transplant Center?
              </h3>
              <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
                Contacting the transplant center or starting the online health screening does not commit you to surgery. The living donor evaluation team is completely independent from the recipient’s team—their sole mission is to protect YOUR health, safety, and informed consent.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="flex items-start gap-2 text-xs text-stone-300">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <span>Free, comprehensive medical workup ($0 cost)</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-stone-300">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <span>You can stop or pause at any time for any reason</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-stone-300">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <span>Your medical details are never shared with {shortName}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3 justify-center">
              <button
                onClick={onOpenScreening}
                className="w-full py-4 bg-teal-500 hover:bg-teal-400 text-stone-950 font-bold text-base rounded-2xl shadow-lg transition-transform transform hover:scale-[1.02] flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Confidential Donor Inquiry</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <a
                href="tel:1-800-555-KIDNEY"
                className="w-full py-3 bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-semibold rounded-xl border border-stone-700 transition-colors flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Call Independent Donor Coordinator</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
