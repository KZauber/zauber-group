import { MapPin, Share2, PhoneCall, Check } from "lucide-react";

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
    feature: true,
  },
];

export default function ValueSection() {
  return (
    <section id="localedge" className="relative py-24 sm:py-32">
      <div className="container relative z-10">
        {/* eyebrow */}
        <div className="flex items-center gap-4 mb-6">
          <div className="gold-line" />
          <span className="text-[#C9A84C] text-sm font-medium tracking-[0.2em] uppercase">
            LocalEdge™
          </span>
        </div>

        {/* header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-[#0A1628] dark:text-white leading-[1.15]">
            Three Programs.
            <br />
            <span className="text-[#C9A84C]">Stack What You Need.</span>
          </h2>
          <div className="flex items-end">
            <p className="text-[#555] dark:text-white/60 text-lg leading-relaxed max-w-lg">
              LocalEdge™ is done-for-you local visibility for service
              businesses. Start with one program at $500/mo, add the next when
              you're ready — month to month, no contract. We run it end to end
              so your phone rings with the right customers, automatically.
            </p>
          </div>
        </div>

        {/* program cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div
              key={step.num}
              className={`zg-card zg-surface flex flex-col rounded-2xl p-8 transition-transform duration-300 hover:-translate-y-1.5 ${
                step.feature ? "ring-1 ring-[#C9A84C]/55" : ""
              }`}
            >
              {/* gold top accent */}
              <span
                className={`absolute top-0 left-0 right-0 h-[3px] ${
                  step.feature
                    ? "bg-gradient-to-r from-[#9a7b2e] via-[#C9A84C] to-[#e7cf86]"
                    : "bg-gradient-to-r from-transparent via-[#C9A84C]/60 to-transparent"
                }`}
              />

              {/* badge row */}
              <div className="flex items-center justify-between mb-6">
                <span className="font-serif text-lg text-[#C9A84C] w-11 h-11 rounded-full border border-[#C9A84C]/40 flex items-center justify-center">
                  {step.num}
                </span>
                {step.feature ? (
                  <span className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.16em] uppercase text-[#0A1628] bg-[#C9A84C] px-3 py-1.5 rounded-full">
                    <span className="zg-livedot w-1.5 h-1.5 rounded-full bg-[#0A1628]" />
                    Lead Engine
                  </span>
                ) : (
                  <step.icon className="w-7 h-7 text-[#C9A84C]" />
                )}
              </div>

              <h3 className="font-serif text-2xl font-semibold text-[#0A1628] dark:text-white mb-3">
                {step.title}
              </h3>
              <p className="text-[#555] dark:text-white/60 text-[15px] leading-relaxed mb-7">
                {step.desc}
              </p>

              {/* price */}
              <div className="mt-auto pt-6 border-t border-[#C9A84C]/15 dark:border-white/10">
                <p className="font-serif text-4xl font-semibold text-[#0A1628] dark:text-white leading-none">
                  {step.stat}
                  <span className="text-base font-sans text-[#888] dark:text-white/50 ml-1">
                    /mo
                  </span>
                </p>
                <p className="text-[#888] dark:text-white/50 text-xs tracking-wide uppercase mt-2">
                  {step.statLabel}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* stack summary bar */}
        <div className="mt-7 rounded-2xl bg-[#0A1628] dark:bg-[#13243d] border border-[#C9A84C]/25 shadow-xl px-8 sm:px-11 py-8 grid grid-cols-1 lg:grid-cols-[1.3fr_auto_auto] gap-8 items-center">
          <div>
            <p className="font-serif text-2xl text-white mb-1.5">Build your stack.</p>
            <p className="text-white/55 text-[15px]">
              Every program is $500/mo. Add the next when you're ready — stack all
              three for the full engine.
            </p>
          </div>
          <div className="flex items-center gap-3.5 justify-center">
            <div className="text-center">
              <div className="font-serif text-2xl text-[#C9A84C]">$500</div>
              <div className="text-[11px] tracking-[0.1em] uppercase text-white/45 mt-1">1 Program</div>
            </div>
            <span className="text-[#C9A84C] text-lg">→</span>
            <div className="text-center">
              <div className="font-serif text-2xl text-[#C9A84C]">$1,000</div>
              <div className="text-[11px] tracking-[0.1em] uppercase text-white/45 mt-1">2 Programs</div>
            </div>
            <span className="text-[#C9A84C] text-lg">→</span>
            <div className="text-center">
              <div className="font-serif text-2xl text-[#C9A84C]">$1,500</div>
              <div className="text-[11px] tracking-[0.1em] uppercase text-white/45 mt-1">All 3 · Full Engine</div>
            </div>
          </div>
          <button
            onClick={() => {
              const el = document.querySelector("#contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-[#C9A84C] text-[#0A1628] font-semibold tracking-[0.12em] uppercase text-sm px-8 py-4 rounded-md hover:bg-[#d4b65e] transition-colors whitespace-nowrap"
          >
            Get Started
          </button>
          <p className="lg:col-span-3 text-white/40 text-[13px] flex items-center gap-1.5">
            <Check className="w-3.5 h-3.5 text-[#C9A84C]" />
            Month to month · No contract · Cancel or add programs anytime
          </p>
        </div>
      </div>
    </section>
  );
}
