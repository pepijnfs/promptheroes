'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  DocumentTextIcon,
  Squares2X2Icon,
  BookOpenIcon,
  ChartBarIcon
} from '@heroicons/react/24/solid'

const features = [
  {
    title: "Prompt-bibliotheek",
    description: "Toegang tot een uitgebreide verzameling van effectieve prompts voor verschillende AI-tools, inclusief Cursor, GitHub Copilot, en meer.",
    icon: <DocumentTextIcon className="w-6 h-6 text-ph-600" />
  },
  {
    title: "Best practices",
    description: "Leer de beste strategieën en technieken voor het werken met AI-tools, gebaseerd op jarenlange ervaring en succesvolle implementaties.",
    icon: <Squares2X2Icon className="w-6 h-6 text-ph-600" />
  },
  {
    title: "Training-documentatie",
    description: "Blader door alle trainingsmaterialen, inclusief presentaties, oefeningen en aanvullende bronnen van je gevolgde trainingen.",
    icon: <BookOpenIcon className="w-6 h-6 text-ph-600" />
  },
  {
    title: "Voortgang-tracking",
    description: "Volg je voortgang en prestaties, met inzichten in je verbetering en aanbevelingen voor verdere ontwikkeling.",
    icon: <ChartBarIcon className="w-6 h-6 text-ph-600" />
  }
]

const LoginFeatures = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-ph-900">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ph-600/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ph-600/30 to-transparent"></div>
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-ph-600/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-ph-600/10 to-transparent"></div>
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
              Binnenkort <span className="text-ph-600">beschikbaar</span>
            </h2>
            <p className="text-ph-300 max-w-2xl mx-auto">
              Na de lancering krijg je toegang tot een schat aan AI-gerelateerde bronnen en tools
            </p>
          </motion.div>
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-b from-ph-950 to-ph-900 p-6 rounded-xl border border-ph-800 hover:border-ph-600 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-12 h-12 bg-ph-800 rounded-lg flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
              <p className="text-ph-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LoginFeatures 