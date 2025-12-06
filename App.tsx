import React, { useState } from 'react';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Impact from './components/Impact';
import Team from './components/Team';
import Traction from './components/Traction';
import Navbar from './components/Navbar';
import ContactModal from './components/ContactModal';
import Footer from './components/Footer';
import ProductDemo from './components/ProductDemo';
import ContactSection from './components/ContactSection';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-bolmi-black text-bolmi-text font-sans antialiased selection:bg-bolmi-accent selection:text-bolmi-black overflow-x-hidden">
      
      {/* Background ambient light */}
      <div className="fixed top-0 left-0 w-full h-screen pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[20%] w-[600px] h-[600px] bg-bolmi-secondary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[10%] w-[500px] h-[500px] bg-bolmi-accent/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10">
        <Navbar onCtaClick={openModal} />
        
        <main>
          <Hero onCtaClick={openModal} />
          <Problem />
          <Solution />
          <ProductDemo />   
          <Impact />
          <Team />
          <Traction />
          <ContactSection /> 

        </main>

        <Footer />
      </div>

      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default App;