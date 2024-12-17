import React from "react";
import { FaWhatsapp, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#171D29] py-8">
                <div className="flex justify-center gap-8 mb-4">
          <a
            href="https://www.facebook.com" // Substitua com a URL do seu Facebook
            className="text-blue-500 hover:text-blue-700 transition duration-300"
          >
            <FaFacebook className="text-3xl" />
          </a>
          <a
            href="https://www.instagram.com" // Substitua com a URL do seu Instagram
            className="text-pink-500 hover:text-pink-700 transition duration-300"
          >
            <FaInstagram className="text-3xl" />
          </a>
          <a
            href="https://www.linkedin.com" // Substitua com a URL do seu LinkedIn
            className="text-blue-600 hover:text-blue-800 transition duration-300"
          >
            <FaLinkedin className="text-3xl" />
          </a>
        </div>
      <div className="container mx-auto px-4 text-center">
        <p className="text-lg text-gray-400">© 2024 Maria Silva - Advogada</p>
        <p className="text-sm text-gray-500">Rua Exemplo, 123 - São Paulo - SP</p>
        <p className="text-sm text-gray-500">Contato: (11) 98765-4321</p>
      </div>
    </footer>
  );
}

export default Footer;
