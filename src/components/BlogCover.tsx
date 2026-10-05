import React from 'react';
import { BookOpen, CreditCard, Repeat, Wrench } from 'lucide-react';

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  'QuickBooks & Cleanup': Wrench,
  'POS & Reconciliation': CreditCard,
  'Revenue & Memberships': Repeat,
};

/** On-brand cover for a blog post. No outside image, so nothing can break or load slowly. */
export const BlogCover: React.FC<{ category: string; className?: string }> = ({ category, className = '' }) => {
  const Icon = ICONS[category] ?? BookOpen;
  return (
    <div
      aria-hidden="true"
      className={`relative overflow-hidden bg-gradient-to-br from-[#1A2E40] via-[#223a50] to-[#0D1B2A] ${className}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:22px_22px] opacity-10" />
      <div className="absolute -right-6 -top-6 w-56 h-56 rounded-full bg-[#D4AF37]/10 blur-2xl" />
      <Icon className="absolute right-6 top-1/2 -translate-y-1/2 w-28 h-28 sm:w-36 sm:h-36 text-[#D4AF37]/25" />
    </div>
  );
};
