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
    <div className="w-screen text-white">
      <div>
      <header className="w-screen bg-[#1C2129] text-center fixed z-50">
  <nav className="bg-transparent text-slate-100 shadow-lg py-3">
    <div className="container mx-auto px-4 flex items-center justify-between">
      <img src={logo} alt="Logo" className="rounded-full h-12 bg-transparent" /> {/* Logo com altura reduzida */}
      
      {/* Botão de menu mobile */}
      <div className="lg:hidden" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <FaTimes className="text-gold text-3xl" /> : <FaBars className="text-gold text-3xl" />}
      </div>

      {/* Menu para dispositivos grandes */}
      <div className="hidden lg:flex space-x-6">
        <a href="#especialidades" className="text-gray-400 hover:text-gold" onClick={() => setIsMobileMenuOpen(false)}>
          Especialidades
        </a>
        <a href="#testemunhos" className="text-gray-400 hover:text-gold" onClick={() => setIsMobileMenuOpen(false)}>
          Testemunhos
        </a>
        <a href="#contato" className="text-gray-400 hover:text-gold" onClick={() => setIsMobileMenuOpen(false)}>
          Contato
        </a>
      </div>
    </div>

    {/* Menu mobile */}
    <motion.div
      className={`lg:hidden bg-slate-100 rounded-lg py-4 mt-2 shadow-2xl ${isMobileMenuOpen ? "block" : "hidden"}`} // Controle da visibilidade do menu
      initial={{ opacity: 0, y: 10 }}
      animate={{
        opacity: isMobileMenuOpen ? 1 : 0,
        y: isMobileMenuOpen ? 0 : 10,
      }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="text-center">
        <a href="#testemunhos" className="block text-gray-700 py-2 px-4 hover:text-gold" onClick={() => setIsMobileMenuOpen(false)}>
          Testemunhos
        </a>
        <a href="#faq" className="block text-gray-700 py-2 px-4 hover:text-gold" onClick={() => setIsMobileMenuOpen(false)}>
          Perguntas frequentes
        </a>
        <a href="#contato" className="block text-gray-700 py-2 px-4 hover:text-gold" onClick={() => setIsMobileMenuOpen(false)}>
          Contato
        </a>
      </div>
    </motion.div>
  </nav>
</header>


        <div className="bg-cover bg-center h-auto relative" style={{ backgroundImage: `url('/background1.jpg')` }}>
          <div className="flex flex-col items-center justify-center text-center h-full bg-black bg-opacity-20">
            <div className="h-screen flex flex-col justify-center m-3">
              <div className="bg-black bg-opacity-65 p-3 rounded-2xl mt-20">
                <h1 className="text-3xl font-semibold text-slate-100 mb-2">Dra. Maria Silva</h1>
                <p className="text-base text-slate-200">Especialista em Direito de Família e Sucessões, atuando em divórcios, guarda de filhos, heranças e planejamento sucessório.</p>
              </div>
              <a href="https://wa.me/1234567890" className="bg-green-600 mt-2 text-white py-3 px-8 rounded-lg text-lg flex items-center justify-center gap-3 hover:bg-green-700 transition duration-300">
                <FaWhatsapp className="text-2xl" /> Fale Comigo no WhatsApp
              </a>
            </div>
          </div>
        </div>

        <section id="testemunhos" className="py-8 bg-[#2C333C] text-center">
          <div className="container mx-auto px-4 pt-10">
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

        <section id="contato" className="py-8 bg-[#2C333C] text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-semibold text-gold mb-8">Entre em Contato</h2>
            <p className="text-lg text-gray-400 mb-6">Agende uma consulta ou tire suas dúvidas. Estamos à disposição para atender você da melhor maneira possível.</p>

            <div className="flex flex-col justify-center gap-2 mb-8">
              <div className="flex flex-col items-center">
                <h3 className="text-xl text-gold mb-1">Telefone</h3>
                <p className="text-lg text-gray-400 mb-4">(22) 99999-9999</p>
              </div>
              <div className="flex flex-col items-center">
                <h3 className="text-xl text-gold mb-1">E-mail</h3>
                <p className="text-lg text-gray-400 mb-2">contato@mariasilva.com</p>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gold mb-4">Ou envie uma mensagem diretamente</h3>
            </div>

            <div>
              <a href="https://wa.me/1234567890" className="bg-green-600 text-white py-3 px-8 rounded-lg text-lg flex items-center justify-center gap-3 hover:bg-green-700 transition duration-300">
                <FaWhatsapp className="text-2xl" /> Fale Comigo no WhatsApp
              </a>
            </div>
          </div>
        </section>

        <section id="sobre" className="py-16 bg-[#2C333C] text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-semibold text-gold mb-8">Sobre a Dra. Maria Silva</h2>

            <div className="max-w-md mx-auto bg-[#242A33] p-6 rounded-lg shadow-xl">
              <div className="flex justify-center mb-6">
                <img src="/perfil.jpg" alt="Dra. Maria Silva" className="w-52 h-52 rounded-full object-cover border-4 border-[#DECC84]" />
              </div>

              <p className="text-lg text-gray-400">Dra. Maria Silva é especialista em Direito de Família e Sucessões, com vasta experiência em casos de divórcios, guarda de filhos, heranças e planejamento sucessório. Com um compromisso de fornecer soluções jurídicas eficazes e personalizadas, ela busca sempre a melhor forma de atender seus clientes com empatia, dedicação e competência. Ao longo de sua carreira, Dra. Maria conquistou a confiança de muitos clientes, sendo reconhecida por sua abordagem humanizada e profissional.</p>
            </div>
          </div>
        </section>

        <section id="faq" className="py-8 bg-[#2C333C] text-center">
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
                  <a href="https://wa.me/1234567890" className="bg-green-600 mt-8 text-white py-2 px-3 rounded-lg text-lg flex items-center justify-center gap-3 hover:bg-green-700 transition duration-300">
                    <FaWhatsapp className="text-xl" /> <p className="text-base">Agende pelo WhatsApp</p>
                  </a>
                </motion.div>
              </div>

              {/* Segunda Pergunta */}
              <div className="bg-[#242A33] p-4 rounded-lg shadow-md">
                <h3 className="text-xl text-gold cursor-pointer flex items-center justify-between" onClick={() => toggleDropdown(1)}>
                  Quais documentos são necessários?
                  <span>{openIndex === 1 ? "-" : "+"}</span>
                </h3>
                <motion.div initial={{ height: 0 }} animate={{ height: openIndex === 1 ? "auto" : 0 }} transition={{ duration: 0.3 }} className="mt-2 text-gray-400 overflow-hidden">
                  Dependendo do caso, os documentos podem variar. Entre em contato para mais detalhes sobre os documentos necessários.
                </motion.div>
              </div>

              {/* Terceira Pergunta */}
              <div className="bg-[#242A33] p-4 rounded-lg shadow-md">
                <h3 className="text-xl text-gold cursor-pointer flex items-center justify-between" onClick={() => toggleDropdown(2)}>
                  Quais são os valores das consultas?
                  <span>{openIndex === 2 ? "-" : "+"}</span>
                </h3>
                <motion.div initial={{ height: 0 }} animate={{ height: openIndex === 2 ? "auto" : 0 }} transition={{ duration: 0.3 }} className="mt-2 text-gray-400 overflow-hidden">
                  O valor das consultas pode variar dependendo do tipo de atendimento. Entre em contato para mais informações sobre preços.
                </motion.div>
              </div>

              {/* Quarta Pergunta */}
              <div className="bg-[#242A33] p-4 rounded-lg shadow-md">
                <h3 className="text-xl text-gold cursor-pointer flex items-center justify-between" onClick={() => toggleDropdown(3)}>
                  Como funciona o atendimento online?
                  <span>{openIndex === 3 ? "-" : "+"}</span>
                </h3>
                <motion.div initial={{ height: 0 }} animate={{ height: openIndex === 3 ? "auto" : 0 }} transition={{ duration: 0.3 }} className="mt-2 text-gray-400 overflow-hidden">
                  O atendimento online pode ser agendado através de chamadas por vídeo ou chat. Consulte-nos para saber mais sobre o processo.
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <footer className="bg-[#171D29] py-16">
  <div className="container mx-auto px-4 text-center">
    {/* Redes Sociais */}
    <div className="flex justify-center gap-8 mb-8">
      <a href="https://www.facebook.com" className="text-blue-500 hover:text-blue-700 transition duration-300">
        <FaFacebook className="text-4xl" />
      </a>
      <a href="https://www.instagram.com" className="text-pink-500 hover:text-pink-700 transition duration-300">
        <FaInstagram className="text-4xl" />
      </a>
      <a href="https://www.linkedin.com" className="text-blue-600 hover:text-blue-800 transition duration-300">
        <FaLinkedin className="text-4xl" />
      </a>
      <a href="https://wa.me/1234567890" className="text-green-500 hover:text-green-700 transition duration-300">
        <FaWhatsapp className="text-4xl" />
      </a>
    </div>

    {/* Informações da Empresa */}
    <div className="text-gray-400 mb-6">
      <p className="text-lg font-semibold">Maria Silva - Advogada</p>
      <p className="text-sm">CNPJ: 12.345.678/0001-99</p>
      <p className="text-sm">Rua xxx, 000 - Campos dos Goytacazes - RJ</p>
      <p className="text-sm">Telefone: (22) 99999-9999</p>
      <p className="text-sm">E-mail: contato@mariasilva.com</p>
    </div>

    {/* Direitos Autorais */}
    <div className="text-sm text-gray-500">
      <p>© 2024 Maria Silva - Todos os direitos reservados.</p>
    </div>
  </div>
</footer>

      </div>
    </div>
  );
}

export default App;
