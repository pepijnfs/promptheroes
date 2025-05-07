'use client'

import React from 'react'
import { motion } from 'framer-motion'
import TrainingCard from './TrainingCard'
import { trainings } from '@/services/trainingService'

const TrainingSection = () => {
  return (
    <section className="py-20 relative overflow-hidden" id="trainings">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-ph-900"></div>
        </div>
      
      <div className="w-section-xl relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Onze <span className="text-gradient-blue-gold">trainingen</span>
            </h2>
            <p className="text-ph-300 max-w-2xl mx-auto">
              Kies de training die het beste aansluit bij de ontwikkelbehoefte van jouw team
            </p>
          </motion.div>
        </div>
        
        {/* Trainings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trainings.map((training, index) => (
            <TrainingCard
              key={training.id}
              index={index} 
              title={training.title}
              subtitle={training.subtitle}
              imageSrc={training.imageSrc}
              date={training.date}
              duration={training.duration}
              location={training.location}
              isComingSoon={training.isComingSoon}
              trainingId={training.id}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrainingSection 