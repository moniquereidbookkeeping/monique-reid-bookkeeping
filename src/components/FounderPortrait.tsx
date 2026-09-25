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
      <div className="w-full h-full relative overflow-hidden flex items-end justify-center min-h-[400px] sm:min-h-[500px]">
        {/* Portrait image — natural background photo */}
        <img
          src={imageSrc}
          alt="Monique Reid, Certified QuickBooks ProAdvisor for MedSpas, Aesthetic Clinics, and Wellness Practices"
          onError={handleImageError}
          className="relative z-[5] w-full h-auto object-cover object-top transition-transform duration-500 group-hover:scale-[1.015]"
          loading={variant === 'hero' ? 'eager' : 'lazy'}
        />
      </div>
    </div>
  );
};
