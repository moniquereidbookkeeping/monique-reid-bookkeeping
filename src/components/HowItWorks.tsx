import React from 'react';
import { Calendar, FileText, CheckCircle2, ArrowRight } from 'lucide-react';

interface HowItWorksProps {
  onBookCall: () => void;
}

const steps = [
  {
    icon: Calendar,
    title: 'Free 20-minute call',
    body: 'We talk through your practice, your software and where your books stand. No pressure.',
  },
  {
    icon: FileText,
    title: 'A clear plan and fixed price',
    body: 'You get a written scope: cleanup if you need it, then a flat monthly plan for your practice.',
  },
  {
    icon: CheckCircle2,
    title: 'Clean books, every month',
    body: 'Reconciled accounts and plain-English reports from a certified QuickBooks ProAdvisor, so you always know where you stand.',
  },
];

export const HowItWorks: React.FC<HowItWorksProps> = ({ onBookCall }) => (
  <section id="how-it-works" className="py-14 lg:py-20 bg-white border-b border-[#E2E8F0]">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <p className="text-sm font-bold uppercase tracking-widest text-[#8A6A00]">How it works</p>
        <h2 className="mt-2 text-3xl sm:text-4xl font-serif font-bold text-[#1A2E40] leading-tight">
          Three simple steps
        </h2>
      </div>
      <ol className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((s, i) => {
          const Icon = s.icon;
          return (
            <li key={s.title} className="relative rounded-2xl border border-[#E2E8F0] bg-[#FDFCFA] p-6">
              <span className="absolute -top-3 left-6 px-2.5 py-0.5 rounded-full bg-[#1A2E40] text-[#D4AF37] text-sm font-bold">
                Step {i + 1}
              </span>
              <Icon className="w-6 h-6 text-[#8A6A00] mt-2" aria-hidden="true" />
              <h3 className="mt-3 text-xl font-serif font-bold text-[#1A2E40]">{s.title}</h3>
              <p className="mt-2 text-base leading-relaxed text-[#4A5568]">{s.body}</p>
            </li>
          );
        })}
      </ol>
      <div className="mt-8 text-center">
        <button
          onClick={onBookCall}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#1A2E40] text-[#D4AF37] font-bold text-base hover:bg-[#243B55] transition-colors cursor-pointer"
        >
          Book Your Free Clarity Call
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  </section>
);
