import { notFound } from 'next/navigation';
import { properties } from '@/lib/properties';

// 1. Add "async" here and define params as a Promise
export default async function PropertyDetail({ params }: { params: Promise<{ id: string }> }) {
  
  // 2. Await the params before trying to use the ID
  const resolvedParams = await params;
  
  // 3. Now use the resolved ID to find the property
  const property = properties.find((p) => p.id === resolvedParams.id);

  if (!property) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-ink pt-28 pb-20 px-6 md:px-12 text-ivory">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4 mb-4">
            <div>
              <h1 className="font-fraunces text-4xl md:text-5xl mb-2">{property.title}</h1>
              <p className="font-inter text-slate text-lg">{property.location}</p>
            </div>
            <div className="text-left md:text-right">
              <div className="font-mono text-gold text-3xl mb-1">{property.priceLabel}</div>
              <p className="font-mono text-sm text-slate px-3 py-1 border border-line rounded-full inline-block capitalize">
                {property.type}
              </p>
            </div>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-12">
          
          {/* Left Column: Details & Media */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="aspect-[16/9] w-full relative rounded-lg overflow-hidden border border-line">
                <img 
                  src={property.images?.[0] || property.image} 
                  alt="Main view" 
                  className="w-full h-full object-cover"
                />
              </div>
              {property.images && property.images.length > 1 && (
                <div className="grid grid-cols-2 gap-4">
                  {property.images.slice(1, 3).map((img, idx) => (
                    <div key={idx} className="aspect-[4/3] relative rounded-lg overflow-hidden border border-line">
                      <img src={img} alt={`Gallery ${idx + 1}`} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Quick Specs */}
            <div className="grid grid-cols-3 gap-4 py-6 border-y border-line font-mono text-center">
              <div>
                <span className="block text-2xl text-gold mb-1">{property.bedrooms}</span>
                <span className="text-slate text-sm uppercase tracking-widest">Beds</span>
              </div>
              <div className="border-x border-line">
                <span className="block text-2xl text-gold mb-1">{property.bathrooms}</span>
                <span className="text-slate text-sm uppercase tracking-widest">Baths</span>
              </div>
              <div>
                <span className="block text-2xl text-gold mb-1">{property.areaSqft}</span>
                <span className="text-slate text-sm uppercase tracking-widest">Sq.Ft</span>
              </div>
            </div>

            {/* Description */}
            <section>
              <h2 className="font-fraunces text-2xl mb-4 text-gold">About the Property</h2>
              <p className="font-inter text-slate leading-relaxed">
                {property.description}
              </p>
            </section>

            {/* Amenities */}
            {property.amenities && (
              <section>
                <h2 className="font-fraunces text-2xl mb-6 text-gold">Amenities</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-2 font-inter text-slate">
                  {property.amenities.map((amenity, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
                      {amenity}
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Right Column: Sticky Contact Form */}
          <div className="lg:col-span-1">
            <div className="bg-panel border border-line rounded-lg p-8 sticky top-32">
              <h3 className="font-fraunces text-2xl mb-2 text-ivory">Interested?</h3>
              <p className="font-inter text-sm text-slate mb-6">
                Connect with our advisory team to arrange a private viewing or request the legal dossier.
              </p>
              
              <form className="space-y-4 font-inter">
                <div>
                  <label className="block text-xs text-slate uppercase tracking-wider mb-2">Name</label>
                  <input type="text" className="w-full bg-ink border border-line rounded px-4 py-3 text-ivory focus:outline-none focus:border-gold transition-colors" />
                </div>
                <div>
                  <label className="block text-xs text-slate uppercase tracking-wider mb-2">Email / Phone</label>
                  <input type="text" className="w-full bg-ink border border-line rounded px-4 py-3 text-ivory focus:outline-none focus:border-gold transition-colors" />
                </div>
                <div>
                  <label className="block text-xs text-slate uppercase tracking-wider mb-2">Message</label>
                  <textarea rows={4} defaultValue={`I am interested in ${property.title}. Please contact me with more details.`} className="w-full bg-ink border border-line rounded px-4 py-3 text-ivory focus:outline-none focus:border-gold transition-colors resize-none" />
                </div>
                <button type="button" className="w-full bg-gold hover:bg-[#D4AF37] text-ink font-semibold py-4 rounded transition-colors mt-4">
                  Request Details
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}