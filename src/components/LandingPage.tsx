import React, { useState } from 'react';
import { 
  Heart, 
  ShieldCheck, 
  ArrowRight, 
  Lock, 
  FileCheck2, 
  Sparkles, 
  Users, 
  CheckCircle2, 
  Building2, 
  ExternalLink,
  ChevronRight,
  Smile,
  Quote,
  Clock,
  LogIn,
  Info,
  Shield,
  Activity,
  Award,
  Layers
} from 'lucide-react';
import { AuthorModal } from './AuthorModal';

interface LandingPageProps {
  onProceedToNda: () => void;
  onGoogleSignIn: () => void;
  isGoogleSigningIn: boolean;
  noticeMessage?: string;
}

export const LandingPage: React.FC<LandingPageProps> = ({
  onProceedToNda,
  onGoogleSignIn,
  isGoogleSigningIn,
  noticeMessage
}) => {
  const [isAuthorModalOpen, setIsAuthorModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 flex flex-col justify-between font-sans selection:bg-teal-500 selection:text-stone-950">
      {/* 2026 Minimalist Navigation Bar - STRICTLY NO NAMES OR PHOTOS */}
      <header className="border-b border-stone-800/80 bg-stone-950/80 backdrop-blur-xl sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-teal-500 text-stone-950 flex items-center justify-center font-black shadow-lg shadow-teal-500/20">
              <Heart className="w-5 h-5 fill-stone-950" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-white text-sm sm:text-base tracking-tight font-['Outfit',sans-serif]">
                  Living Kidney Search
                </span>
                <span className="px-2 py-0.5 rounded-full bg-teal-950/90 text-teal-300 text-[10px] font-semibold border border-teal-500/40 font-mono">
                  MGH Transplant Center
                </span>
              </div>
              <p className="text-[11px] text-stone-400 hidden sm:block">
                National Kidney Registry (NKR) Living Donor Paired Exchange Initiative
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 sm:gap-3">
            <button
              onClick={onGoogleSignIn}
              disabled={isGoogleSigningIn}
              className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-2 bg-stone-900 hover:bg-stone-800 text-stone-200 text-xs font-semibold rounded-xl border border-stone-700/80 transition-all cursor-pointer shadow-xs hover:border-stone-600"
            >
              <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
              </svg>
              <span>{isGoogleSigningIn ? 'Signing in...' : 'Sign In'}</span>
            </button>

            <button
              onClick={onProceedToNda}
              className="px-3.5 sm:px-4 py-2 bg-teal-500 hover:bg-teal-400 text-stone-950 font-bold text-xs rounded-xl transition-all shadow-md shadow-teal-500/20 flex items-center gap-1.5 cursor-pointer transform hover:scale-[1.02]"
            >
              <span>Sign Mutual NDA</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </header>

      {/* Notice Banner if returning from Google sign-in */}
      {noticeMessage && (
        <div className="bg-teal-950/90 border-b border-teal-800 text-teal-200 text-xs py-3 px-4 text-center flex items-center justify-center gap-2">
          <Info className="w-4 h-4 text-teal-400 shrink-0" />
          <span>{noticeMessage}</span>
        </div>
      )}

      {/* Hero Section: Modern 2026 Design Constitution */}
      <main className="flex-1">
        <section className="relative py-16 sm:py-24 lg:py-28 overflow-hidden">
          {/* Subtle Ambient Radial Lighting */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-teal-500/10 blur-[140px] rounded-full pointer-events-none" />
          <div className="absolute bottom-12 right-12 w-96 h-96 bg-amber-500/10 blur-[130px] rounded-full pointer-events-none" />

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8 sm:space-y-10">
            {/* Top Privacy & Security Shield Pill */}
            <div className="inline-flex flex-wrap items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-stone-900/90 border border-stone-800 text-xs shadow-inner">
              <span className="flex items-center gap-1.5 text-teal-400 font-semibold">
                <Lock className="w-3.5 h-3.5" />
                <span>Strict Patient Medical Privacy</span>
              </span>
              <span className="text-stone-600">·</span>
              <span className="text-stone-300">Name & Photography Unlocked After Mutual NDA</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-['Outfit',sans-serif] tracking-tight text-white leading-[1.15] max-w-4xl mx-auto">
              A Quiet Search for an <span className="text-teal-400">Extraordinary Living Donor</span>.
            </h1>

            {/* Brief Cause Narrative - NO NAMES, NO DIALYSIS MENTIONS */}
            <p className="text-base sm:text-lg lg:text-xl text-stone-300 max-w-3xl mx-auto leading-relaxed font-light">
              A 44-year-old father, youth mentor, and master craftsman in Greater Boston is in critical need of a living kidney donor match through the <strong>MGH Transplant Center</strong>. Progressive Stage 5 chronic renal disease has reduced his kidney function to under 8%. Because human beings are born with two kidneys and thrive on just one, a living donor can restore decades of healthy life.
            </p>

            {/* 3 Pillars Grid (2026 Glassmorphic Cards) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto text-left pt-2">
              <div className="p-6 rounded-3xl bg-stone-900/70 border border-stone-800/90 backdrop-blur-md space-y-2.5 shadow-xl hover:border-teal-500/40 transition-colors">
                <div className="w-9 h-9 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center font-bold text-sm">
                  1
                </div>
                <h3 className="font-bold text-white text-base">Any Blood Type Qualifies</h3>
                <p className="text-xs text-stone-400 leading-relaxed">
                  Through the National Kidney Registry (NKR) Paired Exchange, incompatible donor-recipient pairs are matched nationwide. Anyone anywhere can donate on his behalf.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-stone-900/70 border border-stone-800/90 backdrop-blur-md space-y-2.5 shadow-xl hover:border-emerald-500/40 transition-colors">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-sm">
                  2
                </div>
                <h3 className="font-bold text-white text-base">$0 Cost to the Living Donor</h3>
                <p className="text-xs text-stone-400 leading-relaxed">
                  100% of medical testing, surgery, hospitalization, travel, and lost wages are fully reimbursed under the non-profit <strong>Donor Shield</strong> program.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-stone-900/70 border border-stone-800/90 backdrop-blur-md space-y-2.5 shadow-xl hover:border-amber-500/40 transition-colors">
                <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-sm">
                  3
                </div>
                <h3 className="font-bold text-white text-base">Zero Pressure or Obligation</h3>
                <p className="text-xs text-stone-400 leading-relaxed">
                  Taking the 15-minute confidential health screening commits you to nothing. You retain 100% autonomy to pause or withdraw at any stage with total privacy.
                </p>
              </div>
            </div>

            {/* Why Mutual NDA Box */}
            <div className="p-6 sm:p-8 rounded-3xl bg-stone-900/90 border border-teal-500/30 max-w-3xl mx-auto text-left space-y-5 shadow-2xl backdrop-blur-lg">
              <div className="flex items-start sm:items-center gap-3.5">
                <div className="w-11 h-11 rounded-2xl bg-teal-900/80 border border-teal-500/40 text-teal-400 flex items-center justify-center shrink-0 shadow-inner">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="font-bold text-white text-base sm:text-lg">
                    Why Full Details Are Protected by a Mutual NDA
                  </h2>
                  <p className="text-xs text-teal-300 font-mono">
                    Strict HIPAA Privacy & Federal NOTA Compliance Safeguard
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                To safeguard the patient's personal dignity, medical records, and family privacy, this campaign operates under strict electronic non-disclosure protocols. Upon signing the 60-second DocuSign mutual agreement, you immediately unlock:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-stone-300 pt-1">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Full candidate identity, story & photos</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>9 rich dossier chapters & video memoirs</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>MGH Transplant Center clearances & lab data</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Community testimonials from family & friends</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={onProceedToNda}
                  className="w-full sm:w-auto px-8 py-4 bg-teal-500 hover:bg-teal-400 text-stone-950 font-bold text-sm sm:text-base rounded-2xl shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2.5 cursor-pointer transform hover:scale-[1.02]"
                >
                  <FileCheck2 className="w-5 h-5" />
                  <span>Review & Sign Mutual NDA</span>
                  <ArrowRight className="w-5 h-5" />
                </button>

                <button
                  onClick={onGoogleSignIn}
                  disabled={isGoogleSigningIn}
                  className="w-full sm:w-auto px-6 py-4 bg-stone-800/90 hover:bg-stone-800 text-stone-200 font-semibold text-xs sm:text-sm rounded-2xl border border-stone-700 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <LogIn className="w-4 h-4 text-teal-400" />
                  <span>Already signed? Sign In</span>
                </button>
              </div>
            </div>

            {/* Sneak Peek of the 9 Chapters Locked Behind NDA */}
            <div className="pt-6 border-t border-stone-800/80 max-w-4xl mx-auto space-y-3">
              <span className="text-xs uppercase font-bold tracking-wider text-stone-500 block">
                9 Confidential Dossier Chapters Unlocked After NDA:
              </span>
              <div className="flex flex-wrap justify-center gap-2 sm:gap-2.5 text-xs">
                <span className="px-3 py-1.5 rounded-xl bg-stone-900 text-stone-300 border border-stone-800">
                  📖 1. His Story & Character
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-stone-900 text-stone-300 border border-stone-800">
                  💼 2. Career & Craftsmanship
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-stone-900 text-stone-300 border border-stone-800">
                  🤝 3. Community Impact & Mentorship
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-stone-900 text-stone-300 border border-stone-800">
                  🎤 4. Stand-Up Comedy & Wit
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-stone-900 text-stone-300 border border-stone-800">
                  ✍️ 5. Personal Writings & Essays
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-stone-900 text-stone-300 border border-stone-800">
                  🌲 6. Travels & Outdoor Passes
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-stone-900 text-stone-300 border border-stone-800">
                  👨‍👩‍👧 7. Family & Lifelong Friends
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-stone-900 text-stone-300 border border-stone-800">
                  🛠️ 8. Fine Woodworking Hobbies
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-stone-900 text-stone-300 border border-stone-800">
                  🎯 9. Post-Transplant Dreams
                </span>
              </div>
            </div>

            {/* General Advocate Quote - NO NAMES */}
            <div className="max-w-xl mx-auto bg-stone-900/60 p-4 sm:p-5 rounded-2xl border border-stone-800/90 text-left flex items-start gap-3.5">
              <Quote className="w-6 h-6 text-teal-500/40 shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm text-stone-300 leading-relaxed italic font-serif">
                "He is the kind of person who shows up for everyone else with humor, craftsmanship, and an open heart. We are rallying together to find the champion who can give him back his future."
                <div className="not-italic font-bold text-white text-[11px] mt-2 text-right font-sans">
                  — Family & Community Support Coalition
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer with visible but not distracting Courier Green line */}
      <footer className="border-t border-stone-800/80 bg-stone-950 py-6 text-center text-xs text-stone-500 space-y-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px]">
          <div>
            © {new Date().getFullYear()} Living Kidney Donor Search Campaign · Secured by DocuSign HIPAA Shield
          </div>
          <div className="flex items-center gap-2 text-stone-400">
            <ShieldCheck className="w-3.5 h-3.5 text-teal-500" />
            <span>National Organ Transplant Act (42 U.S.C. 274e) Compliant</span>
          </div>
        </div>

        {/* User Requested Custom Courier Green Line */}
        <div className="pt-2">
          <p className="text-emerald-400 text-xs sm:text-sm tracking-wide font-['Courier_New',Courier,monospace]">
            built w 💚 by{' '}
            <button
              onClick={() => setIsAuthorModalOpen(true)}
              className="underline hover:text-emerald-300 font-bold cursor-pointer transition-colors"
            >
              Ashley
            </button>{' '}
            in Boston 02116, 2006.
          </p>
        </div>
      </footer>

      {/* Reusable Author Modal */}
      <AuthorModal
        isOpen={isAuthorModalOpen}
        onClose={() => setIsAuthorModalOpen(false)}
      />
    </div>
  );
};
