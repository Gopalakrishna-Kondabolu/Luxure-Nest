import type { Metadata } from "next";
import { Fraunces, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-plex-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: "Luxure Nest | Premium Real Estate Advisory in Delhi NCR",
    template: "%s | Luxure Nest"
  },
  description: "Fiduciary real estate advisory for high-net-worth individuals. We curate and secure multi-generational luxury assets across Delhi, Gurugram, and Noida.",
  keywords: ["Luxury Real Estate Delhi", "Gurugram Penthouses", "Real Estate Advisory", "Off-market properties NCR", "South Delhi Villas"],
  openGraph: {
    title: "Luxure Nest | Premium Real Estate Advisory",
    description: "Fiduciary real estate advisory for high-net-worth individuals in Delhi NCR.",
    url: "https://luxurenest.com", // Replace with your actual future domain
    siteName: "Luxure Nest",
    locale: "en_IN",
    type: "website",
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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${fraunces.variable} ${inter.variable} ${plexMono.variable} bg-ink text-ivory font-body antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}