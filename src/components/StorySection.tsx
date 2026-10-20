import React, { useState } from 'react';
import { RecipientProfile } from '../types';
import { 
  User, 
  Briefcase, 
  HeartHandshake, 
  Mic, 
  BookOpen, 
  Compass, 
  Users, 
  Wrench, 
  Target, 
  Sparkles, 
  Quote, 
  CheckCircle, 
  Calendar, 
  Trophy, 
  ArrowRight,
  ExternalLink,
  Smile,
  ShieldCheck,
  Palmtree,
  Hammer,
  Clock,
  Heart
} from 'lucide-react';

interface StorySectionProps {
  profile: RecipientProfile;
  onOpenScreening: () => void;
  onOpenPrivacyModal: () => void;
  onOpenShareModal: () => void;
}

export const StorySection: React.FC<StorySectionProps> = ({
  profile,
  onOpenScreening,
  onOpenPrivacyModal,
  onOpenShareModal
}) => {
  const [activeTab, setActiveTab] = useState<
    'story' | 'career' | 'community' | 'comedy' | 'writings' | 'travels' | 'family' | 'hobbies' | 'dreams'
  >('story');

  const tabs = [
    { id: 'story', label: '1. His Story', icon: User },
    { id: 'career', label: '2. His Career', icon: Briefcase },
    { id: 'community', label: '3. Community Impact', icon: HeartHandshake },
    { id: 'comedy', label: '4. Comedy', icon: Mic },
    { id: 'writings', label: '5. Writings', icon: BookOpen },
    { id: 'travels', label: '6. Travels', icon: Compass },
    { id: 'family', label: '7. Family & Friends', icon: Users },
    { id: 'hobbies', label: '8. Hobbies', icon: Wrench },
    { id: 'dreams', label: '9. Dreams', icon: Target }
  ] as const;

  return (
    <section id="story" className="py-16 lg:py-24 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-100 text-teal-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Human Story Behind the Search</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold font-['Outfit',sans-serif] text-slate-900 tracking-tight">
            Discover {profile.isAnonymized ? profile.displayName : profile.realName}
          </h2>

          <p className="mt-3 text-base sm:text-lg text-stone-600 leading-relaxed">
            A craftsman, stand-up comic, youth mentor, and devoted family man seeking a living kidney donor at MGH Transplant Center.
          </p>

          {/* Template Guidance Banner */}
          {profile.isAnonymized && (
            <div className="mt-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-amber-100/80 border border-amber-300 text-amber-900 text-xs font-medium">
              <Sparkles className="w-4 h-4 text-amber-700 shrink-0" />
              <span>Template Mode: Alex Miller is a customizable placeholder. Fill in your own details anytime!</span>
              <button
                onClick={onOpenPrivacyModal}
                className="underline font-bold text-amber-950 hover:text-teal-800 ml-1 cursor-pointer"
              >
                Customize Story →
              </button>
            </div>
          )}
        </div>

        {/* 9-Tab Navigation Bar */}
        <div className="mb-10 flex justify-center overflow-x-auto pb-2">
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 p-1.5 bg-stone-200/80 rounded-2xl max-w-5xl shadow-inner">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'bg-white text-teal-950 shadow-md font-bold'
                      : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100/60'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-teal-600' : 'text-stone-400'}`} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content Panels */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Tab Panel (8 Cols) */}
          <div className="lg:col-span-8">
            {/* TAB 1: HIS STORY */}
            {activeTab === 'story' && (
              <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/90 shadow-xs space-y-8 animate-in fade-in duration-200">
                <div className="flex items-center justify-between pb-4 border-b border-stone-100">
                  <div>
                    <span className="text-xs font-bold text-teal-600 uppercase tracking-wider block">Chapter 1</span>
                    <h3 className="text-2xl font-bold font-['Outfit',sans-serif] text-slate-900 mt-1">
                      {profile.hisStory.headline}
                    </h3>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center shrink-0">
                    <User className="w-6 h-6" />
                  </div>
                </div>

                <div className="prose prose-stone max-w-none text-stone-700 leading-relaxed text-sm sm:text-base space-y-4">
                  <p>{profile.hisStory.bioSummary}</p>
                  <p className="bg-stone-50 p-4 rounded-2xl border-l-4 border-teal-600 italic text-stone-800 text-sm">
                    "{profile.hisStory.whatPeopleLoveAboutHim}"
                  </p>
                  <p>{profile.hisStory.diagnosisStory}</p>
                </div>

                {/* Character Traits Grid */}
                <div>
                  <h4 className="font-bold text-stone-900 text-sm uppercase tracking-wide mb-4">
                    Signature Character Traits
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {profile.hisStory.personalityTraits.map((t, idx) => (
                      <div key={idx} className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80 space-y-1.5">
                        <div className="flex items-center gap-2">
                          <span className="text-xl">{t.emoji}</span>
                          <span className="font-bold text-stone-900 text-sm">{t.trait}</span>
                        </div>
                        <p className="text-xs text-stone-600 leading-relaxed">{t.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Favorite Humor Quotes */}
                <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold text-amber-900 uppercase tracking-wide">
                    <Smile className="w-4 h-4 text-amber-600" />
                    <span>Laughter in the Face of Kidney Disease</span>
                  </div>
                  <div className="space-y-2">
                    {profile.hisStory.favoriteHumorQuotes.map((q, idx) => (
                      <div key={idx} className="text-xs sm:text-sm text-stone-800 italic pl-3 border-l-2 border-amber-400">
                        {q}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Journey Milestones */}
                <div>
                  <h4 className="font-bold text-stone-900 text-sm uppercase tracking-wide mb-4 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-teal-600" />
                    <span>Clinical & Life Milestones</span>
                  </h4>
                  <div className="space-y-3">
                    {profile.hisStory.milestones.map((m, idx) => (
                      <div key={idx} className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 flex items-start justify-between gap-3 text-xs">
                        <div>
                          <div className="font-bold text-stone-900 text-sm">{m.title}</div>
                          <div className="text-stone-600 mt-0.5">{m.detail}</div>
                        </div>
                        <div className="text-right shrink-0">
                          <span className="font-mono text-[11px] text-teal-800 font-bold block">{m.date}</span>
                          <span className={`inline-block px-2 py-0.5 rounded text-[10px] uppercase font-bold mt-1 ${
                            m.status === 'completed' ? 'bg-emerald-100 text-emerald-800' :
                            m.status === 'ongoing' ? 'bg-blue-100 text-blue-800' : 'bg-amber-100 text-amber-800'
                          }`}>
                            {m.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: HIS CAREER */}
            {activeTab === 'career' && (
              <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/90 shadow-xs space-y-8 animate-in fade-in duration-200">
                <div className="flex items-center justify-between pb-4 border-b border-stone-100">
                  <div>
                    <span className="text-xs font-bold text-teal-600 uppercase tracking-wider block">Chapter 2</span>
                    <h3 className="text-2xl font-bold font-['Outfit',sans-serif] text-slate-900 mt-1">
                      {profile.hisCareer.title}
                    </h3>
                    <p className="text-xs text-stone-500 mt-0.5">{profile.hisCareer.profession} · {profile.hisCareer.companyOrField}</p>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
                    <Briefcase className="w-6 h-6" />
                  </div>
                </div>

                <div className="prose prose-stone max-w-none text-stone-700 text-sm sm:text-base leading-relaxed space-y-4">
                  <p>{profile.hisCareer.workEthic}</p>
                </div>

                {/* Highlights */}
                <div>
                  <h4 className="font-bold text-stone-900 text-sm uppercase tracking-wide mb-3 flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-amber-600" />
                    <span>Career Accomplishments</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {profile.hisCareer.workHighlights.map((hl, idx) => (
                      <div key={idx} className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 text-xs text-stone-700 flex items-start gap-2.5">
                        <CheckCircle className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Workplace Stories */}
                <div className="space-y-3">
                  <h4 className="font-bold text-stone-900 text-sm uppercase tracking-wide flex items-center gap-2">
                    <Hammer className="w-4 h-4 text-stone-700" />
                    <span>Tales from the Woodshop</span>
                  </h4>
                  <div className="grid grid-cols-1 gap-3">
                    {profile.hisCareer.workplaceStories.map((story, idx) => (
                      <div key={idx} className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-1">
                        <div className="font-bold text-stone-900 text-sm">{story.title}</div>
                        <p className="text-xs text-stone-600 leading-relaxed">{story.story}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Post-transplant career aspirations */}
                <div className="p-5 rounded-2xl bg-teal-50 border border-teal-200 space-y-2">
                  <div className="text-xs font-bold text-teal-900 uppercase tracking-wide">
                    Future Career Vision Post-Transplant
                  </div>
                  <p className="text-xs sm:text-sm text-teal-950 leading-relaxed">
                    {profile.hisCareer.careerAspirationsPostTransplant}
                  </p>
                </div>
              </div>
            )}

            {/* TAB 3: COMMUNITY IMPACT */}
            {activeTab === 'community' && (
              <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/90 shadow-xs space-y-8 animate-in fade-in duration-200">
                <div className="flex items-center justify-between pb-4 border-b border-stone-100">
                  <div>
                    <span className="text-xs font-bold text-teal-600 uppercase tracking-wider block">Chapter 3</span>
                    <h3 className="text-2xl font-bold font-['Outfit',sans-serif] text-slate-900 mt-1">
                      {profile.communityImpact.title}
                    </h3>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                    <HeartHandshake className="w-6 h-6" />
                  </div>
                </div>

                <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
                  {profile.communityImpact.overview}
                </p>

                {/* Initiatives Grid */}
                <div className="space-y-4">
                  {profile.communityImpact.initiatives.map((init, idx) => (
                    <div key={idx} className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div>
                          <h4 className="font-bold text-stone-900 text-base">{init.title}</h4>
                          <span className="text-xs text-teal-700 font-semibold">{init.role}</span>
                        </div>
                        <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold border border-emerald-300">
                          {init.impactMetric}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                        {init.description}
                      </p>
                      <div className="pt-2 border-t border-stone-200/60 text-xs italic text-stone-700 font-serif">
                        {init.quote}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 4: COMEDY */}
            {activeTab === 'comedy' && (
              <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/90 shadow-xs space-y-8 animate-in fade-in duration-200">
                <div className="flex items-center justify-between pb-4 border-b border-stone-100">
                  <div>
                    <span className="text-xs font-bold text-purple-600 uppercase tracking-wider block">Chapter 4</span>
                    <h3 className="text-2xl font-bold font-['Outfit',sans-serif] text-slate-900 mt-1">
                      {profile.comedy.title}
                    </h3>
                    <p className="text-xs text-stone-500 italic mt-0.5">{profile.comedy.tagline}</p>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-700 flex items-center justify-center shrink-0">
                    <Mic className="w-6 h-6" />
                  </div>
                </div>

                <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
                  {profile.comedy.standupJourney}
                </p>

                {/* Stand-Up Comedy Bits */}
                <div className="space-y-4">
                  <h4 className="font-bold text-stone-900 text-sm uppercase tracking-wide flex items-center gap-2">
                    <Smile className="w-4 h-4 text-purple-600" />
                    <span>Selected Stage Bits & Medical Musings</span>
                  </h4>

                  <div className="space-y-3">
                    {profile.comedy.favoriteBits.map((bit, idx) => (
                      <div key={idx} className="p-5 rounded-2xl bg-purple-50/50 border border-purple-200/80 space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-purple-950 text-sm">{bit.title}</span>
                          <span className="text-[11px] font-mono text-purple-700">{bit.venue}</span>
                        </div>
                        <p className="text-xs text-stone-700 leading-relaxed font-serif">
                          "{bit.setup}"
                        </p>
                        <p className="text-xs text-purple-900 font-bold font-serif pl-3 border-l-2 border-purple-400">
                          → {bit.punchline}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Philosophy on laughter */}
                <div className="p-5 rounded-2xl bg-stone-900 text-white space-y-2 shadow-sm">
                  <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
                    <Quote className="w-4 h-4" />
                    <span>Why He Chooses Humor Over Despair</span>
                  </div>
                  <p className="text-xs sm:text-sm text-stone-200 leading-relaxed italic">
                    {profile.comedy.philosophyOnLaughter}
                  </p>
                </div>
              </div>
            )}

            {/* TAB 5: WRITINGS */}
            {activeTab === 'writings' && (
              <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/90 shadow-xs space-y-8 animate-in fade-in duration-200">
                <div className="flex items-center justify-between pb-4 border-b border-stone-100">
                  <div>
                    <span className="text-xs font-bold text-teal-600 uppercase tracking-wider block">Chapter 5</span>
                    <h3 className="text-2xl font-bold font-['Outfit',sans-serif] text-slate-900 mt-1">
                      {profile.writings.title}
                    </h3>
                    <p className="text-xs text-stone-500 italic mt-0.5">{profile.writings.tagline}</p>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                    <BookOpen className="w-6 h-6" />
                  </div>
                </div>

                <div className="space-y-4">
                  {profile.writings.essays.map((essay, idx) => (
                    <article key={idx} className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h4 className="font-bold text-stone-900 text-base">{essay.title}</h4>
                        <div className="flex items-center gap-2 text-xs text-stone-500 font-mono">
                          <span>{essay.date}</span>
                          <span>·</span>
                          <span>{essay.readTime}</span>
                        </div>
                      </div>
                      <div className="text-xs font-semibold text-teal-700">{essay.topic}</div>
                      <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-serif italic pt-1">
                        "{essay.snippet}"
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 6: TRAVELS */}
            {activeTab === 'travels' && (
              <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/90 shadow-xs space-y-8 animate-in fade-in duration-200">
                <div className="flex items-center justify-between pb-4 border-b border-stone-100">
                  <div>
                    <span className="text-xs font-bold text-teal-600 uppercase tracking-wider block">Chapter 6</span>
                    <h3 className="text-2xl font-bold font-['Outfit',sans-serif] text-slate-900 mt-1">
                      {profile.travels.title}
                    </h3>
                    <p className="text-xs text-stone-500 italic mt-0.5">{profile.travels.tagline}</p>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
                    <Compass className="w-6 h-6" />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                  {profile.travels.adventures.map((adv, idx) => (
                    <div key={idx} className="rounded-2xl border border-stone-200 overflow-hidden flex flex-col sm:flex-row bg-stone-50">
                      <div className="sm:w-2/5 h-48 sm:h-auto relative overflow-hidden">
                        <img 
                          src={adv.photo} 
                          alt={adv.destination}
                          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300" 
                        />
                        <div className="absolute top-2 left-2 px-2.5 py-1 rounded-md bg-stone-900/80 text-white font-mono text-[10px]">
                          {adv.year}
                        </div>
                      </div>
                      <div className="p-5 sm:w-3/5 space-y-2 flex flex-col justify-center">
                        <h4 className="font-bold text-stone-900 text-base">{adv.destination}</h4>
                        <div className="text-xs font-semibold text-teal-700">{adv.highlight}</div>
                        <p className="text-xs text-stone-600 leading-relaxed">{adv.memory}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 7: FAMILY AND FRIENDS (Named people besides Ben with placeholder images) */}
            {activeTab === 'family' && (
              <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/90 shadow-xs space-y-8 animate-in fade-in duration-200">
                <div className="flex items-center justify-between pb-4 border-b border-stone-100">
                  <div>
                    <span className="text-xs font-bold text-teal-600 uppercase tracking-wider block">Chapter 7</span>
                    <h3 className="text-2xl font-bold font-['Outfit',sans-serif] text-slate-900 mt-1">
                      {profile.friendsAndFamily.title}
                    </h3>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center shrink-0">
                    <Users className="w-6 h-6" />
                  </div>
                </div>

                <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
                  {profile.friendsAndFamily.supportSquadOverview}
                </p>

                {/* Squad Members with placeholder images */}
                <div className="space-y-4">
                  <h4 className="font-bold text-stone-900 text-sm uppercase tracking-wide">
                    Meet the Inner Circle Fighting for Alex
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {profile.friendsAndFamily.members.map((person, idx) => (
                      <div key={idx} className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80 flex flex-col justify-between space-y-3">
                        <div className="flex items-start gap-3">
                          <img
                            src={person.photo}
                            alt={person.name}
                            className="w-12 h-12 rounded-full object-cover shrink-0 border-2 border-teal-500/40 shadow-xs"
                          />
                          <div>
                            <h5 className="font-bold text-stone-900 text-sm">{person.name}</h5>
                            <span className="text-[11px] text-teal-700 font-semibold block">{person.relation}</span>
                          </div>
                        </div>

                        <p className="text-xs text-stone-600 leading-relaxed">
                          {person.blurb}
                        </p>

                        <div className="text-[11px] text-amber-900 bg-amber-50/80 p-2 rounded-lg border border-amber-200/70">
                          <span className="font-bold">Quirk: </span>
                          <span>{person.funnyTrait}</span>
                        </div>

                        <div className="text-xs italic text-stone-700 font-serif border-l-2 border-teal-500 pl-2">
                          {person.quote}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Family Traditions */}
                <div className="p-4 rounded-2xl bg-stone-100/80 border border-stone-200 text-xs space-y-1">
                  <span className="font-bold text-stone-900 uppercase tracking-wide">Cherished Traditions:</span>
                  <p className="text-stone-600 leading-relaxed">{profile.friendsAndFamily.familyTraditions}</p>
                </div>
              </div>
            )}

            {/* TAB 8: HOBBIES */}
            {activeTab === 'hobbies' && (
              <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/90 shadow-xs space-y-8 animate-in fade-in duration-200">
                <div className="flex items-center justify-between pb-4 border-b border-stone-100">
                  <div>
                    <span className="text-xs font-bold text-teal-600 uppercase tracking-wider block">Chapter 8</span>
                    <h3 className="text-2xl font-bold font-['Outfit',sans-serif] text-slate-900 mt-1">
                      {profile.hobbies.title}
                    </h3>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
                    <Wrench className="w-6 h-6" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {profile.hobbies.items.map((hobby, idx) => (
                    <div key={idx} className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{hobby.icon}</span>
                        <h4 className="font-bold text-stone-900 text-sm">{hobby.name}</h4>
                      </div>
                      <p className="text-xs text-stone-600 leading-relaxed">{hobby.description}</p>
                      <div className="text-[11px] text-teal-800 bg-teal-50 p-2 rounded-lg border border-teal-200">
                        <span className="font-bold">Fact: </span>
                        <span>{hobby.funnyFact}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Kitchen Disasters Humor Box */}
                <div className="p-5 rounded-2xl bg-amber-50/80 border border-amber-200 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-amber-900 uppercase tracking-wide">
                    <Smile className="w-4 h-4 text-amber-600" />
                    <span>The Famous Kitchen Experiment</span>
                  </div>
                  <p className="text-xs sm:text-sm text-stone-800 leading-relaxed">
                    {profile.hobbies.kitchenDisastersOnRenalDiet}
                  </p>
                </div>
              </div>
            )}

            {/* TAB 9: DREAMS */}
            {activeTab === 'dreams' && (
              <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/90 shadow-xs space-y-8 animate-in fade-in duration-200">
                <div className="flex items-center justify-between pb-4 border-b border-stone-100">
                  <div>
                    <span className="text-xs font-bold text-teal-600 uppercase tracking-wider block">Chapter 9</span>
                    <h3 className="text-2xl font-bold font-['Outfit',sans-serif] text-slate-900 mt-1">
                      {profile.dreams.title}
                    </h3>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center shrink-0">
                    <Target className="w-6 h-6" />
                  </div>
                </div>

                <div className="space-y-4">
                  {profile.dreams.bucketList.map((item) => (
                    <div key={item.rank} className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="w-6 h-6 rounded-full bg-teal-600 text-white font-bold text-xs flex items-center justify-center">
                            {item.rank}
                          </span>
                          <h4 className="font-bold text-stone-900 text-base">{item.goal}</h4>
                        </div>
                        <span className="text-xs text-stone-500 font-mono">{item.category}</span>
                      </div>
                      <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">{item.whyItMatters}</p>
                      <div className="text-[11px] text-teal-800 italic">
                        Note: {item.humorNote}
                      </div>
                    </div>
                  ))}
                </div>

                {/* 10-Year Vision & Life Pledge */}
                <div className="p-6 rounded-2xl bg-teal-900 text-white space-y-3">
                  <div className="text-xs font-bold text-teal-300 uppercase tracking-wider">
                    Alex’s Lifetime Pledge to His Living Donor
                  </div>
                  <p className="text-sm leading-relaxed italic font-serif text-teal-50">
                    "{profile.dreams.lifePledge}"
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar Snapshot & Actions (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            {/* Quick Profile Snapshot Card */}
            <div className="bg-white rounded-3xl p-6 border border-stone-200/90 shadow-xs space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-teal-600 text-white flex items-center justify-center font-bold text-xl shadow-xs">
                  {profile.displayName.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base">
                    {profile.isAnonymized ? profile.displayName : profile.realName}
                  </h4>
                  <span className="text-xs text-stone-500">Age {profile.age} · {profile.location}</span>
                </div>
              </div>

              <div className="space-y-2 pt-2 border-t border-stone-100 text-xs">
                <div className="flex justify-between py-1.5 border-b border-stone-100">
                  <span className="text-stone-500">Transplant Center:</span>
                  <span className="font-bold text-teal-800">{profile.transplantCenter}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-stone-100">
                  <span className="text-stone-500">Blood Type:</span>
                  <span className="font-bold text-stone-800">{profile.bloodType}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-stone-100">
                  <span className="text-stone-500">Current GFR:</span>
                  <span className="font-bold text-rose-700">{profile.gfrScore}</span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="text-stone-500">Paired Exchange:</span>
                  <span className="font-bold text-emerald-700">Eligible (Any Blood Type)</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 space-y-2.5">
                <button
                  onClick={onOpenScreening}
                  className="w-full py-3.5 px-4 bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs rounded-xl shadow-sm hover:shadow transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>Start Confidential MGH Screening</span>
                </button>

                <button
                  onClick={onOpenShareModal}
                  className="w-full py-2.5 px-4 bg-stone-100 hover:bg-stone-200 text-stone-800 font-semibold text-xs rounded-xl border border-stone-300 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Share Alex’s Story</span>
                </button>
              </div>
            </div>

            {/* Quote of the Day Card */}
            <div className="p-5 rounded-3xl bg-amber-50/70 border border-amber-200 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-900 uppercase tracking-wide">
                <Quote className="w-4 h-4 text-amber-700" />
                <span>Nephew Ben’s Words</span>
              </div>
              <p className="text-xs text-stone-700 italic leading-relaxed font-serif">
                "Seeing him deal with kidney failure is tough, but he still brings that same energy, jokes, and love to everyone. We need him healthy and by our side for years to come."
              </p>
              <div className="text-[11px] font-bold text-stone-900 text-right">— Ben (Nephew & Lacrosse Athlete)</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
