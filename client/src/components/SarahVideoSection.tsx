import { Play } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

// TODO: Replace HEYGEN_VIDEO_URL with the actual HeyGen embed URL once generated
// Example: "https://app.heygen.com/embeds/YOUR_VIDEO_ID"
const HEYGEN_VIDEO_URL = "https://app.heygen.com/embeds/94791e1bb5a54bab99fd901fc83b86d6";

export default function SarahVideoSection() {
  const { ref: sectionRef, isVisible } = useScrollAnimation(0.1);

  return (
    <section className="py-24 sm:py-32 bg-[#0A1628]">
      <div className="container">
        <div
          ref={sectionRef}
          className={`fade-up ${isVisible ? "visible" : ""}`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            {/* Left: Video */}
            <div className="relative">
              {HEYGEN_VIDEO_URL ? (
                /* Live HeyGen embed — swap in once video is created */
                <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                  <iframe
                    src={HEYGEN_VIDEO_URL}
                    title="Sarah Young introduces BuilderFlow"
                    className="absolute inset-0 w-full h-full"
                    allow="autoplay; fullscreen"
                    frameBorder="0"
                  />
                </div>
              ) : (
                /* Placeholder: shows Sarah's photo with play button until video is ready */
                <div className="relative group cursor-pointer">
                  <div className="absolute -bottom-4 -left-4 w-full h-full border border-[#C9A84C]/20" />
                  <div className="relative overflow-hidden">
                    <img
                      src="/sarah-young.png"
                      alt="Sarah Young — Watch the BuilderFlow intro"
                      className="w-full h-auto object-cover"
                    />
                    <div className="absolute inset-0 bg-[#0A1628]/50 group-hover:bg-[#0A1628]/30 transition-colors duration-300" />
                    {/* Play button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full border-2 border-[#C9A84C] flex items-center justify-center bg-[#0A1628]/60 group-hover:bg-[#C9A84C]/20 transition-all duration-300">
                        <Play className="w-8 h-8 text-[#C9A84C] ml-1" fill="currentColor" />
                      </div>
                    </div>
                    {/* Coming soon badge */}
                    <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 border border-[#C9A84C]/40 bg-[#0A1628]/70 backdrop-blur-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] animate-pulse" />
                      <span className="text-[#C9A84C] text-xs tracking-[0.15em] uppercase font-medium">Video Coming Soon</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Right: Copy */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="gold-line" />
                <span className="text-[#C9A84C] text-sm font-medium tracking-[0.2em] uppercase">
                  Meet Sarah Young
                </span>
              </div>

              <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-white leading-[1.15] mb-6">
                Let Sarah Show You
                <br />
                <span className="text-[#C9A84C]">How It Works</span>
              </h2>

              <p className="text-white/60 text-lg leading-relaxed mb-8 max-w-lg">
                In just two minutes, Sarah walks you through exactly what
                BuilderFlow™ does and why builders across the country are using
                it to fill their pipelines — without cold calls, without chasing
                referrals, and without touching their marketing themselves.
              </p>

              <div className="space-y-4 mb-10">
                {[
                  "How your social media runs itself, every single day",
                  "Why builders are invisible online — and how to fix it fast",
                  "The pipeline system that follows up with every lead automatically",
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#C9A84C] flex-shrink-0" />
                    <p className="text-white/70 leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>

              <button
                onClick={() => {
                  const el = document.querySelector("#contact");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-10 py-4 bg-[#C9A84C] text-[#0A1628] text-sm font-semibold tracking-[0.1em] uppercase hover:bg-[#d4b65e] transition-all duration-300 hover:shadow-xl"
              >
                Get BuilderFlow™
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
