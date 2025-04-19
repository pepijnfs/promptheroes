'use client'

import React from 'react'
import { motion } from 'framer-motion'

const LoginForm = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full max-w-lg mx-auto bg-gradient-to-b from-ph-950 to-ph-900 p-8 rounded-xl border border-ph-800 relative"
    >
      {/* Coming Soon Ribbon */}
      <div className="absolute -top-3 right-3 bg-ph-600 text-white text-xs font-semibold py-1 px-2 rounded">
        Binnenkort beschikbaar
      </div>
      
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 text-white">
          Welkom terug
        </h1>
        <p className="text-white/70">
          Log in om toegang te krijgen tot je account
        </p>
      </div>
      
      <form className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-1">
            Email <span className="text-ph-600">*</span>
          </label>
          <input
            type="email"
            id="email"
            className="ph-input"
            placeholder="hello@promptheroes.co"
            disabled
          />
        </div>
        
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-white/70 mb-1">
            Wachtwoord <span className="text-ph-600">*</span>
          </label>
          <input
            type="password"
            id="password"
            className="ph-input"
            placeholder="••••••••"
            disabled
          />
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              type="checkbox"
              className="h-4 w-4 bg-ph-950 border-ph-800 rounded text-ph-600 focus:ring-ph-600"
              disabled
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-white/60">
              Onthoud mij
            </label>
          </div>
          
          <a href="#" className="text-sm text-ph-600 hover:text-ph-500">
            Wachtwoord vergeten?
          </a>
        </div>
        
        <button
          type="submit"
          className="w-full bg-ph-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-ph-500 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled
        >
          Inloggen
        </button>
      </form>
      
      <div className="mt-6 text-center">
        <p className="text-white/70">
          Nog geen account?{' '}
          <a href="#" className="text-ph-600 hover:text-ph-500">
            Registreer
          </a>
        </p>
      </div>
    </motion.div>
  )
}

export default LoginForm 