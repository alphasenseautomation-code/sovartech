import React, { useState } from 'react';
import { X, Play, Shield, Radar, CheckCircle2, Activity, Radio } from 'lucide-react';
import heroBgImg from '../assets/hero-bg.png';

export default function VideoModal({ onClose, onOpenContact }) {
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#071B3A]/90 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-[#071B3A] rounded-xs border border-[#0878D1]/40 shadow-2xl overflow-hidden flex flex-col">
        {/* Header */}
        <div className="p-4 bg-[#0B2347] border-b border-[#0878D1]/30 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-xs font-mono text-white font-bold tracking-wider">
              SOVAR C-UAS OPERATIONAL DEMONSTRATION // TACTICAL SIMULATION
            </span>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#071B3A] border border-slate-700 hover:border-[#168BE8] text-slate-300 hover:text-white flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Video Player Display Container */}
        <div className="relative aspect-video bg-black overflow-hidden flex items-center justify-center group">
          <img
            src={heroBgImg}
            alt="SOVAR TECH Operational Video"
            className="w-full h-full object-cover opacity-80"
          />

          {/* Tactical HUD Overlay during playback */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#071B3A] via-transparent to-transparent opacity-80 pointer-events-none" />

          {/* Radar Sweep Animation overlay */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full border border-[#168BE8]/30 pointer-events-none flex items-center justify-center">
            <div className="w-full h-full rounded-full border border-dashed border-[#168BE8]/40 animate-spin" style={{ animationDuration: '10s' }} />
            <div className="absolute inset-16 rounded-full border border-[#168BE8]/20" />
            <Radar className="w-10 h-10 text-[#168BE8] opacity-60" />
          </div>

          {/* Center Play/Pause button */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="relative z-10 w-20 h-20 rounded-full bg-[#0878D1]/80 hover:bg-[#168BE8] border-2 border-white text-white flex items-center justify-center shadow-[0_0_30px_#168BE8] transition-all transform hover:scale-110"
          >
            {isPlaying ? (
              <span className="font-mono text-xs font-bold uppercase tracking-widest">PAUSE</span>
            ) : (
              <Play className="w-8 h-8 fill-white ml-1" />
            )}
          </button>

          {/* HUD Status Bar */}
          <div className="absolute bottom-4 left-4 right-4 bg-[#071B3A]/90 backdrop-blur-md border border-[#0878D1]/40 p-3 rounded-xs flex items-center justify-between text-xs font-mono text-slate-300">
            <div className="flex items-center space-x-4">
              <span className="text-[#168BE8] font-bold">TARGET LOCK: TRK-01</span>
              <span className="text-slate-400">RNG: 2,400M</span>
              <span className="text-emerald-400 font-bold">NEUTRALIZATION: READY</span>
            </div>
            <span className="text-slate-400 hidden sm:inline">STREAM: 1080P HD 60FPS</span>
          </div>
        </div>

        {/* Video Footer info */}
        <div className="p-6 bg-[#0B2347] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-sm font-extrabold text-white uppercase">
              SOVAR C-UAS 360 NAVAL DEFENSE FIELD DEMONSTRATION
            </h4>
            <p className="text-xs text-slate-300 mt-0.5">
              Live multi-sensor tracking and RF directional jamming sequence on maritime terminal asset.
            </p>
          </div>

          <button
            onClick={() => {
              onClose();
              onOpenContact();
            }}
            className="shrink-0 bg-[#0878D1] hover:bg-[#168BE8] text-white text-xs font-extrabold tracking-wider px-6 py-3 rounded-xs shadow-md"
          >
            REQUEST FULL TECHNICAL DOSSIER
          </button>
        </div>
      </div>
    </div>
  );
}
