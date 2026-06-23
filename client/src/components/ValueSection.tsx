import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { MapPin, Share2, PhoneCall } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: MapPin,
    title: "Get Found",
    desc: "Google Maps, local SEO, and reviews — the map-pack trio. We optimize your Google Business Profile, publish weekly posts, and run an automated review engine that asks every happy customer for a review and drafts your replies. You climb the map and win the click.",
    stat: "$500",
    statLabel: "Per month · the anchor program",
  },
  {
    num: "02",
    icon: Share2,
    title: "Get Seen",
    desc: "A consistent, on-brand social presence without lifting a finger. Around a dozen posts a month — created, scheduled, and published to Facebook, Instagram, and Google for you. Built from the same content engine, so nothing slips and nothing feels generic.",
    stat: "$500",
    statLabel: "Per month · social, done for you",
  },
  {
    num: "03",
    icon: PhoneCall,
    title: "Get Booked",
    desc: "The lead engine. Instant speed-to-lead response within seconds, missed-call text-back, a simple CRM, and automated follow-up — so every inquiry is caught, answered, and worked. No lead ever slips through the cracks.",
    stat: "$500",
    statLabel: "Per month · never miss a lead",
  },
];

export default function ValueSection() {
  const { ref: sectionRef, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="localedge" className="py-24 sm:py-32 bg-white">
      <div className="container">
        <div
          ref={sectionRef}
          className={`fade-up ${isVisible ? "visible" : ""}`}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="gold-line" />
            <span className="text-[#C9A84C] text-sm font-medium tracking-[0.2em] uppercase">
              LocalEdge™
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
            <div>
              <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-[#0A1628] leading-[1.15]">
                Three Programs.
                <br />
                <span className="text-[#C9A84C]">Stack What You Need.</span>
              </h2>
            </div>
            <div className="flex items-end">
              <p className="text-[#555] text-lg leading-relaxed max-w-lg">
                LocalEdge™ is done-for-you local visibility for service
                businesses. Start with one program at $500/mo, add the next when
                you're ready — month to month, no contract. We run it end to end
                so your phone rings with the right customers, automatically.
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
