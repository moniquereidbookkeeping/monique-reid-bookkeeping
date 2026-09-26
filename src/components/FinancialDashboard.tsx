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
    stage: '1-2 Injectors',
    monthlyRevenue: 48000,
    injectables: 26400,
    laser: 11520,
    skincare: 4320,
    memberships: 5760,
    cogsPercent: 25,
    providerPayPercent: 28,
    opexPercent: 18,
  },
  {
    id: 'established',
    name: 'Growing Multi-Provider MedSpa',
    stage: '3-5 Providers + Estheticians',
    monthlyRevenue: 92500,
    injectables: 48100,
    laser: 24050,
    skincare: 8325,
    memberships: 12025,
    cogsPercent: 23,
    providerPayPercent: 32,
    opexPercent: 16,
  },
  {
    id: 'expansion',
    name: 'High-Volume / Multi-Location',
    stage: 'Full Service Medical Aesthetics',
    monthlyRevenue: 175000,
    injectables: 87500,
    laser: 47250,
    skincare: 15750,
    memberships: 24500,
    cogsPercent: 21,
    providerPayPercent: 33,
    opexPercent: 15,
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

const metricExplanations: Record<MetricKey, MetricExplanation> = {
  revenue: {
    title: 'Gross Collections',
    plainEnglish: 'Total cash and patient financing receipts collected during the period before merchant and processing fees are deducted. Gross collections is distinct from gross billings (total charges before discounts) and recognized revenue (earned value of completed services under accrual accounting).',
    benchmark: 'User-defined illustrative baseline: $92,500 in this scenario. Not a verified industry standard.',
    commonTrap: 'Treating gross collections, gross billings, and recognized revenue as interchangeable can distort practice reporting—particularly when patient financing holdbacks, prepaid packages, or gift card deposits are involved.',
    solution: 'I perform illustrative reconciliations between your POS/booking platform and merchant bank deposits, isolating merchant fee deductions so gross collections and merchant fees are both tracked transparently.',
  },
  cogs: {
    title: 'Treatment COGS (Direct Clinical Supplies)',
    plainEnglish: 'Direct clinical costs of products administered to patients (such as neurotoxins and dermal fillers) plus consumable treatment supplies. Treatment cost reporting depends on available inventory counts and whether the practice operates on cash or accrual accounting.',
    benchmark: 'User-defined illustrative target: 23% ($21,275) in this scenario. Universal benchmarks do not apply across different treatment mixes.',
    commonTrap: 'Expensing all inventory purchases immediately upon payment rather than recognizing costs as products are actually used or sold creates artificial monthly profit volatility.',
    solution: 'I configure dedicated Chart of Accounts categories for clinical inventory and supplies, working with your available records to distinguish inventory on hand from products used in treatments.',
  },
  providerPay: {
    title: 'Provider Compensation',
    plainEnglish: 'Direct compensation paid to clinical service providers, including injectors and aestheticians (hourly, commission, or base salary). Where practice records permit, direct provider compensation is distinguished from administrative, front-desk, and clinical-support payroll.',
    benchmark: 'User-defined illustrative target: 32% ($29,600) in this scenario. Compensation structures vary widely by practice model and market.',
    commonTrap: 'Calculating provider compensation on gross billed charges before merchant financing fees are deducted, or calculating commissions on unearned package balances, can misalign payroll with actual practice collections.',
    solution: 'I help organize revenue reporting against provider compensation schedules so that compensation calculations align cleanly with collected receipts and practice policies. (Note: Worker classification and payroll processing are determined by the practice and its payroll/legal advisors.)',
  },
  opex: {
    title: 'Operating Expenses & Overhead',
    plainEnglish: 'Routine administrative and operational costs required to maintain clinic operations—such as clinic suite rent, utilities, general liability insurance, software subscriptions, and merchant processing fees. Excludes debt principal repayments and capital asset investments.',
    benchmark: 'User-defined illustrative target: 16% ($14,800) in this scenario. Operating ratios depend on clinic footprint, lease terms, and local overhead.',
    commonTrap: 'Classifying loan principal repayments, owner disbursements, or capital equipment leases as operating expenses distorts operational margins and creates misleading P&L trends.',
    solution: 'I establish an organized MedSpa Chart of Accounts that cleanly separates operational overhead from balance-sheet liabilities and financing payments, keeping your operational P&L accurate.',
  },
  surplus: {
    title: 'Illustrative Operating Surplus',
    plainEnglish: 'Amount remaining after the expenses included in this simplified model ($21,275 Treatment COGS + $29,600 Provider Compensation + $14,800 Operating Expenses = $26,825). This figure represents the mathematical surplus of the specific illustrative items shown.',
    benchmark: 'User-defined illustrative outcome: 29% ($26,825) in this simplified scenario. Not a verified industry standard.',
    commonTrap: 'Operating surplus is not identical to net profit, EBITDA, or cash available for owner distributions. Cash available for owner distributions also depends on income taxes, debt principal payments, working capital reserves, capital expenditures, and unmodeled expenses.',
    solution: 'I deliver structured monthly financial statements—including reconciled Profit & Loss and Balance Sheet reporting—so practice owners understand both operating performance and balance sheet obligations.',
  },
};

const serviceInsights: Record<ServiceKey, { name: string; margin: string; explanation: string }> = {
  injectables: {
    name: 'Injectables (Neurotoxins & Dermal Fillers)',
    margin: 'Service-Line Gross Margin Analysis',
    explanation: 'Calculating actual gross margin for injectables requires tracking direct product costs (vials of neurotoxin, syringes of filler) plus clinical disposables against service revenue. Accurate service-line margins require consistent cost allocation and reliable inventory records.',
  },
  laser: {
    name: 'Laser, RF & Body Contouring',
    margin: 'Service-Line Gross Margin Analysis',
    explanation: 'Calculating actual gross margin for energy-based treatments requires tracking disposable treatment tips, topical consumables, and direct provider treatment costs against device revenue. Equipment financing or capital lease payments are accounted for separately according to practice accounting policies.',
  },
  memberships: {
    name: 'Membership Revenue & Recurring Packages',
    margin: 'Collections & Revenue Recognition Timing',
    explanation: 'Membership and package activity can involve timing differences between collections and recognized revenue. Evaluating margin contribution requires matching the cost of services delivered with the portion of package or membership fees recognized during that period.',
  },
  skincare: {
    name: 'Medical-Grade Skincare Retail',
    margin: 'Retail Gross Margin Tracking',
    explanation: 'Calculating retail skincare gross margin requires tracking the wholesale acquisition cost of inventory sold (COGS) separately from internal clinical back-bar supplies. Product costs should be recognized consistently with the practice’s established accounting method rather than assuming a static markup.',
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A2E40]/5 border border-[#1A2E40]/10 text-xs font-semibold tracking-wider text-[#1A2E40] uppercase">
              <PieChart className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Illustrative Practice Financial Model</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1A2E40] leading-tight">
              Your books should tell you more than whether your bank account went up.
            </h2>
            <p className="text-base sm:text-lg text-[#57534E] leading-relaxed">
              I organize the financial side of your practice so you can see where revenue is coming from, what your treatments and providers are costing you, and how profitable your practice really is.
            </p>
            <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#D4AF37]/35 text-xs text-[#718096] flex items-center gap-2">
              <Info className="w-4 h-4 text-[#D4AF37] shrink-0" />
              <span>All benchmarks, percentages, and outputs in this model are illustrative examples only, not guarantees or specific practice projections.</span>
            </div>
            <div className="pt-2 flex items-center gap-4">
              <button
                type="button"
                onClick={onExploreServices}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#1A2E40] hover:text-[#D4AF37] transition-colors group cursor-pointer"
              >
                <span>Explore Our Six Bookkeeping Services</span>
                <ArrowUpRight className="w-4 h-4 text-[#D4AF37] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>

          {/* Interactive Scenario Switcher & Controls */}
          <div className="lg:col-span-6 bg-white p-5 sm:p-6 rounded-2xl border border-[#E2E8F0] shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1A2E40]">
                SELECT PRACTICE SCALE TO MODEL:
              </span>
              <span className="text-xs text-[#1A2E40] font-semibold flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gradient-to-r from-[#D4AF37]/15 to-[#D4AF37]/10 border border-[#D4AF37]/40">
                <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse shrink-0" />
                <Sliders className="w-3.5 h-3.5 text-[#D4AF37]" /> Live Interactive
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
                    className={`p-3.5 rounded-xl text-left border-2 transition-all text-xs cursor-pointer ${
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
                    <p className="text-[11px] opacity-85 truncate mt-0.5">{sc.stage}</p>
                    <p
                      className={`font-bold mt-1.5 text-sm sm:text-base ${
                        isSelected ? 'text-white' : 'text-[#1A2E40]'
                      }`}
                    >
                      {formatCurrency(sc.monthlyRevenue)}
                      <span className="text-[10px] font-normal opacity-70">/mo</span>
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Live Interactive Revenue Slider / Adjuster */}
            <div className="mt-4 pt-3.5 border-t border-[#E2E8F0]">
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="text-[#1A2E40] font-semibold flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Adjust Monthly Collections:</span>
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
                  step="2500"
                  value={baseRevenue}
                  onChange={(e) => setCustomRevenue(Number(e.target.value))}
                  className="w-full h-2.5 bg-[#E2E8F0] rounded-lg appearance-none cursor-pointer accent-[#D4AF37]"
                  style={{
                    background: `linear-gradient(to right, #D4AF37 0%, #D4AF37 ${((baseRevenue - 30000) / (250000 - 30000)) * 100}%, #E2E8F0 ${((baseRevenue - 30000) / (250000 - 30000)) * 100}%, #E2E8F0 100%)`
                  }}
                />
              </div>
              <div className="flex justify-between text-[10px] text-[#57534E] mt-1">
                <span>$30k/mo</span>
                <span>$140k/mo</span>
                <span>$250k/mo</span>
              </div>
            </div>

            {/* Quick Reporting Period Filter */}
            <div className="mt-3.5 pt-3 border-t border-[#E2E8F0] flex items-center justify-between text-xs">
              <span className="text-[#57534E] font-medium">Reporting Period:</span>
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => {
                    setPeriodMultiplier(1);
                    setPeriodLabel('Monthly');
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs transition-all cursor-pointer ${
                    periodMultiplier === 1
                      ? 'bg-gradient-to-r from-[#D4AF37] to-[#C8A02A] text-[#1A2E40] font-bold shadow-xs'
                      : 'text-[#57534E] hover:text-[#1A2E40] hover:bg-[#F1F5F9]'
                  }`}
                >
                  Monthly View
                </button>
                <button
                  onClick={() => {
                    setPeriodMultiplier(3);
                    setPeriodLabel('Q1 Cumulative');
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs transition-all cursor-pointer ${
                    periodMultiplier === 3
                      ? 'bg-gradient-to-r from-[#D4AF37] to-[#C8A02A] text-[#1A2E40] font-bold shadow-xs'
                      : 'text-[#57534E] hover:text-[#1A2E40] hover:bg-[#F1F5F9]'
                  }`}
                >
                  Q1 Summary (3 Months)
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
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#1A2E40]/5 text-[#1A2E40] border border-[#1A2E40]/10 font-semibold">
                      P&amp;L
                    </span>
                  </h3>
                  <span className="text-[11px] text-[#57534E] bg-[#F1F5F9] px-2.5 py-0.5 rounded-md border border-[#E2E8F0] font-medium">
                    Illustrative Practice Financial Model
                  </span>
                </div>
                <p className="text-xs text-[#57534E] mt-0.5">
                  Sample Financial Model • Illustrative Educational Demonstration
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 text-xs">
            </div>
          </div>

          {/* "Where Every $100 Goes" Visual Allocation Strip */}
          <div className="py-5 border-b border-[#E2E8F0] bg-[#FAF8F5]/80 -mx-5 sm:-mx-8 px-5 sm:px-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2.5">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                <p className="text-xs font-bold uppercase tracking-wider text-[#1A2E40]">
                  Where Every $100 Collected Actually Goes in This Practice:
                </p>
              </div>
              <span className="text-[11px] text-[#57534E]">
                Click any metric below for plain-English practice clarity
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
                title={`Illustrative Operating Surplus: $${surplusPercent} per $100`}
              />
            </div>

            {/* Legend Labels */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mt-2.5 text-xs">
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
                <span className="truncate"><strong>${surplusPercent}</strong> Illustrative Operating Surplus</span>
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
                <p className="text-xs uppercase tracking-wider text-[#57534E] font-semibold">
                  Gross Collections
                </p>
                <Info className="w-3.5 h-3.5 text-[#57534E]/60" />
              </div>
              <p className="text-xl sm:text-2xl lg:text-3xl font-bold font-serif text-[#1A2E40] mt-1 tabular-nums">
                {formatCurrency(animTotalRev)}
              </p>
              <div className="flex items-center gap-1 mt-2 text-[11px] text-[#1A2E40]/80 font-medium">
                <Info className="w-3 h-3 text-[#D4AF37]" />
                <span className="truncate">Reconciled to POS and payment records</span>
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
                <p className="text-xs uppercase tracking-wider text-[#57534E] font-semibold">
                  Treatment COGS
                </p>
                <span className="text-xs font-bold px-1.5 py-0.5 rounded bg-[#D4AF37]/20 text-[#1A2E40]">
                  {currentScenario.cogsPercent}%
                </span>
              </div>
              <p className="text-xl sm:text-2xl lg:text-3xl font-bold font-serif text-[#1A2E40] mt-1 tabular-nums">
                {formatCurrency(animCogs)}
              </p>
              <p className="text-[11px] text-[#57534E] mt-2 truncate">
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
                <p className="text-xs uppercase tracking-wider text-[#57534E] font-semibold">
                  Provider Compensation
                </p>
                <span className="text-xs font-bold px-1.5 py-0.5 rounded bg-[#E2E8F0] text-[#1A2E40]">
                  {currentScenario.providerPayPercent}%
                </span>
              </div>
              <p className="text-xl sm:text-2xl lg:text-3xl font-bold font-serif text-[#1A2E40] mt-1 tabular-nums">
                {formatCurrency(animProviderPay)}
              </p>
              <p className="text-[11px] text-[#57534E] mt-2 truncate">
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
                  <p className="text-xs uppercase tracking-wider text-[#D4AF37] font-bold">
                    Illustrative Operating Surplus
                  </p>
                  <span className="text-xs font-bold px-2 py-0.5 rounded bg-[#D4AF37] text-[#1A2E40]">
                    {surplusPercent}%
                  </span>
                </div>
                <p className="text-xl sm:text-2xl lg:text-3xl font-bold font-serif text-white mt-1 tabular-nums">
                  {formatCurrency(animSurplus)}
                </p>
                <p className="text-[11px] text-[#E2E8F0]/90 mt-2 line-clamp-2">
                  Amount remaining after the expenses included in this simplified model.
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
                title="Learn about illustrative operating surplus"
                aria-label="Learn about illustrative operating surplus"
              >
                <Info className="w-3.5 h-3.5" />
              </button>

              {/* Accessible Tooltip for Surplus Card */}
              {showSurplusTooltip && (
                <div className="absolute z-20 bottom-full left-0 right-0 mb-2 p-3 bg-[#0F172A] text-white text-xs rounded-xl shadow-xl border border-[#D4AF37]/40 leading-relaxed animate-in fade-in">
                  <div className="flex items-start justify-between gap-2">
                    <p className="font-semibold text-[#D4AF37] mb-1">Model Surplus Notice</p>
                    <button 
                      onClick={() => setShowSurplusTooltip(false)}
                      className="text-gray-400 hover:text-white text-[10px]"
                    >
                      ✕
                    </button>
                  </div>
                  <p className="text-gray-200 text-[11px]">
                    This figure represents the simplified arithmetic surplus ({formatCurrency(animTotalRev)} collections − {formatCurrency(animCogs)} COGS − {formatCurrency(animProviderPay)} Provider Pay − {formatCurrency(animOpex)} Operating Expenses = {formatCurrency(animSurplus)}). It is not cash available for owner distributions, and does not account for income taxes, debt service, capital expenditures, or working capital reserves.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Prominent Operating Expenses ($14,800 • 16%) Reconciliation Bar */}
          <div className="mt-4 p-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
              <span className="text-[#1A2E40] font-semibold">Model Expense Allocation ($92,500 Baseline):</span>
            </div>
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs">
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
                Provider Pay: <strong className="text-[#1A2E40] tabular-nums">{formatCurrency(animProviderPay)}</strong> ({currentScenario.providerPayPercent}%)
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
                    <span className="text-[11px] font-normal text-[#57534E] bg-white px-2 py-0.5 rounded border border-[#E2E8F0]">
                      Model Context: {metricExplanations[activeMetric].benchmark}
                    </span>
                  </h4>
                  <span className="text-[11px] text-[#57534E]">
                    Selected for {periodLabel} Model
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                  <div className="p-3 bg-white rounded-lg border border-[#E2E8F0]">
                    <p className="font-bold text-[#1A2E40] mb-1">What It Means Simply</p>
                    <p className="text-[#57534E] leading-relaxed">
                      {metricExplanations[activeMetric].plainEnglish}
                    </p>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-amber-200 bg-amber-50/30">
                    <p className="font-bold text-amber-900 mb-1">Where the Numbers Can Be Misunderstood</p>
                    <p className="text-[#57534E] leading-relaxed">
                      {metricExplanations[activeMetric].commonTrap}
                    </p>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-emerald-200 bg-emerald-50/30">
                    <p className="font-bold text-emerald-900 mb-1">How Monique Reid Helps</p>
                    <p className="text-[#57534E] leading-relaxed">
                      {metricExplanations[activeMetric].solution}
                    </p>
                  </div>
                </div>

                {activeMetric === 'surplus' && (
                  <div className="p-2.5 rounded-lg bg-white border border-[#D4AF37]/30 text-[11px] text-[#57534E] leading-relaxed">
                    <strong className="text-[#1A2E40]">Operating Surplus &amp; Owner Distributions Distinction:</strong>{' '}
                    This illustrative operating surplus reflects the simplified arithmetic remaining after the specific expenses included in this model. It is not cash available for owner distributions. Cash available for owner distributions depends on income taxes, debt principal payments, capital expenditures, working capital requirements, and unmodeled expenses.
                  </div>
                )}

                {activeMetric === 'opex' && (
                  <div className="p-2.5 rounded-lg bg-white border border-[#D4AF37]/30 text-[11px] text-[#57534E] leading-relaxed">
                    <strong className="text-[#1A2E40]">Operating Expenses Classification:</strong>{' '}
                    Routine operating expenses include clinic facility rent, utilities, insurance, merchant processing fees, and software subscriptions. Loan principal payments and certain equipment lease or financing commitments represent balance sheet liabilities and financing items, not operating expenses.
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
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#1A2E40] text-[#D4AF37] hover:text-white text-xs font-semibold hover:bg-[#122230] transition-all cursor-pointer shadow-xs border border-[#D4AF37]/35 active:scale-[0.99]"
              >
                <span>
                  {showDetailedBreakdown
                    ? 'Hide Deep-Dive Line Item Tables'
                    : 'Explore Detailed Practice Line-Item Breakdowns'}
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
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'overview'
                    ? 'bg-[#1A2E40] text-[#D4AF37] shadow-xs'
                    : 'text-[#57534E] hover:text-[#1A2E40] hover:bg-[#F8FAFC]'
                }`}
              >
                Revenue Mix Categorization
              </button>
              <button
                onClick={() => setActiveTab('expenses')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'expenses'
                    ? 'bg-[#1A2E40] text-[#D4AF37] shadow-xs'
                    : 'text-[#57534E] hover:text-[#1A2E40] hover:bg-[#F8FAFC]'
                }`}
              >
                Clinic Expense Breakdown
              </button>
              <button
                onClick={() => setActiveTab('benchmarks')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'benchmarks'
                    ? 'bg-[#1A2E40] text-[#D4AF37] shadow-xs'
                    : 'text-[#57534E] hover:text-[#1A2E40] hover:bg-[#F8FAFC]'
                }`}
              >
                Key Practice Considerations
              </button>
            </div>

            {/* TAB 1: Service Line Revenue Mix Breakdown */}
            {activeTab === 'overview' && (
              <div className="space-y-4">
                <p className="text-xs text-[#57534E] mb-3">
                  Click any service line below to see its gross margin profile and how I record it in QuickBooks:
                </p>

                {/* Injectables */}
                <div 
                  onClick={() => setActiveService(activeService === 'injectables' ? null : 'injectables')}
                  className="p-3 rounded-xl hover:bg-[#FAF8F5] transition-colors cursor-pointer border border-transparent hover:border-[#E2E8F0]"
                >
                  <div className="flex justify-between text-xs font-semibold mb-1.5">
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
                    <div className="mt-2 text-xs bg-white p-2.5 rounded-lg border border-[#E2E8F0] text-[#57534E]">
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
                  <div className="flex justify-between text-xs font-semibold mb-1.5">
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
                    <div className="mt-2 text-xs bg-white p-2.5 rounded-lg border border-[#E2E8F0] text-[#57534E]">
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
                  <div className="flex justify-between text-xs font-semibold mb-1.5">
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
                    <div className="mt-2 text-xs bg-white p-2.5 rounded-lg border border-[#E2E8F0] text-[#57534E]">
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
                  <div className="flex justify-between text-xs font-semibold mb-1.5">
                    <span className="text-[#1A2E40] flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#94A3B8]" />
                      Medical-Grade Skincare Retail (SkinCeuticals, ZO, Alastin)
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
                    <div className="mt-2 text-xs bg-white p-2.5 rounded-lg border border-[#E2E8F0] text-[#57534E]">
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
                  <ul className="text-xs text-[#57534E] space-y-1.5">
                    <li>• Direct clinical products administered (neurotoxins, dermal fillers)</li>
                    <li>• Consumable treatment supplies (syringes, cannulas, sterile gloves)</li>
                    <li>• Distinguishes products purchased from products used or sold</li>
                    <li>• Reporting depends on available inventory counts &amp; accounting method</li>
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
                  <ul className="text-xs text-[#57534E] space-y-1.5">
                    <li>• Direct clinical provider compensation (hourly, commission, or salary)</li>
                    <li>• Distinguished from administrative and front-desk payroll where data permits</li>
                    <li>• Reconciled against collected receipts and practice compensation policy</li>
                    <li>• Note: Worker classification &amp; payroll processing determined by practice advisors</li>
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
                  <ul className="text-xs text-[#57534E] space-y-1.5">
                    <li>• Clinic suite lease, routine utilities, and liability insurance</li>
                    <li>• Practice management, scheduling, and POS software subscriptions</li>
                    <li>• Credit card processing and patient financing platform fees</li>
                    <li>• Excludes loan principal payments and capital equipment acquisitions</li>
                  </ul>
                </div>
              </div>
            )}

            {/* TAB 3: Key Practice Considerations */}
            {activeTab === 'benchmarks' && (
              <div className="space-y-3 pt-2">
                <div className="p-3.5 rounded-xl bg-amber-50/60 border border-amber-200/80 flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                  <div className="text-xs text-[#1A2E40] leading-relaxed">
                    <strong className="text-amber-900 block text-sm mb-1">
                      Consideration #1: Patient Financing &amp; Merchant Fees
                    </strong>
                    When patients pay via credit cards or financing platforms (such as Cherry or CareCredit), processor fees and financing deductions are withheld before net funds deposit into the practice bank account. Recording only net deposits without accounting for gross transaction activity, processor fees, refunds, and financing deductions distorts gross collections and can lead to double-counting or inaccurate provider compensation reporting.
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-amber-50/60 border border-amber-200/80 flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                  <div className="text-xs text-[#1A2E40] leading-relaxed">
                    <strong className="text-amber-900 block text-sm mb-1">
                      Consideration #2: Retail Inventory vs. Clinical Supplies
                    </strong>
                    Skincare products purchased for patient retail resale should be tracked distinctly from internal clinical back-bar supplies used during treatments. Distinguishing inventory purchased from inventory actually sold ensures that cost of goods sold is recognized consistently with the practice&apos;s applicable accounting method, rather than causing artificial monthly profit swings.
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-amber-50/60 border border-amber-200/80 flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                  <div className="text-xs text-[#1A2E40] leading-relaxed">
                    <strong className="text-amber-900 block text-sm mb-1">
                      Consideration #3: Prepaid Packages &amp; Memberships
                    </strong>
                    Membership and package activity can involve timing differences between collections and recognized revenue. When patients purchase multi-treatment packages or monthly memberships, tracking cash collected, outstanding treatment obligations (prepaid balances), and services delivered ensures revenue and provider commissions are recognized in accordance with the practice&apos;s established accounting policies.
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
                <p className="text-xs font-bold text-[#1A2E40] uppercase tracking-wider">
                  Reports Built for Practice Owners, Not Just Accountants
                </p>
                <p className="text-xs sm:text-sm text-[#57534E] mt-1 leading-relaxed">
                  I help organize your aesthetic practice&apos;s financial records and develop clearer reporting across treatment revenue, product costs, provider compensation and operating expenses—so you can better understand your practice&apos;s financial performance.
                </p>
              </div>
            </div>

            <button
              onClick={onBookCall}
              className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#E5C765] to-[#D4AF37] hover:from-[#C8A02A] hover:via-[#D4AF37] hover:to-[#C8A02A] text-[#1A2E40] text-xs sm:text-sm font-bold transition-all shadow-[0_2px_10px_rgba(212,175,55,0.25)] hover:shadow-[0_4px_16px_rgba(212,175,55,0.4)] border border-[#FFF5DE]/60 active:scale-[0.98] group cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5 text-[#1A2E40]" />
              <span>Schedule a Clarity Call</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#1A2E40] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
          </>
          )}

          {/* Subtle Illustrative Disclaimer Footnote */}
          <p className="mt-4 text-center text-[11px] sm:text-xs text-[#57534E]/70 italic">
            *Illustrative financial model only. Figures do not represent actual client results or verified industry benchmarks. Reporting scope and calculations depend on available records, accounting policies and the services agreed upon.
          </p>
        </div>
      </div>
    </section>
  );
};
