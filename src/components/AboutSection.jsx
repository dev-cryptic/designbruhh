import { motion } from "framer-motion";

export default function AboutSection() {
  const tags = [
    "Marketing",
    "Web Design",
    "Web Design",
    "Product Design",
    "SEO",
    "Brand Positioning",
  ];

  return (
    <section className="bg-[#F5F5F5] py-15 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* TOP SECTION */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="relative text-center lg:text-left">

            <span className="border border-gray-300 text-gray-600 px-4 py-1 rounded-full text-sm">
              About us
            </span>

            <h2 className="text-[30px] sm:text-[36px] lg:text-[40px] font-bold mt-6 mb-4 leading-tight">
              Meet Creatwise: Your Design Partners
            </h2>

            <p className="text-gray-500 max-w-md mx-auto lg:mx-0 leading-relaxed">
              We're not just designers; we're creators, problem-solvers,
              and your brand’s best friends. At Creatwise, we live and
              breathe design, from captivating visuals to seamless
              digital experiences. Think of us as an extension of your
              team, ready to bring your ideas to life.
            </p>

            {/* doodle */}
            <div className="hidden lg:block absolute -right-10 top-16 text-xl opacity-60 rotate-12">
              ✿
            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center">

            <div className="absolute -top-6 -left-6 text-3xl opacity-70">
              ✦
            </div>

            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
              className="rounded-2xl grayscale w-full max-w-[480px]"
            />

          </div>

        </div>

        {/* BLACK CARD AREA */}
        <div className="relative mt-16">

          <motion.div
            whileHover={{ scale: 1.01 }}
            className="bg-black text-white rounded-[26px] p-8 sm:p-10 md:p-12 relative overflow-hidden"
          >

            {/* wave pattern */}
            <div className="absolute inset-0 opacity-30">
              <svg width="100%" height="100%">
                <defs>
                  <pattern
                    id="waves"
                    width="80"
                    height="80"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M0 40 Q20 0 40 40 T80 40"
                      stroke="white"
                      fill="transparent"
                      strokeWidth="1"
                    />
                  </pattern>
                </defs>

                <rect width="100%" height="100%" fill="url(#waves)" />
              </svg>
            </div>

            <div className="relative z-10">

              <h3 className="text-3xl sm:text-4xl font-bold mb-1">
                40%
              </h3>

              <p className="text-gray-400 mb-8">
                Increase in social media growth
              </p>

              {/* tags */}
              <div className="flex flex-wrap gap-3 sm:gap-4">

                {tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-white text-black px-5 py-2 rounded-full text-sm font-medium shadow"
                  >
                    {tag}
                  </span>
                ))}

              </div>

            </div>

          </motion.div>

          {/* OVERLAPPING IMAGE CARD */}

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="relative lg:absolute mt-10 lg:mt-0 lg:-bottom-10 lg:right-10 bg-white p-4 rounded-2xl shadow-xl w-full max-w-[260px] mx-auto lg:mx-0"
          >

            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692"
              className="rounded-xl grayscale"
            />

          </motion.div>

        </div>

      </div>
    </section>
  );
}