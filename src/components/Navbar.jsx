import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = ["Home", "About", "Process", "Services", "Portfolio"];

  return (
    <nav className="w-full max-w-[1200px] mx-auto flex justify-between items-center py-6 px-6 relative z-50">

      {/* Logo */}
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-2xl font-bold tracking-tighter"
      >
        designbruuuh.
      </motion.h1>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-8 text-sm font-medium text-[#6E6E6E]">
        {links.map((i) => (
          <a
            key={i}
            className="hover:text-black transition-all cursor-pointer"
          >
            {i}
          </a>
        ))}
      </div>

      {/* Desktop Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        className="hidden md:block bg-black text-white px-6 py-2 rounded-full"
      >
        Contact Us
      </motion.button>

      {/* Hamburger Icon */}
      <button
        className="md:hidden text-black z-50"
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Dropdown Menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute top-[70px] left-0 w-full bg-white shadow-xl rounded-xl p-6 flex flex-col gap-6 md:hidden z-40"
        >
          {links.map((i) => (
            <a
              key={i}
              className="text-lg font-medium text-gray-700 hover:text-black"
              onClick={() => setOpen(false)}
            >
              {i}
            </a>
          ))}

          <button className="bg-black text-white px-6 py-3 rounded-full">
            Contact Us
          </button>
        </motion.div>
      )}
    </nav>
  );
}

export default Navbar;