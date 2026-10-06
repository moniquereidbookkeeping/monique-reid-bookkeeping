import React, { useState, useEffect, useRef } from 'react';
import { 
  DollarSign, 
  TrendingUp, 
  PieChart, 
  Percent, 
  AlertCircle, 
  CheckCircle, 
  Sliders, 
  ArrowUpRight, 
  Sparkles, 
  Building2, 
  Calendar,
  HelpCircle,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Info,
  Layers,
  Activity,
  ArrowRight,
  RotateCcw
} from 'lucide-react';

interface PracticeScenario {
  id: string;
  name: string;
  stage: string;
  monthlyRevenue: number;
  injectables: number;
  laser: number;
  skincare: number;
  memberships: number;
  cogsPercent: number;
  providerPayPercent: number;
  opexPercent: number;
}

const scenarios: PracticeScenario[] = [
  {
    id: 'boutique',
    name: 'Boutique Aesthetic Practice',
    stage: '1–2 injectors',
    monthlyRevenue: 48000,
    injectables: 24000,
    laser: 9600,
    skincare: 7200,
    memberships: 7200,
    cogsPercent: 18,
    providerPayPercent: 30,
    opexPercent: 33,
  },
  {
    id: 'established',
    name: 'Growing Multi-Provider MedSpa',
    stage: '3–5 providers plus estheticians',
    monthlyRevenue: 92500,
    injectables: 41625,
    laser: 23125,
    skincare: 13875,
    memberships: 13875,
    cogsPercent: 17,
    providerPayPercent: 32,
    opexPercent: 33,
  },
  {
    id: 'expansion',
    name: 'High-Volume, Multi-Location Practice',
    stage: 'Full-service medical aesthetics',
    monthlyRevenue: 175000,
    injectables: 73500,
    laser: 49000,
    skincare: 26250,
    memberships: 26250,
    cogsPercent: 16,
    providerPayPercent: 31,
    opexPercent: 31,
  },
];

type MetricKey = 'revenue' | 'cogs' | 'providerPay' | 'opex' | 'surplus';
type ServiceKey = 'injectables' | 'laser' | 'memberships' | 'skincare';

interface MetricExplanation {
  title: string;
  plainEnglish: string;
  benchmark: string;
  commonTrap: string;
  solution: string;
}

interface ExplanationInput {
  totalRev: number;
  cogsAmount: number;
  providerPayAmount: number;
  opexAmount: number;
  surplusAmount: number;
  cogsPercent: number;
  providerPayPercent: number;
  opexPercent: number;
  surplusPercent: number;
}

const money = (val: number) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(val);

const buildExplanations = (v: ExplanationInput): Record<MetricKey, MetricExplanation> => ({
  revenue: {
    title: 'Gross Collections',
    plainEnglish:
      'Everything the practice collected from patients in the period, including card payments and patient financing, before processing fees are taken out. It is not the same as what you billed, and it is not the same as revenue earned for treatments already delivered.',
    benchmark: `${money(v.totalRev)} in this example.`,
    commonTrap:
      'Billings, collections and earned revenue are often treated as the same number. They differ when there are financing fees, prepaid packages or gift cards, and mixing them up makes reports unreliable.',
    solution:
      'Your booking and payment software is reconciled to your bank deposits, so gross collections and processing fees each show up on their own line.',
  },
  cogs: {
    title: 'Treatment COGS (Direct Clinical Supplies)',
    plainEnglish:
      'The direct cost of what is used in treatments: neurotoxin, filler and consumable supplies. This is separate from rent, software and other overhead.',
    benchmark: `${v.cogsPercent}% of collections (${money(v.cogsAmount)}) in this example.`,
    commonTrap:
      'Expensing every product order the day it is paid makes a month with a large order look unprofitable and the next month look unusually strong.',
    solution:
      'Separate accounts for product on hand and product used in treatments keep costs matched to the period in which they were used, based on the records available.',
  },
  providerPay: {
    title: 'Provider Compensation',
    plainEnglish:
      'What the practice pays the people who perform treatments, such as injectors and aestheticians, whether hourly, by commission or by salary. Front-desk and administrative pay are tracked separately where records allow.',
    benchmark: `${v.providerPayPercent}% of collections (${money(v.providerPayAmount)}) in this example.`,
    commonTrap:
      'Commissions calculated on billed charges, or on packages not yet delivered, can pay out more than the practice has actually collected.',
    solution:
      'Collections are organized to line up with your compensation plan, so provider pay is calculated from the same numbers as your reports. Worker classification and payroll rules are for the practice and its payroll or legal advisors to decide.',
  },
  opex: {
    title: 'Operating Expenses & Overhead',
    plainEnglish:
      'The routine costs of running the clinic: rent, utilities, insurance, marketing, software, front-desk and administrative staff, and merchant processing fees. Loan principal payments and equipment purchases are not included.',
    benchmark: `${v.opexPercent}% of collections (${money(v.opexAmount)}) in this example.`,
    commonTrap:
      'Counting loan principal, owner draws or equipment payments as operating expenses makes the practice look less profitable than it is.',
    solution:
      'A clear chart of accounts keeps day-to-day overhead apart from loans and owner activity, so the Profit & Loss reflects how the practice is actually operating.',
  },
  surplus: {
    title: 'Operating Surplus',
    plainEnglish: `What is left after the three expense groups in this example: ${money(v.totalRev)} collected, minus ${money(v.cogsAmount)} treatment COGS, ${money(v.providerPayAmount)} provider compensation and ${money(v.opexAmount)} operating expenses, leaves ${money(v.surplusAmount)}.`,
    benchmark: `${v.surplusPercent}% of collections (${money(v.surplusAmount)}) in this example.`,
    commonTrap:
      'Operating surplus is not net profit and it is not cash available to the owner. Taxes, loan payments, equipment, cash reserves and expenses not shown here all come out of it.',
    solution:
      'Reconciled monthly Profit & Loss and Balance Sheet reports show both how the practice performed and what it owes.',
  },
});

const serviceInsights: Record<ServiceKey, { name: string; margin: string; explanation: string }> = {
  injectables: {
    name: 'Injectables (Neurotoxins & Dermal Fillers)',
    margin: 'Margin by service',
    explanation:
      'To see the true margin on injectables, the cost of product and disposables has to be matched to the revenue those treatments produced. That takes consistent cost tracking and reliable inventory records.',
  },
  laser: {
    name: 'Laser, RF Microneedling & Body Contouring',
    margin: 'Margin by service',
    explanation:
      'For energy-based treatments, margin depends on disposable tips, topical products and direct provider cost compared with treatment revenue. Equipment financing and lease payments are recorded separately.',
  },
  memberships: {
    name: 'Membership Revenue & Recurring Packages',
    margin: 'Timing of cash vs. revenue',
    explanation:
      'Memberships and packages are often paid before treatments are delivered. Revenue and margin are measured by matching the cost of services delivered to the portion of the fee earned in that period. Ask your CPA how this applies to your tax method.',
  },
  skincare: {
    name: 'Medical-Grade Skincare Retail',
    margin: 'Retail margin',
    explanation:
      'Retail margin comes from the wholesale cost of products sold, tracked apart from back-bar supplies used in treatments. Cost should follow the practice’s accounting method rather than an assumed markup.',
  },
};

// Smooth animated counter — counts from previous value to target on change
function useAnimatedValue(target: number, duration = 550): number {
  const [display, setDisplay] = useState(target);
  const prevRef = useRef(target);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const start = prevRef.current;
    const end = target;
    if (start === end) return;

    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(start + (end - start) * eased));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        prevRef.current = end;
      }
    };

    if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [target, duration]);

  return display;
}

interface FinancialDashboardProps {
  onExploreServices: () => void;
  onBookCall: () => void;
  simplified?: boolean;
}

export const FinancialDashboard: React.FC<FinancialDashboardProps> = ({
  onExploreServices,
  onBookCall,
  simplified = false,
}) => {
  const [selectedScenarioId, setSelectedScenarioId] = useState<string>('established');
  const [periodMultiplier, setPeriodMultiplier] = useState<number>(1);
  const [periodLabel, setPeriodLabel] = useState<string>('Monthly');
  const [customRevenue, setCustomRevenue] = useState<number | null>(null);
  const [activeMetric, setActiveMetric] = useState<MetricKey>('surplus');
  const [activeService, setActiveService] = useState<ServiceKey | null>(null);
  const [activeTab, setActiveTab] = useState<'overview' | 'expenses' | 'benchmarks'>('overview');
  const [showSurplusTooltip, setShowSurplusTooltip] = useState<boolean>(false);
  const [showDetailedBreakdown, setShowDetailedBreakdown] = useState<boolean>(!simplified);

  const currentScenario =
    scenarios.find((s) => s.id === selectedScenarioId) || scenarios[1];

  // Base monthly revenue
  const baseRevenue = customRevenue !== null ? customRevenue : currentScenario.monthlyRevenue;
  const totalRev = baseRevenue * periodMultiplier;

  // Dynamic calculations - single source of truth
  const cogsAmount = Math.round((totalRev * currentScenario.cogsPercent) / 100);
  const providerPayAmount = Math.round((totalRev * currentScenario.providerPayPercent) / 100);
  const opexAmount = Math.round((totalRev * currentScenario.opexPercent) / 100);
  const surplusAmount = totalRev - cogsAmount - providerPayAmount - opexAmount;
  const surplusPercent = Math.max(0, Math.round((surplusAmount / totalRev) * 100));

  const metricExplanations = buildExplanations({
    totalRev, cogsAmount, providerPayAmount, opexAmount, surplusAmount,
    cogsPercent: currentScenario.cogsPercent,
    providerPayPercent: currentScenario.providerPayPercent,
    opexPercent: currentScenario.opexPercent,
    surplusPercent,
  });

  // Service line proportions based on current scenario
  const injectablesShare = currentScenario.injectables / currentScenario.monthlyRevenue;
  const laserShare = currentScenario.laser / currentScenario.monthlyRevenue;
  const membershipsShare = currentScenario.memberships / currentScenario.monthlyRevenue;
  const skincareShare = currentScenario.skincare / currentScenario.monthlyRevenue;

  const currentInjectables = Math.round(totalRev * injectablesShare);
  const currentLaser = Math.round(totalRev * laserShare);
  const currentMemberships = Math.round(totalRev * membershipsShare);
  const currentSkincare = Math.round(totalRev * skincareShare);

  // Animated display values — count smoothly on slider/scenario change
  const animTotalRev = useAnimatedValue(totalRev);
  const animCogs = useAnimatedValue(cogsAmount);
  const animProviderPay = useAnimatedValue(providerPayAmount);
  const animOpex = useAnimatedValue(opexAmount);
  const animSurplus = useAnimatedValue(surplusAmount);
  const animInjectables = useAnimatedValue(currentInjectables);
  const animLaser = useAnimatedValue(currentLaser);
  const animMemberships = useAnimatedValue(currentMemberships);
  const animSkincare = useAnimatedValue(currentSkincare);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(val);
  };

  const handleScenarioSelect = (id: string) => {
    setSelectedScenarioId(id);
    setCustomRevenue(null);
  };

  return (
    <section
      id="financial-dashboard-section"
      className="py-16 lg:py-24 bg-[#FDFCFA] border-b border-[#E2E8F0]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-10">
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A2E40]/5 border border-[#1A2E40]/10 text-sm font-semibold tracking-wider text-[#1A2E40] uppercase">
              <PieChart className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Interactive Example</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1A2E40] leading-tight">
              Your books should tell you more than whether your bank account went up.
            </h2>
            <p className="text-base sm:text-lg text-[#57534E] leading-relaxed">
              The financial side of your practice is organized so you can see where revenue is coming from, what your treatments and providers are costing you, and how profitable your practice really is.
            </p>
            <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#D4AF37]/35 text-sm text-[#5A6578] flex items-center gap-2">
              <Info className="w-4 h-4 text-[#D4AF37] shrink-0" />
              <span>All figures on this page are an illustrative example, not industry benchmarks, guarantees or projections for your practice.</span>
            </div>
            <div className="pt-2 flex items-center gap-4">
              <button
                type="button"
                onClick={onExploreServices}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#1A2E40] hover:text-[#D4AF37] transition-colors group cursor-pointer"
              >
                <span>Explore bookkeeping services</span>
                <ArrowUpRight className="w-4 h-4 text-[#D4AF37] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>

          {/* Interactive Scenario Switcher & Controls */}
          <div className="lg:col-span-6 bg-white p-5 sm:p-6 rounded-2xl border border-[#E2E8F0] shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-bold uppercase tracking-wider text-[#1A2E40]">
                Choose a practice size
              </span>
              <span className="text-sm text-[#1A2E40] font-semibold flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gradient-to-r from-[#D4AF37]/15 to-[#D4AF37]/10 border border-[#D4AF37]/40">
                <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse shrink-0" />
                <Sliders className="w-3.5 h-3.5 text-[#D4AF37]" /> Interactive
              </span>
            </div>

            {/* Scale Preset Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {scenarios.map((sc) => {
                const isSelected = sc.id === selectedScenarioId && customRevenue === null;
                return (
                  <button
                    key={sc.id}
                    onClick={() => handleScenarioSelect(sc.id)}
                    className={`p-3.5 rounded-xl text-left border-2 transition-all text-sm cursor-pointer ${
                      isSelected
                        ? 'bg-[#1A2E40] border-[#D4AF37] text-white shadow-md ring-2 ring-[#D4AF37]/50'
                        : 'bg-white border-[#CBD5E1] text-[#57534E] hover:border-[#1A2E40]/40 hover:shadow-sm hover:bg-[#FDFCFA]'
                    }`}
                  >
                    <p
                      className={`font-bold text-sm ${
                        isSelected ? 'text-[#D4AF37]' : 'text-[#1A2E40]'
                      }`}
                    >
                      {sc.id === 'boutique' ? 'Boutique' : sc.id === 'established' ? 'Growing' : 'High-Volume'}
                    </p>
                    <p className="text-sm opacity-85 mt-0.5">{sc.stage}</p>
                    <p
                      className={`font-bold mt-1.5 text-sm sm:text-base ${
                        isSelected ? 'text-white' : 'text-[#1A2E40]'
                      }`}
                    >
                      {formatCurrency(sc.monthlyRevenue)}
                      <span className="text-sm font-normal opacity-70">/mo</span>
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Live Interactive Revenue Slider / Adjuster */}
            <div className="mt-4 pt-3.5 border-t border-[#E2E8F0]">
              <div className="flex items-center justify-between text-sm mb-1.5">
                <span className="text-[#1A2E40] font-semibold flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Adjust monthly collections</span>
                </span>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-sm text-[#1A2E40]">
                    {formatCurrency(baseRevenue)}/mo
                  </span>
                  {customRevenue !== null && (
                    <button
                      onClick={() => setCustomRevenue(null)}
                      title="Reset to preset"
                      className="p-1 text-[#57534E] hover:text-[#1A2E40] rounded transition-colors"
                    >
                      <RotateCcw className="w-3 h-3" />
                    </button>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="range"
                  min="30000"
                  max="250000"
                  step="500"
                  value={baseRevenue}
                  onChange={(e) => setCustomRevenue(Number(e.target.value))}
                  className="w-full h-2.5 bg-[#E2E8F0] rounded-lg appearance-none cursor-pointer accent-[#D4AF37]"
                  style={{
                    background: `linear-gradient(to right, #D4AF37 0%, #D4AF37 ${((baseRevenue - 30000) / (250000 - 30000)) * 100}%, #E2E8F0 ${((baseRevenue - 30000) / (250000 - 30000)) * 100}%, #E2E8F0 100%)`
                  }}
                />
              </div>
              <div className="flex justify-between text-sm text-[#57534E] mt-1">
                <span>$30k/mo</span>
                <span>$140k/mo</span>
                <span>$250k/mo</span>
              </div>
            </div>

            {/* Quick Reporting Period Filter */}
            <div className="mt-3.5 pt-3 border-t border-[#E2E8F0] flex items-center justify-between text-sm">
              <span className="text-[#57534E] font-medium">Reporting period:</span>
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => {
                    setPeriodMultiplier(1);
                    setPeriodLabel('Monthly');
                  }}
                  className={`px-3 py-1.5 rounded-lg text-sm transition-all cursor-pointer ${
                    periodMultiplier === 1
                      ? 'bg-gradient-to-r from-[#D4AF37] to-[#C8A02A] text-[#1A2E40] font-bold shadow-xs'
                      : 'text-[#57534E] hover:text-[#1A2E40] hover:bg-[#F1F5F9]'
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => {
                    setPeriodMultiplier(3);
                    setPeriodLabel('Quarterly');
                  }}
                  className={`px-3 py-1.5 rounded-lg text-sm transition-all cursor-pointer ${
                    periodMultiplier === 3
                      ? 'bg-gradient-to-r from-[#D4AF37] to-[#C8A02A] text-[#1A2E40] font-bold shadow-xs'
                      : 'text-[#57534E] hover:text-[#1A2E40] hover:bg-[#F1F5F9]'
                  }`}
                >
                  Quarterly (3 Months)
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* The Live Interactive MedSpa Financial Dashboard Widget */}
        <div
          id="financial-dashboard"
          className="bg-white rounded-2xl border border-[#E2E8F0] shadow-md p-5 sm:p-8"
        >
          {/* Dashboard Top bar - Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E2E8F0]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#1A2E40] text-[#D4AF37] flex items-center justify-center font-bold shrink-0">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-lg font-bold text-[#1A2E40] flex items-center gap-2">
                    <span>{currentScenario.name}</span>
                    <span className="text-sm px-2.5 py-0.5 rounded-full bg-[#1A2E40]/5 text-[#1A2E40] border border-[#1A2E40]/10 font-semibold">
                      P&amp;L
                    </span>
                  </h3>
                  <span className="text-sm text-[#57534E] bg-[#F1F5F9] px-2.5 py-0.5 rounded-md border border-[#E2E8F0] font-medium">
                    Example practice
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* "Where Every $100 Goes" Visual Allocation Strip */}
          <div className="py-5 border-b border-[#E2E8F0] bg-[#FAF8F5]/80 -mx-5 sm:-mx-8 px-5 sm:px-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2.5">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                <p className="text-sm font-bold uppercase tracking-wider text-[#1A2E40]">
                  Where each $100 collected goes in this example
                </p>
              </div>
              <span className="text-sm text-[#57534E]">
                Click any item to see what it means
              </span>
            </div>

            {/* Visual breakdown bar */}
            <div className="h-4 w-full bg-[#E2E8F0] rounded-full overflow-hidden flex shadow-inner">
              <div 
                style={{ width: `${currentScenario.cogsPercent}%` }} 
                className="bg-[#D4AF37] h-full transition-all duration-300 relative group cursor-pointer"
                onClick={() => setActiveMetric('cogs')}
                title={`Treatment COGS: $${currentScenario.cogsPercent} per $100`}
              />
              <div 
                style={{ width: `${currentScenario.providerPayPercent}%` }} 
                className="bg-[#1A2E40] h-full transition-all duration-300 relative group cursor-pointer"
                onClick={() => setActiveMetric('providerPay')}
                title={`Provider Compensation: $${currentScenario.providerPayPercent} per $100`}
              />
              <div 
                style={{ width: `${currentScenario.opexPercent}%` }} 
                className="bg-[#94A3B8] h-full transition-all duration-300 relative group cursor-pointer"
                onClick={() => setActiveMetric('opex')}
                title={`Operating Expenses: $${currentScenario.opexPercent} per $100`}
              />
              <div 
                style={{ width: `${surplusPercent}%` }} 
                className="bg-emerald-600 h-full transition-all duration-300 relative group cursor-pointer"
                onClick={() => setActiveMetric('surplus')}
                title={`Operating Surplus: $${surplusPercent} per $100`}
              />
            </div>

            {/* Legend Labels */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mt-2.5 text-sm">
              <button 
                onClick={() => setActiveMetric('cogs')}
                className={`flex items-center gap-1.5 p-1.5 rounded-lg text-left transition-all cursor-pointer ${
                  activeMetric === 'cogs' ? 'bg-white shadow-xs font-bold text-[#1A2E40]' : 'text-[#57534E] hover:text-[#1A2E40]'
                }`}
              >
                <span className="w-2.5 h-2.5 rounded-full bg-[#D4AF37] shrink-0" />
                <span className="truncate"><strong>${currentScenario.cogsPercent}</strong> Treatment COGS</span>
              </button>
              <button 
                onClick={() => setActiveMetric('providerPay')}
                className={`flex items-center gap-1.5 p-1.5 rounded-lg text-left transition-all cursor-pointer ${
                  activeMetric === 'providerPay' ? 'bg-white shadow-xs font-bold text-[#1A2E40]' : 'text-[#57534E] hover:text-[#1A2E40]'
                }`}
              >
                <span className="w-2.5 h-2.5 rounded-full bg-[#1A2E40] shrink-0" />
                <span className="truncate"><strong>${currentScenario.providerPayPercent}</strong> Provider Compensation</span>
              </button>
              <button 
                onClick={() => setActiveMetric('opex')}
                className={`flex items-center gap-1.5 p-1.5 rounded-lg text-left transition-all cursor-pointer ${
                  activeMetric === 'opex' ? 'bg-white shadow-xs font-bold text-[#1A2E40]' : 'text-[#57534E] hover:text-[#1A2E40]'
                }`}
              >
                <span className="w-2.5 h-2.5 rounded-full bg-[#94A3B8] shrink-0" />
                <span className="truncate"><strong>${currentScenario.opexPercent}</strong> Operating Expenses</span>
              </button>
              <button 
                onClick={() => setActiveMetric('surplus')}
                className={`flex items-center gap-1.5 p-1.5 rounded-lg text-left transition-all cursor-pointer ${
                  activeMetric === 'surplus' ? 'bg-white shadow-xs font-bold text-emerald-800' : 'text-[#57534E] hover:text-emerald-800'
                }`}
              >
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 shrink-0" />
                <span className="truncate"><strong>${surplusPercent}</strong> Operating Surplus</span>
              </button>
            </div>
          </div>

          {/* Interactive Metric Tiles Row (Click to Inspect) */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 py-6 border-b border-[#E2E8F0]">
            {/* 1. Gross Collections */}
            <button
              onClick={() => setActiveMetric('revenue')}
              className={`p-4 rounded-xl text-left transition-all cursor-pointer relative ${
                activeMetric === 'revenue'
                  ? 'bg-white border-2 border-[#1A2E40] shadow-md ring-2 ring-[#1A2E40]/10'
                  : 'bg-white border-2 border-[#CBD5E1] hover:border-[#1A2E40]/50 hover:shadow-sm'
              }`}
            >
              <div className="flex items-center justify-between">
                <p className="text-sm uppercase tracking-wider text-[#57534E] font-semibold">
                  Gross Collections
                </p>
                <Info className="w-3.5 h-3.5 text-[#57534E]/60" />
              </div>
              <p className="text-xl sm:text-2xl lg:text-3xl font-bold font-serif text-[#1A2E40] mt-1 tabular-nums">
                {formatCurrency(animTotalRev)}
              </p>
              <div className="flex items-center gap-1 mt-2 text-sm text-[#1A2E40]/80 font-medium">
                <Info className="w-3 h-3 text-[#D4AF37]" />
                <span className="truncate">Matched to payment records</span>
              </div>
            </button>

            {/* 2. Treatment COGS */}
            <button
              onClick={() => setActiveMetric('cogs')}
              className={`p-4 rounded-xl text-left transition-all cursor-pointer relative ${
                activeMetric === 'cogs'
                  ? 'bg-white border-2 border-[#D4AF37] shadow-md ring-2 ring-[#D4AF37]/20'
                  : 'bg-white border-2 border-[#CBD5E1] hover:border-[#D4AF37]/60 hover:shadow-sm'
              }`}
            >
              <div className="flex items-center justify-between">
                <p className="text-sm uppercase tracking-wider text-[#57534E] font-semibold">
                  Treatment COGS
                </p>
                <span className="text-sm font-bold px-1.5 py-0.5 rounded bg-[#D4AF37]/20 text-[#1A2E40]">
                  {currentScenario.cogsPercent}%
                </span>
              </div>
              <p className="text-xl sm:text-2xl lg:text-3xl font-bold font-serif text-[#1A2E40] mt-1 tabular-nums">
                {formatCurrency(animCogs)}
              </p>
              <p className="text-sm text-[#57534E] mt-2 truncate">
                Direct clinical products &amp; supplies
              </p>
            </button>

            {/* 3. Provider Compensation */}
            <button
              onClick={() => setActiveMetric('providerPay')}
              className={`p-4 rounded-xl text-left transition-all cursor-pointer relative ${
                activeMetric === 'providerPay'
                  ? 'bg-white border-2 border-[#1A2E40] shadow-md ring-2 ring-[#1A2E40]/10'
                  : 'bg-white border-2 border-[#CBD5E1] hover:border-[#1A2E40]/50 hover:shadow-sm'
              }`}
            >
              <div className="flex items-center justify-between">
                <p className="text-sm uppercase tracking-wider text-[#57534E] font-semibold">
                  Provider Compensation
                </p>
                <span className="text-sm font-bold px-1.5 py-0.5 rounded bg-[#E2E8F0] text-[#1A2E40]">
                  {currentScenario.providerPayPercent}%
                </span>
              </div>
              <p className="text-xl sm:text-2xl lg:text-3xl font-bold font-serif text-[#1A2E40] mt-1 tabular-nums">
                {formatCurrency(animProviderPay)}
              </p>
              <p className="text-sm text-[#57534E] mt-2 truncate">
                Clinical provider compensation
              </p>
            </button>

            {/* 4. Illustrative Operating Surplus */}
            <div className="relative">
              <button
                onClick={() => setActiveMetric('surplus')}
                className={`w-full p-4 rounded-xl text-left transition-all cursor-pointer relative ${
                  activeMetric === 'surplus'
                    ? 'bg-[#1A2E40] text-white border-2 border-[#D4AF37] shadow-lg ring-2 ring-[#D4AF37]/40'
                    : 'bg-[#1A2E40] text-white border border-[#1A2E40] hover:opacity-95'
                }`}
              >
                <div className="flex items-center justify-between pr-7">
                  <p className="text-sm uppercase tracking-wider text-[#D4AF37] font-bold">
                    Operating Surplus
                  </p>
                  <span className="text-sm font-bold px-2 py-0.5 rounded bg-[#D4AF37] text-[#1A2E40]">
                    {surplusPercent}%
                  </span>
                </div>
                <p className="text-xl sm:text-2xl lg:text-3xl font-bold font-serif text-white mt-1 tabular-nums">
                  {formatCurrency(animSurplus)}
                </p>
                <p className="text-sm text-[#E2E8F0]/90 mt-2 line-clamp-2">
                  What remains after the expenses shown in this example.
                </p>
              </button>

              {/* Tooltip trigger button as sibling to prevent invalid nested button HTML */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowSurplusTooltip(!showSurplusTooltip);
                }}
                onMouseEnter={() => setShowSurplusTooltip(true)}
                onMouseLeave={() => setShowSurplusTooltip(false)}
                className="absolute top-3.5 right-3 p-1 rounded-full text-[#D4AF37] hover:bg-white/10 transition-colors cursor-pointer z-10"
                title="How operating surplus is calculated"
                aria-label="How operating surplus is calculated"
              >
                <Info className="w-3.5 h-3.5" />
              </button>

              {/* Accessible Tooltip for Surplus Card */}
              {showSurplusTooltip && (
                <div className="absolute z-20 bottom-full left-0 right-0 mb-2 p-3 bg-[#0F172A] text-white text-sm rounded-xl shadow-xl border border-[#D4AF37]/40 leading-relaxed animate-in fade-in">
                  <div className="flex items-start justify-between gap-2">
                    <p className="font-semibold text-[#D4AF37] mb-1">How this is calculated</p>
                    <button 
                      onClick={() => setShowSurplusTooltip(false)}
                      className="text-gray-400 hover:text-white text-sm"
                    >
                      ✕
                    </button>
                  </div>
                  <p className="text-gray-200 text-sm">
                    {formatCurrency(totalRev)} collections − {formatCurrency(cogsAmount)} COGS − {formatCurrency(providerPayAmount)} provider compensation − {formatCurrency(opexAmount)} operating expenses = {formatCurrency(surplusAmount)}. This is not cash available to the owner. It does not account for income taxes, loan payments, equipment purchases or cash reserves.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Prominent Operating Expenses ($14,800 • 16%) Reconciliation Bar */}
          <div className="mt-4 p-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-sm">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
              <span className="text-[#1A2E40] font-semibold">Example breakdown of {formatCurrency(totalRev)} collected:</span>
            </div>
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-sm">
              <button 
                onClick={() => setActiveMetric('cogs')} 
                className="font-medium text-[#57534E] hover:text-[#1A2E40] transition-colors cursor-pointer"
              >
                Treatment COGS: <strong className="text-[#1A2E40] tabular-nums">{formatCurrency(animCogs)}</strong> ({currentScenario.cogsPercent}%)
              </button>
              <span className="text-[#CBD5E1] hidden sm:inline">•</span>
              <button 
                onClick={() => setActiveMetric('providerPay')} 
                className="font-medium text-[#57534E] hover:text-[#1A2E40] transition-colors cursor-pointer"
              >
                Provider compensation: <strong className="text-[#1A2E40] tabular-nums">{formatCurrency(animProviderPay)}</strong> ({currentScenario.providerPayPercent}%)
              </button>
              <span className="text-[#CBD5E1] hidden sm:inline">•</span>
              <button 
                onClick={() => setActiveMetric('opex')} 
                className={`font-semibold px-2 py-0.5 rounded transition-all cursor-pointer ${
                  activeMetric === 'opex' ? 'bg-[#1A2E40] text-[#D4AF37]' : 'text-[#1A2E40] hover:text-[#D4AF37] underline decoration-[#D4AF37] underline-offset-2'
                }`}
              >
                Operating Expenses: <strong className="tabular-nums">{formatCurrency(animOpex)}</strong> ({currentScenario.opexPercent}%)
              </button>
              <span className="text-[#CBD5E1] hidden sm:inline">•</span>
              <button 
                onClick={() => setActiveMetric('surplus')} 
                className="font-bold text-emerald-800 hover:underline transition-colors cursor-pointer"
              >
                Surplus: <strong className="tabular-nums">{formatCurrency(animSurplus)}</strong> ({surplusPercent}%)
              </button>
            </div>
          </div>


          {/* DYNAMIC PLAIN-ENGLISH CLARITY CARD (Updates when any metric is clicked) */}
          <div className="my-6 p-4 sm:p-5 rounded-xl bg-[#FAF8F5] border border-[#D4AF37]/50 shadow-xs transition-all">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#1A2E40] text-[#D4AF37] flex items-center justify-center font-bold shrink-0 mt-0.5">
                <Sparkles className="w-4 h-4" />
              </div>
              <div className="space-y-3 flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-[#E2E8F0] pb-2">
                  <h4 className="text-sm font-bold text-[#1A2E40] flex items-center gap-2">
                    <span>{metricExplanations[activeMetric].title}</span>
                    <span className="text-sm font-normal text-[#57534E] bg-white px-2 py-0.5 rounded border border-[#E2E8F0]">
                      Example: {metricExplanations[activeMetric].benchmark}
                    </span>
                  </h4>
                  <span className="text-sm text-[#57534E]">
                    {periodLabel} view
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
                  <div className="p-3 bg-white rounded-lg border border-[#E2E8F0]">
                    <p className="font-bold text-[#1A2E40] mb-1">What it means</p>
                    <p className="text-[#57534E] leading-relaxed">
                      {metricExplanations[activeMetric].plainEnglish}
                    </p>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-amber-200 bg-amber-50/30">
                    <p className="font-bold text-amber-900 mb-1">Where it goes wrong</p>
                    <p className="text-[#57534E] leading-relaxed">
                      {metricExplanations[activeMetric].commonTrap}
                    </p>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-emerald-200 bg-emerald-50/30">
                    <p className="font-bold text-emerald-900 mb-1">How bookkeeping helps</p>
                    <p className="text-[#57534E] leading-relaxed">
                      {metricExplanations[activeMetric].solution}
                    </p>
                  </div>
                </div>

                {activeMetric === 'surplus' && (
                  <div className="p-2.5 rounded-lg bg-white border border-[#D4AF37]/30 text-sm text-[#57534E] leading-relaxed">
                    <strong className="text-[#1A2E40]">Surplus is not owner cash:</strong>{' '}
                    This is the amount remaining after only the expenses shown in this example. What the owner can take out also depends on income taxes, loan payments, equipment purchases, cash reserves and other expenses not shown.
                  </div>
                )}

                {activeMetric === 'opex' && (
                  <div className="p-2.5 rounded-lg bg-white border border-[#D4AF37]/30 text-sm text-[#57534E] leading-relaxed">
                    <strong className="text-[#1A2E40]">What counts as operating expense:</strong>{' '}
                    Rent, utilities, insurance, marketing, software subscriptions, front-desk staff and merchant processing fees. Loan principal payments and equipment financing are balance sheet items, not operating expenses.
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Controlled expander button for simplified homepage view */}
          {simplified && (
            <div className="pt-2 text-center">
              <button
                type="button"
                onClick={() => setShowDetailedBreakdown(!showDetailedBreakdown)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#1A2E40] text-[#D4AF37] hover:text-white text-sm font-semibold hover:bg-[#122230] transition-all cursor-pointer shadow-xs border border-[#D4AF37]/35 active:scale-[0.99]"
              >
                <span>
                  {showDetailedBreakdown
                    ? 'Hide detailed breakdown'
                    : 'Show detailed breakdown'}
                </span>
                {showDetailedBreakdown ? (
                  <ChevronUp className="w-3.5 h-3.5 text-[#D4AF37]" />
                ) : (
                  <ChevronDown className="w-3.5 h-3.5 text-[#D4AF37]" />
                )}
              </button>
            </div>
          )}

          {/* Interactive Navigation Tabs for Deep-Dive Analysis */}
          {(!simplified || showDetailedBreakdown) && (
          <>
          <div className="pt-4 animate-in fade-in duration-200">
            <div className="flex items-center gap-2 border-b border-[#E2E8F0] pb-3 mb-4 overflow-x-auto">
              <button
                onClick={() => setActiveTab('overview')}
                className={`px-3.5 py-1.5 rounded-lg text-sm font-bold transition-all cursor-pointer ${
                  activeTab === 'overview'
                    ? 'bg-[#1A2E40] text-[#D4AF37] shadow-xs'
                    : 'text-[#57534E] hover:text-[#1A2E40] hover:bg-[#F8FAFC]'
                }`}
              >
                Revenue Mix
              </button>
              <button
                onClick={() => setActiveTab('expenses')}
                className={`px-3.5 py-1.5 rounded-lg text-sm font-bold transition-all cursor-pointer ${
                  activeTab === 'expenses'
                    ? 'bg-[#1A2E40] text-[#D4AF37] shadow-xs'
                    : 'text-[#57534E] hover:text-[#1A2E40] hover:bg-[#F8FAFC]'
                }`}
              >
                Expense Breakdown
              </button>
              <button
                onClick={() => setActiveTab('benchmarks')}
                className={`px-3.5 py-1.5 rounded-lg text-sm font-bold transition-all cursor-pointer ${
                  activeTab === 'benchmarks'
                    ? 'bg-[#1A2E40] text-[#D4AF37] shadow-xs'
                    : 'text-[#57534E] hover:text-[#1A2E40] hover:bg-[#F8FAFC]'
                }`}
              >
                What to Watch For
              </button>
            </div>

            {/* TAB 1: Service Line Revenue Mix Breakdown */}
            {activeTab === 'overview' && (
              <div className="space-y-4">
                <p className="text-sm text-[#57534E] mb-3">
                  Select a service line to see how it is tracked in QuickBooks:
                </p>

                {/* Injectables */}
                <div 
                  onClick={() => setActiveService(activeService === 'injectables' ? null : 'injectables')}
                  className="p-3 rounded-xl hover:bg-[#FAF8F5] transition-colors cursor-pointer border border-transparent hover:border-[#E2E8F0]"
                >
                  <div className="flex justify-between text-sm font-semibold mb-1.5">
                    <span className="text-[#1A2E40] flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#1A2E40]" />
                      Injectables (Neurotoxins &amp; Dermal Fillers)
                    </span>
                    <span className="text-[#1A2E40] font-bold tabular-nums">
                      {formatCurrency(animInjectables)} (
                      {Math.round((currentInjectables / totalRev) * 100)}%)
                    </span>
                  </div>
                  <div className="h-2.5 w-full bg-[#E2E8F0] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#1A2E40] rounded-full transition-all duration-500"
                      style={{
                        width: `${(currentInjectables / totalRev) * 100}%`,
                      }}
                    />
                  </div>
                  {activeService === 'injectables' && (
                    <div className="mt-2 text-sm bg-white p-2.5 rounded-lg border border-[#E2E8F0] text-[#57534E]">
                      <span className="font-bold text-[#1A2E40]">{serviceInsights.injectables.margin}: </span>
                      {serviceInsights.injectables.explanation}
                    </div>
                  )}
                </div>

                {/* Laser & Devices */}
                <div 
                  onClick={() => setActiveService(activeService === 'laser' ? null : 'laser')}
                  className="p-3 rounded-xl hover:bg-[#FAF8F5] transition-colors cursor-pointer border border-transparent hover:border-[#E2E8F0]"
                >
                  <div className="flex justify-between text-sm font-semibold mb-1.5">
                    <span className="text-[#1A2E40] flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#D4AF37]" />
                      Laser, RF Microneedling &amp; Body Contouring
                    </span>
                    <span className="text-[#1A2E40] font-bold tabular-nums">
                      {formatCurrency(animLaser)} (
                      {Math.round((currentLaser / totalRev) * 100)}%)
                    </span>
                  </div>
                  <div className="h-2.5 w-full bg-[#E2E8F0] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#D4AF37] rounded-full transition-all duration-500"
                      style={{
                        width: `${(currentLaser / totalRev) * 100}%`,
                      }}
                    />
                  </div>
                  {activeService === 'laser' && (
                    <div className="mt-2 text-sm bg-white p-2.5 rounded-lg border border-[#E2E8F0] text-[#57534E]">
                      <span className="font-bold text-[#1A2E40]">{serviceInsights.laser.margin}: </span>
                      {serviceInsights.laser.explanation}
                    </div>
                  )}
                </div>

                {/* Memberships */}
                <div 
                  onClick={() => setActiveService(activeService === 'memberships' ? null : 'memberships')}
                  className="p-3 rounded-xl hover:bg-[#FAF8F5] transition-colors cursor-pointer border border-transparent hover:border-[#E2E8F0]"
                >
                  <div className="flex justify-between text-sm font-semibold mb-1.5">
                    <span className="text-[#1A2E40] flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#57534E]" />
                      Membership Revenue &amp; Recurring Packages
                    </span>
                    <span className="text-[#1A2E40] font-bold tabular-nums">
                      {formatCurrency(animMemberships)} (
                      {Math.round((currentMemberships / totalRev) * 100)}%)
                    </span>
                  </div>
                  <div className="h-2.5 w-full bg-[#E2E8F0] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#57534E] rounded-full transition-all duration-500"
                      style={{
                        width: `${(currentMemberships / totalRev) * 100}%`,
                      }}
                    />
                  </div>
                  {activeService === 'memberships' && (
                    <div className="mt-2 text-sm bg-white p-2.5 rounded-lg border border-[#E2E8F0] text-[#57534E]">
                      <span className="font-bold text-[#1A2E40]">{serviceInsights.memberships.margin}: </span>
                      {serviceInsights.memberships.explanation}
                    </div>
                  )}
                </div>

                {/* Skincare Retail */}
                <div 
                  onClick={() => setActiveService(activeService === 'skincare' ? null : 'skincare')}
                  className="p-3 rounded-xl hover:bg-[#FAF8F5] transition-colors cursor-pointer border border-transparent hover:border-[#E2E8F0]"
                >
                  <div className="flex justify-between text-sm font-semibold mb-1.5">
                    <span className="text-[#1A2E40] flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#94A3B8]" />
                      Medical-Grade Skincare Retail
                    </span>
                    <span className="text-[#1A2E40] font-bold tabular-nums">
                      {formatCurrency(animSkincare)} (
                      {Math.round((currentSkincare / totalRev) * 100)}%)
                    </span>
                  </div>
                  <div className="h-2.5 w-full bg-[#E2E8F0] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#94A3B8] rounded-full transition-all duration-500"
                      style={{
                        width: `${(currentSkincare / totalRev) * 100}%`,
                      }}
                    />
                  </div>
                  {activeService === 'skincare' && (
                    <div className="mt-2 text-sm bg-white p-2.5 rounded-lg border border-[#E2E8F0] text-[#57534E]">
                      <span className="font-bold text-[#1A2E40]">{serviceInsights.skincare.margin}: </span>
                      {serviceInsights.skincare.explanation}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* TAB 2: Clinic Expense Deep Dive */}
            {activeTab === 'expenses' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                  <h5 className="font-bold text-sm text-[#1A2E40] mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                    Treatment COGS ({currentScenario.cogsPercent}%)
                  </h5>
                  <p className="text-xl font-bold text-[#1A2E40] mb-2 tabular-nums">
                    {formatCurrency(animCogs)}
                  </p>
                  <ul className="text-sm text-[#57534E] space-y-1.5">
                    <li>• Neurotoxin and dermal filler used in treatments</li>
                    <li>• Consumable supplies such as syringes, cannulas and gloves</li>
                    <li>• Separates product purchased from product used or sold</li>
                    <li>• Depends on inventory counts and your accounting method</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                  <h5 className="font-bold text-sm text-[#1A2E40] mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#1A2E40]" />
                    Provider Compensation ({currentScenario.providerPayPercent}%)
                  </h5>
                  <p className="text-xl font-bold text-[#1A2E40] mb-2 tabular-nums">
                    {formatCurrency(animProviderPay)}
                  </p>
                  <ul className="text-sm text-[#57534E] space-y-1.5">
                    <li>• Pay for injectors and aestheticians: hourly, commission or salary</li>
                    <li>• Kept apart from front-desk and administrative payroll where records allow</li>
                    <li>• Checked against collections and your compensation plan</li>
                    <li>• Worker classification and payroll rules are set with your advisors</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                  <h5 className="font-bold text-sm text-[#1A2E40] mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#94A3B8]" />
                    Operating Expenses &amp; Overhead ({currentScenario.opexPercent}%)
                  </h5>
                  <p className="text-xl font-bold text-[#1A2E40] mb-2 tabular-nums">
                    {formatCurrency(animOpex)}
                  </p>
                  <ul className="text-sm text-[#57534E] space-y-1.5">
                    <li>• Rent, utilities, liability insurance and marketing</li>
                    <li>• Front-desk and administrative staff, plus booking and payment software</li>
                    <li>• Card processing and patient financing fees</li>
                    <li>• Excludes loan principal and equipment purchases</li>
                  </ul>
                </div>
              </div>
            )}

            {/* TAB 3: What to Watch For */}
            {activeTab === 'benchmarks' && (
              <div className="space-y-3 pt-2">
                <div className="p-3.5 rounded-xl bg-amber-50/60 border border-amber-200/80 flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                  <div className="text-sm text-[#1A2E40] leading-relaxed">
                    <strong className="text-amber-900 block text-sm mb-1">
                      Consideration #1: Patient Financing &amp; Merchant Fees
                    </strong>
                    When patients pay by card or through financing such as Cherry or CareCredit, fees are taken out before the money reaches your bank account. Recording only the net deposit understates collections, hides the fees, and can throw off provider compensation.
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-amber-50/60 border border-amber-200/80 flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                  <div className="text-sm text-[#1A2E40] leading-relaxed">
                    <strong className="text-amber-900 block text-sm mb-1">
                      Consideration #2: Retail Inventory vs. Clinical Supplies
                    </strong>
                    Skincare bought to resell should be tracked apart from back-bar supplies used in treatments. Recording cost when products are sold, not when they are ordered, avoids artificial swings in monthly profit.
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-amber-50/60 border border-amber-200/80 flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                  <div className="text-sm text-[#1A2E40] leading-relaxed">
                    <strong className="text-amber-900 block text-sm mb-1">
                      Consideration #3: Prepaid Packages &amp; Memberships
                    </strong>
                    Packages and memberships are usually paid before treatments are delivered. Tracking cash collected, treatments still owed and services delivered keeps revenue and provider commissions accurate.
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Bottom Financial Insight Banner (Only when deep dive is expanded or on full dashboard) */}
          <div className="mt-8 p-4.5 rounded-xl bg-[#FAF8F5] border border-[#D4AF37]/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
              <div className="text-left">
                <p className="text-sm font-bold text-[#1A2E40] uppercase tracking-wider">
                  Reports built for practice owners, not just accountants
                </p>
                <p className="text-sm sm:text-sm text-[#57534E] mt-1 leading-relaxed">
                  Clear reports on treatment revenue, product costs, provider compensation and operating expenses, so you can see how your practice is really performing.
                </p>
              </div>
            </div>

            <button
              onClick={onBookCall}
              className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#E5C765] to-[#D4AF37] hover:from-[#C8A02A] hover:via-[#D4AF37] hover:to-[#C8A02A] text-[#1A2E40] text-sm sm:text-sm font-bold transition-all shadow-[0_2px_10px_rgba(212,175,55,0.25)] hover:shadow-[0_4px_16px_rgba(212,175,55,0.4)] border border-[#FFF5DE]/60 active:scale-[0.98] group cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5 text-[#1A2E40]" />
              <span>Book a Clarity Call</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#1A2E40] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
          </>
          )}

          {/* Subtle Illustrative Disclaimer Footnote */}
          <p className="mt-4 text-center text-sm text-[#57534E]/70 italic">
            This dashboard is an illustrative example. The percentages are sample figures, not industry benchmarks or predictions. Your results will differ based on your revenue mix, provider compensation model and expenses, which is what monthly bookkeeping tracks and reports.
          </p>
        </div>
      </div>
    </section>
  );
};
