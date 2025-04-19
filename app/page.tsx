'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import WhyAISection from '@/components/WhyAISection'
import AIBenefitsSection from '@/components/AIBenefitsSection'
import SocialProof from '@/components/SocialProof'
import ProblemSolution from '@/components/ProblemSolution'
import TrainingSection from '@/components/TrainingSection'
import TrainingOverview from '@/components/TrainingOverview'
import InstructorSpotlight from '@/components/InstructorSpotlight'
import Testimonials from '@/components/Testimonials'
import LeadForm from '@/components/LeadForm'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import ChatWidget from '@/components/ChatWidget'

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <main className="flex min-h-screen flex-col overflow-hidden">
      <Header />
      <HeroSection />
      <WhyAISection />
      <AIBenefitsSection />
      <div className="bg-white">
        <SocialProof />
      </div>
      <ProblemSolution />
      <div className="bg-ph-900">
        <TrainingOverview />
        <TrainingSection />
      </div>
      <div className="bg-white">
        <InstructorSpotlight />
      </div>
      <div className="bg-ph-900">
        <Testimonials />
      </div>
      <LeadForm />
      <div className="bg-ph-900">
        <FAQ />
      </div>
      <Footer />
      <ChatWidget />
    </main>
  )
} 