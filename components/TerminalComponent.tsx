'use client'

import React, { useState, useEffect, useRef } from 'react'

const TerminalComponent: React.FC = () => {
  const [displayedText, setDisplayedText] = useState<string>('')
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const text = `$ prompt heroes init
Initializing new project...
Creating project structure...
Setting up dependencies...
Installing required packages...
Configuration complete!

$ prompt heroes train
Training model on your codebase...
Analyzing patterns...
Learning your preferences...
Training complete!

$ prompt heroes deploy
Deploying AI assistant...
Configuring workspace...
Setting up integrations...
Deployment successful!

Your AI assistant is ready to help you code faster and better!`

    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayedText(text.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(typingInterval)
      }
    }, 30)

    return () => clearInterval(typingInterval)
  }, [])

  return (
    <div className="w-section-xl">
      <div className="relative">
        <div
          ref={containerRef}
          className="bg-black rounded-lg border border-white/10 overflow-hidden"
        >
          <div className="flex items-center justify-between px-4 py-2 bg-gray-900/50 border-b border-white/10">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="text-white/60 text-sm">prompt-heroes-terminal</div>
            <div className="w-16" /> {/* Spacer for symmetry */}
          </div>
          <div className="p-4">
            <pre className="font-mono text-sm text-green-400 whitespace-pre-wrap">
              {displayedText}
            </pre>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TerminalComponent 