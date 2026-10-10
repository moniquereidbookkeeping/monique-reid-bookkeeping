import React from 'react';
import {
  Mail,
  Phone,
  ShieldCheck,
  Clock,
  Sparkles,
  Award,
} from 'lucide-react';
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_PHONE_TEL } from '../constants/booking';
import { CalendlyBookingCard } from './CalendlyBookingCard';
import { pathFor } from '../router';
import { PageView } from '../types';

interface ContactSectionProps {
  onNavigate?: (page: PageView) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onNavigate }) => {
  return (
    <section id="contact-section" className="py-12 lg:py-16 bg-[#FDFCFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <p className="text-lg text-[#57534E] leading-relaxed font-normal">
            This is a private 20-minute video call on Zoom. Select a convenient time below. I will review your practice's current bookkeeping setup, point out immediate areas for cleanup or optimization, and outline a clear path to accurate numbers.
          </p>
          <p className="mt-3 text-base text-[#57534E]">
            Based in{' '}
            <a href={pathFor('fort-lauderdale')} onClick={(e) => { e.preventDefault(); onNavigate?.('fort-lauderdale'); }}
              className="font-semibold text-[#1A2E40] underline decoration-[#D4AF37] underline-offset-4 hover:text-[#8A6A00]">
              Fort Lauderdale, Florida
            </a>
            , working with practices across{' '}
            <a href={pathFor('south-florida')} onClick={(e) => { e.preventDefault(); onNavigate?.('south-florida'); }}
              className="font-semibold text-[#1A2E40] underline decoration-[#D4AF37] underline-offset-4 hover:text-[#8A6A00]">
              South Florida
            </a>{' '}
            and nationwide.
          </p>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 max-w-4xl mx-auto">
          <div className="p-3.5 rounded-xl bg-white border border-[#E2E8F0] shadow-xs flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#D4AF37]/15 flex items-center justify-center text-[#D4AF37] shrink-0">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <p className="text-sm font-bold text-[#1A2E40]">20-Minute Private Zoom Call</p>
              <p className="text-sm text-[#57534E]">Free call, no obligation</p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-white border border-[#E2E8F0] shadow-xs flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#D4AF37]/15 flex items-center justify-center text-[#D4AF37] shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <p className="text-sm font-bold text-[#1A2E40]">Client Financial Privacy</p>
              <p className="text-sm text-[#57534E]">Your financial information is kept confidential</p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-white border border-[#E2E8F0] shadow-xs flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#D4AF37]/15 flex items-center justify-center text-[#D4AF37] shrink-0">
              <Award className="w-4 h-4" />
            </div>
            <div>
              <p className="text-sm font-bold text-[#1A2E40]">Certified Intuit ProAdvisor</p>
              <p className="text-sm text-[#57534E]">MedSpas, Aesthetic Clinics &amp; Wellness Practices</p>
            </div>
          </div>
        </div>

        {/* Calendly Booking Card */}
        <div className="mb-12">
          <CalendlyBookingCard onOpenPrivacy={() => { if (onNavigate) { onNavigate('privacy'); } }} />
        </div>

        {/* Not ready to book */}
        <p className="max-w-5xl mx-auto mb-6 text-center text-base sm:text-lg text-[#57534E]">
          Not ready to book yet?{' '}
          <a href="/#health-check"
            onClick={(e) => {
              e.preventDefault();
              onNavigate?.('home');
              setTimeout(() => document.getElementById('health-check')?.scrollIntoView({ behavior: 'smooth' }), 200);
            }}
            className="inline-block text-center font-semibold text-[#1A2E40]! underline decoration-[#D4AF37] underline-offset-4 hover:text-[#D4AF37]! cursor-pointer"
          >
            Take the free 7-question Bookkeeping Health Check first
          </a>
          .
        </p>

        {/* Contact Direct Strip */}
        <div className="max-w-5xl mx-auto rounded-2xl p-6 bg-[#1A2E40] text-white border border-[#D4AF37]/30 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] shrink-0" aria-hidden="true">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-[#E2E8F0]">Direct Inquiries</p>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-sm sm:text-base font-semibold text-white hover:text-[#D4AF37] transition-colors whitespace-nowrap"
                >
                  {CONTACT_EMAIL}
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] shrink-0" aria-hidden="true">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-[#E2E8F0]">Phone</p>
                <a
                  href={`tel:${CONTACT_PHONE_TEL}`}
                  className="text-sm sm:text-base font-semibold text-white hover:text-[#D4AF37] transition-colors whitespace-nowrap"
                >
                  {CONTACT_PHONE}
                </a>
              </div>
            </div>
          </div>

          <div className="text-sm text-[#E2E8F0]/80 text-center sm:text-right">
            <p>Bookkeeping for MedSpas, Aesthetic Clinics &amp; Wellness Practices Nationwide</p>
            <p className="text-[#D4AF37] font-medium mt-0.5">Replies within 1–2 business days</p>
          </div>
        </div>
      </div>
    </section>
  );
};
