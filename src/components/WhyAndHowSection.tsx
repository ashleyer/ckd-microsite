import React from 'react';
import { 
  Heart, 
  Sparkles, 
  Smile, 
  ShieldCheck, 
  ArrowRight, 
  Share2, 
  MessageSquareHeart, 
  Building2, 
  Edit3,
  Flame,
  Award
} from 'lucide-react';
import { RecipientProfile } from '../types';

interface WhyAndHowSectionProps {
  profile: RecipientProfile;
  onOpenScreening: () => void;
  onOpenShareModal: () => void;
  onOpenCheerModal: () => void;
  onOpenEditModal: () => void;
}

export const WhyAndHowSection: React.FC<WhyAndHowSectionProps> = ({
  profile,
  onOpenScreening,
  onOpenShareModal,
  onOpenCheerModal,
  onOpenEditModal
}) => {
  return (
    <section id="why-and-how" className="py-16 lg:py-24 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section 1: Why You Should Help (With Heart & Humor) */}
        <div className="mb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold uppercase tracking-wider mb-3">
                <Smile className="w-3.5 h-3.5 text-amber-700" />
                <span>With Heart & A Little Humor</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold font-['Outfit',sans-serif] text-slate-900 tracking-tight">
                Why You Should Help {profile.isAnonymized ? 'Our Candidate' : profile.realName}
              </h2>
              <p className="mt-2 text-stone-600 text-base leading-relaxed max-w-2xl">
                Because living kidney donation is one of the only times in human history where you can literally hand someone decades of life, without losing your own. Plus, the side benefits are pretty unbeatable.
              </p>
            </div>

            <button
              onClick={onOpenEditModal}
              className="px-4 py-2.5 rounded-xl border border-stone-300 hover:border-amber-400 bg-white text-stone-700 text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer shadow-2xs self-start md:self-auto"
            >
              <Edit3 className="w-3.5 h-3.5 text-amber-600" />
              <span>Customize Reasons</span>
            </button>
          </div>

          {/* Why Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {profile.whyYouShouldHelp.map((item, idx) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-stone-200/90 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-8 h-8 rounded-lg bg-stone-100 group-hover:bg-amber-100 group-hover:text-amber-800 text-stone-600 font-bold text-xs flex items-center justify-center transition-colors">
                      0{idx + 1}
                    </span>
                    <span className="text-[11px] font-semibold text-teal-800 bg-teal-50 px-2.5 py-1 rounded-full border border-teal-200">
                      {item.humorTag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold font-['Outfit',sans-serif] text-slate-900 mb-2 group-hover:text-teal-700 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-400">
                  <span>Verified Impact</span>
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: How You Can Help (Action Pathways) */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-100 text-teal-800 text-xs font-semibold uppercase tracking-wider mb-3">
              <Heart className="w-3.5 h-3.5 text-teal-600 fill-teal-600" />
              <span>Action Steps</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-['Outfit',sans-serif] text-slate-900 tracking-tight">
              How You Can Help Right Now
            </h2>
            <p className="mt-2 text-stone-600 text-base leading-relaxed">
              You do not have to be a surgeon or a millionaire. Four tangible ways anyone can change the course of his life today.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {profile.howYouCanHelp.map((step) => (
              <div
                key={step.id}
                className="bg-white rounded-2xl p-6 border border-stone-200 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black font-mono text-teal-800/30">
                      {step.stepNumber}
                    </span>
                    <span className="text-[10px] uppercase font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      Cost: {step.cost}
                    </span>
                  </div>

                  <h3 className="font-bold text-slate-900 text-base mb-2">
                    {step.actionTitle}
                  </h3>

                  <p className="text-stone-600 text-xs leading-relaxed mb-4">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-100">
                  <div className="flex justify-between text-[11px] text-stone-500 mb-3 font-medium">
                    <span>Time Required:</span>
                    <span className="text-stone-900 font-semibold">{step.timeCommitment}</span>
                  </div>

                  {step.id === 'help-eval' && (
                    <button
                      onClick={onOpenScreening}
                      className="w-full py-2.5 bg-teal-700 hover:bg-teal-800 text-white font-semibold text-xs rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>Take Questionnaire</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}

                  {step.id === 'help-share' && (
                    <button
                      onClick={onOpenShareModal}
                      className="w-full py-2.5 bg-blue-700 hover:bg-blue-800 text-white font-semibold text-xs rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>Get QR Poster</span>
                      <Share2 className="w-3.5 h-3.5" />
                    </button>
                  )}

                  {step.id === 'help-paired' && (
                    <button
                      onClick={onOpenScreening}
                      className="w-full py-2.5 bg-stone-900 hover:bg-stone-800 text-white font-semibold text-xs rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>Learn Paired Swap</span>
                      <Building2 className="w-3.5 h-3.5" />
                    </button>
                  )}

                  {step.id === 'help-cheer' && (
                    <button
                      onClick={onOpenCheerModal}
                      className="w-full py-2.5 bg-amber-600 hover:bg-amber-700 text-white font-semibold text-xs rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>Send Cheer</span>
                      <MessageSquareHeart className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
