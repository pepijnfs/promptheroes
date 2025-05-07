'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ChartBarIcon, CheckCircleIcon } from '@heroicons/react/24/solid'
import { Training } from '@/services/trainingService'

type TrainingBenefitsProps = {
  training: Training
}

const TrainingBenefits: React.FC<TrainingBenefitsProps> = ({ training }) => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ph-600/20 to-transparent"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-ph-600/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="w-section-lg relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6">
              <div className="inline-block bg-ph-600/10 px-3 py-1 rounded-full text-ph-600 text-sm font-medium mb-4">
                De voordelen
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-ph-900">
                Waarom deze training <span className="text-ph-600">volgen?</span>
              </h2>
              <p className="text-ph-900/70">
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
                  <span className="text-ph-900/80">{benefit}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative bg-ph-900 rounded-xl overflow-hidden p-8 lg:p-10 border border-ph-800 shadow-lg">
              <div className="absolute top-0 right-0 w-40 h-40 bg-ph-600/10 rounded-full blur-3xl transform translate-x-10 -translate-y-10"></div>
              
              <ChartBarIcon className="h-12 w-12 text-ph-600 mb-6" />
              
              <h3 className="text-2xl font-bold mb-4 text-white">Meetbare productiviteitsgroei</h3>
              <p className="text-ph-300 mb-6">
                Onze klanten rapporteren gemiddeld 20-30% productiviteitsverbetering na het implementeren van de technieken die in deze training worden aangeleerd. Je zult merken dat je team:
              </p>
              
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-ph-600 rounded-full mr-3"></span>
                  <span className="text-ph-300">Sneller code produceert</span>
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-ph-600 rounded-full mr-3"></span>
                  <span className="text-ph-300">Minder bugs introduceert</span>
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-ph-600 rounded-full mr-3"></span>
                  <span className="text-ph-300">Meer tijd heeft voor innovatie</span>
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-ph-600 rounded-full mr-3"></span>
                  <span className="text-ph-300">Complexe problemen sneller oplost</span>
                </li>
              </ul>
              
              <div className="mt-8 pt-6 border-t border-ph-800/40">
                <div className="flex items-center mb-2">
                  <span className="text-lg font-bold text-white">Productiviteitswinst</span>
                  <span className="ml-auto text-lg font-bold text-ph-600">+30%</span>
                </div>
                <div className="w-full bg-ph-800/50 rounded-full h-2.5">
                  <div className="bg-ph-600 h-2.5 rounded-full" style={{ width: '30%' }}></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default TrainingBenefits 