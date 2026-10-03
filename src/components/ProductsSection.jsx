import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, ExternalLink } from 'lucide-react';
import { products } from '../data/sovarData';
import { MobileAccordionRow, MobileAccordionPanel } from './ui/MobileAccordion';
import {
  fadeInUp,
  staggerContainer,
  cardReveal,
  viewportOnce
} from '../hooks/useScrollAnimation';

const MotionLink = motion.create(Link);

export default function ProductsSection({ onSelectProduct }) {
  // Mobile accordion: all collapsed initially, one open at a time.
  const [openId, setOpenId] = useState(null);
  const toggleProduct = (id) => setOpenId((current) => (current === id ? null : id));

  return (
    <section id="products" className="py-14 md:py-28 bg-[#F4F7FA] text-slate-800 relative">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-slate-300/80 pb-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <div>
            <motion.div variants={fadeInUp} className="inline-flex items-center space-x-2 bg-[#DCEEFF] text-[#0878D1] px-3.5 py-1.5 rounded-xs text-xs font-extrabold tracking-widest uppercase mb-3">
              <Shield className="w-3.5 h-3.5 text-[#0878D1]" />
              <span>OUR PRODUCTS</span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#071B3A] uppercase tracking-tight">
              INTEGRATED COUNTER-DRONE SOLUTIONS
            </motion.h2>
          </div>

          <MotionLink
            variants={fadeInUp}
            to="/products"
            className="mt-4 md:mt-0 inline-flex items-center space-x-2 text-xs sm:text-sm font-extrabold text-[#0878D1] hover:text-[#168BE8] tracking-wider uppercase group"
          >
            <span>VIEW ALL PRODUCTS</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </MotionLink>
        </motion.div>

        {/* 6 Premium Product Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {products.map((product) => {
            const open = openId === product.id;
            return (
            <motion.div key={product.id} variants={cardReveal}>
            {/* Mobile only: collapsed accordion row (same as the Products page) */}
            <MobileAccordionRow
              title={product.name}
              open={open}
              onToggle={() => toggleProduct(product.id)}
              panelId={`home-${product.id}-panel`}
            />
            {/* Existing product card: mobile collapsible panel; md+ unchanged, full height in the grid */}
            <MobileAccordionPanel id={`home-${product.id}-panel`} open={open} className="md:h-full" innerClassName="md:h-full">
            <div
              onClick={() => onSelectProduct(product)}
              className="group bg-white rounded-xs border border-slate-200 overflow-hidden shadow-md hover:shadow-2xl hover:border-[#0878D1] transition-all duration-300 cursor-pointer flex flex-col justify-between md:h-full max-md:rounded-t-none max-md:border-t-0 max-md:border-[#DCE3EA] max-md:shadow-none"
            >
              <div>
                {/* Product Image Container */}
                <div className="relative h-60 overflow-hidden bg-[#071B3A]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Category Tag Overlay */}
                  <div className="absolute top-3 left-3 bg-[#071B3A]/90 backdrop-blur-md border border-[#0878D1]/40 px-2.5 py-1 text-[10px] font-mono text-[#168BE8] uppercase font-bold tracking-widest rounded-xs">
                    {product.category}
                  </div>
                  {/* Hover Blue Glow Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071B3A] via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-extrabold text-[#071B3A] group-hover:text-[#0878D1] transition-colors uppercase tracking-wide max-md:sr-only">
                    {product.name}
                  </h3>
                  <p className="text-xs font-bold text-[#0878D1] mt-1 uppercase tracking-wider">
                    {product.subtitle}
                  </p>
                  <p className="text-sm text-slate-600 mt-3 font-normal leading-relaxed line-clamp-3">
                    {product.description}
                  </p>
                </div>
              </div>

              {/* Bottom Action Footer */}
              <div className="px-6 pb-6 pt-2 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400 group-hover:text-[#0878D1] transition-colors">
                  SPECIFICATIONS &amp; DATA →
                </span>
                <div className="w-8 h-8 rounded-full bg-[#F4F7FA] group-hover:bg-[#0878D1] text-[#0878D1] group-hover:text-white flex items-center justify-center transition-colors shadow-sm">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </div>
            </MobileAccordionPanel>
            </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
