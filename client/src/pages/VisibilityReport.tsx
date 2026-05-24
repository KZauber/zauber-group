import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Animated score counter
function AnimatedScore({ target, label, delay = 0 }: { target: number; label: string; delay?: number }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const timer = setTimeout(() => {
      let start = 0;
      const duration = 1200;
      const step = (timestamp: number) => {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setCount(Math.round(eased * target));
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }, delay);
    return () => clearTimeout(timer);
  }, [started, target, delay]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-5xl font-bold text-[--color-gold] font-serif">{count}</div>
      <div className="text-sm text-gray-400 mt-1 uppercase tracking-widest">{label}</div>
    </div>
  );
}

// Grade pill for report preview
function GradePill({ category, grade, color }: { category: string; grade: string; color: string }) {
  return (
    <div className="flex items-center justify-between bg-white/5 border border-white/10 rounded-xl px-4 py-3 backdrop-blur-sm">
      <span className="text-gray-300 text-sm">{category}</span>
      <span className={`font-bold text-lg font-serif ${color}`}>{grade}</span>
    </div>
  );
}

export default function VisibilityReport() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  // Countdown to June 30 price increase
  useEffect(() => {
    const deadline = new Date("2026-06-30T23:59:59");
    const tick = () => {
      const now = new Date();
      const diff = deadline.getTime() - now.getTime();
      if (diff <= 0) return;
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="min-h-screen text-white" style={{ backgroundColor: '#0d1526' }}>
      <Navbar />

      {/* ── HERO — full-bleed cinematic video ──────────────── */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center" style={{ backgroundColor: '#0d1526' }}>
        {/* Video background */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/analysis-hero-video.mp4"
          autoPlay
          muted
          loop
          playsInline
        />

        {/* Dark overlay — navy tint so text is readable */}
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(10, 15, 35, 0.78)' }} />

        {/* Gold vignette at bottom to blend into page */}
        <div className="absolute bottom-0 left-0 right-0 h-32" style={{ background: 'linear-gradient(to top, #0d1526, transparent)' }} />

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-32 text-center">
          <div className="inline-flex items-center gap-2 bg-[--color-gold]/10 border border-[--color-gold]/30 rounded-full px-4 py-1.5 mb-8">
            <span className="w-2 h-2 rounded-full bg-[--color-gold] animate-pulse" />
            <span className="text-[--color-gold] text-sm font-medium tracking-wide">Founding Member Price — $97</span>
          </div>

          <h1 className="font-serif text-5xl lg:text-7xl font-bold leading-tight mb-6">
            Find Out Exactly Where Your Business Is{" "}
            <span className="text-[--color-gold]">Invisible Online</span>
          </h1>

          <p className="text-gray-300 text-xl lg:text-2xl leading-relaxed mb-10 max-w-2xl mx-auto">
            The Visibility Report by Zauber Group scores your business across 7 categories —
            Google, AI search, reviews, website, social, ads, and lead capture —
            then shows you exactly what to fix first.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="#get-report"
              className="bg-[--color-gold] text-[--color-navy] font-bold text-xl px-10 py-5 rounded-xl hover:brightness-110 transition-all text-center shadow-2xl shadow-[--color-gold]/30"
            >
              Get My Visibility Report →
            </a>
            <a
              href="#what-you-get"
              className="border border-white/30 text-white px-10 py-5 rounded-xl hover:bg-white/10 transition-all text-center backdrop-blur-sm"
            >
              See What's Inside
            </a>
          </div>

          <p className="text-gray-500 text-sm">
            Price goes to $297 on July 1st · No fluff · Delivered within 48 hours
          </p>
        </div>
      </section>

      {/* ── COUNTDOWN ──────────────────────────────────────── */}
      <section className="bg-[--color-gold]/10 border-y border-[--color-gold]/20 py-6 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[--color-gold] text-sm uppercase tracking-widest mb-4 font-medium">
            Founding Member Price Ends In
          </p>
          <div className="flex justify-center gap-6">
            {[
              { val: timeLeft.days, label: "Days" },
              { val: timeLeft.hours, label: "Hours" },
              { val: timeLeft.minutes, label: "Min" },
              { val: timeLeft.seconds, label: "Sec" },
            ].map(({ val, label }) => (
              <div key={label} className="text-center min-w-[60px]">
                <div className="text-3xl font-bold text-white font-serif tabular-nums">
                  {String(val).padStart(2, "0")}
                </div>
                <div className="text-xs text-gray-500 uppercase tracking-widest">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOCIAL PROOF NUMBERS ───────────────────────────── */}
      <section className="py-16 px-4 border-b border-white/5">
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-8">
          <AnimatedScore target={9} label="Reports Delivered" delay={0} />
          <AnimatedScore target={7} label="Categories Scored" delay={200} />
          <AnimatedScore target={48} label="Hour Turnaround" delay={400} />
        </div>
      </section>

      {/* ── WHAT YOU GET ───────────────────────────────────── */}
      <section id="what-you-get" className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[--color-gold] text-sm uppercase tracking-widest mb-3">What's Inside</p>
            <h2 className="font-serif text-4xl font-bold">Your Report Covers 7 Categories</h2>
            <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
              Every category is graded A–F with a plain-English explanation of what's broken and what to fix.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                num: "01",
                title: "Google Business Profile",
                desc: "Is your GBP complete, optimized, and ranking in the local map pack? We check every field.",
              },
              {
                num: "02",
                title: "AI Search Visibility",
                desc: "When someone asks ChatGPT, Perplexity, or Gemini for your service — do you show up? Most businesses don't.",
              },
              {
                num: "03",
                title: "Website & Mobile",
                desc: "Speed, mobile experience, clear CTA, service pages, and lead capture. Where are customers bouncing?",
              },
              {
                num: "04",
                title: "Reviews & Reputation",
                desc: "Rating, review count, recency, and how you respond. This is what closes customers before they call.",
              },
              {
                num: "05",
                title: "Social Media Presence",
                desc: "Are you active, consistent, and building trust? Or is your last post from 8 months ago?",
              },
              {
                num: "06",
                title: "Paid Advertising",
                desc: "Are you running ads? Are they working? We check Meta Ad Library and your boost strategy.",
              },
              {
                num: "07",
                title: "Lead Pipeline & Follow-Up",
                desc: "What happens after someone reaches out? CRM, automation, and response speed all scored.",
              },
            ].map((item) => (
              <div
                key={item.num}
                className="group bg-white/3 border border-white/8 rounded-2xl p-6 hover:border-[--color-gold]/40 hover:bg-white/5 transition-all"
              >
                <div className="text-[--color-gold]/40 font-serif text-3xl font-bold mb-3 group-hover:text-[--color-gold]/60 transition-colors">
                  {item.num}
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}

            {/* 8th card — the bonus */}
            <div className="bg-[--color-gold]/10 border border-[--color-gold]/30 rounded-2xl p-6">
              <div className="text-[--color-gold] font-serif text-3xl font-bold mb-3">★</div>
              <h3 className="font-bold text-lg mb-2">Priority Fix List</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We don't just grade you — we tell you the top 3 things to fix first for the biggest impact on leads and revenue.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ───────────────────────────────────── */}
      <section className="py-20 px-4 bg-white/2 border-y border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[--color-gold] text-sm uppercase tracking-widest mb-3">Simple Process</p>
          <h2 className="font-serif text-4xl font-bold mb-14">How It Works</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Submit Your Business",
                desc: "Fill out a short form with your business name, website, and location. Takes 2 minutes.",
              },
              {
                step: "2",
                title: "We Run the Audit",
                desc: "Our team runs your business through 7 categories of analysis — Google, AI search, website, reviews, and more.",
              },
              {
                step: "3",
                title: "Get Your Report",
                desc: "Within 48 hours, your scored Visibility Report lands in your inbox. Grades, gaps, and a priority fix list.",
              },
            ].map((item) => (
              <div key={item.step} className="relative">
                <div className="w-12 h-12 rounded-full bg-[--color-gold]/10 border border-[--color-gold]/30 flex items-center justify-center mx-auto mb-4">
                  <span className="text-[--color-gold] font-bold text-lg font-serif">{item.step}</span>
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO IT'S FOR ───────────────────────────────────── */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[--color-gold] text-sm uppercase tracking-widest mb-3">Built For</p>
          <h2 className="font-serif text-4xl font-bold mb-6">Any Local Service Business</h2>
          <p className="text-gray-400 text-lg mb-10">
            If customers search for your service online before hiring, this report will show you exactly where you're losing them.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Roofers", "HVAC", "Plumbers", "Electricians", "Custom Builders",
              "Remodelers", "Landscapers", "Med Spas", "Law Firms", "Dentists",
              "Auto Shops", "Cleaning Services", "Home Inspectors", "Painters", "And More",
            ].map((tag) => (
              <span
                key={tag}
                className="bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-gray-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING / CTA ──────────────────────────────────── */}
      <section id="get-report" className="py-20 px-4 bg-white/2 border-y border-white/5">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-[--color-gold] text-sm uppercase tracking-widest mb-3">Get Started</p>
          <h2 className="font-serif text-4xl font-bold mb-4">Your Visibility Report</h2>
          <p className="text-gray-400 mb-10">
            Know exactly where your business is losing leads online — and what to fix first.
          </p>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 mb-6">
            <div className="flex items-center justify-center gap-3 mb-2">
              <span className="text-gray-500 line-through text-xl">$297</span>
              <span className="text-5xl font-bold text-white font-serif">$97</span>
            </div>
            <p className="text-[--color-gold] text-sm mb-8">Founding Member Price — Ends June 30th</p>

            <ul className="text-left space-y-3 mb-8">
              {[
                "7-category scored report (A–F grades)",
                "Overall Visibility Score (0–100)",
                "Priority fix list — top 3 actions",
                "Plain-English explanations",
                "Delivered within 48 hours",
                "Actionable, not generic",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-300 text-sm">
                  <span className="text-[--color-gold] text-lg">✓</span>
                  {item}
                </li>
              ))}
            </ul>

            {/* Payment button placeholder — swap in MX Merchant URL */}
            <a
              href="#"
              className="block w-full bg-[--color-gold] text-[--color-navy] font-bold text-xl py-5 rounded-xl hover:brightness-110 transition-all shadow-lg shadow-[--color-gold]/20 text-center"
            >
              Get My Visibility Report — $97
            </a>

            <p className="text-gray-500 text-xs mt-4">
              Secure checkout. No subscription. One-time payment.
            </p>
          </div>

          <p className="text-gray-500 text-sm">
            Questions? Email us at{" "}
            <a href="mailto:kelly@zaubergroup.com" className="text-[--color-gold] hover:underline">
              kelly@zaubergroup.com
            </a>
          </p>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────── */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-center mb-12">Common Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: "What kind of businesses is this for?",
                a: "Any local service business where customers search online before hiring — roofers, HVAC, builders, plumbers, med spas, law firms, and more.",
              },
              {
                q: "How long does it take?",
                a: "You'll receive your report within 48 hours of submitting your business information.",
              },
              {
                q: "Is this automated or done by a real person?",
                a: "Both. We use AI-powered research tools combined with expert human review to make sure the grades and recommendations are accurate and actionable.",
              },
              {
                q: "What happens after I get the report?",
                a: "You'll have a clear picture of where your business is losing leads. We'll also include information on how Zauber Group can help you fix the issues if you want support.",
              },
              {
                q: "Why $97 now?",
                a: "We're in our founding phase and want to deliver 100 reports to refine the product. Early customers get the best price — it goes to $297 on July 1st.",
              },
            ].map((item) => (
              <div key={item.q} className="border-b border-white/10 pb-6">
                <h3 className="font-bold text-lg mb-2">{item.q}</h3>
                <p className="text-gray-400 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
