"use client"; // Needs to be a client component to use usePathname

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs';
import { usePathname } from "next/navigation"; 
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ChatWidget from "@/components/ui/ChatWidget";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  // Define paths where you want to hide the header/footer
  const isAuthPage = pathname.startsWith("/sign-in") || pathname.startsWith("/sign-up");

  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          {/* Only render these if NOT on an auth page */}
          {!isAuthPage && <Navbar />}
          
          <main>{children}</main>
          
          {!isAuthPage && <Footer />}
          {!isAuthPage && <ChatWidget />}
        </body>
      </html>
    </ClerkProvider>
  );
}