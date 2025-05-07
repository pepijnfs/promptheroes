'use client'

import React from 'react'
import { motion } from 'framer-motion'

const SocialProof = () => {
  return (
    <section className="pt-10 pb-5 md:pt-16 md:pb-6 relative overflow-hidden">
      <div className="w-section-xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Stats */}
          <motion.div 
            className="flex flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-3xl md:text-4xl font-bold text-ph-600">55%</div>
            <div className="text-ph-700 text-sm">Sneller programmeren</div>
          </motion.div>
          
          <motion.div 
            className="flex flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="text-3xl md:text-4xl font-bold text-ph-600">87%</div>
            <div className="text-ph-700 text-sm">Verminderde workload</div>
          </motion.div>
          
          <motion.div 
            className="flex flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="text-3xl md:text-4xl font-bold text-ph-600">26%</div>
            <div className="text-ph-700 text-sm">Meer taken voltooid</div>
          </motion.div>
          
          <motion.div 
            className="flex flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="text-3xl md:text-4xl font-bold text-ph-600">73%</div>
            <div className="text-ph-700 text-sm">Meer flow-state</div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default SocialProof 