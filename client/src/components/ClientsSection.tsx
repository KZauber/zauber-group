import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ExternalLink } from "lucide-react";

const clients = [
  {
    name: "Woolsey Design Build",
    specialty: "Commercial Design-Build · Texas Hill Country",
    description:
      "Multi-million dollar commercial construction firm serving the Texas Hill Country and I-35 corridor — hotels, resorts, medical facilities, and legacy custom homes. $250M+ in projects delivered.",
    url: "https://woolseydesignbuild.com",
    location: "New Braunfels & Fredericksburg, TX",
  },
];

export default function ClientsSection() {
  const { ref: sectionRef, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="clients" className="py-24 sm:py-32 bg-[#0A1628]">
      <div className="container">
        <div
          ref={sectionRef}
          className={`fade-up ${isVisible ? "visible" : ""}`}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="gold-line" />
            <span className="text-[#C9A84C] text-sm font-medium tracking-[0.2em] uppercase">
              Client Work
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-16">
            <div>
              <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-white leading-[1.15]">
                Clients We've
                <br />
                <span className="text-[#C9A84C]">Built For.</span>
              </h2>
            </div>
            <div className="flex items-end">
              <p className="text-white/60 text-lg leading-relaxed max-w-lg">
                Every site we build ships with schema, SEO, and AI visibility
                from day one — not as an afterthought.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clients.map((client) => (
              <a
                key={client.name}
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group border border-white/10 p-8 hover:border-[#C9A84C]/50 transition-colors duration-300 bg-white/[0.02] hover:bg-white/[0.05]"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-[#C9A84C] text-xs font-medium tracking-[0.2em] uppercase">
                    {client.specialty}
                  </span>
                  <ExternalLink className="w-4 h-4 text-white/20 group-hover:text-[#C9A84C] transition-colors duration-300 flex-shrink-0 ml-4" />
                </div>

                <h3 className="font-serif text-2xl font-semibold text-white mb-4 leading-tight">
                  {client.name}
                </h3>

                <p className="text-white/50 text-sm leading-relaxed mb-6">
                  {client.description}
                </p>

                <p className="text-white/25 text-xs tracking-wide uppercase">
                  {client.location}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
