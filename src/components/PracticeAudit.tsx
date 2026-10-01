import React, { useState } from 'react';
import { CheckCircle2, Calendar, Sparkles, RefreshCw, ArrowRight, Send, Lock } from 'lucide-react';

const APPS_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbyCB1po9zvFdyjLYeU_6dQ2VEtQn6-mX7qbQ4x06Mf_L0TkbvXnGA8rQ90ErocyANBi/exec';

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
  const [showOtherInput, setShowOtherInput] = useState<boolean>(false);
  const [otherPosValue, setOtherPosValue] = useState<string>('');

  // Step 5 — lead capture
  const [leadName, setLeadName] = useState<string>('');
  const [leadEmail, setLeadEmail] = useState<string>('');
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [submitError, setSubmitError] = useState<string>('');

  const handleSelect = (field: keyof typeof answers, value: string) => {
    const updated = { ...answers, [field]: value };
    setAnswers(updated);
    if (step < 4) {
      setStep(step + 1);
    } else {
      // Go to lead capture step
      setStep(5);
    }
  };

  const handlePosSelect = (pos: string) => {
    if (pos === 'Other') {
      setShowOtherInput(true);
    } else {
      setShowOtherInput(false);
      handleSelect('pos', pos);
    }
  };

  const handleOtherSubmit = () => {
    const value = otherPosValue.trim() || 'Other';
    setShowOtherInput(false);
    handleSelect('pos', value);
  };

  const handleLeadSubmit = async () => {
    const name = leadName.trim();
    const email = leadEmail.trim();

    if (!name || !email) {
      setSubmitError('Please enter your name and email to see your results.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setSubmitError('Please enter a valid email address.');
      return;
    }

    setSubmitError('');
    setSubmitting(true);

    const payload = {
      name,
      email,
      pos: answers.pos,
      status: answers.status,
      packages: answers.packages,
      accounts: answers.accounts,
    };

    try {
      // mode: 'no-cors' — Apps Script doesn't return CORS headers on POST,
      // but the request still reaches the server and data is recorded.
      await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
    } catch {
      // Network errors are silent — don't block the user from seeing results
    }

    setSubmitting(false);
    setCompleted(true);
  };

  const resetAudit = () => {
    setAnswers({ status: '', pos: '', packages: '', accounts: '' });
    setStep(1);
    setCompleted(false);
    setShowOtherInput(false);
    setOtherPosValue('');
    setLeadName('');
    setLeadEmail('');
    setSubmitError('');
    setSubmitting(false);
  };

  // Progress bar: steps 1-4 are questions, step 5 is lead capture
  const progressStep = step <= 4 ? step : 4;
  const showProgress = !completed && step <= 4;

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-b from-[#F8FAFC] to-[#FDFCFA] border-b border-[#E2E8F0]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-md p-8 sm:p-10">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E2E8F0] pb-6 mb-8">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D4AF37]/15 text-[#1A2E40] text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                Interactive Diagnostic
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#1A2E40] mt-2 leading-snug">
                MedSpa &amp; Aesthetic Practice Bookkeeping Health Check
              </h3>
            </div>
            {showProgress && (
              <div className="flex items-center gap-1 text-sm font-semibold text-[#57534E]">
                <span>Question {progressStep} of 4</span>
                <div className="w-28 h-2.5 bg-[#E2E8F0] rounded-full overflow-hidden ml-2" aria-hidden="true">
                  <div
                    className="h-full bg-[#D4AF37] transition-all duration-300"
                    style={{ width: `${(progressStep / 4) * 100}%` }}
                  />
                </div>
              </div>
            )}
          </div>

          {/* ── Questions 1–4 ── */}
          {!completed && step <= 4 && (
            <div className="space-y-8">
              {step === 1 && (
                <div className="space-y-5">
                  <h4 className="text-xl sm:text-2xl font-bold text-[#1A2E40]">
                    1. What is the current status of your QuickBooks accounts?
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { label: 'Books are current, but I need ongoing monthly support', val: 'current' },
                      { label: '1 to 3 months behind on reconciliations', val: 'slightly_behind' },
                      { label: '4 to 12+ months behind (Cleanup needed)', val: 'cleanup_needed' },
                      { label: 'I do not have QuickBooks set up yet', val: 'new_setup' },
                    ].map((opt) => (
                      <button
                        key={opt.val}
                        onClick={() => handleSelect('status', opt.label)}
                        className="p-5 rounded-xl border border-[#E2E8F0] text-left hover:border-[#D4AF37] hover:bg-[#FAF8F5] transition-all text-base sm:text-lg font-medium text-[#1A2E40] leading-snug cursor-pointer"
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-5">
                  <h4 className="text-xl sm:text-2xl font-bold text-[#1A2E40]">
                    2. Which Point-of-Sale or practice-management platform does your clinic use?
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {['Boulevard', 'Vagaro', 'Jane App', 'Mindbody', 'Zenoti', 'Square', 'Stripe', 'Other'].map((pos) => (
                      <button
                        key={pos}
                        onClick={() => handlePosSelect(pos)}
                        className={`p-4 rounded-xl border text-center transition-all text-base font-semibold cursor-pointer ${
                          showOtherInput && pos === 'Other'
                            ? 'border-[#D4AF37] bg-[#FAF8F5] text-[#1A2E40]'
                            : 'border-[#E2E8F0] hover:border-[#D4AF37] hover:bg-[#FAF8F5] text-[#1A2E40]'
                        }`}
                      >
                        {pos}
                      </button>
                    ))}
                  </div>

                  {showOtherInput && (
                    <div className="mt-2 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
                      <label className="block text-sm font-semibold text-[#1A2E40]">
                        Please enter your platform name:
                      </label>
                      <div className="flex gap-3">
                        <input
                          type="text"
                          value={otherPosValue}
                          onChange={(e) => setOtherPosValue(e.target.value)}
                          onKeyDown={(e) => e.key === 'Enter' && handleOtherSubmit()}
                          placeholder="e.g. Phorest, Fresha, AestheticsPro…"
                          autoFocus
                          className="flex-1 px-4 py-3 rounded-xl border border-[#D4AF37] bg-[#FAF8F5] text-base text-[#1A2E40] placeholder:text-[#57534E]/50 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40"
                        />
                        <button
                          onClick={handleOtherSubmit}
                          className="px-5 py-3 rounded-xl bg-[#1A2E40] text-white text-sm font-bold hover:bg-[#1A2E40]/90 transition-colors cursor-pointer"
                        >
                          Continue
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {step === 3 && (
                <div className="space-y-5">
                  <h4 className="text-xl sm:text-2xl font-bold text-[#1A2E40]">
                    3. Do you offer memberships, treatment packages, or patient financing?
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { label: 'Yes, both memberships & packages + Cherry / CareCredit / PatientFi', val: 'all' },
                      { label: 'Yes, multi-session packages only', val: 'packages' },
                      { label: 'Yes, monthly membership dues only', val: 'memberships' },
                      { label: 'Pay-per-treatment or per-visit only', val: 'none' },
                    ].map((pkg) => (
                      <button
                        key={pkg.val}
                        onClick={() => handleSelect('packages', pkg.label)}
                        className="p-5 rounded-xl border border-[#E2E8F0] text-left hover:border-[#D4AF37] hover:bg-[#FAF8F5] transition-all text-base sm:text-lg font-medium text-[#1A2E40] leading-snug cursor-pointer"
                      >
                        {pkg.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 4 && (
                <div className="space-y-5">
                  <h4 className="text-xl sm:text-2xl font-bold text-[#1A2E40]">
                    4. How many bank, card, and financing accounts does your practice use?
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {['1 - 2 Accounts', '3 - 4 Accounts', '5 - 7 Accounts', '8+ Accounts'].map((acc) => (
                      <button
                        key={acc}
                        onClick={() => handleSelect('accounts', acc)}
                        className="p-5 rounded-xl border border-[#E2E8F0] text-center hover:border-[#D4AF37] hover:bg-[#FAF8F5] transition-all text-base font-semibold text-[#1A2E40] cursor-pointer"
                      >
                        {acc}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ── Step 5: Lead Capture ── */}
          {!completed && step === 5 && (
            <div className="space-y-6 animate-in fade-in duration-300">
              {/* Progress complete indicator */}
              <div className="flex items-center gap-3 p-4 rounded-xl bg-[#1A2E40] text-white">
                <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0" />
                <div>
                  <p className="text-sm font-bold">All 4 questions answered — your plan is ready.</p>
                  <p className="text-xs text-white/70 mt-0.5">Enter your details below to see your personalized results.</p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl sm:text-2xl font-bold text-[#1A2E40]">
                  Where should I send your personalized plan?
                </h4>
                <p className="text-sm text-[#57534E]">
                  I'll review your practice profile and follow up with specific guidance — no obligation.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-sm font-semibold text-[#1A2E40]">
                      First Name
                    </label>
                    <input
                      type="text"
                      value={leadName}
                      onChange={(e) => setLeadName(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && handleLeadSubmit()}
                      placeholder="Jane"
                      autoFocus
                      className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] bg-[#FDFCFA] text-base text-[#1A2E40] placeholder:text-[#57534E]/40 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40 focus:border-[#D4AF37] transition-colors"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="block text-sm font-semibold text-[#1A2E40]">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={leadEmail}
                      onChange={(e) => setLeadEmail(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && handleLeadSubmit()}
                      placeholder="jane@mypractice.com"
                      className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] bg-[#FDFCFA] text-base text-[#1A2E40] placeholder:text-[#57534E]/40 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40 focus:border-[#D4AF37] transition-colors"
                    />
                  </div>
                </div>

                {submitError && (
                  <p className="text-sm text-red-500 font-medium">{submitError}</p>
                )}

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
                  <p className="flex items-center gap-1.5 text-xs text-[#57534E]">
                    <Lock className="w-3 h-3 text-[#D4AF37]" />
                    Your info is private — never shared or sold.
                  </p>
                  <button
                    onClick={handleLeadSubmit}
                    disabled={submitting}
                    className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#E5C765] to-[#D4AF37] hover:from-[#C8A02A] hover:via-[#D4AF37] hover:to-[#C8A02A] text-[#1A2E40] font-bold text-sm transition-all shadow-[0_4px_14px_rgba(212,175,55,0.3)] border border-[#FFF5DE]/60 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    {submitting ? 'Sending…' : 'See My Results'}
                    {!submitting && <ArrowRight className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* ── Completed Results ── */}
          {completed && (
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
                <div className="p-4 rounded-xl bg-white border border-[#D4AF37]/40 shadow-sm">
                  <p className="font-bold text-[#D4AF37] uppercase tracking-wider mb-2 text-[10px]">
                    Step 1
                  </p>
                  <p className="font-bold text-[#1A2E40] text-sm mb-1.5">
                    Reconcile Payouts &amp; Fees
                  </p>
                  <p className="text-[#57534E] leading-relaxed">
                    Reconcile {answers.pos} batch deposits with merchant processing deductions so net banking activity and gross collections are clearly tracked.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#D4AF37]/40 shadow-sm">
                  <p className="font-bold text-[#D4AF37] uppercase tracking-wider mb-2 text-[10px]">
                    Step 2
                  </p>
                  <p className="font-bold text-[#1A2E40] text-sm mb-1.5">
                    Clean Chart of Accounts
                  </p>
                  <p className="text-[#57534E] leading-relaxed">
                    Separate clinical supply COGS from general operating expenses for clearer service-line margin visibility.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#D4AF37]/40 shadow-sm">
                  <p className="font-bold text-[#D4AF37] uppercase tracking-wider mb-2 text-[10px]">
                    Step 3
                  </p>
                  <p className="font-bold text-[#1A2E40] text-sm mb-1.5">
                    Monthly Close Routine
                  </p>
                  <p className="text-[#57534E] leading-relaxed">
                    Reconcile your {answers.accounts} systematically each month with an organized Balance Sheet and Profit &amp; Loss.
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
