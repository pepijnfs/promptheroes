'use client'

import React from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import LoginForm from '@/components/features/LoginForm'
import LoginFeatures from '@/components/features/LoginFeatures'

export default function LoginPage() {
  return (
    <main className="flex min-h-screen flex-col overflow-hidden bg-ph-950">
      <Header />
      
      {/* Login Form Section */}
      <section className="flex-1 py-8 relative overflow-hidden bg-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-white"></div>
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-ph-600/5 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-ph-600/5 to-transparent"></div>
        </div>
        
        <div className="w-full max-w-4xl mx-auto relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-200px)] px-4">
          <LoginForm />
        </div>
      </section>

      {/* Features Section */}
      <LoginFeatures />
      
      <Footer />
    </main>
  )
} 