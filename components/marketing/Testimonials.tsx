'use client'

import React from 'react'
import { motion } from 'framer-motion'

const testimonials = [
  {
    name: "Erik Metselaar",
    role: "Lead Developer",
    company: "Kampeerkennis",
    testimonial: "De Cursor AI training van Prompt Pilot heeft ons team enorm geholpen. We schrijven betere code in minder tijd, met een flinke vermindering in debug-uren.",
    rating: 5
  },
  {
    name: "Han Hedwig",
    role: "Senior Software Engineer",
    company: "Dashly",
    testimonial: "Het leren van geavanceerde prompt-technieken heeft onze workflow getransformeerd. We bouwen features sneller en met hogere kwaliteit. Aanrader!",
    rating: 5
  },
  {
    name: "Ivar Steijlen",
    role: "Senior Developer",
    company: "InformationMakers",
    testimonial: "De verborgen Cursor-functies die we hebben geleerd waren een game-changer. Ik verras klanten nu met snelle ontwikkeling en creatieve oplossingen.",
    rating: 4
  }
]

const Testimonials = () => {
  return (
    <section className="py-20 bg-ph-900 relative overflow-hidden" id="services">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-2/3 h-1/3 bg-gradient-to-br from-ph-600/10 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-ph-600/5 to-transparent"></div>
      </div>
      
      <div className="w-section-lg relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Wat zeggen <span className="text-gradient-blue-gold">klanten</span>?
            </h2>
            <p className="text-ph-300 max-w-2xl mx-auto">
              Hoor van developers die hun productiviteit hebben getransformeerd met onze Cursor AI training.
            </p>
          </motion.div>
        </div>
        
        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-b from-ph-950 to-ph-900 p-6 rounded-xl border border-ph-800/50 relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Quote icon */}
              <div className="absolute -top-4 -left-4 bg-ph-600/30 w-8 h-8 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              
              {/* Testimonial content */}
              <div className="mb-6 pt-2">
                <p className="text-ph-300">&ldquo;{testimonial.testimonial}&rdquo;</p>
              </div>
              
              {/* Star rating */}
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i}
                    xmlns="http://www.w3.org/2000/svg" 
                    className={`h-5 w-5 ${i < testimonial.rating ? 'text-gr-1000' : 'text-ph-800'}`} 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              {/* Author info */}
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-ph-600/30 flex items-center justify-center text-white font-semibold">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-3">
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-white/60">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Stats */}
        <motion.div 
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="p-4 bg-ph-700 rounded-lg border border-ph-800/50">
            <div className="text-3xl font-bold text-white mb-1">100%</div>
            <div className="text-sm text-white/60">Tevredenheidspercentage</div>
          </div>
          <div className="p-4 bg-ph-700 rounded-lg border border-ph-800/50">
            <div className="text-3xl font-bold text-white mb-1">30%</div>
            <div className="text-sm text-white/60">Productiviteitsverhoging</div>
          </div>
          <div className="p-4 bg-ph-700 rounded-lg border border-ph-800/50">
            <div className="text-3xl font-bold text-white mb-1">20+</div>
            <div className="text-sm text-white/60">Getrainde developers</div>
          </div>
          <div className="p-4 bg-ph-700 rounded-lg border border-ph-800/50">
            <div className="text-3xl font-bold text-white mb-1">6+</div>
            <div className="text-sm text-white/60">Zakelijke klanten</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials 