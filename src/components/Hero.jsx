import React from 'react';
import { motion } from 'framer-motion';
import heroBg from '../assets/aas.png';

export default function Hero() {
  return (
    <section id="home" className="relative w-full h-screen overflow-hidden flex items-center justify-start">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="AAS Interiors Architectural Workspace" 
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-black/35 backdrop-brightness-95"></div>
      </div>

      {/* Hero Typography */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-18 w-full">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
          className="text-white font-sans font-light text-4xl sm:text-6xl lg:text-8xl leading-tight tracking-tight max-w-4xl"
        >
          From blueprint to<br />
          <span className="font-chillax italic font-normal">beautifully built</span><br />
          <span className="text-amber-300 italic font-serif">spaces</span>
        </motion.h1>
      </div>

      {/* Subtle Bottom Scroll Hint */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-8 lg:left-18 z-10 flex items-center gap-3 text-white/70 text-xs tracking-widest uppercase font-mono"
      >
        <span className="w-8 h-[1px] bg-white/40"></span>
        <span>AAS Interior & Architecture Studio</span>
      </motion.div>
    </section>
  );
}
