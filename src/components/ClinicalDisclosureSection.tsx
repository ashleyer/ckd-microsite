import React, { useState } from 'react';
import { 
  Stethoscope, 
  Activity, 
  Users, 
  TrendingUp, 
  Clock, 
  Droplet, 
  Heart, 
  ShieldCheck, 
  Edit3, 
  HelpCircle,
  FileText
} from 'lucide-react';
import { RecipientProfile } from '../types';

interface ClinicalDisclosureSectionProps {
  profile: RecipientProfile;
  onOpenEditModal: () => void;
}

export const ClinicalDisclosureSection: React.FC<ClinicalDisclosureSectionProps> = ({
  profile,
  onOpenEditModal
}) => {
  const [activeTab, setActiveTab] = useState<'treatment' | 'team' | 'prognosis'>('treatment');

  return (
    <section id="clinical-disclosure" className="py-16 lg:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Edit Button for Candidate */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-semibold uppercase tracking-wider mb-3">
              <Stethoscope className="w-3.5 h-3.5" />
              <span>Full Medical Disclosure</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-['Outfit',sans-serif] text-slate-900 tracking-tight">
              Clinical Status, Treatment Regimen & Prognosis
            </h2>
            <p className="mt-2 text-stone-600 text-base leading-relaxed">
              Complete transparency for potential donors and advocates, verified through the <strong>{profile.transplantCenter}</strong>.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenEditModal}
              className="px-4 py-2.5 rounded-xl border border-stone-200 hover:border-teal-400 bg-stone-50 hover:bg-stone-100 text-stone-700 text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer shadow-2xs"
            >
              <Edit3 className="w-3.5 h-3.5 text-teal-700" />
              <span>Edit Clinical Details</span>
            </button>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-2 border-b border-stone-200 mb-8 overflow-x-auto pb-1 text-sm font-semibold">
          <button
            onClick={() => setActiveTab('treatment')}
            className={`px-4 py-2.5 rounded-t-xl transition-all flex items-center gap-2 cursor-pointer border-b-2 ${
              activeTab === 'treatment'
                ? 'border-teal-700 text-teal-900 bg-teal-50/50'
                : 'border-transparent text-stone-500 hover:text-stone-900'
            }`}
          >
            <Activity className="w-4 h-4" />
            <span>1. Current Treatment & Clinical Management</span>
          </button>

          <button
            onClick={() => setActiveTab('team')}
            className={`px-4 py-2.5 rounded-t-xl transition-all flex items-center gap-2 cursor-pointer border-b-2 ${
              activeTab === 'team'
                ? 'border-teal-700 text-teal-900 bg-teal-50/50'
                : 'border-transparent text-stone-500 hover:text-stone-900'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>2. MGH Clinical Care Team</span>
          </button>

          <button
            onClick={() => setActiveTab('prognosis')}
            className={`px-4 py-2.5 rounded-t-xl transition-all flex items-center gap-2 cursor-pointer border-b-2 ${
              activeTab === 'prognosis'
                ? 'border-teal-700 text-teal-900 bg-teal-50/50'
                : 'border-transparent text-stone-500 hover:text-stone-900'
            }`}
          >
            <TrendingUp className="w-4 h-4" />
            <span>3. Clinical Prognosis & Outlook</span>
          </button>
        </div>

        {/* Tab 1: Current Treatment */}
        {activeTab === 'treatment' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-6">
              <div className="bg-stone-50 rounded-2xl p-6 sm:p-7 border border-stone-200/90 space-y-5">
                <div className="flex items-center justify-between pb-4 border-b border-stone-200">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-teal-800">Therapy Modality</span>
                    <h3 className="text-xl font-bold text-slate-900">{profile.currentTreatment.modality}</h3>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-semibold">
                    Stage 5 ESRD
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="bg-white p-4 rounded-xl border border-stone-200 space-y-1">
                    <div className="text-stone-400 font-medium flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-teal-600" />
                      <span>Weekly Clinical Regimen</span>
                    </div>
                    <div className="font-bold text-stone-900 text-sm">{profile.currentTreatment.schedule}</div>
                    <p className="text-stone-500 text-[11px]">Strict medical therapy & laboratory monitoring</p>
                  </div>

                  <div className="bg-white p-4 rounded-xl border border-stone-200 space-y-1">
                    <div className="text-stone-400 font-medium flex items-center gap-1.5">
                      <Droplet className="w-3.5 h-3.5 text-teal-600" />
                      <span>Hydration & Fluid Intake</span>
                    </div>
                    <div className="font-bold text-stone-900 text-sm">32 oz / Day</div>
                    <p className="text-stone-500 text-[11px]">{profile.currentTreatment.fluidRestriction}</p>
                  </div>

                  <div className="bg-white p-4 rounded-xl border border-stone-200 space-y-1">
                    <div className="text-stone-400 font-medium flex items-center gap-1.5">
                      <Activity className="w-3.5 h-3.5 text-teal-600" />
                      <span>Clinical Access</span>
                    </div>
                    <div className="font-bold text-stone-900 text-sm">Monitored Vascular Line</div>
                    <p className="text-stone-500 text-[11px]">{profile.currentTreatment.accessType}</p>
                  </div>

                  <div className="bg-white p-4 rounded-xl border border-stone-200 space-y-1">
                    <div className="text-stone-400 font-medium flex items-center gap-1.5">
                      <Stethoscope className="w-3.5 h-3.5 text-teal-600" />
                      <span>Supervising Clinic</span>
                    </div>
                    <div className="font-bold text-stone-900 text-sm truncate">{profile.currentTreatment.managementClinic}</div>
                    <p className="text-stone-500 text-[11px]">Under direct MGH nephrologist supervision</p>
                  </div>
                </div>

                {/* Humor Note on Renal Therapy Reality */}
                <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 text-xs text-amber-950 leading-relaxed">
                  <span className="font-bold">A Dose of Reality & Humor: </span>
                  {profile.currentTreatment.treatmentHumorNotes}
                </div>
              </div>
            </div>

            {/* Right Column: Lab Benchmarks */}
            <div className="lg:col-span-5 space-y-5">
              <div className="bg-stone-900 text-white rounded-2xl p-6 sm:p-7 space-y-5 shadow-lg">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase font-mono tracking-wider text-teal-300">Lab Biomarkers</span>
                  <span className="text-[10px] bg-stone-800 text-stone-300 px-2 py-0.5 rounded font-mono">MGH Confidential Dossier</span>
                </div>

                <div>
                  <div className="text-xs text-stone-400">Estimated Glomerular Filtration Rate (eGFR)</div>
                  <div className="text-4xl font-extrabold font-mono text-amber-400 mt-1">8 mL/min</div>
                  <div className="text-xs text-stone-300 mt-1">
                    Normal baseline is &gt;90 mL/min. At 8 mL/min, living donor kidney transplantation offers the definitive cure.
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-800 space-y-2 text-xs">
                  <div className="flex justify-between py-1 border-b border-stone-800/80">
                    <span className="text-stone-400">Blood Type</span>
                    <span className="font-bold text-white">{profile.bloodType}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-stone-800/80">
                    <span className="text-stone-400">Transplant Center</span>
                    <span className="font-bold text-teal-400">{profile.transplantCenter}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-stone-800/80">
                    <span className="text-stone-400">Surgical Clearance</span>
                    <span className="font-bold text-emerald-400">Approved by MGH Surgery</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-stone-400">Cardiac Workup</span>
                    <span className="font-bold text-emerald-400">Normal (Zero CAD)</span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-teal-50 border border-teal-200 text-xs text-teal-900 leading-relaxed">
                <strong>Why Speed Matters:</strong> Pre-emptive kidney transplantation before severe secondary organ strain dramatically boosts long-term survival, patient vitality, and allograft lifespan.
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Clinical Team */}
        {activeTab === 'team' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-stone-50 rounded-2xl p-6 border border-stone-200">
              <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center font-bold mb-4">
                MD
              </div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-teal-800 mb-1">Lead Nephrologist</div>
              <h4 className="font-bold text-slate-900 text-base">{profile.medicalTeam.nephrologist}</h4>
              <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                Manages progressive renal disease, electrolyte balance, medical therapy, and pre-transplant physiological optimization at MGH.
              </p>
            </div>

            <div className="bg-stone-50 rounded-2xl p-6 border border-stone-200">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center font-bold mb-4">
                SURG
              </div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-blue-800 mb-1">Transplant Surgeon</div>
              <h4 className="font-bold text-slate-900 text-base">{profile.medicalTeam.transplantSurgeon}</h4>
              <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                Oversees surgical vascular planning, graft implantation, and post-operative immunosuppressive protocols at MGH Transplant Center.
              </p>
            </div>

            <div className="bg-stone-50 rounded-2xl p-6 border border-teal-300 bg-teal-50/40">
              <div className="w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center font-bold mb-4">
                ILDA
              </div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-teal-800 mb-1">
                Independent Donor Advocate
              </div>
              <h4 className="font-bold text-slate-900 text-base">{profile.medicalTeam.donorCoordinator}</h4>
              <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                <strong>CRITICAL:</strong> Independent Living Donor Advocates represent the potential donor ONLY. They ensure the donor never feels pressured and keep medical evaluations 100% confidential.
              </p>
            </div>

            <div className="bg-stone-50 rounded-2xl p-6 border border-stone-200">
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-800 flex items-center justify-center font-bold mb-4">
                SW
              </div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-purple-800 mb-1">Social Worker & Shield</div>
              <h4 className="font-bold text-slate-900 text-base">{profile.medicalTeam.socialWorker}</h4>
              <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                Facilitates Donor Shield lost wage filings, travel booking, psychosocial support, and lodging reimbursements.
              </p>
            </div>
          </div>
        )}

        {/* Tab 3: Prognosis */}
        {activeTab === 'prognosis' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-stone-50 rounded-2xl p-7 border border-stone-200 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
                  !
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">Stage 5 Renal Failure vs. Living Kidney Transplant</h3>
                  <p className="text-xs text-stone-500">Why speed and a living donor at MGH are critical</p>
                </div>
              </div>

              <div className="space-y-3 text-xs leading-relaxed text-stone-700">
                <div className="p-3.5 rounded-xl bg-white border border-stone-200">
                  <strong className="text-slate-900 block mb-1">Advanced Kidney Failure Toll:</strong>
                  {profile.prognosis.renalFailureNote}
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-stone-200">
                  <strong className="text-slate-900 block mb-1">Living Donor Longevity:</strong>
                  {profile.prognosis.transplantSuccessNote}
                </div>

                <div className="p-3.5 rounded-xl bg-teal-50 border border-teal-200 text-teal-950">
                  <strong className="block mb-1 font-bold">Clinical Fitness:</strong>
                  {profile.prognosis.clinicalOutlook}
                </div>
              </div>
            </div>

            <div className="bg-stone-50 rounded-2xl p-7 border border-stone-200 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center font-bold">
                    <Heart className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">Independent Donor Protections</h3>
                    <p className="text-xs text-stone-500">How living donors are safeguarded for life</p>
                  </div>
                </div>

                <div className="space-y-2.5 text-xs text-stone-600">
                  <div className="flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span><strong>Lost Wages & Travel:</strong> $0 cost to the donor under the Donor Shield program.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span><strong>Autonomous Advocates:</strong> The MGH donor medical team works exclusively for the donor, never the recipient.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span><strong>Prioritization Safeguard:</strong> In the extraordinarily rare event a living donor ever needs a kidney, they receive top national UNOS priority.</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-stone-200 mt-6 text-xs text-stone-500 font-serif italic">
                "Donating a kidney is safe, voluntary, and the most profound gift one human being can grant to another."
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
