'use client'

import { useEffect } from 'react'
import Image from 'next/image'

interface LogoProps {
  className?: string
  width?: number
  height?: number
  textSize?: 'sm' | 'md' | 'lg' | 'xl'
  showText?: boolean
}

const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  width = 40,
  height = 40,
  textSize = 'lg',
  showText = true 
}) => {
  useEffect(() => {
    // Force immediate state update for SSR and animation consistency
  }, [])
  
  const textSizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl'
  }

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div style={{ height: `${height}px`, width: `${width}px` }} className="relative">
        <Image 
          src="/logos/PromptPilot_Logos-05.svg"
          alt="Prompt Pilot Logo - AI Trainingen voor Developers"
          width={width}
          height={height}
          className="h-full w-auto"
          priority={true}
          quality={100}
          loading="eager"
          sizes="(max-width: 768px) 40px, 40px"
        />
      </div>
      {showText && (
        <span className={`font-bold ${textSizeClasses[textSize]}`}>
          <span>Prompt Pilot</span>
        </span>
      )}
    </div>
  )
}

export default Logo 