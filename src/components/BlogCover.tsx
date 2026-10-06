import React, { useEffect, useRef, useState } from 'react';
import { BookOpen } from 'lucide-react';

/* Original on-brand illustrations, drawn as inline SVG so they never break, load instantly, and need no licenses. */
const GOLD = '#D4AF37';
const CREAM = '#FAF8F5';

const Cleanup: React.FC = () => (
  <g>
    {/* Messy page */}
    <g transform="translate(150 95) rotate(-6 100 125)">
      <rect width="200" height="250" rx="14" fill={CREAM} opacity="0.95" />
      <path d="M26 50 q30 -14 60 0 t60 0 M26 84 h150 M26 112 q40 12 80 -4 t70 6 M26 146 h110 M26 176 q30 -10 60 4 t70 -4 M26 208 h90" stroke="#B45309" strokeWidth="5" strokeLinecap="round" fill="none" opacity="0.7" />
      <circle cx="160" cy="40" r="16" fill="none" stroke="#B45309" strokeWidth="5" opacity="0.7" />
      <path d="M152 32 l16 16 M168 32 l-16 16" stroke="#B45309" strokeWidth="5" strokeLinecap="round" opacity="0.7" />
    </g>
    {/* Arrow */}
    <g transform="translate(395 205)">
      <path d="M0 20 h60 M42 0 l22 20 l-22 20" stroke={GOLD} strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </g>
    {/* Clean page */}
    <g transform="translate(500 85)">
      <rect width="200" height="250" rx="14" fill="#FFFFFF" />
      <rect x="26" y="34" width="90" height="12" rx="6" fill="#1A2E40" opacity="0.85" />
      {[76, 108, 140, 172].map((y) => (
        <g key={y}>
          <rect x="26" y={y} width="104" height="9" rx="4.5" fill="#CBD5E1" />
          <rect x="146" y={y} width="30" height="9" rx="4.5" fill={GOLD} />
        </g>
      ))}
      <circle cx="152" cy="222" r="0" />
      <circle cx="100" cy="226" r="0" />
      <circle cx="170" cy="40" r="20" fill="#15803D" />
      <path d="M160 40 l8 9 l14 -17" stroke="#fff" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </g>
  </g>
);

const Pos: React.FC = () => (
  <g>
    {/* Card terminal */}
    <g transform="translate(130 100)">
      <rect width="170" height="250" rx="22" fill={CREAM} />
      <rect x="20" y="24" width="130" height="78" rx="10" fill="#1A2E40" />
      <rect x="36" y="44" width="70" height="10" rx="5" fill={GOLD} />
      <rect x="36" y="64" width="46" height="8" rx="4" fill="#fff" opacity="0.5" />
      {[0, 1, 2].map((r) => [0, 1, 2].map((c) => <circle key={`${r}${c}`} cx={52 + c * 33} cy={138 + r * 34} r="11" fill="#CBD5E1" />))}
      <rect x="20" y="226" width="130" height="10" rx="5" fill={GOLD} />
    </g>
    {/* Arrow */}
    <path d="M335 225 h50 M368 205 l22 20 l-22 20" stroke={GOLD} strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    {/* Split bar: gross = net + fees + tips */}
    <g transform="translate(430 120)">
      <rect width="270" height="44" rx="10" fill={GOLD} />
      <rect y="86" width="188" height="44" rx="10" fill="#FFFFFF" />
      <rect x="196" y="86" width="42" height="44" rx="10" fill="#B45309" opacity="0.9" />
      <rect x="244" y="86" width="26" height="44" rx="10" fill="#94A3B8" />
      <path d="M135 52 v26 M10 60 v18 M240 60 v18" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeDasharray="2 8" opacity="0.7" />
      <rect y="172" width="188" height="44" rx="10" fill="none" stroke="#fff" strokeWidth="4" strokeDasharray="10 9" opacity="0.8" />
      <circle cx="226" cy="194" r="16" fill="#15803D" />
      <path d="M218 194 l6 7 l11 -13" stroke="#fff" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </g>
  </g>
);

const Membership: React.FC = () => (
  <g>
    {/* Calendar */}
    <g transform="translate(150 90)">
      <rect width="260" height="270" rx="20" fill={CREAM} />
      <path d="M0 20 a20 20 0 0 1 20 -20 h220 a20 20 0 0 1 20 20 v40 h-260 z" fill="#1A2E40" />
      <rect x="60" y="-14" width="14" height="36" rx="7" fill={GOLD} />
      <rect x="186" y="-14" width="14" height="36" rx="7" fill={GOLD} />
      {[0, 1, 2, 3].map((r) => [0, 1, 2, 3, 4].map((c) => (
        <circle key={`${r}${c}`} cx={38 + c * 46} cy={100 + r * 44} r="13" fill={r * 5 + c < 7 ? GOLD : '#CBD5E1'} />
      )))}
    </g>
    {/* Recurring ring with coin */}
    <g transform="translate(560 225)">
      <circle r="105" fill="none" stroke="#fff" strokeOpacity="0.2" strokeWidth="16" />
      <path d="M0 -105 a105 105 0 1 1 -74 30" fill="none" stroke={GOLD} strokeWidth="16" strokeLinecap="round" />
      <path d="M-96 -52 l22 -18 l-4 28" fill="none" stroke={GOLD} strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
      <circle r="58" fill={CREAM} />
      <circle r="44" fill="none" stroke={GOLD} strokeWidth="6" />
      <path d="M0 -20 v40 M-14 -8 q14 -14 28 0 M-14 8 q14 14 28 0" stroke="#1A2E40" strokeWidth="6" strokeLinecap="round" fill="none" />
    </g>
  </g>
);

const Inventory: React.FC = () => (
  <g>
    {/* Vial */}
    <g transform="translate(160 90)">
      <rect x="20" y="0" width="80" height="34" rx="8" fill={GOLD} />
      <rect x="0" y="30" width="120" height="220" rx="22" fill={CREAM} />
      <rect x="14" y="120" width="92" height="116" rx="14" fill="#7DD3FC" opacity="0.6" />
      <rect x="22" y="70" width="76" height="30" rx="6" fill="#1A2E40" opacity="0.85" />
    </g>
    {/* Syringe */}
    <g transform="translate(330 150) rotate(-25 120 40)">
      <rect x="0" y="22" width="30" height="36" rx="6" fill="#94A3B8" />
      <rect x="30" y="8" width="170" height="64" rx="12" fill={CREAM} />
      <rect x="38" y="30" width="110" height="20" rx="8" fill="#7DD3FC" opacity="0.7" />
      <path d="M60 14 v10 M90 14 v10 M120 14 v10 M150 14 v10" stroke="#1A2E40" strokeWidth="3" strokeLinecap="round" opacity="0.5" />
      <rect x="200" y="30" width="60" height="8" rx="4" fill="#CBD5E1" />
      <rect x="258" y="33" width="46" height="3" rx="1.5" fill="#CBD5E1" />
    </g>
    {/* Cost vs revenue bars */}
    <g transform="translate(520 120)">
      <rect x="0" y="110" width="52" height="120" rx="8" fill="#B45309" opacity="0.9" />
      <rect x="76" y="40" width="52" height="190" rx="8" fill={GOLD} />
      <rect x="152" y="80" width="52" height="150" rx="8" fill="#FFFFFF" />
      <path d="M0 250 h204" stroke="#fff" strokeOpacity="0.4" strokeWidth="4" strokeLinecap="round" />
    </g>
  </g>
);

const ART: Record<string, React.FC> = {
  'QuickBooks & Cleanup': Cleanup,
  'POS & Reconciliation': Pos,
  'Revenue & Memberships': Membership,
  'Costs & Inventory': Inventory,
};

export const BlogCover: React.FC<{ category: string; image?: string; className?: string; wide?: boolean }> = ({ category, image = '', className = '', wide = false }) => {
  const Art = ART[category];
  const [photoOk, setPhotoOk] = useState(true);
  const imgRef = useRef<HTMLImageElement>(null);

  // New image URL -> try again. Also catches images that failed before React hydrated.
  useEffect(() => {
    setPhotoOk(true);
    const el = imgRef.current;
    if (el && el.complete && el.naturalWidth === 0) setPhotoOk(false);
  }, [image]);

  const showPhoto = !!image && photoOk;
  return (
    <div
      aria-hidden="true"
      className={`${className.includes('absolute') ? '' : 'relative'} overflow-hidden bg-gradient-to-br from-[#1A2E40] via-[#223a50] to-[#0D1B2A] ${className}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:22px_22px] opacity-10" />
      <div className="absolute -right-10 -top-10 w-72 h-72 rounded-full bg-[#D4AF37]/10 blur-3xl" />
      {Art ? (
        <svg viewBox="0 0 800 450" preserveAspectRatio={wide ? 'xMaxYMin meet' : 'xMidYMid slice'} className={wide ? 'absolute right-0 top-0 w-full h-[78%] sm:h-[82%] opacity-90' : 'absolute inset-0 w-full h-full opacity-95'}>
          <Art />
        </svg>
      ) : (
        <BookOpen className="absolute right-6 top-1/2 -translate-y-1/2 w-28 h-28 text-[#D4AF37]/25" />
      )}
      {/* Photo sits on top of the illustration. If it is removed or fails, it hides itself and the illustration shows. */}
      {showPhoto && (
        <>
          <img
            ref={imgRef}
            src={image}
            alt=""
            loading={wide ? 'eager' : 'lazy'}
            decoding="async"
            referrerPolicy="no-referrer"
            onError={() => setPhotoOk(false)}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/80 via-[#1A2E40]/35 to-[#1A2E40]/20" />
        </>
      )}
    </div>
  );
};
