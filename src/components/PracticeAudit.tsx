import React, { useState } from 'react';
import { TurnstileWidget } from './TurnstileWidget';
import { CheckCircle2, Calendar, Sparkles, RefreshCw, ArrowRight, ArrowLeft, Send, Lock, Loader2 } from 'lucide-react';

const LEAD_URL = '/api/lead';

const DIAGNOSTIC_URL = '/api/diagnostic';

interface PracticeAuditProps {
  onBookCall: () => void;
}

interface Step {
  title: string;
  body: string;
}

// Total question count
const TOTAL_QUESTIONS = 7;
// Step at which lead capture appears
const LEAD_CAPTURE_STEP = TOTAL_QUESTIONS + 1;

// Fallback template plan if AI is unavailable
const getFallbackPlan = (status: string, pos: string): Step[] => {
  const s = status.toLowerCase();
  const p = pos || 'your platform';

  if (s.includes('cleanup') || s.includes('4 to 12')) {
    return [
      {
        title: 'Historical Transaction Cleanup',
        body: `Categorize and reconcile all ${p} transactions month by month to rebuild accurate records from the ground up.`,
      },
      {
        title: 'Correct Chart of Accounts',
        body: 'Rebuild your chart of accounts to properly separate clinical supplies, payroll, retail, and operating costs.',
      },
      {
        title: 'Tax-Ready File Delivery',
        body: 'Deliver a clean, fully reconciled QuickBooks file with P&L and Balance Sheet ready for your CPA.',
      },
    ];
  }

  if (s.includes('1 to 3') || s.includes('slightly') || s.includes('behind')) {
    return [
      {
        title: 'Reconcile Payouts & Fees',
        body: `Reconcile ${p} batch deposits with merchant processing deductions so net banking activity and gross collections are clearly tracked.`,
      },
      {
        title: 'Clean Chart of Accounts',
        body: 'Separate clinical supply COGS from general operating expenses for clearer service-line margin visibility.',
      },
      {
        title: 'Monthly Close Routine',
        body: 'Reconcile your accounts systematically each month with an organized Balance Sheet and Profit & Loss.',
      },
    ];
  }

  if (s.includes('new') || s.includes('not') || s.includes('set up')) {
    return [
      {
        title: 'QuickBooks Company File Setup',
        body: 'Configure your QBO account with the right settings, fiscal year, and industry classification from day one.',
      },
      {
        title: 'Chart of Accounts Build',
        body: 'Build a chart of accounts designed for aesthetic practices — service revenue, clinical supplies, retail, and payroll all properly separated.',
      },
      {
        title: `Connect ${p} to QuickBooks`,
        body: `Set up your ${p} reconciliation workflow so every deposit matches your bank statement automatically from the start.`,
      },
    ];
  }

  return [
    {
      title: 'Service-Line P&L Report',
      body: `Break down ${p} revenue by treatment category so you can see exactly which services drive your margins.`,
    },
    {
      title: 'Membership Revenue Tracking',
      body: 'Separate recurring membership income from retail and one-time services for cleaner, more accurate financial reporting.',
    },
    {
      title: 'Monthly Financial Review',
      body: 'Deliver a monthly P&L dashboard with your key metrics: revenue, COGS, payroll ratio, and net income — every month without fail.',
    },
  ];
};

export const PracticeAudit: React.FC<PracticeAuditProps> = ({ onBookCall }) => {
  const [step, setStep] = useState<number>(1);
  const [answers, setAnswers] = useState<{
    status: string;
    pos: string;
    packages: string;
    accounts: string;
    revenue: string;
    timeInBusiness: string;
    challenge: string;
  }>({
    status: '',
    pos: '',
    packages: '',
    accounts: '',
    revenue: '',
    timeInBusiness: '',
    challenge: '',
  });

  const [completed, setCompleted] = useState<boolean>(false);
  const [showOtherPos, setShowOtherPos] = useState<boolean>(false);
  const [otherPosValue, setOtherPosValue] = useState<string>('');
  const [showOtherStatus, setShowOtherStatus] = useState<boolean>(false);
  const [otherStatusValue, setOtherStatusValue] = useState<string>('');
  const [showOtherPkg, setShowOtherPkg] = useState<boolean>(false);
  const [otherPkgValue, setOtherPkgValue] = useState<string>('');
  const [showOtherChallenge, setShowOtherChallenge] = useState<boolean>(false);
  const [otherChallengeValue, setOtherChallengeValue] = useState<string>('');

  // Lead capture
  const [leadName, setLeadName] = useState<string>('');
  const [leadEmail, setLeadEmail] = useState<string>('');
  const [turnstileToken, setTurnstileToken] = useState<string>('');
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [submitError, setSubmitError] = useState<string>('');

  // AI diagnostic plan
  const [aiPlan, setAiPlan] = useState<Step[] | null>(null);
  const [loadingPlan, setLoadingPlan] = useState<boolean>(false);

  // ── Navigation ────────────────────────────────────────────
  const goBack = () => {
    if (step === 2) {
      setShowOtherStatus(false);
      setOtherStatusValue('');
      setAnswers((a) => ({ ...a, status: '' }));
      setShowOtherPos(false);
      setStep(1);
    } else if (step === 3) {
      setAnswers((a) => ({ ...a, pos: '' }));
      setShowOtherPos(false);
      setOtherPosValue('');
      setStep(2);
    } else if (step === 4) {
      setShowOtherPkg(false);
      setOtherPkgValue('');
      setAnswers((a) => ({ ...a, packages: '' }));
      setStep(3);
    } else if (step === 5) {
      setAnswers((a) => ({ ...a, accounts: '' }));
      setStep(4);
    } else if (step === 6) {
      setAnswers((a) => ({ ...a, revenue: '' }));
      setStep(5);
    } else if (step === 7) {
      setAnswers((a) => ({ ...a, timeInBusiness: '' }));
      setStep(6);
    } else if (step === LEAD_CAPTURE_STEP) {
      setAnswers((a) => ({ ...a, challenge: '' }));
      setShowOtherChallenge(false);
      setOtherChallengeValue('');
      setStep(7);
    }
  };

  const advance = () => setStep((s) => s + 1);

  const handleSelect = (field: keyof typeof answers, value: string) => {
    setAnswers((a) => ({ ...a, [field]: value }));
    advance();
  };

  const handlePosSelect = (pos: string) => {
    if (pos === 'Other') {
      setShowOtherPos(true);
    } else {
      setShowOtherPos(false);
      handleSelect('pos', pos);
    }
  };

  const handleOtherStatusSubmit = () => {
    const value = otherStatusValue.trim() || 'Other situation (not listed)';
    setShowOtherStatus(false);
    handleSelect('status', value);
  };

  const handleOtherPkgSubmit = () => {
    const value = otherPkgValue.trim() || 'Other revenue model (not listed)';
    setShowOtherPkg(false);
    handleSelect('packages', value);
  };

  const handleOtherPosSubmit = () => {
    const value = otherPosValue.trim() || 'Other';
    setShowOtherPos(false);
    handleSelect('pos', value);
  };

  const handleChallengeSelect = (value: string) => {
    if (value === 'Other') {
      setShowOtherChallenge(true);
    } else {
      setShowOtherChallenge(false);
      handleSelect('challenge', value);
    }
  };

  const handleOtherChallengeSubmit = () => {
    const value = otherChallengeValue.trim() || 'Other challenge';
    setShowOtherChallenge(false);
    handleSelect('challenge', value);
  };

  // ── AI plan fetch ─────────────────────────────────────────
  const fetchAIPlan = async (
    payload: typeof answers,
  ): Promise<Step[] | null> => {
    setLoadingPlan(true);
    try {
      const res = await fetch(DIAGNOSTIC_URL, {
        signal: AbortSignal.timeout(12000),
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const info = await res.json().catch(() => ({})) as { reason?: string };
        console.warn('AI plan unavailable:', res.status, info.reason ?? '');
        throw new Error(`HTTP ${res.status}`);
      }
      const data = await res.json() as { steps?: Step[] };
      if (data.steps && data.steps.length === 3) {
        setAiPlan(data.steps);
        return data.steps;
      }
      throw new Error('Invalid steps');
    } catch {
      return null;
    } finally {
      setLoadingPlan(false);
    }
  };

  // ── Lead submit ───────────────────────────────────────────
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

    const turnstileOn = Boolean((import.meta as unknown as { env?: Record<string, string | undefined> }).env?.VITE_TURNSTILE_SITE_KEY);
    if (turnstileOn && !turnstileToken) {
      setSubmitError('Please wait a moment for the security check to finish, then try again.');
      return;
    }

    setSubmitError('');
    setSubmitting(true);
    setCompleted(true);

    const diagPayload = { ...answers };
    const planPromise = fetchAIPlan(diagPayload);

    fetch(LEAD_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        email,
        pos: answers.pos,
        status: answers.status,
        packages: answers.packages,
        accounts: answers.accounts,
        revenue: answers.revenue,
        timeInBusiness: answers.timeInBusiness,
        challenge: answers.challenge,
        turnstileToken,
      }),
    }).catch(() => {/* silent */});

    await planPromise;
    setSubmitting(false);
  };

  const resetAudit = () => {
    setAnswers({ status: '', pos: '', packages: '', accounts: '', revenue: '', timeInBusiness: '', challenge: '' });
    setStep(1);
    setCompleted(false);
    setShowOtherPos(false);
    setOtherPosValue('');
    setShowOtherChallenge(false);
    setOtherChallengeValue('');
    setLeadName('');
    setLeadEmail('');
    setSubmitError('');
    setSubmitting(false);
    setAiPlan(null);
    setLoadingPlan(false);
  };

  const activePlan = aiPlan ?? getFallbackPlan(answers.status, answers.pos);
  const isQuestionStep = step >= 1 && step <= TOTAL_QUESTIONS;
  const showProgress = !completed && isQuestionStep;

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-b from-[#F8FAFC] to-[#FDFCFA] border-b border-[#E2E8F0]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-md p-8 sm:p-10">

          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E2E8F0] pb-6 mb-8">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D4AF37]/15 text-[#1A2E40] text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                Interactive Diagnostic · MedSpas, Wellness &amp; Clinics
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#1A2E40] mt-2 leading-snug">
                Bookkeeping Health Check for Your Practice
              </h3>
            </div>
            {showProgress && (
              <div className="flex items-center gap-1 text-sm font-semibold text-[#57534E]">
                <span>Question {step} of {TOTAL_QUESTIONS}</span>
                <div className="w-28 h-2.5 bg-[#E2E8F0] rounded-full overflow-hidden ml-2" aria-hidden="true">
                  <div
                    className="h-full bg-[#D4AF37] transition-all duration-300"
                    style={{ width: `${(step / TOTAL_QUESTIONS) * 100}%` }}
                  />
                </div>
              </div>
            )}
          </div>

          {/* ── Questions 1–7 ── */}
          {!completed && isQuestionStep && (
            <div className="space-y-8">

              {/* Q1 — QB Status */}
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
                      { label: 'Other', val: 'other' },
                    ].map((opt) => (
                      <button
                        key={opt.val}
                        onClick={() => (opt.val === 'other' ? setShowOtherStatus(true) : (setShowOtherStatus(false), handleSelect('status', opt.label)))}
                        className="p-5 rounded-xl border border-[#E2E8F0] text-left hover:border-[#D4AF37] hover:bg-[#FAF8F5] transition-all text-base sm:text-lg font-medium text-[#1A2E40] leading-snug cursor-pointer"
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                  {showOtherStatus && (
                    <div className="mt-2 space-y-3">
                      <label htmlFor="audit-other-status" className="block text-sm font-semibold text-[#1A2E40]">
                        Please tell us your situation:
                      </label>
                      <div className="flex gap-3">
                        <input
                          id="audit-other-status" type="text" maxLength={120}
                          value={otherStatusValue}
                          onChange={(e) => setOtherStatusValue(e.target.value)}
                          onKeyDown={(e) => e.key === 'Enter' && handleOtherStatusSubmit()}
                          placeholder="e.g. Using Xero, bookkeeper left, switching systems…"
                          autoFocus
                          className="flex-1 px-4 py-3 rounded-xl border border-[#D4AF37] bg-[#FAF8F5] text-base text-[#1A2E40] placeholder:text-[#57534E]/50 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40"
                        />
                        <button
                          onClick={handleOtherStatusSubmit}
                          className="px-5 py-3 rounded-xl bg-[#1A2E40] text-white text-sm font-bold hover:bg-[#1A2E40]/90 transition-colors cursor-pointer"
                        >
                          Continue
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Q2 — POS Platform */}
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
                          showOtherPos && pos === 'Other'
                            ? 'border-[#D4AF37] bg-[#FAF8F5] text-[#1A2E40]'
                            : 'border-[#E2E8F0] hover:border-[#D4AF37] hover:bg-[#FAF8F5] text-[#1A2E40]'
                        }`}
                      >
                        {pos}
                      </button>
                    ))}
                  </div>
                  {showOtherPos && (
                    <div className="mt-2 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
                      <label htmlFor="audit-other-platform" className="block text-sm font-semibold text-[#1A2E40]">
                        Please enter your platform name:
                      </label>
                      <div className="flex gap-3">
                        <input
                          id="audit-other-platform" type="text"
                          value={otherPosValue}
                          onChange={(e) => setOtherPosValue(e.target.value)}
                          onKeyDown={(e) => e.key === 'Enter' && handleOtherPosSubmit()}
                          placeholder="e.g. Phorest, Fresha, AestheticsPro…"
                          autoFocus
                          className="flex-1 px-4 py-3 rounded-xl border border-[#D4AF37] bg-[#FAF8F5] text-base text-[#1A2E40] placeholder:text-[#57534E]/50 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40"
                        />
                        <button
                          onClick={handleOtherPosSubmit}
                          className="px-5 py-3 rounded-xl bg-[#1A2E40] text-white text-sm font-bold hover:bg-[#1A2E40]/90 transition-colors cursor-pointer"
                        >
                          Continue
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Q3 — Packages */}
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
                      { label: 'Other', val: 'other' },
                    ].map((pkg) => (
                      <button
                        key={pkg.val}
                        onClick={() => (pkg.val === 'other' ? setShowOtherPkg(true) : (setShowOtherPkg(false), handleSelect('packages', pkg.label)))}
                        className="p-5 rounded-xl border border-[#E2E8F0] text-left hover:border-[#D4AF37] hover:bg-[#FAF8F5] transition-all text-base sm:text-lg font-medium text-[#1A2E40] leading-snug cursor-pointer"
                      >
                        {pkg.label}
                      </button>
                    ))}
                  </div>
                  {showOtherPkg && (
                    <div className="mt-2 space-y-3">
                      <label htmlFor="audit-other-packages" className="block text-sm font-semibold text-[#1A2E40]">
                        Please describe how you bring in revenue:
                      </label>
                      <div className="flex gap-3">
                        <input
                          id="audit-other-packages" type="text" maxLength={120}
                          value={otherPkgValue}
                          onChange={(e) => setOtherPkgValue(e.target.value)}
                          onKeyDown={(e) => e.key === 'Enter' && handleOtherPkgSubmit()}
                          placeholder="e.g. Prepaid wallets, gift cards, retail products only…"
                          autoFocus
                          className="flex-1 px-4 py-3 rounded-xl border border-[#D4AF37] bg-[#FAF8F5] text-base text-[#1A2E40] placeholder:text-[#57534E]/50 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40"
                        />
                        <button
                          onClick={handleOtherPkgSubmit}
                          className="px-5 py-3 rounded-xl bg-[#1A2E40] text-white text-sm font-bold hover:bg-[#1A2E40]/90 transition-colors cursor-pointer"
                        >
                          Continue
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Q4 — Accounts */}
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

              {/* Q5 — Monthly Revenue Range (NEW) */}
              {step === 5 && (
                <div className="space-y-5">
                  <h4 className="text-xl sm:text-2xl font-bold text-[#1A2E40]">
                    5. What is your practice's approximate monthly revenue?
                  </h4>
                  <p className="text-sm text-[#57534E]">This helps us recommend the right service tier for your size.</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      'Under $10,000 / month',
                      '$10,000 – $30,000 / month',
                      '$30,000 – $75,000 / month',
                      '$75,000+ / month',
                    ].map((rev) => (
                      <button
                        key={rev}
                        onClick={() => handleSelect('revenue', rev)}
                        className="p-5 rounded-xl border border-[#E2E8F0] text-left hover:border-[#D4AF37] hover:bg-[#FAF8F5] transition-all text-base sm:text-lg font-medium text-[#1A2E40] leading-snug cursor-pointer"
                      >
                        {rev}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Q6 — Time in Business (NEW) */}
              {step === 6 && (
                <div className="space-y-5">
                  <h4 className="text-xl sm:text-2xl font-bold text-[#1A2E40]">
                    6. How long has your practice been open?
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {[
                      'Less than 1 year',
                      '1 – 3 years',
                      '3 – 7 years',
                      '7+ years',
                    ].map((t) => (
                      <button
                        key={t}
                        onClick={() => handleSelect('timeInBusiness', t)}
                        className="p-5 rounded-xl border border-[#E2E8F0] text-center hover:border-[#D4AF37] hover:bg-[#FAF8F5] transition-all text-base font-semibold text-[#1A2E40] leading-snug cursor-pointer"
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Q7 — Biggest Challenge (NEW) */}
              {step === 7 && (
                <div className="space-y-5">
                  <h4 className="text-xl sm:text-2xl font-bold text-[#1A2E40]">
                    7. What is your biggest bookkeeping challenge right now?
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      "I can't tell which services are actually profitable",
                      "Tax season is stressful — my books are never clean in time",
                      "I'm not sure if my payroll and provider costs are too high",
                      "I'm growing fast and the numbers feel out of control",
                      "I have no idea what my real monthly profit is",
                      "Other",
                    ].map((ch) => (
                      <button
                        key={ch}
                        onClick={() => handleChallengeSelect(ch)}
                        className={`p-5 rounded-xl border text-left transition-all text-base font-medium text-[#1A2E40] leading-snug cursor-pointer ${
                          showOtherChallenge && ch === 'Other'
                            ? 'border-[#D4AF37] bg-[#FAF8F5]'
                            : 'border-[#E2E8F0] hover:border-[#D4AF37] hover:bg-[#FAF8F5]'
                        }`}
                      >
                        {ch}
                      </button>
                    ))}
                  </div>
                  {showOtherChallenge && (
                    <div className="mt-2 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
                      <label htmlFor="audit-other-challenge" className="block text-sm font-semibold text-[#1A2E40]">
                        Describe your challenge:
                      </label>
                      <div className="flex gap-3">
                        <input
                          id="audit-other-challenge" type="text"
                          value={otherChallengeValue}
                          onChange={(e) => setOtherChallengeValue(e.target.value)}
                          onKeyDown={(e) => e.key === 'Enter' && handleOtherChallengeSubmit()}
                          placeholder="Tell us what's going on with your books…"
                          autoFocus
                          className="flex-1 px-4 py-3 rounded-xl border border-[#D4AF37] bg-[#FAF8F5] text-base text-[#1A2E40] placeholder:text-[#57534E]/50 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40"
                        />
                        <button
                          onClick={handleOtherChallengeSubmit}
                          className="px-5 py-3 rounded-xl bg-[#1A2E40] text-white text-sm font-bold hover:bg-[#1A2E40]/90 transition-colors cursor-pointer"
                        >
                          Continue
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Back button for questions 2–7 */}
              {step > 1 && (
                <div className="pt-2">
                  <button
                    onClick={goBack}
                    className="inline-flex items-center gap-1.5 text-sm text-[#57534E] hover:text-[#1A2E40] transition-colors cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back
                  </button>
                </div>
              )}
            </div>
          )}

          {/* ── Lead Capture (Step 8) ── */}
          {!completed && step === LEAD_CAPTURE_STEP && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="flex items-center gap-3 p-4 rounded-xl bg-[#1A2E40] text-white">
                <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0" />
                <div>
                  <p className="text-sm font-bold">All {TOTAL_QUESTIONS} questions answered — your plan is ready.</p>
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
                    <label htmlFor="audit-first-name" className="block text-sm font-semibold text-[#1A2E40]">First Name</label>
                    <input
                      id="audit-first-name" autoComplete="given-name" type="text"
                      value={leadName}
                      onChange={(e) => setLeadName(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && handleLeadSubmit()}
                      placeholder="Jane"
                      autoFocus
                      className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] bg-[#FDFCFA] text-base text-[#1A2E40] placeholder:text-[#57534E]/40 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40 focus:border-[#D4AF37] transition-colors"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="audit-email" className="block text-sm font-semibold text-[#1A2E40]">Email Address</label>
                    <input
                      id="audit-email" autoComplete="email" type="email"
                      value={leadEmail}
                      onChange={(e) => setLeadEmail(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && handleLeadSubmit()}
                      placeholder="jane@mypractice.com"
                      className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] bg-[#FDFCFA] text-base text-[#1A2E40] placeholder:text-[#57534E]/40 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40 focus:border-[#D4AF37] transition-colors"
                    />
                  </div>
                </div>

                <TurnstileWidget onToken={setTurnstileToken} />

                {submitError && (
                  <p className="text-sm text-red-500 font-medium">{submitError}</p>
                )}

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
                  <div className="flex items-center gap-4">
                    <button
                      onClick={goBack}
                      className="inline-flex items-center gap-1.5 text-sm text-[#57534E] hover:text-[#1A2E40] transition-colors cursor-pointer"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      Back
                    </button>
                    <p className="flex items-center gap-1.5 text-xs text-[#57534E]">
                      <Lock className="w-3 h-3 text-[#D4AF37]" />
                      Your info is private — never shared or sold.
                    </p>
                  </div>
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
                    Based on your practice profile ({answers.pos}, {answers.status}), here is how Monique Reid Bookkeeping organizes your records:
                  </p>
                </div>
              </div>

              {loadingPlan ? (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="p-4 rounded-xl bg-white border border-[#D4AF37]/40 shadow-sm space-y-3">
                      <div className="flex items-center gap-2">
                        <Loader2 className="w-4 h-4 text-[#D4AF37] animate-spin shrink-0" />
                        <p className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-wider">
                          Analyzing…
                        </p>
                      </div>
                      <div className="space-y-2 animate-pulse">
                        <div className="h-3.5 bg-[#E2E8F0] rounded-full w-4/5" />
                        <div className="h-2.5 bg-[#E2E8F0] rounded-full w-full" />
                        <div className="h-2.5 bg-[#E2E8F0] rounded-full w-5/6" />
                        <div className="h-2.5 bg-[#E2E8F0] rounded-full w-3/4" />
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  {activePlan.map((s, i) => (
                    <div key={i} className="p-4 rounded-xl bg-white border border-[#D4AF37]/40 shadow-sm">
                      <p className="font-bold text-[#D4AF37] uppercase tracking-wider mb-2 text-[10px]">
                        Step {i + 1}
                      </p>
                      <p className="font-bold text-[#1A2E40] text-sm mb-1.5">{s.title}</p>
                      <p className="text-[#57534E] leading-relaxed">{s.body}</p>
                    </div>
                  ))}
                </div>
              )}

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
