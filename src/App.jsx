import React from "react";
import { FaBars, FaInstagram, FaTimes, FaWhatsapp, FaStar, FaLinkedin, FaFacebook } from "react-icons/fa";
import { motion } from "framer-motion";
import logo from "/logo.png";
import "./App.css";
import { useState } from "react";

function App() {
  const testimonials = [
    {
      name: "João Pereira",
      text: "A Dra. Maria Silva foi fundamental em nosso processo de divórcio. Sua dedicação e conhecimento fizeram toda a diferença para uma solução justa para nossa família.",
    },
    {
      name: "Ana Costa",
      text: "Recebi toda a orientação necessária sobre o planejamento sucessório. A Dra. Maria Silva demonstrou grande competência e empatia durante o atendimento.",
    },
    {
      name: "Carlos Almeida",
      text: "Recomendo a Dra. Maria Silva para quem precisa de uma consultoria jurídica precisa e confiável. Ela realmente entende do assunto e oferece soluções práticas.",
    },
  ];
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = (index) => {
    if (openIndex === index) {
      setOpenIndex(null); // Fechar a caixa se a pergunta clicada já estiver aberta
    } else {
      setOpenIndex(index); // Abrir a caixa da pergunta clicada
    }
  };
  return (
    <div className="w-screen text-white relative">
      <div
        className="absolute top-0 left-0 right-0 bottom-0 z-10"
        style={{
          backgroundImage: 'url("/background1.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          filter: "brightness(70%)",
          height: "100vh",
        }}
      ></div>

      <div className="relative z-20">
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
                <a href="#testemunhos" className="block text-gray-700 py-2 px-4 hover:text-gold">
                  Testemunhos
                </a>
                <a href="#faq" className="block text-gray-700 py-2 px-4 hover:text-gold">
                  Perguntas frequentes
                </a>
                <a href="#contato" className="block text-gray-700 py-2 px-4 hover:text-gold">
                  Contato
                </a>
              </div>
            </motion.div>
          </nav>
        </header>
        <div className="flex flex-col items-center justify-center text-center h-[40rem]">
          <div className="p-2 mt-10">
            <div className="bg-black bg-opacity-65 p-3 rounded-2xl">
              <h1 className="text-3xl font-semibold text-slate-100 mb-2">Dra. Maria Silva</h1>
              <p className="text-base text-slate-200">Especialista em Direito de Família e Sucessões, atuando em divórcios, guarda de filhos, heranças e planejamento sucessório.</p>
            </div>
            <a href="https://wa.me/1234567890" className="bg-green-600 mt-2 text-white py-3 px-8 rounded-lg text-lg flex items-center justify-center gap-3 hover:bg-green-700 transition duration-300">
              <FaWhatsapp className="text-2xl" /> Fale Comigo no WhatsApp
            </a>
          </div>
        </div>
        <section id="testemunhos" className="relative py-16 bg-[#2C333C] text-center">
          {/* Forma de onda no container pai */}
          <svg className="absolute top-0 left-0 w-full transform -translate-y-1/4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="url(#wave-gradient)" d="M0,128L48,138.7C96,149,192,171,288,176C384,181,480,171,576,144C672,117,768,75,864,64C960,53,1056,75,1152,96C1248,117,1344,139,1392,150.7L1440,162V0H1392C1344,0,1248,0,1152,0C1056,0,960,0,864,21.3C768,42,672,85,576,128C480,171,384,213,288,224C192,235,96,213,48,192L0,170Z"></path>
            <defs>
              <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1F252D" />
                <stop offset="100%" stopColor="#3B4C61" />
              </linearGradient>
            </defs>
          </svg>

          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-semibold text-white mb-8">O que dizem nossos clientes</h2>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-[#242A33] p-6 rounded-lg shadow-xl mt-8">
                <p className="text-gray-300 italic mb-4">{testimonial.text}</p>
                <div className="flex items-center justify-between">
                  <h3 className="text-gold font-bold">{testimonial.name}</h3>
                  <div className="flex text-yellow-400">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section id="contato" className="py-auto bg-[#2C333C] text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-semibold text-gold mb-8">Entre em Contato</h2>
            <p className="text-lg text-gray-400 mb-6">Agende uma consulta ou tire suas dúvidas.</p>
            <a href="https://wa.me/1234567890" className="bg-green-600 text-white py-3 px-8 rounded-lg text-lg flex items-center justify-center gap-3 hover:bg-green-700 transition duration-300">
              <FaWhatsapp className="text-2xl" /> Fale Comigo no WhatsApp
            </a>
          </div>
        </section>
        <section id="faq" className="py-16 bg-[#2C333C] text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-semibold text-gold mb-8">Perguntas Frequentes</h2>
            <div className="space-y-4">
              {/* Primeira Pergunta */}
              <div className="bg-[#242A33] p-4 rounded-lg shadow-md">
                <h3 className="text-xl text-gold cursor-pointer flex items-center justify-between" onClick={() => toggleDropdown(0)}>
                  Como agendar uma consulta?
                  <span>{openIndex === 0 ? "-" : "+"}</span> {/* Ícone de abrir/fechar */}
                </h3>
                <motion.div initial={{ height: 0 }} animate={{ height: openIndex === 0 ? "auto" : 0 }} transition={{ duration: 0.3 }} className="mt-2 text-gray-400 overflow-hidden">
                  Você pode agendar uma consulta entrando em contato pelo WhatsApp ou preenchendo o formulário de contato.
                  <a
                    href="https://wa.me/1234567890" // Substitua pelo número real do WhatsApp
                    className="bg-green-600 mt-8 text-white py-2 px-3 rounded-lg text-lg flex items-center justify-center gap-3 hover:bg-green-700 transition duration-300"
                  >
                    <FaWhatsapp className="text-xl" /> <p className="text-base">Agende pelo WhatsApp</p>
                  </a>
                </motion.div>
              </div>

              {/* Segunda Pergunta */}
              <div className="bg-[#242A33] p-4 rounded-lg shadow-md">
                <h3 className="text-xl text-gold cursor-pointer flex items-center justify-between" onClick={() => toggleDropdown(1)}>
                  Quais documentos são necessários?
                  <span>{openIndex === 1 ? "-" : "+"}</span> {/* Ícone de abrir/fechar */}
                </h3>
                <motion.div initial={{ height: 0 }} animate={{ height: openIndex === 1 ? "auto" : 0 }} transition={{ duration: 0.3 }} className="mt-2 text-gray-400 overflow-hidden">
                  Dependendo do caso, os documentos podem variar. Entre em contato para mais detalhes sobre os documentos necessários.
                </motion.div>
              </div>

              {/* Terceira Pergunta */}
              <div className="bg-[#242A33] p-4 rounded-lg shadow-md">
                <h3 className="text-xl text-gold cursor-pointer flex items-center justify-between" onClick={() => toggleDropdown(2)}>
                  Quais são os valores das consultas?
                  <span>{openIndex === 2 ? "-" : "+"}</span> {/* Ícone de abrir/fechar */}
                </h3>
                <motion.div initial={{ height: 0 }} animate={{ height: openIndex === 2 ? "auto" : 0 }} transition={{ duration: 0.3 }} className="mt-2 text-gray-400 overflow-hidden">
                  O valor das consultas pode variar dependendo do tipo de atendimento. Entre em contato para mais informações sobre preços.
                </motion.div>
              </div>

              {/* Quarta Pergunta */}
              <div className="bg-[#242A33] p-4 rounded-lg shadow-md">
                <h3 className="text-xl text-gold cursor-pointer flex items-center justify-between" onClick={() => toggleDropdown(3)}>
                  Como funciona o atendimento online?
                  <span>{openIndex === 3 ? "-" : "+"}</span> {/* Ícone de abrir/fechar */}
                </h3>
                <motion.div initial={{ height: 0 }} animate={{ height: openIndex === 3 ? "auto" : 0 }} transition={{ duration: 0.3 }} className="mt-2 text-gray-400 overflow-hidden">
                  O atendimento online pode ser agendado através de chamadas por vídeo ou chat. Consulte-nos para saber mais sobre o processo.
                </motion.div>
              </div>
            </div>
          </div>
        </section>
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
            <p className="text-sm text-gray-500">Rua xxx, 000 - Campos dos Goytacazes - RJ</p>
            <p className="text-sm text-gray-500">Contato: (22) 99999-9999</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
