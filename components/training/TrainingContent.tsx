'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  CodeBracketIcon,
  CommandLineIcon,
  CpuChipIcon,
  RocketLaunchIcon,
  WrenchScrewdriverIcon,
  BeakerIcon,
  CheckCircleIcon
} from '@heroicons/react/24/solid'
import { Training } from '@/services/trainingService'

type TrainingContentProps = {
  training: Training
}

const TrainingContent: React.FC<TrainingContentProps> = ({ training }) => {
  const sectionIcons = [
    <CodeBracketIcon key="codeBracket" className="w-6 h-6 text-ph-600" />,
    <CommandLineIcon key="commandLine" className="w-6 h-6 text-ph-600" />,
    <CpuChipIcon key="cpuChip" className="w-6 h-6 text-ph-600" />,
    <RocketLaunchIcon key="rocketLaunch" className="w-6 h-6 text-ph-600" />,
    <WrenchScrewdriverIcon key="wrenchScrewdriver" className="w-6 h-6 text-ph-600" />,
    <BeakerIcon key="beaker" className="w-6 h-6 text-ph-600" />
  ]

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-ph-900"></div>
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
              Wat je gaat <span className="text-ph-600">leren</span>
            </h2>
            <p className="text-ph-300 max-w-2xl mx-auto">
              {training.description}
            </p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {training.contentSections.map((section, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-b from-ph-950 to-ph-900 p-6 rounded-xl border border-ph-800 hover:border-ph-600 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-12 h-12 bg-ph-600/20 rounded-lg flex items-center justify-center mb-4">
                {sectionIcons[index % sectionIcons.length]}
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">{section.title}</h3>
              <ul className="space-y-3">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start text-ph-300">
                    <CheckCircleIcon className="h-5 w-5 mr-3 mt-0.5 text-ph-600 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrainingContent 