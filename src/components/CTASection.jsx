import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="bg-[#F5F5F5] py-32">
      <div className="max-w-[1100px] mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative bg-black text-white rounded-[28px] py-20 px-8 text-center overflow-hidden"
        >

          {/* smoky texture */}
          <div className="absolute inset-0 opacity-40 pointer-events-none">
            <svg className="w-full h-full">
              <defs>
                <filter id="noise">
                  <feTurbulence
                    type="fractalNoise"
                    baseFrequency="0.8"
                    numOctaves="3"
                    stitchTiles="stitch"
                  />
                  <feColorMatrix type="saturate" values="0" />
                </filter>
              </defs>

              <rect
                width="100%"
                height="100%"
                filter="url(#noise)"
                opacity="0.25"
              />
            </svg>
          </div>

          {/* glow background */}
          <div className="absolute inset-0 opacity-30 pointer-events-none">
            <div className="absolute w-[600px] h-[600px] bg-white/10 blur-[140px] rounded-full top-[-200px] left-[-200px]"></div>
            <div className="absolute w-[500px] h-[500px] bg-white/10 blur-[120px] rounded-full bottom-[-150px] right-[-150px]"></div>
          </div>

          {/* gradient overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_70%)] pointer-events-none"></div>

          {/* content */}
          <div className="relative z-10">

            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Let's start designing your project
            </h2>

            <p className="text-gray-300 mb-10">
              Want to see how to transform your brand into a unique style?
              <br />
              Send us a message!
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-white text-black px-8 py-3 rounded-full font-medium shadow-lg"
            >
              Send us a message
            </motion.button>

            {/* doodle lines */}
            <div className="absolute right-[38%] bottom-[40px] text-white opacity-80">
              <span className="block w-6 h-[2px] bg-white rotate-12 mb-1"></span>
              <span className="block w-4 h-[2px] bg-white rotate-[-12deg]"></span>
            </div>

          </div>

        </motion.div>
      </div>
    </section>
  );
}