import React from 'react';
import { CheckCircle2, ChevronDown } from 'lucide-react';

// Mobile (<md) product accordion pieces. Same styling and behaviour as the
// Products page accordion; on md and up both render as plain wrappers.

// Collapsed/open header row, shown on mobile only.
export function MobileAccordionRow({ title, open, onToggle, panelId }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-expanded={open}
      aria-controls={panelId}
      className={`md:hidden w-full min-h-[56px] flex items-center gap-3 px-4 text-left bg-[#F4F7FA] border border-[#DCE3EA] rounded-xs transition-colors duration-300 ${
        open ? 'rounded-b-none border-b-[#0878D1]/40 bg-white' : 'hover:border-[#0878D1]'
      }`}
    >
      <CheckCircle2 className="w-5 h-5 text-[#0878D1] shrink-0" strokeWidth={1.75} aria-hidden="true" />
      <span className="flex-1 min-w-0 truncate text-sm font-extrabold text-[#071B3A] uppercase tracking-wider">
        {title}
      </span>
      <ChevronDown
        className={`w-4 h-4 text-[#0878D1] shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        aria-hidden="true"
      />
    </button>
  );
}

// Collapsible container for the existing content. Mobile: animated height,
// hidden from focus when closed. md and up: always shown, unchanged.
// `className` / `innerClassName` let a grid layout keep full-height cards on md+.
export function MobileAccordionPanel({ id, open, className = '', innerClassName = '', children }) {
  return (
    <div
      id={id}
      className={`max-md:grid max-md:transition-[grid-template-rows] max-md:duration-300 max-md:ease-out ${
        open ? 'max-md:grid-rows-[1fr]' : 'max-md:grid-rows-[0fr]'
      } ${className}`}
    >
      <div className={`max-md:min-h-0 max-md:overflow-hidden ${open ? '' : 'max-md:invisible'} ${innerClassName}`}>
        {children}
      </div>
    </div>
  );
}
