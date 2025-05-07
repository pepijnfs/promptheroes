'use client'

import React, { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import pepijnImage from '../logo/pepijn-steijger.jpeg'

// Calculate positions in a circle
const NUM_POSITIONS = 8; // Number of positions around the circle

const InstructorSpotlight = () => {
  const [isHovered, setIsHovered] = useState(false)
  const [badgePositions, setBadgePositions] = useState({
    experience: 0,
    projects: 4 // Start on opposite sides
  })
  const profileRef = useRef<HTMLDivElement>(null)
  const [badgeCircle, setBadgeCircle] = useState<Array<{x: number, y: number}>>([])

  // Update profile dimensions when component mounts or window resizes
  useEffect(() => {
    const updateDimensions = () => {
      if (profileRef.current) {
        const rect = profileRef.current.getBoundingClientRect()
        
        // Calculate positions - radius is exactly at the edge of the image
        const radius = rect.width / 2
        const positions = Array.from({ length: NUM_POSITIONS }, (_, i) => {
          const angle = (i * 2 * Math.PI) / NUM_POSITIONS - (Math.PI / 2) // Start from top (-90 degrees)
          return {
            x: Math.cos(angle) * radius,
            y: Math.sin(angle) * radius
          }
        })
        setBadgeCircle(positions)
      }
    }
    
    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  const handleHover = () => {
    setIsHovered(true)
    setBadgePositions(prev => ({
      experience: (prev.experience + 1) % NUM_POSITIONS,
      projects: (prev.projects + 1) % NUM_POSITIONS
    }))
  }

  const handleHoverEnd = () => {
    setIsHovered(false)
    setBadgePositions(prev => ({
      experience: (prev.experience + 1) % NUM_POSITIONS,
      projects: (prev.projects + 1) % NUM_POSITIONS
    }))
  }

  return (
    <section className="py-20 relative overflow-hidden" id="training">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-ph-900"></div>
        </div>

      <div className="w-section-xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Instructor Image */}
          <motion.div 
            className="lg:w-2/5"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 mx-auto" style={{ transform: 'translateY(0px)' }}>
              {/* Glow effect behind image */}
              <motion.div 
                className="absolute -inset-1 bg-gradient-to-tr from-ph-600 to-ph-900 rounded-full blur-xl"
                initial={{ opacity: 0.3 }}
                animate={{ 
                  opacity: isHovered ? [0.3, 0.4, 0.3] : 0.3,
                  scale: isHovered ? [1, 1.05, 1] : 1,
                  filter: isHovered ? ["blur(20px)", "blur(24px)", "blur(20px)"] : "blur(20px)"
                }}
                transition={{ 
                  duration: isHovered ? 2.5 : 0.5, 
                  repeat: isHovered ? Infinity : 0,
                  ease: "easeInOut"
                }}
              ></motion.div>
              
              {/* Instructor image */}
              <div 
                ref={profileRef}
                className="relative overflow-hidden w-full h-full rounded-full p-[2px] cursor-pointer gradient-profile-border"
                onMouseEnter={handleHover}
                onMouseLeave={handleHoverEnd}
              >
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <Image
                    src={pepijnImage}
                    alt="Pepijn Steijger - AI Consultant & Specialist"
                    fill
                    className="object-cover rounded-full"
                    quality={100}
                    sizes="(max-width: 768px) 320px, 400px"
                    priority={true}
                    placeholder="blur"
                  />
                </div>
              </div>
              
              {/* Only render badges if we have dimensions */}
              {badgeCircle.length > 0 && (
                <>
                  {/* Experience badge */}
                  <motion.div 
                    className="absolute bg-white border border-ph-600/30 px-4 py-2 rounded-full shadow-lg"
                    style={{
                      left: '40%', // Center of the profile
                      top: '40%',  // Center of the profile
                      transform: 'translate(-40%, -50%)', // Center the badge itself
                      zIndex: 10
                    }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ 
                      x: badgeCircle[badgePositions.experience].x,
                      y: badgeCircle[badgePositions.experience].y,
                      scale: 1,
                      opacity: 1
                    }}
                    transition={{ 
                      type: "spring",
                      stiffness: 300,
                      damping: 20
                    }}
                  >
                    <div className="text-sm font-bold text-ph-600">10+ jaar</div>
                    <div className="text-xs text-ph-700">ervaring</div>
                  </motion.div>
                  
                  {/* Projects badge */}
                  <motion.div 
                    className="absolute bg-white border border-ph-600/30 px-4 py-2 rounded-full shadow-lg"
                    style={{
                      left: '40%', // Center of the profile
                      top: '40%',  // Center of the profile
                      transform: 'translate(-40%, -50%)', // Center the badge itself
                      zIndex: 10
                    }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ 
                      x: badgeCircle[badgePositions.projects].x,
                      y: badgeCircle[badgePositions.projects].y,
                      scale: 1,
                      opacity: 1
                    }}
                    transition={{ 
                      type: "spring",
                      stiffness: 300,
                      damping: 20
                    }}
                  >
                    <div className="text-sm font-bold text-ph-600">4.000+</div>
                    <div className="text-xs text-ph-700">AI uren</div>
                  </motion.div>
                </>
              )}
            </div>

            <style jsx>{`
              .gradient-profile-border {
                background: linear-gradient(var(--ph-600), var(--ph-600)) padding-box,
                  conic-gradient(
                    from var(--gradient-angle),
                    var(--btn-primary-highlight),
                    var(--btn-primary-highlight) var(--gradient-percent),
                    var(--gradient-shine) calc(var(--gradient-percent) * 2),
                    var(--btn-primary-highlight) calc(var(--gradient-percent) * 3),
                    var(--btn-primary-highlight) calc(var(--gradient-percent) * 4)
                  ) border-box;
                border: 2px solid transparent;
                animation: border-gradient-angle 3s linear infinite;
              }

              .gradient-profile-border:hover {
                animation-duration: 1.5s;
              }

              @property --gradient-angle {
                syntax: "<angle>";
                inherits: false;
                initial-value: 0deg;
              }

              @keyframes border-gradient-angle {
                0% {
                  --gradient-angle: 0deg;
                }
                100% {
                  --gradient-angle: 360deg;
                }
              }
            `}</style>
          </motion.div>
          
          {/* Instructor Details */}
          <motion.div 
            className="lg:w-3/5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block bg-ph-700 px-3 py-1 rounded-full text-white text-sm font-medium mb-4">
              Hoofdinstructeur
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Ontmoet <span className="text-gradient-blue-gold">Pepijn Steijger</span>
            </h2>
            
            <p className="text-ph-300 mb-6">
              Pepijn is een ervaren AI prompt-engineer en expert in AI-ondersteund programmeren met meer dan tien jaar ervaring in marketing en AI. Hij heeft tientallen developers geholpen hun workflow te transformeren met tools als Cursor, Copilot, Windsurf en meer.
            </p>
            
            <div className="flex flex-wrap gap-3 mb-8">
              <div className="bg-ph-100 border border-ph-200 px-3 py-1 rounded-md text-sm text-ph-800">AI Specialist</div>
              <div className="bg-ph-100 border border-ph-200 px-3 py-1 rounded-md text-sm text-ph-800">Senior Marketeer</div>
              <div className="bg-ph-100 border border-ph-200 px-3 py-1 rounded-md text-sm text-ph-800">Trainer</div>
            </div>
            
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default InstructorSpotlight 