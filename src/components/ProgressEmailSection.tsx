import React, { useState } from 'react';
import { Mail, CheckCircle2, Bell, Sparkles, Send, ShieldCheck, ChevronRight, FileText } from 'lucide-react';
import { sampleProgressEmailIssues } from '../data/storyData';

export const ProgressEmailSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [frequency, setFrequency] = useState<'weekly' | 'milestones_only' | 'urgent_calls'>('weekly');
  const [subscribed, setSubscribed] = useState(false);
  const [selectedIssue, setSelectedIssue] = useState<number>(0);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
  };

  return (
    <section id="email-updates" className="py-16 lg:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-teal-900 via-teal-950 to-slate-950 rounded-3xl p-8 sm:p-12 lg:p-16 text-white shadow-xl relative overflow-hidden">
          {/* Background subtle radial glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            {/* Left Column: Value Proposition & Subscription Form (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-800/80 border border-teal-500/30 text-teal-300 text-xs font-semibold uppercase tracking-wider">
                <Bell className="w-3.5 h-3.5 text-teal-400" />
                <span>Automated Patient Dispatch</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold font-['Outfit',sans-serif] tracking-tight text-white leading-tight">
                Get Automated Progress Updates: Clinical Labs & The Match Hunt
              </h2>

              <p className="text-stone-300 text-sm sm:text-base leading-relaxed max-w-xl">
                We know people care and want to know how he’s doing without having to ask "Any news on a kidney yet?" every single week. Join our automated email list for honest updates, uplifting laughs, and MGH match progress.
              </p>

              {subscribed ? (
                <div className="p-6 rounded-2xl bg-teal-800/60 border border-teal-500/40 text-sm space-y-2 animate-in fade-in">
                  <div className="flex items-center gap-2 text-emerald-400 font-bold text-base">
                    <CheckCircle2 className="w-5 h-5" />
                    <span>You’re officially on the Kidney Search Dispatch!</span>
                  </div>
                  <p className="text-stone-200 text-xs leading-relaxed">
                    A confirmation email was sent to <strong>{email}</strong>. You’ll receive updates based on your selected frequency ({frequency.replace('_', ' ')}). You can pause or unsubscribe anytime with one click.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="Your First Name (Optional)"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="px-4 py-3 rounded-xl bg-stone-900/80 border border-stone-700 text-white placeholder-stone-400 text-sm focus:outline-teal-400 focus:border-teal-400"
                    />

                    <input
                      type="email"
                      required
                      placeholder="Your Email Address *"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="px-4 py-3 rounded-xl bg-stone-900/80 border border-stone-700 text-white placeholder-stone-400 text-sm focus:outline-teal-400 focus:border-teal-400"
                    />
                  </div>

                  {/* Frequency selection */}
                  <div>
                    <label className="block text-xs font-semibold text-stone-300 uppercase tracking-wider mb-2">
                      Choose Your Update Frequency:
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                      <label
                        className={`p-3 rounded-xl border flex flex-col justify-between cursor-pointer transition-all ${
                          frequency === 'weekly'
                            ? 'bg-teal-800/80 border-teal-400 text-white font-bold'
                            : 'bg-stone-900/50 border-stone-800 text-stone-300 hover:border-stone-700'
                        }`}
                      >
                        <input
                          type="radio"
                          name="frequency"
                          value="weekly"
                          checked={frequency === 'weekly'}
                          onChange={() => setFrequency('weekly')}
                          className="sr-only"
                        />
                        <span className="font-semibold">Weekly Digest</span>
                        <span className="text-[10px] text-stone-400 mt-1">Labs, life updates & humor</span>
                      </label>

                      <label
                        className={`p-3 rounded-xl border flex flex-col justify-between cursor-pointer transition-all ${
                          frequency === 'milestones_only'
                            ? 'bg-teal-800/80 border-teal-400 text-white font-bold'
                            : 'bg-stone-900/50 border-stone-800 text-stone-300 hover:border-stone-700'
                        }`}
                      >
                        <input
                          type="radio"
                          name="frequency"
                          value="milestones_only"
                          checked={frequency === 'milestones_only'}
                          onChange={() => setFrequency('milestones_only')}
                          className="sr-only"
                        />
                        <span className="font-semibold">Milestones Only</span>
                        <span className="text-[10px] text-stone-400 mt-1">Screening progress & surgery</span>
                      </label>

                      <label
                        className={`p-3 rounded-xl border flex flex-col justify-between cursor-pointer transition-all ${
                          frequency === 'urgent_calls'
                            ? 'bg-teal-800/80 border-teal-400 text-white font-bold'
                            : 'bg-stone-900/50 border-stone-800 text-stone-300 hover:border-stone-700'
                        }`}
                      >
                        <input
                          type="radio"
                          name="frequency"
                          value="urgent_calls"
                          checked={frequency === 'urgent_calls'}
                          onChange={() => setFrequency('urgent_calls')}
                          className="sr-only"
                        />
                        <span className="font-semibold">Urgent Match Calls</span>
                        <span className="text-[10px] text-stone-400 mt-1">Only if an emergency need arises</span>
                      </label>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-7 py-3.5 bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold text-sm rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4 text-stone-950" />
                    <span>Subscribe to Automated Updates</span>
                  </button>
                </form>
              )}

              <div className="flex items-center gap-4 text-xs text-stone-400 pt-2">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-teal-400" />
                  <span>100% Privacy Protected</span>
                </span>
                <span>·</span>
                <span>Zero spam, ever</span>
                <span>·</span>
                <span>Unsubscribe in 1 click</span>
              </div>
            </div>

            {/* Right Column: Interactive Dispatch Issue Preview (5 cols) */}
            <div className="lg:col-span-5">
              <div className="bg-stone-900/90 rounded-2xl border border-stone-800 p-6 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-stone-800 text-xs">
                  <span className="text-teal-400 font-mono font-semibold">PREVIEW RECENT DISPATCHES</span>
                  <span className="text-stone-400 text-[11px]">Issue Archive</span>
                </div>

                <div className="space-y-2">
                  {sampleProgressEmailIssues.map((issue, idx) => (
                    <button
                      key={issue.issueNumber}
                      onClick={() => setSelectedIssue(idx)}
                      className={`w-full text-left p-3.5 rounded-xl border transition-all cursor-pointer ${
                        selectedIssue === idx
                          ? 'bg-teal-950/70 border-teal-500 text-white'
                          : 'bg-stone-950/50 border-stone-800/80 text-stone-400 hover:text-stone-200 hover:border-stone-700'
                      }`}
                    >
                      <div className="flex items-center justify-between text-[11px] mb-1">
                        <span className="font-mono text-teal-300 font-bold">{issue.issueNumber}</span>
                        <span>{issue.date}</span>
                      </div>
                      <div className="font-semibold text-xs text-stone-200 line-clamp-1">
                        {issue.title}
                      </div>
                      <div className="text-[11px] text-stone-400 line-clamp-2 mt-1">
                        {issue.snippet}
                      </div>
                    </button>
                  ))}
                </div>

                <div className="p-3 bg-stone-950 rounded-xl border border-stone-800/90 text-[11px] text-stone-400 flex items-center justify-between">
                  <span>Emails sent via automated HIPAA-safe relay</span>
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
