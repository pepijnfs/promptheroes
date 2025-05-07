'use client'

import React from 'react'
import { motion } from 'framer-motion'
import TrainingCard from './TrainingCard'
import { Training } from '@/services/trainingService'

type RelatedTrainingsProps = {
  currentTrainingId: string
  relatedTrainings: Training[]
}

// We still accept currentTrainingId but mark it as unused with a comment
const RelatedTrainings: React.FC<RelatedTrainingsProps> = ({ 
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  currentTrainingId,
  relatedTrainings
}) => {
  return (
    <section className="py-20 bg-ph-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ph-600/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ph-600/30 to-transparent"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-ph-600/5 rounded-full blur-3xl"></div>
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
              Gerelateerde <span className="text-ph-600">trainingen</span>
            </h2>
            <p className="text-ph-300 max-w-2xl mx-auto">
              Ontdek andere trainingen die je helpen om het maximale uit AI te halen
            </p>
          </motion.div>
        </div>
        
        {/* Trainings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedTrainings.map(training => (
            <TrainingCard
              key={training.id}
              title={training.title}
              description={training.subtitle}
              duration={training.duration}
              price="€2.500"
              slug={training.id}
              isComingSoon={training.isComingSoon}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default RelatedTrainings 