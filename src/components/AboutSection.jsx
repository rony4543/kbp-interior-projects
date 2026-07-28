import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Award, ArrowRight } from 'lucide-react';
import aboutMainImg from '../assets/ -7.jpg';
import aboutDetailImg from '../assets/ -10.jpg';

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 border-t border-slate-200/60 font-sans">
      {/* Background Lighting Glows */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-amber-100/50 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-slate-200/50 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-18 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* LEFT COLUMN: Editorial Typography & Copy */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Category Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200/80 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-amber-600 animate-pulse"></span>
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-amber-700">About Us</span>
            </div>

            {/* Headline */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.18]">
              Spaces that mark <br className="hidden sm:inline" />
              <span className="italic font-normal text-amber-600 underline decoration-amber-300 decoration-wavy decoration-1 underline-offset-8">new beginnings.</span>
            </h2>

            {/* AAS Interiors Copy */}
            <div className="space-y-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              <p>
                <strong className="font-medium text-slate-900">AAS Interiors</strong> is a Mumbai-based full-service interior design studio built on a single belief: every space deserves to be beautiful — regardless of budget, size, or zip code. From our very first project to our two-hundredth, we have worked with homeowners, celebrities, and businesses who trusted us to turn their vision into a reality they live in every day.
              </p>
              <p>
                We are not just designers. We are executors. We manage everything from the first sketch to the final coat of paint — so you never have to chase contractors, manage timelines, or second-guess material quality. That is the AAS Interiors promise: <span className="text-slate-900 font-medium italic">total ownership, total accountability, total result.</span>
              </p>
            </div>

            {/* Brand Philosophy Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300 flex items-start gap-3.5 group">
                <div className="p-2.5 rounded-lg bg-amber-50 text-amber-700 shrink-0 group-hover:bg-amber-600 group-hover:text-white transition-colors duration-300">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 text-sm sm:text-base">Tailored Architectural Concepts</h4>
                  <p className="text-xs sm:text-sm text-slate-500 mt-0.5">Custom solutions matching your unique lifestyle.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300 flex items-start gap-3.5 group">
                <div className="p-2.5 rounded-lg bg-amber-50 text-amber-700 shrink-0 group-hover:bg-amber-600 group-hover:text-white transition-colors duration-300">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 text-sm sm:text-base">End-to-End Execution</h4>
                  <p className="text-xs sm:text-sm text-slate-500 mt-0.5">Total ownership from sketch to final coat of paint.</p>
                </div>
              </div>
            </div>

            {/* Statistics Counters */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-6 border-t border-slate-200/80">
              <div className="p-4 rounded-xl bg-white/80 border border-slate-200/70 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <span className="block font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">15+</span>
                <span className="text-[10px] sm:text-xs uppercase tracking-wider font-semibold text-slate-500 mt-1 block">Years Experience</span>
              </div>
              <div className="p-4 rounded-xl bg-white/80 border border-slate-200/70 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <span className="block font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">200+</span>
                <span className="text-[10px] sm:text-xs uppercase tracking-wider font-semibold text-slate-500 mt-1 block">Projects Delivered</span>
              </div>
              <div className="p-4 rounded-xl bg-white/80 border border-slate-200/70 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <span className="block font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-amber-600">24</span>
                <span className="text-[10px] sm:text-xs uppercase tracking-wider font-semibold text-slate-500 mt-1 block">Design Awards</span>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <a 
                href="#" 
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-slate-900 text-white font-semibold text-xs sm:text-sm tracking-widest uppercase transition-all duration-300 hover:bg-amber-600 hover:shadow-xl hover:shadow-amber-600/25 group"
              >
                <span>Know More About Us</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Visual Collage Showcase */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative mt-6 lg:mt-0"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Featured Image Card */}
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-slate-200/60 group">
                <img 
                  src={aboutMainImg} 
                  alt="AAS Interior Luxury Living Space" 
                  className="w-full h-[420px] sm:h-[500px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/10 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="text-xs uppercase tracking-widest font-semibold text-amber-300">Mumbai Luxury Residence</p>
                  <h3 className="font-serif text-lg sm:text-xl font-bold mt-1">Refined Minimalist Architecture</h3>
                </div>
              </div>

              {/* Overlapping Small Image Card */}
              <div className="absolute -bottom-8 -left-6 sm:-left-10 z-20 w-52 sm:w-60 rounded-xl overflow-hidden shadow-2xl border-4 border-white hidden sm:block group">
                <img 
                  src={aboutDetailImg} 
                  alt="Architectural Joinery Detail" 
                  className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Floating Award Badge */}
              <div className="absolute -top-6 -right-4 sm:-right-6 z-20 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3.5 animate-bounce-slow">
                <div className="p-3 rounded-xl bg-amber-50 text-amber-700 shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold">Awarded Studio</p>
                  <p className="text-xs sm:text-sm font-bold text-slate-900">Design Excellence 2026</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
