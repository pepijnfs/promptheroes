import React from 'react';
import './CustomButton.css';

interface PrimaryButtonProps {
  text?: string;
  href?: string;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  fullWidth?: boolean;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ 
  text = "Vraag brochure aan", 
  href = "/signup", 
  className = "",
  onClick,
  fullWidth = false
}) => {
  return (
    <div className={`${fullWidth ? 'w-full' : 'inline-block'}`}>
      <div 
        className={`relative ${fullWidth ? 'flex w-full' : 'inline-flex'} items-center z-10 custom-button transform transition-transform duration-300 hover:scale-105`}
      >
        <a
          className={`font-bold flex items-center justify-center text-white relative z-10 overflow-hidden rounded-lg ${fullWidth ? 'w-full' : ''} ${className}`}
          href={href}
          onClick={onClick}
        >
          <span className="text-white">{text}</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default PrimaryButton; 