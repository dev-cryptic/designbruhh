import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative bg-[#F5F5F5] overflow-hidden">

      {/* dotted background */}
      <div className="absolute inset-0 opacity-[0.15] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:22px_22px]" />

      <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-12 items-center px-6 py-16 lg:py-24 relative">

        {/* LEFT CONTENT */}
        <div>

          {/* badge */}
          <span className="inline-block border border-gray-300 px-4 py-1 rounded-full text-sm text-gray-600 mb-6">
            Welcome to designerbruuuh
          </span>

          {/* headline */}
          <h1 className="text-[36px] sm:text-[46px] lg:text-[60px] leading-[1.1] font-bold tracking-tight mb-6">

            WE CRAFT <span className="text-[#8B0000]">BRANDS</span>
            <br />
            & DIGITAL
            <br />
            <span className="text-[#8B0000]">EXPERIENCES</span>

          </h1>

          {/* description */}
          <p className="text-gray-500 max-w-md mb-8 text-base sm:text-lg">
            Elevate Your Brand with Exceptional Design Solutions. From branding
            to UI, we bring your vision to life with tailored online design services.
          </p>

          {/* button */}
          <div className="relative inline-block">

            <button className="flex items-center gap-3 bg-black text-white px-6 py-3 sm:px-7 sm:py-4 rounded-full font-medium shadow-lg hover:scale-105 transition">

              Let's talk

              <span className="bg-white text-black rounded-full p-1">
                <ArrowUpRight size={16}/>
              </span>

            </button>

            <div className="absolute -bottom-6 left-6 text-black text-xl">
              ✦
            </div>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative mt-10 lg:mt-0">

          {/* floating review card */}
          <motion.div
            initial={{ y: -10 }}
            animate={{ y: 10 }}
            transition={{ repeat: Infinity, duration: 3, repeatType: "reverse" }}
            className="absolute -top-6 left-2 sm:-top-10 sm:left-0 bg-white p-4 rounded-xl shadow-md"
          >
            <p className="text-sm font-semibold">250+ Works</p>

            <div className="flex -space-x-2 mt-2">
              <img className="w-6 h-6 rounded-full border" src="https://i.pravatar.cc/40?img=1"/>
              <img className="w-6 h-6 rounded-full border" src="https://i.pravatar.cc/40?img=2"/>
              <img className="w-6 h-6 rounded-full border" src="https://i.pravatar.cc/40?img=3"/>
            </div>
          </motion.div>

          {/* hero image */}
          <div className="bg-white p-3 sm:p-4 rounded-[20px] shadow-xl">
            <img
              src="https://img.freepik.com/free-photo/misurina-sunset_181624-34793.jpg?semt=ais_hybrid&w=740&q=80"
              className="rounded-[16px] w-full"
            />
          </div>

          {/* bottom pill */}
          <div className="absolute -bottom-4 sm:-bottom-6 right-4 sm:right-10 bg-black text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full shadow-lg text-sm sm:text-base">
            Solutions for Brand Identity
          </div>

        </div>

      </div>

    </section>
  );
}