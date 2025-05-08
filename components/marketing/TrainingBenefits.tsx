'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircleIcon } from '@heroicons/react/24/solid'
import { Training } from '@/services/trainingService'
import Image from 'next/image'

type TrainingBenefitsProps = {
  training: Training
}

const TrainingBenefits: React.FC<TrainingBenefitsProps> = ({ training }) => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-ph-900"></div>
      </div>
      
      <div className="w-section-xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6">
              <div className="inline-block bg-ph-700 px-3 py-1 rounded-full text-white text-sm font-medium mb-4">
                De voordelen
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Waarom <span className="text-gradient-blue-gold">{training.title}</span> training volgen
              </h2>
              <p className="text-ph-300">
                Door te investeren in onze {training.title} training kan je development team tot wel 30% productiever worden. De juiste AI-tools en technieken kunnen een enorme impact hebben op de efficiëntie en kwaliteit van softwareontwikkeling.
              </p>
            </div>
            
            <ul className="space-y-4">
              {training.benefits.map((benefit, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                  className="flex items-start"
                >
                  <CheckCircleIcon className="h-6 w-6 mr-3 text-ph-600 flex-shrink-0" />
                  <span className="text-ph-300">{benefit}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative lg:-mr-12"
          >
            <div className="relative bg-ph-900 rounded-xl overflow-hidden border border-ph-800 shadow-lg">
              <div className="aspect-video w-full relative">
                <Image
                  src={training.imageSrc}
                  alt={`${training.title} training`}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  style={{
                    borderRadius: "0.75rem",
                    boxShadow: "0 10px 30px -5px rgba(0, 0, 0, 0.3), 0 0 5px -2px rgba(0, 0, 0, 0.2)"
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default TrainingBenefits 