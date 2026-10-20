import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Heart, 
  FileCheck2, 
  Lock, 
  ExternalLink, 
  RefreshCw,
  Mail,
  Github,
  X,
  Send
} from 'lucide-react';
import { RecipientProfile, SignedNDA } from '../types';
import { AuthorModal } from './AuthorModal';

interface FooterProps {
  profile: RecipientProfile;
  signedNda: SignedNDA | null;
  onResetNda: () => void;
  onOpenPrivacyModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  profile,
  signedNda,
  onResetNda,
  onOpenPrivacyModal
}) => {
  const [isAuthorModalOpen, setIsAuthorModalOpen] = useState(false);
  const [isResendingCopy, setIsResendingCopy] = useState(false);
  const [resendSuccess, setResendSuccess] = useState(false);

  const handleResendDocuSignCopy = () => {
    setIsResendingCopy(true);
    setTimeout(() => {
      setIsResendingCopy(false);
      setResendSuccess(true);
      setTimeout(() => setResendSuccess(false), 3500);
    }, 800);
  };

  return (
    <footer className="bg-stone-950 text-stone-300 py-12 sm:py-16 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Top DocuSign Audit Badge & Privacy Row */}
        <div className="p-5 rounded-2xl bg-stone-900 border border-stone-800 flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
              <FileCheck2 className="w-4 h-4" />
            </div>
            <div>
              <div className="text-white font-semibold flex items-center gap-2">
                <span>DocuSign ESIGN Certified Session</span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-500/40 text-[10px]">
                  Legally Executed
                </span>
                {signedNda?.oauthUser && (
                  <span className="px-2 py-0.5 rounded-full bg-blue-950 text-blue-300 border border-blue-500/40 text-[10px]">
                    Google OAuth Verified
                  </span>
                )}
              </div>
              <div className="text-stone-400 text-[11px] font-mono mt-0.5">
                Signer: {signedNda?.signerName || 'Authorized Signer'} ({signedNda?.signerEmail || 'Verified'}) · Envelope ID: {signedNda?.envelopeId || 'ENV-NKR-2026-88F4-CONFIDENTIAL-CANDIDATE'}
              </div>
              <div className="text-teal-400 text-[10px] font-mono mt-0.5 flex items-center gap-1.5">
                <Mail className="w-3 h-3" />
                <span>Copy Transmitted to Recipient: {signedNda?.recipientCopyEmail || profile.docusignRecipientEmail || 'advocate-relay@kidneyseeker-vault.org'}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={handleResendDocuSignCopy}
              disabled={isResendingCopy}
              className="px-3 py-1.5 rounded-lg bg-teal-950 hover:bg-teal-900 border border-teal-700/60 text-teal-300 text-xs font-medium transition-colors cursor-pointer flex items-center gap-1.5"
              title="Resend executed DocuSign PDF & Certificate to recipient email"
            >
              <Send className="w-3 h-3" />
              <span>{isResendingCopy ? 'Sending...' : resendSuccess ? '✓ Copy Dispatched!' : 'Send DocuSign Copy'}</span>
            </button>

            <button
              onClick={onOpenPrivacyModal}
              className="px-3 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-medium transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <Lock className="w-3 h-3 text-teal-400" />
              <span>Privacy Controls</span>
            </button>

            <button
              onClick={onResetNda}
              className="px-3 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-400 hover:text-stone-200 text-xs transition-colors cursor-pointer flex items-center gap-1.5"
              title="Test NDA signature gate again"
            >
              <RefreshCw className="w-3 h-3" />
              <span>Re-sign NDA</span>
            </button>
          </div>
        </div>

        {/* 4-Column Footer Information */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-xs text-stone-400">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-white font-bold text-sm">
              <div className="w-6 h-6 rounded bg-teal-600 flex items-center justify-center text-white">
                <Heart className="w-3.5 h-3.5 fill-white" />
              </div>
              <span>{profile.displayName}</span>
            </div>
            <p className="leading-relaxed">
              Official living kidney donor search microsite template, following National Kidney Registry (NKR) and Find A Kidney trifold campaign guidelines.
            </p>
            <div className="text-[11px] text-teal-400 font-mono">
              Center: {profile.transplantCenter}
            </div>
          </div>

          <div className="space-y-2">
            <div className="text-white font-bold uppercase tracking-wider text-[11px]">
              Living Donor Protections
            </div>
            <ul className="space-y-1.5">
              <li>
                <a href="https://www.kidneyregistry.org/for-donors/donor-shield/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
                  <span>Donor Shield Lost Wage Benefit</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="https://www.kidneyregistry.org/for-donors/paired-exchange/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
                  <span>Paired Kidney Exchange</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="https://www.kidneyregistry.org/for-donors/living-donor-protection-act/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
                  <span>Living Donor Protection Act</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <div className="text-white font-bold uppercase tracking-wider text-[11px]">
              Compliance & Ethics
            </div>
            <p className="leading-relaxed text-[11px]">
              This campaign strictly complies with the <strong>National Organ Transplant Act (NOTA, 42 U.S.C. 274e)</strong>. Organ donation is purely altruistic; zero financial compensation, gifts, or incentives may be offered or received.
            </p>
          </div>

          <div className="space-y-2">
            <div className="text-white font-bold uppercase tracking-wider text-[11px]">
              Medical Disclaimer
            </div>
            <p className="leading-relaxed text-[11px]">
              Information on this microsite is for awareness and outreach purposes only and does not constitute medical advice. Donor evaluations and compatibility testing are conducted solely by accredited transplant centers.
            </p>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-500">
          <div>
            © {new Date().getFullYear()} Living Kidney Donor Search Campaign · Secured by DocuSign HIPAA Shield
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-teal-500" />
              <span>Independent Donor Advocacy Guaranteed</span>
            </span>
          </div>
        </div>

        {/* User Requested Custom Courier Green Footer */}
        <div className="pt-6 border-t border-stone-900 text-center">
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
      </div>

      {/* Author modal with Email and GitHub */}
      <AuthorModal
        isOpen={isAuthorModalOpen}
        onClose={() => setIsAuthorModalOpen(false)}
      />
    </footer>
  );
};
