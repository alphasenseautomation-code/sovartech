import React from 'react';
import { motion } from 'framer-motion';
import { Radio, Wifi, Eye, Cpu, Combine, MonitorCheck, CpuIcon, ArrowRight } from 'lucide-react';
import { techModules } from '../data/sovarData';
import {
  fadeInUp,
  staggerContainer,
  cardReveal,
  viewportOnce
} from '../hooks/useScrollAnimation';

const iconMap = {
  Radio: Radio,
  Wifi: Wifi,
  Eye: Eye,
  Cpu: Cpu,
  Combine: Combine,
  MonitorCheck: MonitorCheck,
};

export default function TechnologySection({ onOpenContact }) {
  return (
    <section id="technology" className="py-14 md:py-28 bg-white text-slate-800 relative overflow-hidden">
      {/* Background Engineering Grid */}
      <div className="absolute inset-0 bg-tech-grid-light opacity-50 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          className="max-w-3xl mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center space-x-2 bg-[#DCEEFF] text-[#0878D1] px-3.5 py-1.5 rounded-xs text-xs font-extrabold tracking-widest uppercase mb-4">
            <CpuIcon className="w-3.5 h-3.5 text-[#0878D1]" />
            <span>OUR TECHNOLOGY</span>
          </motion.div>

          <motion.h2 variants={fadeInUp} className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#071B3A] uppercase tracking-tight leading-tight">
            MULTI-SENSOR INTEGRATION
          </motion.h2>

          <motion.h3 variants={fadeInUp} className="text-xl sm:text-2xl font-bold text-[#0878D1] uppercase tracking-wider mt-1">
            FOR 360° AIRSPACE AWARENESS
          </motion.h3>

          <motion.p variants={fadeInUp} className="text-base sm:text-lg text-slate-600 font-normal mt-4 leading-relaxed">
            We integrate radar, RF detection, EO/IR sensors, AI and advanced software to deliver comprehensive situational awareness and drone threat detection.
          </motion.p>
        </motion.div>

        {/* 6 Technology Modules Grid */}
        <div className="relative">
          {/* Animated SVG Network Connection Lines */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none z-0">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M 200 150 L 600 150 L 1000 150"
                stroke="#0878D1"
                strokeWidth="1.5"
                strokeDasharray="6 6"
                fill="none"
                opacity="0.3"
              />
              <path
                d="M 200 380 L 600 380 L 1000 380"
                stroke="#0878D1"
                strokeWidth="1.5"
                strokeDasharray="6 6"
                fill="none"
                opacity="0.3"
              />
              <path
                d="M 600 150 L 600 380"
                stroke="#0878D1"
                strokeWidth="2"
                fill="none"
                opacity="0.4"
              />
            </svg>
          </div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {techModules.map((item, index) => {
              const IconComponent = iconMap[item.iconName] || Radio;
              return (
                <motion.div
                  key={item.id}
                  variants={cardReveal}
                  className="bg-[#F4F7FA] border border-[#DCE3EA] hover:border-[#0878D1] p-8 rounded-xs shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
                >
                  <div>
                    {/* Top Row: Tech Icon & Module Code */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-xs bg-white border border-[#DCE3EA] group-hover:border-[#0878D1] group-hover:bg-[#0878D1] flex items-center justify-center transition-all duration-300 shadow-sm">
                        <IconComponent className="w-7 h-7 text-[#0878D1] group-hover:text-white transition-colors duration-300" />
                      </div>
                      <span className="text-xs font-mono text-slate-400 group-hover:text-[#0878D1] font-bold">
                        MOD-0{index + 1}
                      </span>
                    </div>

                    <h3 className="text-xl font-extrabold text-[#071B3A] uppercase tracking-wide group-hover:text-[#0878D1] transition-colors">
                      {item.name}
                    </h3>

                    <div className="text-xs font-extrabold text-[#0878D1] uppercase tracking-wider mt-1">
                      {item.role}
                    </div>

                    <p className="text-sm text-slate-600 mt-3 font-normal leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs font-mono text-slate-500">
                    <span>SENS-LINK ACTIVE</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Bottom CTA Banner */}
        <motion.div
          className="mt-16 bg-[#071B3A] text-white p-8 rounded-xs border border-[#0878D1]/40 flex flex-col lg:flex-row items-center justify-between shadow-2xl"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <div className="mb-6 lg:mb-0">
            <h4 className="text-xl font-extrabold uppercase tracking-wide">
              NEED CUSTOM MULTI-SENSOR FUSION?
            </h4>
            <p className="text-sm text-slate-300 mt-1 max-w-2xl">
              Our engineering team integrates legacy RADAR, AIS, and optical systems into a unified C2 management console.
            </p>
          </div>
          <button
            onClick={onOpenContact}
            className="shrink-0 bg-[#0878D1] hover:bg-[#168BE8] text-white font-extrabold text-xs tracking-wider px-6 py-3.5 rounded-xs transition-colors flex items-center space-x-2"
          >
            <span>REQUEST SYSTEM ARCHITECTURE</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
