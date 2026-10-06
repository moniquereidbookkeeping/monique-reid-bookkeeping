import React from 'react';
import { Logo } from './Logo';
import { PageView } from '../types';
import { pathFor } from '../router';
import { Calendar, ArrowUp, Mail } from 'lucide-react';
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
              Precise, practice-ready bookkeeping for MedSpas, aesthetic clinics, IV hydration and wellness practices, medical weight-loss practices, and related self-pay healthcare businesses.
            </p>
            <p className="text-sm font-serif italic text-[#D4AF37]">
              Clean Books. Clearer Numbers.
            </p>
          </div>

          {/* Col 2: Services (All 6 Distinct Services) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-widest text-[#D4AF37]">
              Services
            </h4>
            <ul className="space-y-2 text-sm text-[#E2E8F0]/90">
              <li>
                <a href={pathFor('services')} onClick={(e) => { e.preventDefault(); onNavigate('services'); }}
                  className="hover:text-[#D4AF37] transition-colors text-left cursor-pointer">
                  QuickBooks Cleanup &amp; Catch-Up
                </a>
              </li>
              <li>
                <a href={pathFor('services')} onClick={(e) => { e.preventDefault(); onNavigate('services'); }}
                  className="hover:text-[#D4AF37] transition-colors text-left cursor-pointer">
                  Monthly Bookkeeping
                </a>
              </li>
              <li>
                <a href={pathFor('services')} onClick={(e) => { e.preventDefault(); onNavigate('services'); }}
                  className="hover:text-[#D4AF37] transition-colors text-left cursor-pointer">
                  Financial Reporting &amp; KPIs
                </a>
              </li>
              <li>
                <a href={pathFor('services')} onClick={(e) => { e.preventDefault(); onNavigate('services'); }}
                  className="hover:text-[#D4AF37] transition-colors text-left cursor-pointer">
                  Practice-Specific Bookkeeping
                </a>
              </li>
              <li>
                <a href={pathFor('services')} onClick={(e) => { e.preventDefault(); onNavigate('services'); }}
                  className="hover:text-[#D4AF37] transition-colors text-left cursor-pointer">
                  QuickBooks Setup &amp; Chart of Accounts
                </a>
              </li>
              <li>
                <a href={pathFor('services')} onClick={(e) => { e.preventDefault(); onNavigate('services'); }}
                  className="hover:text-[#D4AF37] transition-colors text-left cursor-pointer">
                  Historical Records &amp; Reporting
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Practice Tools */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-widest text-[#D4AF37]">
              Practice Tools
            </h4>
            <ul className="space-y-2 text-sm text-[#E2E8F0]/90">
              <li>
                <a href={pathFor('pricing')} onClick={(e) => { e.preventDefault(); onNavigate('pricing'); }}
                  className="hover:text-[#D4AF37] transition-colors text-left cursor-pointer">
                  Pricing
                </a>
              </li>
              <li>
                <a href={pathFor('dashboard')} onClick={(e) => { e.preventDefault(); onNavigate('dashboard'); }}
                  className="hover:text-[#D4AF37] transition-colors text-left cursor-pointer">
                  Financial Dashboard
                </a>
              </li>
              <li>
                <a href={pathFor('calculator')} onClick={(e) => { e.preventDefault(); onNavigate('calculator'); }}
                  className="hover:text-[#D4AF37] transition-colors text-left cursor-pointer">
                  Profit Calculator
                </a>
              </li>
              <li>
                <a href={pathFor('blog')} onClick={(e) => { e.preventDefault(); onNavigate('blog'); }}
                  className="hover:text-[#D4AF37] transition-colors text-left cursor-pointer">
                  Bookkeeping Blog
                </a>
              </li>
              <li>
                <a href={pathFor('faq')} onClick={(e) => { e.preventDefault(); onNavigate('faq'); }}
                  className="hover:text-[#D4AF37] transition-colors text-left cursor-pointer">
                  Bookkeeping FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Get In Touch */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-widest text-[#D4AF37]">
              GET IN TOUCH
            </h4>
            <ul className="space-y-3 text-sm text-sm text-[#E2E8F0]/90">
              <li>
                <button
                  onClick={onBookCall}
                  className="hover:text-[#D4AF37] transition-colors flex items-center gap-2.5 text-left font-semibold text-white cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>Book Your Free 20-Min Clarity Call</span>
                </button>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="hover:text-[#D4AF37] transition-colors flex items-center gap-2.5 text-[#E2E8F0]/90"
                >
                  <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span className="font-bold text-sm break-all">{CONTACT_EMAIL}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[#E2E8F0]/70 border-t border-white/10 mt-8">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-center sm:text-left">
            <p>© 2026 Monique Reid Bookkeeping • Fort Lauderdale, FL • All rights reserved.</p>
            <span className="hidden sm:inline text-white/30">·</span>
            <div className="flex items-center gap-3">
              <a href={pathFor('terms')} onClick={(e) => { e.preventDefault(); onNavigate('terms'); }}
                className="hover:text-[#D4AF37] transition-colors underline-offset-4 hover:underline cursor-pointer">
                Terms of Service
              </a>
              <span className="text-white/30">·</span>
              <a href={pathFor('privacy')} onClick={(e) => { e.preventDefault(); onNavigate('privacy'); }}
                className="hover:text-[#D4AF37] transition-colors underline-offset-4 hover:underline cursor-pointer">
                Privacy Policy
              </a>
              <span className="text-white/30">·</span>
              <button
                type="button"
                onClick={() => window.dispatchEvent(new Event('mr-open-cookie-settings'))}
                className="hover:text-[#D4AF37] transition-colors underline-offset-4 hover:underline cursor-pointer"
              >
                Cookie Settings
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

