import { useTheme } from "@/contexts/ThemeContext";

const HERO_NIGHT = "/zauber-hero.jpeg.jpg";
const HERO_DAY = "/zauber-hero-day.jpg";

export default function HeroCarousel() {
  const { theme } = useTheme();
  const heroSrc = theme === "dark" ? HERO_NIGHT : HERO_DAY;

  const scrollToContact = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToLocalEdge = () => {
    const el = document.querySelector("#localedge");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Background image + scrims — masked at the bottom so the continuous
          page background shows through (no seam into the next section). */}
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,black_72%,transparent)] [-webkit-mask-image:linear-gradient(to_bottom,black_72%,transparent)]">
        <img
          src={heroSrc}
          alt="Custom home construction site"
          className="w-full h-full object-cover"
          onError={(e) => {
            if (e.currentTarget.src.indexOf(HERO_DAY) !== -1) {
              e.currentTarget.src = HERO_NIGHT;
            }
          }}
        />
        {/* left scrim — strongest behind the text, clears quickly so the photo stays crisp */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#F4F1EA]/85 via-[#F4F1EA]/15 to-transparent dark:from-[#0A1628]/92 dark:via-[#0A1628]/55 dark:to-transparent" />
        {/* light readability wash at the lower-left only (behind sub-text + buttons) */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#F4F1EA]/45 via-transparent to-transparent dark:from-[#0A1628]/40 lg:w-2/3" />
        {/* top scrim — minimal, just for the navbar */}
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#F4F1EA]/35 to-transparent dark:from-[#0A1628]/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container">
          <div className="flex items-center py-32">

            <div className="max-w-2xl">
              {/* Eyebrow */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-[1px] bg-[#C9A84C]" />
                <span className="text-[#A97E26] dark:text-[#C9A84C] text-sm font-medium tracking-[0.25em] uppercase [text-shadow:0_1px_3px_rgba(10,22,40,0.35)]">
                  The Zauber Group
                </span>
              </div>

              {/* Headline */}
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-semibold text-[#0A1628] dark:text-white leading-[1.05] mb-6 [text-shadow:0_2px_12px_rgba(244,241,234,0.35)] dark:[text-shadow:0_2px_14px_rgba(10,22,40,0.45)]">
                Stop Chasing Jobs.
                <br />
                <span className="text-[#AD8128] dark:text-[#C9A84C] [text-shadow:0_2px_10px_rgba(10,22,40,0.30)]">Start Choosing Them.</span>
              </h1>

              {/* Sub-headline */}
              <p className="text-[#0A1628]/75 dark:text-white/80 text-lg sm:text-xl leading-relaxed mb-4 max-w-xl">
                LocalEdge™ gets your business found on Google, seen on social,
                and booked automatically — so you can focus on the work, not
                the marketing.
              </p>

              <p className="text-[#A97E26] dark:text-[#C9A84C] text-sm font-medium tracking-[0.1em] uppercase mb-10 [text-shadow:0_1px_3px_rgba(10,22,40,0.35)]">
                Done-for-you local visibility for service businesses — from $500/mo
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={scrollToLocalEdge}
                  className="px-10 py-4 bg-[#C9A84C] text-[#0A1628] text-sm font-semibold tracking-[0.1em] uppercase hover:bg-[#d4b65e] transition-all duration-300 hover:shadow-xl"
                >
                  See How It Works
                </button>
                <button
                  onClick={scrollToContact}
                  className="px-10 py-4 border border-[#0A1628]/30 text-[#0A1628] hover:border-[#0A1628] hover:bg-black/[0.04] dark:border-white/30 dark:text-white dark:hover:border-white dark:hover:bg-white/10 text-sm font-semibold tracking-[0.1em] uppercase transition-all duration-300"
                >
                  Get My Free Report
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}
