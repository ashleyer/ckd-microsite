import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, ShieldCheck } from 'lucide-react';
import { faqList } from '../data/storyData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredFaqs = activeCategory === 'all'
    ? faqList
    : faqList.filter(f => f.category === activeCategory);

  return (
    <section id="faq" className="py-16 lg:py-24 bg-stone-50 border-b border-stone-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-100 text-teal-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Clear Answers & Medical Facts</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-['Outfit',sans-serif] text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-stone-600 text-base leading-relaxed">
            Everything you need to know about living kidney donation, costs, recovery, Donor Shield protections, and HIPAA privacy.
          </p>

          {/* Category filter tabs */}
          <div className="mt-6 flex flex-wrap justify-center gap-2 text-xs font-semibold">
            {[
              { id: 'all', label: 'All Questions' },
              { id: 'donation', label: 'Donation Basics' },
              { id: 'costs', label: 'Costs & Donor Shield' },
              { id: 'privacy', label: 'Privacy & HIPAA' },
              { id: 'recovery', label: 'Surgery & Recovery' }
            ].map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-lg border transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-teal-700 border-teal-700 text-white shadow-2xs'
                    : 'bg-white border-stone-200 text-stone-600 hover:text-stone-900 hover:border-stone-300'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion list */}
        <div className="space-y-3">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-2xs transition-all"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer hover:bg-stone-50/50 transition-colors"
                >
                  <span className="font-bold text-slate-900 text-sm sm:text-base leading-snug">
                    {faq.question}
                  </span>
                  <div className="p-1.5 rounded-full bg-stone-100 text-stone-500 shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-stone-600 text-xs sm:text-sm leading-relaxed border-t border-stone-100 pt-4 bg-stone-50/30">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Prompt below FAQ */}
        <div className="mt-10 p-6 rounded-2xl bg-teal-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-teal-300 shrink-0" />
            <div>
              <div className="font-bold text-sm">Have a private question not answered here?</div>
              <div className="text-teal-200">Independent living donor coordinators are available 24/7 with zero obligation.</div>
            </div>
          </div>
          <a
            href="https://www.kidneyregistry.org"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-teal-800 hover:bg-teal-700 text-white font-semibold rounded-lg shrink-0 border border-teal-600/60"
          >
            Visit National Kidney Registry
          </a>
        </div>
      </div>
    </section>
  );
};
