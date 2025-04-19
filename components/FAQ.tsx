'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronUpIcon, ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/24/solid'

const faqData = [
  {
    question: "Voor welke AI-tools bieden jullie training aan?",
    answer: "Hoewel onze belangrijkste training gericht is op Cursor AI, bieden we ook gespecialiseerde trainingsmodules aan voor andere populaire AI-codeertools, waaronder GitHub Copilot, Windsurf, Google's AI-codeertools en meer. Ons doel is om jouw team vaardigheden bij te brengen om elke AI-assistent te gebruiken die het beste bij jullie werkwijze past."
  },
  {
    question: "Wat leer ik tijdens de Cursor AI-training?",
    answer: "Onze uitgebreide training behandelt alles van LLM-basisprincipes tot geavanceerde prompt engineering. Je leert essentiële vaardigheden zoals effectieve promptstructurering, het kiezen tussen modellen (GPT-4 vs Claude), praktisch coderen met AI-ondersteuning, en toepassingen in je dagelijkse workflow. Uiteindelijk kun je AI gebruiken om je productiviteit met wel 30% te verhogen."
  },
  {
    question: "Heb ik eerdere ervaring met AI-tools nodig om deel te nemen aan de training?",
    answer: "Nee, voorkennis van AI is niet vereist. Onze training is ontworpen voor ontwikkelaars van alle niveaus, van beginners tot ervaren professionals. We beginnen met de basisprincipes en gaan geleidelijk over naar complexere technieken. Basiskennis van programmeren is handig maar niet verplicht."
  },
  {
    question: "Hoe verhoudt Cursor AI zich tot GitHub Copilot en Windsurf?",
    answer: "Elke tool heeft zijn eigen sterke punten. Cursor AI blinkt uit in projectcontext en bewerkingen in meerdere bestanden via de Agent-modus. GitHub Copilot is sterk in inline aanvullingen en snelle codeerhulp. Windsurf biedt unieke functies zoals Cascade Memories voor blijvende context. Tijdens onze training vergelijken we deze tools objectief en helpen we je bepalen welke het beste past bij jouw specifieke werkwijze."
  },
  {
    question: "Kunnen AI-codeerassistenten mijn productiviteit echt verbeteren?",
    answer: "Absoluut. Recent onderzoek toont aan dat productiviteitsverbeteringen tot 30% mogelijk zijn bij effectief gebruik van AI-codeertools. Deze winst komt voort uit snellere codegeneratie, minder debugtijd, geautomatiseerde documentatie en vereenvoudigde verkenning van onbekende bibliotheken. Onze training richt zich specifiek op technieken die deze productiviteitsvoordelen maximaliseren."
  },
  {
    question: "Hoe wordt de training gegeven?",
    answer: "We bieden flexibele trainingsopties die we volledig aanpassen aan jouw wensen. Je kunt kiezen voor incompany trainingen op locatie, volledig online sessies, of een hybride aanpak. De trainingen combineren live sessies met praktische workshops, waarbij we de focus en werkwijze afstemmen op jouw specifieke behoeften en projecten. Voor teams passen we de sessies aan op jullie specifieke projecten en werkwijzen."
  },
  {
    question: "Hoe kies ik tussen GPT-4 en Claude-modellen voor het coderen?",
    answer: "Onze training behandelt de specifieke sterke punten van elk model. Over het algemeen blinkt GPT-4 uit in precieze logica, stapsgewijze redenering en strikte formatteringstaken. Claude-modellen (vooral 3.5/3.7) verwerken grotere contexten (tot 100k tokens) en zijn uitstekend voor refactoring, analyse van meerdere bestanden en samenwerkend coderen. We leren je precies wanneer je welk model moet gebruiken voor optimale resultaten."
  },
  {
    question: "Behandelt de training hoe je effectieve prompts specifiek voor coderen schrijft?",
    answer: "Ja, prompt engineering voor code is een belangrijk onderdeel. Je leert hoe je prompts structureert met de juiste context, duidelijkheid en beperkingen om nauwkeurige code te krijgen. We behandelen specifieke technieken voor veelvoorkomende taken zoals het genereren van functies, debuggen, documentatie en refactoring - allemaal met praktische voorbeelden die je direct kunt toepassen."
  },
  {
    question: "Kan mijn hele team deelnemen aan de training?",
    answer: "Zeker! We bieden gespecialiseerde teampakketten aan voor teams tot 10 personen. Voor grotere teams rekenen we een extra vergoeding per deelnemer. De trainingsmodules worden afgestemd op de specifieke technologiestack en projecten van je team, inclusief gezamenlijke oefeningen om de productiviteit en adoptie van AI-codeertools binnen het hele team te verbeteren."
  }
]

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 relative overflow-hidden bg-ph-900" id="faq">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-ph-600/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="w-section-xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="h2 text-white mb-4">
            Veelgestelde <span className="text-ph-600">Vragen</span>
          </h2>
          <p className="text-body text-white/70 max-w-2xl mx-auto">
            Vind antwoorden op veelgestelde vragen over ons AI-trainingsprogramma en hoe we jouw team kunnen helpen succesvol te zijn.
          </p>
        </div>
        
        {/* FAQ Accordion */}
        <div className="space-y-4 mb-12">
          {faqData.map((faq, index) => (
            <div key={index} className="rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className={`w-full text-left p-5 flex justify-between items-center rounded-lg border ${
                  openIndex === index
                    ? 'bg-ph-800/50 border-ph-800'
                    : 'bg-ph-900/70 border-ph-800/50 hover:bg-ph-800/30'
                }`}
              >
                <span className="text-body-lg text-semibold pr-8 text-white">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUpIcon className="h-5 w-5 text-ph-600 flex-shrink-0" />
                ) : (
                  <ChevronDownIcon className="h-5 w-5 text-ph-600 flex-shrink-0" />
                )}
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="p-5 bg-ph-900/70 rounded-b-lg border-x border-b border-ph-800 text-body text-white/70">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
        
        {/* Still Have Questions */}
        <div className="mt-12 text-center">
          <h3 className="h4 text-white mb-4">Nog vragen? Wij helpen je graag.</h3>
          <p className="text-body text-white/70 mb-4">Ons team staat klaar om al je vragen te beantwoorden.</p>
          <a
            href="#contact"
            className="inline-flex items-center text-ph-600 hover:text-ph-500 transition-colors"
          >
            Neem contact op
            <ChevronRightIcon className="h-5 w-5 ml-2" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default FAQ 