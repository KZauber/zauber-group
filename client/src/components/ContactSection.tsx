import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Mail, Phone, Globe } from "lucide-react";

export default function ContactSection() {
  const { ref: sectionRef, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="contact" className="py-24 sm:py-32 bg-white">
      <div className="container">
        <div
          ref={sectionRef}
          className={`fade-up ${isVisible ? "visible" : ""}`}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="gold-line" />
            <span className="text-[#C9A84C] text-sm font-medium tracking-[0.2em] uppercase">
              Get Started
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left: CTA */}
            <div>
              <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-[#0A1628] leading-[1.15] mb-6">
                Ready to Stop
                <br />
                <span className="text-[#C9A84C]">Chasing Work?</span>
              </h2>
              <p className="text-[#555] text-lg leading-relaxed mb-10 max-w-lg">
                Whether you're a custom home builder or a commercial contractor,
                let's talk about getting BuilderFlow™ working for your business.
                No pressure — just a real conversation about what's possible.
              </p>
              <a
                href="mailto:hello@zaubergroup.com"
                className="inline-block px-10 py-4 bg-[#0A1628] text-white text-sm font-semibold tracking-[0.1em] uppercase hover:bg-[#132240] transition-all duration-300 hover:shadow-xl"
              >
                Schedule a Conversation
              </a>
            </div>

            {/* Right: Contact Details */}
            <div className="flex flex-col justify-center">
              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-12 h-12 border border-[#C9A84C]/30 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-[#C9A84C]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#999] tracking-wide uppercase mb-1">
                      Email
                    </p>
                    <a
                      href="mailto:hello@zaubergroup.com"
                      className="text-[#0A1628] text-lg hover:text-[#C9A84C] transition-colors"
                    >
                      hello@zaubergroup.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-12 h-12 border border-[#C9A84C]/30 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-[#C9A84C]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#999] tracking-wide uppercase mb-1">
                      Phone
                    </p>
                    <a
                      href="tel:+15125550100"
                      className="text-[#0A1628] text-lg hover:text-[#C9A84C] transition-colors"
                    >
                      (512) 555-0100
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-12 h-12 border border-[#C9A84C]/30 flex items-center justify-center">
                    <Globe className="w-5 h-5 text-[#C9A84C]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#999] tracking-wide uppercase mb-1">
                      Service Area
                    </p>
                    <p className="text-[#0A1628] text-lg">Nationwide</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
