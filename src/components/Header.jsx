import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import logo from "/logo.png";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-transparent py-1 text-center">
      <nav className="bg-transparent text-slate-100 shadow-lg py-3">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <img src={logo} alt="Logo" className="rounded-full h-16 bg-transparent" />
          <div className="lg:hidden" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <FaTimes className="text-gold text-3xl" /> : <FaBars className="text-gold text-3xl" />}
          </div>

          <div className="hidden lg:flex space-x-6">
            <a href="#especialidades" className="text-gray-400 hover:text-gold">
              Especialidades
            </a>
            <a href="#testemunhos" className="text-gray-400 hover:text-gold">
              Testemunhos
            </a>
            <a href="#contato" className="text-gray-400 hover:text-gold">
              Contato
            </a>
          </div>
        </div>

        <motion.div
          className="lg:hidden bg-slate-100 rounded-lg py-4 absolute top-24 left-0 right-0 z-50 shadow-2xl"
          initial={{ opacity: 0, y: 10 }}
          animate={{
            opacity: isMobileMenuOpen ? 1 : 0,
            y: isMobileMenuOpen ? 0 : 10,
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="text-center">
            <a href="#especialidades" className="block text-gray-700 py-2 px-4 hover:text-gold">
              Especialidades
            </a>
            <a href="#testemunhos" className="block text-gray-700 py-2 px-4 hover:text-gold">
              Testemunhos
            </a>
            <a href="#contato" className="block text-gray-700 py-2 px-4 hover:text-gold">
              Contato
            </a>
          </div>
        </motion.div>
      </nav>
    </header>
  );
}

export default Header;
