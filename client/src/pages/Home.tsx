import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import SarahVideoSection from "@/components/SarahVideoSection";
import ValueSection from "@/components/ValueSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import ClientsSection from "@/components/ClientsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Reveal from "@/components/motion/Reveal";

export default function Home() {
  return (
    <div className="min-h-screen relative z-0">
      {/* one continuous background spanning the whole page (no per-section seams) */}
      <div className="zg-page-bg" aria-hidden="true">
        <div className="zg-grid-full" />
        <div className="zg-glow zg-glow-gold zg-drift1 w-[680px] h-[680px] -left-44 top-[6%]" />
        <div className="zg-glow zg-glow-blue zg-drift2 w-[820px] h-[820px] -right-56 top-[42%]" />
        <div className="zg-glow zg-glow-gold zg-drift1 w-[520px] h-[520px] left-[40%] top-[78%]" />
      </div>
      <Navbar />
      <HeroCarousel />
      <Reveal><SarahVideoSection /></Reveal>
      <Reveal><ValueSection /></Reveal>
      <Reveal><ServicesSection /></Reveal>
      <Reveal><AboutSection /></Reveal>
      <Reveal><ClientsSection /></Reveal>
      <Reveal><ContactSection /></Reveal>
      <Footer />
    </div>
  );
}
