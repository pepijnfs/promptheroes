import React from 'react';
import './SecondaryButton.css';

interface SecondaryButtonProps {
  text: string;
  href: string;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  fullWidth?: boolean;
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({
  text,
  href,
  className = '',
  onClick,
  fullWidth = false
}) => {
  return (
    <div className={`${fullWidth ? 'w-full' : 'inline-block'} secondary-button`}>
      <div 
        className={`relative ${fullWidth ? 'flex w-full' : 'inline-flex'} items-center z-10 transition-transform duration-300 hover:scale-105`}
      >
        <a
          className={`font-bold flex items-center justify-center text-white relative z-10 overflow-hidden rounded-lg ${fullWidth ? 'w-full' : ''} ${className}`}
          href={href}
          onClick={onClick}
        >
          <span className="text-white">{text}</span>
        </a>
      </div>
    </div>
  );
};

export default SecondaryButton; 