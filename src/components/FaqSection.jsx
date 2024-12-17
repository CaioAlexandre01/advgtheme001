import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index) => {
    if (openIndex === index) {
      setOpenIndex(null); // Fechar a caixa se a pergunta clicada já estiver aberta
    } else {
      setOpenIndex(index); // Abrir a caixa da pergunta clicada
    }
  };

  return (
    <section id="faq" className="py-16 bg-[#2C333C] text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold text-gold mb-8">Perguntas Frequentes</h2>
        <div className="space-y-4">
          {/* Primeira Pergunta */}
          <div className="bg-[#242A33] p-4 rounded-lg shadow-md">
            <h3
              className="text-xl text-gold cursor-pointer flex items-center justify-between"
              onClick={() => toggleDropdown(0)}
            >
              Como agendar uma consulta?
              <span>{openIndex === 0 ? "-" : "+"}</span> {/* Ícone de abrir/fechar */}
            </h3>
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: openIndex === 0 ? "auto" : 0 }}
              transition={{ duration: 0.3 }}
              className="mt-2 text-gray-400 overflow-hidden"
            >
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
            <h3
              className="text-xl text-gold cursor-pointer flex items-center justify-between"
              onClick={() => toggleDropdown(1)}
            >
              Quais documentos são necessários?
              <span>{openIndex === 1 ? "-" : "+"}</span> {/* Ícone de abrir/fechar */}
            </h3>
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: openIndex === 1 ? "auto" : 0 }}
              transition={{ duration: 0.3 }}
              className="mt-2 text-gray-400 overflow-hidden"
            >
              Dependendo do caso, os documentos podem variar. Entre em contato para mais detalhes sobre os documentos necessários.
            </motion.div>
          </div>

          {/* Terceira Pergunta */}
          <div className="bg-[#242A33] p-4 rounded-lg shadow-md">
            <h3
              className="text-xl text-gold cursor-pointer flex items-center justify-between"
              onClick={() => toggleDropdown(2)}
            >
              Quais são os valores das consultas?
              <span>{openIndex === 2 ? "-" : "+"}</span> {/* Ícone de abrir/fechar */}
            </h3>
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: openIndex === 2 ? "auto" : 0 }}
              transition={{ duration: 0.3 }}
              className="mt-2 text-gray-400 overflow-hidden"
            >
              O valor das consultas pode variar dependendo do tipo de atendimento. Entre em contato para mais informações sobre preços.
            </motion.div>
          </div>

          {/* Quarta Pergunta */}
          <div className="bg-[#242A33] p-4 rounded-lg shadow-md">
            <h3
              className="text-xl text-gold cursor-pointer flex items-center justify-between"
              onClick={() => toggleDropdown(3)}
            >
              Como funciona o atendimento online?
              <span>{openIndex === 3 ? "-" : "+"}</span> {/* Ícone de abrir/fechar */}
            </h3>
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: openIndex === 3 ? "auto" : 0 }}
              transition={{ duration: 0.3 }}
              className="mt-2 text-gray-400 overflow-hidden"
            >
              O atendimento online pode ser agendado através de chamadas por vídeo ou chat. Consulte-nos para saber mais sobre o processo.
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
