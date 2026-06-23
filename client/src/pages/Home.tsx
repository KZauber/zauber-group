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
    <div className="min-h-screen">
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
