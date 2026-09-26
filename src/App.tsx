/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PageView } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FinancialDashboard } from './components/FinancialDashboard';
import { ServicesSection } from './components/ServicesSection';
import { BuiltForPractices } from './components/BuiltForPractices';
import { PracticeAudit } from './components/PracticeAudit';
import { GetBillForgeSection } from './components/GetBillForgeSection';
import { AboutSection } from './components/AboutSection';
import { FAQSection } from './components/FAQSection';
import { ProfitCalculator } from './components/ProfitCalculator';
import { ContactSection } from './components/ContactSection';
import { TermsPage } from './components/TermsPage';
import { PrivacyPage } from './components/PrivacyPage';
import { PricingSection } from './components/PricingSection';
import { Footer } from './components/Footer';
import { Calendar, ArrowRight, Sparkles } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageView>('home');

  const handleNavigate = (page: PageView) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBookCall = () => {
    setCurrentPage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFCFA] text-[#57534E]">
      {/* Accessible Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#1A2E40] focus:text-[#D4AF37] focus:font-bold focus:rounded-lg focus:shadow-lg focus:ring-2 focus:ring-[#D4AF37]"
      >
        Skip to main content
      </a>

      {/* Sticky Top Header Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onBookCall={handleBookCall}
      />

      {/* Main Page Content Body */}
      <main id="main-content" className="flex-1">
        {currentPage === 'home' && (
          <>
            {/* Hero Section with Approved Monique Reid Portrait in Natural Scene */}
            <Hero
              onBookCall={handleBookCall}
              onExploreServices={() => handleNavigate('services')}
              onViewDashboard={() => {
                const el = document.getElementById('financial-dashboard-section');
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth' });
                } else {
                  handleNavigate('dashboard');
                }
              }}
            />

            {/* Section 2: Core 6-Service Bookkeeping Architecture + Restored Tech & Bottleneck Stack */}
            <ServicesSection onBookCall={handleBookCall} />

            {/* Section 3: Transparent Flat-Rate Pricing Plans */}
            <PricingSection onBookCall={handleBookCall} />

            {/* Section 4: Your Numbers Matter + Live Interactive Financial Dashboard */}
            <FinancialDashboard
              onExploreServices={() => handleNavigate('services')}
              onBookCall={handleBookCall}
            />

            {/* Interactive 60-Second Practice Bookkeeping Health Check */}
            <PracticeAudit onBookCall={handleBookCall} />

            {/* Section 4: Built for Growing Practices (Navy #1A2E40) */}
            <BuiltForPractices onBookCall={handleBookCall} />

            {/* About Monique Reid Preview */}
            <AboutSection onBookCall={handleBookCall} />

            {/* Bookkeeping Frequently Asked Questions */}
            <FAQSection onBookCall={handleBookCall} />

            {/* Final High-Impact CTA Banner */}
            <section className="py-20 bg-[#1A2E40] text-white border-t border-[#D4AF37]/30 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
              
              <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 space-y-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-xs font-bold uppercase tracking-widest text-[#D4AF37] border border-white/10">
                  <Sparkles className="w-3.5 h-3.5" />
                  Let's Get Started
                </span>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white leading-tight">
                  Let's talk about your practice.
                </h2>

                <p className="text-base sm:text-lg text-[#E2E8F0] max-w-2xl mx-auto font-light leading-relaxed">
                  Book a complimentary 20-minute Financial Clarity Call on Calendly and tell me what is happening with your books. I'll outline your options and discuss a clear path to organized financial records.
                </p>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button
                    onClick={handleBookCall}
                    className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#E5C765] to-[#D4AF37] hover:from-[#C8A02A] hover:via-[#D4AF37] hover:to-[#C8A02A] text-[#1A2E40] font-bold text-sm sm:text-base transition-all shadow-[0_4px_16px_rgba(212,175,55,0.3)] hover:shadow-[0_6px_22px_rgba(212,175,55,0.45)] border border-[#FFF5DE]/60 flex items-center justify-center gap-3 group active:scale-[0.99] cursor-pointer"
                  >
                    <span className="w-7 h-7 rounded-lg bg-[#1A2E40]/10 flex items-center justify-center text-[#1A2E40] group-hover:bg-[#1A2E40] group-hover:text-[#D4AF37] transition-colors duration-200 shrink-0">
                      <Calendar className="w-4 h-4" />
                    </span>
                    <span>Book 20-Min Clarity Call on Calendly</span>
                    <ArrowRight className="w-4 h-4 text-[#1A2E40] group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </section>
          </>
        )}

        {currentPage === 'services' && (
          <>
            <div className="bg-[#1A2E40] text-white py-14 border-b border-[#D4AF37]/30">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
                <p className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
                  Focused Support for Growing Practices
                </p>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white">
                  Bookkeeping Built Around Your Practice
                </h1>
                <p className="text-sm sm:text-base text-[#E2E8F0] max-w-2xl mx-auto font-light">
                  Specialized bookkeeping for MedSpas, aesthetic clinics, IV hydration and wellness practices, medical weight-loss practices, and related self-pay healthcare businesses.
                </p>
              </div>
            </div>

            <ServicesSection onBookCall={handleBookCall} />
            <PracticeAudit onBookCall={handleBookCall} />
            <BuiltForPractices onBookCall={handleBookCall} />
          </>
        )}

        {currentPage === 'dashboard' && (
          <>
            <div className="bg-[#1A2E40] text-white py-14 border-b border-[#D4AF37]/30">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
                <p className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
                  Executive Visibility &amp; Analytics
                </p>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white">
                  Interactive Practice Numbers &amp; Benchmarks
                </h1>
                <p className="text-sm sm:text-base text-[#E2E8F0] max-w-2xl mx-auto font-light">
                  Explore how properly categorized aesthetic and wellness books isolate treatment COGS, provider compensation, and net operating surplus.
                </p>
              </div>
            </div>

            <FinancialDashboard
              onExploreServices={() => handleNavigate('services')}
              onBookCall={handleBookCall}
            />
            <ProfitCalculator onBookCall={handleBookCall} />
          </>
        )}

        {currentPage === 'about' && (
          <>
            <div className="bg-[#1A2E40] text-white py-14 border-b border-[#D4AF37]/30">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white">
                  Meet Monique Reid
                </h1>
                <p className="text-sm sm:text-base text-[#E2E8F0] max-w-2xl mx-auto font-light">
                  Specialized bookkeeping for MedSpa, aesthetic clinic, and wellness practice founders nationwide.
                </p>
              </div>
            </div>

            <AboutSection onBookCall={handleBookCall} />
            <BuiltForPractices onBookCall={handleBookCall} />
          </>
        )}

        {currentPage === 'calculator' && (
          <>
            <div className="bg-[#1A2E40] text-white py-14 border-b border-[#D4AF37]/30">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
                <p className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
                  Complimentary Practice Resources
                </p>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white">
                  Treatment Margin &amp; Contribution Calculator
                </h1>
                <p className="text-sm sm:text-base text-[#E2E8F0] max-w-2xl mx-auto font-light">
                  Model unit economics for neurotoxins, dermal fillers, IV drips, and laser sessions with actual provider compensation and financing fees.
                </p>
              </div>
            </div>

            <ProfitCalculator onBookCall={handleBookCall} />
            <PracticeAudit onBookCall={handleBookCall} />
          </>
        )}

        {currentPage === 'contact' && (
          <>
            <div className="bg-[#1A2E40] text-white py-14 border-b border-[#D4AF37]/30">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
                <p className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
                  Direct Practice Consultation
                </p>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white">
                  Schedule Your Financial Clarity Call
                </h1>
              </div>
            </div>

            <ContactSection onNavigate={handleNavigate} />
          </>
        )}

        {currentPage === 'terms' && (
          <TermsPage onNavigate={handleNavigate} onBookCall={handleBookCall} />
        )}

        {currentPage === 'privacy' && (
          <PrivacyPage onNavigate={handleNavigate} onBookCall={handleBookCall} />
        )}
      </main>

      {/* Global Footer (Without obsolete logo modal) */}
      <Footer
        onNavigate={handleNavigate}
        onBookCall={handleBookCall}
      />
    </div>
  );
}
