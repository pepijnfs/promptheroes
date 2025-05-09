'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { CalendarIcon, ClockIcon, MapPinIcon } from '@heroicons/react/24/solid'
import { Training } from '@/services/trainingService'
import PrimaryButton from '@/components/common/PrimaryButton'
import SecondaryButton from '@/components/common/SecondaryButton'

type TrainingHeroProps = {
  training: Training
}

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
`;

// Add the styles to the document
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement("style");
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
}

const TrainingHero: React.FC<TrainingHeroProps> = ({ training }) => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-ph-900"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-ph-800/30 via-transparent to-transparent"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-ph-600/10 rounded-full blur-3xl"></div>
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
            <h1 className="h1">
              <span className="text-gradient-blue-gold">{training.title} </span>
              <span className="text-white">Training</span>
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <p className="text-body-lg text-ph-300 max-w-1xl">
              {training.subtitle}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-8 mb-12 text-ph-300"
          >
            <div className="flex items-center">
              <CalendarIcon className="h-5 w-5 mr-2 text-ph-600" />
              <span>{training.date}</span>
            </div>
            <div className="flex items-center">
              <ClockIcon className="h-5 w-5 mr-2 text-ph-600" />
              <span>{training.duration}</span>
            </div>
            <div className="flex items-center">
              <MapPinIcon className="h-5 w-5 mr-2 text-ph-600" />
              <span>{training.location}</span>
            </div>
            <div className="flex items-center">
              <span className="font-semibold mr-2">Kosten:</span>
              <span>Op aanvraag</span>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <PrimaryButton 
              text="Training aanvragen" 
              href="#lead-form" 
            />
            
            <SecondaryButton
              text="Contact opnemen"
              href="#contact"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-8 w-full"
          >
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default TrainingHero 