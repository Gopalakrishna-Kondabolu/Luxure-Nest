import React from 'react';

// Updated with the real stakeholders
const teamMembers = [
  {
    id: 't1',
    name: 'Dr. Manas Sinha, PhD',
    role: 'Chief Executive Officer',
    bio: 'Driving new initiatives and strategic vision at Luxure Nest. Dr. Sinha leverages his extensive leadership experience in enterprise IT Infrastructure Solutions and Services to bring unprecedented data precision and robust architecture to the luxury real estate sector.',
    image: '/images/manas-sinha.jpg', // Ensure image_d94150.jpg is saved here
  },
  {
    id: 't2',
    name: 'Sanskar Singh', // <-- UPDATE THIS NAME
    role: 'Technical Lead',
    bio: 'Leading the technological framework of Luxure Nest. He ensures our advisory platform is backed by state-of-the-art data analytics, seamless client interfaces, and secure, scalable infrastructure to redefine the property acquisition experience.',
    image: '/images/tech-lead.png', // Ensure image_d9416f.png is saved here
  }
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-ink pt-28 pb-20 px-6 md:px-12 text-ivory">
      <div className="max-w-7xl mx-auto">
        
        {/* Hero / Mission Section */}
        <section className="mb-24 text-center max-w-4xl mx-auto">
          <h1 className="font-fraunces text-4xl md:text-6xl mb-6 leading-tight text-ivory">
            We built the advisory firm we couldn't find.
          </h1>
          <p className="font-inter text-slate text-lg md:text-xl leading-relaxed">
            The luxury real estate market is cluttered with conflicting interests, hidden commissions, and aggressive sales tactics. Luxure Nest was founded on a simple premise: high-net-worth individuals deserve the same fiduciary precision in real estate as they expect from their wealth managers.
          </p>
        </section>

        <hr className="border-line mb-24" />

        {/* Vision & Values Grid */}
        <section className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="font-fraunces text-3xl mb-4 text-gold">Our Vision</h2>
              <p className="font-inter text-slate leading-relaxed mb-6">
                To transform the acquisition of premium real estate from a stressful transaction into a seamless, data-backed advisory experience. We don't just find houses; we secure multi-generational assets driven by innovative technology.
              </p>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="font-mono text-gold mb-2 text-sm uppercase tracking-widest">01. Data over rhetoric</h3>
                <p className="font-inter text-slate">Every recommendation is backed by micro-market analytics and robust IT infrastructure, not developer marketing brochures.</p>
              </div>
              <div>
                <h3 className="font-mono text-gold mb-2 text-sm uppercase tracking-widest">02. Fiduciary alignment</h3>
                <p className="font-inter text-slate">We sit on your side of the table. If a property has legal ambiguity or poor appreciation metrics, we advise against it.</p>
              </div>
              <div>
                <h3 className="font-mono text-gold mb-2 text-sm uppercase tracking-widest">03. Absolute discretion</h3>
                <p className="font-inter text-slate">Privacy is our default architecture. Off-market mandates and secure digital environments ensure zero public exposure.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section>
          <div className="mb-12">
            <h2 className="font-fraunces text-4xl text-ivory mb-4">Leadership</h2>
            <p className="font-inter text-slate max-w-2xl">
              A curated team of infrastructure veterans, technologists, and advisory experts dedicated to your portfolio.
            </p>
          </div>

          {/* Changed to md:grid-cols-2 to perfectly fit your 2 stakeholders */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl">
            {teamMembers.map((member) => (
              <div key={member.id} className="group">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg mb-6 border border-line">
                  <div className="absolute inset-0 bg-ink/20 group-hover:bg-transparent z-10 transition-colors duration-300" />
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <h3 className="font-fraunces text-2xl text-ivory mb-1">{member.name}</h3>
                <p className="font-mono text-gold text-sm mb-4">{member.role}</p>
                <p className="font-inter text-slate text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}