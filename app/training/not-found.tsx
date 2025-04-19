'use client';

import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function TrainingNotFound() {
  return (
    <main className="flex min-h-screen flex-col overflow-hidden">
      <Header />
      
      <section className="pt-32 pb-32 flex-grow flex items-center justify-center relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-ph-900"></div>
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-ph-800/30 via-transparent to-transparent"></div>
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-ph-600/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-md mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Training niet gevonden</h1>
          <p className="text-white/70 mb-8">
            De training die je zoekt is niet beschikbaar. Bekijk onze andere trainingen of ga terug naar de homepagina.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/" 
              className="ph-button inline-flex items-center justify-center"
            >
              <ArrowLeftIcon className="h-5 w-5 mr-2" />
              Terug naar home
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 