'use client'

import React from 'react'
import { motion } from 'framer-motion'
import PrimaryButton from '../common/PrimaryButton'
import SecondaryButton from '../common/SecondaryButton'
import Image from 'next/image'

const styles = `
.typewriter {
  border-right: 2px solid #6366f1;
  white-space: pre-wrap;
  overflow: hidden;
  display: inline-block;
  width: 0;
  animation: typing 2s steps(80, end) forwards,
             blink 1s step-end infinite;
}

@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

@keyframes blink {
  from, to { border-color: transparent }
  50% { border-color: #6366f1 }
}

.bug-line {
  color: #ef4444;
  font-weight: bold;
  background-color: rgba(239, 68, 68, 0.1);
  display: inline-block;
  width: 100%;
}

.will-change-transform {
  will-change: transform;
}

.logo-slider {
  display: flex;
  animation: slide 30s linear infinite;
  width: max-content;
  mask-image: linear-gradient(to right, 
    transparent 0%,
    black 15%,
    black 85%,
    transparent 100%
  );
  -webkit-mask-image: linear-gradient(to right, 
    transparent 0%,
    black 15%,
    black 85%,
    transparent 100%
  );
  mask-size: 200% 100%;
  -webkit-mask-size: 200% 100%;
}

.logo-slider:hover {
  animation-play-state: paused;
}

@keyframes slide {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.logo-container {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  height: 40px;
  opacity: 0.7;
  transition: opacity 0.3s ease;
}

.logo-container:hover {
  opacity: 1;
}
`;

// Add the styles to the document
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement("style");
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
}

const HeroSection = () => {
  const logos = [
    { src: '/icons/Claude_logo.svg', alt: 'Claude' },
    { src: '/icons/Cursor_logo.svg', alt: 'Cursor' },
    { src: '/icons/OpenAI_logo.svg', alt: 'OpenAI' },
    { src: '/icons/Windsurf_logo.svg', alt: 'Windsurf' },
    { src: '/icons/Bolt_logo.svg', alt: 'Bolt' },
    { src: '/icons/GitHub_Copilot_logo_line.svg', alt: 'GitHub Copilot' },
  ];

  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-ph-900"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-ph-800/30 via-transparent to-transparent"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-ph-500/10 rounded-full blur-3xl"></div>
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 z-0 opacity-10" 
        style={{ 
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px)', 
          backgroundSize: '40px 40px' 
        }}>
      </div>
      
      <div className="w-section-lg pt-10 relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="h1 min-h-[80px]">
              <span className="text-white">Krijg tot </span>
              <span className="text-gradient-blue-gold">30%*</span>
              <span className="text-white"> meer gedaan, zonder extra developers aan te nemen</span>
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <p className="text-body-lg text-ph-300 max-w-2xl min-h-[72px]">
              Zet AI vandaag nog in om je development team productiever te maken.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 mb-16 w-full sm:w-auto min-h-[120px]"
          >
            <div className="w-full sm:w-auto">
              <PrimaryButton 
                text="Offerte aanvragen" 
                href="#lead-form"
                fullWidth
              />
            </div>
            
            <div className="w-full sm:w-auto">
              <SecondaryButton 
                text="Trainingen bekijken"
                href="#trainings"
                fullWidth
              />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-8 w-full min-h-[120px] overflow-hidden"
          >
            <div className="logo-slider">
              {duplicatedLogos.map((logo, index) => (
                <div key={index} className="logo-container">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={120}
                    height={logo.alt === 'Bolt' ? 28 : 40}
                    style={{ objectFit: 'contain', height: logo.alt === 'Bolt' ? 28 : 40 }}
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection 