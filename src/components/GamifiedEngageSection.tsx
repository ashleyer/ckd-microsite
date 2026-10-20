import React, { useState } from 'react';
import { 
  Sparkles, 
  Award, 
  HelpCircle, 
  CheckCircle2, 
  XCircle, 
  Heart, 
  ArrowRight, 
  RotateCcw, 
  Share2,
  Shuffle,
  Users
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface GamifiedEngageSectionProps {
  onOpenScreening: () => void;
  onOpenShareModal: () => void;
}

const quizQuestions = [
  {
    id: 1,
    question: 'Do you need to have the exact same blood type to donate to our candidate?',
    options: [
      { text: 'Yes, only identical blood types can ever donate', isCorrect: false },
      { text: 'No! Through NKR Paired Exchange, ANY blood type can donate on his behalf', isCorrect: true },
      { text: 'Only if you are a first-degree blood relative', isCorrect: false }
    ],
    explanation: 'Fact: Paired Kidney Exchange matches incompatible pairs across the country. A donor of ANY blood type can donate on our candidate’s behalf and trigger a life-saving chain!'
  },
  {
    id: 2,
    question: 'Who pays for the living donor’s surgery and hospital bills?',
    options: [
      { text: 'The living donor pays out of their own savings', isCorrect: false },
      { text: '100% is covered by recipient insurance & Donor Shield ($0 out-of-pocket)', isCorrect: true },
      { text: 'The donor and recipient split the bill 50/50', isCorrect: false }
    ],
    explanation: 'Fact: Living kidney donors pay $0 for evaluation, testing, surgery, or hospital care. Donor Shield also reimburses lost wages and travel!'
  },
  {
    id: 3,
    question: 'Can you live a normal life and play competitive sports with only one kidney?',
    options: [
      { text: 'Yes! One kidney naturally expands and handles 100% of filtration with zero drop in energy', isCorrect: true },
      { text: 'No, you have to stay on bed rest forever', isCorrect: false },
      { text: 'Only if you take heavy medications every morning', isCorrect: false }
    ],
    explanation: 'Fact: Donors return to running marathons, lifting weights, coaching, and work within weeks. The donor takes no medications and lives a normal life span.'
  },
  {
    id: 4,
    question: 'What is the law regarding financial compensation for donating an organ in the US?',
    options: [
      { text: 'You can sell an organ to the highest bidder on eBay', isCorrect: false },
      { text: 'Strict NOTA federal law: It is illegal to offer or receive money/gifts; donation must be purely altruistic', isCorrect: true },
      { text: 'Transplant centers offer cash bonuses', isCorrect: false }
    ],
    explanation: 'Fact: Under the National Organ Transplant Act (NOTA), organ sales are strictly illegal. Legitimate lost wage reimbursement is permitted via Donor Shield, but zero profit.'
  }
];

export const GamifiedEngageSection: React.FC<GamifiedEngageSectionProps> = ({
  onOpenScreening,
  onOpenShareModal
}) => {
  // Quiz State
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  // Domino Simulator State
  const [chainLength, setChainLength] = useState(3);
  const [isSimulating, setIsSimulating] = useState(false);

  // Cheer Counter State
  const [cheerCount, setCheerCount] = useState(342);
  const [hasCheered, setHasCheered] = useState(false);

  const handleSelectOption = (idx: number) => {
    if (isAnswerSubmitted) return;
    setSelectedOption(idx);
    setIsAnswerSubmitted(true);
    if (quizQuestions[currentQIndex].options[idx].isCorrect) {
      setScore(prev => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQIndex < quizQuestions.length - 1) {
      setCurrentQIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswerSubmitted(false);
    } else {
      setQuizFinished(true);
      try {
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.6 }
        });
      } catch {
        // fallback
      }
    }
  };

  const resetQuiz = () => {
    setCurrentQIndex(0);
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
    setScore(0);
    setQuizFinished(false);
  };

  const runSimulation = () => {
    setIsSimulating(true);
    setTimeout(() => {
      setIsSimulating(false);
      try {
        confetti({ particleCount: 50, spread: 60 });
      } catch {}
    }, 800);
  };

  const handleSendCheer = () => {
    if (hasCheered) return;
    setCheerCount(prev => prev + 1);
    setHasCheered(true);
    try {
      confetti({
        particleCount: 40,
        spread: 50,
        origin: { y: 0.8 }
      });
    } catch {}
  };

  return (
    <section id="interactive-challenge" className="py-16 lg:py-24 bg-stone-100 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-100 text-teal-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Learning & Community Action</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-['Outfit',sans-serif] text-slate-900 tracking-tight">
            The Living Kidney Donor Challenge
          </h2>
          <p className="mt-2 text-stone-600 text-base leading-relaxed">
            Test your knowledge, simulate the ripple effect of a paired donor chain, and send live cheers to support our candidate’s journey.
          </p>
        </div>

        {/* 2-Column Gamified Grid: Quiz on Left, Domino Chain on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          {/* Game 1: Myth-Buster Trivia (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-sm flex flex-col justify-between min-h-[460px]">
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-stone-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center font-bold text-sm">
                    Q
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">Myth-Buster Kidney Quiz</h3>
                    <p className="text-[11px] text-stone-500">Test how much you really know about donation</p>
                  </div>
                </div>

                {!quizFinished && (
                  <span className="font-mono text-xs font-bold text-teal-800 bg-teal-50 px-2.5 py-1 rounded-full border border-teal-200">
                    Question {currentQIndex + 1} of {quizQuestions.length}
                  </span>
                )}
              </div>

              {!quizFinished ? (
                <div className="space-y-5">
                  <h4 className="text-lg font-bold text-slate-900 leading-snug">
                    {quizQuestions[currentQIndex].question}
                  </h4>

                  <div className="space-y-2.5">
                    {quizQuestions[currentQIndex].options.map((opt, idx) => {
                      let btnStyle = 'border-stone-200 hover:border-teal-300 hover:bg-stone-50 text-stone-800';
                      if (isAnswerSubmitted) {
                        if (opt.isCorrect) {
                          btnStyle = 'border-emerald-500 bg-emerald-50 text-emerald-950 font-bold';
                        } else if (selectedOption === idx) {
                          btnStyle = 'border-rose-400 bg-rose-50 text-rose-950';
                        } else {
                          btnStyle = 'border-stone-200 opacity-50';
                        }
                      }

                      return (
                        <button
                          key={idx}
                          disabled={isAnswerSubmitted}
                          onClick={() => handleSelectOption(idx)}
                          className={`w-full text-left p-3.5 rounded-xl border-2 transition-all cursor-pointer text-xs sm:text-sm flex items-center justify-between gap-3 ${btnStyle}`}
                        >
                          <span>{opt.text}</span>
                          {isAnswerSubmitted && opt.isCorrect && (
                            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                          )}
                          {isAnswerSubmitted && selectedOption === idx && !opt.isCorrect && (
                            <XCircle className="w-5 h-5 text-rose-500 shrink-0" />
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {isAnswerSubmitted && (
                    <div className="p-4 rounded-xl bg-teal-50/70 border border-teal-200/80 text-xs text-teal-950 animate-in fade-in leading-relaxed">
                      <strong>Medical Fact: </strong>
                      {quizQuestions[currentQIndex].explanation}
                    </div>
                  )}
                </div>
              ) : (
                <div className="py-6 text-center space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-teal-100 text-teal-700 flex items-center justify-center mx-auto shadow-sm">
                    <Award className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold font-['Outfit',sans-serif] text-slate-900">
                      Score: {score} out of {quizQuestions.length}!
                    </h4>
                    <p className="text-xs text-stone-600 max-w-sm mx-auto mt-1">
                      {score === 4
                        ? 'Master Kidney Advocate! You know the facts inside and out. Share this page to spread the truth!'
                        : 'Great job! Dispelling myths about living donation is the first step toward saving a patient’s life.'}
                    </p>
                  </div>

                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-50 border border-amber-200 text-amber-950 font-bold text-xs">
                    <Sparkles className="w-4 h-4 text-amber-600" />
                    <span>Unlocked Badge: "Certified Living Kidney Advocate"</span>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom quiz actions */}
            <div className="pt-6 mt-6 border-t border-stone-100 flex items-center justify-between">
              {!quizFinished ? (
                <>
                  <div className="text-xs text-stone-500">
                    Current Score: <strong className="text-teal-800">{score}</strong>
                  </div>
                  <button
                    disabled={!isAnswerSubmitted}
                    onClick={handleNextQuestion}
                    className="px-5 py-2.5 bg-teal-700 hover:bg-teal-800 text-white font-semibold text-xs rounded-xl shadow-xs transition-colors flex items-center gap-1.5 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    <span>{currentQIndex === quizQuestions.length - 1 ? 'See Results' : 'Next Question'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={resetQuiz}
                    className="px-4 py-2 border border-stone-300 hover:bg-stone-50 text-stone-700 text-xs font-semibold rounded-xl flex items-center gap-1.5 cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Retake Quiz</span>
                  </button>
                  <button
                    onClick={onOpenShareModal}
                    className="px-5 py-2.5 bg-teal-700 hover:bg-teal-800 text-white text-xs font-semibold rounded-xl shadow-xs flex items-center gap-1.5 cursor-pointer"
                  >
                    <Share2 className="w-3.5 h-3.5" />
                    <span>Share Badge & Challenge Friends</span>
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Game 2: The Ripple Effect (Paired Swap Chain Simulator) (5 cols) */}
          <div className="lg:col-span-5 bg-stone-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col justify-between min-h-[460px]">
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-stone-800">
                <div className="flex items-center gap-2">
                  <Shuffle className="w-5 h-5 text-teal-400" />
                  <h3 className="font-bold text-white text-base">Paired Swap Domino Simulator</h3>
                </div>
                <span className="text-[10px] font-mono bg-teal-950 text-teal-300 border border-teal-500/40 px-2 py-0.5 rounded">
                  NKR ALGORITHM
                </span>
              </div>

              <p className="text-xs text-stone-300 leading-relaxed mb-6">
                See how a single generous donor who is incompatible with our candidate can trigger a domino chain reaction that saves multiple families!
              </p>

              {/* Interactive Chain Controls */}
              <div className="space-y-4">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-stone-400">Chain Length:</span>
                  <span className="font-bold text-teal-300 font-mono">{chainLength}-Way Exchange Chain</span>
                </div>

                <div className="flex gap-2">
                  {[2, 3, 4].map(num => (
                    <button
                      key={num}
                      onClick={() => setChainLength(num)}
                      className={`flex-1 py-2 text-xs font-semibold rounded-xl border transition-all cursor-pointer ${
                        chainLength === num
                          ? 'bg-teal-700 border-teal-500 text-white shadow-xs'
                          : 'bg-stone-800/80 border-stone-700 text-stone-400 hover:text-white'
                      }`}
                    >
                      {num} Donors ({num * 2} Lives Saved)
                    </button>
                  ))}
                </div>

                {/* Visual Chain Representation */}
                <div className="p-4 rounded-2xl bg-stone-950/80 border border-stone-800 space-y-3">
                  <div className="text-[11px] font-semibold text-teal-400 uppercase tracking-wider flex items-center justify-between">
                    <span>Live Match Simulation</span>
                    {isSimulating && <span className="animate-pulse text-amber-400">Computing Crossmatches...</span>}
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="flex items-center gap-2 p-2 rounded-lg bg-stone-900 border border-stone-800">
                      <span className="w-5 h-5 rounded-full bg-teal-600 text-[10px] font-bold flex items-center justify-center shrink-0">1</span>
                      <span className="text-stone-300">Your Generous Donor (Any US City)</span>
                      <ArrowRight className="w-3.5 h-3.5 text-teal-400 ml-auto shrink-0" />
                    </div>

                    <div className="flex items-center gap-2 p-2 rounded-lg bg-stone-900 border border-stone-800">
                      <span className="w-5 h-5 rounded-full bg-blue-600 text-[10px] font-bold flex items-center justify-center shrink-0">2</span>
                      <span className="text-stone-300">Recipient in Chicago, IL (Saved!)</span>
                      <ArrowRight className="w-3.5 h-3.5 text-blue-400 ml-auto shrink-0" />
                    </div>

                    {chainLength >= 3 && (
                      <div className="flex items-center gap-2 p-2 rounded-lg bg-stone-900 border border-stone-800">
                        <span className="w-5 h-5 rounded-full bg-purple-600 text-[10px] font-bold flex items-center justify-center shrink-0">3</span>
                        <span className="text-stone-300">Donor in Dallas, TX swaps in</span>
                        <ArrowRight className="w-3.5 h-3.5 text-purple-400 ml-auto shrink-0" />
                      </div>
                    )}

                    {chainLength >= 4 && (
                      <div className="flex items-center gap-2 p-2 rounded-lg bg-stone-900 border border-stone-800">
                        <span className="w-5 h-5 rounded-full bg-amber-600 text-[10px] font-bold flex items-center justify-center shrink-0">4</span>
                        <span className="text-stone-300">Recipient in Seattle, WA (Saved!)</span>
                        <ArrowRight className="w-3.5 h-3.5 text-amber-400 ml-auto shrink-0" />
                      </div>
                    )}

                    <div className="flex items-center gap-2 p-2.5 rounded-lg bg-teal-950 border border-teal-500/50 text-teal-200 font-bold">
                      <Heart className="w-4 h-4 text-rose-500 fill-rose-500 shrink-0" />
                      <span>Matched Kidney Arrives for Our Candidate in Boston!</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-stone-800 flex items-center justify-between">
              <button
                onClick={runSimulation}
                className="px-4 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-xs font-semibold text-stone-200 transition-colors cursor-pointer"
              >
                Re-Run Swap Chain
              </button>

              <button
                onClick={onOpenScreening}
                className="px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold text-xs rounded-xl shadow-sm transition-all cursor-pointer flex items-center gap-1.5"
              >
                <span>Be the Spark (Register)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Live Community Cheer Counter Bar */}
        <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center shrink-0">
              <Heart className="w-6 h-6 fill-rose-600" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="font-bold text-slate-900 text-base">Community Hope & Cheer Counter</h4>
                <span className="px-2 py-0.5 rounded-full bg-rose-50 text-rose-700 text-xs font-bold border border-rose-200">
                  {cheerCount} Cheers Sent
                </span>
              </div>
              <p className="text-xs text-stone-600 mt-0.5">
                Every cheer lets our candidate know he is never alone in his search for a living kidney donor.
              </p>
            </div>
          </div>

          <button
            onClick={handleSendCheer}
            disabled={hasCheered}
            className={`px-6 py-3 rounded-xl font-bold text-xs transition-all flex items-center gap-2 cursor-pointer shadow-sm ${
              hasCheered
                ? 'bg-rose-50 text-rose-700 border border-rose-200 cursor-default'
                : 'bg-rose-600 hover:bg-rose-500 text-white hover:shadow-md'
            }`}
          >
            <Heart className={`w-4 h-4 ${hasCheered ? 'fill-rose-700' : 'fill-white'}`} />
            <span>{hasCheered ? '✓ You Cheered Our Candidate Today!' : 'Send a Heart & Cheer'}</span>
          </button>
        </div>
      </div>
    </section>
  );
};
