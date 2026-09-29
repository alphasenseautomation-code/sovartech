import React from 'react';
import { motion } from 'framer-motion';
import { FlaskConical, Microscope, Factory, TrendingUp, CheckCircle2, ChevronRight } from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import SectionHeading from '../components/ui/SectionHeading';
import PageCTA from '../components/ui/PageCTA';
import { getIcon } from '../components/ui/icons';
import { rdModules, manufacturingApproach } from '../data/pageContent';
import heroImg from '../assets/network-globe.png';
import c2ConsoleImg from '../assets/product-c2.jpg';
import usePageMeta from '../hooks/usePageMeta';
import {
  fadeInUp,
  fadeInLeft,
  staggerContainer,
  cardReveal,
  viewportOnce
} from '../hooks/useScrollAnimation';

const developmentPath = ['Research', 'Design', 'Prototype', 'Engineering', 'Testing'];

export default function ResearchPage() {
  usePageMeta(
    'Research & Development',
    'SOVAR TECH R&D: radar, RF sensing, AI & machine learning, computer vision, sensor fusion, embedded systems, command & control and maritime surveillance.'
  );

  return (
    <>
      <PageHero
        breadcrumb="R&D"
        eyebrow="RESEARCH & DEVELOPMENT"
        icon={FlaskConical}
        title="BUILDING THE NEXT GENERATION"
        accent="OF AIRSPACE PROTECTION"
        text="SOVAR TECH is committed to developing indigenous capabilities in advanced sensing, surveillance and Counter-UAS technologies."
        image={heroImg}
        imagePosition="center bottom"
        imageClassName="object-contain opacity-70"
      />

      {/* R&D focus */}
      <section id="focus" className="py-20 md:py-28 bg-white text-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-tech-grid-light opacity-50 pointer-events-none" />
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-14 items-end">
            <SectionHeading
              eyebrow="OUR R&D FOCUS"
              icon={Microscope}
              title="TECHNOLOGY"
              accent="RESEARCH MODULES"
              className="lg:col-span-7"
            />
            <motion.p
              className="lg:col-span-5 text-base text-slate-600 leading-relaxed border-l-4 border-[#0878D1] pl-4"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              Our R&amp;D approach allows us to develop application-specific solutions for maritime, offshore and industrial environments — developing and adapting technologies for real-world conditions.
            </motion.p>
          </div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {rdModules.map((mod, i) => {
              const Icon = getIcon(mod.iconName);
              return (
                <motion.article
                  key={mod.name}
                  variants={cardReveal}
                  className="group relative bg-[#F4F7FA] border border-[#DCE3EA] hover:border-[#0878D1] p-6 rounded-xs transition-all duration-300 hover:shadow-xl overflow-hidden"
                >
                  <div className="absolute -right-10 -top-10 w-32 h-32 rounded-full border border-dashed border-[#0878D1]/0 group-hover:border-[#0878D1]/30 transition-colors duration-500" aria-hidden="true" />
                  <div className="flex items-center justify-between">
                    <span className="w-12 h-12 rounded-xs bg-white border border-[#DCE3EA] group-hover:bg-[#071B3A] group-hover:border-[#071B3A] flex items-center justify-center transition-colors">
                      <Icon className="w-6 h-6 text-[#0878D1] group-hover:text-[#168BE8]" />
                    </span>
                    <span className="text-[10px] font-mono font-bold text-slate-400 group-hover:text-[#0878D1]">R&amp;D-{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <h3 className="text-base font-extrabold text-[#071B3A] uppercase tracking-wide mt-6 group-hover:text-[#0878D1] transition-colors">
                    {mod.name}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mt-2">{mod.text}</p>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Engineering lab */}
      <section id="engineering" className="py-20 md:py-28 bg-[#071B3A] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-tech-grid-dark opacity-40 pointer-events-none" />
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Visual */}
          <motion.div
            className="lg:col-span-6 relative"
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <div className="relative rounded-xs overflow-hidden border border-[#0878D1]/40 shadow-2xl">
              <img
                src={c2ConsoleImg}
                alt="Operators at a multi-sensor command and control console"
                className="w-full h-[380px] sm:h-[460px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071B3A] via-[#071B3A]/20 to-transparent" />
              {/* Corner brackets */}
              <span className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-[#168BE8]" aria-hidden="true" />
              <span className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-[#168BE8]" aria-hidden="true" />
              <span className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-[#168BE8]" aria-hidden="true" />
              <span className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-[#168BE8]" aria-hidden="true" />
              <div className="absolute bottom-8 left-8 right-8 bg-[#071B3A]/90 backdrop-blur-md border-l-4 border-[#0878D1] p-4">
                <div className="text-[10px] font-mono text-[#168BE8] uppercase font-bold tracking-widest">ENGINEERING &amp; INTEGRATION</div>
                <div className="text-sm font-bold text-white mt-1">Hardware, software and systems engineering combined</div>
              </div>
            </div>
          </motion.div>

          {/* Copy */}
          <div className="lg:col-span-6">
            <SectionHeading
              tone="dark"
              eyebrow="FROM CONCEPT TO FIELD DEPLOYMENT"
              icon={Factory}
              title="ENGINEERING"
              accent="& MANUFACTURING"
              text="SOVAR TECH is developing capabilities for the manufacturing, assembly, integration and testing of advanced electronic and security systems."
            />
            <motion.div
              className="mt-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              <motion.h3 variants={fadeInUp} className="text-xs font-extrabold text-[#168BE8] uppercase tracking-widest mb-4">
                OUR MANUFACTURING APPROACH FOCUSES ON
              </motion.h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {manufacturingApproach.map((item) => (
                  <motion.li
                    key={item}
                    variants={cardReveal}
                    className="flex items-center space-x-2 p-3 bg-[#0B2347] border border-slate-800 hover:border-[#0878D1] rounded-xs transition-colors"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#168BE8] shrink-0" />
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-200">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Building for emerging threats */}
      <section id="emerging-threats" className="py-20 md:py-28 bg-[#F4F7FA] text-slate-800">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="LOOKING AHEAD"
            icon={TrendingUp}
            title="BUILDING FOR"
            accent="EMERGING THREATS"
            text="We aim to build scalable technologies that can evolve with emerging aerial threats and operational requirements — combining sensing, intelligence, software and engineering into integrated protection systems."
            align="center"
            className="mb-14"
          />

          <motion.ol
            className="flex flex-col lg:flex-row items-stretch justify-center gap-3 lg:gap-0 max-w-md lg:max-w-none mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            aria-label="Development path"
          >
            {developmentPath.map((step, i) => (
              <motion.li key={step} variants={cardReveal} className="flex flex-col lg:flex-row items-center">
                <div className="w-full lg:w-36 xl:w-44 bg-white border border-[#DCE3EA] hover:border-[#0878D1] rounded-xs p-5 text-center transition-colors shadow-sm">
                  <div className="text-[10px] font-mono font-bold text-[#0878D1]">{String(i + 1).padStart(2, '0')}</div>
                  <div className="text-sm font-extrabold text-[#071B3A] uppercase tracking-wider mt-1">{step}</div>
                </div>
                {i < developmentPath.length - 1 && (
                  <ChevronRight className="w-5 h-5 text-[#0878D1] rotate-90 lg:rotate-0 my-1 lg:my-0 lg:mx-2 shrink-0" aria-hidden="true" />
                )}
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </section>

      <PageCTA
        eyebrow="ENGINEERING COLLABORATION"
        title="TALK TO OUR ENGINEERING TEAM"
        text="Discuss your operational requirements with the SOVAR TECH engineering team."
        buttonLabel="TALK TO OUR ENGINEERING TEAM"
      />
    </>
  );
}
