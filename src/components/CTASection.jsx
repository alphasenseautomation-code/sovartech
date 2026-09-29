import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import banner2Img from '../assets/hero-banner2.png';
import {
  fadeInUp,
  staggerContainer,
  viewportOnce
} from '../hooks/useScrollAnimation';

// Text props default to the homepage copy; dedicated pages pass their own.
export default function CTASection({
  onOpenContact,
  eyebrow = 'COMMENCE PARTNERSHIP',
  title = "LET'S BUILD A SAFER TOMORROW",
  text = 'Partner with SOVAR TECH to protect your vessels, assets and operations with advanced Counter-UAS solutions.',
  buttonLabel = 'GET IN TOUCH'
}) {
  return (
    <section className="relative py-24 md:py-32 bg-[#071B3A] text-white overflow-hidden">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0 opacity-40">
        <img
          src={banner2Img}
          alt="SOVAR TECH Maritime Defense Shield"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071B3A] via-[#071B3A]/90 to-[#071B3A]/70" />
        <div className="absolute inset-0 bg-tech-grid-dark opacity-40" />
      </div>

      {/* Radar Overlay Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-[#168BE8]/20 rounded-full pointer-events-none animate-ping-slow" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          className="max-w-3xl mx-auto space-y-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center space-x-2 bg-[#0B2347] border border-[#0878D1]/40 px-4 py-1.5 rounded-xs text-[#168BE8] text-xs font-extrabold tracking-widest uppercase">
            <ShieldCheck className="w-4 h-4 text-[#168BE8]" />
            <span>{eyebrow}</span>
          </motion.div>

          <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight leading-tight">
            {title}
          </motion.h2>

          <motion.p variants={fadeInUp} className="text-base sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto">
            {text}
          </motion.p>

          <motion.div variants={fadeInUp} className="pt-4">
            <button
              onClick={onOpenContact}
              className="inline-flex items-center space-x-3 bg-[#0878D1] hover:bg-[#168BE8] text-white font-black text-sm tracking-widest px-9 py-4 rounded-xs shadow-[0_0_25px_rgba(8,120,209,0.6)] hover:shadow-[0_0_35px_rgba(22,139,232,0.9)] transition-all duration-300 transform hover:-translate-y-0.5 group uppercase"
            >
              <span>{buttonLabel}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
