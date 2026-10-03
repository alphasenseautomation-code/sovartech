import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Cpu, Anchor } from 'lucide-react';
import aboutVesselImg from '../assets/sovar5.jpg';
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  cardReveal,
  viewportOnce
} from '../hooks/useScrollAnimation';

export default function AboutSection({ onOpenContact }) {
  return (
    <section id="about" className="py-14 md:py-28 bg-white text-slate-800 relative overflow-hidden">
      {/* Subtle Light Engineering Grid Background */}
      <div className="absolute inset-0 bg-tech-grid-light opacity-60 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column Content */}
          <motion.div
            className="lg:col-span-6 space-y-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center space-x-2 bg-[#F4F7FA] border border-[#DCE3EA] px-3.5 py-1.5 rounded-xs text-[#0878D1] text-xs font-extrabold tracking-widest uppercase">
              <ShieldCheck className="w-3.5 h-3.5 text-[#0878D1]" />
              <span>ADVANCED AIR &amp; MARITIME PROTECTION</span>
            </motion.div>

            <motion.h2 variants={fadeInUp} className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#071B3A] leading-tight tracking-tight uppercase">
              <span className="block">ENGINEERING</span>
              <span className="block text-[#0878D1]">TECHNOLOGY</span>
              <span className="block">FOR A SAFER TOMORROW</span>
            </motion.h2>

            <motion.div variants={fadeInUp} className="w-20 h-1 bg-[#0878D1] rounded-full" />

            <motion.p variants={fadeInUp} className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              SOVAR TECH is an engineering and technology company focused on research, development, design, manufacturing, system integration and deployment of advanced Counter-Unmanned Aircraft Systems (C-UAS) and security technologies.
            </motion.p>

            <motion.p variants={fadeInUp} className="text-sm sm:text-base text-slate-600 leading-relaxed">
              We specialize in multi-sensor airspace surveillance platforms engineered to defend high-value commercial vessels, offshore energy terminals, seaports, and critical infrastructure against evolving airborne threats.
            </motion.p>

            {/* Highlights Grid */}
            <motion.div variants={staggerContainer} className="grid grid-cols-2 gap-4 pt-2">
              <motion.div variants={cardReveal} className="p-4 bg-[#F4F7FA] border-l-4 border-[#0878D1] rounded-xs">
                <div className="flex items-center space-x-2 text-[#071B3A] font-extrabold text-sm">
                  <Anchor className="w-4 h-4 text-[#0878D1]" />
                  <span>Maritime Defense</span>
                </div>
                <p className="text-xs text-slate-500 mt-1">Ruggedized naval airspace protection</p>
              </motion.div>

              <motion.div variants={cardReveal} className="p-4 bg-[#F4F7FA] border-l-4 border-[#0878D1] rounded-xs">
                <div className="flex items-center space-x-2 text-[#071B3A] font-extrabold text-sm">
                  <Cpu className="w-4 h-4 text-[#0878D1]" />
                  <span>R&amp;D Innovation</span>
                </div>
                <p className="text-xs text-slate-500 mt-1">In-house sensor fusion &amp; AI algorithms</p>
              </motion.div>
            </motion.div>

            <motion.div variants={fadeInUp} className="pt-4">
              <button
                onClick={onOpenContact}
                className="inline-flex items-center space-x-3 bg-[#071B3A] hover:bg-[#0B2347] text-white font-extrabold text-xs sm:text-sm tracking-wider px-7 py-3.5 rounded-xs transition-all duration-300 group shadow-md hover:shadow-xl"
              >
                <span>LEARN MORE ABOUT US</span>
                <ArrowRight className="w-4 h-4 text-[#168BE8] group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </motion.div>

          {/* Right Column Image */}
          <motion.div
            className="lg:col-span-6 relative"
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <div className="relative rounded-xs overflow-hidden border border-[#DCE3EA] shadow-2xl group">
              <img
                src={aboutVesselImg}
                alt="SOVAR TECH Maritime Vessel Defense System"
                className="w-full h-[400px] sm:h-[480px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              {/* Technical Overlay Graphics */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#071B3A]/80 via-transparent to-transparent opacity-60" />

              {/* Top Right HUD Coordinates */}
              <div className="absolute top-4 right-4 bg-[#071B3A]/85 backdrop-blur-md border border-[#0878D1]/40 px-3 py-1.5 rounded-xs text-[10px] font-mono text-slate-300">
                <span className="text-[#168BE8] font-bold">LAT: 09°58'N</span> | <span className="text-slate-300">LON: 76°16'E</span>
              </div>

              {/* Bottom Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-[#071B3A]/90 backdrop-blur-md border-l-4 border-[#0878D1] p-4 text-white">
                <div className="text-xs font-mono text-[#168BE8] uppercase font-bold tracking-widest">SOVAR DEFENSE ARCHITECTURE</div>
                <div className="text-sm font-bold text-white mt-0.5">360° Airspace Perimeter Shield</div>
              </div>
            </div>

            {/* Vertical Side Typography */}
            <div className="hidden sm:flex absolute -right-6 md:-right-10 top-1/2 -translate-y-1/2 flex-col space-y-3 font-extrabold text-2xl lg:text-3xl tracking-widest text-slate-300/30 select-none uppercase pointer-events-none">
              <span className="hover:text-[#0878D1] transition-colors duration-300">Detect.</span>
              <span className="hover:text-[#0878D1] transition-colors duration-300">Identify.</span>
              <span className="hover:text-[#0878D1] transition-colors duration-300">Track.</span>
              <span className="hover:text-[#0878D1] transition-colors duration-300">Protect.</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
