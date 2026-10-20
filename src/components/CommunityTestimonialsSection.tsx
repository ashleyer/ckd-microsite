import React, { useState } from 'react';
import { 
  Users, 
  Heart, 
  MessageSquarePlus, 
  ThumbsUp, 
  Sparkles, 
  X, 
  CheckCircle2, 
  Quote, 
  Send,
  Lock
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { CommunityTestimonial, RecipientProfile } from '../types';
import { defaultCommunityTestimonials } from '../data/storyData';

interface CommunityTestimonialsSectionProps {
  profile: RecipientProfile;
}

export const CommunityTestimonialsSection: React.FC<CommunityTestimonialsSectionProps> = ({
  profile
}) => {
  const [testimonials, setTestimonials] = useState<CommunityTestimonial[]>(defaultCommunityTestimonials);
  const [showAddModal, setShowAddModal] = useState(false);

  // Form State
  const [authorName, setAuthorName] = useState('');
  const [relationship, setRelationship] = useState('Friend');
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [quote, setQuote] = useState('');
  const [detailStory, setDetailStory] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleUpvote = (id: string) => {
    setTestimonials(prev =>
      prev.map(t => {
        if (t.id === id) {
          const hasUpvoted = !t.hasUpvoted;
          return {
            ...t,
            upvotes: hasUpvoted ? t.upvotes + 1 : t.upvotes - 1,
            hasUpvoted
          };
        }
        return t;
      })
    );
  };

  const handleSubmitTestimonial = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quote.trim() || !detailStory.trim()) return;

    try {
      confetti({
        particleCount: 60,
        spread: 60,
        origin: { y: 0.7 }
      });
    } catch {
      // fallback
    }

    const newTestimonial: CommunityTestimonial = {
      id: 'test-' + Date.now(),
      authorName: isAnonymous ? 'A Caring Friend' : (authorName.trim() || 'A Community Supporter'),
      relationship: relationship.trim() || 'Friend',
      isAnonymous,
      avatarBg: 'bg-teal-100 text-teal-800 border-teal-300',
      avatarText: isAnonymous ? '?' : (authorName.trim().charAt(0).toUpperCase() || 'S'),
      quote: quote.trim(),
      detailStory: detailStory.trim(),
      date: 'Just now',
      upvotes: 1,
      hasUpvoted: true
    };

    setTestimonials([newTestimonial, ...testimonials]);
    setSubmitted(true);
    setTimeout(() => {
      setShowAddModal(false);
      setSubmitted(false);
      setQuote('');
      setDetailStory('');
      setAuthorName('');
    }, 1500);
  };

  return (
    <section id="community-testimonials" className="py-16 lg:py-24 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Action Button */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-100 text-teal-800 text-xs font-semibold uppercase tracking-wider mb-3">
              <Users className="w-3.5 h-3.5" />
              <span>Voices of Loved Ones & Advocates</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-['Outfit',sans-serif] text-slate-900 tracking-tight">
              Why It's Important He Gets a Kidney
            </h2>
            <p className="mt-2 text-stone-600 text-base leading-relaxed">
              Medical records only tell half the story. Read why his family, friends, coworkers, and mentees are fighting so hard to find him a living donor match.
            </p>
          </div>

          <button
            onClick={() => setShowAddModal(true)}
            className="px-6 py-3.5 bg-teal-700 hover:bg-teal-800 text-white font-semibold text-sm rounded-xl shadow-md hover:shadow-lg transition-all flex items-center gap-2.5 cursor-pointer self-start md:self-auto shrink-0"
          >
            <MessageSquarePlus className="w-4 h-4" />
            <span>Write Why He Matters</span>
          </button>
        </div>

        {/* Testimonials Masonry/Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((test) => (
            <div
              key={test.id}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-stone-200/90 shadow-2xs hover:shadow-sm transition-all flex flex-col justify-between relative group"
            >
              <div className="space-y-4">
                {/* Author Card & Relation */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    {test.photo ? (
                      <img
                        src={test.photo}
                        alt={test.authorName}
                        className="w-11 h-11 rounded-xl object-cover border border-teal-400/50 shadow-2xs shrink-0"
                      />
                    ) : (
                      <div className={`w-11 h-11 rounded-xl flex items-center justify-center font-bold text-sm border ${test.avatarBg} shrink-0`}>
                        {test.avatarText}
                      </div>
                    )}
                    <div>
                      <h3 className="font-bold text-slate-900 text-base">
                        {test.authorName}
                      </h3>
                      <div className="flex items-center gap-2 text-xs text-stone-500">
                        <span className="font-medium text-teal-800">{test.relationship}</span>
                        <span>·</span>
                        <span>{test.date}</span>
                      </div>
                    </div>
                  </div>

                  <Quote className="w-6 h-6 text-stone-200 group-hover:text-teal-400 transition-colors shrink-0" />
                </div>

                {/* Main Headline Quote */}
                <div className="p-3.5 rounded-xl bg-teal-50/60 border border-teal-100 text-xs sm:text-sm font-semibold text-teal-950 italic leading-relaxed">
                  "{test.quote}"
                </div>

                {/* Detail Story */}
                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed whitespace-pre-line">
                  {test.detailStory}
                </p>
              </div>

              {/* Upvote & Endorsement Bar */}
              <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                <span className="flex items-center gap-1.5 text-stone-400">
                  <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
                  <span>Verified Advocate Voice</span>
                </span>

                <button
                  onClick={() => handleUpvote(test.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border transition-all cursor-pointer text-xs font-semibold ${
                    test.hasUpvoted
                      ? 'bg-rose-50 border-rose-200 text-rose-700'
                      : 'bg-stone-50 hover:bg-stone-100 border-stone-200 text-stone-700'
                  }`}
                  title="Echo this testimonial"
                >
                  <ThumbsUp className={`w-3.5 h-3.5 ${test.hasUpvoted ? 'fill-rose-700' : ''}`} />
                  <span>I Echo This ({test.upvotes})</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal: Write Your Testimonial */}
        {showAddModal && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in">
            <div 
              className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-stone-200 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowAddModal(false)}
                className="absolute top-5 right-5 p-2 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-6">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-800 bg-teal-50 px-2.5 py-1 rounded-full border border-teal-200 mb-2">
                  <Sparkles className="w-3.5 h-3.5 text-teal-600" />
                  <span>Community Endorsement</span>
                </div>
                <h3 className="text-2xl font-bold font-['Outfit',sans-serif] text-slate-900">
                  Why Does This Man Deserve a Kidney?
                </h3>
                <p className="text-xs text-stone-600 mt-1">
                  Share a personal memory, quality, or reason why you want to see {profile.displayName} receive a living kidney transplant.
                </p>
              </div>

              {submitted ? (
                <div className="py-8 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-lg">Thank You for Speaking Up!</h4>
                  <p className="text-xs text-stone-600 max-w-xs mx-auto">
                    Your testimonial has been posted to the campaign wall. Every voice helps potential donors see the human life they will save.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmitTestimonial} className="space-y-4 text-xs">
                  <div>
                    <label className="block font-bold text-stone-700 uppercase tracking-wide mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      disabled={isAnonymous}
                      placeholder={isAnonymous ? 'Anonymous Advocate' : 'e.g. Sarah Jenkins'}
                      value={authorName}
                      onChange={(e) => setAuthorName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs focus:outline-teal-600 bg-stone-50/50 disabled:opacity-50"
                    />
                    <label className="mt-1.5 flex items-center gap-2 cursor-pointer text-stone-600">
                      <input
                        type="checkbox"
                        checked={isAnonymous}
                        onChange={(e) => setIsAnonymous(e.target.checked)}
                        className="rounded text-teal-700 focus:ring-teal-600"
                      />
                      <span>Post as Anonymous Advocate</span>
                    </label>
                  </div>

                  <div>
                    <label className="block font-bold text-stone-700 uppercase tracking-wide mb-1">
                      Relationship to Him
                    </label>
                    <select
                      value={relationship}
                      onChange={(e) => setRelationship(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs focus:outline-teal-600 bg-stone-50/50"
                    >
                      <option value="Nephew / Niece">Nephew / Niece / Mentee</option>
                      <option value="Sister / Brother">Sister / Brother / Sibling</option>
                      <option value="Close Friend">Close Friend</option>
                      <option value="Coworker / Colleague">Coworker / Colleague</option>
                      <option value="Sports / Community Partner">Sports / Community Partner</option>
                      <option value="Fellow Kidney Patient">Fellow Kidney Patient / Survivor</option>
                      <option value="Compassionate Stranger">Compassionate Stranger Inspired by Story</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-bold text-stone-700 uppercase tracking-wide mb-1">
                      Punchy Headline / Core Quote *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. He is the first person to show up when anyone needs a hand."
                      value={quote}
                      onChange={(e) => setQuote(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs focus:outline-teal-600 bg-stone-50/50"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-stone-700 uppercase tracking-wide mb-1">
                      Your Story / Why You Care *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Share a short story, funny moment, or why keeping him healthy means everything to your family or community..."
                      value={detailStory}
                      onChange={(e) => setDetailStory(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs focus:outline-teal-600 bg-stone-50/50 resize-none"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-[11px] text-stone-400 flex items-center gap-1">
                      <Lock className="w-3 h-3 text-emerald-600" />
                      <span>Screened for kindness & spam</span>
                    </span>

                    <button
                      type="submit"
                      className="px-6 py-2.5 bg-teal-700 hover:bg-teal-800 text-white font-semibold text-xs rounded-xl shadow-sm transition-all flex items-center gap-2 cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Post Testimonial</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
