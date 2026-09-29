import React from 'react';
import { motion } from 'framer-motion';
import { Settings, Workflow, Network, Wrench } from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import SectionHeading from '../components/ui/SectionHeading';
import PageCTA from '../components/ui/PageCTA';
import { getIcon } from '../components/ui/icons';
import { lifecycle, services, integrationScope } from '../data/pageContent';
import heroImg from '../assets/app-ports.jpg';
import usePageMeta from '../hooks/usePageMeta';
import {
  staggerContainer,
  staggerContainerFast,
  cardReveal,
  viewportOnce
} from '../hooks/useScrollAnimation';

// Presentation grouping of the ten lifecycle stages.
const phases = [
  { name: 'DEVELOP', span: 3 },
  { name: 'BUILD', span: 4 },
  { name: 'DEPLOY', span: 2 },
  { name: 'SUSTAIN', span: 1 }
];

export default function ServicesPage() {
  usePageMeta(
    'Services',
    'SOVAR TECH services: engineering, system integration, installation & commissioning, maintenance, upgrades, training and technical support.'
  );

  return (
    <>
      <PageHero
        breadcrumb="SERVICES"
        eyebrow="OUR SERVICES"
        icon={Settings}
        title="FROM ENGINEERING"
        accent="TO FIELD DEPLOYMENT"
        text="SOVAR TECH provides end-to-end engineering capabilities from concept and design through manufacturing, integration, testing and deployment."
        image={heroImg}
        imagePosition="80% center"
      />

      {/* Lifecycle */}
      <section id="lifecycle" className="py-20 md:py-28 bg-white text-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-tech-grid-light opacity-60 pointer-events-none" />
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            eyebrow="SYSTEM LIFECYCLE"
            icon={Workflow}
            title="THE COMPLETE"
            accent="ENGINEERING LIFECYCLE"
            text="We aim to develop modular systems that can be adapted to different vessels, platforms, ports and critical infrastructure environments — and support them across the complete system lifecycle."
            className="mb-16"
          />

          {/* Desktop: horizontal track */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-10 gap-0 mb-4" aria-hidden="true">
              {phases.map((p) => (
                <div key={p.name} style={{ gridColumn: `span ${p.span}` }} className="px-2">
                  <div className="border-t-2 border-x-2 border-[#0878D1]/40 h-3 rounded-t-xs" />
                  <div className="text-[10px] font-mono font-bold text-[#0878D1] tracking-widest text-center mt-1">{p.name}</div>
                </div>
              ))}
            </div>
            <motion.ol
              className="grid grid-cols-10 relative"
              variants={staggerContainerFast}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              aria-label="Lifecycle stages"
            >
              <div className="absolute left-[5%] right-[5%] top-7 h-0.5 bg-gradient-to-r from-[#0878D1] via-[#168BE8] to-[#0878D1]" aria-hidden="true" />
              {lifecycle.map((stage, i) => (
                <motion.li key={stage} variants={cardReveal} className="relative flex flex-col items-center text-center px-1 group">
                  <span className="relative z-10 w-14 h-14 rounded-full bg-[#071B3A] border-2 border-[#168BE8] text-[#168BE8] font-mono text-sm font-bold flex items-center justify-center shadow-[0_0_15px_rgba(22,139,232,0.4)] group-hover:bg-[#0878D1] group-hover:text-white transition-colors">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="mt-4 text-xs font-extrabold text-[#071B3A] uppercase tracking-wider group-hover:text-[#0878D1] transition-colors">
                    {stage}
                  </span>
                </motion.li>
              ))}
            </motion.ol>
          </div>

          {/* Mobile / tablet: vertical track */}
          <motion.ol
            className="lg:hidden relative border-l-2 border-[#0878D1]/50 ml-5 space-y-5"
            variants={staggerContainerFast}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            aria-label="Lifecycle stages"
          >
            {lifecycle.map((stage, i) => (
              <motion.li key={stage} variants={cardReveal} className="relative pl-8">
                <span className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-[#071B3A] border-2 border-[#168BE8] text-[#168BE8] font-mono text-[11px] font-bold flex items-center justify-center">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="block pt-1.5 text-sm font-extrabold text-[#071B3A] uppercase tracking-wider">{stage}</span>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </section>

      {/* Services */}
      <section id="services-list" className="py-20 md:py-28 bg-[#F4F7FA] text-slate-800">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="WHAT WE DELIVER" icon={Wrench} title="ENGINEERING SERVICES" className="mb-14" />
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {services.map((svc, i) => {
              const Icon = getIcon(svc.iconName);
              return (
                <motion.article
                  key={svc.id}
                  id={svc.id}
                  data-anchor
                  variants={cardReveal}
                  className={`bg-white border border-slate-200 p-7 rounded-xs shadow-sm hover:shadow-xl hover:border-[#0878D1] transition-all duration-300 group flex flex-col ${
                    i === 0 ? 'lg:col-span-2 lg:row-span-1' : ''
                  }`}
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-xs bg-[#F4F7FA] border border-slate-200 group-hover:bg-[#071B3A] group-hover:border-[#071B3A] flex items-center justify-center transition-all duration-300">
                      <Icon className="w-7 h-7 text-[#0878D1] group-hover:text-[#168BE8] transition-colors" />
                    </div>
                    <span className="text-2xl font-black text-slate-300 group-hover:text-[#0878D1] font-mono transition-colors">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="text-lg font-extrabold text-[#071B3A] uppercase tracking-wide group-hover:text-[#0878D1] transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-sm text-slate-600 mt-3 leading-relaxed">{svc.text}</p>
                  <div className="mt-auto pt-6">
                    <div className="pt-4 border-t border-slate-100 text-[10px] font-mono text-slate-400 group-hover:text-[#0878D1] uppercase">
                      SRV-{String(i + 1).padStart(2, '0')} // LIFECYCLE SUPPORT
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Integration scope */}
      <section id="system-integration" className="py-20 md:py-28 bg-[#071B3A] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-tech-grid-dark opacity-40 pointer-events-none" />
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <SectionHeading
              tone="dark"
              eyebrow="SYSTEM INTEGRATION"
              icon={Network}
              title="COMPLETE SYSTEM"
              accent="INTEGRATION SERVICES"
              text="From the first site or vessel survey to lifecycle support, SOVAR TECH provides complete system integration services."
            />
          </div>
          <motion.ol
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-px bg-slate-800 border border-slate-800 rounded-xs overflow-hidden"
            variants={staggerContainerFast}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {integrationScope.map((item, i) => (
              <motion.li key={item} variants={cardReveal} className="bg-[#0B2347] hover:bg-[#0B2347]/60 p-4 flex items-center space-x-4 transition-colors sm:[&:last-child:nth-child(odd)]:col-span-2">
                <span className="text-xs font-mono font-bold text-[#168BE8] w-6 shrink-0">{String(i + 1).padStart(2, '0')}</span>
                <span className="text-sm font-semibold text-slate-200">{item}</span>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </section>

      <PageCTA
        eyebrow="LIFECYCLE SERVICES"
        title="PLAN YOUR DEPLOYMENT"
        text="From engineering and installation to commissioning, upgrades and maintenance, we support the complete system lifecycle."
      />
    </>
  );
}
