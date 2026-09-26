import React from 'react';
import { PageView } from '../types';
import { 
  ShieldCheck, 
  ArrowLeft, 
  Calendar, 
  FileText, 
  Lock, 
  Mail, 
  AlertTriangle, 
  CheckCircle2, 
  Server, 
  ExternalLink,
  Globe,
  Clock,
  Database,
  Eye,
  Shield,
  Trash2
} from 'lucide-react';

interface PrivacyPageProps {
  onNavigate: (page: PageView) => void;
  onBookCall: () => void;
}

export const PrivacyPage: React.FC<PrivacyPageProps> = ({ onNavigate, onBookCall }) => {
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
            Privacy Policy
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
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="space-y-3">
              <h2 className="text-xl font-serif font-bold text-[#1A2E40]">
                Our Privacy Commitment
              </h2>
              <p className="text-sm leading-relaxed">
                At Monique Reid Bookkeeping (&ldquo;Monique Reid Bookkeeping,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;), we respect your privacy and take the confidentiality and security of information entrusted to us seriously.
              </p>
              <p className="text-sm leading-relaxed">
                This Privacy Policy explains how we collect, use, disclose, retain, and protect information when you visit our website, contact us, schedule a consultation, submit information through our website, or engage our bookkeeping and financial reporting services.
              </p>
              <p className="p-3.5 rounded-lg bg-[#1A2E40]/5 border-l-4 border-[#D4AF37] text-xs sm:text-sm text-[#1A2E40] font-medium">
                This Policy applies to information collected through our website and related business interactions. Specific client information-handling obligations may also be governed by the applicable client service agreement and other written agreements.
              </p>
            </div>
          </div>
        </div>

        {/* 1. Information We Collect */}
        <div className="bg-white p-6 sm:p-7 rounded-2xl border border-[#E2E8F0] shadow-sm space-y-4">
          <h3 className="text-lg sm:text-xl font-serif font-bold text-[#1A2E40] flex items-center gap-2">
            <Eye className="w-5 h-5 text-[#D4AF37]" />
            <span>1. Information We Collect</span>
          </h3>
          <p className="text-sm leading-relaxed">
            We collect information that is reasonably necessary to operate our website, respond to inquiries, schedule consultations, provide bookkeeping services, communicate with clients, and administer our business.
          </p>
          <div className="space-y-2 pt-1">
            <h4 className="text-sm font-bold text-[#1A2E40]">A. Contact and Consultation Information</h4>
            <p className="text-sm leading-relaxed">
              When you contact us, submit an inquiry, or schedule a Financial Clarity Call, we may collect:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-[#57534E] pt-1">
              {[
                'Full name',
                'Business/practice name',
                'Business email address',
                'Phone number',
                'Practice type',
                'Website or social-media information you voluntarily provide',
                'Information about your bookkeeping needs',
                'Information you provide during an inquiry or consultation',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm leading-relaxed pt-2">
              We use this information to respond to your inquiry, schedule and conduct consultations, evaluate whether our services are appropriate for your needs, and communicate with you.
            </p>
          </div>
        </div>

        {/* 2. Client and Financial Information */}
        <div className="bg-white p-6 sm:p-7 rounded-2xl border border-[#E2E8F0] shadow-sm space-y-4">
          <h3 className="text-lg sm:text-xl font-serif font-bold text-[#1A2E40] flex items-center gap-2">
            <Database className="w-5 h-5 text-[#D4AF37]" />
            <span>2. Client and Financial Information</span>
          </h3>
          <p className="text-sm leading-relaxed">
            When you engage our bookkeeping services, we may receive or access business and financial information necessary to perform the agreed services.
          </p>
          <div>
            <p className="text-sm font-semibold text-[#1A2E40] mb-2">Depending on the engagement, this may include:</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-[#57534E]">
              {[
                'QuickBooks Online information',
                'Bank and credit-card statements',
                'Transaction information',
                'Merchant-processor settlement reports',
                'Payroll summaries',
                'Vendor invoices and bills',
                'Loan information and schedules',
                'Revenue and expense information',
                'Accounts receivable and accounts payable information',
                'Financial reports',
                'Business operating information',
                'Other records specifically required by the agreed scope of work',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-xs sm:text-sm text-[#1A2E40] font-medium bg-[#FAF8F5] p-3 rounded-lg border border-[#D4AF37]/30">
            We seek to access and retain only information reasonably necessary to provide the contracted services. This approach is consistent with FTC guidance encouraging businesses to limit the sensitive information they collect and retain to what they actually need.
          </p>
        </div>

        {/* 3. Patient Information and Protected Health Information */}
        <div className="bg-white p-6 sm:p-7 rounded-2xl border border-[#E2E8F0] shadow-sm space-y-4">
          <h3 className="text-lg sm:text-xl font-serif font-bold text-[#1A2E40] flex items-center gap-2">
            <Lock className="w-5 h-5 text-[#D4AF37]" />
            <span>3. Patient Information and Protected Health Information</span>
          </h3>
          <p className="text-sm leading-relaxed">
            Monique Reid Bookkeeping provides bookkeeping and financial reporting services to businesses such as MedSpas, aesthetic clinics and wellness practices.
          </p>
          <p className="text-sm leading-relaxed font-semibold text-[#1A2E40]">
            Our ordinary bookkeeping services are designed to work with financial and business information, not patient medical records.
          </p>
          <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/80 space-y-2">
            <p className="text-xs sm:text-sm font-bold text-amber-900">
              Please do not submit the following through our website, ordinary email, or other unsecured communication methods:
            </p>
            <ul className="list-disc list-inside text-xs sm:text-sm text-amber-900/90 space-y-1 pl-2">
              <li>Patient medical records</li>
              <li>Diagnoses</li>
              <li>Treatment notes</li>
              <li>Clinical photographs</li>
              <li>Medical histories</li>
              <li>Insurance/clinical documentation</li>
              <li>Other Protected Health Information (&ldquo;PHI&rdquo;)</li>
            </ul>
          </div>
          <p className="text-sm leading-relaxed">
            Where financial information can be obtained from a practice-management, electronic health record, point-of-sale, or payment-processing system without providing unnecessary patient information, we will seek to use the financial information reasonably necessary for the engagement.
          </p>
          <p className="text-sm leading-relaxed">
            For example, depending on the client&apos;s systems and agreed scope, this may include aggregate revenue totals, settlement batches, transaction summaries, or other financial reports.
          </p>
          <div className="p-3.5 rounded-lg bg-[#1A2E40]/5 border-l-4 border-[#D4AF37] space-y-1 text-xs sm:text-sm">
            <p className="font-bold text-[#1A2E40]">HIPAA</p>
            <p className="text-[#57534E]">
              If a particular engagement involves creating, receiving, maintaining, or transmitting PHI and Monique Reid Bookkeeping is acting as a HIPAA business associate, the parties will address applicable HIPAA requirements through appropriate written agreements and safeguards before such information is handled. HHS explains that accounting services can fall within the business-associate framework when they involve PHI.
            </p>
          </div>
        </div>

        {/* 4. How We Use Information */}
        <div className="bg-white p-6 sm:p-7 rounded-2xl border border-[#E2E8F0] shadow-sm space-y-4">
          <h3 className="text-lg sm:text-xl font-serif font-bold text-[#1A2E40] flex items-center gap-2">
            <FileText className="w-5 h-5 text-[#D4AF37]" />
            <span>4. How We Use Information</span>
          </h3>
          <p className="text-sm leading-relaxed">
            We use collected information for legitimate business purposes, including:
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-[#57534E]">
            {[
              'Responding to inquiries',
              'Scheduling consultations',
              'Communicating with prospective and existing clients',
              'Performing agreed bookkeeping services',
              'Reconciling financial accounts',
              'Organizing bookkeeping records',
              'Preparing agreed financial reports',
              'Preparing agreed KPI reports',
              'Communicating about transactions, documentation, and bookkeeping questions',
              "Coordinating with a client's CPA, tax professional, or other authorized advisor when requested or authorized",
              'Processing payments',
              'Providing customer support',
              'Maintaining and improving our website',
              'Protecting the security and integrity of our systems',
              'Complying with legal and contractual obligations',
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-sm font-semibold text-[#1A2E40] pt-2">
            We do not sell client bookkeeping records or financial information to advertising networks or data brokers.
          </p>
        </div>

        {/* 5. Information Sharing */}
        <div className="bg-white p-6 sm:p-7 rounded-2xl border border-[#E2E8F0] shadow-sm space-y-4">
          <h3 className="text-lg sm:text-xl font-serif font-bold text-[#1A2E40] flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#D4AF37]" />
            <span>5. Information Sharing</span>
          </h3>
          <p className="text-sm leading-relaxed font-semibold text-[#1A2E40]">
            We do not sell or rent your personal information or client financial information.
          </p>
          <p className="text-sm leading-relaxed">
            We may disclose information when reasonably necessary to:
          </p>
          <div className="space-y-3 text-sm">
            <div className="p-3 rounded-lg bg-[#FAF8F5] border border-[#E2E8F0]">
              <p className="font-bold text-[#1A2E40]">Provide our services</p>
              <p className="text-[#57534E] mt-0.5">
                For example, we may use technology providers and platforms necessary to deliver bookkeeping, scheduling, communication, document-management, payment-processing, or related services.
              </p>
            </div>
            <div className="p-3 rounded-lg bg-[#FAF8F5] border border-[#E2E8F0]">
              <p className="font-bold text-[#1A2E40]">Follow your instructions</p>
              <p className="text-[#57534E] mt-0.5">
                We may share information with your CPA, tax professional, attorney, lender, consultant, or other authorized professional when you request or authorize us to do so.
              </p>
            </div>
            <div className="p-3 rounded-lg bg-[#FAF8F5] border border-[#E2E8F0]">
              <p className="font-bold text-[#1A2E40]">Meet legal obligations</p>
              <p className="text-[#57534E] mt-0.5">
                We may disclose information when required by applicable law, legal process, court order, or other lawful requirement.
              </p>
            </div>
            <div className="p-3 rounded-lg bg-[#FAF8F5] border border-[#E2E8F0]">
              <p className="font-bold text-[#1A2E40]">Protect rights and security</p>
              <p className="text-[#57534E] mt-0.5">
                We may disclose information when reasonably necessary to protect our rights, property, systems, clients, or others, or to investigate suspected fraud, abuse, or security incidents.
              </p>
            </div>
          </div>
        </div>

        {/* 6. Third-Party Technology Providers */}
        <div className="bg-white p-6 sm:p-7 rounded-2xl border border-[#E2E8F0] shadow-sm space-y-4">
          <h3 className="text-lg sm:text-xl font-serif font-bold text-[#1A2E40] flex items-center gap-2">
            <Server className="w-5 h-5 text-[#D4AF37]" />
            <span>6. Third-Party Technology Providers</span>
          </h3>
          <p className="text-sm leading-relaxed">
            We use third-party technology providers to operate portions of our business. Depending on the services you use or the services we provide, these may include:
          </p>
          <ul className="list-disc list-inside space-y-1.5 text-sm pl-2">
            <li><strong>QuickBooks Online / Intuit</strong> — bookkeeping and accounting platform</li>
            <li><strong>Calendly</strong> — scheduling</li>
            <li><strong>Google Workspace</strong> — business email, calendar, documents, and collaboration</li>
            <li><strong>Stripe or other payment processors</strong> — payment processing</li>
            <li><strong>Cloudflare</strong> — website hosting, DNS, security and related infrastructure</li>
            <li><strong>Other providers</strong> reasonably necessary to operate the business</li>
          </ul>
          <p className="text-sm leading-relaxed">
            These providers may process information on our behalf according to their own terms and privacy policies.
          </p>
          <p className="text-xs sm:text-sm text-[#57534E]">
            We encourage you to review the privacy and security practices of third-party services you use.
          </p>
        </div>

        {/* 7. Website and Technical Information */}
        <div className="bg-white p-6 sm:p-7 rounded-2xl border border-[#E2E8F0] shadow-sm space-y-4">
          <h3 className="text-lg sm:text-xl font-serif font-bold text-[#1A2E40] flex items-center gap-2">
            <Globe className="w-5 h-5 text-[#D4AF37]" />
            <span>7. Website and Technical Information</span>
          </h3>
          <p className="text-sm leading-relaxed">
            When you visit our website, certain technical information may be collected automatically by our hosting, security, analytics, or other website infrastructure.
          </p>
          <div>
            <p className="text-sm font-semibold text-[#1A2E40] mb-2">Depending on the services enabled, this may include:</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-semibold text-[#1A2E40]">
              {[
                'IP address',
                'Browser type',
                'Device type',
                'Operating system',
                'Referring URL',
                'Pages viewed',
                'Date and time of access',
                'Basic technical & performance information',
              ].map((p, idx) => (
                <span key={idx} className="px-3 py-1.5 bg-[#FAF8F5] border border-[#E2E8F0] rounded-lg text-center">
                  {p}
                </span>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold text-[#1A2E40] mb-1">We use this information for purposes such as:</p>
            <ul className="list-disc list-inside space-y-0.5 text-sm pl-2">
              <li>Website operation</li>
              <li>Security</li>
              <li>Troubleshooting</li>
              <li>Performance monitoring</li>
              <li>Preventing abuse</li>
              <li>Understanding general website usage</li>
            </ul>
          </div>
          <p className="text-xs sm:text-sm font-medium text-[#1A2E40] bg-[#FAF8F5] p-3 rounded-lg border border-[#D4AF37]/30">
            We do not use technical information to create a financial profile of visitors.
          </p>
        </div>

        {/* 8. Cookies and Similar Technologies */}
        <div className="bg-white p-6 sm:p-7 rounded-2xl border border-[#E2E8F0] shadow-sm space-y-3">
          <h3 className="text-lg sm:text-xl font-serif font-bold text-[#1A2E40] flex items-center gap-2">
            <FileText className="w-5 h-5 text-[#D4AF37]" />
            <span>8. Cookies and Similar Technologies</span>
          </h3>
          <p className="text-sm leading-relaxed">
            Our website may use cookies or similar technologies that are necessary for website operation, security, functionality, analytics, or other legitimate business purposes.
          </p>
          <p className="text-sm leading-relaxed">
            Where required by applicable law, appropriate consent mechanisms will be provided for non-essential cookies or tracking technologies. You can also control certain cookies through your browser settings.
          </p>
        </div>

        {/* 9. Email and Communications */}
        <div className="bg-white p-6 sm:p-7 rounded-2xl border border-[#E2E8F0] shadow-sm space-y-3">
          <h3 className="text-lg sm:text-xl font-serif font-bold text-[#1A2E40] flex items-center gap-2">
            <Mail className="w-5 h-5 text-[#D4AF37]" />
            <span>9. Email and Communications</span>
          </h3>
          <p className="text-sm leading-relaxed">
            If you contact us, schedule a consultation, become a client, or otherwise request information from us, we may use your contact information to communicate with you regarding:
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-sm pl-2">
            {[
              'Your inquiry',
              'Your consultation',
              'Your services',
              'Your account',
              'Billing',
              'Bookkeeping matters',
              'Important service or policy updates',
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-sm leading-relaxed pt-1">
            We may send marketing communications where permitted by applicable law. You may unsubscribe from marketing communications using the unsubscribe mechanism provided in the message.
          </p>
        </div>

        {/* 10. Information Security */}
        <div className="bg-white p-6 sm:p-7 rounded-2xl border border-[#E2E8F0] shadow-sm space-y-4">
          <h3 className="text-lg sm:text-xl font-serif font-bold text-[#1A2E40] flex items-center gap-2">
            <Shield className="w-5 h-5 text-[#D4AF37]" />
            <span>10. Information Security</span>
          </h3>
          <p className="text-sm leading-relaxed">
            We take reasonable administrative, technical, and organizational measures designed to protect information against unauthorized access, use, alteration, disclosure, or destruction.
          </p>
          <div>
            <p className="text-sm font-semibold text-[#1A2E40] mb-2">
              Depending on the system and information involved, our practices may include:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-[#57534E]">
              {[
                'Multi-factor authentication',
                'Strong and unique passwords',
                'Role-based or limited access',
                'Secure platform-based account access',
                'Appropriate device security',
                'Restricted access to client information',
                'Secure cloud services',
                'Regular review of access permissions',
                'Secure handling and disposal practices',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-sm leading-relaxed">
            The specific safeguards used may vary depending on the system, information, service provider, and nature of the engagement.
          </p>
          <p className="text-xs sm:text-sm text-[#1A2E40] font-medium bg-[#1A2E40]/5 p-3 rounded-lg border-l-4 border-[#D4AF37]">
            No method of electronic transmission or storage can be guaranteed to be completely secure. The FTC recommends that businesses scale their security measures to the sensitivity of the information they maintain.
          </p>
        </div>

        {/* 11. Data Minimization */}
        <div className="bg-white p-6 sm:p-7 rounded-2xl border border-[#E2E8F0] shadow-sm space-y-3">
          <h3 className="text-lg sm:text-xl font-serif font-bold text-[#1A2E40] flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#D4AF37]" />
            <span>11. Data Minimization</span>
          </h3>
          <p className="text-sm leading-relaxed">
            We seek to collect and retain only information reasonably necessary for legitimate business purposes.
          </p>
          <p className="text-sm leading-relaxed">
            We do not intentionally request patient medical information when it is not necessary for the agreed bookkeeping services. Clients should not provide unnecessary sensitive information through ordinary website forms or email.
          </p>
          <p className="text-xs sm:text-sm text-[#57534E] bg-[#FAF8F5] p-3 rounded-lg border border-[#D4AF37]/30">
            This approach follows the FTC&apos;s guidance to take stock of sensitive information, keep only what is needed, protect it appropriately, and securely dispose of information that is no longer necessary.
          </p>
        </div>

        {/* 12. Data Retention */}
        <div className="bg-white p-6 sm:p-7 rounded-2xl border border-[#E2E8F0] shadow-sm space-y-3">
          <h3 className="text-lg sm:text-xl font-serif font-bold text-[#1A2E40] flex items-center gap-2">
            <Clock className="w-5 h-5 text-[#D4AF37]" />
            <span>12. Data Retention</span>
          </h3>
          <p className="text-sm leading-relaxed">
            We retain information for as long as reasonably necessary to:
          </p>
          <ul className="list-disc list-inside space-y-1 text-sm pl-2">
            <li>Provide contracted services</li>
            <li>Maintain appropriate business and financial records</li>
            <li>Meet legal, regulatory, tax, accounting, contractual, or dispute-resolution requirements</li>
            <li>Protect our legitimate business interests</li>
          </ul>
          <p className="text-sm leading-relaxed">
            Retention periods may vary depending on the type of information and the nature of the engagement. When information is no longer reasonably required, we will take reasonable steps to securely delete, destroy, or otherwise dispose of it, subject to applicable legal or contractual requirements.
          </p>
        </div>

        {/* 13. Security Incidents */}
        <div className="bg-white p-6 sm:p-7 rounded-2xl border border-[#E2E8F0] shadow-sm space-y-3">
          <h3 className="text-lg sm:text-xl font-serif font-bold text-[#1A2E40] flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-[#D4AF37]" />
            <span>13. Security Incidents</span>
          </h3>
          <p className="text-sm leading-relaxed">
            Although we use reasonable safeguards, no security system is completely immune from risk.
          </p>
          <p className="text-sm leading-relaxed">
            If we become aware of a security incident affecting personal or client information, we will investigate and respond in accordance with applicable law and our contractual obligations.
          </p>
          <p className="text-sm leading-relaxed">
            Where notification is legally required, we will provide notice in the manner and within the timeframe required by applicable law.
          </p>
          <p className="text-xs sm:text-sm text-[#57534E]">
            The FTC recommends that businesses maintain a plan for responding to security incidents rather than assuming a breach will never occur.
          </p>
        </div>

        {/* 14. Your Privacy Choices and Requests */}
        <div className="bg-white p-6 sm:p-7 rounded-2xl border border-[#E2E8F0] shadow-sm space-y-3">
          <h3 className="text-lg sm:text-xl font-serif font-bold text-[#1A2E40] flex items-center gap-2">
            <Eye className="w-5 h-5 text-[#D4AF37]" />
            <span>14. Your Privacy Choices and Requests</span>
          </h3>
          <p className="text-sm leading-relaxed">
            Depending on applicable law, you may have rights regarding certain personal information we maintain about you. You may contact us to:
          </p>
          <ul className="list-disc list-inside space-y-1 text-sm pl-2">
            <li>Request information about how your personal information is handled</li>
            <li>Request correction of inaccurate contact information</li>
            <li>Request deletion where legally applicable</li>
            <li>Withdraw certain communications preferences</li>
            <li>Ask questions about this Privacy Policy</li>
          </ul>
          <p className="text-xs sm:text-sm text-[#57534E] pt-1">
            Requests may be subject to identity verification and applicable legal exceptions.
          </p>
        </div>

        {/* 15. Children's Privacy */}
        <div className="bg-white p-6 sm:p-7 rounded-2xl border border-[#E2E8F0] shadow-sm space-y-3">
          <h3 className="text-lg sm:text-xl font-serif font-bold text-[#1A2E40] flex items-center gap-2">
            <Lock className="w-5 h-5 text-[#D4AF37]" />
            <span>15. Children&apos;s Privacy</span>
          </h3>
          <p className="text-sm leading-relaxed">
            Our website and services are intended for businesses and adults and are not directed toward children. We do not knowingly collect personal information from children through our website.
          </p>
        </div>

        {/* 16. Third-Party Websites */}
        <div className="bg-white p-6 sm:p-7 rounded-2xl border border-[#E2E8F0] shadow-sm space-y-3">
          <h3 className="text-lg sm:text-xl font-serif font-bold text-[#1A2E40] flex items-center gap-2">
            <ExternalLink className="w-5 h-5 text-[#D4AF37]" />
            <span>16. Third-Party Websites</span>
          </h3>
          <p className="text-sm leading-relaxed">
            Our website may contain links to third-party websites and services, including software providers, scheduling platforms, GetBillForge, and other resources.
          </p>
          <p className="text-sm leading-relaxed">
            We are not responsible for the privacy practices, security, content, or policies of those third-party websites. Please review their privacy policies before providing information to them.
          </p>
        </div>

        {/* 17. GetBillForge */}
        <div className="bg-white p-6 sm:p-7 rounded-2xl border border-[#E2E8F0] shadow-sm space-y-3">
          <h3 className="text-lg sm:text-xl font-serif font-bold text-[#1A2E40] flex items-center gap-2">
            <ExternalLink className="w-5 h-5 text-[#D4AF37]" />
            <span>17. GetBillForge</span>
          </h3>
          <p className="text-sm leading-relaxed">
            Monique Reid Bookkeeping may contain links to <a href="https://getbillforge.com" target="_blank" rel="noopener noreferrer" className="text-[#D4AF37] hover:underline">GetBillForge (getbillforge.com)</a>, a separate digital-product business that sells professionally designed invoice and billing template kits for MedSpas, aesthetic clinics, IV hydration centers, and wellness practices.
          </p>
          <p className="text-sm leading-relaxed">
            GetBillForge products are downloadable business tools — not bookkeeping or financial reporting services. If you visit GetBillForge or purchase products through that site, your interactions are governed by GetBillForge&apos;s own terms and privacy practices.
          </p>
          <p className="text-sm leading-relaxed">
            Although both businesses are owned by Monique Reid, they operate independently. Information you provide to Monique Reid Bookkeeping as a bookkeeping client is not shared with or used by GetBillForge for marketing or product purposes, and vice versa.
          </p>
          <p className="text-xs sm:text-sm text-[#1A2E40] font-medium bg-[#FAF8F5] p-3 rounded-lg border border-[#D4AF37]/30">
            We maintain this separation so that client financial records handled through Monique Reid Bookkeeping remain completely separate from the product and marketing operations of GetBillForge.
          </p>
        </div>

        {/* 18. Updates to This Privacy Policy */}
        <div className="bg-white p-6 sm:p-7 rounded-2xl border border-[#E2E8F0] shadow-sm space-y-3">
          <h3 className="text-lg sm:text-xl font-serif font-bold text-[#1A2E40] flex items-center gap-2">
            <Clock className="w-5 h-5 text-[#D4AF37]" />
            <span>18. Updates to This Privacy Policy</span>
          </h3>
          <p className="text-sm leading-relaxed">
            We may update this Privacy Policy from time to time. When changes are made, we will update the &ldquo;Last Updated&rdquo; date at the top of this Policy.
          </p>
          <p className="text-sm leading-relaxed">
            The revised Policy will become effective when posted unless otherwise stated.
          </p>
        </div>

        {/* 19. Contact Us */}
        <div className="bg-[#1A2E40] p-6 sm:p-8 rounded-2xl text-white space-y-4 border border-[#D4AF37]/30 shadow-lg">
          <h3 className="text-xl font-serif font-bold text-white">
            19. Contact Us
          </h3>
          <div className="space-y-1 text-sm text-[#E2E8F0]">
            <p className="font-bold text-white text-base">Monique Reid Bookkeeping</p>
            <p>Monique Reid, Founder</p>
            <p className="text-[#D4AF37] font-medium">Specialized Bookkeeping for MedSpas, Aesthetic Clinics &amp; Wellness Practices</p>
            <p className="pt-1">
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
                href="mailto:hello@moniquereidbookkeeping.com"
                className="text-[#D4AF37] hover:underline"
              >
                hello@moniquereidbookkeeping.com
              </a>
            </p>
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-[#E2E8F0]/70">
              Questions regarding this Privacy Policy or your data?
            </p>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <a
                href="mailto:hello@moniquereidbookkeeping.com"
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
