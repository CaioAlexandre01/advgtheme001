import React from "react";
import { FaStar } from "react-icons/fa";

function TestimonialSection() {
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

  return (
    <section id="testemunhos" className="py-16 bg-[#2C333C] text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold text-gold mb-8">O que dizem nossos clientes</h2>
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
  );
}

export default TestimonialSection;
