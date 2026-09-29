import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { fusionSensors } from '../data/pageContent';

// Sensor node positions in the 600x600 SVG viewBox.
const NODE_POS = {
  radar: { x: 110, y: 120 },
  rf: { x: 490, y: 120 },
  eoir: { x: 490, y: 480 },
  ai: { x: 110, y: 480 }
};
const CENTER = { x: 300, y: 300 };

// Interactive sensor-fusion visual: each sensor feeds the central fusion / C2 node.
// Selecting a sensor highlights its data link and lists what it contributes.
export default function SensorFusionDiagram() {
  const [active, setActive] = useState(fusionSensors[0].id);
  const activeSensor = fusionSensors.find((s) => s.id === active);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
      {/* Diagram */}
      <div className="lg:col-span-7">
        <div className="relative bg-[#071B3A] border border-[#0878D1]/40 rounded-xs overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-tech-grid-dark opacity-50 pointer-events-none" />
          <svg viewBox="0 0 600 600" className="relative w-full h-auto" role="img" aria-labelledby="fusion-title fusion-desc">
            <title id="fusion-title">Sensor fusion architecture</title>
            <desc id="fusion-desc">
              3D radar, RF detection, EO/IR and AI / computer vision each feed a central sensor-fusion and command-and-control node that produces a unified situational picture.
            </desc>

            {/* Radar rings around the fusion node */}
            <g aria-hidden="true">
              {[70, 120, 170, 220].map((r, i) => (
                <circle
                  key={r}
                  cx={CENTER.x}
                  cy={CENTER.y}
                  r={r}
                  fill="none"
                  stroke="#168BE8"
                  strokeOpacity={0.28 - i * 0.05}
                  strokeDasharray={i % 2 ? '4 6' : undefined}
                />
              ))}
              <line x1="80" y1="300" x2="520" y2="300" stroke="#168BE8" strokeOpacity="0.12" />
              <line x1="300" y1="80" x2="300" y2="520" stroke="#168BE8" strokeOpacity="0.12" />
              <g className="animate-radar-sweep" style={{ transformOrigin: '300px 300px' }}>
                <path d="M300 300 L300 80 A220 220 0 0 1 455.6 144.4 Z" fill="url(#sweep)" />
              </g>
              <defs>
                <linearGradient id="sweep" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#168BE8" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#168BE8" stopOpacity="0" />
                </linearGradient>
              </defs>
            </g>

            {/* Data links */}
            {fusionSensors.map((s) => {
              const p = NODE_POS[s.id];
              const isActive = s.id === active;
              return (
                <line
                  key={`link-${s.id}`}
                  x1={p.x}
                  y1={p.y}
                  x2={CENTER.x}
                  y2={CENTER.y}
                  stroke={isActive ? '#168BE8' : '#0878D1'}
                  strokeOpacity={isActive ? 1 : 0.4}
                  strokeWidth={isActive ? 2.5 : 1.5}
                  strokeDasharray="6 6"
                  className="animate-dash-flow"
                  style={{ transition: 'stroke-opacity 300ms, stroke-width 300ms' }}
                />
              );
            })}

            {/* Sensor nodes */}
            {fusionSensors.map((s) => {
              const p = NODE_POS[s.id];
              const isActive = s.id === active;
              return (
                <g
                  key={s.id}
                  onClick={() => setActive(s.id)}
                  onMouseEnter={() => setActive(s.id)}
                  style={{ cursor: 'pointer' }}
                  aria-hidden="true"
                >
                  {isActive && (
                    <circle cx={p.x} cy={p.y} r="44" fill="none" stroke="#168BE8" strokeOpacity="0.35" className="animate-ping-slow" style={{ transformOrigin: `${p.x}px ${p.y}px` }} />
                  )}
                  <circle
                    cx={p.x}
                    cy={p.y}
                    r="34"
                    fill={isActive ? '#0878D1' : '#0B2347'}
                    stroke="#168BE8"
                    strokeWidth={isActive ? 2 : 1}
                    style={{ transition: 'fill 300ms' }}
                  />
                  <text x={p.x} y={p.y + 4} textAnchor="middle" className="font-mono" fontSize="11" fontWeight="700" fill="#FFFFFF">
                    {s.id.toUpperCase()}
                  </text>
                  <text
                    x={p.x}
                    y={p.y + (p.y < 300 ? -48 : 60)}
                    textAnchor="middle"
                    fontSize="13"
                    fontWeight="800"
                    letterSpacing="1.5"
                    fill={isActive ? '#168BE8' : '#CBD5E1'}
                  >
                    {s.label}
                  </text>
                </g>
              );
            })}

            {/* Fusion / C2 node */}
            <g aria-hidden="true">
              <circle cx={CENTER.x} cy={CENTER.y} r="58" fill="#071B3A" stroke="#168BE8" strokeWidth="2" style={{ filter: 'drop-shadow(0 0 14px rgba(22,139,232,0.8))' }} />
              <text x={CENTER.x} y={CENTER.y - 6} textAnchor="middle" fontSize="12" fontWeight="800" letterSpacing="1.5" fill="#FFFFFF">SENSOR</text>
              <text x={CENTER.x} y={CENTER.y + 10} textAnchor="middle" fontSize="12" fontWeight="800" letterSpacing="1.5" fill="#FFFFFF">FUSION</text>
              <text x={CENTER.x} y={CENTER.y + 26} textAnchor="middle" className="font-mono" fontSize="9" fontWeight="700" fill="#168BE8">C2</text>
            </g>
          </svg>

          <div className="relative border-t border-[#0878D1]/30 bg-[#0B2347]/90 px-4 py-2.5 flex items-center justify-between text-[10px] sm:text-xs font-mono text-slate-300">
            <span className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-[#168BE8] animate-pulse" />
              <span>MULTI-SENSOR INTEGRATION</span>
            </span>
            <span className="text-[#168BE8] font-bold">UNIFIED AWARENESS</span>
          </div>
        </div>
      </div>

      {/* Sensor selector + outputs */}
      <div className="lg:col-span-5">
        <div className="text-xs font-extrabold text-[#071B3A] uppercase tracking-widest mb-3" id="sensor-select-label">
          SELECT A SENSOR
        </div>
        <div className="grid grid-cols-2 gap-2" role="tablist" aria-labelledby="sensor-select-label">
          {fusionSensors.map((s) => {
            const isActive = s.id === active;
            return (
              <button
                key={s.id}
                role="tab"
                id={`sensor-tab-${s.id}`}
                aria-selected={isActive}
                aria-controls="sensor-panel"
                onClick={() => setActive(s.id)}
                className={`text-left px-4 py-3 rounded-xs border text-xs font-extrabold uppercase tracking-wider transition-all ${
                  isActive
                    ? 'bg-[#071B3A] border-[#0878D1] text-white shadow-[0_0_15px_rgba(8,120,209,0.3)]'
                    : 'bg-white border-[#DCE3EA] text-[#071B3A] hover:border-[#0878D1]'
                }`}
              >
                {s.label}
              </button>
            );
          })}
        </div>

        <div
          id="sensor-panel"
          role="tabpanel"
          aria-labelledby={`sensor-tab-${active}`}
          className="mt-4 bg-[#F4F7FA] border border-[#DCE3EA] border-l-4 border-l-[#0878D1] p-6 rounded-xs min-h-[210px]"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              <div className="text-[10px] font-mono font-bold text-[#0878D1] uppercase tracking-widest">FEEDS THE FUSION NODE WITH</div>
              <h3 className="text-xl font-extrabold text-[#071B3A] uppercase tracking-wide mt-1">{activeSensor.label}</h3>
              <ul className="mt-4 space-y-2">
                {activeSensor.outputs.map((o) => (
                  <li key={o} className="flex items-center space-x-2 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#0878D1] shrink-0" />
                    <span>{o}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>

        <p className="text-sm text-slate-600 leading-relaxed mt-5">
          EO/IR sensors can be integrated with radar and RF detection systems for improved situational awareness, while command and control brings multiple sensors and security systems together on one platform.
        </p>
      </div>
    </div>
  );
}
