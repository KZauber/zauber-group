const HERO_IMAGE = "/zauber-hero.jpeg.jpg";

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
          <div className="flex items-center py-32">

            {/* Copy */}
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
