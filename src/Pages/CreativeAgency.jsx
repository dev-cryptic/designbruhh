import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { useRef } from "react";
import HeroSection from "../components/HeroSection";
import SkillsSection from "../components/SkillsSection";
import AboutSection from "../components/AboutSection";
import ProcessSection from "../components/ProcessSection";
import ProjectsSection from "../components/ProjectsSection";
import CTASection from "../components/CTASection";
import ContactSection from "../components/ContactSection";
import PortfolioSection from "../components/PortfolioSection";
import Navbar from "../components/Navbar"






const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const float = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

function CreativeAgency() {
  const container = useRef(null);

  return (
    <div
      ref={container}
      className="bg-[#F5F5F5] text-[#0B0B0B] font-sans overflow-hidden"
    >

      {/* NAVBAR */}
      {/* <nav className="max-w-[1200px] mx-auto flex justify-between items-center py-8 px-6">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-2xl font-bold tracking-tighter"
        >
          designbruuuh.
        </motion.h1>

        <div className="hidden md:flex gap-8 text-sm font-medium text-[#6E6E6E]">
          {["Home", "About", "Process", "Services", "Portfolio"].map((i) => (
            <a
              key={i}
              className="hover:text-black transition-all cursor-pointer"
            >
              {i}
            </a>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          className="bg-black text-white px-6 py-2 rounded-full"
        >
          Contact Us
        </motion.button>
      </nav> */}
      <Navbar/>

      {/* HERO */}
      <HeroSection/>
      <AboutSection/>
      <ProcessSection/>
      
      



      {/* GROWTH CARD */}




      {/* SERVICES */}
      <section className="bg-[#111111] text-white py-32">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-4xl mb-16">
            We design meaningful not just quick impressions
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            {[
              "Brand Identity",
              // "Illustration",
              "UI/UX Design",
              "AI Video Production"
              // "Mobile Apps",
              // "Software Development"
            ].map((s) => (
              <motion.div
                key={s}
                whileHover={{
                  y: -6,
                  borderColor: "#6E6E6E"
                }}
                className="bg-[#141414] border border-[#2B2B2B] p-10 rounded-[16px]"
              >
                <h3 className="text-xl mb-3">{s}</h3>
                <p className="text-gray-500 text-sm">
                  High-end digital solutions tailored to your brand.
                </p>
              </motion.div>
            ))}

          </div>
        </div>
      </section>


      <ProjectsSection/>
      <SkillsSection/>
      <CTASection/>
      <PortfolioSection/>
      <ContactSection/>

      {/* FOOTER */}
      <footer className="py-10 border-t border-[#E5E5E5]">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row justify-between gap-12">
          <div>
            <h1 className="text-2xl font-bold mb-4">designbruuuh.</h1>
            <p className="text-[#6E6E6E] text-sm max-w-xs">
              Creative agency building premium digital brands.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-16 text-sm">
            <div className="space-y-4">
              <h4 className="font-bold">Services</h4>
              <p className="text-[#6E6E6E]">Branding</p>
              <p className="text-[#6E6E6E]">UI/UX</p>
              <p className="text-[#6E6E6E]">Development</p>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold">Company</h4>
              <p className="text-[#6E6E6E]">About</p>
              <p className="text-[#6E6E6E]">Portfolio</p>
              <p className="text-[#6E6E6E]">Contact</p>
            </div>
          </div>
        </div>

        <div className="max-w-[1200px] mx-auto px-6 mt-20 pt-8 border-t border-[#E5E5E5] text-xs text-[#6E6E6E]">
          © 2026 designbruuuh. All rights reserved.
        </div>
      </footer>

    </div>
  );
}

export default CreativeAgency;