import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

const siteUrl = 'https://somervilledentalassociates.com' // Update with actual domain

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Somerville Dental Associates | General & Cosmetic Dentistry in Medford, MA',
    template: '%s | Somerville Dental Associates',
  },
  description: 'Quality dental health is comfortable and traditional general and cosmetic dentistry. At Somerville Dental Associates in Medford, MA, our dental staff strives to make your experience as comfortable as possible. We offer exams, cleanings, implants, dentures, and teeth whitening.',
  keywords: [
    'dentist',
    'dental care',
    'cosmetic dentistry',
    'Somerville dentist',
    'Medford dentist',
    'Somerville Dental Associates',
    'dental exams',
    'teeth cleaning',
    'dental implants',
    'dentures',
    'teeth whitening',
    'emergency dentistry',
    'dental hygiene',
    'general dentistry',
    'MA dentist',
    'Massachusetts dentist',
  ],
  authors: [{ name: 'Somerville Dental Associates' }],
  creator: 'Somerville Dental Associates',
  publisher: 'Somerville Dental Associates',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Somerville Dental Associates',
    title: 'Somerville Dental Associates | General & Cosmetic Dentistry in Medford, MA',
    description: 'Quality dental health is comfortable and traditional general and cosmetic dentistry. Professional dental care in Medford, MA.',
    images: [
      {
        url: '/tooth-icon.png',
        width: 1200,
        height: 630,
        alt: 'Somerville Dental Associates',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Somerville Dental Associates | General & Cosmetic Dentistry',
    description: 'Quality dental health is comfortable and traditional general and cosmetic dentistry in Medford, MA.',
    images: ['/tooth-icon.png'],
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
  icons: {
    icon: '/tooth-icon.png',
    apple: '/tooth-icon.png',
  },
  alternates: {
    canonical: siteUrl,
  },
  category: 'Healthcare',
  classification: 'Dental Practice',
}

// JSON-LD Structured Data for LocalBusiness
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'DentalClinic',
  name: 'Somerville Dental Associates',
  alternateName: 'Somerville Dental',
  image: `${siteUrl}/tooth-icon.png`,
  '@id': siteUrl,
  url: siteUrl,
  telephone: '+1-781-874-1630',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '3 Ashland Street',
    addressLocality: 'Medford',
    addressRegion: 'MA',
    postalCode: '02155',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 42.4184,
    longitude: -71.1046,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '17:00',
    },
  ],
  areaServed: {
    '@type': 'City',
    name: ['Somerville', 'Medford', 'Cambridge', 'Arlington', 'Malden'],
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Dental Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Dental Exams & Cleanings',
          description: 'Regular dental exams and professional cleanings',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Cosmetic & Restorative Dentistry',
          description: 'Veneers, crowns, and fillings',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Dental Implants',
          description: 'Permanent tooth replacement solutions',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Emergency Dentistry',
          description: 'Prompt, compassionate care for dental emergencies',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Dentures',
          description: 'Custom-fitted dentures for comfort and functionality',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Teeth Whitening',
          description: 'Professional teeth whitening treatments',
        },
      },
    ],
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.5',
    reviewCount: '50',
    bestRating: '5',
    worstRating: '1',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
