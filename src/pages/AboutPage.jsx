import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Target, Telescope, Award, Building, ChevronRight } from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import SectionHeading from '../components/ui/SectionHeading';
import PageCTA from '../components/ui/PageCTA';
import { getIcon } from '../components/ui/icons';
import { about, companyChain, primaryMarkets } from '../data/pageContent';
import { companyDetails } from '../data/sovarData';
// app-infrastructure.jpg shows the protected LNG / tanker fleet
import aboutFleetImg from '../assets/app-infrastructure.jpg';
import usePageMeta from '../hooks/usePageMeta';
import {
  fadeInUp,
  fadeInRight,
  staggerContainer,
  cardReveal,
  viewportOnce
} from '../hooks/useScrollAnimation';

export default function AboutPage() {
  usePageMeta(
    'About Us',
    'SOVAR TECH PRIVATE LIMITED is an Indian technology and engineering company focused on Counter-UAS, radar, RF detection, EO/IR surveillance and integrated security solutions.'
  );

  return (
    <>
      <PageHero
        breadcrumb="ABOUT US"
        eyebrow="WHO WE ARE"
        icon={ShieldCheck}
        title="ABOUT SOVAR TECH"
        accent="ADVANCED AIR & MARITIME PROTECTION"
        text={companyDetails.description}
        image={aboutFleetImg}
        imagePosition="70% center"
      >
        <ol className="flex flex-wrap items-center gap-y-2 text-[11px] font-mono font-bold uppercase tracking-widest text-slate-300" aria-label="Company capabilities">
          {companyChain.map((step, i) => (
            <li key={step} className="flex items-center">
              <span className="bg-[#0B2347]/90 border border-[#0878D1]/40 px-2.5 py-1 rounded-xs">{step}</span>
              {i < companyChain.length - 1 && <ChevronRight className="w-3.5 h-3.5 text-[#168BE8] mx-1" aria-hidden="true" />}
            </li>
          ))}
        </ol>
      </PageHero>

      {/* 01 — Who We Are */}
      <section id="who-we-are" className="py-14 md:py-28 bg-white text-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-tech-grid-light opacity-60 pointer-events-none" />
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-7">
            <SectionHeading eyebrow="01 — WHO WE ARE" icon={Building} title="ENGINEERING TECHNOLOGY" accent="FOR A SAFER TOMORROW" />
            <motion.div
              className="space-y-5 mt-6"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              {about.whoWeAre.map((para) => (
                <motion.p key={para.slice(0, 24)} variants={fadeInUp} className="text-base text-slate-600 leading-relaxed">
                  {para}
                </motion.p>
              ))}

              <motion.div variants={fadeInUp} className="pt-2">
                <h3 className="text-xs font-extrabold text-[#071B3A] uppercase tracking-widest mb-3">OUR PRIMARY MARKETS</h3>
                <ul className="flex flex-wrap gap-2">
                  {primaryMarkets.map((m) => (
                    <li key={m} className="text-xs font-bold uppercase tracking-wider text-[#071B3A] bg-[#F4F7FA] border-l-4 border-[#0878D1] px-3 py-2 rounded-xs">
                      {m}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </div>

          {/* Capability chain panel */}
          <motion.aside
            className="lg:col-span-5 bg-[#071B3A] text-white p-8 rounded-xs border border-[#0878D1]/40 shadow-2xl relative overflow-hidden"
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <div className="absolute inset-0 bg-tech-grid-dark opacity-40 pointer-events-none" />
            <div className="relative">
              <div className="text-[10px] font-mono text-[#168BE8] uppercase font-bold tracking-widest">END-TO-END CAPABILITY</div>
              <h3 className="text-xl font-extrabold uppercase tracking-wide mt-1">From Research to Deployment</h3>
              <ol className="mt-6 relative border-l border-[#0878D1]/40 ml-3 space-y-5">
                {companyChain.map((step, i) => (
                  <li key={step} className="pl-6 relative">
                    <span className="absolute -left-[13px] top-0 w-6 h-6 rounded-full bg-[#0B2347] border border-[#168BE8] text-[10px] font-mono font-bold text-[#168BE8] flex items-center justify-center">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="text-sm font-bold uppercase tracking-wider text-slate-100">{step}</span>
                  </li>
                ))}
              </ol>
              <p className="mt-8 pt-5 border-t border-slate-700 text-lg font-extrabold uppercase tracking-wider text-[#168BE8]">
                Detect. Identify. Track. Protect.
              </p>
            </div>
          </motion.aside>
        </div>
      </section>

      {/* 02 & 03 — Mission & Vision */}
      <section id="mission" className="py-14 md:py-28 bg-[#F4F7FA] text-slate-800">
        <motion.div
          className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.article variants={cardReveal} className="bg-[#071B3A] text-white p-8 md:p-10 rounded-xs border border-[#0878D1]/40 shadow-xl relative overflow-hidden">
            <div className="absolute -right-24 -top-24 w-72 h-72 rounded-full border border-[#168BE8]/20 pointer-events-none" />
            <div className="absolute -right-12 -top-12 w-48 h-48 rounded-full border border-dashed border-[#168BE8]/25 pointer-events-none" />
            <div className="relative">
              <div className="flex items-center space-x-3">
                <span className="w-12 h-12 rounded-xs bg-[#0878D1]/20 border border-[#168BE8]/50 flex items-center justify-center">
                  <Target className="w-6 h-6 text-[#168BE8]" />
                </span>
                <span className="text-xs font-mono font-bold text-[#168BE8] tracking-widest">02 — OUR MISSION</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight mt-6">{about.mission.title}</h2>
              <div className="w-16 h-1 bg-[#0878D1] rounded-full mt-4" />
              <div className="space-y-4 mt-6">
                {about.mission.paragraphs.map((p) => (
                  <p key={p.slice(0, 24)} className="text-sm sm:text-base text-slate-300 leading-relaxed">{p}</p>
                ))}
              </div>
            </div>
          </motion.article>

          <motion.article id="vision" variants={cardReveal} className="bg-white p-8 md:p-10 rounded-xs border border-[#DCE3EA] shadow-xl relative overflow-hidden">
            <div className="absolute inset-0 bg-tech-grid-light opacity-60 pointer-events-none" />
            <div className="relative">
              <div className="flex items-center space-x-3">
                <span className="w-12 h-12 rounded-xs bg-[#DCEEFF] border border-[#0878D1]/30 flex items-center justify-center">
                  <Telescope className="w-6 h-6 text-[#0878D1]" />
                </span>
                <span className="text-xs font-mono font-bold text-[#0878D1] tracking-widest">03 — OUR VISION</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight mt-6 text-[#071B3A]">{about.vision.title}</h2>
              <div className="w-16 h-1 bg-[#0878D1] rounded-full mt-4" />
              <div className="space-y-4 mt-6">
                {about.vision.paragraphs.map((p) => (
                  <p key={p.slice(0, 24)} className="text-sm sm:text-base text-slate-600 leading-relaxed">{p}</p>
                ))}
              </div>
            </div>
          </motion.article>
        </motion.div>
      </section>

      {/* 04–09 — Why SOVAR TECH */}
      <section id="why-sovar" className="py-14 md:py-28 bg-[#071B3A] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-tech-grid-dark opacity-40 pointer-events-none" />
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            tone="dark"
            eyebrow="04 — WHY SOVAR TECH"
            icon={ShieldCheck}
            title="WHY SOVAR TECH"
            text="We combine R&D, engineering, manufacturing and system integration to develop application-specific airspace protection solutions."
            className="mb-14"
          />

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {about.pillars.map((pillar, i) => {
              const Icon = getIcon(pillar.iconName);
              return (
                <motion.article
                  key={pillar.id}
                  id={pillar.id}
                  data-anchor
                  variants={cardReveal}
                  className="group bg-[#0B2347] border border-slate-800 hover:border-[#168BE8] p-6 rounded-xs transition-all duration-300 hover:shadow-[0_0_25px_rgba(8,120,209,0.25)] flex flex-col"
                >
                  <div className="flex items-center justify-between mb-6">
                    <span className="w-12 h-12 rounded-xs bg-[#071B3A] border border-[#0878D1]/40 group-hover:bg-[#0878D1] flex items-center justify-center transition-colors">
                      <Icon className="w-6 h-6 text-[#168BE8] group-hover:text-white transition-colors" />
                    </span>
                    <span className="text-2xl font-black font-mono text-slate-700 group-hover:text-[#168BE8] transition-colors">
                      {String(i + 5).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="text-base font-extrabold uppercase tracking-wide group-hover:text-[#168BE8] transition-colors">{pillar.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed mt-3">{pillar.text}</p>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* 10 — Our Values */}
      <section id="values" className="py-14 md:py-28 bg-white text-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-tech-grid-light opacity-50 pointer-events-none" />
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading eyebrow="10 — OUR VALUES" icon={Award} title="OUR VALUES" align="center" className="mb-14" />
          <motion.ul
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-[#DCE3EA] border border-[#DCE3EA] rounded-xs overflow-hidden"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {about.values.map((value, i) => (
              <motion.li key={value.title} variants={cardReveal} className="group bg-white hover:bg-[#F4F7FA] p-8 transition-colors">
                <span className="text-xs font-mono font-bold text-slate-400 group-hover:text-[#0878D1]">V-{String(i + 1).padStart(2, '0')}</span>
                <h3 className="text-lg font-extrabold text-[#071B3A] uppercase tracking-wide mt-3">{value.title}</h3>
                <div className="w-10 h-0.5 bg-[#0878D1] mt-3 group-hover:w-16 transition-all duration-300" />
                <p className="text-sm text-slate-600 leading-relaxed mt-4">{value.text}</p>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      <PageCTA
        eyebrow="PARTNER WITH SOVAR TECH"
        title="LET'S BUILD A SAFER TOMORROW"
        text="Talk to our engineering team about protecting your vessels, facilities and operations."
      />
    </>
  );
}
