import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Layers, Radar, Navigation } from 'lucide-react';
import {
  staggerContainerFast,
  scaleIn,
  viewportOnce
} from '../hooks/useScrollAnimation';

const bandMetrics = [
  {
    value: "360°",
    label: "AIRSPACE SURVEILLANCE",
    icon: Radar
  },
  {
    value: "MULTI-SENSOR",
    label: "INTEGRATION",
    icon: Layers
  },
  {
    value: "RELIABLE & SCALABLE",
    label: "SOLUTIONS",
    icon: Shield
  },
  {
    value: "DEPLOYABLE ACROSS",
    label: "MARITIME, OFFSHORE & LAND",
    icon: Navigation
  }
];

export default function CapabilityBand() {
  return (
    <section className="bg-[#0B2347] border-y border-[#0878D1]/40 py-14 text-white relative overflow-hidden shadow-2xl">
      {/* Subtle Dark Grid */}
      <div className="absolute inset-0 bg-tech-grid-dark opacity-30 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-800"
          variants={staggerContainerFast}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {bandMetrics.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={idx}
                variants={scaleIn}
                className={`flex flex-col items-center text-center p-4 ${
                  idx !== 0 ? 'sm:pl-8' : ''
                }`}
              >
                <div className="w-10 h-10 rounded-full bg-[#0878D1]/20 border border-[#168BE8]/50 flex items-center justify-center mb-3">
                  <IconComp className="w-5 h-5 text-[#168BE8]" />
                </div>

                <div className="text-2xl sm:text-3xl font-black text-white tracking-tight uppercase font-heading">
                  {item.value}
                </div>

                <div className="text-xs font-extrabold text-[#168BE8] uppercase tracking-widest mt-1">
                  {item.label}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
