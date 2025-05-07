'use client'

import React from 'react'
import { motion } from 'framer-motion'

const LogoBanner = () => {
  return (
    <section className="py-12 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ph-600/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ph-600/20 to-transparent"></div>
      </div>
      
      <div className="w-section-xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <p className="text-ph-900/60 font-medium">Vertrouwd door organisaties zoals</p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-16"
        >
          <span className="text-ph-900 font-bold text-xl opacity-70">Logoipsum</span>
          <span className="text-ph-900 font-bold text-xl opacity-70">Logoipsum</span>
          <span className="text-ph-900 font-bold text-xl opacity-70">Logoipsum</span>
          <span className="text-ph-900 font-bold text-xl opacity-70">Logoipsum</span>
          <span className="text-ph-900 font-bold text-xl opacity-70">Logoipsum</span>
        </motion.div>
      </div>
    </section>
  )
}

export default LogoBanner 