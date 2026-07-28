import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-amber-400 selection:text-slate-950">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main>
        <Hero />
        <AboutSection />
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-16 px-6 lg:px-18 border-t border-slate-800 font-montserrat">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-white text-lg font-bold">AAS Interiors</h3>
            <p className="text-xs text-slate-500 mt-1">Total ownership, total accountability, total result.</p>
          </div>
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} AAS Interiors & Architecture. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
