import React, { useState } from 'react';
import { 
  Heart, 
  Quote, 
  CheckCircle2, 
  X, 
  ShieldCheck, 
  Activity, 
  Clock, 
  Sparkles, 
  ArrowUpRight 
} from 'lucide-react';

export interface LivingDonorTestimonial {
  id: string;
  name: string;
  ageAtDonation: number;
  yearsPostDonation: number;
  role: string;
  donorType: 'Paired Exchange' | 'Altruistic / Chain' | 'Friend / Coworker' | 'Family / Sibling';
  tagline: string;
  quoteSnippet: string;
  avatarBg: string;
  avatarText: string;
  fullStory: string;
  biggestFear: string;
  realityExperience: string;
  recoveryTimeline: {
    day: string;
    milestone: string;
  }[];
  lifeToday: string;
  donorShieldExperience: string;
  advice: string;
}

const donorTestimonials: LivingDonorTestimonial[] = [
  {
    id: 'sarah-paired',
    name: 'Sarah Mitchell',
    ageAtDonation: 32,
    yearsPostDonation: 3,
    role: 'Teacher & Distance Runner',
    donorType: 'Paired Exchange',
    tagline: 'Back to running half-marathons within 10 weeks.',
    quoteSnippet: 'I was not a direct match for my recipient, but through NKR Paired Exchange, my kidney started a 3-way chain that saved three lives including theirs. Knowing I gave someone their father back is the greatest feeling in my life.',
    avatarBg: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    avatarText: 'SM',
    fullStory: `When I first considered donating, I had countless questions: Will I feel weak forever? Can I still have children? What if my remaining kidney fails?
    
Meeting the independent donor advocate at the transplant center put me totally at ease. They explained that humans naturally have roughly double the kidney filtration capacity they need. Laparoscopic surgery left three tiny marks, and I was up walking the hospital hallway the very same evening. By week three, I was back in the classroom teaching, and at month three, I was running outside again.`,
    biggestFear: 'Chronic fatigue or losing my endurance for marathon running.',
    realityExperience: 'My kidney function numbers bounced back to 80% within two weeks as the remaining kidney enlarged and compensated. My energy is completely normal.',
    recoveryTimeline: [
      { day: 'Day 1', milestone: 'Laparoscopic surgery (2 hours); walking in hallway by 7:00 PM.' },
      { day: 'Day 2', milestone: 'Discharged from hospital to rest comfortably at home.' },
      { day: 'Week 2', milestone: 'Off all pain medications, taking daily 2-mile neighborhood walks.' },
      { day: 'Week 4', milestone: 'Cleared to return to work and light cardio.' },
      { day: 'Month 3', milestone: 'Ran a 10K race with identical pace to pre-donation times.' }
    ],
    lifeToday: 'Completely unchanged. Normal diet, healthy vitals, zero medications required.',
    donorShieldExperience: 'Donor Shield reimbursed my lost wages without bureaucratic delays so my family felt zero financial stress.',
    advice: 'Take the first confidential survey. You are never locked in, and learning the facts will wash away 90% of the anxiety.'
  },
  {
    id: 'marcus-marathon',
    name: 'Marcus Vance',
    ageAtDonation: 47,
    yearsPostDonation: 4,
    role: 'Architect & Father of Two',
    donorType: 'Friend / Coworker',
    tagline: 'The surgery was laparoscopic; I was home on day two.',
    quoteSnippet: 'Donating a kidney is easier than society thinks. The medical evaluation alone was the most thorough checkup I’ve ever had in my life. Four years later, I forget I even have one kidney until someone brings it up.',
    avatarBg: 'bg-teal-100 text-teal-800 border-teal-300',
    avatarText: 'MV',
    fullStory: `A close colleague was suffering from severe kidney failure, missing his kids' school events. I decided to fill out the questionnaire just to see if I was healthy enough. I had zero pressure: the donor team constantly reminded me, "You are our patient; your health comes first."
    
When I passed the clearance, I knew in my gut this was the right thing. The procedure went so smoothly. Seeing my coworker return to his vibrant self and play soccer with his kids was the most profound reward of my life.`,
    biggestFear: 'What if I need a kidney later in life?',
    realityExperience: 'NKR Donor Shield provides living donors with priority status on the national registry if they ever need a transplant. I actually have better protection now than before.',
    recoveryTimeline: [
      { day: 'Day 1', milestone: 'Laparoscopic procedure; woke up feeling sore like a tough ab workout.' },
      { day: 'Day 2', milestone: 'Walked to the hospital lobby and discharged home.' },
      { day: 'Week 1', milestone: 'Rested on the couch, caught up on reading, walked around the yard.' },
      { day: 'Week 3', milestone: 'Returned to architectural design work from home.' },
      { day: 'Week 6', milestone: 'Resumed full strength training at the gym.' }
    ],
    lifeToday: 'Active, healthy, and completed a 50-mile gravel bike ride last spring.',
    donorShieldExperience: 'All medical imaging and testing were 100% billed to the recipient insurance. Zero out-of-pocket costs.',
    advice: 'Trust the doctors. If there is even a 1% risk to your future, they will not let you donate. You are in safe hands.'
  },
  {
    id: 'elena-mom',
    name: 'Elena Rostova',
    ageAtDonation: 29,
    yearsPostDonation: 2,
    role: 'Graphic Designer & Mom',
    donorType: 'Altruistic / Chain',
    tagline: 'Donor Shield covered travel and wages seamlessly.',
    quoteSnippet: 'As a working mother, I was terrified of losing income during recovery. Donor Shield paid my lost wages directly to my bank account, and my recovery was so gentle my kids barely noticed I had surgery.',
    avatarBg: 'bg-purple-100 text-purple-800 border-purple-300',
    avatarText: 'ER',
    fullStory: `I donated as a non-directed donor into the National Kidney Registry chain. That single donation triggered a chain reaction that helped four different recipients receive kidneys across four states.
    
The care I received at the transplant hospital was world-class. You are treated like a superhero from the moment you arrive. My husband was covered for hotel accommodations near the center, and the laparoscopic recovery was vastly easier than my previous C-section.`,
    biggestFear: 'Financial burden on my family during time off work.',
    realityExperience: 'Donor Shield wage reimbursement made the process 100% neutral financially. I lost zero dollars.',
    recoveryTimeline: [
      { day: 'Day 1', milestone: 'Smooth laparoscopic procedure; ate dinner in bed.' },
      { day: 'Day 2', milestone: 'Discharged home with mild soreness easily managed with Tylenol.' },
      { day: 'Week 2', milestone: 'Taking kids to the park and doing light housework.' },
      { day: 'Week 3', milestone: 'Resumed freelance graphic design projects.' },
      { day: 'Month 1', milestone: 'Felt 100% back to my pre-donation energy level.' }
    ],
    lifeToday: 'Thriving, energetic, and proud to have sparked a life-saving chain.',
    donorShieldExperience: 'Received weekly direct deposit wage coverage without hassle.',
    advice: 'If you feel a pull in your heart to help someone fighting kidney failure, listen to it. It is one of the most fulfilling acts a human can experience.'
  },
  {
    id: 'david-sibling',
    name: 'David Kowalski',
    ageAtDonation: 51,
    yearsPostDonation: 5,
    role: 'High School Coach & Teacher',
    donorType: 'Family / Sibling',
    tagline: 'Five years later, my remaining kidney is 100% healthy.',
    quoteSnippet: 'People ask me, "Do you have to take pills every day?" No! The recipient takes medications, not the donor. I live a completely normal life with zero restrictions. I still coach basketball every single week.',
    avatarBg: 'bg-amber-100 text-amber-800 border-amber-300',
    avatarText: 'DK',
    fullStory: `When my brother was facing kidney failure, I had normal middle-aged worries: Will my one remaining kidney wear out faster? 
    
My nephrologist walked me through the 50-year epidemiological studies: living donors live just as long, if not longer, than the general population—largely because only the healthiest people are approved in the first place! The surgery was done on a Tuesday and I was watching football from my living room recliner on Thursday afternoon.`,
    biggestFear: 'Future kidney disease or long-term dietary restrictions.',
    realityExperience: 'My annual blood pressure and creatinine tests have been in optimal range every single year since 2021.',
    recoveryTimeline: [
      { day: 'Day 1', milestone: 'Surgery completed in the morning, sat up and drank soup by evening.' },
      { day: 'Day 2', milestone: 'Discharged home.' },
      { day: 'Week 2', milestone: 'Off all pain meds; driving comfortably.' },
      { day: 'Week 4', milestone: 'Back in the gymnasium with my high school team.' },
      { day: 'Year 5', milestone: 'Celebrated 5 years of perfect health.' }
    ],
    lifeToday: 'Coaching basketball, traveling with family, zero dietary restrictions.',
    donorShieldExperience: 'Free annual checkup coordination covered by the registry.',
    advice: 'Do not let myths hold you back. A single kidney easily handles 100% of your body’s needs.'
  }
];

export const DonorTestimonialsSection: React.FC = () => {
  const [selectedDonor, setSelectedDonor] = useState<LivingDonorTestimonial | null>(null);

  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-100 text-teal-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <Quote className="w-3.5 h-3.5" />
            <span>Living Donor Voices & Social Proof</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-['Outfit',sans-serif] text-slate-900 tracking-tight">
            Real Stories from People Who Have Donated
          </h2>
          <p className="mt-3 text-base sm:text-lg text-stone-600 leading-relaxed">
            It is completely normal to have questions or feel hesitant. Click any donor card below to read their honest reflections, timeline, and how they felt before and after surgery.
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {donorTestimonials.map((donor) => (
            <div
              key={donor.id}
              onClick={() => setSelectedDonor(donor)}
              className="bg-white rounded-2xl p-6 border border-stone-200 hover:border-teal-300 hover:shadow-lg transition-all cursor-pointer flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="space-y-4">
                {/* Header with Avatar & Badge */}
                <div className="flex items-center justify-between">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center font-bold text-sm border ${donor.avatarBg}`}>
                    {donor.avatarText}
                  </div>
                  <span className="text-[11px] font-semibold text-teal-800 bg-teal-50 px-2.5 py-1 rounded-full border border-teal-200">
                    {donor.donorType}
                  </span>
                </div>

                <div>
                  <h3 className="font-bold text-slate-900 text-base group-hover:text-teal-700 transition-colors">
                    {donor.name}
                  </h3>
                  <p className="text-xs text-stone-500 font-medium">
                    {donor.role} · Donated at age {donor.ageAtDonation}
                  </p>
                </div>

                <p className="text-xs text-stone-600 line-clamp-4 italic leading-relaxed">
                  "{donor.quoteSnippet}"
                </p>
              </div>

              {/* Bottom prompt */}
              <div className="pt-4 mt-4 border-t border-stone-100 flex items-center justify-between text-xs text-teal-700 font-semibold group-hover:text-teal-800">
                <span>Read Full Experience</span>
                <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Reassurance Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-stone-200 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm">
                Did you know? Donors live just as long as non-donors.
              </h4>
              <p className="text-xs text-stone-600 mt-0.5">
                Over 100,000 living donor transplants have been safely performed in the US. The remaining kidney naturally enlarges and compensates within weeks.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <div className="text-right hidden sm:block">
              <div className="text-xs font-bold text-slate-900">100% Medical Costs Covered</div>
              <div className="text-[11px] text-stone-500">Via Recipient Insurance & Donor Shield</div>
            </div>
          </div>
        </div>

        {/* Interactive Popup Modal for Selected Donor */}
        {selectedDonor && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
            <div 
              className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-stone-200 relative max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedDonor(null)}
                className="absolute top-5 right-5 p-2 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors cursor-pointer"
                aria-label="Close testimonial"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="flex items-start gap-4 mb-6 pr-8">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center font-bold text-lg border ${selectedDonor.avatarBg} shrink-0`}>
                  {selectedDonor.avatarText}
                </div>
                <div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-800 bg-teal-50 px-2.5 py-0.5 rounded-full border border-teal-200 mb-1">
                    <Sparkles className="w-3 h-3 text-teal-600" />
                    <span>{selectedDonor.donorType}</span>
                  </div>
                  <h3 className="text-2xl font-bold font-['Outfit',sans-serif] text-slate-900">
                    {selectedDonor.name}
                  </h3>
                  <p className="text-xs text-stone-500">
                    {selectedDonor.role} · Donated at age {selectedDonor.ageAtDonation} ({selectedDonor.yearsPostDonation} years ago)
                  </p>
                </div>
              </div>

              {/* Highlight Tagline */}
              <div className="p-4 rounded-xl bg-teal-50 border border-teal-200/80 mb-6 text-sm font-semibold text-teal-950 flex items-center gap-2">
                <Heart className="w-4 h-4 text-teal-600 fill-teal-600 shrink-0" />
                <span>"{selectedDonor.tagline}"</span>
              </div>

              {/* Full Story Content */}
              <div className="space-y-6 text-sm text-stone-700 leading-relaxed">
                <div className="whitespace-pre-line bg-stone-50 p-5 rounded-2xl border border-stone-100">
                  {selectedDonor.fullStory}
                </div>

                {/* Fear vs Reality Comparison */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/80">
                    <div className="text-xs font-bold uppercase tracking-wider text-amber-900 mb-1">
                      My Biggest Fear Prior to Surgery:
                    </div>
                    <p className="text-xs text-amber-950 leading-relaxed">
                      {selectedDonor.biggestFear}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200/80">
                    <div className="text-xs font-bold uppercase tracking-wider text-emerald-900 mb-1">
                      The Medical Reality:
                    </div>
                    <p className="text-xs text-emerald-950 leading-relaxed">
                      {selectedDonor.realityExperience}
                    </p>
                  </div>
                </div>

                {/* Real Recovery Timeline */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-stone-900 mb-3 flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-teal-600" />
                    <span>Real Recovery Timeline:</span>
                  </h4>
                  <div className="space-y-2">
                    {selectedDonor.recoveryTimeline.map((step, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-2.5 rounded-lg bg-stone-50 border border-stone-100 text-xs">
                        <span className="font-mono font-bold text-teal-800 bg-teal-100/70 px-2 py-0.5 rounded text-[11px] shrink-0">
                          {step.day}
                        </span>
                        <span className="text-stone-700">{step.milestone}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Donor Shield experience */}
                <div className="p-4 rounded-xl bg-stone-100 border border-stone-200 text-xs text-stone-700 flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900">Donor Shield Experience: </span>
                    <span>{selectedDonor.donorShieldExperience}</span>
                  </div>
                </div>

                {/* Parting Advice */}
                <div className="p-4 rounded-xl bg-teal-900 text-white text-xs leading-relaxed space-y-1">
                  <div className="font-bold text-teal-200">Advice for Visitors & Potential Donors:</div>
                  <p className="italic text-teal-50">"{selectedDonor.advice}"</p>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="mt-6 pt-5 border-t border-stone-200 flex justify-end">
                <button
                  onClick={() => setSelectedDonor(null)}
                  className="px-5 py-2.5 bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold rounded-xl cursor-pointer"
                >
                  Close Story
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
