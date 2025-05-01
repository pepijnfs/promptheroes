'use client'

import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  ChatBubbleLeftRightIcon, 
  XMarkIcon, 
  PaperAirplaneIcon, 
  ChevronRightIcon, 
  HomeIcon, 
  ChatBubbleOvalLeftIcon 
} from '@heroicons/react/20/solid'
import emailjs from '@emailjs/browser'
import { v4 as uuidv4 } from 'uuid'
import Image from 'next/image'

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [messages, setMessages] = useState<{text: string, sender: 'user' | 'bot', timestamp: Date}[]>([])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [sessionId, setSessionId] = useState<string>('')
  const [lastCheckTimestamp, setLastCheckTimestamp] = useState<string | null>(null)
  const [activeView, setActiveView] = useState('home') // 'home' or 'messages'
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const [hasShownWelcome, setHasShownWelcome] = useState(false)
  const [isWaitingForEmail, setIsWaitingForEmail] = useState(false)
  const [detectedTopic, setDetectedTopic] = useState<string | null>(null)
  const [conversationStage, setConversationStage] = useState('initial') // 'initial', 'answered', 'waiting_for_email'
  const pollIntervalRef = useRef<NodeJS.Timeout | null>(null)

  // Business phone number for WhatsApp (replace with your actual number)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const whatsappNumber = '31612345678' // Replace with your actual number in international format
  
  // EmailJS configuration
  const EMAILJS_SERVICE_ID = 'default_service'  // Create a service in EmailJS dashboard
  const EMAILJS_TEMPLATE_ID = 'template_chat'   // Create a template in EmailJS dashboard
  const EMAILJS_PUBLIC_KEY = 'your_public_key'  // Get from EmailJS account settings
  
  // Telegram Bot configuration
  const TELEGRAM_BOT_TOKEN = '7917219007:AAFJlLc8jk5U1JYVA39WNI3rkJuGHedQncE'
  const TELEGRAM_CHAT_ID = '6622189165'
  
  // Feature flags - enable/disable notification channels
  const USE_EMAIL = true
  const USE_TELEGRAM = true
  
  // API endpoint
  const API_URL = '/api/chat-messages'
  
  // Initialize session ID and EmailJS
  useEffect(() => {
    if (typeof window !== 'undefined') {
      emailjs.init(EMAILJS_PUBLIC_KEY)
      
      let existingSessionId = localStorage.getItem('chat_session_id')
      if (!existingSessionId) {
        existingSessionId = uuidv4()
        localStorage.setItem('chat_session_id', existingSessionId)
      }
      setSessionId(existingSessionId)
    }

    return () => {
      if (pollIntervalRef.current) {
        clearInterval(pollIntervalRef.current)
      }
    }
  }, [])
  
  // Poll for new messages
  useEffect(() => {
    if (!sessionId) return
    
    const checkForNewMessages = async () => {
      try {
        const url = `${API_URL}?sessionId=${sessionId}${lastCheckTimestamp ? `&lastTimestamp=${encodeURIComponent(lastCheckTimestamp)}` : ''}`
        const response = await fetch(url)
        
        if (response.ok) {
          const data = await response.json()
          if (data.messages && data.messages.length > 0) {
            const newMessages = data.messages.map((msg: {message: string, sender: string, timestamp: string}) => ({
              text: msg.message,
              sender: msg.sender,
              timestamp: new Date(msg.timestamp)
            }))
            
            setMessages(prev => [...prev, ...newMessages])
            
            const latestMessage = data.messages.reduce((latest: {timestamp: string}, msg: {timestamp: string}) => 
              new Date(msg.timestamp) > new Date(latest.timestamp) ? msg : latest
            , data.messages[0])
            
            setLastCheckTimestamp(latestMessage.timestamp)
          }
        }
      } catch (error) {
        console.error('Error checking for new messages:', error)
      }
    }
    
    checkForNewMessages()
    pollIntervalRef.current = setInterval(checkForNewMessages, 5000)
    
    return () => {
      if (pollIntervalRef.current) {
        clearInterval(pollIntervalRef.current)
      }
    }
  }, [sessionId, lastCheckTimestamp, isOpen])

  // Show welcome message when messages view is opened
  useEffect(() => {
    if (activeView === 'messages' && !hasShownWelcome) {
      setIsTyping(true)
      
      // Show typing indicator for 1 second before showing message
      setTimeout(() => {
        setIsTyping(false)
        setMessages([{
          text: "Hallo! Waar kan ik je mee helpen?",
          sender: 'bot',
          timestamp: new Date()
        }])
        setHasShownWelcome(true)
        setConversationStage('initial')
      }, 1000)
    }
  }, [activeView, hasShownWelcome])

  // Reset welcome state when chat is closed
  useEffect(() => {
    if (!isOpen) {
      setHasShownWelcome(false)
      setConversationStage('initial')
      setIsWaitingForEmail(false)
    }
  }, [isOpen])

  const toggleChat = () => {
    setIsOpen(!isOpen)
    if (!isOpen) {
      setIsExpanded(false)
      setActiveView('home')
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Send email notification
  const sendEmailNotification = async (message: string) => {
    if (!USE_EMAIL) return true
    
    try {
      // Prepare template parameters
      const templateParams = {
        to_email: 'pepijn@strategymate.io',
        from_name: 'Website Chat Widget',
        message: message,
        website_url: window.location.href,
        timestamp: new Date().toLocaleString(),
        session_id: sessionId
      }
      
      // Send the email
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      )
      
      console.log('Email sent successfully:', response)
      return true
    } catch (error) {
      console.error('Failed to send email:', error)
      return false
    }
  }
  
  // Send Telegram notification
  const sendTelegramNotification = async (message: string) => {
    if (!USE_TELEGRAM) return true
    
    try {
      const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`
      
      // Format the message with additional information
      const formattedMessage = 
        `💬 New chat from Prompt Pilot website:\n\n` +
        `"${message}"\n\n` +
        `📱 From: ${window.location.href}\n` +
        `⏰ Time: ${new Date().toLocaleString()}\n` +
        `🆔 Session ID: ${sessionId}\n\n` +
        `To reply, use:\n/reply ${sessionId} Your message here`
      
      // Send the message to Telegram
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: formattedMessage,
          parse_mode: 'HTML'
        })
      })
      
      if (!response.ok) {
        throw new Error(`Telegram API error: ${response.status}`)
      }
      
      const data = await response.json()
      console.log('Telegram message sent successfully:', data)
      return true
    } catch (error) {
      console.error('Failed to send Telegram message:', error)
      return false
    }
  }
  
  // Save message to API endpoint
  const saveMessageToAPI = async (message: string, sender: 'user' | 'bot') => {
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sessionId,
          message,
          sender
        })
      })
      
      if (!response.ok) {
        throw new Error(`API error: ${response.status}`)
      }
      
      return true
    } catch (error) {
      console.error('Failed to save message to API:', error)
      return false
    }
  }

  const startChat = async () => {
    // Change to conversation view
    setIsExpanded(true)
    setActiveView('messages')
    
    // Add a small delay to simulate loading
    await new Promise(resolve => setTimeout(resolve, 300))
  }

  // Analyze message content to detect topic
  const analyzeMessage = (message: string): string => {
    const lowerMsg = message.toLowerCase().trim()
    
    // Check if it's a greeting first
    const greetingPatterns = [
      // Basic Dutch greetings with punctuation
      'hallo', 'hallo!', 'hallo?', 'hallo.', 'hallo,',
      'hoi', 'hoi!', 'hoi?', 'hoi.', 'hoi,',
      'hey', 'hey!', 'hey?', 'hey.', 'hey,',
      'hee', 'hee!', 'hee?', 'hee.', 'hee,',
      'dag', 'dag!', 'dag?', 'dag.', 'dag,',
      // Common Dutch typos
      'hall', 'halo', 'hallo', 'hallo', 'hallo',
      'ho', 'hooi', 'hooi', 'hooi', 'hooi',
      'he', 'heey', 'heey', 'heey', 'heey',
      'heee', 'heee', 'heee', 'heee', 'heee',
      'daag', 'daag', 'daag', 'daag', 'daag',
      // Time-based greetings
      'goedemorgen', 'goedemiddag', 'goedenavond',
      'goede morgen', 'goede middag', 'goede avond',
      'goeiemorgen', 'goeiemiddag', 'goeienavond',
      'goeie morgen', 'goeie middag', 'goeie avond',
      // English greetings with punctuation
      'hi', 'hi!', 'hi?', 'hi.', 'hi,',
      'hello', 'hello!', 'hello?', 'hello.', 'hello,',
      'yo', 'yo!', 'yo?', 'yo.', 'yo,',
      // English typos
      'hii', 'hii', 'hii', 'hii', 'hii',
      'helloo', 'helloo', 'helloo', 'helloo', 'helloo',
      'yoo', 'yoo', 'yoo', 'yoo', 'yoo',
      // Common variations
      'hallo daar', 'hoi daar', 'hey daar',
      'hallo allemaal', 'hoi allemaal', 'hey allemaal'
    ];
    
    // Check if message is just a greeting or starts with a greeting followed by limited content
    const isSimpleGreeting = greetingPatterns.some(pattern => {
      // First check exact matches and patterns with punctuation
      if (lowerMsg === pattern || 
          lowerMsg.startsWith(pattern + ' ') || 
          lowerMsg.startsWith(pattern + '!')) {
        return true;
      }

      // Then check for partial matches
      const cleanMsg = lowerMsg.replace(/[.,!?]/g, '').trim();
      const cleanPattern = pattern.replace(/[.,!?]/g, '').trim();
      
      // Check for partial match (at least 3 characters match)
      if (cleanPattern.length >= 3 && cleanMsg.length >= 3) {
        // Check if the message is a partial match of the pattern or vice versa
        const minLength = Math.min(cleanMsg.length, cleanPattern.length);
        const matchingChars = Array.from(cleanMsg).filter((char, i) => 
          i < cleanPattern.length && char === cleanPattern[i]
        ).length;
        
        // If at least 3 characters match or 70% of the shorter word matches
        if (matchingChars >= 3 || matchingChars / minLength >= 0.7) {
          return true;
        }
      }
      
      return false;
    });
    
    // If it's a simple greeting with no substantive question
    if (isSimpleGreeting && lowerMsg.split(' ').length < 4) {
      return 'greeting';
    }

    // Topic patterns with their variations
    const topicPatterns = {
      training: [
        'training', 'cursus', 'opleiding', 'workshop', 'cursussen',
        'trainingen', 'opleidingen', 'workshops', 'leer', 'leren',
        'les', 'lessen', 'coaching', 'begeleiding'
      ],
      prijzen: [
        'prijs', 'prijzen', 'kosten', 'tarief', 'tarieven',
        'betalen', 'betaling', 'geld', 'euro', '€',
        'hoeveel kost', 'wat kost', 'wat zijn de kosten',
        'wat is de prijs', 'wat zijn de prijzen'
      ],
      planning: [
        'planning', 'datum', 'data', 'wanneer', 'tijd',
        'wanneer start', 'wanneer begint', 'startdatum',
        'start data', 'wanneer zijn', 'wanneer is',
        'beschikbaar', 'beschikbaarheid', 'agenda'
      ],
      locaties: [
        'locatie', 'locaties', 'waar', 'adres', 'plaats',
        'waar is', 'waar zijn', 'waar vindt plaats',
        'waar worden gegeven', 'waar kan ik', 'stad',
        'steden', 'adressen', 'locatie adres'
      ],
      online: [
        'online', 'virtueel', 'remote', 'thuis',
        'op afstand', 'digitaal', 'via internet',
        'webinar', 'webinars', 'zoom', 'teams',
        'virtuele training', 'online cursus'
      ],
      certificaten: [
        'certificaat', 'certificaten', 'diploma',
        'certificering', 'bewijs', 'bewijzen',
        'accreditatie', 'gecertificeerd', 'diploma\'s',
        'officieel bewijs', 'officieel certificaat'
      ]
    };

    // Check for topic matches
    for (const [topic, patterns] of Object.entries(topicPatterns)) {
      // First check for exact matches
      if (patterns.some(pattern => lowerMsg.includes(pattern))) {
        return topic;
      }

      // Then check for partial matches
      const words = lowerMsg.split(' ');
      for (const pattern of patterns) {
        const patternWords = pattern.split(' ');
        
        // For single word patterns (like 'training')
        if (patternWords.length === 1) {
          const patternWord = patternWords[0];
          // Check each word in the message against the pattern
          if (words.some(msgWord => {
            // For short words (like 'train'), require higher match ratio
            const minLength = Math.min(patternWord.length, msgWord.length);
            const matchingChars = Array.from(msgWord).filter((char, i) => 
              i < patternWord.length && char === patternWord[i]
            ).length;
            
            // Adjust matching threshold based on word length
            if (minLength <= 4) {
              // For very short words, require higher match ratio
              return matchingChars / minLength >= 0.8;
            } else if (minLength <= 6) {
              // For medium words, medium match ratio
              return matchingChars / minLength >= 0.7;
            } else {
              // For longer words, can be more lenient
              return matchingChars >= 4 || matchingChars / minLength >= 0.6;
            }
          })) {
            return topic;
          }
        }
        // For multi-word patterns
        else {
          // Check if all words in the pattern appear in the message
          const allWordsMatch = patternWords.every(word => 
            words.some(msgWord => {
              const minLength = Math.min(word.length, msgWord.length);
              const matchingChars = Array.from(msgWord).filter((char, i) => 
                i < word.length && char === word[i]
              ).length;
              
              // Use the same length-based thresholds for phrase words
              if (minLength <= 4) {
                return matchingChars / minLength >= 0.8;
              } else if (minLength <= 6) {
                return matchingChars / minLength >= 0.7;
              } else {
                return matchingChars >= 4 || matchingChars / minLength >= 0.6;
              }
            })
          );
          if (allWordsMatch) {
            return topic;
          }
        }
      }
    }

    return 'general';
  }

  // Get topic-specific response
  const getTopicResponse = (topic: string): string => {
    switch (topic) {
      case 'greeting':
        return "Hallo! Leuk dat je contact opneemt. Waar kan ik je mee helpen? Je kunt me vragen stellen over onze trainingen, prijzen, planning, locaties of andere zaken waar je meer over wilt weten.";
      case 'training':
        return "Onze AI trainingen zijn praktijkgericht en aangepast aan verschillende niveaus. We bieden zowel introductiecursussen als geavanceerde workshops voor professionals. De trainingen combineren theorie met hands-on opdrachten zodat je direct kunt toepassen wat je leert.";
      case 'prijzen':
        return "De prijzen van onze trainingen variëren afhankelijk van de duur en het niveau. We bieden ook maatwerk en incompany trainingen waarvoor we een offerte op maat maken.";
      case 'planning':
        return "We organiseren regelmatig trainingen door het hele jaar. Onze eerstvolgende trainingen zijn gepland voor volgende maand, met zowel fysieke als online opties. We hebben flexibele opties voor zowel dag- als avondtrainingen.";
      case 'locaties':
        return "Onze trainingen vinden plaats op verschillende locaties in Nederland, met name in Amsterdam, Utrecht, Rotterdam en Eindhoven. We kiezen altijd voor goed bereikbare locaties met moderne faciliteiten. Daarnaast bieden we ook volledig online trainingen aan.";
      case 'online':
        return "Ja, we bieden volledig online trainingen aan! Deze zijn live en interactief, zodat je direct vragen kunt stellen en feedback kunt krijgen. We gebruiken professionele tools voor samenwerking en zorgen ervoor dat het online leerervaring net zo effectief is als in persoon.";
      case 'certificaten':
        return "Na het afronden van onze trainingen ontvang je een officieel certificaat dat je kunt delen op je LinkedIn profiel. Onze certificaten worden erkend in de industrie en tonen aan dat je praktische vaardigheden hebt opgedaan die direct toepasbaar zijn.";
      case 'general':
      default:
        return "Bedankt voor je interesse in onze diensten! We bieden verschillende AI trainingen aan, van beginners tot gevorderd niveau. Onze trainers zijn ervaren professionals die praktijkgerichte kennis delen en je helpen om AI toe te passen in jouw werkgebied.";
    }
  }

  // Get email request message
  const getEmailRequestMessage = (): string => {
    return "Zou je je e-mailadres willen achterlaten? Dan kunnen we je meer informatie sturen en persoonlijk contact opnemen om al je vragen te beantwoorden.";
  }

  const sendMessage = async () => {
    if (inputValue.trim() === '') return

    // Add user message to chat
    const userMessage = {
      text: inputValue,
      sender: 'user' as const,
      timestamp: new Date()
    }
    
    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)

    try {
      // Save message to API
      await saveMessageToAPI(userMessage.text, 'user')
      
      // Send notifications through enabled channels
      const promises = []
      
      if (USE_EMAIL) {
        promises.push(sendEmailNotification(userMessage.text))
      }
      
      if (USE_TELEGRAM) {
        promises.push(sendTelegramNotification(userMessage.text))
      }
      
      // Wait for all notification methods to complete
      await Promise.all(promises)
      
      // Simulate processing time
      await new Promise(resolve => setTimeout(resolve, 1500))

      if (conversationStage === 'waiting_for_email') {
        // Process email input
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (emailRegex.test(userMessage.text)) {
          // Valid email received
          const confirmationMessage = {
            text: "Bedankt voor je e-mailadres! We nemen zo snel mogelijk contact met je op.",
            sender: 'bot' as const,
            timestamp: new Date()
          }
          setMessages(prev => [...prev, confirmationMessage])
          await saveMessageToAPI(confirmationMessage.text, 'bot')
          setConversationStage('completed')
          setIsWaitingForEmail(false)
          setDetectedTopic(null)
        } else {
          // Invalid email format
          const invalidEmailMessage = {
            text: "Dit lijkt geen geldig e-mailadres te zijn. Kun je het nogmaals controleren?",
            sender: 'bot' as const,
            timestamp: new Date()
          }
          setMessages(prev => [...prev, invalidEmailMessage])
          await saveMessageToAPI(invalidEmailMessage.text, 'bot')
        }
      } else {
        // Detect message topic
        const topic = analyzeMessage(userMessage.text)
        setDetectedTopic(topic)
        
        // First, send contextual response about their question
        const topicResponse = getTopicResponse(topic)
        const responseMessage = {
          text: topicResponse,
          sender: 'bot' as const,
          timestamp: new Date()
        }
        
        setMessages(prev => [...prev, responseMessage])
        await saveMessageToAPI(responseMessage.text, 'bot')
        
        // Only ask for email if it's not a simple greeting
        if (topic !== 'greeting') {
          // Simulate a slight delay before asking for email
          await new Promise(resolve => setTimeout(resolve, 1000))
          
          // Then, ask for their email in a separate message
          const emailRequestMessage = {
            text: getEmailRequestMessage(),
            sender: 'bot' as const,
            timestamp: new Date()
          }
          
          setMessages(prev => [...prev, emailRequestMessage])
          await saveMessageToAPI(emailRequestMessage.text, 'bot')
          
          setConversationStage('waiting_for_email')
          setIsWaitingForEmail(true)
        }
      }
      
      // Update last check timestamp to avoid getting the auto-response back
      setLastCheckTimestamp(new Date().toISOString())
      
    } catch (error) {
      console.error('Error sending message:', error)
      setMessages(prev => [
        ...prev, 
        {
          text: "Er is een fout opgetreden bij het verzenden van je bericht. Probeer het later opnieuw.",
          sender: 'bot',
          timestamp: new Date()
        }
      ])
    } finally {
      setIsTyping(false)
    }
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  }

  // Comment out the unused function while keeping the function declaration for future use
  /*
  const openWhatsAppDirectly = (message: string) => {
    // Existing implementation
  }
  */

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat button */}
      <motion.button
        onClick={toggleChat}
        className="flex items-center justify-center w-14 h-14 rounded-lg shadow-lg focus:outline-none bg-ph-600 hover:bg-ph-500 transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <ChatBubbleLeftRightIcon className="w-6 h-6 text-white" />
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && !isExpanded && (
          <motion.div
            className="absolute bottom-20 right-0 w-80 md:w-96 bg-ph-900 rounded-lg overflow-hidden [box-shadow:0_25px_50px_-12px_rgba(0,0,0,0.45)]"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            {/* Close button */}
            <button
              onClick={toggleChat}
              className="absolute top-4 right-4 z-10 flex items-center justify-center w-8 h-8 rounded-lg bg-white/20 text-white"
            >
              <XMarkIcon className="w-5 h-5" />
            </button>
            
            {/* Content Container - Brand colored header */}
            <div className="bg-ph-900 pt-6 pb-24 relative">
              {/* Single Profile Image */}
              <div className="ml-6 mb-5">
                <div className="w-12 h-12 rounded-lg overflow-hidden border-2 border-ph-600">
                  <Image 
                    src="/pepijn-steijger.jpeg" 
                    alt="Pepijn Steijger" 
                    width={48} 
                    height={48}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              
              {/* Greeting */}
              <div className="px-6">
                <h3 className="text-2xl font-bold text-white">Hallo 👋</h3>
                <h3 className="text-2xl font-bold text-white mt-2">Hoe kunnen we je helpen?</h3>
              </div>
            </div>
            
            {/* White Content Cards */}
            <div className="bg-hero-dark-50 relative -mt-20 rounded-t-lg px-4 pt-4 pb-6">
              {/* Send Message Card */}s
              <button 
                onClick={startChat}
                className="w-full bg-white border border-gray-200 hover:bg-gray-50 rounded-lg shadow-sm flex justify-between items-center p-4 transition-colors"
              >
                <div>
                  <p className="font-semibold text-gray-800 text-left">Stuur ons een bericht</p>
                  <p className="text-sm text-gray-500">We reageren meestal binnen een paar uur</p>
                </div>
                <ChevronRightIcon className="h-5 w-5 text-ph-600" />
              </button>
            </div>
            
            {/* Bottom Navigation */}
            <div className="bg-white border-t border-gray-200 flex items-center">
              <button
                className="flex-1 flex justify-center items-center py-4 text-ph-600"
                onClick={() => setActiveView('home')}
              >
                <HomeIcon className="w-5 h-5" />
                <span className="ml-2 text-sm font-medium">Home</span>
              </button>
              <div className="w-px h-6 bg-gray-200"></div>
              <button
                onClick={() => {
                  setIsExpanded(true);
                  setActiveView('messages');
                }}
                className="flex-1 flex justify-center items-center py-4 text-gray-500"
              >
                <ChatBubbleOvalLeftIcon className="w-5 h-5" />
                <span className="ml-2 text-sm font-medium">Berichten</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Expanded Chat (Conversation View) */}
      <AnimatePresence>
        {isOpen && isExpanded && (
          <motion.div
            className="absolute bottom-20 right-0 w-80 md:w-96 bg-ph-900 rounded-lg overflow-hidden flex flex-col [box-shadow:0_25px_50px_-12px_rgba(0,0,0,0.45)]"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            {/* Header */}
            <div className="bg-ph-900 p-4 text-white">
              <div className="flex items-center">
                <div className="flex-shrink-0 mr-3">
                  <div className="w-10 h-10 rounded-lg overflow-hidden border border-ph-600">
                    <Image 
                      src="/pepijn-steijger.jpeg" 
                      alt="Pepijn Steijger" 
                      width={40} 
                      height={40}
                      className="object-cover"
                    />
                  </div>
                </div>
                <div>
                  <h5 className="font-bold">Pepijn Steijger</h5>
                  <p className="text-xs text-white/70">AI Trainer</p>
                </div>
                <button
                  onClick={toggleChat}
                  className="ml-auto flex items-center justify-center w-8 h-8 rounded-lg bg-white/20"
                >
                  <XMarkIcon className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>

            {/* Messages area */}
            <div className="flex-1 p-4 overflow-y-auto max-h-80 bg-hero-dark-50">
              {messages.map((message, index) => (
                <div 
                  key={index} 
                  className={`mb-3 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-3/4 rounded-lg p-3 ${
                      message.sender === 'user' 
                        ? 'bg-ph-600 text-white ml-12' 
                        : 'bg-hero-dark-200 text-gray-800 mr-12'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                    <p className={`text-xs mt-1 ${message.sender === 'user' ? 'text-white/70' : 'text-gray-500'}`}>
                      {formatTime(message.timestamp)}
                    </p>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-hero-dark-200 rounded-lg p-3 flex space-x-1">
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Input area */}
            <div className="p-3 border-t border-gray-200 bg-white">
              <div className="flex items-center">
                <input
                  type="text"
                  placeholder="Bericht typen..."
                  className="flex-1 h-10 border border-gray-300 rounded-l-lg px-3 focus:outline-none text-gray-800 placeholder-gray-500"
                  value={inputValue}
                  onChange={handleInputChange}
                  onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                />
                <button
                  onClick={sendMessage}
                  className="h-10 bg-ph-600 text-white px-3 rounded-r-lg hover:bg-ph-500 transition-colors flex items-center justify-center"
                  disabled={inputValue.trim() === ''}
                >
                  <PaperAirplaneIcon className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            {/* Footer */}
            <div className="bg-white border-t border-gray-200 flex items-center">
              <button 
                onClick={() => {
                  setIsExpanded(false);
                  setActiveView('home');
                }}
                className={`flex-1 flex justify-center items-center py-4 ${activeView === 'home' ? 'text-ph-600' : 'text-gray-500'}`}
              >
                <HomeIcon className="w-5 h-5" />
                <span className="ml-2 text-sm font-medium">Home</span>
              </button>
              <div className="w-px h-6 bg-gray-200"></div>
              <button
                onClick={() => setActiveView('messages')}
                className={`flex-1 flex justify-center items-center py-4 ${activeView === 'messages' ? 'text-ph-600' : 'text-gray-500'}`}
              >
                <ChatBubbleOvalLeftIcon className="w-5 h-5" />
                <span className="ml-2 text-sm font-medium">Berichten</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default ChatWidget 