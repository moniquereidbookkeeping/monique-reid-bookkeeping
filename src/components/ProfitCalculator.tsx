import React, { useState } from 'react';
import { Calculator, Calendar, ArrowRight } from 'lucide-react';

interface ProfitCalculatorProps {
  onBookCall: () => void;
}

export const ProfitCalculator: React.FC<ProfitCalculatorProps> = ({ onBookCall }) => {
  const [treatmentPrice, setTreatmentPrice] = useState<number>(750);
  const [productCost, setProductCost] = useState<number>(240);
  const [injectorCommission, setInjectorCommission] = useState<number>(28);
  const [merchantFeeRate, setMerchantFeeRate] = useState<number>(3.5);
  const [weeklyVolume, setWeeklyVolume] = useState<number>(25);

  const commissionDollar = (treatmentPrice * injectorCommission) / 100;
  const merchantFeeDollar = (treatmentPrice * merchantFeeRate) / 100;
  const netProfitPerTreatment = treatmentPrice - productCost - commissionDollar - merchantFeeDollar;
  const profitMarginPercent = Math.max(0, Math.round((netProfitPerTreatment / treatmentPrice) * 100));

  const monthlyNet = Math.round(netProfitPerTreatment * weeklyVolume * 4.33);
  const annualNet = Math.round(netProfitPerTreatment * weeklyVolume * 52);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <section id="calculator-section" className="py-16 lg:py-24 bg-[#FDFCFA] border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A2E40]/5 border border-[#1A2E40]/10 text-xs font-semibold tracking-wider text-[#1A2E40] uppercase mb-3">
            <Calculator className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Interactive Practice Tool</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1A2E40]">
            Aesthetic &amp; Wellness Treatment Margin Calculator
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#57534E]">
            Model unit contribution margins per treatment once clinical product COGS,
            provider compensation, and patient financing transaction fees are properly categorized.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Form */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-2xl border border-[#E2E8F0] shadow-sm space-y-6">
            <h3 className="text-lg font-bold text-[#1A2E40] border-b border-[#E2E8F0] pb-3">
              Treatment Variables
            </h3>

            {/* Price Charged */}
            <div>
              <div className="flex justify-between items-center text-sm font-semibold text-[#1A2E40] mb-2">
                <label htmlFor="input-treatment-price">Patient Treatment Price (Per Service)</label>
                <span className="text-[#D4AF37] font-bold text-base">
                  {formatCurrency(treatmentPrice)}
                </span>
              </div>
              <input
                id="input-treatment-price"
                type="range"
                min={100}
                max={2500}
                step={25}
                value={treatmentPrice}
                onChange={(e) => setTreatmentPrice(Number(e.target.value))}
                aria-label="Patient Treatment Price"
                className="w-full accent-[#D4AF37] cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-[#57534E] mt-1">
                <span>$100 (e.g. Wellness Infusion/Botox)</span>
                <span>$1,200 (Full Facial Balancing)</span>
                <span>$2,500</span>
              </div>
            </div>

            {/* Product COGS */}
            <div>
              <div className="flex justify-between items-center text-sm font-semibold text-[#1A2E40] mb-2">
                <label htmlFor="input-product-cost">Product / Vials / Consumables Cost</label>
                <span className="text-[#1A2E40] font-bold text-base">
                  {formatCurrency(productCost)}
                </span>
              </div>
              <input
                id="input-product-cost"
                type="range"
                min={20}
                max={1000}
                step={10}
                value={productCost}
                onChange={(e) => setProductCost(Number(e.target.value))}
                aria-label="Product and Consumables Cost"
                className="w-full accent-[#1A2E40] cursor-pointer"
              />
              <p className="text-[11px] text-[#57534E] mt-1">
                Vials, syringes, IV kits, wellness supplies, topical numbing, and disposables
              </p>
            </div>

            {/* Provider Compensation */}
            <div>
              <div className="flex justify-between items-center text-sm font-semibold text-[#1A2E40] mb-2">
                <label htmlFor="input-injector-commission">Provider Commission Rate (%)</label>
                <span className="text-[#1A2E40] font-bold text-base">
                  {injectorCommission}% ({formatCurrency(commissionDollar)})
                </span>
              </div>
              <input
                id="input-injector-commission"
                type="range"
                min={0}
                max={50}
                step={1}
                value={injectorCommission}
                onChange={(e) => setInjectorCommission(Number(e.target.value))}
                aria-label="Provider Commission Rate Percentage"
                className="w-full accent-[#D4AF37] cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-[#57534E] mt-1">
                <span>0% (Solo Owner)</span>
                <span>25% - 30% (Typical Clinician Tier)</span>
                <span>50%</span>
              </div>
            </div>

            {/* Merchant / Financing Fee */}
            <div>
              <div className="flex justify-between items-center text-sm font-semibold text-[#1A2E40] mb-2">
                <label htmlFor="input-merchant-fee">Merchant / Financing Processing Fee (%)</label>
                <span className="text-[#1A2E40] font-bold text-base">
                  {merchantFeeRate}% ({formatCurrency(merchantFeeDollar)})
                </span>
              </div>
              <input
                id="input-merchant-fee"
                type="range"
                min={1.5}
                max={10}
                step={0.25}
                value={merchantFeeRate}
                onChange={(e) => setMerchantFeeRate(Number(e.target.value))}
                aria-label="Merchant Processing Fee Percentage"
                className="w-full accent-[#1A2E40] cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-[#57534E] mt-1">
                <span>2.6% (Standard Card)</span>
                <span>5.9% (Cherry / CareCredit tier)</span>
                <span>10%</span>
              </div>
            </div>

            {/* Weekly Volume */}
            <div>
              <div className="flex justify-between items-center text-sm font-semibold text-[#1A2E40] mb-2">
                <label htmlFor="input-weekly-volume">Estimated Weekly Treatment Volume</label>
                <span className="text-[#D4AF37] font-bold text-base">
                  {weeklyVolume} sessions/wk
                </span>
              </div>
              <input
                id="input-weekly-volume"
                type="range"
                min={5}
                max={100}
                step={5}
                value={weeklyVolume}
                onChange={(e) => setWeeklyVolume(Number(e.target.value))}
                aria-label="Weekly Treatment Volume"
                className="w-full accent-[#D4AF37] cursor-pointer"
              />
            </div>
          </div>

          {/* Output Summary Card */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-[#1A2E40] text-white p-6 sm:p-8 rounded-2xl border border-[#D4AF37]/30 shadow-xl space-y-6">
              <div className="border-b border-white/10 pb-4">
                <span className="text-xs uppercase font-bold tracking-widest text-[#D4AF37]">
                  Unit Economics Per Treatment
                </span>
                <div className="flex items-baseline justify-between mt-2">
                  <span className="text-2xl sm:text-3xl font-serif font-bold text-white">
                    Net Practice Contribution:
                  </span>
                  <span className="text-3xl sm:text-4xl font-serif font-bold text-[#D4AF37]">
                    {formatCurrency(netProfitPerTreatment)}
                  </span>
                </div>
                <p className="text-xs text-[#E2E8F0] mt-1">
                  Margin: <span className="font-bold text-white">{profitMarginPercent}%</span> of gross service price
                </p>
              </div>

              {/* Breakdown */}
              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex justify-between py-1.5 border-b border-white/10">
                  <span className="text-[#E2E8F0]">Gross Collected Price</span>
                  <span className="font-semibold text-white">{formatCurrency(treatmentPrice)}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-white/10 text-rose-300">
                  <span>- Product &amp; Consumables COGS</span>
                  <span>({formatCurrency(productCost)})</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-white/10 text-amber-300">
                  <span>- Provider Compensation ({injectorCommission}%)</span>
                  <span>({formatCurrency(commissionDollar)})</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-white/10 text-purple-300">
                  <span>- Merchant &amp; Financing Fee ({merchantFeeRate}%)</span>
                  <span>({formatCurrency(merchantFeeDollar)})</span>
                </div>
                <div className="flex justify-between py-2 font-bold text-base text-[#D4AF37]">
                  <span>= Net Contribution to Overhead &amp; Profit</span>
                  <span>{formatCurrency(netProfitPerTreatment)}</span>
                </div>
              </div>

              {/* Volume Projection */}
              <div className="pt-4 border-t border-white/10 grid grid-cols-2 gap-4">
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-center">
                  <span className="text-[11px] text-[#E2E8F0] uppercase tracking-wider block">
                    Est. Monthly Contribution
                  </span>
                  <span className="text-xl sm:text-2xl font-serif font-bold text-white mt-1 block">
                    {formatCurrency(monthlyNet)}
                  </span>
                </div>
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-center">
                  <span className="text-[11px] text-[#E2E8F0] uppercase tracking-wider block">
                    Est. Annual Contribution
                  </span>
                  <span className="text-xl sm:text-2xl font-serif font-bold text-[#D4AF37] mt-1 block">
                    {formatCurrency(annualNet)}
                  </span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onBookCall}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#E5C765] to-[#D4AF37] hover:from-[#C8A02A] hover:via-[#D4AF37] hover:to-[#C8A02A] text-[#1A2E40] font-bold text-sm sm:text-base transition-all shadow-md hover:shadow-lg border border-[#FFF5DE]/60 flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-[#1A2E40]" />
                  <span>Discuss Your Unit Economics With Monique</span>
                  <ArrowRight className="w-4 h-4 text-[#1A2E40] group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            <p className="text-xs text-[#718096] italic text-center leading-relaxed">
              *Illustrative model for educational and planning purposes only. Operating overhead, suite rent, marketing, general liability insurance, software licenses, and taxes are not deducted from unit contribution figures.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
