"use client";

import { SlidersHorizontal } from "lucide-react";

export interface Filters {
  location: string;
  type: string;
  minPrice: number;
  maxPrice: number;
}

const typeOptions = [
  { label: "All Types", value: "all" },
  { label: "Buy", value: "buy" },
  { label: "Rent", value: "rent" },
  { label: "Commercial", value: "commercial" },
];

const priceRanges = [
  { label: "Any Price", min: 0, max: Infinity },
  { label: "Under ₹50 Lakh", min: 0, max: 5000000 },
  { label: "₹50 Lakh – ₹1 Cr", min: 5000000, max: 10000000 },
  { label: "₹1 Cr – ₹5 Cr", min: 10000000, max: 50000000 },
  { label: "Above ₹5 Cr", min: 50000000, max: Infinity },
];

interface FilterBarProps {
  filters: Filters;
  onChange: (filters: Filters) => void;
  resultCount: number;
}

export default function FilterBar({
  filters,
  onChange,
  resultCount,
}: FilterBarProps) {
  function handlePriceChange(label: string) {
    const range = priceRanges.find((r) => r.label === label);
    if (!range) return;
    onChange({ ...filters, minPrice: range.min, maxPrice: range.max });
  }

  const activePriceLabel =
    priceRanges.find(
      (r) => r.min === filters.minPrice && r.max === filters.maxPrice
    )?.label ?? "Any Price";

  return (
    <div className="bg-panel border border-line rounded-2xl p-5 mb-10">
      <div className="flex flex-col lg:flex-row gap-4 lg:items-center">
        <div className="flex items-center gap-2 text-gold text-sm shrink-0">
          <SlidersHorizontal className="w-4 h-4" />
          <span className="font-medium">Filters</span>
        </div>

        {/* Location search */}
        <input
          type="text"
          value={filters.location}
          onChange={(e) =>
            onChange({ ...filters, location: e.target.value })
          }
          placeholder="Search by location..."
          className="flex-1 bg-ink text-ivory placeholder:text-slate text-sm rounded-xl px-4 py-2.5 outline-none border border-line focus:border-gold/40 transition-colors"
        />

        {/* Type filter */}
        <select
          value={filters.type}
          onChange={(e) => onChange({ ...filters, type: e.target.value })}
          className="bg-ink text-ivory text-sm rounded-xl px-4 py-2.5 outline-none border border-line focus:border-gold/40 transition-colors"
        >
          {typeOptions.map((opt) => (
            <option key={opt.value} value={opt.value} className="bg-panel">
              {opt.label}
            </option>
          ))}
        </select>

        {/* Price filter */}
        <select
          value={activePriceLabel}
          onChange={(e) => handlePriceChange(e.target.value)}
          className="bg-ink text-ivory text-sm rounded-xl px-4 py-2.5 outline-none border border-line focus:border-gold/40 transition-colors"
        >
          {priceRanges.map((range) => (
            <option key={range.label} value={range.label} className="bg-panel">
              {range.label}
            </option>
          ))}
        </select>
      </div>

      <p className="text-slate text-xs mt-4">
        {resultCount} {resultCount === 1 ? "property" : "properties"} found
      </p>
    </div>
  );
}