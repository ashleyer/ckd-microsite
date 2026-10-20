import React from 'react';
import { Heart, Sparkles, Menu, X, Shield, Lock, Eye, EyeOff, Settings, CheckCircle2, Mail, UserCheck } from 'lucide-react';
import { RecipientProfile, SignedNDA } from '../types';

interface NavbarProps {
  profile: RecipientProfile;
  signedNda: SignedNDA | null;
  onOpenScreening: () => void;
  onOpenPrivacyModal: () => void;
  onOpenShareModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  profile,
  signedNda,
  onOpenScreening,
  onOpenPrivacyModal,
  onOpenShareModal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 h-18">
          {/* Zone 1: Wordmark & Privacy Badge */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="#"
              className="flex items-center gap-2.5 text-base sm:text-lg font-bold tracking-tight text-slate-900 whitespace-nowrap hover:text-teal-700 transition-colors"
            >
              <div className="w-8 h-8 rounded-lg bg-teal-700 flex items-center justify-center text-white shadow-xs">
                <Heart className="w-4 h-4 fill-white" />
              </div>
              <span className="font-['Outfit',sans-serif]">
                {profile.isAnonymized ? 'Candidate A.' : profile.realName}
              </span>
            </a>

            {/* Quick Privacy Mode Indicator Badge */}
            <button
              onClick={onOpenPrivacyModal}
              className={`hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold border transition-all cursor-pointer ${
                profile.isAnonymized
                  ? 'bg-emerald-50 text-emerald-800 border-emerald-200 hover:bg-emerald-100'
                  : 'bg-stone-100 text-stone-700 border-stone-300 hover:bg-stone-200'
              }`}
              title="Click to toggle Privacy Shield / Edit Details"
            >
              {profile.isAnonymized ? (
                <>
                  <EyeOff className="w-3 h-3 text-emerald-700" />
                  <span>Privacy Shield: ON</span>
                </>
              ) : (
                <>
                  <Eye className="w-3 h-3 text-stone-600" />
                  <span>Public Name: ON</span>
                </>
              )}
            </button>
          </div>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden xl:flex items-center gap-4 text-xs font-semibold text-stone-600">
            <a href="#story" className="hover:text-teal-800 transition-colors whitespace-nowrap flex items-center gap-1 text-teal-900 font-bold bg-teal-50 px-2 py-1 rounded-md">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-600" />
              <span>Who He Is & Story</span>
            </a>
            <a href="#clinical-disclosure" className="hover:text-slate-900 transition-colors whitespace-nowrap">
              Clinical Status
            </a>
            <a href="#potential-impact" className="hover:text-teal-800 transition-colors whitespace-nowrap">
              Potential Impact
            </a>
            <a href="#why-and-how" className="hover:text-slate-900 transition-colors whitespace-nowrap">
              Why & How to Help
            </a>
            <a href="#community-testimonials" className="hover:text-slate-900 transition-colors whitespace-nowrap">
              Why He Matters
            </a>
            <a href="#testimonials" className="hover:text-slate-900 transition-colors whitespace-nowrap">
              Donor Stories
            </a>
            <a href="#interactive-challenge" className="hover:text-slate-900 transition-colors whitespace-nowrap">
              Quiz & Simulator
            </a>
            <a href="#email-updates" className="hover:text-slate-900 transition-colors whitespace-nowrap">
              Email Updates
            </a>
            <a href="#faq" className="hover:text-slate-900 transition-colors whitespace-nowrap">
              FAQ
            </a>
          </nav>

          {/* Zone 3: OAuth Badge & Actions */}
          <div className="flex items-center gap-2.5 shrink-0">
            {signedNda?.oauthUser ? (
              <div className="hidden lg:flex items-center gap-2 px-2.5 py-1 rounded-xl bg-blue-50 border border-blue-200 text-blue-900 text-[11px] font-medium">
                <img
                  src={signedNda.oauthUser.picture || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=60&q=80'}
                  alt="Google User"
                  className="w-5 h-5 rounded-full object-cover border border-blue-300"
                />
                <span className="truncate max-w-[120px] font-semibold">{signedNda.oauthUser.name}</span>
                <span className="text-[10px] text-blue-700 bg-blue-100 px-1.5 py-0.5 rounded font-mono">Google Verified</span>
              </div>
            ) : signedNda && (
              <div className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span className="truncate max-w-[130px]">{signedNda.signerName}</span>
                <span className="text-[9px] text-emerald-700 bg-emerald-100 px-1 rounded font-mono">NDA Signed</span>
              </div>
            )}

            <button
              onClick={onOpenPrivacyModal}
              className="px-3 py-2 text-xs font-semibold text-stone-700 hover:text-stone-900 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
              title="Customize profile, edit clinical details, or toggle privacy"
            >
              <Settings className="w-3.5 h-3.5 text-stone-600" />
              <span className="hidden md:inline">Edit Details</span>
            </button>

            <button
              onClick={onOpenScreening}
              className="px-3.5 sm:px-4 py-2 text-xs font-semibold text-white bg-teal-700 hover:bg-teal-800 rounded-lg shadow-xs hover:shadow transition-all whitespace-nowrap flex items-center gap-1.5 cursor-pointer"
            >
              <Heart className="w-3.5 h-3.5 fill-teal-100" />
              <span>Register to Donate</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg text-stone-600 hover:text-stone-900 hover:bg-stone-100 transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-b border-stone-200 bg-stone-50 px-4 py-4 space-y-2 text-xs font-medium">
          <div className="pb-2 mb-2 border-b border-stone-200 flex items-center justify-between">
            <span className="text-stone-500 font-semibold">Privacy Status:</span>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPrivacyModal();
              }}
              className="px-2.5 py-1 rounded bg-white border border-stone-200 text-stone-800 font-bold"
            >
              {profile.isAnonymized ? 'Anonymized Mode' : 'Full Name Mode'} (Edit)
            </button>
          </div>

          <a
            href="#story"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-teal-900 font-bold bg-teal-50 rounded-md"
          >
            Who He Is, Career, Passions & Goals
          </a>
          <a
            href="#clinical-disclosure"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-stone-700 hover:bg-stone-200 rounded-md"
          >
            Clinical Status & Treatment Team
          </a>
          <a
            href="#potential-impact"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-stone-700 hover:bg-stone-200 rounded-md"
          >
            Potential Impact Infographic (Recharts)
          </a>
          <a
            href="#why-and-how"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-stone-700 hover:bg-stone-200 rounded-md"
          >
            Why & How You Can Help
          </a>
          <a
            href="#community-testimonials"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-stone-700 hover:bg-stone-200 rounded-md"
          >
            Community Voices: Why He Matters
          </a>
          <a
            href="#video-story"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-stone-700 hover:bg-stone-200 rounded-md"
          >
            Family Video with Nephew Ben
          </a>
          <a
            href="#testimonials"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-stone-700 hover:bg-stone-200 rounded-md"
          >
            Living Donor Testimonials (Pop-up Wall)
          </a>
          <a
            href="#interactive-challenge"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-stone-700 hover:bg-stone-200 rounded-md"
          >
            Interactive Myth-Buster & Paired Simulator
          </a>
          <a
            href="#email-updates"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-stone-700 hover:bg-stone-200 rounded-md"
          >
            Automated Progress Email Updates
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-stone-700 hover:bg-stone-200 rounded-md"
          >
            Frequently Asked Questions
          </a>
        </div>
      )}
    </header>
  );
};
