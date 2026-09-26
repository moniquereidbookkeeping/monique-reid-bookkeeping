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
  const isDark = variant === 'dark'; // on light background, dark navy #1A2E40 text
  const primaryColor = isDark ? '#1A2E40' : '#FFFFFF';

  const markPixelSize = size === 'sm' ? 42 : size === 'lg' ? 62 : 50;

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
      aria-label="Monique Reid Bookkeeping Home"
      className={`inline-flex items-center gap-3.5 select-none cursor-pointer group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded-xl p-0.5 ${className}`}
    >
      {/* MR Monogram Badge — dark-bg on light header, white-bg on dark footer */}
      <div
        className="relative shrink-0 transition-transform duration-300 group-hover:scale-105 rounded-xl overflow-hidden"
        style={{
          width: markPixelSize,
          height: markPixelSize,
        }}
      >
        <img
          src={isDark ? '/mr-logo-dark-bg.png' : '/mr-logo-white-bg.png'}
          alt="Monique Reid Bookkeeping MR Monogram Emblem"
          width={markPixelSize}
          height={markPixelSize}
          className="w-full h-full object-cover"
          loading="eager"
        />
      </div>

      {/* Typography Wordmark — BOOKKEEPING centered under MONIQUE REID */}
      <div className="flex flex-col items-center justify-center text-center">
        <span
          className="font-serif font-bold tracking-[0.06em] leading-tight transition-colors duration-200"
          style={{
            color: primaryColor,
            fontSize: size === 'sm' ? '1.12rem' : size === 'lg' ? '1.55rem' : '1.34rem',
          }}
        >
          MONIQUE REID
        </span>
        {showSubtitle && (
          <span
            className="font-serif font-bold tracking-[0.24em] uppercase leading-tight mt-0.5"
            style={{
              color: isDark ? '#D4AF37' : '#F3D57A',
              fontSize: size === 'sm' ? '0.74rem' : size === 'lg' ? '0.94rem' : '0.82rem',
            }}
          >
            BOOKKEEPING
          </span>
        )}
      </div>
    </div>
  );
};
