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
      <div
        className="w-full h-full relative overflow-hidden flex items-end justify-center min-h-[400px] sm:min-h-[500px]"
        style={{ background: 'linear-gradient(170deg, #F9F7F4 0%, #EDE8DF 60%, #E5DDD0 100%)' }}
      >
        {/* Subtle warm vignette edges */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 55%, rgba(212,175,55,0.06) 100%)',
          }}
        />
        {/* Gold accent line left */}
        <div
          className="absolute top-8 left-0 w-0.5 h-20 rounded-r-full pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, transparent, #D4AF37 50%, transparent)' }}
        />
        {/* Portrait image */}
        <img
          src={imageSrc}
          alt="Monique Reid, Certified QuickBooks ProAdvisor for MedSpas, Aesthetic Clinics, and Wellness Practices"
          onError={handleImageError}
          className="relative z-[5] w-full h-auto object-contain object-bottom max-h-[540px] transition-transform duration-500 group-hover:scale-[1.015]"
          loading={variant === 'hero' ? 'eager' : 'lazy'}
        />
      </div>
    </div>
  );
};
