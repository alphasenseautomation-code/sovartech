import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { X, ArrowRight, CheckCircle2, Cpu, MapPin } from 'lucide-react';

// Product details for /products (source-document capabilities). The homepage keeps ProductDetailModal.
export default function ProductOverviewModal({ product, onClose }) {
  const closeRef = useRef(null);

  useEffect(() => {
    if (!product) return undefined;
    closeRef.current?.focus();
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [product, onClose]);

  if (!product) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#071B3A]/85 backdrop-blur-md"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        className="relative w-full max-w-3xl bg-white rounded-xs border border-[#0878D1]/40 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        role="dialog"
        aria-modal="true"
        aria-labelledby="product-modal-title"
      >
        {/* Header */}
        <div className="bg-[#071B3A] text-white p-6 flex items-center justify-between border-b border-[#0878D1]/30">
          <div>
            <span className="text-[10px] font-mono text-[#168BE8] uppercase font-bold tracking-widest bg-[#0B2347] px-2.5 py-1 rounded-xs border border-[#0878D1]/40">
              {product.category}
            </span>
            <h3 id="product-modal-title" className="text-2xl font-extrabold uppercase mt-2 text-white tracking-wide">
              {product.name}
            </h3>
            <p className="text-xs text-[#168BE8] font-bold uppercase tracking-wider">
              {product.subtitle}
            </p>
          </div>

          <button
            ref={closeRef}
            onClick={onClose}
            aria-label="Close product details"
            className="w-9 h-9 rounded-full bg-[#0B2347] border border-slate-700 hover:border-[#168BE8] text-slate-300 hover:text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-slate-800">
          {/* Image */}
          <div className={`relative rounded-xs overflow-hidden border border-slate-200 ${product.featureFit === 'contain' ? 'bg-[#071B3A]' : 'h-64'}`}>
            <img
              src={product.featureImage || product.image}
              alt={product.name}
              className={product.featureFit === 'contain' ? 'w-full h-auto' : 'w-full h-full object-cover'}
            />
            <div className="absolute bottom-3 right-3 bg-[#071B3A]/90 text-[#168BE8] text-[10px] font-mono px-3 py-1 rounded-xs border border-[#0878D1]/40">
              SOVAR MODULE // {product.id.toUpperCase()}
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-xs font-extrabold text-[#071B3A] uppercase tracking-wider mb-2">
              OVERVIEW
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Key capabilities */}
          {product.capabilities && (
            <div className="bg-[#F4F7FA] border border-[#DCE3EA] p-5 rounded-xs space-y-3">
              <h4 className="text-xs font-extrabold text-[#0878D1] uppercase tracking-widest flex items-center space-x-2">
                <Cpu className="w-4 h-4 text-[#0878D1]" />
                <span>KEY CAPABILITIES</span>
              </h4>
              <p className="text-[11px] font-mono text-slate-500 uppercase">{product.capabilitiesLabel}:</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {product.capabilities.map((cap) => (
                  <li key={cap} className="flex items-center space-x-2 bg-white p-3 border border-slate-200 rounded-xs text-xs font-bold text-[#071B3A]">
                    <CheckCircle2 className="w-4 h-4 text-[#0878D1] shrink-0" />
                    <span>{cap}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Application areas */}
          {product.applications && (
            <div>
              <h4 className="text-xs font-extrabold text-[#071B3A] uppercase tracking-wider mb-2 flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-[#0878D1]" />
                <span>APPLICATION AREAS</span>
              </h4>
              <ul className="flex flex-wrap gap-2">
                {product.applications.map((app) => (
                  <li key={app} className="text-[11px] font-bold uppercase tracking-wider text-[#0878D1] bg-[#DCEEFF] px-2.5 py-1 rounded-xs">
                    {app}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#F4F7FA] border-t border-slate-200 flex items-center justify-between gap-3">
          <Link
            to={`/products#${product.id}`}
            onClick={onClose}
            className="text-xs font-bold text-slate-500 hover:text-[#0878D1]"
          >
            ALL PRODUCTS
          </Link>

          <Link
            to={`/contact?product=${encodeURIComponent(product.name)}`}
            onClick={onClose}
            className="bg-[#0878D1] hover:bg-[#168BE8] text-white font-extrabold text-xs tracking-wider px-6 py-3 rounded-xs flex items-center space-x-2 shadow-md"
          >
            <span>ENQUIRE ABOUT THIS PRODUCT</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
