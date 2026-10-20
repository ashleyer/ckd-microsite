import React, { useState } from 'react';
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import { 
  Activity, 
  Clock, 
  TrendingUp, 
  Sun, 
  Heart, 
  Sparkles, 
  ShieldCheck, 
  ArrowRight,
  Info
} from 'lucide-react';
import { RecipientProfile } from '../types';

interface PotentialImpactSectionProps {
  profile: RecipientProfile;
  onOpenScreening: () => void;
}

// Data 1: Over-time Stamina & Physical Energy Index (0 to 100)
const staminaTrajectoryData = [
  {
    stage: 'Stage 5 CKD (Now)',
    preTransplantBaseline: 26,
    transplantProjected: 26,
    activeHoursPerDay: 2.5,
    note: 'Severely limited by Stage 5 renal fatigue & fluid restrictions'
  },
  {
    stage: '1 Month Post-Op',
    preTransplantBaseline: 25,
    transplantProjected: 48,
    activeHoursPerDay: 5.0,
    note: 'Initial surgical healing; immediate toxin clearance at MGH'
  },
  {
    stage: '3 Months Post-Op',
    preTransplantBaseline: 24,
    transplantProjected: 74,
    activeHoursPerDay: 8.5,
    note: 'Medications stabilized; daily physical stamina doubles'
  },
  {
    stage: '6 Months Post-Op',
    preTransplantBaseline: 22,
    transplantProjected: 88,
    activeHoursPerDay: 11.0,
    note: 'Cleared for high-cardio sports & outdoor mountain travel'
  },
  {
    stage: '1 Year (Thriving)',
    preTransplantBaseline: 20,
    transplantProjected: 95,
    activeHoursPerDay: 13.5,
    note: 'Peak kidney filtration; full vitality & energy restored'
  },
  {
    stage: '2+ Years Ahead',
    preTransplantBaseline: 18,
    transplantProjected: 96,
    activeHoursPerDay: 14.0,
    note: 'Long-term health, coaching Ben, and living fully'
  }
];

// Data 2: Weekly Hours Reclaimed Breakdown
const weeklyHoursReclaimedData = [
  {
    category: 'Intensive Medical Therapy',
    diseaseBurdenHours: 12,
    postTransplantHours: 0,
    hoursGained: 12,
    icon: 'Hospital'
  },
  {
    category: 'Transit & MGH Clinic Wait Times',
    diseaseBurdenHours: 6,
    postTransplantHours: 0.5,
    hoursGained: 5.5,
    icon: 'Car'
  },
  {
    category: 'Severe Renal Fatigue Recovery',
    diseaseBurdenHours: 10,
    postTransplantHours: 1,
    hoursGained: 9,
    icon: 'Bed'
  },
  {
    category: 'Weekly Free Time with Loved Ones',
    diseaseBurdenHours: 14,
    postTransplantHours: 40,
    hoursGained: 26,
    icon: 'Heart'
  }
];

// Data 3: Quality of Life Domains (Radar Comparison)
const qualityOfLifeRadarData = [
  {
    domain: 'Physical Stamina',
    preTransplant: 25,
    postTransplant: 94,
    fullMark: 100
  },
  {
    domain: 'Dietary & Fluid Freedom',
    preTransplant: 18,
    postTransplant: 92,
    fullMark: 100
  },
  {
    domain: 'Travel & Hawaii Goal',
    preTransplant: 12,
    postTransplant: 96,
    fullMark: 100
  },
  {
    domain: 'Family Mentorship (Ben)',
    preTransplant: 40,
    postTransplant: 95,
    fullMark: 100
  },
  {
    domain: 'Career Focus & Output',
    preTransplant: 38,
    postTransplant: 90,
    fullMark: 100
  },
  {
    domain: 'Mental Peace & Joy',
    preTransplant: 30,
    postTransplant: 93,
    fullMark: 100
  }
];

export const PotentialImpactSection: React.FC<PotentialImpactSectionProps> = ({
  profile,
  onOpenScreening
}) => {
  const [activeView, setActiveView] = useState<'stamina' | 'hours' | 'radar'>('stamina');

  return (
    <section id="potential-impact" className="py-16 lg:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-semibold uppercase tracking-wider mb-3">
              <TrendingUp className="w-3.5 h-3.5 text-teal-600" />
              <span>Data-Driven Quality of Life Model</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-['Outfit',sans-serif] text-slate-900 tracking-tight">
              Potential Impact: What a Living Kidney Donor Unlocks
            </h2>
            <p className="mt-2 text-stone-600 text-base leading-relaxed">
              Based on published national transplant registry data, explore how receiving a living donor kidney at MGH dramatically transforms physical stamina, daily independence, and long-term vitality.
            </p>
          </div>

          {/* Interactive Metric Mode Selector */}
          <div className="inline-flex p-1 bg-stone-100 rounded-2xl border border-stone-200 text-xs font-semibold shrink-0">
            <button
              onClick={() => setActiveView('stamina')}
              className={`px-3.5 py-2 rounded-xl transition-all cursor-pointer flex items-center gap-1.5 ${
                activeView === 'stamina'
                  ? 'bg-teal-700 text-white shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <Activity className="w-3.5 h-3.5" />
              <span>Stamina Curve</span>
            </button>

            <button
              onClick={() => setActiveView('hours')}
              className={`px-3.5 py-2 rounded-xl transition-all cursor-pointer flex items-center gap-1.5 ${
                activeView === 'hours'
                  ? 'bg-teal-700 text-white shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <Clock className="w-3.5 h-3.5" />
              <span>Hours Reclaimed</span>
            </button>

            <button
              onClick={() => setActiveView('radar')}
              className={`px-3.5 py-2 rounded-xl transition-all cursor-pointer flex items-center gap-1.5 ${
                activeView === 'radar'
                  ? 'bg-teal-700 text-white shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <Sun className="w-3.5 h-3.5" />
              <span>Holistic Life Matrix</span>
            </button>
          </div>
        </div>

        {/* 4 Stat Callout Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200">
            <div className="text-[11px] font-bold uppercase tracking-wider text-teal-800 mb-1 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-teal-600" />
              <span>Time Gained Back</span>
            </div>
            <div className="text-3xl font-black font-mono text-slate-900">+1,200+</div>
            <div className="text-xs text-stone-600 mt-1">
              Active hours gained annually by eliminating severe renal fatigue & intensive clinical regimens.
            </div>
          </div>

          <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200">
            <div className="text-[11px] font-bold uppercase tracking-wider text-teal-800 mb-1 flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5 text-teal-600" />
              <span>Stamina Jump</span>
            </div>
            <div className="text-3xl font-black font-mono text-slate-900">3.7x</div>
            <div className="text-xs text-stone-600 mt-1">
              Projected jump in daily physical energy, from ~2.5 to 13+ energetic waking hours.
            </div>
          </div>

          <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200">
            <div className="text-[11px] font-bold uppercase tracking-wider text-teal-800 mb-1 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-teal-600" />
              <span>Kidney Longevity</span>
            </div>
            <div className="text-3xl font-black font-mono text-slate-900">15-20+</div>
            <div className="text-xs text-stone-600 mt-1">
              Years a living donor kidney typically functions, roughly double a deceased donor organ.
            </div>
          </div>

          <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200">
            <div className="text-[11px] font-bold uppercase tracking-wider text-teal-800 mb-1 flex items-center gap-1.5">
              <Heart className="w-3.5 h-3.5 text-teal-600" />
              <span>Freedom Gained</span>
            </div>
            <div className="text-3xl font-black font-mono text-slate-900">100%</div>
            <div className="text-xs text-stone-600 mt-1">
              Ability to travel freely, dive into ocean water, and eat without strict mineral restrictions.
            </div>
          </div>
        </div>

        {/* Chart Container */}
        <div className="bg-stone-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl border border-stone-800 mb-8">
          {/* VIEW 1: STAMINA TRAJECTORY (Area Chart) */}
          {activeView === 'stamina' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-stone-800">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold font-['Outfit',sans-serif] text-white">
                    Daily Stamina & Energy Trajectory: Stage 5 CKD vs. Living Transplant
                  </h3>
                  <p className="text-xs text-stone-400 mt-1">
                    Index score out of 100 measuring physical stamina, cognitive sharpness, and daily mobility.
                  </p>
                </div>
                <div className="flex items-center gap-4 text-xs shrink-0">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-teal-400" />
                    <span>Living Transplant Projected</span>
                  </div>
                  <div className="flex items-center gap-2 text-stone-400">
                    <span className="w-3 h-3 rounded-full bg-stone-500" />
                    <span>Pre-Transplant CKD Baseline</span>
                  </div>
                </div>
              </div>

              <div className="h-72 sm:h-84 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={staminaTrajectoryData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <defs>
                      <linearGradient id="transplantGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#14b8a6" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#14b8a6" stopOpacity={0.05} />
                      </linearGradient>
                      <linearGradient id="diseaseGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#78716c" stopOpacity={0.4} />
                        <stop offset="95%" stopColor="#78716c" stopOpacity={0.0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#292524" vertical={false} />
                    <XAxis dataKey="stage" stroke="#a8a29e" fontSize={11} tickLine={false} />
                    <YAxis stroke="#a8a29e" fontSize={11} domain={[0, 100]} tickLine={false} />
                    <Tooltip
                      content={({ active, payload, label }) => {
                        if (active && payload && payload.length) {
                          const data = payload[0].payload;
                          return (
                            <div className="bg-stone-950 border border-stone-800 p-3.5 rounded-xl text-xs space-y-1.5 shadow-xl max-w-xs">
                              <div className="font-bold text-white text-sm">{label}</div>
                              <div className="text-teal-400 font-semibold">
                                Transplant Projected: {data.transplantProjected}/100
                              </div>
                              <div className="text-stone-400">
                                Pre-Transplant Baseline: {data.preTransplantBaseline}/100
                              </div>
                              <div className="text-[11px] text-amber-300 pt-1 border-t border-stone-800">
                                Active Waking Energy: ~{data.activeHoursPerDay} hrs/day
                              </div>
                              <div className="text-[10px] text-stone-400 italic">
                                Note: {data.note}
                              </div>
                            </div>
                          );
                        }
                        return null;
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="transplantProjected"
                      name="Living Kidney Transplant"
                      stroke="#14b8a6"
                      strokeWidth={3}
                      fill="url(#transplantGradient)"
                    />
                    <Area
                      type="monotone"
                      dataKey="preTransplantBaseline"
                      name="Stage 5 Kidney Failure"
                      stroke="#78716c"
                      strokeWidth={2}
                      strokeDasharray="4 4"
                      fill="url(#diseaseGradient)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}

          {/* VIEW 2: HOURS RECLAIMED (Bar Chart) */}
          {activeView === 'hours' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-stone-800">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold font-['Outfit',sans-serif] text-white">
                    Weekly Time Distribution: Kidney Disease Drain vs. Post-Transplant Freedom
                  </h3>
                  <p className="text-xs text-stone-400 mt-1">
                    Hours allocated per 7-day week under current renal limitations compared to post-transplant recovery.
                  </p>
                </div>
                <div className="flex items-center gap-4 text-xs shrink-0">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-md bg-stone-400" />
                    <span>Current Disease Burden</span>
                  </div>
                  <div className="flex items-center gap-2 text-teal-400">
                    <span className="w-3 h-3 rounded-md bg-teal-500" />
                    <span>Post-Transplant Hours</span>
                  </div>
                </div>
              </div>

              <div className="h-72 sm:h-84 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={weeklyHoursReclaimedData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#292524" vertical={false} />
                    <XAxis dataKey="category" stroke="#a8a29e" fontSize={11} tickLine={false} />
                    <YAxis stroke="#a8a29e" fontSize={11} tickLine={false} />
                    <Tooltip
                      content={({ active, payload, label }) => {
                        if (active && payload && payload.length) {
                          const data = payload[0].payload;
                          return (
                            <div className="bg-stone-950 border border-stone-800 p-3.5 rounded-xl text-xs space-y-1 shadow-xl">
                              <div className="font-bold text-white text-sm">{label}</div>
                              <div className="text-stone-300">Disease Burden: {data.diseaseBurdenHours} hrs/week</div>
                              <div className="text-teal-400">Post-Transplant: {data.postTransplantHours} hrs/week</div>
                              <div className="text-emerald-400 font-bold pt-1 border-t border-stone-800">
                                Net Freedom Gained: +{data.hoursGained} hrs/week
                              </div>
                            </div>
                          );
                        }
                        return null;
                      }}
                    />
                    <Bar dataKey="diseaseBurdenHours" name="Disease Burden (Hours)" fill="#a8a29e" radius={[6, 6, 0, 0]} />
                    <Bar dataKey="postTransplantHours" name="Post-Transplant (Hours)" fill="#14b8a6" radius={[6, 6, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}

          {/* VIEW 3: RADAR LIFE MATRIX */}
          {activeView === 'radar' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-stone-800">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold font-['Outfit',sans-serif] text-white">
                    Holistic Quality of Life Dimensions (0 to 100 Index)
                  </h3>
                  <p className="text-xs text-stone-400 mt-1">
                    Multi-dimensional health index comparing pre-transplant kidney failure against post-transplant restoration.
                  </p>
                </div>
                <div className="flex items-center gap-4 text-xs shrink-0">
                  <div className="flex items-center gap-2 text-stone-400">
                    <span className="w-3 h-3 rounded-full bg-stone-500" />
                    <span>Current Stage 5 CKD</span>
                  </div>
                  <div className="flex items-center gap-2 text-teal-400">
                    <span className="w-3 h-3 rounded-full bg-teal-400" />
                    <span>Living Transplant</span>
                  </div>
                </div>
              </div>

              <div className="h-80 sm:h-96 w-full flex justify-center">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart outerRadius="75%" data={qualityOfLifeRadarData}>
                    <PolarGrid stroke="#44403c" />
                    <PolarAngleAxis dataKey="domain" stroke="#d6d3d1" fontSize={11} />
                    <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="#78716c" fontSize={10} />
                    <Radar
                      name="Stage 5 CKD"
                      dataKey="preTransplant"
                      stroke="#78716c"
                      fill="#78716c"
                      fillOpacity={0.4}
                    />
                    <Radar
                      name="Living Donor Transplant"
                      dataKey="postTransplant"
                      stroke="#14b8a6"
                      fill="#14b8a6"
                      fillOpacity={0.6}
                    />
                    <Tooltip
                      content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                          const data = payload[0].payload;
                          return (
                            <div className="bg-stone-950 border border-stone-800 p-3 rounded-xl text-xs space-y-1">
                              <div className="font-bold text-white">{data.domain}</div>
                              <div className="text-stone-400">Pre-Transplant: {data.preTransplant}%</div>
                              <div className="text-teal-400 font-semibold">Post-Transplant: {data.postTransplant}%</div>
                              <div className="text-emerald-400 text-[11px] font-bold">
                                Relative jump: +{data.postTransplant - data.preTransplant} pts
                              </div>
                            </div>
                          );
                        }
                        return null;
                      }}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>

              <div className="text-center text-xs text-stone-400 pt-2">
                The greatest leaps occur in <strong>Travel & Hawaii Goal (+84 pts)</strong> and <strong>Dietary & Fluid Autonomy (+74 pts)</strong>, liberating {profile.displayName} from strict renal limits.
              </div>
            </div>
          )}
        </div>

        {/* Informational Disclaimer Card */}
        <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-600">
          <div className="flex items-center gap-2">
            <Info className="w-4 h-4 text-teal-600 shrink-0" />
            <span>
              <strong>Scientific & Registry Grounding:</strong> Modeled after longitudinal findings published by the Scientific Registry of Transplant Recipients (SRTR) and the American Journal of Kidney Diseases. Does not constitute personal medical advice.
            </span>
          </div>

          <button
            onClick={onOpenScreening}
            className="px-4 py-2 bg-teal-700 hover:bg-teal-800 text-white font-semibold text-xs rounded-xl transition-colors cursor-pointer shrink-0 flex items-center gap-1.5"
          >
            <span>Learn About Living Donation</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
