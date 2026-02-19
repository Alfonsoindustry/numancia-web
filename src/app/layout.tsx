import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${inter.variable} ${outfit.variable} font-sans antialiased bg-[#0B1120] text-white`}
      >
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
