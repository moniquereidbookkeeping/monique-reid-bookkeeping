import React from 'react';
import { CheckCircle2, Mail, Video, FileText, Sparkles } from 'lucide-react';
import { CONTACT_EMAIL } from '../constants/booking';
import { PageView } from '../types';

interface BookedPageProps {
  onNavigate: (page: PageView) => void;
}

const PREP = [
  'Roughly how much revenue your practice brings in each month',
  'How current your QuickBooks is, or whether you are not using it yet',
  'The platform your practice runs on (Boulevard, Vagaro, Jane App, Mindbody, Zenoti, Square, Stripe or another)',
  'Your biggest question about your numbers right now',
];

export const BookedPage: React.FC<BookedPageProps> = ({ onNavigate }) => (
  <section className="py-14 lg:py-20 bg-[#FDFCFA]">
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="mx-auto w-16 h-16 rounded-full bg-[#D4AF37]/15 flex items-center justify-center text-[#D4AF37] mb-5">
        <CheckCircle2 className="w-9 h-9" />
      </div>
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1A2E40] leading-tight">
        You're booked. Monique looks forward to talking with you.
      </h1>
      <p className="mt-4 text-base sm:text-lg text-[#57534E] leading-relaxed">
        Your free 20-minute Financial Clarity Call is confirmed. No pressure. Just clarity.
      </p>

      <div className="mt-10 grid gap-4 text-left">
        <div className="p-5 rounded-2xl bg-white border border-[#E2E8F0] flex gap-4">
          <Mail className="w-6 h-6 text-[#D4AF37] shrink-0 mt-0.5" />
          <div>
            <h2 className="font-bold text-[#1A2E40]">Check your email</h2>
            <p className="text-sm sm:text-base text-[#57534E] mt-1">
              A confirmation with your calendar invite and Zoom link is on its way. If you don't see it in a few minutes, check your spam or promotions folder. You can reschedule from that same email.
            </p>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-[#E2E8F0] flex gap-4">
          <Video className="w-6 h-6 text-[#D4AF37] shrink-0 mt-0.5" />
          <div>
            <h2 className="font-bold text-[#1A2E40]">What the call covers</h2>
            <p className="text-sm sm:text-base text-[#57534E] mt-1">
              Where your books stand today, what is getting in the way of clear reports, and the best next step for your practice. Everything you share stays confidential.
            </p>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-[#E2E8F0] flex gap-4">
          <FileText className="w-6 h-6 text-[#D4AF37] shrink-0 mt-0.5" />
          <div>
            <h2 className="font-bold text-[#1A2E40]">Nothing to prepare, but it helps to think about</h2>
            <ul className="mt-2 space-y-1.5 text-sm sm:text-base text-[#57534E] list-disc pl-5">
              {PREP.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-3 text-sm text-[#57534E]">
              Please don't email financial statements or logins before the call. What is needed will be covered together on the call.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
        <a href="/services"
          onClick={(e) => { e.preventDefault(); onNavigate('services'); }}
          className="inline-block text-center px-6 py-3 rounded-xl bg-[#1A2E40] text-white! font-bold hover:bg-[#1A2E40]/90 transition-colors cursor-pointer"
        >
          Explore the services
        </a>
        <a href="/#health-check"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('home');
            setTimeout(() => document.getElementById('health-check')?.scrollIntoView({ behavior: 'smooth' }), 200);
          }}
          className="px-6 py-3 rounded-xl border border-[#1A2E40] text-[#1A2E40]! font-bold hover:bg-[#1A2E40]/5 transition-colors cursor-pointer inline-flex items-center justify-center gap-2"
        >
          <Sparkles className="w-4 h-4 text-[#D4AF37]" />
          Take the 7-question Health Check
        </a>
      </div>

      <p className="mt-8 text-sm text-[#57534E]">
        Questions before the call? Email{' '}
        <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-[#1A2E40] underline decoration-[#D4AF37] underline-offset-4">
          {CONTACT_EMAIL}
        </a>
        .
      </p>
    </div>
  </section>
);
