const HERO_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663392461276/eAdsFDAMhTrW5pTcaBjTvJ/builderflow-hero-8cJmESpvvbAq4FHXUpHL3q.webp";

export default function HeroCarousel() {
  const scrollToContact = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToBuilderFlow = () => {
    const el = document.querySelector("#builderflow");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt="Custom home construction site"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/92 via-[#0A1628]/70 to-[#0A1628]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/80 via-transparent to-[#0A1628]/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center py-32">

            {/* Left: Copy */}
            <div className="max-w-2xl">
              {/* Eyebrow */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-[1px] bg-[#C9A84C]" />
                <span className="text-[#C9A84C] text-sm font-medium tracking-[0.25em] uppercase">
                  The Zauber Group
                </span>
              </div>

              {/* Headline */}
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-semibold text-white leading-[1.05] mb-6">
                Stop Chasing Jobs.
                <br />
                <span className="text-[#C9A84C]">Start Choosing Them.</span>
              </h1>

              {/* Sub-headline */}
              <p className="text-white/80 text-lg sm:text-xl leading-relaxed mb-4 max-w-xl">
                BuilderFlow™ puts your social media, website, SEO, and lead
                pipeline on complete autopilot — so you can focus on building,
                not marketing.
              </p>

              <p className="text-[#C9A84C] text-sm font-medium tracking-[0.1em] uppercase mb-10">
                Built exclusively for residential &amp; commercial builders
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={scrollToBuilderFlow}
                  className="px-10 py-4 bg-[#C9A84C] text-[#0A1628] text-sm font-semibold tracking-[0.1em] uppercase hover:bg-[#d4b65e] transition-all duration-300 hover:shadow-xl"
                >
                  See How It Works
                </button>
                <button
                  onClick={scrollToContact}
                  className="px-10 py-4 border border-white/30 text-white text-sm font-semibold tracking-[0.1em] uppercase hover:border-white hover:bg-white/10 transition-all duration-300"
                >
                  Get Started
                </button>
              </div>
            </div>

            {/* Right: Sarah Young */}
            <div className="hidden lg:flex justify-end items-end">
              <div className="relative">
                {/* Gold accent frame */}
                <div className="absolute -bottom-4 -right-4 w-full h-full border border-[#C9A84C]/40" />
                <div className="relative overflow-hidden">
                  <img
                    src="/sarah-young.png"
                    alt="Sarah Young — BuilderFlow Specialist"
                    className="w-full max-w-[380px] h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/30 to-transparent" />
                </div>
                {/* Name badge */}
                <div className="absolute bottom-8 left-0 right-0 px-6">
                  <div className="bg-[#0A1628]/80 backdrop-blur-sm border border-[#C9A84C]/30 px-5 py-3">
                    <p className="text-white font-semibold text-sm tracking-wide">Sarah Young</p>
                    <p className="text-[#C9A84C] text-xs tracking-[0.15em] uppercase mt-0.5">BuilderFlow Specialist</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 z-10 flex flex-col items-center gap-3">
        <span className="text-white/40 text-[10px] tracking-[0.3em] uppercase writing-vertical">
          Scroll
        </span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#C9A84C] to-transparent" />
      </div>

      <style>{`
        .writing-vertical {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
      `}</style>
    </section>
  );
}
