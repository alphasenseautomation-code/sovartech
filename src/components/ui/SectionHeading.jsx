import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, viewportOnce } from '../../hooks/useScrollAnimation';

// Section header matching the homepage pattern: eyebrow chip, uppercase heading, blue accent line.
export default function SectionHeading({
  eyebrow,
  icon: Icon,
  title,
  accent,
  text,
  tone = 'light',
  align = 'left',
  className = '',
  children
}) {
  const dark = tone === 'dark';
  const centered = align === 'center';

  return (
    <motion.div
      className={`${centered ? 'max-w-3xl mx-auto text-center' : 'max-w-3xl'} ${className}`}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      {eyebrow && (
        <motion.div
          variants={fadeInUp}
          className={`inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-xs text-xs font-extrabold tracking-widest uppercase mb-4 ${
            dark
              ? 'bg-[#0B2347] border border-[#0878D1]/40 text-[#168BE8]'
              : 'bg-[#DCEEFF] text-[#0878D1]'
          }`}
        >
          {Icon && <Icon className="w-3.5 h-3.5" aria-hidden="true" />}
          <span>{eyebrow}</span>
        </motion.div>
      )}

      <motion.h2
        variants={fadeInUp}
        className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-tight leading-tight ${
          dark ? 'text-white' : 'text-[#071B3A]'
        }`}
      >
        {title}
        {accent && (
          <span className={`block ${dark ? 'text-[#168BE8]' : 'text-[#0878D1]'}`}>{accent}</span>
        )}
      </motion.h2>

      <motion.div
        variants={fadeInUp}
        className={`w-20 h-1 bg-[#0878D1] rounded-full mt-5 ${centered ? 'mx-auto' : ''}`}
      />

      {text && (
        <motion.p
          variants={fadeInUp}
          className={`text-base sm:text-lg font-normal leading-relaxed mt-5 ${
            dark ? 'text-slate-300' : 'text-slate-600'
          }`}
        >
          {text}
        </motion.p>
      )}

      {children}
    </motion.div>
  );
}
