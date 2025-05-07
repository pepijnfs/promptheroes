'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  CalendarIcon, 
  ClockIcon, 
  MapPinIcon, 
  UserGroupIcon, 
  AcademicCapIcon, 
  BriefcaseIcon 
} from '@heroicons/react/24/solid'
import { Training } from '@/services/trainingService'

type TrainingDetailsProps = {
  training: Training
}

const TrainingDetails: React.FC<TrainingDetailsProps> = ({ training }) => {
  return (
    <section className="py-20 bg-ph-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-ph-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-full h-1/2 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-ph-800/30 via-transparent to-transparent"></div>
      </div>
      
      <div className="w-section-lg relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
            Training <span className="text-ph-600">details</span>
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-b from-ph-900 to-ph-900/80 p-8 rounded-xl border border-ph-800"
          >
            <h3 className="text-xl font-bold mb-5 text-white">Praktische informatie</h3>
            <ul className="space-y-4">
              <li className="flex items-center text-ph-300">
                <CalendarIcon className="h-5 w-5 mr-2 text-ph-600" />
                <span>{training.date}</span>
              </li>
              <li className="flex items-center text-ph-300">
                <ClockIcon className="h-5 w-5 mr-2 text-ph-600" />
                <span>{training.duration}</span>
              </li>
              <li className="flex items-center text-ph-300">
                <MapPinIcon className="h-5 w-5 mr-2 text-ph-600" />
                <span>{training.location}</span>
              </li>
            </ul>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gradient-to-b from-ph-900 to-ph-900/80 p-8 rounded-xl border border-ph-800"
          >
            <h3 className="text-xl font-bold mb-5 text-white">Voor wie is deze training?</h3>
            <ul className="space-y-4">
              <li className="flex items-center text-ph-300">
                <UserGroupIcon className="h-5 w-5 mr-2 text-ph-600" />
                <span>Ontwikkelaars en tech teams</span>
              </li>
              <li className="flex items-center text-ph-300">
                <AcademicCapIcon className="h-5 w-5 mr-2 text-ph-600" />
                <span>Zowel beginners als ervaren professionals</span>
              </li>
              <li className="flex items-center text-ph-300">
                <BriefcaseIcon className="h-5 w-5 mr-2 text-ph-600" />
                <span>Teams die hun productiviteit willen verhogen</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default TrainingDetails 