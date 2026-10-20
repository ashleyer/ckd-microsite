import React from 'react';
import { 
  Heart, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  Share2, 
  MapPin, 
  Building2, 
  AlertCircle, 
  Lock, 
  EyeOff, 
  Edit3,
  FileCheck2
} from 'lucide-react';
import { RecipientProfile, SignedNDA } from '../types';

interface HeroSectionProps {
  profile: RecipientProfile;
  signedNda: SignedNDA | null;
  onOpenScreening: () => void;
  onOpenShareModal: () => void;
  onOpenPrivacyModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  profile,
  signedNda,
  onOpenScreening,
  onOpenShareModal,
  onOpenPrivacyModal
}) => {
  return (
    <section className="relative overflow-hidden pt-6 pb-16 lg:pt-12 lg:pb-24 border-b border-stone-200 bg-white">
      {/* Background warm aesthetic pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e7e5e4_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Trust & NDA Active Ribbon */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-5 mb-8 border-b border-stone-100 text-xs text-stone-500">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-teal-800 uppercase tracking-wider text-[11px]">
              Find A Kidney Microsite Program
            </span>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <span className="flex items-center gap-1 text-emerald-700 font-semibold">
              <FileCheck2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>DocuSign NDA Protected Session</span>
            </span>
          </div>

          <div className="flex items-center gap-3">
            {profile.isAnonymized ? (
              <span className="flex items-center gap-1.5 text-teal-800 bg-teal-50 px-2.5 py-0.5 rounded-full border border-teal-200 font-medium text-[11px]">
                <EyeOff className="w-3.5 h-3.5 text-teal-600" />
                <span>Privacy Cloaking Mode Active</span>
              </span>
            ) : (
              <span className="flex items-center gap-1.5 text-stone-600 bg-stone-100 px-2.5 py-0.5 rounded-full border border-stone-200 font-medium text-[11px]">
                <span>Public Identity Mode</span>
              </span>
            )}
            <button
              onClick={onOpenPrivacyModal}
              className="text-stone-500 hover:text-stone-800 underline text-[11px] cursor-pointer"
            >
              (Edit Info)
            </button>
          </div>
        </div>

        {/* 2-Column Split: Story & Hero Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Headlines & Call to Action (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Location & Status unboxed metadata */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-stone-600">
              <span className="flex items-center gap-1 text-teal-800">
                <MapPin className="w-3.5 h-3.5" />
                <span>{profile.location}</span>
              </span>
              <span aria-hidden="true" className="text-stone-300">·</span>
              <span className="text-stone-700 font-semibold">{profile.bloodType}</span>
              <span aria-hidden="true" className="text-stone-300">·</span>
              <span className="text-amber-800 font-semibold bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                eGFR: 8 mL/min (Stage 5)
              </span>
            </div>

            {/* Marquee Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 font-['Outfit',sans-serif] leading-[1.08] text-balance">
              Searching for a living kidney donor for{' '}
              <span className="text-teal-700 underline decoration-teal-300 decoration-wavy decoration-2 underline-offset-8">
                {profile.displayName}
              </span>
            </h1>

            {/* Empathic First-Person Introduction */}
            <p className="text-lg text-stone-700 leading-relaxed max-w-2xl">
              "Hi, I’m {profile.isAnonymized ? profile.displayName : profile.realName}. I am living with Stage 5 chronic renal failure under active care at MGH Transplant Center. With deceased donor waitlists running 5 to 8 years, a living donor is my brightest hope for a healthy, vibrant future. You do not have to match my blood type or live nearby—taking 5 minutes to learn about paired donation or sharing this page can literally save my life."
            </p>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                onClick={onOpenScreening}
                className="px-6 py-3.5 bg-teal-700 hover:bg-teal-800 text-white font-semibold text-base rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2.5 cursor-pointer focus-visible:outline-2 focus-visible:outline-teal-600"
              >
                <Heart className="w-5 h-5 fill-teal-100" />
                <span>Register to Be Evaluated</span>
                <ArrowRight className="w-4 h-4 ml-0.5" />
              </button>

              <button
                onClick={onOpenShareModal}
                className="px-5 py-3.5 bg-stone-100 hover:bg-stone-200 text-stone-800 font-medium text-base rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer border border-stone-200"
              >
                <Share2 className="w-4 h-4 text-stone-600" />
                <span>Share Secure Page</span>
              </button>

              <button
                onClick={onOpenPrivacyModal}
                className="px-4 py-3.5 text-stone-600 hover:text-stone-900 text-sm font-medium flex items-center justify-center gap-1.5 transition-colors underline-offset-4 hover:underline cursor-pointer"
              >
                <Edit3 className="w-4 h-4 text-teal-600" />
                <span>Fill In / Edit Details</span>
              </button>
            </div>

            {/* Trust Points adjacent to CTA */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-stone-100 text-xs text-stone-600">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                <span><strong>100% Confidential:</strong> Free initial medical evaluation with zero pressure.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                <span><strong>No Out-of-Pocket Costs:</strong> 100% of donor surgery & hospital bills covered.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                <span><strong>Paired Exchange:</strong> Donors anywhere in the US can donate on his behalf.</span>
              </div>
            </div>

            {/* Strict NOTA Rule Banner */}
            <div className="p-3.5 bg-amber-50/70 border border-amber-200/80 rounded-xl flex items-start gap-3 text-xs text-amber-900">
              <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold">Federal Law & NKR Strict Ethics Rule:</span> Organ donation must be purely voluntary and altruistic. Under the National Organ Transplant Act (NOTA), no payment or compensation can ever be offered or accepted.
              </div>
            </div>
          </div>

          {/* Right Column: Hero Portrait Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Backing decorative frame */}
              <div className="absolute -inset-3 rounded-3xl bg-teal-100/60 rotate-1 -z-10" />

              {/* Card surface */}
              <div className="overflow-hidden rounded-2xl bg-white border border-stone-200 shadow-xl">
                <div className="relative aspect-[4/5] bg-stone-100">
                  <img
                    src="/assets/aistudio/IMG_1542_c2a83898.jpeg"
                    alt={profile.displayName}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top"
                  />

                  {/* Gradient bottom scrim for readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent" />

                  {/* Watermark badge for privacy-conscious seekers */}
                  <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-stone-900/80 backdrop-blur-xs text-white text-[10px] font-mono tracking-wide uppercase border border-stone-700 flex items-center gap-1.5">
                    <Lock className="w-3 h-3 text-teal-400" />
                    <span>NDA Protected Dossier</span>
                  </div>

                  {/* Overlay Quote */}
                  <div className="absolute bottom-0 inset-x-0 p-5 text-white">
                    <p className="text-sm font-medium leading-relaxed italic text-stone-100">
                      "I still have so much living, coaching, and family milestones ahead. Finding a living donor means giving me the gift of tomorrow."
                    </p>
                    <div className="mt-2.5 flex items-center justify-between text-xs text-stone-300">
                      <span className="font-semibold text-white">{profile.displayName}</span>
                      <span>Greater Boston Area, MA</span>
                    </div>
                  </div>
                </div>

                {/* Card footer details */}
                <div className="p-4 bg-stone-50/90 border-t border-stone-100 flex items-center justify-between text-xs text-stone-600">
                  <div className="space-y-0.5">
                    <div className="text-[11px] text-stone-400 font-medium">CAMPAIGN MICROSITE</div>
                    <div className="font-mono text-stone-800 font-semibold">{profile.micrositeSlug}</div>
                  </div>
                  <button
                    onClick={onOpenShareModal}
                    className="px-3 py-1.5 text-xs font-semibold text-teal-800 hover:text-teal-900 bg-white border border-stone-200 rounded-lg hover:border-teal-300 transition-colors shadow-2xs cursor-pointer"
                  >
                    View QR Code
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
