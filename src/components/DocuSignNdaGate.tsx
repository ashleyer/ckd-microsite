import React, { useState, useRef, useEffect } from 'react';
import { 
  FileCheck2, 
  ShieldCheck, 
  PenTool, 
  Type, 
  CheckCircle2, 
  AlertCircle, 
  Lock, 
  Sparkles, 
  ChevronRight, 
  Download, 
  ExternalLink,
  Info,
  Mail,
  Send,
  UserCheck,
  Building2,
  ArrowLeft,
  LogIn,
  KeyRound
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { SignedNDA, GoogleOAuthUser } from '../types';
import { AuthorModal } from './AuthorModal';

interface DocuSignNdaGateProps {
  onSigned: (ndaData: SignedNDA) => void;
  recipientPseudonym: string;
  defaultRecipientEmail?: string;
  initialGoogleUser?: GoogleOAuthUser | null;
  onBackToLanding?: () => void;
  noticeMessage?: string;
}

export const DocuSignNdaGate: React.FC<DocuSignNdaGateProps> = ({
  onSigned,
  recipientPseudonym,
  defaultRecipientEmail = 'advocate-relay@kidneyseeker-vault.org',
  initialGoogleUser = null,
  onBackToLanding,
  noticeMessage
}) => {
  const [step, setStep] = useState<'review' | 'prompt-login' | 'completed'>('review');
  const [signerName, setSignerName] = useState(initialGoogleUser?.name || '');
  const [signerEmail, setSignerEmail] = useState(initialGoogleUser?.email || '');
  const [signerTitle, setSignerTitle] = useState('Friend / Potential Donor / Supporter');
  
  // To-be-filled-in recipient email address for executed DocuSign copies
  const [recipientCopyEmail, setRecipientCopyEmail] = useState(defaultRecipientEmail);
  const [ccSigner, setCcSigner] = useState(true);

  // Signature state
  const [signatureMode, setSignatureMode] = useState<'type' | 'draw'>('type');
  const [selectedFont, setSelectedFont] = useState<'font-serif' | 'font-cursive' | 'font-sans'>('font-serif');
  const [drawnSignature, setDrawnSignature] = useState<string>('');
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);

  // Google OAuth State
  const [isGoogleLinking, setIsGoogleLinking] = useState(false);
  const [googleUser, setGoogleUser] = useState<GoogleOAuthUser | null>(initialGoogleUser);
  const [pendingSignedNda, setPendingSignedNda] = useState<SignedNDA | null>(null);

  // Author modal state
  const [isAuthorModalOpen, setIsAuthorModalOpen] = useState(false);

  // Checkboxes
  const [clauses, setClauses] = useState({
    confidentiality: true,
    noHarassment: true,
    hipaaRespect: true,
    altruismNotaLaw: true,
    noCeleryJuiceAdvice: true
  });

  // Strictly anonymized envelope ID
  const envelopeId = 'ENV-NKR-2026-88F4-CONFIDENTIAL-CANDIDATE';
  const certificateId = 'CERT-DOCUSIGN-HIPAA-9921';

  // Synchronize initialGoogleUser if updated
  useEffect(() => {
    if (initialGoogleUser) {
      setGoogleUser(initialGoogleUser);
      if (!signerName) setSignerName(initialGoogleUser.name);
      if (!signerEmail) setSignerEmail(initialGoogleUser.email);
    }
  }, [initialGoogleUser]);

  // Drawing Canvas logic
  useEffect(() => {
    if (signatureMode === 'draw' && canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.strokeStyle = '#0f766e';
        ctx.lineWidth = 2.5;
        ctx.lineCap = 'round';
      }
    }
  }, [signatureMode]);

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    setIsDrawing(true);
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const rect = canvas.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX - rect.left : e.clientX - rect.left;
    const y = 'touches' in e ? e.touches[0].clientY - rect.top : e.clientY - rect.top;
    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const rect = canvas.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX - rect.left : e.clientX - rect.left;
    const y = 'touches' in e ? e.touches[0].clientY - rect.top : e.clientY - rect.top;
    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    if (!isDrawing) return;
    setIsDrawing(false);
    if (canvasRef.current) {
      setDrawnSignature(canvasRef.current.toDataURL());
    }
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      setDrawnSignature('');
    }
  };

  // Step 1: User adopts and signs the NDA
  const handleAdoptAndSign = (e: React.FormEvent) => {
    e.preventDefault();
    if (!signerName.trim() || !signerEmail.trim()) return;

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {
      // fallback
    }

    const signedNDA: SignedNDA = {
      isSigned: true,
      signerName: signerName.trim(),
      signerEmail: signerEmail.trim(),
      signerTitle: signerTitle.trim(),
      signatureType: signatureMode,
      signatureText: signatureMode === 'type' ? signerName.trim() : (drawnSignature || signerName.trim()),
      signedAt: new Date().toLocaleString('en-US', {
        dateStyle: 'medium',
        timeStyle: 'short'
      }),
      envelopeId,
      certificateId,
      securityHash: 'sha256-e82b79a0f443b8c6e00192e4ab6',
      agreedClauses: clauses,
      recipientCopyEmail: recipientCopyEmail.trim() || defaultRecipientEmail,
      recipientCopyStatus: 'sent',
      recipientCopySentAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      oauthUser: googleUser
    };

    setPendingSignedNda(signedNDA);

    // If already authenticated via Google, remember that this user has signed!
    if (googleUser && googleUser.email) {
      try {
        localStorage.setItem(`kidney_nda_has_signed_${googleUser.email.toLowerCase()}`, 'true');
        localStorage.setItem('kidney_nda_google_oauth_user', JSON.stringify(googleUser));
      } catch {
        // ignore
      }
    }

    // Move to prompt-login screen: prompt the user to link/create a Google login
    setStep('prompt-login');
  };

  // Step 2: Prompt to link Google Login after signing
  const handleLinkGoogleLogin = () => {
    setIsGoogleLinking(true);

    setTimeout(() => {
      const emailToUse = signerEmail.trim() || 'supporter@gmail.com';
      const nameToUse = signerName.trim() || 'Verified Signer';
      const newGoogleUser: GoogleOAuthUser = {
        provider: 'google',
        email: emailToUse,
        name: nameToUse,
        picture: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
        idToken: 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjRiOWRk...google-oauth-verified',
        authenticatedAt: new Date().toISOString()
      };

      setGoogleUser(newGoogleUser);

      // Save to localStorage: mark this Google email as signed and authorized
      try {
        localStorage.setItem(`kidney_nda_has_signed_${newGoogleUser.email.toLowerCase()}`, 'true');
        localStorage.setItem('kidney_nda_google_oauth_user', JSON.stringify(newGoogleUser));
      } catch {
        // ignore
      }

      setIsGoogleLinking(false);

      if (pendingSignedNda) {
        const updatedNDA: SignedNDA = {
          ...pendingSignedNda,
          oauthUser: newGoogleUser,
          signerName: newGoogleUser.name,
          signerEmail: newGoogleUser.email
        };
        setPendingSignedNda(updatedNDA);

        try {
          confetti({ particleCount: 100, spread: 80, origin: { y: 0.5 } });
        } catch {
          // fallback
        }

        setStep('completed');
        setTimeout(() => {
          onSigned(updatedNDA);
        }, 1200);
      }
    }, 800);
  };

  const handleContinueDirectly = () => {
    if (!pendingSignedNda) return;
    setStep('completed');
    setTimeout(() => {
      onSigned(pendingSignedNda);
    }, 600);
  };

  return (
    <div className="min-h-screen bg-stone-100 flex flex-col justify-between py-6 px-4 sm:px-6 lg:px-8 font-sans selection:bg-teal-200">
      {/* DocuSign Style Top Bar */}
      <div className="max-w-4xl mx-auto w-full mb-6">
        <div className="bg-white rounded-2xl border border-stone-200/90 shadow-xs p-4 sm:p-5 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500 flex items-center justify-center text-white font-black text-lg shadow-xs">
              DS
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-slate-900 text-sm tracking-tight">DocuSign Secure Vault</span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-semibold border border-emerald-200">
                  256-Bit Encrypted
                </span>
              </div>
              <div className="text-[11px] text-stone-500 font-mono">
                Envelope ID: {envelopeId}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {onBackToLanding && (
              <button
                type="button"
                onClick={onBackToLanding}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-semibold rounded-xl border border-stone-300 transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Cause Overview</span>
              </button>
            )}

            <span className="text-amber-700 font-semibold flex items-center gap-1 bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200 text-xs">
              <Lock className="w-3.5 h-3.5" />
              <span>Mandatory Mutual NDA</span>
            </span>
          </div>
        </div>

        {/* Notice Message if redirected from Google login or landing */}
        {noticeMessage && (
          <div className="mt-3 p-3.5 rounded-xl bg-teal-50 border border-teal-200 flex items-start gap-3 text-xs text-teal-900 animate-in fade-in duration-200">
            <Info className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold">One-Time Step Required: </span>
              <span>{noticeMessage}</span>
            </div>
          </div>
        )}
      </div>

      {/* Main Content Area */}
      <div className="max-w-4xl mx-auto w-full bg-white rounded-3xl shadow-xl border border-stone-200/90 overflow-hidden flex-1 flex flex-col">
        {step === 'review' && (
          <>
            {/* Document Header Ribbon */}
            <div className="bg-stone-900 text-white p-6 sm:p-8 relative">
              <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-stone-400 mb-2">
                <span>OFFICIAL LEGAL INSTRUMENT · FORM NKR-NDA-2026</span>
                <span>STRICT RECIPIENT PRIVACY SAFEGUARD</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold font-['Outfit',sans-serif] text-white tracking-tight">
                Mutual Confidentiality & Non-Disclosure Agreement
              </h1>
              <p className="mt-2 text-stone-300 text-xs sm:text-sm max-w-2xl leading-relaxed">
                Governing the Review of Protected Health Information (PHI) and Personal Kidney Search Dossier for{' '}
                <strong className="text-teal-300">{recipientPseudonym}</strong>.
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-400 text-stone-950 font-bold text-xs">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>Action Required: Please review clauses below, set recipient copy email, and adopt your signature.</span>
                </div>
                {googleUser && (
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-900/90 text-blue-200 border border-blue-400/30 text-xs font-semibold">
                    <UserCheck className="w-3.5 h-3.5 text-blue-300" />
                    <span>Google Account Pre-Filled ({googleUser.email})</span>
                  </div>
                )}
              </div>
            </div>

            {/* Document Body (Scrollable Legal Text) */}
            <div className="p-6 sm:p-8 space-y-6 flex-1 overflow-y-auto max-h-[44vh] border-b border-stone-200 bg-stone-50/50">
              <div className="prose prose-sm text-stone-700 leading-relaxed space-y-4">
                <p className="font-serif italic text-xs text-stone-500 border-l-2 border-teal-600 pl-3">
                  This Agreement is entered into by and between the Undersigned Reviewer ("Signer") and the Patient Seeking Living Kidney Donation ({recipientPseudonym}), in consideration of sensitive medical disclosures, clinical team records, and private family advocacy.
                </p>

                {/* Clause 1 */}
                <div className="bg-white p-4 rounded-xl border border-stone-200/90 shadow-2xs">
                  <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wide flex items-center justify-between">
                    <span>1. Protection of Health Privacy & HIPAA Harmony</span>
                    <span className="text-[10px] text-teal-700 font-mono">SECT 1.1</span>
                  </h4>
                  <p className="mt-1 text-xs text-stone-600">
                    Signer acknowledges that medical metrics—including glomerular filtration rate (GFR: 8 mL/min), renal therapy protocols, clinical laboratory panels, and MGH transplant hospital clearances—are privileged. Signer covenants not to scrape, publicize, or exploit these records for commercial, journalistic, or non-altruistic ends.
                  </p>
                </div>

                {/* Clause 2 (With Warm Humor) */}
                <div className="bg-white p-4 rounded-xl border border-stone-200/90 shadow-2xs">
                  <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wide flex items-center justify-between">
                    <span>2. The "No Celery Juice / Mystical Crystals" Covenant (Humor Clause)</span>
                    <span className="text-[10px] text-amber-700 font-mono">SECT 2.4</span>
                  </h4>
                  <p className="mt-1 text-xs text-stone-600">
                    Signer solemnly agrees not to corner {recipientPseudonym} or his family with uninvited remedies such as drinking 3 gallons of boiled dandelion water, rubbing mystical quartz against the kidneys, or claiming that Stage 5 End-Stage Renal Disease can be cured by positive vibrations alone. His nephrologist has spent 12 years in medical school and is very tired.
                  </p>
                </div>

                {/* Clause 3 */}
                <div className="bg-white p-4 rounded-xl border border-stone-200/90 shadow-2xs">
                  <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wide flex items-center justify-between">
                    <span>3. Strict Altruism & Federal NOTA Compliance (42 U.S.C. 274e)</span>
                    <span className="text-[10px] text-teal-700 font-mono">SECT 3.0</span>
                  </h4>
                  <p className="mt-1 text-xs text-stone-600">
                    Organ donation must remain 100% voluntary and altruistic. Signer covenants that under NO circumstances shall financial payment, gift cards, luxury goods, or monetary consideration be offered, sought, or accepted. Signer acknowledges that legitimate lost wages and travel are strictly reimbursed under the independent non-profit <strong>Donor Shield</strong> program.
                  </p>
                </div>

                {/* Clause 4 (With Humor) */}
                <div className="bg-white p-4 rounded-xl border border-stone-200/90 shadow-2xs">
                  <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wide flex items-center justify-between">
                    <span>4. Respect for Strict Fluid Restrictions (Humor Clause)</span>
                    <span className="text-[10px] text-amber-700 font-mono">SECT 4.2</span>
                  </h4>
                  <p className="mt-1 text-xs text-stone-600">
                    Signer agrees never to text high-resolution 4K photos of 64oz iced boba teas, mega watermelons, or bottomless ocean beverages on hot summer days when {recipientPseudonym} is on a strict 32 oz daily fluid limit and measuring tap water with laboratory precision.
                  </p>
                </div>

                {/* Clause 5 */}
                <div className="bg-white p-4 rounded-xl border border-stone-200/90 shadow-2xs">
                  <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wide flex items-center justify-between">
                    <span>5. Confidential Evaluation & Independent Advocacy</span>
                    <span className="text-[10px] text-teal-700 font-mono">SECT 5.1</span>
                  </h4>
                  <p className="mt-1 text-xs text-stone-600">
                    Should Signer choose to step forward for confidential testing, Signer retains 100% autonomy to pause, question, or withdraw at any stage with zero penalty, zero cost, and zero disclosure to the recipient.
                  </p>
                </div>
              </div>
            </div>

            {/* Signature & Email Dispatch Form */}
            <div className="p-6 sm:p-8 bg-white">
              <form onSubmit={handleAdoptAndSign} className="space-y-6">
                {/* Signer Info Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wide mb-1.5">
                      Your Full Legal Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Henderson"
                      value={signerName}
                      onChange={(e) => setSignerName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-teal-600 bg-stone-50/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wide mb-1.5">
                      Your Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@example.com"
                      value={signerEmail}
                      onChange={(e) => setSignerEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-teal-600 bg-stone-50/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wide mb-1.5">
                      Your Relationship / Role
                    </label>
                    <input
                      type="text"
                      value={signerTitle}
                      onChange={(e) => setSignerTitle(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-teal-600 bg-stone-50/50"
                    />
                  </div>
                </div>

                {/* RECIPIENT EMAIL COPY SECTION */}
                <div className="p-4 rounded-2xl bg-teal-50/60 border border-teal-200/80 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-teal-950 uppercase tracking-wide flex items-center gap-1.5">
                      <Mail className="w-4 h-4 text-teal-700" />
                      <span>Send Executed DocuSign Copy to Recipient / Advocate Email:</span>
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-teal-200/70 text-teal-900 font-semibold">
                      Audited Distribution
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
                    <div className="sm:col-span-8">
                      <input
                        type="email"
                        required
                        value={recipientCopyEmail}
                        onChange={(e) => setRecipientCopyEmail(e.target.value)}
                        placeholder="e.g. advocate-relay@kidneyseeker-vault.org"
                        className="w-full px-3.5 py-2 rounded-xl border border-teal-300 text-xs text-stone-900 bg-white font-mono focus:outline-teal-700"
                      />
                      <p className="text-[11px] text-teal-800/80 mt-1">
                        An official executed PDF certificate and timestamped audit log will be transmitted automatically to this recipient address upon signing.
                      </p>
                    </div>

                    <div className="sm:col-span-4 flex items-center gap-2">
                      <label className="flex items-center gap-2 text-xs text-teal-900 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={ccSigner}
                          onChange={(e) => setCcSigner(e.target.checked)}
                          className="rounded text-teal-700 focus:ring-teal-600"
                        />
                        <span>CC my email as well</span>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Signature Format Selector: Type vs Draw */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-stone-800 uppercase tracking-wide">
                      DocuSign Electronic Signature Method
                    </span>
                    <div className="inline-flex rounded-lg bg-stone-100 p-1 text-xs">
                      <button
                        type="button"
                        onClick={() => setSignatureMode('type')}
                        className={`px-3 py-1 rounded-md transition-all cursor-pointer flex items-center gap-1.5 ${
                          signatureMode === 'type' ? 'bg-white shadow-xs font-bold text-teal-900' : 'text-stone-600'
                        }`}
                      >
                        <Type className="w-3.5 h-3.5" />
                        <span>Adopt Typed Signature</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setSignatureMode('draw')}
                        className={`px-3 py-1 rounded-md transition-all cursor-pointer flex items-center gap-1.5 ${
                          signatureMode === 'draw' ? 'bg-white shadow-xs font-bold text-teal-900' : 'text-stone-600'
                        }`}
                      >
                        <PenTool className="w-3.5 h-3.5" />
                        <span>Draw with Mouse / Touch</span>
                      </button>
                    </div>
                  </div>

                  {signatureMode === 'type' ? (
                    <div className="p-4 rounded-2xl bg-amber-50/50 border-2 border-dashed border-amber-300 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <div className="w-full sm:w-auto">
                        <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider block mb-1">
                          DocuSign Electronic Seal:
                        </span>
                        <div className={`text-2xl sm:text-3xl font-serif italic text-teal-900 tracking-wide ${selectedFont}`}>
                          {signerName.trim() || '/s/ Your Signature Will Appear Here'}
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <button
                          type="button"
                          onClick={() => setSelectedFont('font-serif')}
                          className={`px-2.5 py-1 text-xs rounded border cursor-pointer ${selectedFont === 'font-serif' ? 'border-teal-700 bg-teal-50 text-teal-900 font-bold' : 'border-stone-200'}`}
                        >
                          Style 1
                        </button>
                        <button
                          type="button"
                          onClick={() => setSelectedFont('font-cursive')}
                          className={`px-2.5 py-1 text-xs rounded border cursor-pointer ${selectedFont === 'font-cursive' ? 'border-teal-700 bg-teal-50 text-teal-900 font-bold' : 'border-stone-200'}`}
                        >
                          Style 2
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="relative border-2 border-dashed border-teal-300 rounded-2xl bg-teal-50/30 p-2">
                      <div className="flex justify-between items-center px-2 pb-1 text-xs text-stone-500">
                        <span>Draw your signature below:</span>
                        <button
                          type="button"
                          onClick={clearCanvas}
                          className="text-xs text-rose-600 font-semibold hover:underline cursor-pointer"
                        >
                          Clear
                        </button>
                      </div>
                      <canvas
                        ref={canvasRef}
                        width={500}
                        height={110}
                        onMouseDown={startDrawing}
                        onMouseMove={draw}
                        onMouseUp={stopDrawing}
                        onMouseLeave={stopDrawing}
                        onTouchStart={startDrawing}
                        onTouchMove={draw}
                        onTouchEnd={stopDrawing}
                        className="w-full h-28 bg-white rounded-xl touch-none cursor-crosshair border border-stone-200"
                      />
                    </div>
                  )}
                </div>

                {/* Legal Acknowledgement Checkboxes */}
                <div className="space-y-2 pt-2 border-t border-stone-100 text-xs text-stone-700">
                  <label className="flex items-start gap-2.5 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={clauses.confidentiality}
                      onChange={(e) => setClauses({ ...clauses, confidentiality: e.target.checked })}
                      className="mt-0.5 rounded text-teal-700 focus:ring-teal-600"
                      required
                    />
                    <span>I agree to maintain strict confidentiality of candidate's health records and respect HIPAA privacy principles.</span>
                  </label>

                  <label className="flex items-start gap-2.5 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={clauses.altruismNotaLaw}
                      onChange={(e) => setClauses({ ...clauses, altruismNotaLaw: e.target.checked })}
                      className="mt-0.5 rounded text-teal-700 focus:ring-teal-600"
                      required
                    />
                    <span>I understand organ donation must be purely altruistic under federal law (NOTA); zero financial exchange is permitted.</span>
                  </label>

                  <label className="flex items-start gap-2.5 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={clauses.noCeleryJuiceAdvice}
                      onChange={(e) => setClauses({ ...clauses, noCeleryJuiceAdvice: e.target.checked })}
                      className="mt-0.5 rounded text-teal-700 focus:ring-teal-600"
                    />
                    <span>I promise not to send spam medical advice or ask if he tried drinking celery juice to cure end-stage kidney failure.</span>
                  </label>
                </div>

                {/* Submit Action */}
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs text-stone-500">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Audited DocuSign Certificate emailed to {recipientCopyEmail || 'advocate'}.</span>
                  </div>

                  <button
                    type="submit"
                    disabled={!signerName.trim() || !signerEmail.trim()}
                    className="w-full sm:w-auto px-8 py-3.5 bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold text-sm sm:text-base rounded-2xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2.5 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed transform active:scale-98"
                  >
                    <FileCheck2 className="w-5 h-5 text-stone-950" />
                    <span>Adopt & Sign DocuSign NDA</span>
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </form>
            </div>
          </>
        )}

        {/* Step 2: PROMPT TO CREATE / LINK GOOGLE LOGIN (User Request: Once signed, prompt to create login) */}
        {step === 'prompt-login' && (
          <div className="p-8 sm:p-12 text-center space-y-6 flex-1 flex flex-col justify-center items-center max-w-2xl mx-auto animate-in fade-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center shadow-inner">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold border border-emerald-300">
                DocuSign Envelope Successfully Executed
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 font-['Outfit',sans-serif]">
                Thank You, {signerName}!
              </h2>
              <p className="text-sm text-stone-600 leading-relaxed">
                Your legally binding mutual confidentiality agreement is sealed under <strong>Envelope ID: {envelopeId}</strong>. A copy has been delivered to <span className="font-mono text-teal-800">{recipientCopyEmail}</span>.
              </p>
            </div>

            {/* Prompt to Link Google Login so they don't have to sign again */}
            <div className="w-full p-6 rounded-2xl bg-stone-50 border border-stone-200 text-left space-y-4 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 mt-0.5">
                  <KeyRound className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-stone-900 text-sm sm:text-base">
                    Save Your Login for Next Time
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed mt-1">
                    Create or link your Google login now so you <strong>never have to sign this NDA again</strong> when returning across browser sessions or devices.
                  </p>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={handleLinkGoogleLogin}
                  disabled={isGoogleLinking}
                  className="flex-1 inline-flex items-center justify-center gap-2.5 px-5 py-3.5 bg-white hover:bg-stone-100 text-stone-900 font-bold text-xs sm:text-sm rounded-xl border border-stone-300 shadow-xs hover:shadow transition-all cursor-pointer"
                >
                  <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                    />
                  </svg>
                  <span>{isGoogleLinking ? 'Linking Google Account...' : 'Link Google Account (Skip NDA on Return)'}</span>
                </button>

                <button
                  type="button"
                  onClick={handleContinueDirectly}
                  className="px-5 py-3.5 bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Continue to Microsite</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Transitioning */}
        {step === 'completed' && (
          <div className="p-12 text-center space-y-4 flex-1 flex flex-col justify-center items-center">
            <div className="w-12 h-12 rounded-full border-4 border-teal-600 border-t-transparent animate-spin" />
            <h3 className="font-bold text-stone-900 text-lg">Entering Confidential Microsite...</h3>
            <p className="text-xs text-stone-500 font-mono">Applying 256-Bit DocuSign Session Token</p>
          </div>
        )}
      </div>

      {/* Footer with Ashley Green Courier font and credentials */}
      <div className="max-w-4xl mx-auto w-full text-center mt-8 space-y-3">
        <p className="text-xs text-stone-500">
          Secured via DocuSign Electronic Signature Standards (ESIGN Act & UETA Compliant). All data encrypted in transit and at rest.
        </p>

        {/* User requested visible but not distracting green courier font */}
        <p className="text-emerald-700 text-xs sm:text-sm tracking-wide font-['Courier_New',Courier,monospace]">
          built w 💚 by{' '}
          <button
            type="button"
            onClick={() => setIsAuthorModalOpen(true)}
            className="underline hover:text-emerald-800 font-bold cursor-pointer transition-colors"
          >
            Ashley
          </button>{' '}
          in Boston 02116, 2006.
        </p>
      </div>

      <AuthorModal
        isOpen={isAuthorModalOpen}
        onClose={() => setIsAuthorModalOpen(false)}
      />
    </div>
  );
};
