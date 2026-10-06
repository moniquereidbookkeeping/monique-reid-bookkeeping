import React from 'react';

interface LogoProps {
  variant?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg' | 'footer';
  showSubtitle?: boolean;
  className?: string;
  onClick?: () => void;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'dark',
  size = 'md',
  showSubtitle: _showSubtitle = true,
  className = '',
  onClick,
}) => {
  const isFooter = variant === 'light'; // footer sits on dark navy bg

  // Header: tall enough to read clearly at a glance
  const logoHeight = size === 'sm' ? 70 : size === 'lg' ? 110 : size === 'footer' ? 90 : 56;
  const logoMaxWidth = size === 'sm' ? 220 : size === 'lg' ? 380 : size === 'footer' ? 260 : 220;

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
      className={`inline-flex items-center select-none cursor-pointer group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded-xl transition-opacity duration-200 hover:opacity-90 ${className}`}
    >
      {isFooter ? (
        /* Footer (dark navy bg): logo directly, no container */
        <img
          src="/mr-logo-footer.png"
          alt="Monique Reid Bookkeeping"
          style={{ height: logoHeight, width: 'auto', maxWidth: logoMaxWidth }}
          className="object-contain block transition-transform duration-300 group-hover:scale-[1.02]"
          loading="eager"
          draggable={false}
        />
      ) : (
        /* Header (light bg): full horizontal logo, white bg blends naturally */
        <img
          src="/mr-logo-full.png"
          alt="Monique Reid Bookkeeping"
          style={{ height: logoHeight, width: 'auto', maxWidth: logoMaxWidth }}
          className="object-contain transition-transform duration-300 group-hover:scale-[1.02]"
          loading="eager"
          draggable={false}
        />
      )}
    </div>
  );
};
