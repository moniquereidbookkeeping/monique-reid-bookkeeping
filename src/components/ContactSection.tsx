import React from 'react';
import { 
  Mail, 
  ShieldCheck, 
  Clock, 
  Sparkles, 
  Award,
} from 'lucide-react';
import { CalendlyBookingCard } from './CalendlyBookingCard';
import { CONTACT_EMAIL } from '../constants/booking';

interface ContactSectionProps {
  onNavigate?: (page: 'home' | 'services' | 'about' | 'calculator' | 'contact' | 'terms' | 'privacy') => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onNavigate }) => {
  return (
    <section id="contact-section" className="py-12 lg:py-16 bg-[#FDFCFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A2E40]/5 border border-[#1A2E40]/10 text-xs font-bold text-[#1A2E40] uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Direct Practice Consultation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1A2E40] leading-tight">
            Book Your Complimentary 20-Minute Financial Clarity Call
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#4A5568] leading-relaxed font-normal">
            Select a convenient time directly on the calendar below. We'll discuss your practice's current bookkeeping setup, identify immediate areas for cleanup or optimization, and outline a clear path to accurate numbers.
          </p>
        </div>

        {/* Highlight trust badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 max-w-4xl mx-auto">
          <div className="p-3.5 rounded-xl bg-white border border-[#E2E8F0] shadow-xs flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#D4AF37]/15 flex items-center justify-center text-[#D4AF37] shrink-0">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-[#1A2E40]">20 Minutes Private Zoom</p>
              <p className="text-[11px] text-[#4A5568]">Complimentary review, no obligation</p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-white border border-[#E2E8F0] shadow-xs flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#D4AF37]/15 flex items-center justify-center text-[#D4AF37] shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-[#1A2E40]">Client Financial Privacy</p>
              <p className="text-[11px] text-[#4A5568]">Strict confidentiality and data security</p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-white border border-[#E2E8F0] shadow-xs flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#D4AF37]/15 flex items-center justify-center text-[#D4AF37] shrink-0">
              <Award className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-[#1A2E40]">Certified QuickBooks ProAdvisor</p>
              <p className="text-[11px] text-[#4A5568]">Aesthetic &amp; Wellness Specialized</p>
            </div>
          </div>
        </div>

        {/* 2-Column Schedule Card */}
        <div className="mb-12">
          <CalendlyBookingCard
            onOpenPrivacy={() => {
              if (onNavigate) {
                onNavigate('privacy');
              }
            }}
          />
        </div>

        {/* Contact Direct Strip */}
        <div className="max-w-5xl mx-auto rounded-2xl p-6 bg-[#1A2E40] text-white border border-[#D4AF37]/30 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-[#E2E8F0]">Direct Inquiries</p>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-sm sm:text-base font-semibold text-white hover:text-[#D4AF37] transition-colors"
              >
                {CONTACT_EMAIL}
              </a>
            </div>
          </div>

          <div className="text-xs text-[#E2E8F0]/80 text-center sm:text-right">
            <p>Specialized Bookkeeping for MedSpas, Aesthetic Clinics &amp; Wellness Practices Nationwide</p>
            <p className="text-[#D4AF37] font-medium mt-0.5">Response within 1 business day</p>
          </div>
        </div>
      </div>
    </section>
  );
};
