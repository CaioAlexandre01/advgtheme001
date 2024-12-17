import React from "react";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import TestimonialSection from "./components/TestimonialSection";
import ContactSection from "./components/ContactSection";
import FAQSection from "./components/FaqSection";
import Footer from "./components/Footer";
import "./App.css";

function App() {
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
        <Header />
        <Introduction />
        <TestimonialSection />
        <ContactSection />
        <FAQSection />
        <Footer />
      </div>
    </div>
  );
}

export default App;
