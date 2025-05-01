'use client'

import React from 'react'
import { motion } from 'framer-motion'

const trainingTopics = [
  {
    title: "AI-fundering",
    description: "Van het begrijpen van verschillende AI-modellen tot het effectief gebruiken van hun unieke sterke punten.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-ph-600">
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
      </svg>
    )
  },
  {
    title: "Effectief prompts schrijven",
    description: "Hoe je duidelijke, gestructureerde prompts schrijft die de juiste resultaten opleveren.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-ph-600">
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
        <path d="M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1"></path>
        <path d="M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1"></path>
      </svg>
    )
  },
  {
    title: "AI in je workflow",
    description: "Hoe je AI-tools inzet voor codegeneratie, debugging, refactoring en documentatie.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-ph-600">
        <circle cx="18" cy="18" r="3"></circle>
        <circle cx="6" cy="6" r="3"></circle>
        <path d="M6 21V9a9 9 0 0 0 9 9"></path>
      </svg>
    )
  },
  {
    title: "Best practices",
    description: "De do's en don'ts van AI-ontwikkeling. Hoe je codekwaliteit waarborgt en veilig omgaat met AI-code.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-ph-600">
        <path d="M12 2H2v10h10V2Z"></path>
        <path d="M12 12H2v10h10V12Z"></path>
        <path d="M22 2h-10v10h10V2Z"></path>
        <path d="M22 12h-10v10h10V12Z"></path>
      </svg>
    )
  }
]

const TrainingOverview = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-ph-600/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-ph-600/10 to-transparent"></div>
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
              Wat <span className="text-ph-600">leer</span> je bij Prompt Pilot?
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Een complete training in het effectief gebruiken van AI EDI&apos;s voor programmeren.
            </p>
          </motion.div>
        </div>
        
        {/* Training Topics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trainingTopics.map((topic, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-b from-ph-950 to-ph-900 p-6 rounded-xl border border-ph-800 hover:border-ph-600 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-12 h-12 bg-ph-600/20 rounded-lg flex items-center justify-center mb-4">
                {topic.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">{topic.title}</h3>
              <p className="text-white/70">{topic.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrainingOverview 