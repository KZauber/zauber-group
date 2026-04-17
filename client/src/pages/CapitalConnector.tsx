/*
 * Design: Architectural Precision — Capital Connector Page
 * Separate page for the capital/funding network
 * Aspirational, forward-looking, "Coming Soon" tone
 * Simple waitlist CTA
 */

import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight, Building2, Handshake, TrendingUp } from "lucide-react";

const HERO_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663392461276/eAdsFDAMhTrW5pTcaBjTvJ/capital-connector-hero-bX6TfLJwYE7VW2zgSrAABk.webp";

export default function CapitalConnector() {
  const { ref: visionRef, isVisible: visionVisible } = useScrollAnimation(0.1);
  const { ref: howRef, isVisible: howVisible } = useScrollAnimation(0.1);
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation(0.1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative w-full h-[70vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={HERO_IMAGE}
            alt="Austin Texas skyline at blue hour — representing growth and opportunity"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/90 via-[#0A1628]/70 to-[#0A1628]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/80 via-transparent to-[#0A1628]/30" />
        </div>

        <div className="relative z-10 h-full flex items-center">
          <div className="container">
            <div className="max-w-2xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-[1px] bg-[#C9A84C]" />
                <span className="text-[#C9A84C] text-sm font-medium tracking-[0.25em] uppercase">
                  Capital Connector
                </span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-[1.1] mb-6">
                Connecting Builders
                <br />
                with <span className="text-[#C9A84C]">Capital</span>
              </h1>

              <p className="text-white/70 text-lg sm:text-xl leading-relaxed max-w-xl mb-4">
                We're building a curated network of capital partners for builders
                who need funding to take on their next big project.
              </p>

              <div className="inline-flex items-center gap-2 px-4 py-2 border border-[#C9A84C]/40 text-[#C9A84C] text-sm tracking-[0.1em] uppercase">
                <span className="w-2 h-2 rounded-full bg-[#C9A84C] animate-pulse" />
                Coming Soon
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="container">
          <div
            ref={visionRef}
            className={`fade-up ${visionVisible ? "visible" : ""}`}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="gold-line" />
              <span className="text-[#C9A84C] text-sm font-medium tracking-[0.2em] uppercase">
                The Vision
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
              <div>
                <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-[#0A1628] leading-[1.15] mb-6">
                  Great Builders
                  <br />
                  <span className="text-[#C9A84C]">Deserve Great Partners</span>
                </h2>
              </div>
              <div className="flex items-end">
                <div className="space-y-5 text-[#555] text-lg leading-relaxed">
                  <p>
                    We've spent 20+ years working with luxury builders across Texas.
                    One thing we've seen over and over: talented builders with incredible
                    projects — but without the capital connections to bring them to life
                    at scale.
                  </p>
                  <p>
                    Capital Connector is our answer. We're building a vetted network
                    that brings together builders who need funding with capital partners
                    who want access to premium construction opportunities.
                  </p>
                  <p className="text-[#0A1628] font-medium">
                    This isn't a marketplace. It's a relationship-driven network built
                    on trust, discretion, and shared ambition.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Will Work */}
      <section className="py-24 sm:py-32 bg-[#F8F6F1]">
        <div className="container">
          <div
            ref={howRef}
            className={`fade-up ${howVisible ? "visible" : ""}`}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="gold-line" />
              <span className="text-[#C9A84C] text-sm font-medium tracking-[0.2em] uppercase">
                How It Works
              </span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-[#0A1628] leading-[1.15] mb-16 max-w-2xl">
              A Network Built on
              <br />
              <span className="text-[#C9A84C]">Trust</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                {
                  icon: Building2,
                  title: "For Builders",
                  desc: "Share your project vision and funding needs. We'll match you with capital partners who understand luxury construction and are aligned with your goals.",
                },
                {
                  icon: TrendingUp,
                  title: "For Capital Partners",
                  desc: "Get curated access to premium construction opportunities — residential estates, commercial developments, mixed-use projects — vetted by our team.",
                },
                {
                  icon: Handshake,
                  title: "The Introduction",
                  desc: "We facilitate the connection with discretion and care. No cold pitches. Just warm, strategic introductions between parties who are ready to move.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="border border-[#C9A84C]/15 p-8 hover:border-[#C9A84C]/40 transition-colors duration-500 bg-white"
                >
                  <div className="w-14 h-14 border border-[#C9A84C]/30 flex items-center justify-center mb-6">
                    <item.icon className="w-6 h-6 text-[#C9A84C]" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-[#0A1628] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[#555] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Waitlist */}
      <section className="py-24 sm:py-32 bg-[#0A1628]">
        <div className="container">
          <div
            ref={ctaRef}
            className={`fade-up ${ctaVisible ? "visible" : ""}`}
          >
            <div className="max-w-2xl mx-auto text-center">
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="w-12 h-[1px] bg-[#C9A84C]" />
                <span className="text-[#C9A84C] text-sm font-medium tracking-[0.25em] uppercase">
                  Get on the List
                </span>
                <div className="w-12 h-[1px] bg-[#C9A84C]" />
              </div>

              <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-white leading-[1.15] mb-6">
                We're Building This
                <br />
                <span className="text-[#C9A84C]">Network Now</span>
              </h2>

              <p className="text-white/60 text-lg leading-relaxed mb-4">
                Capital Connector is currently in development. We're carefully
                curating our initial network of builders and capital partners to
                ensure quality from day one.
              </p>

              <p className="text-white/40 text-base leading-relaxed mb-10">
                If you're a builder looking for funding or a capital partner
                interested in premium construction opportunities, we'd love to
                hear from you.
              </p>

              <a
                href="mailto:hello@zaubergroup.com?subject=Capital%20Connector%20—%20Waitlist%20Interest"
                className="inline-flex items-center gap-3 px-10 py-4 bg-[#C9A84C] text-[#0A1628] text-sm font-semibold tracking-[0.1em] uppercase hover:bg-[#d4b65e] transition-all duration-300 hover:shadow-xl group"
              >
                Join the Waitlist
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <p className="text-white/25 text-xs mt-8 max-w-md mx-auto leading-relaxed">
                By reaching out, you're expressing interest — not making a commitment.
                We'll follow up with more details as the network takes shape.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-12 bg-[#0A1628] border-t border-white/5">
        <div className="container">
          <p className="text-white/25 text-xs leading-relaxed max-w-3xl">
            <strong className="text-white/35">Disclaimer:</strong> Zauber Group is
            a business development and deal facilitation firm. We do not provide
            financial, investment, or legal advice. Capital Connector is a
            networking initiative — not a fund, brokerage, or investment platform.
            All introductions are made on a best-efforts basis. Parties are
            encouraged to seek independent professional counsel before entering
            into any agreements.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
