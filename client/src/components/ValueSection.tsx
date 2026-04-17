import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Radio, Globe, Phone } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: Radio,
    title: "Social Media Autopilot",
    desc: "Two posts every day across five platforms — Facebook, Instagram, LinkedIn, YouTube Shorts, and TikTok. AI-generated, scheduled, and published automatically. Your brand stays visible while you're on the job site.",
    stat: "70+",
    statLabel: "Posts scheduled per week across all platforms",
  },
  {
    num: "02",
    icon: Globe,
    title: "Website + SEO + GEO",
    desc: "A high-converting site that shows up on Google AND on AI tools like ChatGPT, Gemini, and Perplexity. GEO — Generative Engine Optimization — is where your next client is searching. Most of your competitors have never heard of it.",
    stat: "AI+SEO",
    statLabel: "Found on Google and every major AI search engine",
  },
  {
    num: "03",
    icon: Phone,
    title: "Digital Pipeline",
    desc: "AI chat answers your website visitors 24/7. AI handles your incoming calls. Every lead is captured, followed up, and tracked in your CRM automatically. No lead falls through the cracks — ever.",
    stat: "24/7",
    statLabel: "AI answering calls and chats — never miss a lead",
  },
];

export default function ValueSection() {
  const { ref: sectionRef, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="builderflow" className="py-24 sm:py-32 bg-white">
      <div className="container">
        <div
          ref={sectionRef}
          className={`fade-up ${isVisible ? "visible" : ""}`}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="gold-line" />
            <span className="text-[#C9A84C] text-sm font-medium tracking-[0.2em] uppercase">
              BuilderFlow™
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
            <div>
              <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-[#0A1628] leading-[1.15]">
                Three Systems.
                <br />
                <span className="text-[#C9A84C]">One Complete Solution.</span>
              </h2>
            </div>
            <div className="flex items-end">
              <p className="text-[#555] text-lg leading-relaxed max-w-lg">
                BuilderFlow™ is the complete digital system for builders who are
                serious about growth. We handle your marketing end-to-end — so
                your phone rings with the right clients, automatically.
              </p>
            </div>
          </div>

          <div className="space-y-0">
            {steps.map((step, i) => (
              <div
                key={step.num}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center py-12 ${
                  i < steps.length - 1 ? "border-b border-[#C9A84C]/10" : ""
                }`}
              >
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 border border-[#C9A84C]/30 flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-[#C9A84C]" />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-serif text-2xl font-semibold text-[#C9A84C]/30">
                        {step.num}
                      </span>
                      <h3 className="text-xl font-semibold text-[#0A1628]">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-[#555] leading-relaxed text-lg">
                      {step.desc}
                    </p>
                  </div>
                </div>
                <div className="lg:pl-10">
                  <div className="border border-[#C9A84C]/20 p-8 bg-[#F8F6F1]">
                    <p className="font-serif text-5xl font-semibold text-[#0A1628] mb-2">
                      {step.stat}
                    </p>
                    <p className="text-[#555] text-sm tracking-wide uppercase">
                      {step.statLabel}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
