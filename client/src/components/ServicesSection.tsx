import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { CheckCircle, Users, TrendingUp, Zap } from "lucide-react";

const benefits = [
  {
    icon: Users,
    title: "Built for Builders, Not Generic Businesses",
    desc: "Every piece of content, every system, every strategy is built specifically for residential and commercial construction companies. We speak your clients' language because we know your industry.",
  },
  {
    icon: Zap,
    title: "Fully Done for You",
    desc: "You don't touch anything. No logging into platforms, no writing posts, no chasing leads. BuilderFlow runs in the background while you run your business.",
  },
  {
    icon: TrendingUp,
    title: "Show Up Where Clients Are Looking",
    desc: "Your clients search on Google, ask ChatGPT, scroll Instagram, and browse LinkedIn. BuilderFlow puts you in front of them on every platform — consistently, professionally, automatically.",
  },
  {
    icon: CheckCircle,
    title: "Stop the Feast-or-Famine Cycle",
    desc: "Word-of-mouth is unpredictable. BuilderFlow creates a steady, reliable stream of inbound leads so you can plan your pipeline with confidence and stop taking every job that calls.",
  },
];

export default function ServicesSection() {
  const { ref: sectionRef, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="services" className="py-24 sm:py-32 bg-[#0A1628]">
      <div className="container">
        <div
          ref={sectionRef}
          className={`fade-up ${isVisible ? "visible" : ""}`}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="gold-line" />
            <span className="text-[#C9A84C] text-sm font-medium tracking-[0.2em] uppercase">
              Why It Works
            </span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-white leading-[1.15] mb-6 max-w-2xl">
            Marketing That Works
            <br />
            <span className="text-[#C9A84C]">While You Build</span>
          </h2>
          <p className="text-white/60 text-lg leading-relaxed max-w-xl mb-16">
            Most builders are great at their craft and terrible at marketing.
            BuilderFlow fixes that — permanently.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-20">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="group">
                <div className="w-12 h-12 border border-[#C9A84C]/30 flex items-center justify-center mb-4 group-hover:border-[#C9A84C]/60 transition-colors">
                  <benefit.icon className="w-5 h-5 text-[#C9A84C]" />
                </div>
                <h3 className="text-white font-semibold text-base mb-2">
                  {benefit.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-12 border-t border-white/10">
            <p className="text-white/30 text-sm tracking-wide uppercase mb-6">
              We work with
            </p>
            <div className="flex flex-wrap gap-4">
              {[
                "Custom Home Builders",
                "Commercial Contractors",
                "Luxury Renovators",
                "Business Park Developers",
                "Restaurant & Hospitality Builders",
                "Mixed-Use Developers",
                "Light Industrial",
                "Tenant Improvement Contractors",
              ].map((type) => (
                <span
                  key={type}
                  className="px-5 py-2.5 border border-white/10 text-white/50 text-sm tracking-wide hover:border-[#C9A84C]/30 hover:text-white/70 transition-all duration-300"
                >
                  {type}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
