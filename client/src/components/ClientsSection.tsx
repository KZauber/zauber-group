import { ExternalLink, Lock } from "lucide-react";

const client = {
  name: "Woolsey Design Build",
  specialty: "Commercial Design-Build · Texas Hill Country",
  description:
    "Multi-million dollar commercial construction firm serving the Texas Hill Country and I-35 corridor — hotels, resorts, medical facilities, and legacy custom homes. $250M+ in projects delivered.",
  url: "https://woolseydesignbuild.com",
  domain: "woolseydesignbuild.com",
  location: "New Braunfels & Fredericksburg, TX",
  shot: "/woolsey-site.jpg",
};

export default function ClientsSection() {
  return (
    <section id="clients" className="relative py-24 sm:py-32">
      <div className="container relative z-10">
        <div className="flex items-center gap-4 mb-6">
          <div className="gold-line" />
          <span className="text-[#C9A84C] text-sm font-medium tracking-[0.2em] uppercase">
            Client Work
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-[#0A1628] dark:text-white leading-[1.15]">
            Clients We've
            <br />
            <span className="text-[#C9A84C]">Built For.</span>
          </h2>
          <div className="flex items-end">
            <p className="text-[#555] dark:text-white/60 text-lg leading-relaxed max-w-lg">
              Every site we build ships with schema, SEO, and AI visibility from
              day one — not as an afterthought.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.82fr_1.18fr] gap-10 lg:gap-12 items-center">
          {/* text card */}
          <div className="zg-surface relative rounded-2xl p-9">
            <ExternalLink className="absolute top-8 right-8 w-5 h-5 text-[#C9A84C]/70" />
            <p className="text-[#C9A84C] text-xs font-semibold tracking-[0.16em] uppercase leading-relaxed mb-5 max-w-[280px]">
              {client.specialty}
            </p>
            <h3 className="font-serif text-3xl font-semibold text-[#0A1628] dark:text-white mb-4">
              {client.name}
            </h3>
            <p className="text-[#555] dark:text-white/60 text-[15px] leading-relaxed mb-7">
              {client.description}
            </p>
            <p className="text-[#999] dark:text-white/40 text-xs tracking-wide uppercase">
              {client.location}
            </p>
          </div>

          {/* auto-scrolling live-site preview */}
          <a
            href={client.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block transition-transform duration-300 hover:-translate-y-1.5"
          >
            <div className="rounded-xl overflow-hidden border border-[#C9A84C]/35 group-hover:border-[#C9A84C]/70 shadow-2xl bg-[#0b1626] transition-colors">
              {/* browser chrome */}
              <div className="h-12 bg-[#0e1d33] border-b border-white/8 flex items-center gap-2.5 px-4">
                <span className="w-3 h-3 rounded-full bg-[#e2675f]" />
                <span className="w-3 h-3 rounded-full bg-[#e6b34c]" />
                <span className="w-3 h-3 rounded-full bg-[#5db073]" />
                <span className="ml-3 flex-1 max-w-[360px] h-7 rounded-md bg-white/6 border border-white/8 flex items-center gap-2 px-3 text-white/60 text-[13px]">
                  <Lock className="w-3 h-3 text-[#C9A84C]" />
                  {client.domain}
                </span>
                <span className="ml-auto flex items-center gap-2 text-[#C9A84C] text-[11px] font-semibold tracking-[0.14em] uppercase">
                  <span className="zg-livedot w-1.5 h-1.5 rounded-full bg-[#C9A84C]" />
                  Live Site
                </span>
              </div>
              {/* viewport */}
              <div className="relative h-[460px] overflow-hidden bg-black">
                <img
                  src={client.shot}
                  alt={`${client.name} website`}
                  className="zg-sitescroll w-full block"
                  loading="lazy"
                />
                <span className="pointer-events-none absolute inset-0 shadow-[inset_0_18px_30px_-18px_rgba(0,0,0,.6),inset_0_-18px_30px_-18px_rgba(0,0,0,.6)]" />
              </div>
            </div>
            <span className="mt-4 flex items-center justify-center gap-2 text-[#C9A84C] text-[13px] font-semibold tracking-[0.14em] uppercase">
              Visit the live site
              <ExternalLink className="w-3.5 h-3.5" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
