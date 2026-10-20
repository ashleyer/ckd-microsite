import React, { useState, useEffect } from 'react';
import { defaultRecipientProfile } from './data/storyData';
import { RecipientProfile, SignedNDA, GoogleOAuthUser } from './types';
import { LandingPage } from './components/LandingPage';
import { DocuSignNdaGate } from './components/DocuSignNdaGate';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { StorySection } from './components/StorySection';
import { ClinicalDisclosureSection } from './components/ClinicalDisclosureSection';
import { PotentialImpactSection } from './components/PotentialImpactSection';
import { WhyAndHowSection } from './components/WhyAndHowSection';
import { CommunityTestimonialsSection } from './components/CommunityTestimonialsSection';
import { VideoSection } from './components/VideoSection';
import { DonorTestimonialsSection } from './components/DonorTestimonialsSection';
import { GamifiedEngageSection } from './components/GamifiedEngageSection';
import { ProgressEmailSection } from './components/ProgressEmailSection';
import { GallerySection } from './components/GallerySection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';

// Modals
import { PrivacyAndProfileModal } from './components/PrivacyAndProfileModal';
import { ScreeningModal } from './components/ScreeningModal';
import { ShareModal } from './components/ShareModal';
import { CheerModal } from './components/CheerModal';

export default function App() {
  const [signedNda, setSignedNda] = useState<SignedNDA | null>(null);
  const [profile, setProfile] = useState<RecipientProfile>(defaultRecipientProfile);

  // Pre-NDA Landing vs DocuSign gate step: 'landing' | 'docusign'
  const [landingStep, setLandingStep] = useState<'landing' | 'docusign'>('landing');
  const [googleUser, setGoogleUser] = useState<GoogleOAuthUser | null>(null);
  const [isGoogleSigningIn, setIsGoogleSigningIn] = useState(false);
  const [gateNoticeMessage, setGateNoticeMessage] = useState<string | undefined>(undefined);

  // Modals state
  const [isScreeningOpen, setIsScreeningOpen] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isCheerOpen, setIsCheerOpen] = useState(false);

  // Check localStorage for prior signed session across browser sessions
  useEffect(() => {
    try {
      // 1. Check for authenticated Google OAuth user session
      const storedGoogle = localStorage.getItem('kidney_nda_google_oauth_user');
      const storedNda = localStorage.getItem('kidney_seeker_nda_session');

      if (storedGoogle) {
        const parsedGoogle: GoogleOAuthUser = JSON.parse(storedGoogle);
        setGoogleUser(parsedGoogle);

        // Check if this Google user has previously executed the NDA
        const hasSignedKey = `kidney_nda_has_signed_${parsedGoogle.email.toLowerCase()}`;
        const hasSigned = localStorage.getItem(hasSignedKey) === 'true' || storedNda !== null;

        if (hasSigned) {
          if (storedNda) {
            setSignedNda(JSON.parse(storedNda));
          } else {
            // Reconstitute authorized NDA session from stored Google profile
            const autoNda: SignedNDA = {
              isSigned: true,
              signerName: parsedGoogle.name,
              signerEmail: parsedGoogle.email,
              signerTitle: 'Verified Google OAuth Signer',
              signatureType: 'type',
              signatureText: `/s/ ${parsedGoogle.name} (Google OAuth Verified)`,
              signedAt: new Date(parsedGoogle.authenticatedAt).toLocaleString('en-US', {
                dateStyle: 'medium',
                timeStyle: 'short'
              }),
              envelopeId: 'ENV-NKR-2026-88F4-CONFIDENTIAL-CANDIDATE',
              certificateId: 'CERT-DOCUSIGN-HIPAA-9921',
              securityHash: 'sha256-google-oauth-session-validated',
              agreedClauses: {
                confidentiality: true,
                noHarassment: true,
                hipaaRespect: true,
                altruismNotaLaw: true,
                noCeleryJuiceAdvice: true
              },
              recipientCopyEmail: profile.docusignRecipientEmail,
              recipientCopyStatus: 'delivered',
              oauthUser: parsedGoogle
            };
            setSignedNda(autoNda);
          }
          return;
        }
      }

      // 2. Check for manual signed DocuSign session
      if (storedNda) {
        setSignedNda(JSON.parse(storedNda));
      }
    } catch {
      // Ignore if localStorage unavailable
    }
  }, [profile.docusignRecipientEmail]);

  // Handle Google Sign-In from Landing Page
  const handleGoogleSignInFromLanding = () => {
    setIsGoogleSigningIn(true);

    setTimeout(() => {
      // Simulated Google OAuth profile response
      const authenticatedUser: GoogleOAuthUser = {
        provider: 'google',
        email: 'ashleye.romano@gmail.com',
        name: 'Ashley Romano',
        picture: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
        idToken: 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjRiOWRk...google-oauth-verified',
        authenticatedAt: new Date().toISOString()
      };

      setGoogleUser(authenticatedUser);
      setIsGoogleSigningIn(false);

      // Check if this Google account has previously signed the NDA
      const hasSignedKey = `kidney_nda_has_signed_${authenticatedUser.email.toLowerCase()}`;
      const hasSignedBefore = localStorage.getItem(hasSignedKey) === 'true';

      if (hasSignedBefore) {
        // RETURNING SIGNED USER: Bypass NDA directly!
        const autoNda: SignedNDA = {
          isSigned: true,
          signerName: authenticatedUser.name,
          signerEmail: authenticatedUser.email,
          signerTitle: 'Verified Google OAuth Signer',
          signatureType: 'type',
          signatureText: `/s/ ${authenticatedUser.name} (Google OAuth Verified)`,
          signedAt: new Date().toLocaleString('en-US', {
            dateStyle: 'medium',
            timeStyle: 'short'
          }),
          envelopeId: 'ENV-NKR-2026-88F4-CONFIDENTIAL-CANDIDATE',
          certificateId: 'CERT-DOCUSIGN-HIPAA-9921',
          securityHash: 'sha256-google-oauth-session-validated',
          agreedClauses: {
            confidentiality: true,
            noHarassment: true,
            hipaaRespect: true,
            altruismNotaLaw: true,
            noCeleryJuiceAdvice: true
          },
          recipientCopyEmail: profile.docusignRecipientEmail,
          recipientCopyStatus: 'delivered',
          oauthUser: authenticatedUser
        };
        setSignedNda(autoNda);
        try {
          localStorage.setItem('kidney_seeker_nda_session', JSON.stringify(autoNda));
          localStorage.setItem('kidney_nda_google_oauth_user', JSON.stringify(authenticatedUser));
        } catch {
          // ignore
        }
      } else {
        // NEW USER: Cannot skip NDA! Move to DocuSign NDA with pre-filled Google credentials
        setGateNoticeMessage(
          `Welcome, ${authenticatedUser.name}! To protect confidential patient records, all first-time visitors must execute the mutual NDA below. Your Google account details have been pre-filled for convenience.`
        );
        setLandingStep('docusign');
      }
    }, 700);
  };

  const handleNdaSigned = (ndaData: SignedNDA) => {
    setSignedNda(ndaData);
    try {
      localStorage.setItem('kidney_seeker_nda_session', JSON.stringify(ndaData));
      if (ndaData.signerEmail) {
        localStorage.setItem(`kidney_nda_has_signed_${ndaData.signerEmail.toLowerCase()}`, 'true');
      }
      if (ndaData.oauthUser) {
        localStorage.setItem(`kidney_nda_has_signed_${ndaData.oauthUser.email.toLowerCase()}`, 'true');
        localStorage.setItem('kidney_nda_google_oauth_user', JSON.stringify(ndaData.oauthUser));
      }
    } catch {
      // Ignore
    }
  };

  const handleResetNda = () => {
    try {
      localStorage.removeItem('kidney_seeker_nda_session');
      localStorage.removeItem('kidney_nda_google_oauth_user');
      if (googleUser?.email) {
        localStorage.removeItem(`kidney_nda_has_signed_${googleUser.email.toLowerCase()}`);
      }
    } catch {
      // Ignore
    }
    setSignedNda(null);
    setLandingStep('landing');
    setGateNoticeMessage(undefined);
  };

  const handleSaveProfile = (updated: RecipientProfile) => {
    setProfile(updated);
  };

  // STEP 1: If NDA is not signed, show either the attractive Landing Page or the DocuSign NDA Gate
  if (!signedNda) {
    if (landingStep === 'landing') {
      return (
        <LandingPage
          onProceedToNda={() => setLandingStep('docusign')}
          onGoogleSignIn={handleGoogleSignInFromLanding}
          isGoogleSigningIn={isGoogleSigningIn}
          noticeMessage={gateNoticeMessage}
        />
      );
    }

    return (
      <DocuSignNdaGate
        recipientPseudonym={profile.displayName}
        defaultRecipientEmail={profile.docusignRecipientEmail}
        initialGoogleUser={googleUser}
        onSigned={handleNdaSigned}
        onBackToLanding={() => {
          setGateNoticeMessage(undefined);
          setLandingStep('landing');
        }}
        noticeMessage={gateNoticeMessage}
      />
    );
  }

  // STEP 2: Main Microsite once DocuSign NDA is executed / Google OAuth authenticated
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans selection:bg-teal-100 selection:text-teal-900">
      {/* Navigation */}
      <Navbar
        profile={profile}
        signedNda={signedNda}
        onOpenScreening={() => setIsScreeningOpen(true)}
        onOpenPrivacyModal={() => setIsPrivacyOpen(true)}
        onOpenShareModal={() => setIsShareOpen(true)}
      />

      <main>
        {/* Hero Section */}
        <HeroSection
          profile={profile}
          signedNda={signedNda}
          onOpenScreening={() => setIsScreeningOpen(true)}
          onOpenShareModal={() => setIsShareOpen(true)}
          onOpenPrivacyModal={() => setIsPrivacyOpen(true)}
        />

        {/* Dedicated 6-Section Story: Who He Is, Journey, Career, Friends & Family, Passions, Goals */}
        <StorySection
          profile={profile}
          onOpenScreening={() => setIsScreeningOpen(true)}
          onOpenPrivacyModal={() => setIsPrivacyOpen(true)}
          onOpenShareModal={() => setIsShareOpen(true)}
        />

        {/* Clinical Disclosure: Treatment, Medical Team, Prognosis */}
        <ClinicalDisclosureSection
          profile={profile}
          onOpenEditModal={() => setIsPrivacyOpen(true)}
        />

        {/* Potential Impact Infographic (Recharts) */}
        <PotentialImpactSection
          profile={profile}
          onOpenScreening={() => setIsScreeningOpen(true)}
        />

        {/* Why You Should Help & How You Can Help (with Heart & Humor) */}
        <WhyAndHowSection
          profile={profile}
          onOpenScreening={() => setIsScreeningOpen(true)}
          onOpenShareModal={() => setIsShareOpen(true)}
          onOpenCheerModal={() => setIsCheerOpen(true)}
          onOpenEditModal={() => setIsPrivacyOpen(true)}
        />

        {/* Community Voices: Why He Deserves a Kidney (Testimonials Wall) */}
        <CommunityTestimonialsSection
          profile={profile}
        />

        {/* Family Video with Nephew Ben */}
        <VideoSection profile={profile} />

        {/* Living Donor Testimonials with Popups (Reducing Donor Anxiety) */}
        <DonorTestimonialsSection />

        {/* Interactive Challenge: Myth-Buster Quiz & Paired Swap Domino Simulator */}
        <GamifiedEngageSection
          onOpenScreening={() => setIsScreeningOpen(true)}
          onOpenShareModal={() => setIsShareOpen(true)}
        />

        {/* Photo Gallery with Hawaii Dream Card & Family Memories */}
        <GallerySection />

        {/* Automated Progress Email Updates Section */}
        <ProgressEmailSection />

        {/* Frequently Asked Questions */}
        <FaqSection />
      </main>

      {/* Footer with DocuSign Session Audit, Courier Green Line & Ashley Modal */}
      <Footer
        profile={profile}
        signedNda={signedNda}
        onResetNda={handleResetNda}
        onOpenPrivacyModal={() => setIsPrivacyOpen(true)}
      />

      {/* Interactive Modals */}
      <PrivacyAndProfileModal
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
        profile={profile}
        onSaveProfile={handleSaveProfile}
      />

      <ScreeningModal
        isOpen={isScreeningOpen}
        onClose={() => setIsScreeningOpen(false)}
        profile={profile}
      />

      <ShareModal
        isOpen={isShareOpen}
        onClose={() => setIsShareOpen(false)}
        profile={profile}
      />

      <CheerModal
        isOpen={isCheerOpen}
        onClose={() => setIsCheerOpen(false)}
        profile={profile}
      />
    </div>
  );
}
