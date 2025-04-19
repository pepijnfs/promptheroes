'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { 
  CheckCircleIcon, 
  CalendarIcon,
  ClockIcon,
  MapPinIcon,
  ArrowPathIcon
} from '@heroicons/react/24/solid'
import PrimaryButton from './PrimaryButton'
import SecondaryButton from './SecondaryButton'

type FormData = {
  name: string
  email: string
  company: string
  role: string
  companySize: string
  trainingParticipants: string
  trainingType: string
  phone: string
  message: string
  newsletter: boolean
}

const LeadForm = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [selectedTraining, setSelectedTraining] = useState('')
  
  const { 
    register, 
    handleSubmit, 
    formState: { errors },
    trigger,
    watch
  } = useForm<FormData>()
  
  const trainingType = watch('trainingType')
  
  // Calculate available trainings based on current date
  const getAvailableTrainings = () => {
    const today = new Date()
    const currentDay = today.getDate()
    const daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate()
    
    // Start with 8 trainings at the beginning of the month
    const startTrainings = 8
    // End with 2 trainings at the end of the month
    const endTrainings = 2
    
    // Calculate the number of trainings based on the day of the month
    const progress = currentDay / daysInMonth
    const availableTrainings = Math.round(startTrainings - (progress * (startTrainings - endTrainings)))
    
    return Math.max(endTrainings, availableTrainings)
  }
  
  // Update selected training when training type changes
  React.useEffect(() => {
    setSelectedTraining(trainingType)
  }, [trainingType])
  
  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    console.log('Form submitted:', data)
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const nextStep = async () => {
    // Validate fields in current step before proceeding
    let fieldsToValidate: (keyof FormData)[] = [];
    
    if (currentStep === 1) {
      fieldsToValidate = ['name', 'company', 'trainingType'];
    } else if (currentStep === 2) {
      fieldsToValidate = ['role', 'companySize', 'trainingParticipants'];
    }
    
    const isStepValid = await trigger(fieldsToValidate);
    
    if (isStepValid) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => prev - 1);
  };

  // Progress indicator
  const renderProgressBar = () => {
    return (
      <div className="flex justify-center mb-8">
        <div className="flex items-center w-2/3 max-w-xs">
          {[1, 2, 3].map((step) => (
            <React.Fragment key={step}>
              <div 
                className={`flex items-center justify-center w-8 h-8 rounded-full ${
                  currentStep >= step ? 'bg-ph-600 text-white' : 'bg-ph-800/30 text-white/50'
                }`}
              >
                {step}
              </div>
              {step < 3 && (
                <div 
                  className={`h-1 flex-1 ${
                    currentStep > step ? 'bg-ph-600' : 'bg-ph-800/30'
                  }`}
                ></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    );
  };

  // Form steps
  const renderFormStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-1">
                Volledige naam <span className="text-ph-600">*</span>
              </label>
              <input
                id="name"
                type="text"
                className="ph-input"
                placeholder="Jan Jansen"
                {...register('name', { required: 'Naam is verplicht' })}
              />
              {errors.name && (
                <p className="mt-1 text-red-400 text-sm">{errors.name.message}</p>
              )}
            </div>
            
            <div className="md:col-span-2">
              <label htmlFor="company" className="block text-sm font-medium text-white/70 mb-1">
                Bedrijfsnaam <span className="text-ph-600">*</span>
              </label>
              <input
                id="company"
                type="text"
                className="ph-input"
                placeholder="Bedrijf BV"
                {...register('company', { required: 'Bedrijfsnaam is verplicht' })}
              />
              {errors.company && (
                <p className="mt-1 text-red-400 text-sm">{errors.company.message}</p>
              )}
            </div>
            
            <div className="md:col-span-2">
              <label htmlFor="trainingType" className="block text-sm font-medium text-white/70 mb-1">
                Training <span className="text-ph-600">*</span>
              </label>
              <select
                id="trainingType"
                className="ph-input"
                {...register('trainingType', { required: 'Training is verplicht' })}
              >
                <option value="">Selecteer training</option>
                <option value="introductie-ai">Introductie AI</option>
                <option value="cursor-ai">Cursor AI</option>
                <option value="github-copilot">GitHub Copilot (Binnenkort beschikbaar)</option>
                <option value="windsurf">Windsurf (Binnenkort beschikbaar)</option>
              </select>
              {errors.trainingType && (
                <p className="mt-1 text-red-400 text-sm">{errors.trainingType.message}</p>
              )}
              {(selectedTraining === 'github-copilot' || selectedTraining === 'windsurf') ? (
                <p className="mt-2 text-sm text-ph-400">
                  Deze training is binnenkort beschikbaar en je kunt alvast een aanvraag indienen. We nemen contact met je op over de exacte trainingsdatum.
                </p>
              ) : selectedTraining === 'introductie-ai' || selectedTraining === 'cursor-ai' ? (
                <p className="mt-2 text-sm text-ph-400">
                  Deze training is populair. Nog {getAvailableTrainings()} trainingen beschikbaar deze maand.
                </p>
              ) : null}
            </div>
          </div>
        );
      case 2:
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <label htmlFor="role" className="block text-sm font-medium text-white/70 mb-1">
                Functie <span className="text-ph-600">*</span>
              </label>
              <input
                id="role"
                type="text"
                className="ph-input"
                placeholder="Software Ontwikkelaar"
                {...register('role', { required: 'Functie is verplicht' })}
              />
              {errors.role && (
                <p className="mt-1 text-red-400 text-sm">{errors.role.message}</p>
              )}
            </div>
            
            <div className="md:col-span-2">
              <label htmlFor="companySize" className="block text-sm font-medium text-white/70 mb-1">
                Bedrijfsgrootte <span className="text-ph-600">*</span>
              </label>
              <select
                id="companySize"
                className="ph-input"
                {...register('companySize', { required: 'Bedrijfsgrootte is verplicht' })}
              >
                <option value="">Selecteer bedrijfsgrootte</option>
                <option value="1-10">1-10 medewerkers</option>
                <option value="11-50">11-50 medewerkers</option>
                <option value="51-200">51-200 medewerkers</option>
                <option value="201-500">201-500 medewerkers</option>
                <option value="501-1000">501-1000 medewerkers</option>
                <option value="1000+">1000+ medewerkers</option>
              </select>
              {errors.companySize && (
                <p className="mt-1 text-red-400 text-sm">{errors.companySize.message}</p>
              )}
            </div>
            
            <div className="md:col-span-2">
              <label htmlFor="trainingParticipants" className="block text-sm font-medium text-white/70 mb-1">
                Aantal deelnemers voor training <span className="text-ph-600">*</span>
              </label>
              <select
                id="trainingParticipants"
                className="ph-input"
                {...register('trainingParticipants', { required: 'Aantal deelnemers is verplicht' })}
              >
                <option value="">Selecteer aantal deelnemers</option>
                <option value="1-5">1-5 deelnemers</option>
                <option value="6-10">6-10 deelnemers</option>
                <option value="11-20">11-20 deelnemers</option>
                <option value="21-50">21-50 deelnemers</option>
                <option value="50+">50+ deelnemers</option>
              </select>
              {errors.trainingParticipants && (
                <p className="mt-1 text-red-400 text-sm">{errors.trainingParticipants.message}</p>
              )}
            </div>
          </div>
        );
      case 3:
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-1">
                Werk e-mail <span className="text-ph-600">*</span>
              </label>
              <input
                id="email"
                type="email"
                className="ph-input"
                placeholder="jan@voorbeeld.nl"
                {...register('email', {
                  required: 'E-mail is verplicht',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Ongeldig e-mailadres'
                  }
                })}
              />
              {errors.email && (
                <p className="mt-1 text-red-400 text-sm">{errors.email.message}</p>
              )}
            </div>
            
            <div className="md:col-span-2">
              <label htmlFor="phone" className="block text-sm font-medium text-white/70 mb-1">
                Telefoonnummer <span className="text-ph-600">*</span>
              </label>
              <input
                id="phone"
                type="tel"
                className="ph-input"
                placeholder="+31 6 12345678"
                {...register('phone', {
                  required: 'Telefoonnummer is verplicht',
                  pattern: {
                    value: /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/i,
                    message: 'Ongeldig telefoonnummer'
                  }
                })}
              />
              {errors.phone && (
                <p className="mt-1 text-red-400 text-sm">{errors.phone.message}</p>
              )}
            </div>
            
            <div className="md:col-span-2">
              <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-1">
                Wat zijn je belangrijkste doelen voor de training?
              </label>
              <textarea
                id="message"
                rows={4}
                className="ph-input"
                placeholder="Vertel ons over je specifieke behoeften of vragen..."
                {...register('message')}
              ></textarea>
            </div>
            
            <div className="md:col-span-2">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="newsletter"
                    type="checkbox"
                    className="w-4 h-4 bg-ph-950 border-ph-800 rounded text-ph-600 focus:ring-ph-600"
                    {...register('newsletter')}
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="newsletter" className="text-white/60">
                    Stuur me tips, trends en updates over AI en het gebruik van AI tools
                  </label>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  // Navigation buttons
  const renderNavButtons = () => {
    return (
      <div className="mt-8 flex justify-center space-x-4">
        {currentStep > 1 && (
          <SecondaryButton
            text="Vorige"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              prevStep();
            }}
          />
        )}
        
        {currentStep < 3 ? (
          <PrimaryButton 
            text="Volgende"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              nextStep();
            }}
          />
        ) : (
          isSubmitting ? (
            <button
              type="submit"
              disabled
              className="ph-button inline-flex items-center justify-center font-semibold py-3 px-6 rounded-lg bg-ph-600 hover:bg-ph-500 text-white transition-all duration-300 z-10 transform hover:scale-105"
            >
              <span className="flex items-center justify-center">
                <ArrowPathIcon className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" />
                Verwerken...
              </span>
            </button>
          ) : (
            <PrimaryButton 
              text="Offerte aanvragen"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleSubmit(onSubmit)();
              }}
            />
          )
        )}
      </div>
    );
  };

  return (
    <section id="lead-form" className="py-20 relative overflow-hidden bg-white">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ph-600/30 to-transparent"></div>
        <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-ph-600/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="w-section-xl relative z-10">
        <motion.div 
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-gradient-to-br from-ph-900/95 to-ph-950/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-ph-800/30 overflow-hidden">
            {/* Glowing effect at the top */}
            <div className="h-1 w-full bg-gradient-to-r from-ph-600 via-ph-500 to-ph-600"></div>
            
            <div className="p-8 md:p-12">
              <div className="text-center mb-10">
                <motion.h2 
                  className="text-3xl md:text-4xl font-bold mb-4 text-white"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  Vraag direct een <span className="text-ph-600">offerte</span> aan
                </motion.h2>
                <motion.p 
                  className="text-white/70 max-w-2xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  Vul het onderstaande formulier in om een offerte aan te vragen. <br />We komen binnen 24 uur bij je terug.
                </motion.p>
              </div>
              
              {isSubmitted ? (
                <motion.div 
                  className="text-center py-10 px-6"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-ph-600/20 text-ph-600">
                    <CheckCircleIcon className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-white">Bedankt!</h3>
                  <p className="text-white/70 mb-6">
                    Je registratie is ontvangen. We nemen binnenkort contact met je op met gedetailleerde informatie over je aankomende trainingssessie.
                  </p>
                  <p className="text-white/50 text-sm">
                    Controleer je inbox voor een bevestigingsmail met meer informatie.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)}>
                  {renderProgressBar()}
                  
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentStep}
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      {renderFormStep()}
                    </motion.div>
                  </AnimatePresence>
                  
                  {renderNavButtons()}
                  
                  {currentStep === 3 && (
                    <p className="mt-4 text-sm text-white/50 text-center">
                      Door dit formulier in te dienen, ga je akkoord met ons <a href="#" className="text-ph-600 hover:text-ph-500">Privacybeleid</a> en <a href="#" className="text-ph-600 hover:text-ph-500">Servicevoorwaarden</a>
                    </p>
                  )}
                </form>
              )}
            </div>
          </div>
          
          {/* Training Details */}
          <motion.div 
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-ph-100 p-5 rounded-lg border border-ph-200 flex items-start shadow-sm">
              <div className="bg-ph-600/20 p-2 rounded mr-4">
                <CalendarIcon className="h-6 w-6 text-ph-600" />
              </div>
              <div>
                <h5 className="font-semibold mb-1 text-ph-900">Populair</h5>
                <p className="text-sm text-ph-700">Trainingsmomenten zijn beperkt</p>
              </div>
            </div>
            
            <div className="bg-ph-100 p-5 rounded-lg border border-ph-200 flex items-start shadow-sm">
              <div className="bg-ph-600/20 p-2 rounded mr-4">
                <ClockIcon className="h-6 w-6 text-ph-600" />
              </div>
              <div>
                <h5 className="font-semibold mb-1 text-ph-900">Trainingsduur</h5>
                <p className="text-sm text-ph-700">Gemiddeld 3 tot 4 uur per training</p>
              </div>
            </div>
            
            <div className="bg-ph-100 p-5 rounded-lg border border-ph-200 flex items-start shadow-sm">
              <div className="bg-ph-600/20 p-2 rounded mr-4">
                <MapPinIcon className="h-6 w-6 text-ph-600" />
              </div>
              <div>
                <h5 className="font-semibold mb-1 text-ph-900">Locatie</h5>
                <p className="text-sm text-ph-700">Bij jullie op kantoor of online</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default LeadForm 