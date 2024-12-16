import React from "react";
import { FaWhatsapp } from "react-icons/fa";

function ContactSection() {
  return (
    <section id="contato" className="py-16 bg-[#2C333C] text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold text-gold mb-8">Entre em Contato</h2>
        <p className="text-lg text-gray-400 mb-6">Agende uma consulta ou tire suas dúvidas.</p>
        <a
          href="https://wa.me/1234567890"
          className="bg-green-600 text-white py-3 px-8 rounded-lg text-lg flex items-center justify-center gap-3 hover:bg-green-700 transition duration-300"
        >
          <FaWhatsapp className="text-2xl" /> Fale Comigo no WhatsApp
        </a>
      </div>
    </section>
  );
}

export default ContactSection;
