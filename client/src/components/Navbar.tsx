import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0A1628]/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-20">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-3"
        >
          <span className="font-serif text-2xl font-semibold text-white tracking-wide">
            Zauber
          </span>
          <span className="text-[#C9A84C] font-serif text-2xl font-light">
            Group
          </span>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          <button
            onClick={() => scrollToSection("#builderflow")}
            className="relative text-white/80 hover:text-white text-sm font-medium tracking-[0.12em] uppercase transition-colors duration-300 group"
          >
            BuilderFlow
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#C9A84C] transition-all duration-300 group-hover:w-full" />
          </button>
          <button
            onClick={() => scrollToSection("#services")}
            className="relative text-white/80 hover:text-white text-sm font-medium tracking-[0.12em] uppercase transition-colors duration-300 group"
          >
            Services
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#C9A84C] transition-all duration-300 group-hover:w-full" />
          </button>
          <button
            onClick={() => scrollToSection("#about")}
            className="relative text-white/80 hover:text-white text-sm font-medium tracking-[0.12em] uppercase transition-colors duration-300 group"
          >
            About
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#C9A84C] transition-all duration-300 group-hover:w-full" />
          </button>
          <button
            onClick={() => scrollToSection("#contact")}
            className="relative text-white/80 hover:text-white text-sm font-medium tracking-[0.12em] uppercase transition-colors duration-300 group"
          >
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#C9A84C] transition-all duration-300 group-hover:w-full" />
          </button>
          <button
            onClick={() => scrollToSection("#contact")}
            className="ml-4 px-6 py-2.5 border border-[#C9A84C] text-[#C9A84C] text-sm font-medium tracking-[0.08em] uppercase hover:bg-[#C9A84C] hover:text-[#0A1628] transition-all duration-300"
          >
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#0A1628]/98 backdrop-blur-md px-6 pb-8 pt-2 flex flex-col gap-6">
          <button
            onClick={() => scrollToSection("#builderflow")}
            className="text-white/80 hover:text-white text-sm font-medium tracking-[0.12em] uppercase text-left transition-colors"
          >
            BuilderFlow
          </button>
          <button
            onClick={() => scrollToSection("#services")}
            className="text-white/80 hover:text-white text-sm font-medium tracking-[0.12em] uppercase text-left transition-colors"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("#about")}
            className="text-white/80 hover:text-white text-sm font-medium tracking-[0.12em] uppercase text-left transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("#contact")}
            className="text-white/80 hover:text-white text-sm font-medium tracking-[0.12em] uppercase text-left transition-colors"
          >
            Contact
          </button>
          <button
            onClick={() => scrollToSection("#contact")}
            className="mt-2 px-6 py-3 border border-[#C9A84C] text-[#C9A84C] text-sm font-medium tracking-[0.08em] uppercase hover:bg-[#C9A84C] hover:text-[#0A1628] transition-all duration-300 w-fit"
          >
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}
