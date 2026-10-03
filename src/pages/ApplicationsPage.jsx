import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Globe, ArrowRight, Crosshair } from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import SectionHeading from '../components/ui/SectionHeading';
import PageCTA from '../components/ui/PageCTA';
import { getIcon } from '../components/ui/icons';
import { sectors } from '../data/pageContent';
import { products } from '../data/sovarData';
import heroImg from '../assets/sector-tanker.jpg';
import usePageMeta from '../hooks/usePageMeta';
import {
  fadeInUp,
  staggerContainer,
  viewportOnce
} from '../hooks/useScrollAnimation';

const productById = Object.fromEntries(products.map((p) => [p.id, p]));

export default function ApplicationsPage() {
  usePageMeta(
    'Applications',
    'Counter-UAS protection for maritime, oil & gas, offshore, ports & terminals and critical infrastructure environments.'
  );

  return (
    <>
      <PageHero
        breadcrumb="APPLICATIONS"
        eyebrow="APPLICATIONS"
        icon={Globe}
        title="PROTECTION ACROSS"
        accent="CRITICAL ENVIRONMENTS"
        text="We develop integrated solutions for ships, oil & gas facilities, offshore platforms, ports, terminals, industrial facilities and critical infrastructure."
        image={heroImg}
        imagePosition="75% center"
      >
        <nav aria-label="Application sectors">
          <ul className="flex flex-wrap gap-2">
            {sectors.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="inline-block text-[11px] font-mono font-bold uppercase tracking-widest text-slate-200 bg-[#0B2347]/90 border border-[#0878D1]/40 hover:border-[#168BE8] hover:text-[#168BE8] px-2.5 py-1 rounded-xs transition-colors"
                >
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </PageHero>

      <section className="py-12 md:py-20 bg-white text-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-tech-grid-light opacity-50 pointer-events-none" />
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            eyebrow="WHERE WE PROTECT"
            icon={Crosshair}
            title="APPLICATION-SPECIFIC"
            accent="AIRSPACE PROTECTION"
            text="The increasing use of unmanned aerial systems creates new security challenges for maritime, offshore, industrial and critical infrastructure environments. Solutions can be engineered around vessel type, platform configuration, operational environment and customer requirements."
          />
        </div>
      </section>

      {/* Sector bands */}
      <div className="bg-[#071B3A]">
        {sectors.map((sector, i) => {
          const Icon = getIcon(sector.iconName);
          const rightAligned = i % 2 === 1;
          return (
            <section
              key={sector.id}
              id={sector.id}
              className="relative min-h-[560px] md:min-h-[620px] flex items-center overflow-hidden border-t border-[#0878D1]/30"
              aria-labelledby={`${sector.id}-title`}
            >
              {/* Cinematic image */}
              <img
                src={sector.image}
                alt=""
                aria-hidden="true"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ objectPosition: sector.imagePosition }}
              />
              <div
                className={`absolute inset-0 hidden md:block ${
                  rightAligned
                    ? 'bg-gradient-to-l from-[#071B3A] from-35% via-[#071B3A]/80 via-55% to-[#071B3A]/10'
                    : 'bg-gradient-to-r from-[#071B3A] from-35% via-[#071B3A]/80 via-55% to-[#071B3A]/10'
                }`}
              />
              <div className="absolute inset-0 md:hidden bg-gradient-to-t from-[#071B3A] via-[#071B3A]/90 to-[#071B3A]/75" />
              <div className="absolute inset-0 bg-tech-grid-dark opacity-25 pointer-events-none" />

              {/* Technical overlay: target reticle */}
              <div
                className={`absolute top-1/2 -translate-y-1/2 hidden lg:block pointer-events-none ${rightAligned ? 'left-[12%]' : 'right-[12%]'}`}
                aria-hidden="true"
              >
                <div className="relative w-64 h-64 rounded-full border border-[#168BE8]/40">
                  <div className="absolute inset-8 rounded-full border border-dashed border-[#168BE8]/40" />
                  <div className="absolute inset-0 rounded-full animate-ping-slow border border-[#168BE8]/20" />
                  <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#168BE8]/30" />
                  <div className="absolute top-1/2 left-0 right-0 h-px bg-[#168BE8]/30" />
                  <div className="absolute inset-0 rounded-full animate-radar-sweep">
                    <div className="w-1/2 h-1/2 bg-gradient-to-br from-[#168BE8]/25 to-transparent origin-bottom-right rounded-tl-full border-r border-[#168BE8]/70" />
                  </div>
                </div>
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#071B3A]/90 border border-[#0878D1]/40 px-3 py-1 text-[10px] font-mono font-bold text-[#168BE8] tracking-widest rounded-xs">
                  360° AIRSPACE AWARENESS
                </div>
              </div>

              <div className="relative z-10 max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
                <motion.div
                  className={`max-w-xl ${rightAligned ? 'md:ml-auto' : ''}`}
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOnce}
                >
                  <motion.div variants={fadeInUp} className="flex items-center space-x-3">
                    <span className="w-12 h-12 rounded-xs bg-[#0878D1]/20 border border-[#168BE8]/50 flex items-center justify-center shadow-[0_0_15px_rgba(22,139,232,0.35)]">
                      <Icon className="w-6 h-6 text-[#168BE8]" />
                    </span>
                    <span className="text-xs font-mono font-bold text-[#168BE8] tracking-widest">
                      SECTOR {String(i + 1).padStart(2, '0')} // SECURE
                    </span>
                  </motion.div>

                  <motion.h2 variants={fadeInUp} id={`${sector.id}-title`} className="text-4xl sm:text-5xl font-extrabold text-white uppercase tracking-tight mt-6">
                    {sector.title}
                  </motion.h2>
                  <motion.div variants={fadeInUp} className="w-20 h-1 bg-[#0878D1] rounded-full mt-4" />
                  <motion.p variants={fadeInUp} className="text-base sm:text-lg text-slate-300 leading-relaxed mt-5">
                    {sector.text}
                  </motion.p>

                  <motion.ul variants={fadeInUp} className="flex flex-wrap gap-2 mt-6">
                    {sector.items.map((item) => (
                      <li key={item} className="text-xs font-bold uppercase tracking-wider text-white bg-[#0B2347]/90 border border-[#0878D1]/40 px-3 py-1.5 rounded-xs">
                        {item}
                      </li>
                    ))}
                  </motion.ul>

                  <motion.div variants={fadeInUp} className="mt-8 pt-6 border-t border-slate-700/80">
                    <div className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest mb-3">RELATED SOLUTIONS</div>
                    <div className="flex flex-wrap gap-3">
                      {sector.related.map((pid) => (
                        <Link
                          key={pid}
                          to={`/products#${pid}`}
                          className="inline-flex items-center space-x-2 text-xs font-extrabold text-[#168BE8] hover:text-white tracking-wider uppercase group"
                        >
                          <span>{productById[pid].name}</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </section>
          );
        })}
      </div>

      <PageCTA
        eyebrow="CONSULT FOR YOUR DOMAIN"
        title="PROTECT YOUR OPERATIONS"
        text="Tell us about your vessel, platform or facility and our engineering team will work with you on a solution suited to your operational requirements."
      />
    </>
  );
}
