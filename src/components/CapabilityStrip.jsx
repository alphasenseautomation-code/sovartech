import React from 'react';
import { motion } from 'framer-motion';
import { Radar, Crosshair, ShieldAlert, Building2, Layers } from 'lucide-react';
import { capabilities } from '../data/sovarData';
import {
  staggerContainerFast,
  cardReveal,
  viewportOnce
} from '../hooks/useScrollAnimation';

const iconMap = {
  Radar: Radar,
  Crosshair: Crosshair,
  ShieldAlert: ShieldAlert,
  Building2: Building2,
  Layers: Layers,
};

export default function CapabilityStrip() {
  return (
    <section className="bg-[#071B3A] border-y border-[#0878D1]/30 relative z-30 shadow-2xl">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-800/80"
          variants={staggerContainerFast}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {capabilities.map((item, idx) => {
            const IconComponent = iconMap[item.iconName] || Radar;
            return (
              <motion.div
                key={item.id}
                variants={cardReveal}
                className={`flex items-center space-x-4 p-3 md:p-4 rounded-xs transition-all duration-300 group cursor-pointer hover:bg-[#0B2347]/80 ${
                  idx !== 0 ? 'sm:pl-6' : ''
                }`}
              >
                {/* Icon Container with Glow */}
                <div className="w-12 h-12 rounded-xs bg-[#0B2347] border border-[#0878D1]/40 flex items-center justify-center shrink-0 group-hover:border-[#168BE8] group-hover:bg-[#0878D1]/20 group-hover:shadow-[0_0_15px_rgba(22,139,232,0.5)] transition-all duration-300">
                  <IconComponent className="w-6 h-6 text-[#168BE8] group-hover:scale-110 transition-transform duration-300" />
                </div>

                {/* Text Content */}
                <div>
                  <h3 className="text-xs lg:text-sm font-extrabold text-white tracking-wider group-hover:text-[#168BE8] transition-colors uppercase">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5 font-normal line-clamp-1">
                    {item.subtitle}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
