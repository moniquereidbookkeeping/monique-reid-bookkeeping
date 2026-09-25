import React from 'react';
import { Logo } from './Logo';
import { PageView } from '../types';
import { Calendar, ArrowUp, ExternalLink, Mail } from 'lucide-react';
import { CONTACT_EMAIL } from '../constants/booking';

interface FooterProps {
  onNavigate: (page: PageView) => void;
  onBookCall: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onBookCall }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="site-footer" className="bg-[#1A2E40] text-white pt-16 pb-12 border-t border-[#D4AF37]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 pb-12 border-b border-white/10">
          {/* Col 1: Brand & Logo */}
          <div className="lg:col-span-4 space-y-4">
            <Logo variant="light" size="lg" onClick={() => onNavigate('home')} />
            <p className="text-sm text-[#E2E8F0] max-w-sm leading-relaxed mt-2 font-light">
              Specialized bookkeeping for MedSpas, aesthetic clinics, IV hydration and wellness practices, medical weight-loss practices, and related self-pay healthcare businesses.
            </p>
            <p className="text-xs font-serif italic text-[#D4AF37]">
              Clean Books. Clearer Numbers.
            </p>
          </div>

          {/* Col 2: Services (All 6 Distinct Services) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
              Services
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#E2E8F0]/90">
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-[#D4AF37] transition-colors text-left cursor-pointer"
                >
                  QuickBooks Cleanup &amp; Catch-Up
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-[#D4AF37] transition-colors text-left cursor-pointer"
                >
                  Monthly Bookkeeping
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-[#D4AF37] transition-colors text-left cursor-pointer"
                >
                  Financial Reporting &amp; KPIs
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-[#D4AF37] transition-colors text-left cursor-pointer"
                >
                  Aesthetic &amp; Wellness Practice Specialization
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-[#D4AF37] transition-colors text-left cursor-pointer"
                >
                  QuickBooks Setup &amp; Chart of Accounts
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-[#D4AF37] transition-colors text-left cursor-pointer"
                >
                  Historical Financial Records &amp; Reporting
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Practice Tools */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
              Practice Tools
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#E2E8F0]/90">
              <li>
                <button
                  onClick={() => onNavigate('dashboard')}
                  className="hover:text-[#D4AF37] transition-colors text-left cursor-pointer"
                >
                  Financial Dashboard
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('calculator')}
                  className="hover:text-[#D4AF37] transition-colors text-left cursor-pointer"
                >
                  Profit Calculator
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('home');
                    setTimeout(() => {
                      const el = document.getElementById('medspa-bookkeeping-faq');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="hover:text-[#D4AF37] transition-colors text-left cursor-pointer"
                >
                  Bookkeeping FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Get In Touch */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
              GET IN TOUCH
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-[#E2E8F0]/90">
              <li>
                <button
                  onClick={onBookCall}
                  className="hover:text-[#D4AF37] transition-colors flex items-center gap-2.5 text-left font-semibold text-white cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>Schedule 20–Min Clarity Call</span>
                </button>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="hover:text-[#D4AF37] transition-colors flex items-center gap-2.5 break-all text-[#E2E8F0]/90"
                >
                  <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>{CONTACT_EMAIL}</span>
                </a>
              </li>
              <li>
                <a
                  href="https://getbillforge.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <div className="flex items-center gap-2.5 text-white group-hover:text-[#D4AF37] transition-colors">
                    <ExternalLink className="w-4 h-4 text-[#D4AF37] shrink-0" />
                    <span>Shop Our Business Templates</span>
                  </div>
                  <div className="text-[#D4AF37] text-xs mt-0.5">
                    (at GetBillForge.com)
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#E2E8F0]/70 border-t border-white/10 mt-8">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-center sm:text-left">
            <p>© 2026 Monique Reid Bookkeeping • Fort Lauderdale, FL • All rights reserved.</p>
            <span className="hidden sm:inline text-white/30">·</span>
            <div className="flex items-center gap-3">
              <button
                onClick={() => onNavigate('terms')}
                className="hover:text-[#D4AF37] transition-colors underline-offset-4 hover:underline cursor-pointer"
              >
                Terms of Service
              </button>
              <span className="text-white/30">·</span>
              <button
                onClick={() => onNavigate('privacy')}
                className="hover:text-[#D4AF37] transition-colors underline-offset-4 hover:underline cursor-pointer"
              >
                Privacy Policy
              </button>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="font-serif italic text-white/90">
              Clean Books. Clearer Numbers.
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white/10 hover:bg-[#D4AF37] hover:text-[#1A2E40] transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

