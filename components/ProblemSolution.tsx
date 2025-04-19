'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  DocumentTextIcon,
  ArrowPathIcon,
  SparklesIcon
} from '@heroicons/react/24/solid'

const problemSolutionData = [
  {
    problem: "Laat AI je testcode schrijven en uitvoeren",
    solution: "Bespaar uren ontwikkeltijd met uitgebreide testsuites die automatisch worden gegenereerd en alle randgevallen dekken",
    icon: <DocumentTextIcon className="w-6 h-6 text-ph-600" />
  },
  {
    problem: "Vraag AI om herhalend programmeerwerk te doen",
    solution: "Focus op creatieve oplossingen terwijl AI het repetitieve werk afhandelt, van boilerplate code tot standaard componenten.",
    icon: <ArrowPathIcon className="w-6 h-6 text-ph-600" />
  },
  {
    problem: "Werk samen met AI om je code te verbeteren",
    solution: "Ontdek betere implementaties, optimaliseer prestaties en leer nieuwe technieken door realtime AI-begeleiding.",
    icon: <SparklesIcon className="w-6 h-6 text-ph-600" />
  }
]

const ModeBadge = () => {
  const [modeIndex, setModeIndex] = useState(0);
  
  const modes = [
    { name: "Agent" },
    { name: "Ask" },
    { name: "Manual" }
  ];

  const handleMouseEnter = () => {
    setModeIndex((prevIndex) => (prevIndex + 1) % modes.length);
  };
  
  const currentMode = modes[modeIndex];

  return (
    <motion.div 
      className="inline-flex items-center gap-2 bg-ph-800 px-4 py-2 rounded-full cursor-pointer transition-all duration-150 hover:bg-ph-700 overflow-hidden"
      onMouseEnter={handleMouseEnter}
    >
      <span className="w-3 h-3 bg-ph-600 rounded-full animate-pulse flex-shrink-0"></span>
      <div className="relative">
        <motion.span 
          key={currentMode.name}
          className="text-sm font-medium text-white block"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ 
            type: "spring", 
            stiffness: 300, 
            damping: 25,
            duration: 0.3
          }}
        >
          {currentMode.name}
        </motion.span>
      </div>
    </motion.div>
  );
};

const ProblemSolution = () => {
  const [displayedText, setDisplayedText] = useState<string>('')
  const [displayedFileText, setDisplayedFileText] = useState<string>('')
  const [isFirstMessageComplete, setIsFirstMessageComplete] = useState<boolean>(false)

  useEffect(() => {
    const firstMessage = "Ik help je graag met je authenticatie-systeem tests. Ik zal een uitgebreide suite genereren met unit tests voor inloggen, registratie, wachtwoord reset, sessiebeheer en beveiligingsfuncties."
    
    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex <= firstMessage.length) {
        setDisplayedText(firstMessage.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(typingInterval)
        setIsFirstMessageComplete(true)
      }
    }, 20) // Increased typing speed

    return () => clearInterval(typingInterval)
  }, [])

  useEffect(() => {
    if (!isFirstMessageComplete) return;
    
    const fileText = `// auth.test.js
import { describe, it, expect, beforeEach, jest } from '@jest/globals';
import { AuthService } from '../services/auth';
import { mockUserRepository } from '../__mocks__/userRepository';

describe('Authenticatie Service', () => {
  let authService;
  
  beforeEach(() => {
    // Testomgeving opzetten...`
    
    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex <= fileText.length) {
        setDisplayedFileText(fileText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(typingInterval)
      }
    }, 15) // Even faster typing for code

    return () => clearInterval(typingInterval)
  }, [isFirstMessageComplete])

  return (
    <section className="py-20 relative overflow-hidden bg-white" id="about">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-ph-600/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="w-section-xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Column - Problems/Solutions */}
          <motion.div 
            className="lg:w-1/2 flex-shrink"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-10 text-ph-900">
              Geef je programmeerwerk <span className="text-ph-600">direct</span> een boost
            </h2>
            
            <div className="space-y-8">
              {problemSolutionData.map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="mt-1">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-ph-900">{item.problem}</h3>
                    <p className="text-ph-800">{item.solution}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Right Column - Animated Illustration */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative mx-auto max-w-full">
              {/* Glow effect behind the illustration */}
              <div className="absolute inset-0 bg-ph-600/20 rounded-xl blur-xl transform rotate-3"></div>
              
              {/* Main illustration container */}
              <div className="relative bg-gradient-to-br from-ph-900 to-ph-950 p-6 rounded-xl border border-ph-800/30 min-h-[475px] lg:min-h-[515px]">
                <div className="absolute top-0 right-0 w-20 h-20 bg-ph-600/10 rounded-full blur-xl"></div>
                
                {/* Cursor Interface Mockup */}
                <div className="relative z-10">
                  <div className="mb-6">
                    <div className="flex flex-wrap justify-center gap-2">
                      <ModeBadge />
                      <div className="inline-flex items-center gap-2 bg-ph-800 px-4 py-2 rounded-full whitespace-nowrap">
                        <span className="w-3 h-3 bg-gray-500 rounded-full"></span>
                        <span className="text-sm font-medium text-white/70">Claude 3.7 Sonnet</span>
                      </div>
                      <div className="inline-flex items-center gap-2 bg-ph-800/50 px-4 py-2 rounded-full whitespace-nowrap">
                        <span className="w-3 h-3 bg-gray-500 rounded-full"></span>
                        <span className="text-sm font-medium text-white/70">Gemini 2.5 Pro</span>
                      </div>
                      <div className="inline-flex items-center gap-2 bg-ph-800/50 px-4 py-2 rounded-full whitespace-nowrap">
                        <span className="w-3 h-3 bg-gray-500 rounded-full"></span>
                        <span className="text-sm font-medium text-white/70">GPT-o1</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-ph-800/50 flex items-center justify-center text-white text-sm font-bold">U</div>
                      <div className="bg-ph-800/70 px-4 py-3 rounded-lg text-sm text-white/80">
                        Schrijf de code voor de unit tests voor onze gehele authenticatie-systeem
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-ph-600/30 flex items-center justify-center text-white text-sm font-bold">AI</div>
                      <div className="bg-ph-800/70 px-4 py-3 rounded-lg text-sm text-white/80 relative overflow-hidden">
                        {displayedText}
                      </div>
                    </div>
                    
                    {isFirstMessageComplete && (
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-ph-600/30 flex items-center justify-center text-white text-sm font-bold">AI</div>
                        <div className="bg-ph-800/70 px-4 py-3 rounded-lg text-sm text-white/80 font-mono relative overflow-hidden w-full">
                          <pre className="whitespace-pre-wrap">{displayedFileText}</pre>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ProblemSolution 