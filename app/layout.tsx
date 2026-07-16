import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// Import Clerk and the dark theme
import { ClerkProvider } from '@clerk/nextjs';
import { dark } from '@clerk/themes';

const inter = Inter({ subsets: ["latin"] });

// ... (your existing metadata) ...

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Wrap the app to track the user session
   <ClerkProvider appearance={{ 
  variables: { colorPrimary: '#C6A15B' } // Uses your Luxure Nest gold
}}>
      <html lang="en">
        <body className={inter.className}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}