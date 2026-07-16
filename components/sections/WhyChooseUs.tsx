import { ShieldCheck, Users, FileCheck2, Compass } from "lucide-react";

const values = [
  {
    icon: Compass,
    title: "Advisory, Not Just Listings",
    description:
      "Every recommendation is guided by a dedicated advisor who understands your budget, timeline, and long-term goals — not an algorithm sorting listings.",
  },
  {
    icon: ShieldCheck,
    title: "Verified, Vetted Properties",
    description:
      "Every property on Luxure Nest is personally inspected and legally verified before it's listed — no fake listings, no wasted site visits.",
  },
  {
    icon: FileCheck2,
    title: "End-to-End Legal Support",
    description:
      "From title verification to registration paperwork, our in-house legal team handles the process so you never sign anything unclear.",
  },
  {
    icon: Users,
    title: "One Point of Contact",
    description:
      "A single relationship manager stays with you from first search to final possession — no call centers, no being passed between departments.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-panel py-24 border-y border-line">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-gold text-xs tracking-[0.2em] uppercase mb-3">
            Why Luxure Nest
          </p>
          <h2 className="text-4xl font-display italic text-ivory">
            Advisory built on trust, not traffic
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value) => (
            <div key={value.title} className="text-center md:text-left">
              <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center mb-5 mx-auto md:mx-0">
                <value.icon className="w-6 h-6 text-gold" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-display text-ivory mb-2">
                {value.title}
              </h3>
              <p className="text-slate text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}