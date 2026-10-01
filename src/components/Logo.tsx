import React from 'react';

interface LogoProps {
  variant?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
  className?: string;
  onClick?: () => void;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'dark',
  size = 'md',
  showSubtitle = true,
  className = '',
  onClick,
}) => {
  const isDark = variant === 'dark'; // dark = on light bg (navbar), light = on dark bg (footer)

  const logoHeight = size === 'sm' ? 48 : size === 'lg' ? 96 : 80;

  return (
    <div
      id="brand-logo"
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={(e) => {
        if (onClick && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          onClick();
        }
      }}
      aria-label="Monique Reid Bookkeeping — Home"
      className={`inline-flex items-center select-none cursor-pointer group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded-xl p-0.5 transition-opacity duration-200 hover:opacity-90 ${className}`}
    >
      {isDark ? (
        /* Header (light background): full horizontal logo */
        <img
          src="/mr-logo-full.png"
          alt="Monique Reid Bookkeeping"
          height={logoHeight}
          style={{ height: logoHeight, width: 'auto', maxWidth: 360 }}
          className="object-contain transition-transform duration-300 group-hover:scale-[1.02]"
          loading="eager"
          draggable={false}
        />
      ) : (
        /* Footer (dark background): icon mark (transparent) + text wordmark */
        <div className="flex items-center gap-3">
          <img
            src="/mr-icon.png"
            alt="Monique Reid Bookkeeping icon"
            style={{ width: logoHeight, height: logoHeight }}
            className="object-contain shrink-0 transition-transform duration-300 group-hover:scale-105"
            loading="eager"
            draggable={false}
          />
          <div className="flex flex-col items-start justify-center">
            <span
              className="font-serif font-bold text-white leading-tight tracking-wide"
              style={{
                fontSize: size === 'sm' ? '1.1rem' : size === 'lg' ? '1.7rem' : '1.4rem',
              }}
            >
              Monique Reid
            </span>
            {showSubtitle && (
              <span
                className="font-serif font-bold uppercase tracking-[0.22em] leading-tight text-[#D4AF37] mt-0.5"
                style={{
                  fontSize: size === 'sm' ? '0.65rem' : size === 'lg' ? '0.95rem' : '0.8rem',
                }}
              >
                Bookkeeping
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
