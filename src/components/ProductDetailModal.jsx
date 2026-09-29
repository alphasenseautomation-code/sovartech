import React from 'react';
import { X, Shield, ArrowRight, CheckCircle, Radar, Cpu, Activity } from 'lucide-react';

export default function ProductDetailModal({ product, onClose, onInquire }) {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#071B3A]/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-white rounded-xs border border-[#0878D1]/40 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="bg-[#071B3A] text-white p-6 flex items-center justify-between border-b border-[#0878D1]/30">
          <div>
            <span className="text-[10px] font-mono text-[#168BE8] uppercase font-bold tracking-widest bg-[#0B2347] px-2.5 py-1 rounded-xs border border-[#0878D1]/40">
              {product.category}
            </span>
            <h3 className="text-2xl font-extrabold uppercase mt-2 text-white tracking-wide">
              {product.name}
            </h3>
            <p className="text-xs text-[#168BE8] font-bold uppercase tracking-wider">
              {product.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-[#0B2347] border border-slate-700 hover:border-[#168BE8] text-slate-300 hover:text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-slate-800">
          {/* Image */}
          <div className="relative h-64 rounded-xs overflow-hidden border border-slate-200">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-3 right-3 bg-[#071B3A]/90 text-[#168BE8] text-[10px] font-mono px-3 py-1 rounded-xs border border-[#0878D1]/40">
              SOVAR MODULE // SPEC-ID: {product.id.toUpperCase()}
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-xs font-extrabold text-[#071B3A] uppercase tracking-wider mb-2">
              OVERVIEW & CAPABILITY ARCHITECTURE
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Technical Specifications */}
          {product.specs && (
            <div className="bg-[#F4F7FA] border border-[#DCE3EA] p-5 rounded-xs space-y-3">
              <h4 className="text-xs font-extrabold text-[#0878D1] uppercase tracking-widest flex items-center space-x-2">
                <Cpu className="w-4 h-4 text-[#0878D1]" />
                <span>TECHNICAL SPECIFICATIONS & PARAMETERS</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {Object.entries(product.specs).map(([key, val]) => (
                  <div key={key} className="bg-white p-3 border border-slate-200 rounded-xs">
                    <span className="block text-[10px] font-mono text-slate-400 uppercase font-bold">
                      {key.replace(/([A-Z])/g, ' $1')}
                    </span>
                    <span className="text-xs font-extrabold text-[#071B3A]">
                      {val}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#F4F7FA] border-t border-slate-200 flex items-center justify-between">
          <button
            onClick={onClose}
            className="text-xs font-bold text-slate-500 hover:text-slate-800"
          >
            CLOSE
          </button>

          <button
            onClick={() => {
              onClose();
              onInquire(product.name);
            }}
            className="bg-[#0878D1] hover:bg-[#168BE8] text-white font-extrabold text-xs tracking-wider px-6 py-3 rounded-xs flex items-center space-x-2 shadow-md"
          >
            <span>INQUIRE THIS MODULE</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
