export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "PromptPilot",
    "url": "https://promptpilot.nl",
    "logo": "https://promptpilot.nl/images/logo.png",
    "description": "PromptPilot helps development teams increase productivity by implementing AI solutions.",
    "sameAs": [
      "https://twitter.com/promptpilot",
      "https://linkedin.com/company/promptpilot"
    ]
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "PromptPilot",
    "url": "https://promptpilot.nl",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://promptpilot.nl/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AI Training for Development Teams",
    "provider": {
      "@type": "Organization",
      "name": "PromptPilot"
    },
    "description": "Professional training programs to help development teams implement AI solutions and increase productivity.",
    "offers": {
      "@type": "Offer",
      "price": "Contact for pricing",
      "priceCurrency": "EUR"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify([
          organizationSchema,
          websiteSchema,
          serviceSchema
        ])
      }}
    />
  )
} 