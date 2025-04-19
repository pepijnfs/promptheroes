'use client'

import React from 'react'
import { motion } from 'framer-motion'

const WhyAISection = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="w-section-xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-ph-900">
            AI zonder plan kost je tijd en geld
          </h2>
          
          <p className="text-body-lg text-ph-700 mb-6 max-w-3xl mx-auto">
            Je team is al aan het experimenteren met ChatGPT en Claude, maar <span className="text-ph-600 font-semibold">zonder structuur</span>. 
            Iedereen doet maar wat. En eerlijk? De output is vaak generiek, foutgevoelig of werkt niet.
          </p>
          
          <p className="text-body-lg text-ph-700 max-w-3xl mx-auto">
            Je ziet de kansen wel — sneller unit tests schrijven, code debuggen, met als resultaat minder werkdruk — maar je mist iemand die het <span className="text-ph-600 font-semibold">goed implementeert</span>. 
            Iemand die je team op de juiste manier begeleidt.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyAISection 