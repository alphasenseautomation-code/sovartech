import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Wrench, HardHat, ShieldCheck, GraduationCap, RefreshCw, ArrowRight, Settings } from 'lucide-react';
import { serviceModules } from '../data/sovarData';
import {
  fadeInUp,
  staggerContainer,
  cardReveal,
  viewportOnce
} from '../hooks/useScrollAnimation';

const iconMap = {
  Compass: Compass,
  Wrench: Wrench,
  HardHat: HardHat,
  ShieldCheck: ShieldCheck,
  GraduationCap: GraduationCap,
  RefreshCw: RefreshCw,
};

export default function ServicesSection({ onOpenContact }) {
  return (
    <section id="services" className="py-14 md:py-28 bg-[#F4F7FA] text-slate-800 relative">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-slate-300 pb-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <div>
            <motion.div variants={fadeInUp} className="inline-flex items-center space-x-2 bg-[#DCEEFF] text-[#0878D1] px-3.5 py-1.5 rounded-xs text-xs font-extrabold tracking-widest uppercase mb-3">
              <Settings className="w-3.5 h-3.5 text-[#0878D1]" />
              <span>OUR SERVICES</span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#071B3A] uppercase tracking-tight">
              FROM DESIGN TO DEPLOYMENT AND BEYOND
            </motion.h2>
          </div>

          <motion.button
            variants={fadeInUp}
            onClick={onOpenContact}
            className="mt-4 md:mt-0 inline-flex items-center space-x-2 text-xs sm:text-sm font-extrabold text-[#0878D1] hover:text-[#168BE8] tracking-wider uppercase group"
          >
            <span>INQUIRE LIFECYCLE SERVICES</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>

        {/* 6 Service Lifecycle Modules */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {serviceModules.map((service, idx) => {
            const IconComponent = iconMap[service.iconName] || Compass;
            return (
              <motion.div
                key={service.id}
                variants={cardReveal}
                className="bg-white border border-slate-200 p-8 rounded-xs shadow-sm hover:shadow-xl hover:border-[#0878D1] transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  {/* Top Icon & Step Number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-xs bg-[#F4F7FA] border border-slate-200 group-hover:bg-[#071B3A] group-hover:border-[#071B3A] flex items-center justify-center transition-all duration-300 shadow-sm">
                      <IconComponent className="w-7 h-7 text-[#0878D1] group-hover:text-[#168BE8] transition-colors" />
                    </div>
                    <span className="text-2xl font-black text-slate-300 group-hover:text-[#0878D1] font-mono transition-colors">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-[#071B3A] uppercase tracking-wide group-hover:text-[#0878D1] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-600 mt-3 font-normal leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-400 group-hover:text-[#0878D1]">
                  <span>COMPLETE LIFECYCLE</span>
                  <span>STAGE 0{idx + 1}</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
