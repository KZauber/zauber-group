import { Check } from "lucide-react";

const HEYGEN_VIDEO_URL = "https://app.heygen.com/embeds/94791e1bb5a54bab99fd901fc83b86d6";

const points = [
  "How your social media runs itself, every single day",
  "Why local businesses get missed online — and how to fix it fast",
  "The pipeline system that follows up with every lead automatically",
];

export default function SarahVideoSection() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32 bg-[#F8F6F1] dark:bg-[#0A1628]">
      <div className="zg-backdrop opacity-80 dark:opacity-100" aria-hidden="true">
        <div className="zg-glow zg-glow-gold zg-drift1 w-[560px] h-[560px] -left-40 -top-16" />
        <div className="zg-glow zg-glow-blue zg-drift2 w-[680px] h-[680px] -right-52 -bottom-40" />
        <div className="zg-grid" />
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left: Video in premium gold frame */}
          <div className="relative rounded-2xl overflow-hidden border border-[#C9A84C]/40 shadow-2xl bg-[#0A1628]">
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <iframe
                src={HEYGEN_VIDEO_URL}
                title="Sarah Young introduces LocalEdge"
                className="absolute inset-0 w-full h-full"
                allow="autoplay; fullscreen"
                frameBorder="0"
              />
              <div
                className="absolute bottom-0 left-0 right-0 h-10 z-10 bg-transparent"
                style={{ pointerEvents: "none" }}
              />
            </div>
          </div>

          {/* Right: Copy */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="gold-line" />
              <span className="text-[#C9A84C] text-sm font-medium tracking-[0.2em] uppercase">
                Meet Sarah Young
              </span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-[#0A1628] dark:text-white leading-[1.15] mb-6">
              Let Sarah Show You
              <br />
              <span className="text-[#C9A84C]">How It Works</span>
            </h2>

            <p className="text-[#555] dark:text-white/60 text-lg leading-relaxed mb-8 max-w-lg">
              In just two minutes, Sarah walks you through exactly what
              LocalEdge™ does and why local service businesses across the
              country are using it to fill their pipelines — without cold
              calls, without chasing referrals, and without touching their
              marketing themselves.
            </p>

            <div className="space-y-4 mb-10">
              {points.map((point) => (
                <div key={point} className="flex items-start gap-3.5">
                  <span className="flex-none mt-0.5 w-6 h-6 rounded-full border border-[#C9A84C]/45 bg-[#C9A84C]/12 flex items-center justify-center">
                    <Check className="w-3.5 h-3.5 text-[#C9A84C]" />
                  </span>
                  <p className="text-[#3b4654] dark:text-white/75 leading-relaxed">{point}</p>
                </div>
              ))}
            </div>

            <button
              onClick={() => {
                const el = document.querySelector("#contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-10 py-4 rounded-md bg-[#C9A84C] text-[#0A1628] text-sm font-semibold tracking-[0.1em] uppercase hover:bg-[#d4b65e] transition-all duration-300 hover:shadow-xl"
            >
              Get LocalEdge™
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
