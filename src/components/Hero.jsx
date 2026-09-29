import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Shield, Radar, Target, Wifi, Activity } from 'lucide-react';
import heroBgImg from '../assets/hero-bg.png';

// Hero entrance variants (fires on load, not on scroll)
const heroContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.3 }
  }
};

const heroFadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  }
};

const heroFadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.9 }
  }
};

export default function Hero({ onOpenVideo, onOpenContact }) {
  const [activeTarget, setActiveTarget] = useState('TRK-01');
  const [isScanning, setIsScanning] = useState(true);

  const targets = [
    { id: 'TRK-01', type: 'MICRO-UAV', range: '2.4 KM', status: 'HOSTILE', alt: '120m', pos: { top: '22%', right: '35%' } },
    { id: 'TRK-02', type: 'QUADCOPTER', range: '4.1 KM', status: 'UNKNOWN', alt: '250m', pos: { top: '28%', right: '12%' } },
    { id: 'TRK-03', type: 'FIXED-WING', range: '7.8 KM', status: 'MONITORED', alt: '400m', pos: { top: '55%', right: '20%' } },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#071B3A]">
      {/* Background Image Layer */}
      <motion.div
        className="absolute inset-0 z-0"
        variants={heroFadeIn}
        initial="hidden"
        animate="visible"
      >
        <img
          src={heroBgImg}
          alt="Maritime LNG Facility with C-UAS Protection"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000"
        />
        {/* Dark Navy Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#071B3A] via-[#071B3A]/85 to-transparent z-10 hidden lg:block" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071B3A] via-[#071B3A]/70 to-[#071B3A]/50 z-10 lg:hidden" />
        <div className="absolute inset-0 bg-tech-grid-dark opacity-30 z-10 pointer-events-none" />
      </motion.div>

      {/* Interactive HUD Overlay Elements */}
      <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden hidden md:block">
        {/* Animated Radar Scanning Arc (Right Side) */}
        <motion.div
          className="absolute top-1/2 right-[10%] -translate-y-1/2 w-[550px] h-[550px] lg:w-[650px] lg:h-[650px] rounded-full border border-[#168BE8]/30 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute inset-0 rounded-full border border-[#168BE8]/20 animate-ping-slow" />
          <div className="absolute inset-12 rounded-full border border-dashed border-[#168BE8]/40" />
          <div className="absolute inset-28 rounded-full border border-[#168BE8]/30" />

          {/* Rotating Radar Beam */}
          <div className={`absolute inset-0 rounded-full ${isScanning ? 'animate-radar-sweep' : ''}`}>
            <div className="w-1/2 h-1/2 bg-gradient-to-br from-[#168BE8]/25 to-transparent origin-bottom-right rounded-tl-full border-r border-[#168BE8]" />
          </div>

          {/* Center Sensor Mast HUD Pulse */}
          <div className="relative w-12 h-12 rounded-full border-2 border-[#168BE8] bg-[#071B3A]/80 flex items-center justify-center shadow-[0_0_20px_#168BE8]">
            <Radar className="w-6 h-6 text-[#168BE8] animate-spin" style={{ animationDuration: '8s' }} />
          </div>
        </motion.div>

        {/* Dynamic Target HUD Tracking Indicators */}
        {targets.map((target) => {
          const isSelected = activeTarget === target.id;
          return (
            <div
              key={target.id}
              style={{ top: target.pos.top, right: target.pos.right }}
              className="absolute pointer-events-auto cursor-pointer group"
              onClick={() => setActiveTarget(target.id)}
            >
              <div className={`relative p-2 transition-all duration-300 ${isSelected ? 'scale-110' : 'opacity-80 group-hover:opacity-100'}`}>
                {/* Tactical Target Box */}
                <div className={`w-10 h-10 border-2 relative flex items-center justify-center ${
                  target.status === 'HOSTILE' ? 'border-red-500 shadow-[0_0_12px_rgba(239,68,68,0.6)]' : 'border-[#168BE8] shadow-[0_0_12px_rgba(22,139,232,0.6)]'
                }`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${target.status === 'HOSTILE' ? 'bg-red-500 animate-ping' : 'bg-[#168BE8]'}`} />
                </div>

                {/* Target Data Tag */}
                <div className="absolute left-12 top-0 bg-[#071B3A]/90 backdrop-blur-md border border-slate-700 p-2 rounded-xs text-[10px] font-mono text-slate-200 min-w-[130px] shadow-lg">
                  <div className="flex justify-between items-center text-[#168BE8] font-bold">
                    <span>{target.id}</span>
                    <span className={target.status === 'HOSTILE' ? 'text-red-400 font-extrabold' : 'text-amber-400'}>
                      [{target.status}]
                    </span>
                  </div>
                  <div className="text-slate-300">TYP: {target.type}</div>
                  <div className="text-slate-400">RNG: {target.range} | ALT: {target.alt}</div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Live System Telemetry HUD Bar */}
        <div className="absolute bottom-6 right-8 bg-[#0B2347]/90 backdrop-blur-md border border-[#0878D1]/40 px-4 py-2.5 rounded-xs flex items-center space-x-6 text-xs font-mono text-slate-300">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-slate-400">C-UAS STATUS:</span>
            <span className="text-emerald-400 font-bold">ACTIVE SCAN</span>
          </div>
          <div className="flex items-center space-x-2 border-l border-slate-700 pl-4">
            <Activity className="w-3.5 h-3.5 text-[#168BE8]" />
            <span className="text-slate-400">FREQ:</span>
            <span className="text-slate-200">2.4 / 5.8 GHz</span>
          </div>
          <button
            onClick={() => setIsScanning(!isScanning)}
            className="pointer-events-auto text-[10px] bg-[#0878D1]/30 hover:bg-[#0878D1]/60 text-[#168BE8] border border-[#0878D1] px-2 py-0.5 rounded-xs transition-colors"
          >
            {isScanning ? 'PAUSE SCAN' : 'RESUME SCAN'}
          </button>
        </div>
      </div>

      {/* Hero Main Content Area */}
      <div className="relative z-30 max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-2xl lg:max-w-3xl"
          variants={heroContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Eyebrow */}
          <motion.div
            variants={heroFadeUp}
            className="inline-flex items-center space-x-2 bg-[#0B2347]/90 border border-[#0878D1]/40 px-3.5 py-1.5 rounded-xs text-[#168BE8] text-xs font-bold tracking-widest uppercase mb-4 shadow-[0_0_15px_rgba(8,120,209,0.2)]"
          >
            <Shield className="w-3.5 h-3.5 text-[#168BE8]" />
            <span>COUNTER-DRONE SOLUTIONS FOR</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 variants={heroFadeUp} className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-2 uppercase">
            <span className="block text-white">SAFER SEAS</span>
            <span className="block text-[#168BE8]">SECURE OPERATIONS</span>
          </motion.h1>

          {/* Supporting Line */}
          <motion.h2 variants={heroFadeUp} className="text-xl sm:text-2xl font-bold tracking-wider text-slate-300 mb-6 uppercase border-l-4 border-[#0878D1] pl-3">
            BRIGHTER TOMORROW
          </motion.h2>

          {/* Description */}
          <motion.p variants={heroFadeUp} className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed mb-8 max-w-xl">
            Advanced Counter-UAS systems to safeguard vessels, offshore facilities, LNG terminals and critical infrastructure from aerial threats, ensuring uninterrupted, safe and secure operations.
          </motion.p>

          {/* Action Buttons */}
          <motion.div variants={heroFadeUp} className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-5">
            <Link
              to="/products"
              className="inline-flex items-center justify-center space-x-3 bg-[#0878D1] hover:bg-[#168BE8] text-white font-extrabold text-sm tracking-wider px-8 py-4 rounded-xs shadow-[0_0_20px_rgba(8,120,209,0.5)] hover:shadow-[0_0_30px_rgba(22,139,232,0.8)] transition-all duration-300 transform hover:-translate-y-0.5 group"
            >
              <span>EXPLORE OUR SOLUTIONS</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <button
              onClick={onOpenVideo}
              className="inline-flex items-center justify-center space-x-3 bg-[#0B2347]/80 hover:bg-[#0B2347] border border-[#0878D1]/60 hover:border-[#168BE8] text-slate-100 hover:text-white font-bold text-sm tracking-wider px-6 py-4 rounded-xs backdrop-blur-md transition-all duration-300 group"
            >
              <span className="w-7 h-7 rounded-full bg-[#0878D1]/30 flex items-center justify-center border border-[#168BE8] group-hover:scale-110 transition-transform">
                <Play className="w-3.5 h-3.5 text-[#168BE8] fill-[#168BE8] ml-0.5" />
              </span>
              <span>WATCH VIDEO</span>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
