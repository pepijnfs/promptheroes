'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import logoIcon from './logo/ph-logo-icon.png'

interface LogoProps {
  className?: string
  width?: number
  height?: number
  textSize?: 'sm' | 'md' | 'lg' | 'xl'
  showText?: boolean
}

const Logo = ({ 
  className = '', 
  width = 100,
  height = 24,
  textSize = 'lg',
  showText = true 
}: LogoProps) => {
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
      <div style={{ height: `${height}px` }} className="w-auto relative">
        <Image 
          src={logoIcon}
          alt="Prompt Heroes Logo - AI Trainingen voor Developers"
          width={width}
          height={height}
          className="h-full w-auto"
          priority={true}
          quality={100}
          loading="eager"
          sizes="(max-width: 768px) 100px, 150px"
          placeholder="blur"
        />
      </div>
      {showText && (
        <span className={`font-bold ${textSizeClasses[textSize]}`}>
          <span>Prompt Heroes</span>
        </span>
      )}
    </div>
  )
}

export default Logo 