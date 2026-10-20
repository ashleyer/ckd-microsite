import React, { useState } from 'react';
import { 
  X, 
  ShieldCheck, 
  Lock, 
  Eye, 
  EyeOff, 
  Save, 
  RotateCcw, 
  UserCheck, 
  Stethoscope, 
  Sparkles, 
  HelpCircle,
  Mail
} from 'lucide-react';
import { RecipientProfile } from '../types';

interface PrivacyAndProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: RecipientProfile;
  onSaveProfile: (updated: RecipientProfile) => void;
}

export const PrivacyAndProfileModal: React.FC<PrivacyAndProfileModalProps> = ({
  isOpen,
  onClose,
  profile,
  onSaveProfile
}) => {
  const [formData, setFormData] = useState<RecipientProfile>({ ...profile });
  const [activeTab, setActiveTab] = useState<'privacy' | 'identity' | 'clinical' | 'story'>('privacy');
  const [savedAlert, setSavedAlert] = useState(false);

  if (!isOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    onSaveProfile(formData);
    setSavedAlert(true);
    setTimeout(() => {
      setSavedAlert(false);
      onClose();
    }, 1000);
  };

  const toggleAnonymization = (anonymize: boolean) => {
    setFormData(prev => ({
      ...prev,
      isAnonymized: anonymize,
      displayName: anonymize ? 'Candidate T. (Recipient #BOS-774)' : prev.realName
    }));
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in">
      <div 
        className="bg-white rounded-3xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl border border-stone-200 relative max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between pb-5 border-b border-stone-200">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-teal-800 bg-teal-50 px-2.5 py-0.5 rounded-full border border-teal-200 mb-1">
              <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
              <span>Recipient Privacy & Profile Customizer</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold font-['Outfit',sans-serif] text-slate-900">
              Customize Your Campaign & Privacy Settings
            </h2>
            <p className="text-xs text-stone-500 mt-0.5">
              Designed for privacy-conscious kidney candidates. You control what the public sees.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 border-b border-stone-200 py-3 overflow-x-auto text-xs font-semibold">
          <button
            onClick={() => setActiveTab('privacy')}
            className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'privacy' ? 'bg-teal-700 text-white shadow-xs' : 'text-stone-600 hover:text-stone-900 bg-stone-100'
            }`}
          >
            <Lock className="w-3.5 h-3.5" />
            <span>Privacy Shield</span>
          </button>

          <button
            onClick={() => setActiveTab('identity')}
            className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'identity' ? 'bg-teal-700 text-white shadow-xs' : 'text-stone-600 hover:text-stone-900 bg-stone-100'
            }`}
          >
            <UserCheck className="w-3.5 h-3.5" />
            <span>Identity & Basics</span>
          </button>

          <button
            onClick={() => setActiveTab('clinical')}
            className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'clinical' ? 'bg-teal-700 text-white shadow-xs' : 'text-stone-600 hover:text-stone-900 bg-stone-100'
            }`}
          >
            <Stethoscope className="w-3.5 h-3.5" />
            <span>Treatment & Team</span>
          </button>

          <button
            onClick={() => setActiveTab('story')}
            className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'story' ? 'bg-teal-700 text-white shadow-xs' : 'text-stone-600 hover:text-stone-900 bg-stone-100'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Story & Dreams</span>
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSave} className="flex-1 overflow-y-auto py-5 space-y-6 pr-1 text-xs">
          {/* Tab 1: Privacy Shield Controls */}
          {activeTab === 'privacy' && (
            <div className="space-y-6">
              <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200 space-y-4">
                <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-teal-600" />
                  <span>Choose Your Public Visibility Mode</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div
                    onClick={() => toggleAnonymization(true)}
                    className={`p-4 rounded-xl border-2 transition-all cursor-pointer flex flex-col justify-between ${
                      formData.isAnonymized
                        ? 'border-teal-600 bg-teal-50/50 shadow-xs'
                        : 'border-stone-200 bg-white hover:border-stone-300'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-bold text-slate-900 text-xs flex items-center gap-1.5">
                          <EyeOff className="w-4 h-4 text-teal-700" />
                          <span>Anonymized Shield Mode (Active)</span>
                        </span>
                        {formData.isAnonymized && (
                          <span className="w-2.5 h-2.5 rounded-full bg-teal-600" />
                        )}
                      </div>
                      <p className="text-[11px] text-stone-600 leading-relaxed">
                        Protects your full surname, personal phone, and street address. Displays your pseudonym ("Candidate T.") to visitors. Only approved transplant coordinators receive your legal name.
                      </p>
                    </div>
                    <div className="mt-3 text-[10px] font-mono text-teal-800 bg-teal-100/60 p-1.5 rounded">
                      Public Wordmark: "Candidate T. · Recipient #BOS-774"
                    </div>
                  </div>

                  <div
                    onClick={() => toggleAnonymization(false)}
                    className={`p-4 rounded-xl border-2 transition-all cursor-pointer flex flex-col justify-between ${
                      !formData.isAnonymized
                        ? 'border-teal-600 bg-teal-50/50 shadow-xs'
                        : 'border-stone-200 bg-white hover:border-stone-300'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-bold text-slate-900 text-xs flex items-center gap-1.5">
                          <Eye className="w-4 h-4 text-stone-600" />
                          <span>Full Name Mode ("{formData.realName}")</span>
                        </span>
                        {!formData.isAnonymized && (
                          <span className="w-2.5 h-2.5 rounded-full bg-teal-600" />
                        )}
                      </div>
                      <p className="text-[11px] text-stone-600 leading-relaxed">
                        Displays your real name ("{formData.realName}") across all hero banners and social sharing cards. Best for wide community distribution among friends and family.
                      </p>
                    </div>
                    <div className="mt-3 text-[10px] font-mono text-stone-700 bg-stone-100 p-1.5 rounded">
                      Public Wordmark: "{formData.realName}"
                    </div>
                  </div>
                </div>
              </div>

              {/* DocuSign Completed Copy Recipient Email */}
              <div className="bg-teal-50/60 p-5 rounded-2xl border border-teal-200/80 space-y-3">
                <div className="flex items-center gap-2 text-teal-950 font-bold text-xs sm:text-sm">
                  <Mail className="w-4 h-4 text-teal-700" />
                  <span>DocuSign Executed Copy Recipient Email (To Be Filled In)</span>
                </div>
                <p className="text-[11px] text-teal-900/90 leading-relaxed">
                  Every time a visitor or potential donor reviews and executes the DocuSign NDA, a certified PDF copy and 256-bit audit trail is automatically dispatched to this email address (e.g. your donor advocate, transplant coordinator, or trusted contact):
                </p>
                <input
                  type="email"
                  value={formData.docusignRecipientEmail || ''}
                  onChange={(e) => setFormData({ ...formData, docusignRecipientEmail: e.target.value })}
                  placeholder="e.g. advocate-relay@kidneyseeker-vault.org"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-teal-300 bg-white font-mono text-xs text-stone-800 focus:outline-teal-600"
                />
              </div>

              {/* Burner Relay Email */}
              <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200 space-y-3">
                <div className="flex items-center gap-2 text-slate-900 font-bold">
                  <Mail className="w-4 h-4 text-teal-600" />
                  <span>Burner / Shield Proxy Email</span>
                </div>
                <p className="text-[11px] text-stone-600">
                  Potential donors and visitors never message your personal inbox directly. Messages are filtered through a secure relay address:
                </p>
                <input
                  type="text"
                  value={formData.contactProxyEmail}
                  onChange={(e) => setFormData({ ...formData, contactProxyEmail: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-stone-300 bg-white font-mono text-xs text-stone-800"
                />
              </div>
            </div>
          )}

          {/* Tab 2: Identity & Basics */}
          {activeTab === 'identity' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-stone-700 uppercase tracking-wide mb-1">
                    Real Legal Name (Private)
                  </label>
                  <input
                    type="text"
                    value={formData.realName}
                    onChange={(e) => setFormData({ ...formData, realName: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-stone-300 bg-stone-50/50"
                  />
                </div>

                <div>
                  <label className="block font-bold text-stone-700 uppercase tracking-wide mb-1">
                    Anonymous Pseudonym / Wordmark
                  </label>
                  <input
                    type="text"
                    value={formData.displayName}
                    onChange={(e) => setFormData({ ...formData, displayName: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-stone-300 bg-stone-50/50"
                  />
                </div>

                <div>
                  <label className="block font-bold text-stone-700 uppercase tracking-wide mb-1">
                    Age & Location
                  </label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-stone-300 bg-stone-50/50"
                  />
                </div>

                <div>
                  <label className="block font-bold text-stone-700 uppercase tracking-wide mb-1">
                    Blood Type & Paired Match Note
                  </label>
                  <input
                    type="text"
                    value={formData.bloodType}
                    onChange={(e) => setFormData({ ...formData, bloodType: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-stone-300 bg-stone-50/50"
                  />
                </div>

                <div>
                  <label className="block font-bold text-stone-700 uppercase tracking-wide mb-1">
                    Current GFR Score
                  </label>
                  <input
                    type="text"
                    value={formData.gfrScore}
                    onChange={(e) => setFormData({ ...formData, gfrScore: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-stone-300 bg-stone-50/50"
                  />
                </div>

                <div>
                  <label className="block font-bold text-stone-700 uppercase tracking-wide mb-1">
                    Transplant Hospital
                  </label>
                  <input
                    type="text"
                    value={formData.transplantCenter}
                    onChange={(e) => setFormData({ ...formData, transplantCenter: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-stone-300 bg-stone-50/50"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Tab 3: Treatment & Team */}
          {activeTab === 'clinical' && (
            <div className="space-y-4">
              <div className="bg-stone-50 p-4 rounded-xl border border-stone-200 space-y-3">
                <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wide">Renal Treatment & Medical Details</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-medium text-stone-600 mb-1">Treatment Modality</label>
                    <input
                      type="text"
                      value={formData.currentTreatment.modality}
                      onChange={(e) => setFormData({
                        ...formData,
                        currentTreatment: { ...formData.currentTreatment, modality: e.target.value }
                      })}
                      className="w-full px-3 py-1.5 rounded-lg border border-stone-300 bg-white"
                    />
                  </div>

                  <div>
                    <label className="block font-medium text-stone-600 mb-1">Weekly Schedule</label>
                    <input
                      type="text"
                      value={formData.currentTreatment.schedule}
                      onChange={(e) => setFormData({
                        ...formData,
                        currentTreatment: { ...formData.currentTreatment, schedule: e.target.value }
                      })}
                      className="w-full px-3 py-1.5 rounded-lg border border-stone-300 bg-white"
                    />
                  </div>

                  <div>
                    <label className="block font-medium text-stone-600 mb-1">Fluid Restriction</label>
                    <input
                      type="text"
                      value={formData.currentTreatment.fluidRestriction}
                      onChange={(e) => setFormData({
                        ...formData,
                        currentTreatment: { ...formData.currentTreatment, fluidRestriction: e.target.value }
                      })}
                      className="w-full px-3 py-1.5 rounded-lg border border-stone-300 bg-white"
                    />
                  </div>

                  <div>
                    <label className="block font-medium text-stone-600 mb-1">Supervising Clinic</label>
                    <input
                      type="text"
                      value={formData.currentTreatment.managementClinic}
                      onChange={(e) => setFormData({
                        ...formData,
                        currentTreatment: { ...formData.currentTreatment, managementClinic: e.target.value }
                      })}
                      className="w-full px-3 py-1.5 rounded-lg border border-stone-300 bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-medium text-stone-600 mb-1">Humor & Daily Life Note</label>
                  <input
                    type="text"
                    value={formData.currentTreatment.treatmentHumorNotes}
                    onChange={(e) => setFormData({
                      ...formData,
                      currentTreatment: { ...formData.currentTreatment, treatmentHumorNotes: e.target.value }
                    })}
                    className="w-full px-3 py-1.5 rounded-lg border border-stone-300 bg-white"
                  />
                </div>
              </div>

              {/* Medical Team Names */}
              <div className="bg-stone-50 p-4 rounded-xl border border-stone-200 space-y-3">
                <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wide">Care Team Providers</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-medium text-stone-600 mb-1">Nephrologist</label>
                    <input
                      type="text"
                      value={formData.medicalTeam.nephrologist}
                      onChange={(e) => setFormData({
                        ...formData,
                        medicalTeam: { ...formData.medicalTeam, nephrologist: e.target.value }
                      })}
                      className="w-full px-3 py-1.5 rounded-lg border border-stone-300 bg-white"
                    />
                  </div>

                  <div>
                    <label className="block font-medium text-stone-600 mb-1">Transplant Surgeon</label>
                    <input
                      type="text"
                      value={formData.medicalTeam.transplantSurgeon}
                      onChange={(e) => setFormData({
                        ...formData,
                        medicalTeam: { ...formData.medicalTeam, transplantSurgeon: e.target.value }
                      })}
                      className="w-full px-3 py-1.5 rounded-lg border border-stone-300 bg-white"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tab 4: Story & Dreams */}
          {activeTab === 'story' && (
            <div className="space-y-4">
              <div>
                <label className="block font-bold text-stone-700 uppercase tracking-wide mb-1">
                  Primary Story & Current Life
                </label>
                <textarea
                  rows={4}
                  value={formData.primaryStory}
                  onChange={(e) => setFormData({ ...formData, primaryStory: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-stone-300 bg-stone-50/50 resize-none"
                />
              </div>

              <div>
                <label className="block font-bold text-stone-700 uppercase tracking-wide mb-1">
                  Why Friends & Family Cannot Donate
                </label>
                <textarea
                  rows={3}
                  value={formData.familyExplanation}
                  onChange={(e) => setFormData({ ...formData, familyExplanation: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-stone-300 bg-stone-50/50 resize-none"
                />
              </div>

              <div>
                <label className="block font-bold text-stone-700 uppercase tracking-wide mb-1">
                  Hopes & Dreams for After Transplant (Hawaii, Ben, etc.)
                </label>
                <textarea
                  rows={3}
                  value={formData.hopesAndDreams}
                  onChange={(e) => setFormData({ ...formData, hopesAndDreams: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-stone-300 bg-stone-50/50 resize-none"
                />
              </div>
            </div>
          )}

          {/* Footer Actions */}
          <div className="pt-4 border-t border-stone-200 flex items-center justify-between">
            <span className="text-[11px] text-stone-500">
              {savedAlert ? '✓ Saved successfully!' : 'Changes update your live microsite immediately.'}
            </span>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2.5 rounded-xl border border-stone-300 hover:bg-stone-100 text-stone-700 font-semibold cursor-pointer"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="px-6 py-2.5 bg-teal-700 hover:bg-teal-800 text-white font-semibold rounded-xl shadow-xs transition-colors flex items-center gap-2 cursor-pointer"
              >
                <Save className="w-4 h-4" />
                <span>Save & Apply Settings</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
