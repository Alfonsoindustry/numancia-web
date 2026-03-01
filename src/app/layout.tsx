import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://numancia.digital'),
  title: {
    default: "Numancia Digital | Soluciones Digitales en Soria",
    template: "%s | Numancia Digital"
  },
  description: "Digitalizamos el corazón de Soria. Expertos en Diseño Web, SEO Local, Redes Sociales y Ofimática para el comercio soriano. Tecnología punta a precios Km 0.",
  keywords: ["Soria", "Marketing Digital Soria", "Diseño Web Soria", "SEO Soria", "Numancia Digital", "Páginas Web Soria", "Agencia Digital Soria"],
  authors: [{ name: "Numancia Digital" }],
  creator: "Numancia Digital",
  publisher: "Numancia Digital",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Numancia Digital | Soluciones Digitales en Soria",
    description: "Digitalizamos el corazón de Soria. Tecnología de alto rendimiento para el comercio local.",
    url: 'https://numancia.digital',
    siteName: 'Numancia Digital',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: '/brand/logo_redes_sociales_800x800.png',
        width: 800,
        height: 800,
        alt: 'Numancia Digital Soria',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Numancia Digital | Soluciones Digitales en Soria",
    description: "Digitalizamos el corazón de Soria. Tecnología de alto rendimiento para el comercio local.",
    images: ['/brand/logo_redes_sociales_800x800.png'],
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
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Numancia Digital",
  "description": "Agencia de digitalización en Soria. Diseño Web, SEO Local, Redes Sociales y Automatización para pymes y comercios de la provincia de Soria.",
  "url": "https://www.numanciadigital.es",
  "telephone": "+34671883656",
  "email": "buzon@numanciadigital.es",
  "image": "https://www.numanciadigital.es/brand/logo_web_512x512.png",
  "logo": "https://www.numanciadigital.es/brand/logo_web_512x512.png",
  "priceRange": "€€",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Soria",
    "addressRegion": "Castilla y León",
    "postalCode": "42001",
    "addressCountry": "ES"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 41.7643,
    "longitude": -2.4638
  },
  "areaServed": {
    "@type": "AdministrativeArea",
    "name": "Provincia de Soria"
  },
  "sameAs": [
    "https://www.instagram.com/numancia.digital"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Servicios Digitales para pymes en Soria",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Diseño Web en Soria" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "SEO Local en Soria" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Gestión de Redes Sociales en Soria" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Automatización y Ofimática para pymes" } }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased`}>
        {children}
        <CookieBanner />
        <WhatsAppButton />
      </body>
    </html>
  );
}
