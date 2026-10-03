import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Globe } from 'lucide-react';
import { applications } from '../data/sovarData';
import {
  fadeInUp,
  staggerContainer,
  cardReveal,
  viewportOnce
} from '../hooks/useScrollAnimation';

export default function ApplicationsSection({ onOpenContact, onSelectApplication }) {
  return (
    <section id="applications" className="py-14 md:py-28 bg-[#071B3A] text-white relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-tech-grid-dark opacity-40 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-slate-800 pb-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <div>
            <motion.div variants={fadeInUp} className="inline-flex items-center space-x-2 bg-[#0B2347] border border-[#0878D1]/40 text-[#168BE8] px-3.5 py-1.5 rounded-xs text-xs font-extrabold tracking-widest uppercase mb-3">
              <Globe className="w-3.5 h-3.5 text-[#168BE8]" />
              <span>APPLICATIONS</span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white uppercase tracking-tight">
              PROTECTING CRITICAL ASSETS ACROSS INDUSTRIES
            </motion.h2>
          </div>

          <motion.button
            variants={fadeInUp}
            onClick={onOpenContact}
            className="mt-4 md:mt-0 inline-flex items-center space-x-2 text-xs sm:text-sm font-extrabold text-[#168BE8] hover:text-white tracking-wider uppercase group"
          >
            <span>CONSULT FOR YOUR DOMAIN</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>

        {/* Applications Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {applications.map((app, index) => (
            <motion.div
              key={app.id}
              variants={cardReveal}
              onClick={() => onSelectApplication?.(app)}
              className={`group relative rounded-xs overflow-hidden border border-slate-800 hover:border-[#168BE8] transition-all duration-500 shadow-xl cursor-pointer ${
                index === 0 ? 'lg:col-span-2 h-[380px]' : 'h-[380px]'
              }`}
            >
              {/* Image */}
              <img
                src={app.image}
                alt={app.title}
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
              />

              {/* Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#071B3A] via-[#071B3A]/60 to-transparent" />
              <div className="absolute inset-0 bg-[#0878D1]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* HUD Target Badge */}
              <div className="absolute top-4 right-4 bg-[#071B3A]/90 backdrop-blur-md border border-[#168BE8]/40 px-3 py-1 rounded-xs text-[10px] font-mono text-[#168BE8] uppercase font-bold tracking-wider">
                DOM-{index + 1} // SECURE
              </div>

              {/* Card Bottom Content */}
              <div className="absolute bottom-0 inset-x-0 p-6 flex flex-col justify-end">
                <h3 className="text-xl sm:text-2xl font-extrabold text-white group-hover:text-[#168BE8] transition-colors uppercase tracking-wider">
                  {app.title}
                </h3>
                <p className="text-xs font-mono text-[#168BE8] mt-1 uppercase tracking-wider">
                  {app.subtitle}
                </p>
                <p className="text-sm text-slate-300 mt-2 font-normal line-clamp-2 opacity-90">
                  {app.description}
                </p>

                <div className="mt-4 inline-flex items-center space-x-2 text-xs font-bold text-white group-hover:text-[#168BE8] transition-colors">
                  <span>DISCOVER SECTOR ARCHITECTURE</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
