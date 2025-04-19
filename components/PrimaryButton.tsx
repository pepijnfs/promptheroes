import React, { useState, useRef, useEffect } from 'react';
import './CustomButton.css';

interface PrimaryButtonProps {
  text?: string;
  href?: string;
  className?: string;
  variant?: 'filled' | 'outline';
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  fullWidth?: boolean;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ 
  text = "Vraag brochure aan", 
  href = "/signup", 
  className = "",
  variant = "filled", // 'filled' or 'outline'
  onClick,
  fullWidth = false
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const buttonRef = useRef<HTMLDivElement>(null);
  const [normalizedPosition, setNormalizedPosition] = useState(0.5);
  
  const updateMousePosition = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const rawX = e.clientX - rect.left;
    
    // Calculate normalized position (0 to 1) for gradient intensity
    const normalized = Math.max(0, Math.min(1, rawX / rect.width));
    setNormalizedPosition(normalized);
  };
  
  // Used to set initial glow position in the center
  useEffect(() => {
    if (buttonRef.current && isHovered) {
      // Previously used for positioning, no longer needed
    }
  }, [isHovered]);
  
  // Calculate edge intensity - stronger at edges (0 or 1), softer in middle (0.5)
  const edgeIntensity = Math.abs(normalizedPosition - 0.5) * 2; // 0 in middle, 1 at edges

  // Determine button style based on variant
  const isOutline = variant === 'outline';
  const buttonBgColor = isOutline ? 'transparent' : '#25E47A';
  const buttonHoverBgColor = isOutline ? 'transparent' : '#3c9d78';
  
  return (
    <div className={`${fullWidth ? 'w-full' : 'inline-block'}`}>
      <div 
        ref={buttonRef}
        className={`relative ${fullWidth ? 'flex w-full' : 'inline-flex'} items-center z-10 custom-button transform transition-transform duration-300 hover:scale-105`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setNormalizedPosition(0.5);
        }}
        onMouseMove={updateMousePosition}
      >
        {/* Button link with text */}
        <a
          className={`transition-all duration-300 font-bold flex items-center justify-center h-[50px] text-white relative z-10 overflow-hidden ${isOutline ? 'border border-ph-600 bg-transparent hover:bg-ph-600/10' : 'bg-ph-600 hover:bg-ph-500'} space-x-1 px-6 py-3 rounded-lg ${fullWidth ? 'w-full' : ''} ${className}`}
          href={href}
          onClick={onClick}
          style={{
            background: isHovered ? 
              buttonHoverBgColor : 
              buttonBgColor
          }}
        >
          {/* Enhanced glow effect - only visible on hover for filled variant */}
          {!isOutline && (
            <>
              {/* Cursor-following glow effect - reduced size by ~50% */}
              <div 
                className="absolute -z-10 pointer-events-none transition-opacity duration-300"
                style={{ 
                  background: `radial-gradient(circle at ${normalizedPosition * 100}% 50%, rgba(93, 182, 147, 0.7), rgba(37, 228, 122, 0.3) 40%, transparent 70%)`,
                  opacity: isHovered ? 1 : 0,
                  width: '80%', // Reduced from 160% to 80%
                  height: '100%', // Reduced from 200% to 100%
                  top: '0%', // Adjusted from -50% to 0%
                  left: `${(normalizedPosition * 100) - 40}%`, // Adjusted from -80% to -40%
                  borderRadius: '50%',
                  filter: 'blur(8px)', // Reduced blur from 12px to 8px
                  transform: 'translateZ(0)',
                }}
              />
              
              {/* Edge glow effect - intensifies near edges */}
              <div 
                className="absolute -z-10 inset-0 pointer-events-none edge-glow transition-opacity duration-300"
                style={{ 
                  opacity: isHovered ? 0.6 + edgeIntensity * 0.3 : 0,
                  borderRadius: 'var(--button-radius)'
                }}
              />
              
              {/* Left edge intensity glow */}
              {normalizedPosition < 0.35 && isHovered && (
                <div 
                  className="absolute -z-10 left-0 top-0 bottom-0 w-1/2 pointer-events-none transition-opacity duration-200"
                  style={{ 
                    background: 'linear-gradient(to right, rgba(37, 228, 122, 0.5), transparent)',
                    opacity: isHovered ? (1 - normalizedPosition * 2) * 0.7 : 0,
                    borderRadius: 'var(--button-radius)',
                    filter: 'blur(4px)'
                  }}
                />
              )}
              
              {/* Right edge intensity glow */}
              {normalizedPosition > 0.65 && isHovered && (
                <div 
                  className="absolute -z-10 right-0 top-0 bottom-0 w-1/2 pointer-events-none transition-opacity duration-200"
                  style={{ 
                    background: 'linear-gradient(to left, rgba(37, 228, 122, 0.5), transparent)',
                    opacity: isHovered ? (normalizedPosition - 0.5) * 1.4 : 0,
                    borderRadius: 'var(--button-radius)',
                    filter: 'blur(4px)'
                  }}
                />
              )}
              
              {/* Subtle inner glow for depth */}
              <div 
                className="absolute -z-10 inset-0 pointer-events-none transition-opacity duration-300"
                style={{ 
                  background: 'linear-gradient(to bottom, rgba(255,255,255,0.1), transparent)',
                  opacity: isHovered ? 0.5 : 0,
                  borderRadius: 'var(--button-radius)'
                }}
              />
            </>
          )}
          
          {/* Button text */}
          <span className="text-white">{text}</span>
          
          {/* Arrow icon */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 text-white" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default PrimaryButton; 