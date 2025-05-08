'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Logo from './Logo'
import { trainings } from '@/services/trainingService'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="pt-16 pb-8 bg-ph-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ph-600/20 to-transparent"></div>
      </div>
      
      <div className="w-section-xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-2 mb-4 text-white">
                <Logo textSize="xl" />
              </div>
              <p className="text-ph-300 mb-6 max-w-md">
                We helpen ontwikkelaars met expert AI-consultancy, prompt engineering training en Cursor AI beheersing om je productiviteit te verhogen.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://linkedin.com/company/promptpilot" 
                  className="text-ph-300 hover:text-ph-600 transition-colors"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                  </svg>
                </a>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold text-white mb-4">Trainingen</h3>
            <ul className="space-y-2">
              {trainings.map(training => (
                <li key={training.id}>
                  <Link 
                    href={`/training/${training.id}`} 
                    className="text-ph-300 hover:text-ph-600 transition-colors"
                  >
                    {training.title}{training.isComingSoon ? ' (Binnenkort beschikbaar)' : ''}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="">
                <a href="mailto:hello@promptpilot.nlm" className="text-gradient-blue-gold">hello@promptpilot.nl</a>
              </li>
              <li className="">
                <a href="tel:+31624798648" className="text-gradient-blue-gold">+31 6 24798648</a>
              </li>
              <li className="">
                <address className="not-italic text-ph-300">
                  Prompt Pilot<br />
                  Stationsplein 45<br />
                  3013 AK Rotterdam<br />
                  Nederland
                </address>
              </li>
            </ul>
          </motion.div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-ph-800/30 flex flex-col md:flex-row justify-between items-center">
          <p className="text-ph-300 text-sm mb-4 md:mb-0">
            © {currentYear} Prompt Pilot. Alle rechten voorbehouden.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-ph-300 hover:text-ph-600 text-sm transition-colors">
              Privacybeleid
            </a>
            <a href="#" className="text-ph-300 hover:text-ph-600 text-sm transition-colors">
              Algemene Voorwaarden
            </a>
            <a href="#" className="text-ph-300 hover:text-ph-600 text-sm transition-colors">
              Cookiebeleid
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 