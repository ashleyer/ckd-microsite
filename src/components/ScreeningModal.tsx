import React, { useState } from 'react';
import { X, Heart, ShieldCheck, CheckCircle2, AlertCircle, ArrowRight, ArrowLeft } from 'lucide-react';
import confetti from 'canvas-confetti';
import { RecipientProfile } from '../types';

interface ScreeningModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: RecipientProfile;
}

export const ScreeningModal: React.FC<ScreeningModalProps> = ({
  isOpen,
  onClose,
  profile
}) => {
  const [step, setStep] = useState<number>(1);
  const [submitted, setSubmitted] = useState<boolean>(false);

  // Form Fields
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [cityState, setCityState] = useState('');
  const [ageRange, setAgeRange] = useState('25-45');
  const [bloodType, setBloodType] = useState('I am not sure');
  const [knowsRecipient, setKnowsRecipient] = useState('Friend / Social Media Supporter');
  const [isAltruisticAgreed, setIsAltruisticAgreed] = useState(true);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {}
  };

  const resetAndClose = () => {
    setSubmitted(false);
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in">
      <div 
        className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-stone-200 relative max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={resetAndClose}
          className="absolute top-5 right-5 p-2 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            {/* Header */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-800 bg-teal-50 px-2.5 py-0.5 rounded-full border border-teal-200 mb-2">
                <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
                <span>100% Confidential Donor Evaluation</span>
              </div>
              <h3 className="text-2xl font-bold font-['Outfit',sans-serif] text-slate-900">
                Register to Learn About Donating
              </h3>
              <p className="text-xs text-stone-600 mt-1">
                Taking this first step commits you to nothing. You will be connected with an independent living donor coordinator who represents YOUR health interests exclusively.
              </p>
            </div>

            {/* Stepper Progress */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-stone-100 text-xs font-semibold">
              <span className={step >= 1 ? 'text-teal-800' : 'text-stone-400'}>1. Legal & Ethics</span>
              <span className="text-stone-300">→</span>
              <span className={step >= 2 ? 'text-teal-800' : 'text-stone-400'}>2. Contact Info</span>
              <span className="text-stone-300">→</span>
              <span className={step >= 3 ? 'text-teal-800' : 'text-stone-400'}>3. Compatibility</span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              {/* Step 1: Legal & Ethics */}
              {step === 1 && (
                <div className="space-y-4 animate-in fade-in">
                  <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200 text-amber-950 space-y-2 leading-relaxed">
                    <div className="flex items-center gap-2 font-bold text-xs text-amber-900">
                      <AlertCircle className="w-4 h-4 text-amber-700 shrink-0" />
                      <span>National Organ Transplant Act (NOTA) Rule:</span>
                    </div>
                    <p className="text-[11px]">
                      Under federal law (42 U.S.C. 274e), it is strictly illegal to offer or receive payment, gifts, or financial incentives for organ donation. Donation must be purely voluntary.
                    </p>
                    <p className="text-[11px] text-amber-900 font-medium">
                      However, Donor Shield provides legitimate reimbursement for your lost wages and travel expenses so you face zero financial hardship.
                    </p>
                  </div>

                  <label className="flex items-start gap-2.5 p-3 rounded-xl border border-stone-200 hover:bg-stone-50 cursor-pointer text-stone-700">
                    <input
                      type="checkbox"
                      checked={isAltruisticAgreed}
                      onChange={(e) => setIsAltruisticAgreed(e.target.checked)}
                      className="mt-0.5 rounded text-teal-700 focus:ring-teal-600"
                      required
                    />
                    <span>
                      I understand donation is strictly voluntary and altruistic. I am exploring this solely out of goodwill to save a life, with zero expectation of financial payment.
                    </span>
                  </label>

                  <div className="pt-2 flex justify-end">
                    <button
                      type="button"
                      disabled={!isAltruisticAgreed}
                      onClick={() => setStep(2)}
                      className="px-5 py-2.5 bg-teal-700 hover:bg-teal-800 text-white font-semibold rounded-xl flex items-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      <span>Continue</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2: Contact Info */}
              {step === 2 && (
                <div className="space-y-3 animate-in fade-in">
                  <div>
                    <label className="block font-bold text-stone-700 uppercase tracking-wide mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Jordan Smith"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs focus:outline-teal-600 bg-stone-50/50"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block font-bold text-stone-700 uppercase tracking-wide mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="jordan@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs focus:outline-teal-600 bg-stone-50/50"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-stone-700 uppercase tracking-wide mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="(555) 000-0000"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs focus:outline-teal-600 bg-stone-50/50"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold text-stone-700 uppercase tracking-wide mb-1">
                      Your City & State (You can donate from anywhere in the US) *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Boston, MA or Austin, TX"
                      value={cityState}
                      onChange={(e) => setCityState(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs focus:outline-teal-600 bg-stone-50/50"
                    />
                  </div>

                  <div className="pt-2 flex justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="px-4 py-2 border border-stone-300 rounded-xl text-stone-700 font-semibold cursor-pointer"
                    >
                      <ArrowLeft className="w-4 h-4 inline mr-1" />
                      Back
                    </button>

                    <button
                      type="button"
                      disabled={!fullName.trim() || !email.trim() || !phone.trim() || !cityState.trim()}
                      onClick={() => setStep(3)}
                      className="px-5 py-2.5 bg-teal-700 hover:bg-teal-800 text-white font-semibold rounded-xl flex items-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      <span>Next: Compatibility</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Compatibility & Submit */}
              {step === 3 && (
                <div className="space-y-4 animate-in fade-in">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block font-bold text-stone-700 uppercase tracking-wide mb-1">
                        Your Blood Type (If Known)
                      </label>
                      <select
                        value={bloodType}
                        onChange={(e) => setBloodType(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs focus:outline-teal-600 bg-stone-50/50"
                      >
                        <option value="I am not sure">I'm not sure (Lab tests will check free)</option>
                        <option value="Type O+">Type O+</option>
                        <option value="Type O-">Type O-</option>
                        <option value="Type A+">Type A+</option>
                        <option value="Type A-">Type A-</option>
                        <option value="Type B+">Type B+</option>
                        <option value="Type B-">Type B-</option>
                        <option value="Type AB">Type AB</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-bold text-stone-700 uppercase tracking-wide mb-1">
                        Age Range
                      </label>
                      <select
                        value={ageRange}
                        onChange={(e) => setAgeRange(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs focus:outline-teal-600 bg-stone-50/50"
                      >
                        <option value="18-24">18 - 24 years</option>
                        <option value="25-45">25 - 45 years</option>
                        <option value="46-65">46 - 65 years</option>
                        <option value="65+">65+ years</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold text-stone-700 uppercase tracking-wide mb-1">
                      Relationship to Candidate
                    </label>
                    <select
                      value={knowsRecipient}
                      onChange={(e) => setKnowsRecipient(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs focus:outline-teal-600 bg-stone-50/50"
                    >
                      <option value="Friend / Supporter">Friend / Social Media Supporter</option>
                      <option value="Family Member">Family Member</option>
                      <option value="Coworker">Coworker / Colleague</option>
                      <option value="Altruistic / Compassionate Stranger">Altruistic / Non-Directed Donor</option>
                    </select>
                  </div>

                  <div className="p-3 bg-teal-50 border border-teal-200 rounded-xl text-teal-900 text-[11px] leading-relaxed">
                    <strong>Remember:</strong> Even if your blood type doesn't match {profile.displayName}, you can still donate on his behalf through the National Kidney Registry Paired Exchange!
                  </div>

                  <div className="pt-2 flex justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="px-4 py-2 border border-stone-300 rounded-xl text-stone-700 font-semibold cursor-pointer"
                    >
                      <ArrowLeft className="w-4 h-4 inline mr-1" />
                      Back
                    </button>

                    <button
                      type="submit"
                      className="px-6 py-2.5 bg-teal-700 hover:bg-teal-800 text-white font-bold rounded-xl shadow-md flex items-center gap-2 cursor-pointer"
                    >
                      <Heart className="w-4 h-4 fill-white" />
                      <span>Submit Confidential Registration</span>
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>
        ) : (
          <div className="py-8 text-center space-y-4 animate-in fade-in">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <h4 className="text-2xl font-bold font-['Outfit',sans-serif] text-slate-900">
                Thank You, {fullName || 'Hero'}!
              </h4>
              <p className="text-xs text-stone-600 max-w-sm mx-auto mt-2 leading-relaxed">
                Your confidential screening intake has been securely routed. An independent living donor coordinator from the National Kidney Registry transplant network will reach out to schedule your free, confidential initial consultation.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 text-xs text-stone-600 max-w-sm mx-auto text-left space-y-1">
              <div>✓ 100% Confidential to you</div>
              <div>✓ Zero out-of-pocket costs</div>
              <div>✓ You can pause or stop anytime</div>
            </div>

            <button
              onClick={resetAndClose}
              className="px-6 py-2.5 bg-stone-900 hover:bg-stone-800 text-white font-semibold text-xs rounded-xl cursor-pointer"
            >
              Return to Microsite
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
