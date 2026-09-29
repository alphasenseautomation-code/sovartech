import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Lightbulb, CheckCircle2, FlaskConical } from 'lucide-react';
import rdLabImg from '../assets/rd-lab.jpg';
import { rdTopics } from '../data/sovarData';
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  cardReveal,
  viewportOnce
} from '../hooks/useScrollAnimation';

export default function ResearchSection({ onOpenContact }) {
  return (
    <section id="rd" className="py-20 md:py-28 bg-white text-slate-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-tech-grid-light opacity-50 pointer-events-none" />

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
            <motion.div variants={fadeInUp} className="inline-flex items-center space-x-2 bg-[#DCEEFF] text-[#0878D1] px-3.5 py-1.5 rounded-xs text-xs font-extrabold tracking-widest uppercase">
              <FlaskConical className="w-3.5 h-3.5 text-[#0878D1]" />
              <span>RESEARCH &amp; DEVELOPMENT</span>
            </motion.div>

            <motion.h2 variants={fadeInUp} className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#071B3A] uppercase tracking-tight leading-tight">
              INNOVATION FOR FUTURE THREATS
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              At SOVAR TECH, continuous innovation drives our defense engineering. Our R&amp;D team pioneers next-generation sensor fusion, micro-Doppler signal processing, and autonomous counter-drone algorithms to stay ahead of fast-evolving airborne security challenges.
            </motion.p>

            {/* R&D Topic Tags Grid */}
            <motion.div variants={staggerContainer} className="pt-2">
              <motion.h3 variants={fadeInUp} className="text-xs font-extrabold text-[#071B3A] uppercase tracking-widest mb-3">
                CORE R&amp;D FOCUS AREAS:
              </motion.h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {rdTopics.map((topic, index) => (
                  <motion.div
                    key={index}
                    variants={cardReveal}
                    className="flex items-center space-x-2 p-3 bg-[#F4F7FA] border border-[#DCE3EA] rounded-xs hover:border-[#0878D1] transition-colors"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#0878D1] shrink-0" />
                    <span className="text-xs font-bold text-[#071B3A] uppercase tracking-wider">
                      {topic}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="pt-4">
              <button
                onClick={onOpenContact}
                className="inline-flex items-center space-x-3 bg-[#0878D1] hover:bg-[#168BE8] text-white font-extrabold text-xs sm:text-sm tracking-wider px-7 py-3.5 rounded-xs transition-all duration-300 shadow-lg hover:shadow-xl group"
              >
                <span>EXPLORE OUR R&amp;D COLLABORATIONS</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </motion.div>

          {/* Right Column R&D Lab Image */}
          <motion.div
            className="lg:col-span-6 relative"
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <div className="relative rounded-xs overflow-hidden border border-[#DCE3EA] shadow-2xl group">
              <img
                src={rdLabImg}
                alt="SOVAR TECH R&D Laboratory and Engineering Lab"
                className="w-full h-[420px] sm:h-[480px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071B3A]/80 via-transparent to-transparent" />

              {/* R&D Lab Telemetry Badge */}
              <div className="absolute top-4 left-4 bg-[#071B3A]/90 backdrop-blur-md border border-[#0878D1]/40 px-3 py-1.5 rounded-xs text-[10px] font-mono text-[#168BE8]">
                R&amp;D LAB // KOCHI FACILITY
              </div>

              <div className="absolute bottom-6 left-6 right-6 bg-[#071B3A]/95 backdrop-blur-md border-l-4 border-[#0878D1] p-4 text-white">
                <div className="text-xs font-mono text-[#168BE8] uppercase font-bold tracking-wider">PROPRIETARY ALGORITHM BENCH</div>
                <div className="text-sm font-bold text-white mt-1">Multi-Sensor AI Threat Classification Engine</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
