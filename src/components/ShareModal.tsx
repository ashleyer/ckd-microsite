import React, { useEffect, useState, useRef } from 'react';
import QRCode from 'qrcode';
import { 
  X, 
  Share2, 
  Copy, 
  Check, 
  Download, 
  Printer, 
  QrCode, 
  Heart,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { RecipientProfile } from '../types';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: RecipientProfile;
}

export const ShareModal: React.FC<ShareModalProps> = ({
  isOpen,
  onClose,
  profile
}) => {
  const [copied, setCopied] = useState(false);
  const [qrDataUrl, setQrDataUrl] = useState<string>('');
  const [showPrintable, setShowPrintable] = useState(false);

  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://findakidney.com/candidatet';

  useEffect(() => {
    if (isOpen) {
      QRCode.toDataURL(currentUrl, {
        width: 320,
        margin: 2,
        color: {
          dark: '#0f766e',
          light: '#ffffff'
        }
      })
        .then(url => setQrDataUrl(url))
        .catch(err => console.error('QR code error', err));
    }
  }, [isOpen, currentUrl]);

  if (!isOpen) return null;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in">
      <div 
        className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-stone-200 relative max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-800 bg-teal-50 px-2.5 py-0.5 rounded-full border border-teal-200 mb-2">
            <Share2 className="w-3.5 h-3.5 text-teal-600" />
            <span>Spread the Word</span>
          </div>
          <h3 className="text-2xl font-bold font-['Outfit',sans-serif] text-slate-900">
            Share {profile.displayName}'s Search
          </h3>
          <p className="text-xs text-stone-600 mt-1">
            Over 80% of living donors step forward because a friend or stranger shared a post or flyer.
          </p>
        </div>

        {/* QR Code Container */}
        <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200 flex flex-col items-center justify-center mb-5">
          {qrDataUrl ? (
            <img
              src={qrDataUrl}
              alt="Campaign QR Code"
              className="w-48 h-48 rounded-xl shadow-xs border border-white"
            />
          ) : (
            <div className="w-48 h-48 rounded-xl bg-stone-200 animate-pulse flex items-center justify-center">
              <QrCode className="w-8 h-8 text-stone-400" />
            </div>
          )}
          <span className="mt-3 text-[11px] font-mono text-stone-500 font-semibold">
            Scan to view official microsite on any phone
          </span>
        </div>

        {/* 1-Click Copy Link */}
        <div className="space-y-3 mb-6">
          <label className="block text-xs font-bold text-stone-700 uppercase tracking-wide">
            Direct Microsite Web Address:
          </label>
          <div className="flex items-center gap-2">
            <input
              type="text"
              readOnly
              value={currentUrl}
              className="w-full px-3 py-2 rounded-xl border border-stone-300 bg-stone-50 text-xs font-mono text-stone-700"
            />
            <button
              onClick={handleCopyLink}
              className="px-4 py-2 bg-teal-700 hover:bg-teal-800 text-white font-semibold text-xs rounded-xl flex items-center gap-1.5 shrink-0 transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied!' : 'Copy'}</span>
            </button>
          </div>
        </div>

        {/* Social Share Buttons */}
        <div className="space-y-3 pt-4 border-t border-stone-100">
          <label className="block text-xs font-bold text-stone-700 uppercase tracking-wide text-center">
            Share Instantly on Social Media:
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-semibold">
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-blue-50 text-blue-800 hover:bg-blue-100 border border-blue-200 text-center transition-colors flex items-center justify-center gap-1.5"
            >
              <span>Facebook</span>
            </a>

            <a
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(`Searching for a living kidney donor for ${profile.displayName}. Please take 2 minutes to learn more or share:`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-sky-50 text-sky-800 hover:bg-sky-100 border border-sky-200 text-center transition-colors flex items-center justify-center gap-1.5"
            >
              <span>X (Twitter)</span>
            </a>

            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-indigo-50 text-indigo-800 hover:bg-indigo-100 border border-indigo-200 text-center transition-colors flex items-center justify-center gap-1.5"
            >
              <span>LinkedIn</span>
            </a>

            <a
              href={`https://api.whatsapp.com/send?text=${encodeURIComponent(`A living kidney donor search is underway for ${profile.displayName}. Learn how to help or share: ${currentUrl}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-emerald-50 text-emerald-800 hover:bg-emerald-100 border border-emerald-200 text-center transition-colors flex items-center justify-center gap-1.5"
            >
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Printable Campaign Flyer Button */}
        <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between">
          <span className="text-xs text-stone-500">Need printouts for gym, church, or work?</span>
          <button
            onClick={handlePrint}
            className="px-4 py-2 bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold rounded-xl flex items-center gap-1.5 cursor-pointer shadow-xs"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print Campaign Poster</span>
          </button>
        </div>
      </div>
    </div>
  );
};
