import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const heroContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } }
};

const heroFadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
};

// Inner-page hero. Same visual language as the homepage hero (navy gradient over
// imagery, technical grid, radar rings) at a shorter height.
export default function PageHero({
  eyebrow,
  icon: Icon,
  title,
  accent,
  text,
  breadcrumb,
  image,
  imagePosition = 'center',
  imageClassName = 'object-cover',
  children
}) {
  return (
    <section className="relative min-h-[64vh] md:min-h-[72vh] flex items-center pt-32 pb-14 md:pb-20 overflow-hidden bg-[#071B3A]">
      {/* Background image layer */}
      <div className="absolute inset-0 z-0">
        {image && (
          <motion.img
            src={image}
            alt=""
            aria-hidden="true"
            className={`w-full h-full ${imageClassName}`}
            style={{ objectPosition: imagePosition }}
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-[#071B3A] via-[#071B3A]/85 to-[#071B3A]/30 hidden lg:block" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071B3A] via-[#071B3A]/80 to-[#071B3A]/60 lg:hidden" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#071B3A] to-transparent" />
        <div className="absolute inset-0 bg-tech-grid-dark opacity-30 pointer-events-none" />
      </div>

      {/* Radar rings */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden hidden md:block" aria-hidden="true">
        <motion.div
          className="absolute top-1/2 right-[6%] -translate-y-1/2 w-[440px] h-[440px] lg:w-[520px] lg:h-[520px] rounded-full border border-[#168BE8]/25"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute inset-0 rounded-full border border-[#168BE8]/15 animate-ping-slow" />
          <div className="absolute inset-12 rounded-full border border-dashed border-[#168BE8]/30" />
          <div className="absolute inset-28 rounded-full border border-[#168BE8]/20" />
          <div className="absolute inset-0 rounded-full animate-radar-sweep">
            <div className="w-1/2 h-1/2 bg-gradient-to-br from-[#168BE8]/20 to-transparent origin-bottom-right rounded-tl-full border-r border-[#168BE8]/60" />
          </div>
        </motion.div>
      </div>

      <div className="relative z-20 max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="max-w-3xl" variants={heroContainer} initial="hidden" animate="visible">
          {breadcrumb && (
            <motion.nav variants={heroFadeUp} aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center space-x-2 text-[11px] font-mono font-bold tracking-widest uppercase text-slate-400">
                <li>
                  <Link to="/" className="hover:text-[#168BE8] transition-colors">HOME</Link>
                </li>
                <li aria-hidden="true"><ChevronRight className="w-3 h-3 text-[#0878D1]" /></li>
                <li className="text-[#168BE8]" aria-current="page">{breadcrumb}</li>
              </ol>
            </motion.nav>
          )}

          {eyebrow && (
            <motion.div
              variants={heroFadeUp}
              className="inline-flex items-center space-x-2 bg-[#0B2347]/90 border border-[#0878D1]/40 px-3.5 py-1.5 rounded-xs text-[#168BE8] text-xs font-bold tracking-widest uppercase mb-5 shadow-[0_0_15px_rgba(8,120,209,0.2)]"
            >
              {Icon && <Icon className="w-3.5 h-3.5" aria-hidden="true" />}
              <span>{eyebrow}</span>
            </motion.div>
          )}

          <motion.h1
            variants={heroFadeUp}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08] uppercase"
          >
            <span className="block">{title}</span>
            {accent && <span className="block text-[#168BE8]">{accent}</span>}
          </motion.h1>

          {text && (
            <motion.p
              variants={heroFadeUp}
              className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed mt-6 max-w-2xl border-l-4 border-[#0878D1] pl-4"
            >
              {text}
            </motion.p>
          )}

          {children && <motion.div variants={heroFadeUp} className="mt-8">{children}</motion.div>}
        </motion.div>
      </div>
    </section>
  );
}
