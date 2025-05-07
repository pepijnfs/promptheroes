'use client'

import React from 'react'
import { motion } from 'framer-motion'
import SecondaryButton from '../common/SecondaryButton'

const FinalCTA = () => {
  return (
    <section className="py-20 bg-ph-900 relative overflow-hidden" id="cta">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-2/3 h-1/3 bg-gradient-to-br from-ph-600/10 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-ph-600/5 to-transparent"></div>
      </div>
      
      <div className="w-section-xl relative z-10">
        <div className="max-w-4xl mx-auto bg-ph-950/80 backdrop-blur-sm p-10 rounded-xl border border-ph-800/50">
          <div className="text-center mb-8">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Ready to become a <span className="text-ph-600">Prompt Hero</span>?
            </motion.h2>
            <motion.p 
              className="text-ph-300 text-lg max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Join our expert-led training and learn how to leverage the full power of Cursor AI
            </motion.p>
          </div>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a href="#lead-form" className="ph-button text-center">
              Start Your Training
            </a>
            <SecondaryButton
              text="Veelgestelde vragen"
              href="#faq"
            />
          </motion.div>
          
          <motion.div 
            className="mt-10 flex items-center justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="bg-ph-950/60 rounded-lg px-5 py-3 inline-flex items-center">
              <svg className="w-5 h-5 text-ph-600 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
              <span className="text-ph-300 text-sm">No prior experience needed</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default FinalCTA 