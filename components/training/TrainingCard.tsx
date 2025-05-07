'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { CalendarIcon, ClockIcon, MapPinIcon } from '@heroicons/react/24/solid'
import PrimaryButton from '@/components/common/PrimaryButton'
import SecondaryButton from '@/components/common/SecondaryButton'

interface TrainingCardProps {
  title: string
  description: string
  duration: string
  date: string
  location: string
  slug: string
  isComingSoon?: boolean
}

const TrainingCard: React.FC<TrainingCardProps> = ({
  title,
  description,
  duration,
  date,
  location,
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
      <div className="w-full h-48 bg-[#333] flex items-center justify-center">
        <h3 className="text-2xl font-bold text-white text-center px-4">{title}</h3>
      </div>
      
      {/* Content */}
      <div className="p-6 pb-0 flex-grow">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-ph-300 mb-4">{description}</p>
        
        {/* Details */}
        <div className="space-y-3 mb-4">
          <div className="flex items-center text-ph-300">
            <CalendarIcon className="h-5 w-5 mr-2 text-ph-600" />
            <span className="text-sm">{date}</span>
          </div>
          <div className="flex items-center text-ph-300">
            <ClockIcon className="h-5 w-5 mr-2 text-ph-600" />
            <span className="text-sm">{duration}</span>
          </div>
          <div className="flex items-center text-ph-300">
            <MapPinIcon className="h-5 w-5 mr-2 text-ph-600" />
            <span className="text-sm">{location}</span>
          </div>
        </div>
      </div>
      
      {/* Actions */}
      <div className="p-6 pt-4 space-y-4">
        <PrimaryButton 
          text="Vraag offerte aan" 
          href="#lead-form"
          fullWidth
        />
        {isComingSoon ? (
          <SecondaryButton
            text="Binnenkort beschikbaar"
            href="#"
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