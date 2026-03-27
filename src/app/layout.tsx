import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ChatWidget from "@/components/ChatWidget";
import { LanguageProvider } from "@/lib/LanguageContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://institut-leely.vercel.app"),
  title: {
    default: "Institut de Beauté Leely — Papeete, Tahiti",
    template: "%s — Institut Leely",
  },
  description:
    "Institut de beauté à Papeete depuis 1993. Spécialiste du maquillage semi-permanent, soins du visage, massages et épilations. Rendez-vous au 40 42 66 42.",
  keywords: [
    "institut beauté Papeete",
    "maquillage semi-permanent Tahiti",
    "soins visage Papeete",
    "massage Papeete",
    "épilation Tahiti",
  ],
  alternates: {
    canonical: "https://institut-leely.vercel.app",
    languages: { "fr": "https://institut-leely.vercel.app", "en": "https://institut-leely.vercel.app" },
  },
  openGraph: {
    title: "Institut de Beauté Leely — Papeete, Tahiti",
    description:
      "Votre institut de beauté à Papeete depuis 1993. Soins du visage, massages, maquillage semi-permanent.",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="min-h-screen flex flex-col">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BeautySalon",
          "name": "Institut de Beauté Leely",
          "address": { "@type": "PostalAddress", "streetAddress": "46 Rue Georges Lagarde", "addressLocality": "Papeete", "postalCode": "98713", "addressCountry": "PF" },
          "telephone": "+68940426642",
          "openingHours": "Mo-Sa 08:00-18:00",
          "url": "https://institut-leely.vercel.app",
          "description": "Institut de beauté à Papeete depuis 1993. Spécialiste du maquillage semi-permanent, soins du visage, massages et épilations.",
          "foundingDate": "1993",
          "priceRange": "$$",
          "geo": { "@type": "GeoCoordinates", "latitude": -17.5418, "longitude": -149.568 },
          "sameAs": ["https://www.facebook.com/InstitutLeely/"]
        })}} />
        <LanguageProvider>
          <Navigation />
          <main className="flex-1">{children}</main>
          <Footer />
        </LanguageProvider>
        <WhatsAppButton />
        <ChatWidget />
      </body>
    </html>
  );
}
