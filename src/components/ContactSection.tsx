import React from 'react';
import {
  Mail,
  ShieldCheck,
  Clock,
  Sparkles,
  Award,
  Calendar,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';
import { BOOKING_URL, CONTACT_EMAIL } from '../constants/booking';

interface ContactSectionProps {
  onNavigate?: (page: 'home' | 'services' | 'about' | 'calculator' | 'contact' | 'terms' | 'privacy') => void;
}

export const ContactSection: React.FC<ContactSectionProps> = () => {
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
            Select a convenient time on our calendar. We'll discuss your practice's current bookkeeping setup, identify immediate areas for cleanup or optimization, and outline a clear path to accurate numbers.
          </p>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 max-w-4xl mx-auto">
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

        {/* Static Booking Card */}
        <div className="mb-12 max-w-2xl mx-auto">
          <div className="rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-lg">
            {/* Card Header */}
            <div className="bg-[#1A2E40] px-8 py-8 text-center">
              <div className="w-16 h-16 rounded-2xl bg-[#D4AF37]/20 border border-[#D4AF37]/40 flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-[#D4AF37]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mb-2">
                Schedule Your Clarity Call
              </h3>
              <p className="text-sm text-[#E2E8F0]/80 max-w-md mx-auto leading-relaxed">
                Click the button below to open our scheduling calendar and pick a 20-minute slot that works for you.
              </p>
            </div>

            {/* Card Body */}
            <div className="bg-white px-8 py-8 text-center space-y-5">
              <div className="space-y-2">
                <div className="flex items-center justify-center gap-6 text-xs text-[#4A5568] mb-4">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    Free · No credit card
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    Zoom video call
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    Instant confirmation
                  </span>
                </div>

                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#E5C765] to-[#D4AF37] hover:from-[#C8A02A] hover:via-[#D4AF37] hover:to-[#C8A02A] text-[#1A2E40] font-bold text-base transition-all shadow-[0_4px_16px_rgba(212,175,55,0.3)] hover:shadow-[0_6px_22px_rgba(212,175,55,0.45)] border border-[#FFF5DE]/60 group"
                >
                  <Calendar className="w-5 h-5 shrink-0" />
                  <span>Open Scheduling Calendar</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              <p className="text-xs text-[#4A5568] flex items-center justify-center gap-1.5">
                <ExternalLink className="w-3 h-3 text-[#D4AF37]" />
                <span>Opens Calendly in a new tab — free scheduling, instant confirmation email</span>
              </p>

              {/* What to expect */}
              <div className="mt-2 pt-5 border-t border-[#E2E8F0] text-left space-y-2">
                <p className="text-xs font-bold text-[#1A2E40] uppercase tracking-wider mb-3">What We'll Cover in 20 Minutes:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    'Your current bookkeeping setup',
                    'Immediate cleanup opportunities',
                    'Service-line visibility gaps',
                    'Clear path to accurate numbers',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-xs text-[#4A5568]">
                      <span className="w-4 h-4 rounded-full bg-[#D4AF37]/20 flex items-center justify-center shrink-0">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                      </span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
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
