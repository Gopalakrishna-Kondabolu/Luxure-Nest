"use client";

import { useState, useMemo } from 'react';
import { properties } from '@/lib/properties';
import PropertyCard from '@/components/ui/PropertyCard';

export default function ListingsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');

  // Real-time filter logic
  const filteredProperties = useMemo(() => {
    return properties.filter((property) => {
      const matchesSearch = 
        property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.location.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesType = selectedType === 'all' || property.type === selectedType;

      return matchesSearch && matchesType;
    });
  }, [searchTerm, selectedType]);

  return (
    <main className="min-h-screen bg-ink pt-24 pb-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-12">
          <h1 className="font-fraunces text-4xl md:text-5xl text-ivory mb-4">
            Exclusive Portfolio
          </h1>
          <p className="font-inter text-slate max-w-2xl">
            Explore our curated selection of advisory-vetted luxury properties. 
            Precision, provenance, and unparalleled design.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-col md:flex-row gap-4 mb-12 bg-panel p-4 rounded-lg border border-line">
          <input
            type="text"
            placeholder="Search by name or location..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 bg-ink border border-line rounded px-4 py-3 text-ivory font-inter placeholder:text-slate focus:outline-none focus:border-gold transition-colors"
          />
          
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="bg-ink border border-line rounded px-4 py-3 text-ivory font-inter focus:outline-none focus:border-gold transition-colors min-w-[200px] capitalize"
          >
            <option value="all">All Property Types</option>
            <option value="buy">For Sale</option>
            <option value="rent">For Rent</option>
            <option value="commercial">Commercial</option>
          </select>
        </div>

        {/* Grid */}
        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 border border-dashed border-line rounded-lg">
            <p className="font-mono text-slate">No properties match your exact criteria.</p>
            <button 
              onClick={() => { setSearchTerm(''); setSelectedType('all'); }}
              className="mt-4 text-gold hover:text-goldBright font-inter underline"
            >
              Clear filters
            </button>
          </div>
        )}

      </div>
    </main>
  );
}