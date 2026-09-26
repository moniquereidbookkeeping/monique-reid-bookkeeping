import React from 'react';
import { PageView } from '../types';
import { 
  ShieldCheck, 
  ArrowLeft, 
  Calendar, 
  FileText, 
  Lock, 
  Scale, 
  Mail, 
  AlertTriangle, 
  CheckCircle2, 
  Server, 
  ExternalLink,
  Globe,
  Clock
} from 'lucide-react';

interface TermsPageProps {
  onNavigate: (page: PageView) => void;
  onBookCall: () => void;
}

export const TermsPage: React.FC<TermsPageProps> = ({ onNavigate, onBookCall }) => {
  return (
    <div className="bg-[#FDFCFA] text-[#57534E] pb-20">
      {/* Header Banner */}
      <div className="bg-[#1A2E40] text-white py-14 border-b border-[#D4AF37]/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <button
            onClick={() => onNavigate('home')}
            className="inline-flex items-center gap-1.5 text-xs text-[#D4AF37] hover:text-[#E5C765] transition-colors mb-2 group"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
            <span>Back to Home</span>
          </button>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white">
            Terms of Service
          </h1>
          <p className="text-xs sm:text-sm text-[#E2E8F0] font-light">
            Last Updated: September 2026 · Monique Reid Bookkeeping
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-8 text-[#57534E]">
        {/* Intro Card */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E2E8F0] shadow-sm space-y-4">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#1A2E40] text-[#D4AF37] flex items-center justify-center shrink-0">
              <Scale className="w-5 h-5" />
            </div>
            <div className="space-y-3">
              <h2 className="text-xl font-serif font-bold text-[#1A2E40]">
                Terms of Service Agreement
              </h2>
              <p className="text-sm leading-relaxed">
                Welcome to Monique Reid Bookkeeping (&ldquo;Monique Reid Bookkeeping,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;). These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of our website and related online services.
              </p>
              <p className="text-sm leading-relaxed">
                By accessing or using this website, requesting an initial consultation, or submitting information through our website, you agree to these Terms.
              </p>
              <p className="p-3.5 rounded-lg bg-[#1A2E40]/5 border-l-4 border-[#D4AF37] text-xs sm:text-sm text-[#1A2E40] font-medium">
                These website Terms are intended to govern use of the website and general online interactions. Specific bookkeeping and financial reporting engagements are governed by a separate written service agreement or statement of work.
              </p>
            </div>
          </div>
        </div>

        {/* 1. About Monique Reid Bookkeeping */}
        <div className="bg-white p-6 sm:p-7 rounded-2xl border border-[#E2E8F0] shadow-sm space-y-4">
          <h3 className="text-lg sm:text-xl font-serif font-bold text-[#1A2E40] flex items-center gap-2">
            <FileText className="w-5 h-5 text-[#D4AF37]" />
            <span>1. About Monique Reid Bookkeeping</span>
          </h3>
          <p className="text-sm leading-relaxed">
            Monique Reid Bookkeeping is an independent bookkeeping and financial reporting practice operated by Monique Reid, a Certified QuickBooks ProAdvisor with a Bachelor&apos;s degree in Business Administration.
          </p>
          <p className="text-sm leading-relaxed">
            We specialize in bookkeeping and financial organization for MedSpas, aesthetic clinics, IV hydration/wellness practices, medical weight-loss practices, and related businesses.
          </p>
          <div>
            <p className="text-sm font-semibold text-[#1A2E40] mb-2">Our services may include:</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-[#57534E]">
              {[
                'QuickBooks Online setup and organization',
                'Chart-of-accounts support',
                'QuickBooks cleanup and catch-up bookkeeping',
                'Historical bookkeeping cleanup',
                'Monthly bookkeeping',
                'Bank and credit-card reconciliations',
                'Financial reporting',
                'Agreed-upon key performance indicator (KPI) reporting',
                'Financial record organization and historical reporting',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-xs sm:text-sm text-[#57534E] bg-[#FAF8F5] p-3 rounded-lg border border-[#D4AF37]/30">
            The specific services, deliverables, timing, fees and responsibilities for a client engagement will be defined in the applicable service agreement or statement of work.
          </p>
        </div>

        {/* 2. Professional Services Disclaimer */}
        <div className="bg-white p-6 sm:p-7 rounded-2xl border border-[#E2E8F0] shadow-sm space-y-4">
          <h3 className="text-lg sm:text-xl font-serif font-bold text-[#1A2E40] flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-[#D4AF37]" />
            <span>2. Professional Services Disclaimer</span>
          </h3>
          <p className="text-sm leading-relaxed">
            Monique Reid Bookkeeping is an independent bookkeeping and financial reporting practice.
          </p>
          <div>
            <p className="text-sm font-semibold text-[#1A2E40] mb-2">Our services do not constitute:</p>
            <ul className="list-disc list-inside space-y-1 text-sm pl-2">
              <li>CPA audit or attestation services</li>
              <li>Audit opinions</li>
              <li>Tax-return preparation or tax filing</li>
              <li>Legal advice</li>
              <li>Investment advice</li>
              <li>Medical advice</li>
              <li>Medical or regulatory compliance advice</li>
            </ul>
          </div>
          <p className="text-sm leading-relaxed">
            We may work with or provide appropriate financial information to a client&apos;s CPA, tax professional, attorney, lender, or other authorized professional when requested or authorized by the client.
          </p>
          <p className="text-sm leading-relaxed">
            We do not guarantee that our services will result in any particular tax, profitability, financing, investment, revenue, or other business outcome.
          </p>
          <p className="text-xs sm:text-sm text-[#1A2E40] font-medium bg-[#1A2E40]/5 p-3 rounded-lg border-l-4 border-[#D4AF37]">
            Financial reports and KPIs are intended to support business decision-making and should not be interpreted as a guarantee of future performance.
          </p>
        </div>

        {/* 3. Scope of Services */}
        <div className="bg-white p-6 sm:p-7 rounded-2xl border border-[#E2E8F0] shadow-sm space-y-4">
          <h3 className="text-lg sm:text-xl font-serif font-bold text-[#1A2E40] flex items-center gap-2">
            <FileText className="w-5 h-5 text-[#D4AF37]" />
            <span>3. Scope of Services</span>
          </h3>
          <p className="text-sm leading-relaxed">
            Depending on the service selected, Monique Reid Bookkeeping may provide bookkeeping and financial reporting services such as QuickBooks organization, cleanup and catch-up bookkeeping, recurring monthly bookkeeping, account reconciliations, financial reporting, and agreed-upon KPI reporting.
          </p>
          <p className="text-sm leading-relaxed">
            The exact scope of work will be defined before an engagement begins. Services outside the agreed scope may require additional fees and client approval.
          </p>
          <div>
            <p className="text-sm font-semibold text-[#1A2E40] mb-2">
              Examples of work that may require separate scope or pricing include:
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm pl-2">
              <li>extensive historical cleanup</li>
              <li>additional accounts</li>
              <li>materially increased transaction volume</li>
              <li>additional reporting</li>
              <li>new locations or entities</li>
              <li>unusual reconciliation requirements</li>
              <li>specialized projects</li>
            </ul>
          </div>
        </div>

        {/* 4. Client Responsibilities */}
        <div className="bg-white p-6 sm:p-7 rounded-2xl border border-[#E2E8F0] shadow-sm space-y-4">
          <h3 className="text-lg sm:text-xl font-serif font-bold text-[#1A2E40] flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#D4AF37]" />
            <span>4. Client Responsibilities</span>
          </h3>
          <p className="text-sm leading-relaxed">
            Clients are responsible for providing timely, complete and accurate information reasonably necessary for us to perform the agreed services.
          </p>
          <div>
            <p className="text-sm font-semibold text-[#1A2E40] mb-2">Clients agree to:</p>
            <ul className="list-disc list-inside space-y-1 text-sm pl-2">
              <li>Provide accurate and complete financial information.</li>
              <li>Provide timely access to relevant financial accounts and systems.</li>
              <li>Maintain appropriate bank and credit-card records.</li>
              <li>Provide invoices, receipts, statements and other supporting documentation when reasonably requested.</li>
              <li>Respond to questions and requests for clarification in a timely manner.</li>
              <li>Review information provided to us and notify us of known errors or omissions.</li>
              <li>Maintain responsibility for the underlying accuracy and legitimacy of their business transactions.</li>
            </ul>
          </div>
          <p className="text-sm leading-relaxed">
            Where available, clients should provide appropriate delegated, accountant or user access through the relevant third-party platform rather than sharing passwords.
          </p>
          <p className="text-xs sm:text-sm text-[#57534E] bg-[#FAF8F5] p-3 rounded-lg border border-[#D4AF37]/30 font-medium">
            Clients remain responsible for their business decisions and for legal, tax, payroll, licensing, regulatory and operational requirements applicable to their business.
          </p>
        </div>

        {/* 5. Third-Party Platforms and Financial Data */}
        <div className="bg-white p-6 sm:p-7 rounded-2xl border border-[#E2E8F0] shadow-sm space-y-4">
          <h3 className="text-lg sm:text-xl font-serif font-bold text-[#1A2E40] flex items-center gap-2">
            <Server className="w-5 h-5 text-[#D4AF37]" />
            <span>5. Third-Party Platforms and Financial Data</span>
          </h3>
          <div>
            <p className="text-sm leading-relaxed mb-2">Clients may use third-party platforms such as:</p>
            <div className="flex flex-wrap gap-2 text-xs font-semibold text-[#1A2E40]">
              {[
                'QuickBooks Online',
                'Square',
                'Stripe',
                'Boulevard',
                'Zenoti',
                'Vagaro',
                'PatientNow',
                'Other practice-management, payment-processing or financial platforms',
              ].map((p, idx) => (
                <span key={idx} className="px-3 py-1 bg-[#FAF8F5] border border-[#E2E8F0] rounded-lg">
                  {p}
                </span>
              ))}
            </div>
          </div>
          <p className="text-sm leading-relaxed">
            Our access to third-party systems will be limited to the information reasonably necessary to perform the agreed services.
          </p>
          <p className="text-sm leading-relaxed">
            Third-party systems are operated independently by their respective providers. We are not responsible for outages, errors, security incidents, data loss, changes, limitations, or other failures caused by third-party systems outside our reasonable control.
          </p>
        </div>

        {/* 6. Privacy and Sensitive Information */}
        <div className="bg-white p-6 sm:p-7 rounded-2xl border border-[#E2E8F0] shadow-sm space-y-4">
          <h3 className="text-lg sm:text-xl font-serif font-bold text-[#1A2E40] flex items-center gap-2">
            <Lock className="w-5 h-5 text-[#D4AF37]" />
            <span>6. Privacy and Sensitive Information</span>
          </h3>
          <p className="text-sm leading-relaxed">
            Because many of our clients operate healthcare-related or wellness businesses, clients should provide only the financial and business information reasonably necessary for the agreed bookkeeping services.
          </p>
          <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/80 space-y-2">
            <p className="text-xs sm:text-sm font-bold text-amber-900">
              Do not submit through ordinary website forms or unsecured email:
            </p>
            <ul className="list-disc list-inside text-xs sm:text-sm text-amber-900/90 space-y-1 pl-2">
              <li>patient medical records</li>
              <li>treatment notes</li>
              <li>diagnoses</li>
              <li>medical histories</li>
              <li>other protected health information</li>
            </ul>
          </div>
          <p className="text-sm leading-relaxed">
            Monique Reid Bookkeeping does not request patient medical information as part of ordinary bookkeeping services.
          </p>
          <p className="text-sm leading-relaxed">
            Where a particular engagement requires handling protected health information and applicable law requires additional contractual or security measures, the parties will address those requirements through appropriate written agreements and secure processes before such information is accessed.
          </p>
        </div>

        {/* 7. Confidentiality */}
        <div className="bg-white p-6 sm:p-7 rounded-2xl border border-[#E2E8F0] shadow-sm space-y-4">
          <h3 className="text-lg sm:text-xl font-serif font-bold text-[#1A2E40] flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#D4AF37]" />
            <span>7. Confidentiality</span>
          </h3>
          <p className="text-sm leading-relaxed">
            We treat client financial and business information as confidential.
          </p>
          <div>
            <p className="text-sm font-semibold text-[#1A2E40] mb-2">
              We will not intentionally sell or disclose confidential client information to third parties except when:
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm pl-2">
              <li>authorized by the client;</li>
              <li>necessary to provide contracted services;</li>
              <li>required by law;</li>
              <li>necessary to protect our legal rights; or</li>
              <li>otherwise permitted under the applicable service agreement.</li>
            </ul>
          </div>
        </div>

        {/* 8. Information Security */}
        <div className="bg-white p-6 sm:p-7 rounded-2xl border border-[#E2E8F0] shadow-sm space-y-4">
          <h3 className="text-lg sm:text-xl font-serif font-bold text-[#1A2E40] flex items-center gap-2">
            <Lock className="w-5 h-5 text-[#D4AF37]" />
            <span>8. Information Security</span>
          </h3>
          <p className="text-sm leading-relaxed">
            We use commercially reasonable safeguards appropriate to the nature of the information handled in connection with our services.
          </p>
          <div>
            <p className="text-sm font-semibold text-[#1A2E40] mb-2">
              Depending on the system and service involved, safeguards may include:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-[#57534E]">
              {[
                'Multi-factor authentication',
                'Unique passwords',
                'Access controls',
                'Secure password-management tools',
                'Secure cloud accounting platforms',
                'Appropriate device security',
                'Restricted access to client information',
              ].map((s, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-sm leading-relaxed">
            No system or method of electronic transmission can be guaranteed to be completely secure.
          </p>
          <p className="text-xs sm:text-sm text-red-900 bg-red-50/70 p-3 rounded-lg border border-red-200">
            Clients should not send passwords, authentication codes, or other sensitive credentials through ordinary email or website contact forms.
          </p>
        </div>

        {/* 9. Fees, Billing and Payment */}
        <div className="bg-white p-6 sm:p-7 rounded-2xl border border-[#E2E8F0] shadow-sm space-y-4">
          <h3 className="text-lg sm:text-xl font-serif font-bold text-[#1A2E40] flex items-center gap-2">
            <Calendar className="w-5 h-5 text-[#D4AF37]" />
            <span>9. Fees, Billing and Payment</span>
          </h3>
          <p className="text-sm leading-relaxed">
            Fees are determined based on the scope and complexity of the services agreed upon with each client.
          </p>
          <div className="space-y-3">
            <div>
              <h4 className="text-sm font-bold text-[#1A2E40]">Monthly Services</h4>
              <p className="text-sm">Recurring monthly services may be billed in advance according to the applicable service agreement.</p>
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#1A2E40]">Cleanup and Project Services</h4>
              <p className="text-sm">Cleanup, setup, catch-up, and other project-based services may require a deposit or initial payment before work begins.</p>
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#1A2E40]">Additional Work</h4>
              <p className="text-sm">Work outside the agreed scope may require a separate fee or written change to the engagement.</p>
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#1A2E40]">Payment</h4>
              <p className="text-sm">Accepted payment methods may include ACH, credit card, or other methods made available by Monique Reid Bookkeeping.</p>
            </div>
          </div>
        </div>

        {/* 10. Cancellation and Termination */}
        <div className="bg-white p-6 sm:p-7 rounded-2xl border border-[#E2E8F0] shadow-sm space-y-4">
          <h3 className="text-lg sm:text-xl font-serif font-bold text-[#1A2E40] flex items-center gap-2">
            <Clock className="w-5 h-5 text-[#D4AF37]" />
            <span>10. Cancellation and Termination</span>
          </h3>
          <p className="text-sm leading-relaxed">
            The cancellation or termination terms for a specific bookkeeping engagement will be stated in the applicable service agreement.
          </p>
          <p className="text-sm leading-relaxed">
            Unless otherwise agreed in writing, ongoing monthly services may require written notice before termination. Any fees for services performed or expenses incurred before the effective termination date remain due.
          </p>
          <div>
            <p className="text-sm font-semibold text-[#1A2E40] mb-2">We may suspend or terminate services when:</p>
            <ul className="list-disc list-inside space-y-1 text-sm pl-2">
              <li>required information is repeatedly unavailable;</li>
              <li>invoices remain unpaid;</li>
              <li>the client materially breaches the applicable agreement;</li>
              <li>continued service would create legal, ethical, security, or operational concerns; or</li>
              <li>otherwise permitted by the applicable agreement or law.</li>
            </ul>
          </div>
        </div>

        {/* 11. Financial Reports and Client Review */}
        <div className="bg-white p-6 sm:p-7 rounded-2xl border border-[#E2E8F0] shadow-sm space-y-3">
          <h3 className="text-lg sm:text-xl font-serif font-bold text-[#1A2E40] flex items-center gap-2">
            <FileText className="w-5 h-5 text-[#D4AF37]" />
            <span>11. Financial Reports and Client Review</span>
          </h3>
          <p className="text-sm leading-relaxed">
            Bookkeeping records and financial reports are prepared using information and records made available to us by the client and relevant third-party systems.
          </p>
          <p className="text-sm leading-relaxed">
            Clients are responsible for reviewing financial information provided to them and bringing known errors or discrepancies to our attention.
          </p>
          <p className="text-sm leading-relaxed">
            Our reports are not audits or independent examinations. We do not provide assurance that a client&apos;s financial records are free of fraud, error or misstatement.
          </p>
        </div>

        {/* 12. No Guarantee of Results */}
        <div className="bg-white p-6 sm:p-7 rounded-2xl border border-[#E2E8F0] shadow-sm space-y-3">
          <h3 className="text-lg sm:text-xl font-serif font-bold text-[#1A2E40] flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-[#D4AF37]" />
            <span>12. No Guarantee of Results</span>
          </h3>
          <p className="text-sm leading-relaxed">
            Monique Reid Bookkeeping does not guarantee any particular financial, tax, profitability, revenue, financing, investment, or business outcome as a result of our services.
          </p>
          <p className="text-sm leading-relaxed">
            Financial reports and KPIs are intended to support business decision-making and should not be interpreted as a guarantee of future performance.
          </p>
          <p className="text-sm leading-relaxed font-medium text-[#1A2E40]">
            We do not guarantee increased revenue, increased profitability, successful financing, successful sale or acquisition, tax savings, investment returns, business growth, or any other specific financial or business outcome.
          </p>
        </div>

        {/* 13. Limitation of Responsibility for Client-Provided Information */}
        <div className="bg-white p-6 sm:p-7 rounded-2xl border border-[#E2E8F0] shadow-sm space-y-4">
          <h3 className="text-lg sm:text-xl font-serif font-bold text-[#1A2E40] flex items-center gap-2">
            <Scale className="w-5 h-5 text-[#D4AF37]" />
            <span>13. Limitation of Responsibility for Client-Provided Information</span>
          </h3>
          <p className="text-sm leading-relaxed">
            Our services rely on information provided by the client and information available through third-party systems.
          </p>
          <div>
            <p className="text-sm font-semibold text-[#1A2E40] mb-2">
              We are not responsible for losses, penalties, interest, tax consequences, or other consequences arising primarily from:
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm pl-2">
              <li>inaccurate information supplied by the client;</li>
              <li>incomplete records;</li>
              <li>delayed documentation;</li>
              <li>unauthorized transactions;</li>
              <li>fraudulent information supplied by the client;</li>
              <li>incorrect information maintained by third-party systems; or</li>
              <li>circumstances outside our reasonable control.</li>
            </ul>
          </div>
          <p className="text-xs sm:text-sm text-[#57534E]">
            Any specific limitation of liability applicable to a paid engagement will be stated in the applicable client service agreement.
          </p>
        </div>

        {/* 14. Website Information */}
        <div className="bg-white p-6 sm:p-7 rounded-2xl border border-[#E2E8F0] shadow-sm space-y-3">
          <h3 className="text-lg sm:text-xl font-serif font-bold text-[#1A2E40] flex items-center gap-2">
            <Globe className="w-5 h-5 text-[#D4AF37]" />
            <span>14. Website Information</span>
          </h3>
          <p className="text-sm leading-relaxed">
            Information published on this website is provided for general informational purposes.
          </p>
          <div>
            <p className="text-sm font-semibold text-[#1A2E40] mb-1">Website content should not be interpreted as:</p>
            <ul className="list-disc list-inside space-y-0.5 text-sm pl-2">
              <li>tax advice;</li>
              <li>legal advice;</li>
              <li>medical advice;</li>
              <li>investment advice; or</li>
              <li>a substitute for advice from an appropriately licensed professional.</li>
            </ul>
          </div>
          <p className="text-xs sm:text-sm text-[#57534E]">
            Information on this website may be updated or changed without notice.
          </p>
        </div>

        {/* 15. Intellectual Property */}
        <div className="bg-white p-6 sm:p-7 rounded-2xl border border-[#E2E8F0] shadow-sm space-y-3">
          <h3 className="text-lg sm:text-xl font-serif font-bold text-[#1A2E40] flex items-center gap-2">
            <FileText className="w-5 h-5 text-[#D4AF37]" />
            <span>15. Intellectual Property</span>
          </h3>
          <p className="text-sm leading-relaxed">
            Unless otherwise stated, the website and its content—including text, branding, graphics, designs, logos, photographs, layouts, downloadable materials, and original resources—are owned by or licensed to Monique Reid Bookkeeping.
          </p>
          <p className="text-sm leading-relaxed">
            You may not reproduce, modify, redistribute, sell, or commercially exploit our website content or proprietary materials without written permission.
          </p>
          <p className="text-xs sm:text-sm text-[#57534E]">
            This does not restrict materials that are expressly offered by us for licensed or permitted client use.
          </p>
        </div>

        {/* 16. External Links */}
        <div className="bg-white p-6 sm:p-7 rounded-2xl border border-[#E2E8F0] shadow-sm space-y-3">
          <h3 className="text-lg sm:text-xl font-serif font-bold text-[#1A2E40] flex items-center gap-2">
            <ExternalLink className="w-5 h-5 text-[#D4AF37]" />
            <span>16. External Links</span>
          </h3>
          <p className="text-sm leading-relaxed">
            Our website may contain links to third-party websites, software platforms, service providers, or resources. These links are provided for convenience.
          </p>
          <p className="text-sm leading-relaxed">
            Monique Reid Bookkeeping does not control and is not responsible for the content, policies, security, availability, or practices of third-party websites.
          </p>
        </div>

        {/* 17. Website Availability */}
        <div className="bg-white p-6 sm:p-7 rounded-2xl border border-[#E2E8F0] shadow-sm space-y-3">
          <h3 className="text-lg sm:text-xl font-serif font-bold text-[#1A2E40] flex items-center gap-2">
            <Globe className="w-5 h-5 text-[#D4AF37]" />
            <span>17. Website Availability</span>
          </h3>
          <p className="text-sm leading-relaxed">
            We do not guarantee that the website will always be available, uninterrupted, error-free, or free of technical issues. We may modify, suspend or discontinue website features or content at any time.
          </p>
        </div>

        {/* 18. Electronic Communications */}
        <div className="bg-white p-6 sm:p-7 rounded-2xl border border-[#E2E8F0] shadow-sm space-y-3">
          <h3 className="text-lg sm:text-xl font-serif font-bold text-[#1A2E40] flex items-center gap-2">
            <Mail className="w-5 h-5 text-[#D4AF37]" />
            <span>18. Electronic Communications</span>
          </h3>
          <p className="text-sm leading-relaxed">
            By contacting us or submitting information through our website, you consent to receive communications reasonably necessary to respond to your inquiry or provide requested information.
          </p>
          <p className="text-sm leading-relaxed">
            Marketing communications will be handled in accordance with applicable law and any applicable consent requirements. You may unsubscribe from marketing communications when an unsubscribe option is provided.
          </p>
        </div>

        {/* 19. Governing Law */}
        <div className="bg-white p-6 sm:p-7 rounded-2xl border border-[#E2E8F0] shadow-sm space-y-3">
          <h3 className="text-lg sm:text-xl font-serif font-bold text-[#1A2E40] flex items-center gap-2">
            <Scale className="w-5 h-5 text-[#D4AF37]" />
            <span>19. Governing Law</span>
          </h3>
          <p className="text-sm leading-relaxed">
            These website Terms will be governed by the laws applicable in the State of Florida, without regard to conflict-of-law principles, unless applicable law requires otherwise.
          </p>
          <p className="text-sm leading-relaxed">
            Any dispute relating specifically to use of this website will be handled in the manner required by applicable law. Specific client service agreements may contain additional dispute-resolution provisions.
          </p>
        </div>

        {/* 20. Changes to These Terms */}
        <div className="bg-white p-6 sm:p-7 rounded-2xl border border-[#E2E8F0] shadow-sm space-y-3">
          <h3 className="text-lg sm:text-xl font-serif font-bold text-[#1A2E40] flex items-center gap-2">
            <Clock className="w-5 h-5 text-[#D4AF37]" />
            <span>20. Changes to These Terms</span>
          </h3>
          <p className="text-sm leading-relaxed">
            We may update these Terms from time to time. When we make changes, the updated version will be posted on this page with a revised &ldquo;Last Updated&rdquo; date.
          </p>
          <p className="text-sm leading-relaxed">
            Your continued use of the website after changes are posted constitutes acceptance of the updated Terms to the extent permitted by law.
          </p>
        </div>

        {/* 21. Contact */}
        <div className="bg-[#1A2E40] p-6 sm:p-8 rounded-2xl text-white space-y-4 border border-[#D4AF37]/30 shadow-lg">
          <h3 className="text-xl font-serif font-bold text-white">
            21. Contact
          </h3>
          <div className="space-y-1 text-sm text-[#E2E8F0]">
            <p className="font-bold text-white text-base">Monique Reid Bookkeeping</p>
            <p>Founder: Monique Reid</p>
            <p>
              Website:{' '}
              <a
                href="https://moniquereidbookkeeping.com"
                className="text-[#D4AF37] hover:underline"
              >
                https://moniquereidbookkeeping.com
              </a>
            </p>
            <p>
              Email:{' '}
              <a
                href="mailto:monique@moniquereidbookkeeping.com"
                className="text-[#D4AF37] hover:underline"
              >
                monique@moniquereidbookkeeping.com
              </a>
            </p>
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-[#E2E8F0]/70">
              Questions regarding these Terms or our bookkeeping services?
            </p>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <a
                href="mailto:monique@moniquereidbookkeeping.com"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-all w-full sm:w-auto"
              >
                <Mail className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Email Us</span>
              </a>
              <button
                onClick={onBookCall}
                className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#E5C765] to-[#D4AF37] hover:from-[#C8A02A] hover:via-[#D4AF37] hover:to-[#C8A02A] text-[#1A2E40] font-bold text-xs transition-all shadow-md w-full sm:w-auto"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Schedule Call</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
