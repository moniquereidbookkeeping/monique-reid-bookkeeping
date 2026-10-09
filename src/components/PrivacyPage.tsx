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
            className="inline-flex items-center gap-1.5 text-sm text-[#D4AF37] hover:text-[#E5C765] transition-colors mb-2 group"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
            <span>Back to Home</span>
          </button>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white">
            Privacy Policy
          </h1>
          <p className="text-sm text-[#E2E8F0] font-light">
            Last Updated: October 2026 · Monique Reid Bookkeeping
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
              <p className="p-3.5 rounded-lg bg-[#1A2E40]/5 border-l-4 border-[#D4AF37] text-sm text-[#1A2E40] font-medium">
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
              When you contact us, submit an inquiry, or schedule a Financial Clarity Call, this may include, depending on how you contact us:
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
          <div className="space-y-2 pt-1">
            <h4 className="text-sm font-bold text-[#1A2E40]">B. Bookkeeping Health Check</h4>
            <p className="text-sm leading-relaxed">
              If you use the free Bookkeeping Health Check, we collect your name, email address, and your answers: your QuickBooks status, booking or point-of-sale platform, number of accounts, revenue model and range, practice age, and any challenge you describe in your own words. We use your answers to create a general plan for you and to prepare for a call with you. Your answers — never your name or email — are processed by Google's Gemini AI service to help draft that plan. Your plan is emailed to the address you provide, and your name, email and answers are kept in our lead records for up to 24 months so we can follow up with you, then deleted. Contact us any time to have your information deleted sooner. Please do not enter patient names, patient health information, or account numbers in the free-text fields.
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
          <p className="text-sm text-[#1A2E40] font-medium bg-[#FAF8F5] p-3 rounded-lg border border-[#D4AF37]/30">
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
            <p className="text-sm font-bold text-amber-900">
              Please do not submit the following through our website, ordinary email, or other unsecured communication methods:
            </p>
            <ul className="list-disc list-inside text-sm text-amber-900/90 space-y-1 pl-2">
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
          <div className="p-3.5 rounded-lg bg-[#1A2E40]/5 border-l-4 border-[#D4AF37] space-y-1 text-sm">
            <p className="font-bold text-[#1A2E40]">No Patient Health Information</p>
            <p className="text-[#57534E]">
              Monique Reid Bookkeeping does not accept or handle patient health information. Engagements are set up so that only financial reports are shared. If a practice&apos;s systems cannot produce financial reports without patient details, we will agree on another way to get the figures before any access is given.
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
            <li><strong>Calendly</strong> — scheduling; its calendar loads automatically when you open the Contact page</li>
            <li><strong>Zoom</strong> — video consultations</li>
            <li><strong>Stripe</strong> and other payment processors — payment processing once you become a client</li>
            <li><strong>Google Analytics</strong> and <strong>Microsoft Clarity</strong> — understanding how visitors use our website (only if you allow Analytics Cookies)</li>
            <li><strong>Cloudflare</strong> — website hosting, security, and spam-protection checks on our forms, which receive your IP address</li>
            <li><strong>Resend</strong> — delivering emails sent from our Health Check and contact forms</li>
            <li><strong>Google Sheets and Gmail</strong> — storing Health Check lead records</li>
            <li><strong>Google Gemini</strong> — drafting your Health Check plan from your answers (never your name or email)</li>
            <li><strong>Unsplash</strong> — stock images used in some blog articles</li>
            <li><strong>Intuit</strong> — the QuickBooks ProAdvisor credential logo in our footer loads from Intuit's servers</li>
          </ul>
          <p className="text-sm leading-relaxed">
            These providers may process information on our behalf according to their own terms and privacy policies.
          </p>
          <p className="text-sm text-[#57534E]">
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
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-sm font-semibold text-[#1A2E40]">
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
          <p className="text-sm font-medium text-[#1A2E40] bg-[#FAF8F5] p-3 rounded-lg border border-[#D4AF37]/30">
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
            Cookies are small files a website saves in your browser. Our website uses two categories of cookies and similar technologies, and you choose whether to allow the second:
          </p>
          <div className="space-y-3">
            <div className="rounded-lg border border-[#E2E8F0] p-3">
              <p className="text-sm font-bold text-[#1A2E40]">Strictly Necessary Cookies <span className="font-semibold text-[#57534E]">(Always Active)</span></p>
              <p className="mt-1 text-sm leading-relaxed">
                Your cookie choice itself is saved in your browser&apos;s local storage, not a cookie. Our security provider, Cloudflare, may set a short-lived security cookie to protect our forms from spam.
              </p>
            </div>
            <div className="rounded-lg border border-[#E2E8F0] p-3">
              <p className="text-sm font-bold text-[#1A2E40]">Analytics Cookies <span className="font-semibold text-[#57534E]">(off unless you allow them)</span></p>
              <p className="mt-1 text-sm leading-relaxed">
                These help us understand how visitors use the site so we can improve it. Google Analytics (cookies <code>_ga</code>, <code>_ga_5YJE6T34BE</code>) gives us aggregate traffic numbers — which pages get visited, where visitors come from. Microsoft Clarity (cookies <code>_clck</code>, <code>_clsk</code>) records individual visit sessions, including clicks and scrolling, so we can see how people actually move through the site; it masks the Bookkeeping Health Check section and anything typed into form fields. If you turn these off, we won&apos;t be able to see how the site is being used or where it needs work.
              </p>
            </div>
          </div>
          <p className="text-sm leading-relaxed">
            The first time you visit, you can choose Accept All or Reject All, or open Cookie Settings to choose by category. You can reopen Cookie Settings at any time from the footer of any page. If you turn Analytics Cookies off after allowing them, Google Analytics and Microsoft Clarity stop running and their cookies on this site are removed. You can also control cookies through your browser settings.
          </p>
          <p className="text-sm leading-relaxed">
            We do not send the answers you give in the Bookkeeping Health Check to these analytics tools. When you visit the Contact page, Calendly&apos;s calendar loads automatically and may set its own cookies and show its own privacy choices. Those are controlled through Calendly and are not covered by our Cookie Settings.
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
          <p className="text-sm text-[#1A2E40] font-medium bg-[#1A2E40]/5 p-3 rounded-lg border-l-4 border-[#D4AF37]">
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
          <p className="text-sm text-[#57534E] bg-[#FAF8F5] p-3 rounded-lg border border-[#D4AF37]/30">
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
          <p className="text-sm text-[#57534E]">
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
          <p className="text-sm text-[#57534E] pt-1">
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
            Our website may contain links to third-party websites and services, including software providers, scheduling platforms, and other resources.
          </p>
          <p className="text-sm leading-relaxed">
            We are not responsible for the privacy practices, security, content, or policies of those third-party websites. Please review their privacy policies before providing information to them.
          </p>
        </div>

        {/* 17. Updates to This Privacy Policy */}
        <div className="bg-white p-6 sm:p-7 rounded-2xl border border-[#E2E8F0] shadow-sm space-y-3">
          <h3 className="text-lg sm:text-xl font-serif font-bold text-[#1A2E40] flex items-center gap-2">
            <Clock className="w-5 h-5 text-[#D4AF37]" />
            <span>17. Updates to This Privacy Policy</span>
          </h3>
          <p className="text-sm leading-relaxed">
            We may update this Privacy Policy from time to time. When changes are made, we will update the &ldquo;Last Updated&rdquo; date at the top of this Policy.
          </p>
          <p className="text-sm leading-relaxed">
            The revised Policy will become effective when posted unless otherwise stated.
          </p>
        </div>

        {/* 18. Contact Us */}
        <div className="bg-[#1A2E40] p-6 sm:p-8 rounded-2xl text-white space-y-4 border border-[#D4AF37]/30 shadow-lg">
          <h3 className="text-xl font-serif font-bold text-white">
            18. Contact Us
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
                href="mailto:monique@moniquereidbookkeeping.com"
                className="text-[#D4AF37] hover:underline"
              >
                monique@moniquereidbookkeeping.com
              </a>
            </p>
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-4">
            <p className="text-sm text-[#E2E8F0]/70">
              Questions regarding this Privacy Policy or your data?
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href="mailto:monique@moniquereidbookkeeping.com"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm font-semibold transition-all whitespace-nowrap"
              >
                <Mail className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Email Us</span>
              </a>
              <a href="/contact"
                onClick={(e) => { e.preventDefault(); onBookCall(); }}
                className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#E5C765] to-[#D4AF37] hover:from-[#C8A02A] hover:via-[#D4AF37] hover:to-[#C8A02A] text-[#1A2E40]! font-bold text-sm transition-all shadow-md whitespace-nowrap"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Your Free 20-Min Clarity Call</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
