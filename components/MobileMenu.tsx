'use client'

import React, { Fragment, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { XMarkIcon, ArrowRightIcon } from '@heroicons/react/20/solid'
import { navigationItems } from './Header'
import Logo from './Logo'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const menuRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  
  // Animation variants
  const menuVariants = {
    closed: {
      x: '-100%',
      opacity: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30
      }
    },
    open: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
        delayChildren: 0.05,
        staggerChildren: 0.05
      }
    }
  }

  const itemVariants = {
    closed: { 
      x: -20, 
      opacity: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30
      }
    },
    open: { 
      x: 0, 
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30
      }
    }
  }

  const containerVariants = {
    closed: {
      transition: { 
        staggerChildren: 0.05, 
        staggerDirection: -1 
      }
    },
    open: {
      transition: { 
        staggerChildren: 0.07, 
        delayChildren: 0.2 
      }
    }
  }

  const headerVariants = {
    closed: {
      opacity: 0,
      transition: {
        type: 'tween',
        duration: 0.1
      }
    },
    open: {
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 0.1,
        delay: 0.3 // Ensures header appears after menu panel animation has started
      }
    }
  }

  // Close menu on ESC key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (isOpen && e.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

  // Trap focus inside menu when open
  useEffect(() => {
    if (!isOpen) return
    
    const menuElement = menuRef.current
    if (!menuElement) return
    
    // Focus the close button when menu opens
    closeButtonRef.current?.focus()
    
    // Get all focusable elements inside menu
    const focusableElements = menuElement.querySelectorAll('a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])')
    const firstElement = focusableElements[0] as HTMLElement
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement
    
    const handleTab = (e: KeyboardEvent) => {
      // If tab key is pressed
      if (e.key === 'Tab') {
        // If shift + tab on first element, move to last element
        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault()
          lastElement.focus()
        }
        // If tab on last element, move to first element
        else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault()
          firstElement.focus()
        }
      }
    }

    document.addEventListener('keydown', handleTab)
    
    // Prevent scrolling of body when menu is open - removed as this is handled in Header.tsx
    
    return () => {
      document.removeEventListener('keydown', handleTab)
    }
  }, [isOpen])

  return (
    <div className="mobileMenuContainer" style={{ display: 'contents' }}>
      <AnimatePresence mode="wait">
        {isOpen && (
          <Fragment>
            {/* Backdrop - ensure it covers the entire screen with high z-index */}
            <motion.div
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[9999]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              role="presentation"
              style={{ position: 'fixed', top: 0, right: 0, bottom: 0, left: 0 }}
            />

            {/* Menu panel - ensure proper z-index and full height */}
            <motion.div
              ref={menuRef}
              className="fixed top-0 left-0 bottom-0 w-full md:w-[85vw] md:max-w-sm bg-ph-950 z-[10000] flex flex-col"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation menu"
              style={{ position: 'fixed', top: 0, left: 0, bottom: 0 }}
            >
              {/* Header - with proper padding and spacing */}
              <motion.div 
                className="flex items-center justify-between p-4 border-b border-ph-800/50 bg-ph-900"
                variants={headerVariants}
                initial="closed"
                animate="open"
              >
                <div className="opacity-100">
                  <Logo textSize="md" />
                </div>
                <button
                  ref={closeButtonRef}
                  className="text-white p-2 rounded-full hover:bg-ph-800 transition-colors"
                  onClick={onClose}
                  aria-label="Close menu"
                >
                  <XMarkIcon className="w-6 h-6" />
                </button>
              </motion.div>

              {/* Navigation items - with proper styling */}
              <nav className="flex-1 overflow-y-auto py-6 px-4 bg-ph-950" aria-label="Mobile navigation">
                <motion.ul 
                  className="space-y-6"
                  variants={containerVariants}
                  initial="closed"
                  animate="open"
                >
                  {navigationItems.map((item, index) => (
                    <motion.li 
                      key={item.name} 
                      variants={itemVariants}
                      custom={index}
                    >
                      <a
                        href={item.href}
                        className="group flex items-center justify-between w-full text-xl font-medium text-white hover:text-ph-600 transition-colors py-2"
                        onClick={onClose}
                      >
                        <span>{item.name}</span>
                        <ArrowRightIcon className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1 transition-transform duration-300" />
                      </a>
                    </motion.li>
                  ))}
                </motion.ul>
              </nav>

              {/* Footer - properly positioned at bottom */}
              <div className="p-4 border-t border-ph-800/50 bg-ph-950">
                <motion.a
                  href="/login"
                  className="block w-full py-3 px-4 text-center font-semibold rounded-lg bg-ph-600 text-white hover:bg-ph-500 transition-colors"
                  onClick={onClose}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Log in
                </motion.a>
              </div>
            </motion.div>
          </Fragment>
        )}
      </AnimatePresence>
    </div>
  )
}

export default MobileMenu 