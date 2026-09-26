import React, { useState } from 'react';
import { CheckCircle2, Calendar, Sparkles, RefreshCw, ArrowRight } from 'lucide-react';

interface PracticeAuditProps {
  onBookCall: () => void;
}

export const PracticeAudit: React.FC<PracticeAuditProps> = ({ onBookCall }) => {
  const [step, setStep] = useState<number>(1);
  const [answers, setAnswers] = useState<{
    status: string;
    pos: string;
    packages: string;
    accounts: string;
  }>({
    status: '',
    pos: '',
    packages: '',
    accounts: '',
  });

  const [completed, setCompleted] = useState<boolean>(false);

  const handleSelect = (field: keyof typeof answers, value: string) => {
    setAnswers((prev) => ({ ...prev, [field]: value }));
    if (step < 4) {
      setStep(step + 1);
    } else {
      setCompleted(true);
    }
  };

  const resetAudit = () => {
    setAnswers({ status: '', pos: '', packages: '', accounts: '' });
    setStep(1);
    setCompleted(false);
  };

  return (
    <section className="py-14 bg-gradient-to-b from-[#F8FAFC] to-[#FDFCFA] border-b border-[#E2E8F0]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-md p-6 sm:p-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#E2E8F0] pb-5 mb-6">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#D4AF37]/15 text-[#1A2E40] text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                Interactive Diagnostic
              </span>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#1A2E40] mt-1">
                Aesthetic &amp; Wellness Practice Bookkeeping Health Check
              </h3>
            </div>
            {!completed && (
              <div className="flex items-center gap-1 text-xs font-semibold text-[#57534E]">
                <span>Question {step} of 4</span>
                <div className="w-24 h-2 bg-[#E2E8F0] rounded-full overflow-hidden ml-2" aria-hidden="true">
                  <div
                    className="h-full bg-[#D4AF37] transition-all duration-300"
                    style={{ width: `${(step / 4) * 100}%` }}
                  />
                </div>
              </div>
            )}
          </div>

          {!completed ? (
            <div className="space-y-6">
              {step === 1 && (
                <div className="space-y-3">
                  <h4 className="text-base font-bold text-[#1A2E40]">
                    1. What is the current status of your QuickBooks accounts?
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { label: 'Books are current, but I need ongoing monthly support', val: 'current' },
                      { label: '1 to 3 months behind on reconciliations', val: 'slightly_behind' },
                      { label: '4 to 12+ months behind (Cleanup needed)', val: 'cleanup_needed' },
                      { label: 'I do not have QuickBooks set up yet', val: 'new_setup' },
                    ].map((opt) => (
                      <button
                        key={opt.val}
                        onClick={() => handleSelect('status', opt.label)}
                        className="p-4 rounded-xl border border-[#E2E8F0] text-left hover:border-[#D4AF37] hover:bg-[#FAF8F5] transition-all text-xs sm:text-sm font-medium text-[#1A2E40] cursor-pointer"
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-3">
                  <h4 className="text-base font-bold text-[#1A2E40]">
                    2. Which Point-of-Sale or practice-management platform does your clinic use?
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {['Boulevard', 'Vagaro', 'Jane App', 'Mindbody', 'Zenoti', 'Square', 'Stripe', 'Other'].map((pos) => (
                      <button
                        key={pos}
                        onClick={() => handleSelect('pos', pos)}
                        className="p-3.5 rounded-xl border border-[#E2E8F0] text-center hover:border-[#D4AF37] hover:bg-[#FAF8F5] transition-all text-xs font-semibold text-[#1A2E40] cursor-pointer"
                      >
                        {pos}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-3">
                  <h4 className="text-base font-bold text-[#1A2E40]">
                    3. Do you offer memberships, treatment packages, or patient financing?
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { label: 'Yes, both memberships & packages + Cherry / CareCredit / PatientFi', val: 'all' },
                      { label: 'Yes, multi-session packages only', val: 'packages' },
                      { label: 'Yes, monthly membership dues only', val: 'memberships' },
                      { label: 'Pay-per-treatment or per-visit only', val: 'none' },
                    ].map((pkg) => (
                      <button
                        key={pkg.val}
                        onClick={() => handleSelect('packages', pkg.label)}
                        className="p-4 rounded-xl border border-[#E2E8F0] text-left hover:border-[#D4AF37] hover:bg-[#FAF8F5] transition-all text-xs sm:text-sm font-medium text-[#1A2E40] cursor-pointer"
                      >
                        {pkg.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 4 && (
                <div className="space-y-3">
                  <h4 className="text-base font-bold text-[#1A2E40]">
                    4. How many bank, card, and financing accounts does your practice use?
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {['1 - 2 Accounts', '3 - 4 Accounts', '5 - 7 Accounts', '8+ Accounts'].map((acc) => (
                      <button
                        key={acc}
                        onClick={() => handleSelect('accounts', acc)}
                        className="p-3.5 rounded-xl border border-[#E2E8F0] text-center hover:border-[#D4AF37] hover:bg-[#FAF8F5] transition-all text-xs font-semibold text-[#1A2E40] cursor-pointer"
                      >
                        {acc}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            /* Completed Diagnostic Results */
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#D4AF37]/50 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-base font-bold text-[#1A2E40]">
                    Diagnostic Complete: Recommended Plan of Action
                  </h4>
                  <p className="text-xs sm:text-sm text-[#57534E] mt-1">
                    Based on your practice profile ({answers.pos}, {answers.status.toLowerCase()}), here is how Monique Reid Bookkeeping organizes your records:
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-3.5 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0]">
                  <p className="font-bold text-[#1A2E40] uppercase tracking-wider mb-1">
                    1. Reconcile Payouts &amp; Fees
                  </p>
                  <p className="text-[#57534E] leading-relaxed">
                    Reconcile {answers.pos} batch deposits with merchant processing deductions so net banking activity and gross collections are clearly tracked.
                  </p>
                </div>

                <div className="p-3.5 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0]">
                  <p className="font-bold text-[#1A2E40] uppercase tracking-wider mb-1">
                    2. Clean Chart of Accounts
                  </p>
                  <p className="text-[#57534E] leading-relaxed">
                    Separate injectable and clinical supply COGS from general operating expenses for clearer service-line margin visibility.
                  </p>
                </div>

                <div className="p-3.5 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0]">
                  <p className="font-bold text-[#1A2E40] uppercase tracking-wider mb-1">
                    3. Monthly Close Routine
                  </p>
                  <p className="text-[#57534E] leading-relaxed">
                    Reconcile your {answers.accounts} systematically each month with organized Balance Sheet and Profit &amp; Loss reporting.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#E2E8F0]">
                <button
                  onClick={resetAudit}
                  className="flex items-center gap-1.5 text-xs text-[#57534E] hover:text-[#1A2E40] cursor-pointer"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Start over</span>
                </button>

                <button
                  onClick={onBookCall}
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#E5C765] to-[#D4AF37] hover:from-[#C8A02A] hover:via-[#D4AF37] hover:to-[#C8A02A] text-[#1A2E40] font-bold text-xs sm:text-sm transition-all shadow-[0_4px_14px_rgba(212,175,55,0.3)] hover:shadow-[0_6px_20px_rgba(212,175,55,0.45)] border border-[#FFF5DE]/60 flex items-center gap-2.5 active:scale-[0.99] group cursor-pointer"
                >
                  <span className="w-6 h-6 rounded-lg bg-[#1A2E40]/10 flex items-center justify-center text-[#1A2E40] group-hover:bg-[#1A2E40] group-hover:text-[#D4AF37] transition-colors duration-200 shrink-0">
                    <Calendar className="w-3.5 h-3.5" />
                  </span>
                  <span>Review Results With Monique (20-Min Clarity Call)</span>
                  <ArrowRight className="w-4 h-4 text-[#1A2E40] group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
