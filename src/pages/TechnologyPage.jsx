import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Cpu, Combine, Workflow, ArrowRight, ArrowDown, CheckCircle2 } from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import SectionHeading from '../components/ui/SectionHeading';
import SensorFusionDiagram from '../components/SensorFusionDiagram';
import PageCTA from '../components/ui/PageCTA';
import { getIcon } from '../components/ui/icons';
import { technologies, architectureFlow } from '../data/pageContent';
import heroImg from '../assets/hero-banner2.png';
import usePageMeta from '../hooks/usePageMeta';
import {
  fadeInUp,
  staggerContainer,
  cardReveal,
  viewportOnce
} from '../hooks/useScrollAnimation';

export default function TechnologyPage() {
  usePageMeta(
    'Technology',
    'SOVAR TECH integrates 3D radar, RF detection, EO/IR, AI, computer vision, sensor fusion and command & control for 360° airspace awareness.'
  );

  return (
    <>
      <PageHero
        breadcrumb="TECHNOLOGY"
        eyebrow="OUR TECHNOLOGY"
        icon={Cpu}
        title="ADVANCED TECHNOLOGY"
        accent="FOR 360° AIRSPACE AWARENESS"
        text="Our objective is to combine advanced sensing technologies, intelligent software and integrated command-and-control systems into reliable and scalable protection solutions."
        image={heroImg}
        imagePosition="65% center"
      >
        <ul className="flex flex-wrap gap-2 text-[11px] font-mono font-bold uppercase tracking-widest text-slate-300">
          {['Counter-UAS', 'Radar', 'RF', 'EO/IR', 'AI', 'Command & Control'].map((t) => (
            <li key={t} className="bg-[#0B2347]/90 border border-[#0878D1]/40 px-2.5 py-1 rounded-xs">{t}</li>
          ))}
        </ul>
      </PageHero>

      {/* Integrated approach + sensor fusion */}
      <section id="sensor-fusion" className="py-20 md:py-28 bg-white text-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-tech-grid-light opacity-50 pointer-events-none" />
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            eyebrow="INTEGRATED APPROACH"
            icon={Combine}
            title="ONE PLATFORM. MULTIPLE SENSORS."
            accent="UNIFIED AWARENESS."
            text="SOVAR systems are designed to support integration of multiple sensors and technologies. Radar, RF detection, EO/IR and AI-assisted classification are brought together through sensor fusion and command-and-control software."
            className="mb-14"
          />
          <SensorFusionDiagram />
        </div>
      </section>

      {/* Individual technologies */}
      <section id="capabilities" className="py-20 md:py-28 bg-[#F4F7FA] text-slate-800">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-slate-300/80 pb-6 gap-6">
            <SectionHeading eyebrow="CORE TECHNOLOGIES" icon={Cpu} title="THE TECHNOLOGY STACK" />
            <nav aria-label="Jump to technology" className="flex flex-wrap gap-2 md:max-w-md md:justify-end">
              {technologies.map((t) => (
                <a
                  key={t.id}
                  href={`#${t.id}`}
                  className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#0878D1] bg-white border border-[#DCE3EA] hover:border-[#0878D1] px-2 py-1 rounded-xs"
                >
                  {t.name}
                </a>
              ))}
            </nav>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {technologies.map((tech) => {
              const Icon = getIcon(tech.iconName);
              return (
                <motion.article
                  key={tech.id}
                  id={tech.id}
                  data-anchor
                  variants={cardReveal}
                  className="bg-white border border-[#DCE3EA] hover:border-[#0878D1] p-8 rounded-xs shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-xs bg-[#F4F7FA] border border-[#DCE3EA] group-hover:border-[#0878D1] group-hover:bg-[#0878D1] flex items-center justify-center transition-all duration-300">
                      <Icon className="w-7 h-7 text-[#0878D1] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <span className="text-xs font-mono text-slate-400 group-hover:text-[#0878D1] font-bold">{tech.code}</span>
                  </div>
                  <h3 className="text-xl font-extrabold text-[#071B3A] uppercase tracking-wide group-hover:text-[#0878D1] transition-colors">
                    {tech.name}
                  </h3>
                  <div className="text-xs font-extrabold text-[#0878D1] uppercase tracking-wider mt-1">{tech.role}</div>
                  <p className="text-sm text-slate-600 mt-3 mb-5 leading-relaxed">{tech.text}</p>
                  <ul className="mt-auto pt-4 border-t border-slate-100 space-y-1.5">
                    {tech.points.map((pt) => (
                      <li key={pt} className="flex items-center space-x-2 text-xs text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0878D1] shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Architecture flow */}
      <section id="architecture" className="py-20 md:py-28 bg-[#071B3A] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-tech-grid-dark opacity-40 pointer-events-none" />
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            tone="dark"
            eyebrow="SYSTEM ARCHITECTURE"
            icon={Workflow}
            title="HOW THE TECHNOLOGIES"
            accent="WORK TOGETHER"
            text="Helping operators detect, identify, track and respond to unauthorized unmanned aerial systems."
            className="mb-14"
          />

          <motion.ol
            className="grid grid-cols-1 lg:grid-cols-6 gap-4 lg:gap-0"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {architectureFlow.map((stage, i) => (
              <motion.li key={stage.step} variants={cardReveal} className="relative flex flex-col lg:flex-row items-stretch">
                <div className="flex-1 bg-[#0B2347] border border-[#0878D1]/40 hover:border-[#168BE8] rounded-xs p-5 transition-colors lg:mr-6">
                  <div className="text-[10px] font-mono font-bold text-slate-500">STAGE {String(i + 1).padStart(2, '0')}</div>
                  <h3 className="text-lg font-extrabold tracking-widest text-[#168BE8] mt-1">{stage.step}</h3>
                  <p className="text-sm text-slate-300 leading-relaxed mt-3">{stage.text}</p>
                  <div className="text-[10px] font-mono font-bold uppercase text-slate-400 mt-4 pt-3 border-t border-slate-700">
                    {stage.sources}
                  </div>
                </div>
                {i < architectureFlow.length - 1 && (
                  <>
                    <ArrowRight className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-5 h-5 text-[#168BE8]" aria-hidden="true" />
                    <ArrowDown className="lg:hidden w-5 h-5 text-[#168BE8] mx-auto mt-4" aria-hidden="true" />
                  </>
                )}
              </motion.li>
            ))}
          </motion.ol>

          <motion.div
            className="mt-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-slate-800 pt-8"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <p className="text-sm text-slate-300 max-w-2xl">
              See how these technologies come together in the SOVAR product family.
            </p>
            <Link
              to="/products"
              className="shrink-0 bg-[#0878D1] hover:bg-[#168BE8] text-white font-extrabold text-xs tracking-wider px-6 py-3.5 rounded-xs transition-colors inline-flex items-center space-x-2"
            >
              <span>VIEW ALL PRODUCTS</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      <PageCTA
        eyebrow="ENGINEERING CONSULTATION"
        title="NEED A MULTI-SENSOR SOLUTION?"
        text="Our engineering team can work with you to develop a solution suited to your operational requirements."
      />
    </>
  );
}
