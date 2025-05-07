'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { CalendarIcon, ClockIcon, MapPinIcon } from '@heroicons/react/24/solid'
import PrimaryButton from './PrimaryButton'
import SecondaryButton from './SecondaryButton'

export type TrainingCardProps = {
  title: string
  subtitle: string
  imageSrc: string
  date: string
  duration: string
  location: string
  isComingSoon?: boolean
  index?: number
  trainingId?: string
}

const TrainingCard: React.FC<TrainingCardProps> = ({
  title,
  subtitle,
  imageSrc,
  date,
  duration,
  location,
  isComingSoon = false,
  index = 0,
  trainingId
}) => {
  return (
    <motion.div
      className="flex flex-col bg-gradient-to-b from-ph-950 to-ph-900 rounded-xl overflow-hidden border border-ph-800 transition-all duration-300"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Header */}
      <div className="w-full h-48 bg-[#222222] flex items-center justify-center">
        <h3 className="text-2xl font-bold text-white text-center px-4">{title}</h3>
      </div>
      
      {/* Content */}
      <div className="p-6 pb-0 flex-grow">
        <p className="text-ph-300 mb-4">{subtitle}</p>
        
        {/* Details */}
        <div className="space-y-3 mb-4">
          <div className="flex items-center text-white/80">
            <CalendarIcon className="h-5 w-5 mr-2 text-ph-600" />
            <span className="text-sm">{date}</span>
          </div>
          <div className="flex items-center text-white/80">
            <ClockIcon className="h-5 w-5 mr-2 text-ph-600" />
            <span className="text-sm">{duration}</span>
          </div>
          <div className="flex items-center text-white/80">
            <MapPinIcon className="h-5 w-5 mr-2 text-ph-600" />
            <span className="text-sm">{location}</span>
          </div>
        </div>
      </div>
      
      {/* Buttons */}
      <div className="px-6 pt-2 pb-6">
        <div className="flex flex-col gap-3">
          <PrimaryButton 
            text="Vraag offerte aan" 
            href="#lead-form"
            fullWidth
          />
          {!isComingSoon ? (
            <SecondaryButton
              text="Meer informatie"
              href={`/training/${trainingId}`}
              fullWidth
            />
          ) : (
            <SecondaryButton
              text="Binnenkort beschikbaar"
              href="#"
              fullWidth
            />
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default TrainingCard 