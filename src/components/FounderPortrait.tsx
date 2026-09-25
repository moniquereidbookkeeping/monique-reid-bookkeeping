import React, { useState } from 'react';

interface FounderPortraitProps {
  variant?: 'hero' | 'about';
  className?: string;
}

export const FounderPortrait: React.FC<FounderPortraitProps> = ({
  variant = 'hero',
  className = '',
}) => {
  const [imageSrc, setImageSrc] = useState('/assets/monique-reid.png');

  const handleImageError = () => {
    if (imageSrc !== '/assets/monique-reid.jpg') {
      setImageSrc('/assets/monique-reid.jpg');
    }
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Premium portrait frame with layered background */}
      <div className="w-full h-full relative overflow-hidden flex items-end justify-center min-h-[400px] sm:min-h-[500px]"
        style={{
          background: 'linear-gradient(160deg, #1A2E40 0%, #223548 40%, #1e3a52 70%, #162840 100%)',
        }}
      >
        {/* Subtle dot grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, #D4AF37 1px, transparent 1px)',
            backgroundSize: '22px 22px',
          }}
        />

        {/* Gold accent arc top-right */}
        <div
          className="absolute -top-16 -right-16 w-64 h-64 rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(212,175,55,0.12) 0%, transparent 70%)',
          }}
        />

        {/* Bottom fade to navy for seamless blend */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none z-10"
          style={{
            background: 'linear-gradient(to top, #1A2E40 0%, transparent 100%)',
          }}
        />

        {/* Gold accent line left edge */}
        <div className="absolute top-12 left-0 w-1 h-24 rounded-r-full pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, transparent, #D4AF37, transparent)' }}
        />

        {/* Portrait image — cutout sits on the styled background */}
        <img
          src={imageSrc}
          alt="Monique Reid, Certified QuickBooks ProAdvisor for MedSpas, Aesthetic Clinics, and Wellness Practices"
          onError={handleImageError}
          className="relative z-[5] w-full h-auto object-contain object-bottom max-h-[540px] transition-transform duration-500 group-hover:scale-[1.015]"
          style={{ mixBlendMode: 'normal' }}
          loading={variant === 'hero' ? 'eager' : 'lazy'}
        />
      </div>
    </div>
  );
};
