import React, { useState } from 'react';
import { X, Heart, MessageSquareHeart, CheckCircle2, Send, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { RecipientProfile } from '../types';

interface CheerModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: RecipientProfile;
}

export const CheerModal: React.FC<CheerModalProps> = ({
  isOpen,
  onClose,
  profile
}) => {
  const [senderName, setSenderName] = useState('');
  const [cheerNote, setCheerNote] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!cheerNote.trim()) return;

    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.7 }
      });
    } catch {}

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setSenderName('');
      setCheerNote('');
      onClose();
    }, 1600);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in">
      <div 
        className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-stone-200 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-900 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200 mb-2">
            <MessageSquareHeart className="w-3.5 h-3.5 text-amber-600" />
            <span>Encouragement Dispatch</span>
          </div>
          <h3 className="text-2xl font-bold font-['Outfit',sans-serif] text-slate-900">
            Send a Cheer to {profile.displayName}
          </h3>
          <p className="text-xs text-stone-600 mt-1">
            Fighting advanced kidney disease can feel heavy. A short encouraging word or joke brightens his day and reminds him he isn't fighting alone.
          </p>
        </div>

        {submitted ? (
          <div className="py-8 text-center space-y-3 animate-in fade-in">
            <div className="w-14 h-14 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center mx-auto shadow-sm">
              <Heart className="w-7 h-7 fill-rose-600" />
            </div>
            <h4 className="text-xl font-bold text-slate-900">Message Delivered!</h4>
            <p className="text-xs text-stone-600">
              Your words of hope have been added to his family message board. Thank you for caring!
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            <div>
              <label className="block font-bold text-stone-700 uppercase tracking-wide mb-1">
                Your Name (or Leave Blank for Anonymous)
              </label>
              <input
                type="text"
                placeholder="e.g. Taylor from Boston"
                value={senderName}
                onChange={(e) => setSenderName(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs focus:outline-teal-600 bg-stone-50/50"
              />
            </div>

            <div>
              <label className="block font-bold text-stone-700 uppercase tracking-wide mb-1">
                Your Encouraging Note / Joke / Prayer *
              </label>
              <textarea
                required
                rows={4}
                placeholder="Keep fighting! We're rooting for your match and can't wait to see you back on that Hawaii beach..."
                value={cheerNote}
                onChange={(e) => setCheerNote(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs focus:outline-teal-600 bg-stone-50/50 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Heart className="w-4 h-4 fill-white" />
              <span>Send Heart & Words of Hope</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
