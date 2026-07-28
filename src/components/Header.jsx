import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import logoImg from '../assets/AAS INTERIOR LOGO 1.png';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Design & Build', href: '#design-build' },
  { label: 'Manufacturing', href: '#manufacturing' },
];

export default function Header() {
  const [activeNav, setActiveNav] = useState('Home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 font-montserrat ${
        scrolled 
          ? 'py-4 px-6 lg:px-16 bg-slate-950/80 backdrop-blur-md border-b border-white/10 shadow-2xl' 
          : 'py-8 px-6 lg:px-18 bg-gradient-to-b from-black/60 to-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center h-14 transition-transform duration-300 hover:scale-105">
          <img src={logoImg} alt="AAS Interior Logo" className="h-full w-auto object-contain" />
        </a>

        {/* Navigation Pill */}
        <nav className="hidden md:flex items-center relative bg-white/5 border border-white/20 rounded-full p-1.5 backdrop-blur-md">
          <ul className="flex items-center gap-1 relative z-10">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={() => setActiveNav(item.label)}
                  className={`px-6 py-2.5 rounded-full text-xs lg:text-sm font-medium transition-all duration-300 block ${
                    activeNav === item.label
                      ? 'text-white bg-white/20 shadow-inner'
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA Button */}
        <a
          href="#contact"
          className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/35 bg-white/10 backdrop-blur-md text-white font-medium text-xs lg:text-sm tracking-wider uppercase transition-all duration-300 hover:bg-white/20 hover:border-white/60 group"
        >
          <span>Let's Talk Now</span>
          <div className="w-8 h-8 rounded-full bg-white text-slate-950 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </div>
        </a>
      </div>
    </header>
  );
}
