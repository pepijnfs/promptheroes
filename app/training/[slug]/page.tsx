'use client';

import { useEffect, useState } from 'react';
import { notFound } from 'next/navigation';
import { getRelatedTrainings, getTrainingById, Training } from '@/services/trainingService';
import Header from '@/components/Header';
import TrainingHero from '@/components/TrainingHero';
import TrainingContent from '@/components/TrainingContent';
import TrainingBenefits from '@/components/TrainingBenefits';
import LeadForm from '@/components/LeadForm';
import RelatedTrainings from '@/components/RelatedTrainings';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';

export default function TrainingPage({ params }: { params: { slug: string } }) {
  const [training, setTraining] = useState<Training | null>(null);
  const [relatedTrainings, setRelatedTrainings] = useState<Training[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get the training data
    const fetchTraining = () => {
      const trainingData = getTrainingById(params.slug);
      
      if (!trainingData) {
        notFound();
        return;
      }
      
      setTraining(trainingData);
      setRelatedTrainings(getRelatedTrainings(params.slug, 3));
      setLoading(false);
    };

    fetchTraining();
  }, [params.slug]);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center bg-ph-900">
      <div className="animate-spin h-8 w-8 border-4 border-ph-600 border-t-transparent rounded-full"></div>
    </div>;
  }

  if (!training) {
    notFound();
    return null;
  }

  return (
    <main className="flex min-h-screen flex-col overflow-hidden">
      <Header />
      <TrainingHero training={training} />
      <TrainingBenefits training={training} />
      <TrainingContent training={training} />
      <LeadForm />
      <RelatedTrainings 
        currentTrainingId={training.id} 
        relatedTrainings={relatedTrainings} 
      />
      <Footer />
      <ChatWidget />
    </main>
  );
} 