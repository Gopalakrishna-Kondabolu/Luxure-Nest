import Link from 'next/link';
import { Property } from '@/lib/properties';

export default function PropertyCard({ property }: { property: Property }) {
  return (
    <Link href={`/listings/${property.id}`} className="group block">
      <div className="bg-panel border border-line rounded-lg overflow-hidden transition-all duration-300 hover:border-gold hover:shadow-[0_8px_30px_rgb(0,0,0,0.4)]">
        
        {/* Image Container */}
        <div className="relative h-64 w-full overflow-hidden">
          <div className="absolute inset-0 bg-ink/20 group-hover:bg-transparent z-10 transition-colors duration-300" />
          <img 
            src={property.image} 
            alt={property.title}
            className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-4 right-4 z-20 bg-panelLight/90 backdrop-blur px-3 py-1 text-xs font-mono text-ivory rounded border border-line capitalize">
            {property.type}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="font-mono text-gold mb-2 text-lg">
            {property.priceLabel}
          </div>
          <h3 className="font-fraunces text-2xl text-ivory mb-1 truncate">
            {property.title}
          </h3>
          <p className="font-inter text-slate text-sm mb-6 truncate">
            {property.location}
          </p>

          <hr className="border-line mb-4" />

          {/* Specs */}
          <div className="flex justify-between items-center font-mono text-sm text-ivory">
            <div className="flex items-center gap-2">
              <span className="text-slate">Beds</span> {property.bedrooms}
            </div>
            <div className="flex items-center gap-2">
              <span className="text-slate">Baths</span> {property.bathrooms}
            </div>
            <div className="flex items-center gap-2">
              <span className="text-slate">Sq.Ft</span> {property.areaSqft}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}