/**
 * The 3-step plan used when the AI plan is unavailable or fails the offer rules: shown in the Health Check
 * results (src/components/PracticeAudit.tsx) and sent in the thank-you email (functions/api/lead.ts).
 * One copy for both, so the page and the email cannot drift apart. Only name work that is on the pricing page,
 * and no software-integration claims (see functions/_lib/offerings.ts).
 */
export interface PlanStep {
  title: string;
  body: string;
}

export function getFallbackPlan(status: string, pos: string): PlanStep[] {
  const s = status.toLowerCase();
  const p = pos || 'your platform';
  if (s.includes('cleanup') || s.includes('4 to 12')) {
    return [
      { title: 'Historical Transaction Cleanup', body: `Categorize and reconcile all ${p} transactions month by month to rebuild accurate records from the ground up.` },
      { title: 'Correct Chart of Accounts', body: 'Rebuild your chart of accounts to properly separate clinical supplies, payroll, retail, and operating costs.' },
      { title: 'CPA-Ready File Delivery', body: 'Deliver a clean, fully reconciled QuickBooks file with P&L and Balance Sheet ready for your CPA.' },
    ];
  }
  if (s.includes('1 to 3') || s.includes('slightly') || s.includes('behind')) {
    return [
      { title: 'Reconcile Payouts & Fees', body: `Reconcile ${p} batch deposits with merchant processing fees so net banking activity and gross collections are clearly tracked.` },
      { title: 'Clean Chart of Accounts', body: 'Separate clinical supply COGS from general operating expenses for clearer service-line margin visibility.' },
      { title: 'Monthly Close Routine', body: 'Reconcile your accounts systematically each month with an organized Balance Sheet and Profit & Loss.' },
    ];
  }
  if (s.includes('new') || s.includes('not') || s.includes('set up')) {
    return [
      { title: 'QuickBooks Company File Setup', body: 'Configure your QBO account with the right settings, fiscal year, and industry classification from day one.' },
      { title: 'Chart of Accounts Build', body: 'Build a chart of accounts designed for aesthetic practices — service revenue, clinical supplies, retail, and payroll all properly separated.' },
      { title: `Reconcile ${p} Payouts Monthly`, body: `Set up your ${p} reconciliation workflow so deposits can be matched to your bank statement each month.` },
    ];
  }
  if (s.includes('current') || s.includes('ongoing')) {
    return [
      { title: 'Reconcile Payouts & Fees', body: `Match each ${p} payout to its report so revenue is recorded in full and processing fees are their own expense.` },
      { title: 'Monthly P&L and Balance Sheet', body: 'A reconciled Profit & Loss and Balance Sheet every month, delivered by the 15th of the following month.' },
      { title: 'Reports Sized to Your Plan', body: 'Revenue by service line and membership tracking are added on the plans that include them, agreed on the call.' },
    ];
  }

  // Free-text "Other" status that didn't match a known category: don't assume membership tracking or a clean P&L already exist.
  return [
    { title: 'Full QuickBooks Review', body: `A complete look at your ${p} data and QuickBooks file to see exactly where things stand.` },
    { title: 'Clear Scope, Once Reviewed', body: 'A specific plan for your books, defined after seeing what is actually there.' },
    { title: 'Monthly Reporting, Once Confirmed', body: 'Reliable monthly reports once your books are confirmed accurate and current.' },
  ];
}
