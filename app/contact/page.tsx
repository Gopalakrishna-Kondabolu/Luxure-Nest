import React from 'react';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-ink pt-28 pb-20 px-6 md:px-12 text-ivory">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <h1 className="font-fraunces text-4xl md:text-6xl mb-6 leading-tight">
            Let's discuss your next acquisition.
          </h1>
          <p className="font-inter text-slate text-lg md:text-xl">
            Whether you are looking to acquire a multi-generational asset, list your property off-market, or require legal structuring for a real estate portfolio, our advisory team is ready.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Form Section */}
          <div className="bg-panel border border-line rounded-lg p-8 md:p-10">
            <form className="space-y-6 font-inter">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs text-slate uppercase tracking-wider mb-2">First Name</label>
                  <input type="text" className="w-full bg-ink border border-line rounded px-4 py-3 text-ivory focus:outline-none focus:border-gold transition-colors" />
                </div>
                <div>
                  <label className="block text-xs text-slate uppercase tracking-wider mb-2">Last Name</label>
                  <input type="text" className="w-full bg-ink border border-line rounded px-4 py-3 text-ivory focus:outline-none focus:border-gold transition-colors" />
                </div>
              </div>
              
              <div>
                <label className="block text-xs text-slate uppercase tracking-wider mb-2">Email Address</label>
                <input type="email" className="w-full bg-ink border border-line rounded px-4 py-3 text-ivory focus:outline-none focus:border-gold transition-colors" />
              </div>

              <div>
                <label className="block text-xs text-slate uppercase tracking-wider mb-2">Phone Number</label>
                <input type="tel" className="w-full bg-ink border border-line rounded px-4 py-3 text-ivory focus:outline-none focus:border-gold transition-colors" />
              </div>

              <div>
                <label className="block text-xs text-slate uppercase tracking-wider mb-2">Nature of Inquiry</label>
                <select className="w-full bg-ink border border-line rounded px-4 py-3 text-ivory focus:outline-none focus:border-gold transition-colors appearance-none">
                  <option value="buy">Property Acquisition</option>
                  <option value="sell">Off-Market Listing</option>
                  <option value="legal">Legal & Compliance</option>
                  <option value="other">General Advisory</option>
                </select>
              </div>

              <div>
                <label className="block text-xs text-slate uppercase tracking-wider mb-2">Message</label>
                <textarea rows={5} className="w-full bg-ink border border-line rounded px-4 py-3 text-ivory focus:outline-none focus:border-gold transition-colors resize-none" placeholder="Tell us about your investment goals..."></textarea>
              </div>

              <button type="button" className="w-full bg-gold hover:bg-[#D4AF37] text-ink font-semibold py-4 rounded transition-colors mt-4 text-lg">
                Submit Inquiry
              </button>
            </form>
          </div>

          {/* Contact Info & Map Section */}
          <div className="space-y-12">
            
            {/* Contact Details */}
            <div>
              <h2 className="font-fraunces text-3xl mb-6 text-gold">Our Office</h2>
              
              <div className="space-y-6 font-inter text-slate">
                <div>
                  <h3 className="text-ivory font-semibold mb-1">Headquarters</h3>
                  <p>Level 14, DLF Cyber Park<br />Phase 2, Udyog Vihar<br />Gurugram, Haryana 122008</p>
                </div>
                
                <div>
                  <h3 className="text-ivory font-semibold mb-1">Direct Lines</h3>
                  <p className="font-mono mt-1">T: +91 124 456 7890</p>
                  <p className="font-mono mt-1">E: advisory@luxurenest.com</p>
                </div>
              </div>
            </div>

            {/* WhatsApp Button */}
            <div className="bg-panel/50 border border-line rounded-lg p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-ivory font-inter font-semibold mb-1">Prefer instant messaging?</h3>
                <p className="text-sm text-slate font-inter">Connect securely with our advisory desk.</p>
              </div>
              <a 
                href="https://wa.me/919876543210" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-5 py-3 rounded-full font-inter font-medium transition-colors whitespace-nowrap"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                </svg>
                WhatsApp Us
              </a>
            </div>

            {/* Map Embed */}
            <div className="w-full h-80 rounded-lg overflow-hidden border border-line">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14028.919379685098!2d77.08051219808381!3d28.472658866380693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1f2372d3e3cd%3A0xc68297b830d66c25!2sDLF%20Cyber%20City%2C%20DLF%20Phase%202%2C%20Sector%2024%2C%20Gurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}