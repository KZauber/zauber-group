const KELLY_HEADSHOT = "/kelly-headshot.jpeg.jpg";

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="container relative z-10">
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
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-[#C9A84C]/40 rounded-md" />
              <div className="relative overflow-hidden rounded-md bg-[#0A1628] dark:ring-1 dark:ring-[#C9A84C]/50 dark:shadow-2xl">
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
            <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-[#0A1628] dark:text-white leading-[1.15] mb-3">
              The Local Business Advocate
            </h2>
            <p className="text-[#C9A84C] text-sm font-medium tracking-[0.15em] uppercase mb-8">
              Founder &amp; Principal — Zauber Group
            </p>

            <div className="space-y-5 text-[#2C2C2C] dark:text-white/70 text-base sm:text-lg leading-relaxed">
              <p>
                For over 20 years, the founder of Zauber Group has worked
                side-by-side with local business owners across the country —
                builders, contractors, and service pros of every kind. That
                work revealed one consistent truth:{" "}
                <strong className="text-[#0A1628] dark:text-white">
                  the best operators rarely have the best marketing.
                </strong>
              </p>
              <p>
                They're busy doing exceptional work. They don't have time to
                post on social media, optimize their Google profile, or follow
                up with every lead that comes in. The work that should be
                building their reputation and filling their pipeline simply
                doesn't get done.
              </p>
              <p>
                LocalEdge™ was built to solve that problem completely. A
                done-for-you system that handles Google visibility, reviews,
                social, websites, and lead follow-up — so owners can focus on
                what they do best and trust that their marketing is working in
                the background, every single day.
              </p>
              <p>
                Zauber Group works with local service businesses nationwide.
                If you do great work, we'll make sure the right people find
                you.
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-[#C9A84C]/20 dark:border-white/12 grid grid-cols-3 gap-8">
              <div>
                <span className="font-serif text-4xl sm:text-5xl font-semibold text-[#0A1628] dark:text-white">
                  20<span className="text-[#C9A84C]">+</span>
                </span>
                <p className="text-sm text-[#666] dark:text-white/50 mt-1 tracking-wide uppercase">
                  Years in the Industry
                </p>
              </div>
              <div>
                <span className="font-serif text-4xl sm:text-5xl font-semibold text-[#0A1628] dark:text-white">
                  US
                </span>
                <p className="text-sm text-[#666] dark:text-white/50 mt-1 tracking-wide uppercase">
                  Nationwide
                </p>
              </div>
              <div>
                <span className="font-serif text-4xl sm:text-5xl font-semibold text-[#0A1628] dark:text-white">
                  LE<span className="text-[#C9A84C]">™</span>
                </span>
                <p className="text-sm text-[#666] dark:text-white/50 mt-1 tracking-wide uppercase">
                  LocalEdge
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
