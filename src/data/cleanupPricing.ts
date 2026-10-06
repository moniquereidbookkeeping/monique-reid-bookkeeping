// Cleanup project prices. Shown on the Pricing section. KEEP IN SYNC with functions/_lib/offerings.ts.
export interface CleanupTier { label: string; price: string; desc: string; badge?: string }

export const cleanupTiers: CleanupTier[] = [
        { label: '1–3 months behind', price: '$597', desc: 'Bank + CC reconciliation. Timeline confirmed after a free review of your books.' },
        { label: '4–6 months behind', price: '$1,297', desc: 'Full recategorization, vendor cleanup, POS payout reconciliation, CPA-ready file.', badge: 'Typical scope' },
        { label: '7–12 months behind', price: '$1,997', desc: 'Deep reconstruction, suspense resolution, Chart of Accounts rebuild, full documentation trail.' },
        { label: '13+ months / multi-entity', price: 'Custom quote', desc: 'Complimentary scope review included. Longer histories and multi-entity engagements are quoted after assessment.' },
];
