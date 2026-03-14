import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section className="bg-[#F5F5F5] py-10">

      <div className="max-w-[1100px] mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="border border-gray-300 px-4 py-1 rounded-full text-sm text-gray-600">
            Contact Us
          </span>

          <h2 className="text-4xl font-bold mt-6">
            Let's build something amazing
          </h2>

          <p className="text-gray-500 mt-4">
            Have a project in mind? Send us a message and let's talk.
          </p>
        </motion.div>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-md p-10"
        >

          <form className="grid md:grid-cols-2 gap-6">

            {/* Name */}
            <div>
              <label className="text-sm text-gray-500">Full Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full mt-2 p-3 rounded-lg border border-gray-200 focus:outline-none focus:border-black"
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-sm text-gray-500">Email</label>
              <input
                type="email"
                placeholder="john@email.com"
                className="w-full mt-2 p-3 rounded-lg border border-gray-200 focus:outline-none focus:border-black"
              />
            </div>

            {/* Subject */}
            <div className="md:col-span-2">
              <label className="text-sm text-gray-500">Subject</label>
              <input
                type="text"
                placeholder="Project discussion"
                className="w-full mt-2 p-3 rounded-lg border border-gray-200 focus:outline-none focus:border-black"
              />
            </div>

            {/* Message */}
            <div className="md:col-span-2">
              <label className="text-sm text-gray-500">Message</label>
              <textarea
                rows="5"
                placeholder="Tell us about your project..."
                className="w-full mt-2 p-3 rounded-lg border border-gray-200 focus:outline-none focus:border-black"
              ></textarea>
            </div>

            {/* Submit */}
            <div className="md:col-span-2 flex justify-center mt-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-black text-white px-10 py-3 rounded-full"
              >
                Send Message
              </motion.button>
            </div>

          </form>

        </motion.div>

      </div>

    </section>
  );
}