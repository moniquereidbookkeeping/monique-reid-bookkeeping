import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { PageView } from '../types';
import { Calendar, Menu, X, ChevronRight, ArrowUpRight, ArrowRight } from 'lucide-react';

interface NavbarProps {
  currentPage: PageView;
  onNavigate: (page: PageView) => void;
  onBookCall: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onBookCall,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { label: string; page: PageView; id: string }[] = [
    { label: 'Home', page: 'home', id: 'nav-home' },
    { label: 'Services', page: 'services', id: 'nav-services' },
    { label: 'About Monique', page: 'about', id: 'nav-about' },
    { label: 'Contact', page: 'contact', id: 'nav-contact' },
  ];

  const handleNavClick = (page: PageView) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      id="site-header"
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FDFCFA]/95 backdrop-blur-md shadow-sm border-b border-[#E2E8F0] py-3'
          : 'bg-[#FDFCFA] border-b border-[#E2E8F0]/70 py-4'
      }`}
    >
      {/* Top micro announcement bar */}
      <div className="bg-[#1A2E40] text-white py-2 px-4 text-xs font-medium border-b border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1.5 sm:gap-4 text-center sm:text-left">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse shrink-0" aria-hidden="true" />
            <span className="text-[#E2E8F0] font-medium">
              Now Welcoming Aesthetic, Wellness &amp; MedSpa Practice Clients
            </span>
          </div>
          <div className="flex items-center gap-6">
            <button
              onClick={() => handleNavClick('contact')}
              className="text-[#D4AF37] hover:underline flex items-center gap-1 font-semibold transition-colors cursor-pointer"
            >
              <span>Book Your 20-Minute Financial Clarity Call</span>
              <ChevronRight className="w-3.5 h-3.5 text-[#D4AF37]" />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 lg:gap-6 xl:gap-8">
          {/* Newly Approved MR Logo */}
          <div className="shrink-0">
            <Logo onClick={() => handleNavClick('home')} />
          </div>

          {/* Desktop Navigation */}
          <nav
            id="desktop-navigation"
            aria-label="Primary navigation"
            className="hidden lg:flex items-center gap-1 xl:gap-2.5 ml-auto"
          >
            {navItems.map((item) => {
              const isActive = currentPage === item.page;
              return (
                <button
                  key={item.page}
                  id={item.id}
                  onClick={() => handleNavClick(item.page)}
                  className={`px-3 py-2 xl:px-3.5 xl:py-2 text-[13.5px] xl:text-[14px] tracking-[0.01em] transition-all duration-200 rounded-lg relative cursor-pointer ${
                    isActive
                      ? 'text-[#1A2E40] font-semibold bg-[#FAF8F5]'
                      : 'text-[#1A2E40]/80 font-medium hover:text-[#1A2E40] hover:bg-[#FAF8F5]/80'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="absolute -bottom-1 left-2.5 right-2.5 h-[2px] bg-[#D4AF37] rounded-full shadow-[0_1px_3px_rgba(212,175,55,0.4)]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              id="header-clarity-call-btn"
              onClick={onBookCall}
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold tracking-wide text-[#1A2E40] bg-gradient-to-r from-[#D4AF37] via-[#E5C765] to-[#D4AF37] hover:from-[#C8A02A] hover:via-[#D4AF37] hover:to-[#C8A02A] active:scale-[0.98] transition-all duration-200 shadow-[0_2px_10px_rgba(212,175,55,0.25)] hover:shadow-[0_4px_16px_rgba(212,175,55,0.38)] border border-[#FFF5DE]/60 group cursor-pointer"
            >
              <span className="w-6 h-6 rounded-lg bg-[#1A2E40]/10 flex items-center justify-center text-[#1A2E40] group-hover:bg-[#1A2E40] group-hover:text-[#D4AF37] transition-colors duration-200">
                <Calendar className="w-3.5 h-3.5" />
              </span>
              <span className="font-bold text-[#1A2E40]">Book a Call</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#1A2E40]/70 group-hover:text-[#1A2E40] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
            </button>
          </div>

          {/* Mobile hamburger menu toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              id="mobile-book-call-quick-btn"
              onClick={onBookCall}
              className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#C8A02A] text-[#1A2E40] text-xs font-bold flex items-center gap-1.5 shadow-sm border border-[#FFF5DE]/40 cursor-pointer"
              aria-label="Book a call on Calendly"
            >
              <Calendar className="w-3.5 h-3.5 text-[#1A2E40]" />
              <span>Book Call</span>
            </button>
            <button
              id="mobile-nav-toggle-btn"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg border border-[#E2E8F0] text-[#1A2E40] hover:text-[#D4AF37] hover:border-[#D4AF37] transition-colors cursor-pointer"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div
            id="mobile-nav-drawer"
            className="lg:hidden mt-4 pt-4 pb-6 border-t border-[#E2E8F0] space-y-2 animate-in fade-in slide-in-from-top-2 duration-200"
          >
            {navItems.map((item) => {
              const isActive = currentPage === item.page;
              return (
                <button
                  key={item.page}
                  id={`mobile-${item.id}`}
                  onClick={() => handleNavClick(item.page)}
                  className={`w-full text-left px-4 py-3 rounded-lg text-base font-medium flex items-center justify-between transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-[#1A2E40] text-[#D4AF37] font-semibold'
                      : 'text-[#1A2E40] hover:bg-[#1A2E40]/5'
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronRight className="w-4 h-4 text-[#D4AF37]" />
                </button>
              );
            })}

            <div className="pt-4 border-t border-[#E2E8F0] px-2">
              <button
                id="mobile-menu-calendly-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onBookCall();
                }}
                className="w-full flex items-center justify-center gap-2.5 py-3.5 px-5 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#E5C765] to-[#D4AF37] hover:from-[#C8A02A] hover:via-[#D4AF37] hover:to-[#C8A02A] text-[#1A2E40] font-bold text-sm shadow-[0_2px_10px_rgba(212,175,55,0.25)] border border-[#FFF5DE]/60 transition-all active:scale-[0.98] group cursor-pointer"
              >
                <span className="w-6 h-6 rounded-lg bg-[#1A2E40]/10 flex items-center justify-center text-[#1A2E40] group-hover:bg-[#1A2E40] group-hover:text-[#D4AF37] transition-colors duration-200">
                  <Calendar className="w-3.5 h-3.5" />
                </span>
                <span>Book 20-Min Clarity Call</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#1A2E40] group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
