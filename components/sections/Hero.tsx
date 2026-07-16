"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const propertyTypes = [
  { label: "Buy", value: "buy" },
  { label: "Rent", value: "rent" },
  { label: "Commercial", value: "commercial" },
];

export default function Hero() {
  const router = useRouter();
  const [location, setLocation] = useState("");
  const [type, setType] = useState("buy");

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    const params = new URLSearchParams();
    if (location) params.set("location", location);
    if (type) params.set("type", type);
    router.push(`/listings?${params.toString()}`);
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-ink bg-blueprint-grid pt-24 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold/10 rounded-full blur-[120px]" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-gold text-sm tracking-[0.2em] uppercase mb-5"
        >
          Real Estate Advisory · Delhi NCR
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-7xl font-display italic text-ivory leading-tight text-balance"
        >
          Homes chosen with the
          <br />
          precision of an advisor.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-slate mt-6 max-w-xl mx-auto"
        >
          Luxure Nest curates Delhi NCR&apos;s finest addresses — buy, rent, or
          invest with guidance built on data, not guesswork.
        </motion.p>

        {/* Search bar */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          onSubmit={handleSearch}
          className="mt-12 bg-panel border border-line rounded-2xl p-2 flex flex-col md:flex-row gap-2 max-w-2xl mx-auto"
        >
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Search by location — e.g. Gurugram, GK-I"
            className="flex-1 bg-transparent text-ivory placeholder:text-slate px-4 py-3 outline-none text-sm"
          />

          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="bg-panelLight text-ivory text-sm rounded-xl px-4 py-3 outline-none border border-line"
          >
            {propertyTypes.map((t) => (
              <option key={t.value} value={t.value} className="bg-panel">
                {t.label}
              </option>
            ))}
          </select>

          <button
            type="submit"
            className="bg-gold text-ink font-medium text-sm px-6 py-3 rounded-xl hover:bg-goldBright transition-colors"
          >
            Search
          </button>
        </motion.form>
      </div>
    </section>
  );
}