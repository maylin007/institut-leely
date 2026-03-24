import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

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
  title: {
    default: "Institut de Beauté Leely — Papeete, Tahiti",
    template: "%s — Institut Leely",
  },
  description:
    "Institut de beauté à Papeete depuis 1993. Spécialiste du maquillage semi-permanent, soins du visage, massages, épilations. Sur rendez-vous au 40 42 66 42.",
  keywords: [
    "institut beauté Papeete",
    "maquillage semi-permanent Tahiti",
    "soins visage Papeete",
    "massage Papeete",
    "épilation Tahiti",
  ],
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
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
