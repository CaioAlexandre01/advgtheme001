import React from "react";
import { FaWhatsapp } from "react-icons/fa";

function Introduction() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-[12.7rem]">
      <div className="p-2 mt-10">
        <div className="bg-black bg-opacity-65 p-3 rounded-2xl">
          <h1 className="text-3xl font-semibold text-slate-100 mb-2">Dra. Maria Silva</h1>
          <p className="text-base text-slate-200">
            Especialista em Direito de Família e Sucessões, atuando em divórcios, guarda de filhos, heranças e planejamento sucessório.
          </p>
        </div>
        <a
          href="https://wa.me/1234567890"
          className="bg-green-600 mt-2 text-white py-3 px-8 rounded-lg text-lg flex items-center justify-center gap-3 hover:bg-green-700 transition duration-300"
        >
          <FaWhatsapp className="text-2xl" /> Fale Comigo no WhatsApp
        </a>
      </div>
    </div>
  );
}

export default Introduction;
