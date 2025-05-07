'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ChartBarIcon, CodeBracketIcon, UserGroupIcon } from '@heroicons/react/24/solid'

const AIBenefitsSection = () => {
  const benefits = [
    {
      icon: <ChartBarIcon className="w-6 h-6" />,
      title: "Verhoog productiviteit met 30%",
      description: "AI tools automatiseren repetitieve taken en versnellen het ontwikkelproces aanzienlijk"
    },
    {
      icon: <CodeBracketIcon className="w-6 h-6" />,
      title: "Verbeterde code kwaliteit",
      description: "AI detecteert bugs, optimaliseert code en zorgt voor consistente ontwikkelstandaarden"
    },
    {
      icon: <UserGroupIcon className="w-6 h-6" />,
      title: "Sneller inwerken en kennisdeling",
      description: "Nieuwe teamleden worden sneller productief met AI-assistentie bij codebase-begrip"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
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
              Waarom <span className="text-gradient-blue-gold">AI voor developers</span>
            </h2>
            <p className="text-ph-300 max-w-2xl mx-auto">
              Verhoog de productiviteit van je development team zonder extra mensen aan te nemen.
            </p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-b from-ph-950 to-ph-900 p-6 rounded-xl border border-ph-800 hover:border-ph-600 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-12 h-12 bg-ph-600/20 rounded-lg flex items-center justify-center mb-4">
                <div className="text-ph-600">
                  {benefit.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">{benefit.title}</h3>
              <p className="text-ph-300">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AIBenefitsSection 