import { CheckCircle, Users, TrendingUp, Zap } from "lucide-react";

const benefits = [
  {
    icon: Users,
    title: "Built for Local Service Businesses",
    desc: "Every system and strategy is built for businesses that win or lose by how they show up locally — from roofers and HVAC to med spas and law firms. We speak your customers' language because local search is what we do.",
  },
  {
    icon: Zap,
    title: "Fully Done for You",
    desc: "You don't touch anything. No logging into platforms, no writing posts, no chasing reviews. LocalEdge runs in the background while you run your business.",
  },
  {
    icon: TrendingUp,
    title: "Show Up Where Customers Are Looking",
    desc: "Your customers search Google Maps, ask ChatGPT, and scroll Instagram before they ever call. LocalEdge puts you in front of them on every platform — consistently, professionally, automatically.",
  },
  {
    icon: CheckCircle,
    title: "Stop the Feast-or-Famine Cycle",
    desc: "Word-of-mouth is unpredictable. LocalEdge builds a steady, reliable stream of inbound leads so you can plan your pipeline with confidence and stop taking every job that calls.",
  },
];

const guarantees = [
  { v: "100%", l: "Done-for-you, hands-off" },
  { v: "24/7", l: "Speed-to-lead response" },
  { v: "0", l: "Contracts · month-to-month" },
  { v: "12+", l: "Posts published / month" },
];

const industries = [
  "Roofers",
  "HVAC & Plumbing",
  "Electricians",
  "Remodelers & Builders",
  "Landscapers",
  "Med Spas",
  "Law Firms",
  "Auto Shops",
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="container relative z-10">
        <div className="flex items-center gap-4 mb-6">
          <div className="gold-line" />
          <span className="text-[#C9A84C] text-sm font-medium tracking-[0.2em] uppercase">
            Why It Works
          </span>
        </div>

        {/* header — two columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 mb-14 items-end">
          <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-[#0A1628] dark:text-white leading-[1.15]">
            Marketing That Works
            <br />
            <span className="text-[#C9A84C]">While You Build</span>
          </h2>
          <p className="text-[#555] dark:text-white/60 text-lg leading-relaxed max-w-xl">
            Most local businesses are great at their work and too busy for
            marketing. LocalEdge handles it — so you never have to.
          </p>
        </div>

        {/* benefit cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-14">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="zg-surface flex items-start gap-5 rounded-2xl p-8 transition-transform duration-300 hover:-translate-y-1 hover:ring-1 hover:ring-[#C9A84C]/40"
            >
              <div className="flex-none w-14 h-14 rounded-full border border-[#C9A84C]/40 bg-[#C9A84C]/10 flex items-center justify-center">
                <b.icon className="w-6 h-6 text-[#C9A84C]" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-semibold text-[#0A1628] dark:text-white mb-2">
                  {b.title}
                </h3>
                <p className="text-[#555] dark:text-white/55 text-[15px] leading-relaxed">
                  {b.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* guarantees / features band */}
        <div className="grid grid-cols-2 lg:grid-cols-4 rounded-2xl bg-[#0A1628] dark:bg-[#13243d] border border-[#C9A84C]/25 shadow-xl py-9 mb-14">
          {guarantees.map((g, i) => (
            <div
              key={g.l}
              className={`text-center px-5 ${i > 0 ? "lg:border-l border-white/10" : ""}`}
            >
              <div className="font-serif text-4xl sm:text-[2.9rem] font-semibold text-[#C9A84C] leading-none">
                {g.v}
              </div>
              <div className="text-white/60 text-[13px] tracking-wide mt-3">{g.l}</div>
            </div>
          ))}
        </div>

        {/* we work with */}
        <div className="pt-10 border-t border-[#0A1628]/10 dark:border-white/10">
          <p className="text-[#888] dark:text-white/35 text-sm tracking-[0.2em] uppercase mb-6">
            We work with
          </p>
          <div className="flex flex-wrap gap-3.5">
            {industries.map((type) => (
              <span
                key={type}
                className="px-5 py-2.5 rounded-lg border border-[#0A1628]/12 dark:border-white/12 text-[#444] dark:text-white/65 text-sm tracking-wide hover:border-[#C9A84C]/50 hover:bg-[#C9A84C]/5 hover:text-[#0A1628] dark:hover:text-white transition-all duration-300"
              >
                {type}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
