"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Listings", href: "/listings" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-ink/90 backdrop-blur-md border-b border-line py-3" : "bg-transparent py-6"}`}>
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="font-display italic text-2xl text-ivory">
          Luxure <span className="text-gold">Nest</span>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm text-ivory/80 hover:text-gold transition-colors">
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Link href="/contact" className="border border-gold text-gold text-sm px-5 py-2.5 rounded-full hover:bg-gold hover:text-ink transition-colors">
            Book Consultation
          </Link>
        </div>
      </nav>
    </header>
  );
}