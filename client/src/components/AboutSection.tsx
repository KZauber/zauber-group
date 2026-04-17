import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const KELLY_HEADSHOT =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663392461276/eAdsFDAMhTrW5pTcaBjTvJ/kelly_headshot_processed_56beb26c.png";

export default function AboutSection() {
  const { ref: sectionRef, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="about" className="py-24 sm:py-32 bg-[#F8F6F1]">
      <div className="container">
        <div
          ref={sectionRef}
          className={`fade-up ${isVisible ? "visible" : ""}`}
        >
          <div className="flex items-center gap-4 mb-16">
            <div className="gold-line" />
            <span className="text-[#C9A84C] text-sm font-medium tracking-[0.2em] uppercase">
              About
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20 items-start">
            {/* Left: Portrait */}
            <div className="lg:col-span-2 flex justify-center lg:justify-start">
              <div className="relative">
                <div className="absolute -bottom-4 -right-4 w-full h-full border border-[#C9A84C]/40" />
                <div className="relative overflow-hidden bg-[#0A1628]">
                  <img
                    src={KELLY_HEADSHOT}
                    alt="Kelly — Founder of Zauber Group"
                    className="w-full max-w-[380px] h-auto object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* Right: Bio */}
            <div className="lg:col-span-3">
              <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-[#0A1628] leading-[1.15] mb-3">
                The Builder's Advocate
              </h2>
              <p className="text-[#C9A84C] text-sm font-medium tracking-[0.15em] uppercase mb-8">
                Founder &amp; Principal — Zauber Group
              </p>

              <div className="space-y-5 text-[#2C2C2C] text-base sm:text-lg leading-relaxed">
                <p>
                  For over 20 years, the founder of Zauber Group has worked
                  side-by-side with builders across the country — custom home
                  builders, commercial contractors, and everyone in between.
                  That work revealed one consistent truth:{" "}
                  <strong className="text-[#0A1628]">
                    the best builders rarely have the best marketing.
                  </strong>
                </p>
                <p>
                  They're busy building exceptional things. They don't have time
                  to post on social media, optimize their website for AI search,
                  or follow up with every lead that comes in. The work that
                  should be building their reputation and filling their pipeline
                  simply doesn't get done.
                </p>
                <p>
                  BuilderFlow™ was built to solve that problem completely. A
                  done-for-you digital system that handles social media,
                  websites, SEO, GEO, AI chat, and lead pipeline — so builders
                  can focus on what they do best and trust that their marketing
                  is working in the background, every single day.
                </p>
                <p>
                  Zauber Group works with residential and commercial builders
                  nationwide. If you build it, we'll make sure the right people
                  find you.
                </p>
              </div>

              <div className="mt-12 pt-8 border-t border-[#C9A84C]/20 grid grid-cols-3 gap-8">
                <div>
                  <span className="font-serif text-4xl sm:text-5xl font-semibold text-[#0A1628]">
                    20<span className="text-[#C9A84C]">+</span>
                  </span>
                  <p className="text-sm text-[#666] mt-1 tracking-wide uppercase">
                    Years in the Industry
                  </p>
                </div>
                <div>
                  <span className="font-serif text-4xl sm:text-5xl font-semibold text-[#0A1628]">
                    US
                  </span>
                  <p className="text-sm text-[#666] mt-1 tracking-wide uppercase">
                    Nationwide
                  </p>
                </div>
                <div>
                  <span className="font-serif text-4xl sm:text-5xl font-semibold text-[#0A1628]">
                    BF<span className="text-[#C9A84C]">™</span>
                  </span>
                  <p className="text-sm text-[#666] mt-1 tracking-wide uppercase">
                    BuilderFlow
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
