import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import StructuredData from '@/components/StructuredData'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PromptPilot | AI Prompt Engineering Experts',
  description: 'PromptPilot provides expert AI consultancy, prompt engineering training, and n8n workflow implementation to supercharge your business.',
  openGraph: {
    title: 'PromptPilot | AI Prompt Engineering Experts',
    description: 'PromptPilot provides expert AI consultancy, prompt engineering training, and n8n workflow implementation to supercharge your business.',
    url: 'https://promptpilot.nl',
    siteName: 'PromptPilot',
    images: [
      {
        url: 'https://promptpilot.nl/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'PromptPilot - AI Prompt Engineering Experts',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PromptPilot | AI Prompt Engineering Experts',
    description: 'PromptPilot provides expert AI consultancy, prompt engineering training, and n8n workflow implementation to supercharge your business.',
    images: ['https://promptpilot.nl/images/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <StructuredData />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
} 