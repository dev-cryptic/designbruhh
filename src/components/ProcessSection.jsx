import { motion } from "framer-motion";

export default function ProcessSection() {
  const steps = [
    { id: "01", title: "Define" },
    { id: "02", title: "Design" },
    { id: "03", title: "Build" },
    { id: "04", title: "Launch" },
  ];

  return (
    <section className="bg-[#F5F5F5] py-32">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Heading */}
        <div className="max-w-md mb-20">
          <span className="border border-gray-300 px-4 py-1 rounded-full text-sm text-gray-600">
            How we work
          </span>

          <h2 className="text-4xl font-bold mt-6 leading-tight">
            Let us show you how we drive your brand to new heights
          </h2>

          <p className="text-gray-500 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        {/* MOBILE GRID */}
        <div className="grid gap-8 lg:hidden">
          {steps.map((step) => (
            <motion.div
              key={step.id}
              whileHover={{ scale: 1.03 }}
              className="bg-white p-6 rounded-2xl shadow-xl"
            >
              <p className="text-gray-400 text-sm">{step.id}</p>
              <h3 className="font-bold text-lg">{step.title}</h3>
              <p className="text-gray-500 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </motion.div>
          ))}
        </div>

        {/* DESKTOP LAYOUT */}
        <div className="relative h-[600px] hidden lg:block">

          {/* SVG Paths */}
          <svg className="absolute w-full h-full pointer-events-none">
            <path d="M450 100 Q350 200 250 260" stroke="#d1d5db" strokeWidth="2" strokeDasharray="6 6" fill="none"/>
            <path d="M250 260 Q400 350 650 420" stroke="#d1d5db" strokeWidth="2" strokeDasharray="6 6" fill="none"/>
            <path d="M650 420 Q550 480 350 520" stroke="#d1d5db" strokeWidth="2" strokeDasharray="6 6" fill="none"/>
          </svg>

          {/* Dots */}
          <div className="absolute left-[450px] top-[80px] w-4 h-4 bg-gray-800 rounded-full"></div>
          <div className="absolute left-[250px] top-[240px] w-4 h-4 bg-gray-800 rounded-full"></div>
          <div className="absolute left-[650px] top-[400px] w-4 h-4 bg-gray-800 rounded-full"></div>

          {/* Cards */}
          <motion.div whileHover={{ scale: 1.05 }} className="absolute left-[420px] top-[20px] bg-white w-[460px] p-6 rounded-2xl shadow-xl rotate-[4deg]">
            <p className="text-gray-400 text-sm">01</p>
            <h3 className="font-bold text-lg">Define</h3>
            <p className="text-gray-500 text-sm">Lorem ipsum dolor sit amet.</p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} className="absolute left-[200px] top-[200px] bg-white w-[460px] p-6 rounded-2xl shadow-xl rotate-[-6deg]">
            <p className="text-gray-400 text-sm">02</p>
            <h3 className="font-bold text-lg">Design</h3>
            <p className="text-gray-500 text-sm">Lorem ipsum dolor sit amet.</p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} className="absolute right-[250px] top-[330px] bg-white w-[460px] p-6 rounded-2xl shadow-xl rotate-[5deg]">
            <p className="text-gray-400 text-sm">03</p>
            <h3 className="font-bold text-lg">Build</h3>
            <p className="text-gray-500 text-sm">Lorem ipsum dolor sit amet.</p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} className="absolute left-[300px] bottom-[40px] bg-white w-[460px] p-6 rounded-2xl shadow-xl rotate-[-5deg]">
            <p className="text-gray-400 text-sm">04</p>
            <h3 className="font-bold text-lg">Launch</h3>
            <p className="text-gray-500 text-sm">Lorem ipsum dolor sit amet.</p>
          </motion.div>

          <p className="absolute right-[250px] bottom-[20px] text-gray-400 italic">
            Ready to be delivered!
          </p>

        </div>
      </div>
    </section>
  );
}