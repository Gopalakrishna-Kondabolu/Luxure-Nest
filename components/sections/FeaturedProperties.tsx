import Link from "next/link";
import { properties } from "@/lib/properties";
import PropertyCard from "@/components/ui/PropertyCard";

export default function FeaturedProperties() {
  const featured = properties.filter((p) => p.featured);

  return (
    <section className="bg-ink py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <p className="text-gold text-xs tracking-[0.2em] uppercase mb-3">
              Curated Selection
            </p>
            <h2 className="text-4xl font-display italic text-ivory">
              Featured Properties
            </h2>
          </div>
          <Link
            href="/listings"
            className="text-sm text-ivory/80 hover:text-gold transition-colors underline underline-offset-4"
          >
            View all listings →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
}