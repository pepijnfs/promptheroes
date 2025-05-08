import dynamic from 'next/dynamic'
import Header from '@/components/layout/Header'
import HeroSection from '@/components/marketing/HeroSection'
import AIBenefitsSection from '@/components/marketing/AIBenefitsSection'
import ProblemSolution from '@/components/marketing/ProblemSolution'
import TrainingSection from '@/components/training/TrainingSection'
import TrainingOverview from '@/components/training/TrainingOverview'
import Testimonials from '@/components/marketing/Testimonials'
import LeadForm from '@/components/features/LeadForm'
import FAQ from '@/components/marketing/FAQ'
import Footer from '@/components/layout/Footer'
import InstructorSpotlight from '@/components/marketing/InstructorSpotlight'

// Dynamically import ChatWidget with no SSR
const ChatWidget = dynamic(() => import('@/components/features/ChatWidget'), {
  ssr: false
})

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col overflow-hidden bg-ph-950">
      <Header />
      <HeroSection />
      <AIBenefitsSection />
      <ProblemSolution />
      <TrainingSection />
      <TrainingOverview />
      <Testimonials />
      <InstructorSpotlight />
      <LeadForm />
      <FAQ />
      <Footer />
      <ChatWidget />
    </main>
  )
} 