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
    // Robust fallback if png is unavailable
    if (imageSrc !== '/assets/monique-reid.jpg') {
      setImageSrc('/assets/monique-reid.jpg');
    }
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Clean, Production-Grade Portrait Frame with Zero Customer-Facing Upload Controls */}
      <div className="w-full h-full relative overflow-hidden bg-gradient-to-b from-[#FAF8F5] to-[#F2EFE9] flex items-center justify-center min-h-[400px] sm:min-h-[460px]">
        <img
          src={imageSrc}
          alt="Monique Reid, Certified QuickBooks ProAdvisor for MedSpas, Aesthetic Clinics, and Wellness Practices"
          onError={handleImageError}
          className="w-full h-auto object-cover object-top max-h-[520px] transition-transform duration-500 group-hover:scale-[1.015]"
          loading={variant === 'hero' ? 'eager' : 'lazy'}
        />
      </div>
    </div>
  );
};
