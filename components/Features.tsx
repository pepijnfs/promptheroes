'use client'

import React from 'react'
import { motion } from 'framer-motion'

const featuresList = [
  {
    title: 'AI Consultancy',
    description: 'Expert guidance on implementing AI solutions tailored to your business needs and goals.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-hero-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 1 0 10 10H12V2z"></path>
        <path d="M12 2a10 10 0 0 1 10 10h-10V2z"></path>
        <circle cx="12" cy="12" r="6"></circle>
        <circle cx="12" cy="12" r="2"></circle>
      </svg>
    )
  },
  {
    title: 'Prompt Engineering Training',
    description: 'Learn how to craft effective prompts that maximize AI model outputs for your specific use cases.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-hero-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 16.2V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v10.2A4 4 0 0 0 7.2 20h7.6a4 4 0 0 0 3.2-3.8z"></path>
        <path d="m4 5 2-1 2 1"></path>
        <path d="M14 5V4c0-.5-.5-1-1-1H9c-.5 0-1 .5-1 1v1"></path>
        <path d="M8 16h.01"></path>
        <path d="M16 16h.01"></path>
        <path d="M12 12a4 4 0 0 0-4 4h8a4 4 0 0 0-4-4z"></path>
      </svg>
    )
  },
  {
    title: 'n8n Workflow Implementation',
    description: 'Custom n8n workflow design and implementation to automate your business processes efficiently.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-hero-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
      </svg>
    )
  }
]

const Features = () => {
  return (
    <section id="features" className="py-20 relative overflow-hidden">
      <div className="w-section-xl">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-hero-purple-400">Expertise</span>
          </h2>
          <p className="text-hero-dark-300 max-w-2xl mx-auto">
            We empower businesses with cutting-edge AI solutions and automation workflows.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuresList.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-hero-dark-900 to-hero-dark-950 p-8 rounded-xl border border-hero-dark-800 hover:border-hero-purple-900 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -5,
                boxShadow: '0 10px 20px -5px rgba(76, 29, 149, 0.3)'
              }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
              <p className="text-hero-dark-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features 