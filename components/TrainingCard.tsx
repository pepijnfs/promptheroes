'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { CalendarIcon, ClockIcon, MapPinIcon } from '@heroicons/react/24/solid'
import PrimaryButton from './PrimaryButton'
import SecondaryButton from './SecondaryButton'

interface TrainingCardProps {
  title: string
  description: string
  duration: string
  price: string
  slug: string
  isComingSoon?: boolean
}

const TrainingCard: React.FC<TrainingCardProps> = ({
  title,
  description,
  duration,
  price,
  slug,
  isComingSoon = false
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative"
    >
      {/* Header */}
      <div className="w-full h-48 bg-[#222222] flex items-center justify-center">
        <h3 className="text-2xl font-bold text-white text-center px-4">{title}</h3>
      </div>
      
      {/* Content */}
      <div className="p-6 pb-0 flex-grow">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-ph-300 mb-4">{description}</p>
        
        {/* Details */}
        <div className="space-y-3 mb-4">
          <div className="flex items-center text-white/80">
            <CalendarIcon className="h-5 w-5 mr-2 text-ph-600" />
            <span className="text-sm">{duration}</span>
          </div>
          <div className="flex items-center text-white/80">
            <ClockIcon className="h-5 w-5 mr-2 text-ph-600" />
            <span className="text-sm">{price}</span>
          </div>
          <div className="flex items-center text-white/80">
            <MapPinIcon className="h-5 w-5 mr-2 text-ph-600" />
            <span className="text-sm">{slug}</span>
          </div>
        </div>
      </div>
      
      {/* Actions */}
      <div className="p-6 pt-4">
        <PrimaryButton 
          text="Vraag offerte aan" 
          href="#lead-form"
          fullWidth
        />
        {isComingSoon ? (
          <PrimaryButton
            text="Binnenkort beschikbaar"
            fullWidth
            className="opacity-50 cursor-not-allowed"
          />
        ) : (
          <SecondaryButton
            text="Meer informatie"
            href={`/training/${slug}`}
            fullWidth
          />
        )}
      </div>
    </motion.div>
  )
}

export default TrainingCard 