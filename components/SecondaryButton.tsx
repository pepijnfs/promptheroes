import React from 'react';

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
    <a 
      href={href}
      onClick={onClick}
      className={`ph-button-outline inline-flex items-center justify-center h-[50px] ${fullWidth ? 'w-full' : ''} ${className}`}
    >
      <span>{text}</span>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 text-white" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
      </svg>
    </a>
  );
};

export default SecondaryButton; 