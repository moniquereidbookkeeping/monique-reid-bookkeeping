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

  // Dollar lines are rounded first so the breakdown always adds up exactly as shown.
  const commissionDollar = Math.round((treatmentPrice * injectorCommission) / 100);
  const merchantFeeDollar = Math.round((treatmentPrice * merchantFeeRate) / 100);
  const netProfitPerTreatment = treatmentPrice - productCost - commissionDollar - merchantFeeDollar;
  const profitMarginPercent = Math.round((netProfitPerTreatment / treatmentPrice) * 100);

  const annualNet = Math.round(netProfitPerTreatment * weeklyVolume * 52);
  const monthlyNet = Math.round(annualNet / 12);

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
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1A2E40] text-[#D4AF37] text-sm font-bold uppercase tracking-widest mb-3">
            <Calculator className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Free Interactive Tool</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1A2E40]">
            See What Each Treatment Contributes
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#57534E]">
            Adjust the sliders to see what is left from a single treatment after product cost, provider pay and payment fees. The starting numbers are an example, such as a neurotoxin treatment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Form */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-2xl border border-[#E2E8F0] shadow-sm space-y-6">
            <h3 className="text-lg font-bold text-[#1A2E40] border-b border-[#E2E8F0] pb-3">
              Treatment Details
            </h3>

            {/* Price Charged */}
            <div>
              <div className="flex justify-between items-center text-sm font-semibold text-[#1A2E40] mb-2">
                <label htmlFor="input-treatment-price">Treatment price</label>
                <span className="text-[#8A6A00] font-bold text-base">
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
              <div className="flex justify-between text-sm text-[#57534E] mt-1">
                <span>$100</span>
                <span>$1,300</span>
                <span>$2,500</span>
              </div>
            </div>

            {/* Product COGS */}
            <div>
              <div className="flex justify-between items-center text-sm font-semibold text-[#1A2E40] mb-2">
                <label htmlFor="input-product-cost">Product and supply cost</label>
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
              <p className="text-sm text-[#57534E] mt-1">
                Vials, syringes, IV kits, numbing and other disposables used in this treatment
              </p>
            </div>

            {/* Provider Compensation */}
            <div>
              <div className="flex justify-between items-center text-sm font-semibold text-[#1A2E40] mb-2">
                <label htmlFor="input-injector-commission">Provider commission</label>
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
              <div className="flex justify-between text-sm text-[#57534E] mt-1">
                <span>0% (no commission)</span>
                <span>25%</span>
                <span>50%</span>
              </div>
            </div>

            {/* Merchant / Financing Fee */}
            <div>
              <div className="flex justify-between items-center text-sm font-semibold text-[#1A2E40] mb-2">
                <label htmlFor="input-merchant-fee">Payment and financing fee</label>
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
              <div className="flex justify-between text-sm text-[#57534E] mt-1">
                <span>1.5%</span>
                <span>5.75%</span>
                <span>10%</span>
              </div>
            </div>

            {/* Weekly Volume */}
            <div>
              <div className="flex justify-between items-center text-sm font-semibold text-[#1A2E40] mb-2">
                <label htmlFor="input-weekly-volume">Treatments like this per week</label>
                <span className="text-[#8A6A00] font-bold text-base">
                  {weeklyVolume} per week
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
                <span className="text-sm uppercase font-bold tracking-widest text-[#D4AF37]">
                  Per treatment
                </span>
                <div className="flex items-baseline justify-between mt-2">
                  <span className="text-2xl sm:text-3xl font-serif font-bold text-white">
                    Contribution:
                  </span>
                  <span className="text-3xl sm:text-4xl font-serif font-bold text-[#D4AF37]">
                    {formatCurrency(netProfitPerTreatment)}
                  </span>
                </div>
                <p className="text-sm text-[#E2E8F0] mt-1">
                  Contribution margin: <span className="font-bold text-white">{profitMarginPercent}%</span> of the treatment price
                </p>
              </div>

              {netProfitPerTreatment < 0 && (
                <p className="text-sm text-rose-300 bg-rose-500/10 border border-rose-400/30 rounded-lg px-3 py-2">
                  At these settings this treatment loses money before any overhead is counted.
                </p>
              )}

              {/* Breakdown */}
              <div className="space-y-3 text-sm">
                <div className="flex justify-between py-1.5 border-b border-white/10">
                  <span className="text-[#E2E8F0]">Treatment price</span>
                  <span className="font-semibold text-white">{formatCurrency(treatmentPrice)}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-white/10 text-rose-300">
                  <span>− Product and supplies</span>
                  <span>({formatCurrency(productCost)})</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-white/10 text-amber-300">
                  <span>− Provider commission ({injectorCommission}%)</span>
                  <span>({formatCurrency(commissionDollar)})</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-white/10 text-purple-300">
                  <span>− Payment and financing fee ({merchantFeeRate}%)</span>
                  <span>({formatCurrency(merchantFeeDollar)})</span>
                </div>
                <div className="flex justify-between py-2 font-bold text-base text-[#D4AF37]">
                  <span>= Contribution to overhead and profit</span>
                  <span>{formatCurrency(netProfitPerTreatment)}</span>
                </div>
              </div>

              {/* Volume Projection */}
              <div className="pt-4 border-t border-white/10 grid grid-cols-2 gap-4">
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-center">
                  <span className="text-sm text-[#E2E8F0] uppercase tracking-wider block">
                    Monthly estimate
                  </span>
                  <span className="text-xl sm:text-2xl font-serif font-bold text-white mt-1 block">
                    {formatCurrency(monthlyNet)}
                  </span>
                </div>
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-center">
                  <span className="text-sm text-[#E2E8F0] uppercase tracking-wider block">
                    Annual estimate
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
                  <span>Book Your Free 20-Min Clarity Call</span>
                  <ArrowRight className="w-4 h-4 text-[#1A2E40] group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            <p className="text-sm text-[#5A6578] text-center leading-relaxed">
              This is an illustrative estimate for planning only. Contribution is what remains before rent, marketing, insurance, software, staff and taxes. Monthly and annual figures assume the same number of treatments every week of the year. Check your own processor and financing statements for your actual fees.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
