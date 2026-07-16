import { Check, X, Minus } from "lucide-react";

type Support = "yes" | "no" | "partial";

interface ComparisonRow {
  feature: string;
  luxureNest: Support;
  competitors: Support[]; // NoBroker, MagicBricks, Housing.com, 99acres, Square Yards
}

const platforms = ["NoBroker", "MagicBricks", "Housing.com", "99acres", "Square Yards"];

const rows: ComparisonRow[] = [
  {
    feature: "Dedicated personal advisor",
    luxureNest: "yes",
    competitors: ["no", "no", "no", "no", "partial"],
  },
  {
    feature: "Legally verified listings only",
    luxureNest: "yes",
    competitors: ["partial", "partial", "partial", "partial", "yes"],
  },
  {
    feature: "In-house legal & paperwork support",
    luxureNest: "yes",
    competitors: ["no", "no", "no", "no", "partial"],
  },
  {
    feature: "Transparent commission structure",
    luxureNest: "yes",
    competitors: ["partial", "partial", "partial", "partial", "partial"],
  },
  {
    feature: "Curated, non-cluttered listings",
    luxureNest: "yes",
    competitors: ["no", "no", "no", "no", "partial"],
  },
];

function SupportIcon({ status }: { status: Support }) {
  if (status === "yes")
    return <Check className="w-4 h-4 text-gold mx-auto" strokeWidth={2} />;
  if (status === "no")
    return <X className="w-4 h-4 text-slate/50 mx-auto" strokeWidth={2} />;
  return <Minus className="w-4 h-4 text-slate mx-auto" strokeWidth={2} />;
}

export default function ComparisonTable() {
  return (
    <section className="bg-ink py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-gold text-xs tracking-[0.2em] uppercase mb-3">
            How We Compare
          </p>
          <h2 className="text-4xl font-display italic text-ivory">
            Advisory vs. listing platforms
          </h2>
          <p className="text-slate text-sm mt-4">
            A side-by-side look at how a full-service advisory differs from
            classifieds-style listing portals.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-line">
          <table className="w-full text-sm min-w-[720px]">
            <thead>
              <tr className="bg-panel border-b border-line">
                <th className="text-left text-ivory font-medium px-6 py-4">
                  Feature
                </th>
                <th className="px-4 py-4 text-gold font-medium">
                  Luxure Nest
                </th>
                {platforms.map((p) => (
                  <th
                    key={p}
                    className="px-4 py-4 text-slate font-normal whitespace-nowrap"
                  >
                    {p}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={row.feature}
                  className={i % 2 === 0 ? "bg-transparent" : "bg-panel/40"}
                >
                  <td className="text-ivory/90 px-6 py-4">{row.feature}</td>
                  <td className="px-4 py-4 bg-gold/5">
                    <SupportIcon status={row.luxureNest} />
                  </td>
                  {row.competitors.map((status, idx) => (
                    <td key={idx} className="px-4 py-4">
                      <SupportIcon status={status} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-slate/60 text-xs text-center mt-6">
          Comparison based on publicly available platform information as of
          2026. Individual experiences may vary by listing and location.
        </p>
      </div>
    </section>
  );
}