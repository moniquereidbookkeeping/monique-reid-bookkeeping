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
      {/* Newly Approved MR Monogram Badge Image with Crisp Scaling and Transparency */}
      <div
        className="relative shrink-0 transition-transform duration-300 group-hover:scale-105"
        style={{
          width: markPixelSize,
          height: markPixelSize,
        }}
      >
        <img
          src="/mr-logo-192.png"
          alt="Monique Reid Bookkeeping MR Monogram Emblem"
          width={markPixelSize}
          height={markPixelSize}
          className="w-full h-full object-contain filter drop-shadow-sm"
          loading="eager"
        />
      </div>

      {/* Typography Wordmark - Monique Reid Bookkeeping */}
      <div className="flex flex-col items-start justify-center text-left">
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
