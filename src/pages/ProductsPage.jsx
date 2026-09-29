import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, ArrowRight, CheckCircle2, MapPin, Layers } from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import SectionHeading from '../components/ui/SectionHeading';
import ProductOverviewModal from '../components/ProductOverviewModal';
import PageCTA from '../components/ui/PageCTA';
import { products as homepageProducts } from '../data/sovarData';
import { productDetails } from '../data/pageContent';
import heroImg from '../assets/product-radar3d.jpg';
import productFamilyImg from '../assets/rd-lab.jpg';
import usePageMeta from '../hooks/usePageMeta';
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  cardReveal,
  viewportOnce
} from '../hooks/useScrollAnimation';

// Homepage product records (name, image, category) with source-document details layered on.
const products = homepageProducts.map((p) => ({ ...p, ...productDetails[p.id] }));

export default function ProductsPage() {
  usePageMeta(
    'Products',
    'SOVAR C-UAS 360, SOVAR RADAR 3D, SOVAR MARINE, SOVAR OFFSHORE, SOVAR C2 and SOVAR EO/IR — integrated Counter-UAS solutions.'
  );
  const [selectedProduct, setSelectedProduct] = useState(null);
  const closeProduct = useCallback(() => setSelectedProduct(null), []);

  return (
    <>
      <PageHero
        breadcrumb="PRODUCTS"
        eyebrow="OUR PRODUCTS"
        icon={Shield}
        title="INTEGRATED"
        accent="COUNTER-UAS SOLUTIONS"
        text="Modular systems that can be adapted to different vessels, platforms, ports and critical infrastructure environments — from individual sensors to integrated 360° protection."
        image={heroImg}
        imagePosition="60% center"
      />

      {/* Product index */}
      <section className="bg-[#071B3A] border-y border-[#0878D1]/30 relative z-10">
        <nav aria-label="Products" className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
            {products.map((p, i) => (
              <li key={p.id}>
                <a
                  href={`#${p.id}`}
                  className="group flex items-center space-x-3 p-3 rounded-xs hover:bg-[#0B2347] transition-colors"
                >
                  <span className="text-[10px] font-mono font-bold text-[#168BE8]">{String(i + 1).padStart(2, '0')}</span>
                  <span className="text-xs font-extrabold text-white group-hover:text-[#168BE8] tracking-wider uppercase transition-colors">
                    {p.name.replace('SOVAR ', '')}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </section>

      {/* Product family overview */}
      <section id="product-family" className="py-20 md:py-28 bg-white text-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-tech-grid-light opacity-50 pointer-events-none" />
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="THE SOVAR PRODUCT FAMILY"
              icon={Layers}
              title="DETECT. IDENTIFY."
              accent="TRACK. PROTECT."
              text="Each SOVAR product can operate within an integrated system. SOVAR C-UAS 360 can integrate 3D radar, RF detection, EO/IR cameras, AI-assisted classification, tracking, sensor fusion and command & control."
            />
          </div>
          <motion.figure
            className="lg:col-span-7 rounded-xs overflow-hidden border border-[#DCE3EA] shadow-2xl"
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <img
              src={productFamilyImg}
              alt="The SOVAR product family: C-UAS 360, RADAR 3D, MARINE, OFFSHORE, C2 and EO/IR"
              className="w-full h-auto"
              loading="lazy"
            />
          </motion.figure>
        </div>
      </section>

      {/* Individual products */}
      <section className="bg-[#F4F7FA] text-slate-800 py-10 md:py-16">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10 md:space-y-16">
          {products.map((product, i) => {
            const reversed = i % 2 === 1;
            return (
              <article
                key={product.id}
                id={product.id}
                data-anchor
                className="bg-white border border-slate-200 rounded-xs shadow-md overflow-hidden grid grid-cols-1 lg:grid-cols-2"
                aria-labelledby={`${product.id}-title`}
              >
                {/* Image */}
                <motion.div
                  className={`relative min-h-[280px] sm:min-h-[360px] lg:min-h-[520px] bg-[#071B3A] overflow-hidden group ${reversed ? 'lg:order-2' : ''}`}
                  variants={reversed ? fadeInRight : fadeInLeft}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOnce}
                >
                  {product.featureFit === 'contain' ? (
                    <>
                      <div className="absolute inset-0 bg-tech-grid-dark opacity-40" />
                      <img
                        src={product.featureImage}
                        alt={`${product.name} — ${product.subtitle} product sheet`}
                        className="absolute inset-0 w-full h-full object-contain p-4 sm:p-6 pt-14 pb-14"
                        loading="lazy"
                      />
                    </>
                  ) : (
                    <>
                      <img
                        src={product.featureImage || product.image}
                        alt={`${product.name} — ${product.subtitle}`}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#071B3A]/80 via-transparent to-transparent" />
                    </>
                  )}
                  <div className="absolute top-4 left-4 bg-[#071B3A]/90 backdrop-blur-md border border-[#0878D1]/40 px-2.5 py-1 text-[10px] font-mono text-[#168BE8] uppercase font-bold tracking-widest rounded-xs">
                    {product.category}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                    <span className="text-5xl font-black text-white/15 font-mono leading-none">{String(i + 1).padStart(2, '0')}</span>
                    <span className="bg-[#071B3A]/90 border border-[#0878D1]/40 px-2.5 py-1 text-[10px] font-mono text-slate-300 rounded-xs">
                      SOVAR MODULE // {product.id.toUpperCase()}
                    </span>
                  </div>
                </motion.div>

                {/* Content */}
                <motion.div
                  className="p-8 md:p-12 flex flex-col justify-center"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOnce}
                >
                  <motion.h2 variants={fadeInUp} id={`${product.id}-title`} className="text-3xl sm:text-4xl font-extrabold text-[#071B3A] uppercase tracking-tight">
                    {product.name}
                  </motion.h2>
                  <motion.p variants={fadeInUp} className="text-sm font-bold text-[#0878D1] uppercase tracking-wider mt-1">
                    {product.subtitle}
                  </motion.p>
                  <motion.div variants={fadeInUp} className="w-16 h-1 bg-[#0878D1] rounded-full mt-4" />
                  <motion.p variants={fadeInUp} className="text-base text-slate-600 leading-relaxed mt-5">
                    {product.description}
                  </motion.p>

                  <motion.div variants={fadeInUp} className="mt-6">
                    <h3 className="text-xs font-extrabold text-[#071B3A] uppercase tracking-widest mb-3">KEY CAPABILITIES</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                      {product.capabilities.map((cap) => (
                        <li key={cap} className="flex items-center space-x-2 text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-[#0878D1] shrink-0" />
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>

                  <motion.div variants={fadeInUp} className="mt-6">
                    <h3 className="text-xs font-extrabold text-[#071B3A] uppercase tracking-widest mb-3 flex items-center space-x-2">
                      <MapPin className="w-3.5 h-3.5 text-[#0878D1]" />
                      <span>APPLICATION AREAS</span>
                    </h3>
                    <ul className="flex flex-wrap gap-2">
                      {product.applications.map((app) => (
                        <li key={app} className="text-[11px] font-bold uppercase tracking-wider text-[#0878D1] bg-[#DCEEFF] px-2.5 py-1 rounded-xs">
                          {app}
                        </li>
                      ))}
                    </ul>
                  </motion.div>

                  <motion.div variants={fadeInUp} className="mt-8 flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="inline-flex items-center justify-center space-x-3 bg-[#071B3A] hover:bg-[#0B2347] text-white font-extrabold text-xs sm:text-sm tracking-wider px-7 py-3.5 rounded-xs transition-all duration-300 group shadow-md hover:shadow-xl"
                    >
                      <span>VIEW PRODUCT</span>
                      <ArrowRight className="w-4 h-4 text-[#168BE8] group-hover:translate-x-1 transition-transform" />
                    </button>
                    <Link
                      to={`/contact?product=${encodeURIComponent(product.name)}`}
                      className="inline-flex items-center justify-center space-x-2 border border-[#0878D1] text-[#0878D1] hover:bg-[#0878D1] hover:text-white font-extrabold text-xs sm:text-sm tracking-wider px-7 py-3.5 rounded-xs transition-colors"
                    >
                      <span>ENQUIRE</span>
                    </Link>
                  </motion.div>
                </motion.div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Where they're deployed */}
      <section className="py-16 bg-white border-t border-[#DCE3EA]">
        <motion.div
          className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
          variants={cardReveal}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <div>
            <h2 className="text-2xl font-extrabold text-[#071B3A] uppercase tracking-tight">Protection across critical environments</h2>
            <p className="text-sm text-slate-600 mt-1">Maritime · Oil & Gas · Offshore · Ports & Terminals · Critical Infrastructure</p>
          </div>
          <Link
            to="/applications"
            className="inline-flex items-center space-x-2 text-xs sm:text-sm font-extrabold text-[#0878D1] hover:text-[#168BE8] tracking-wider uppercase group"
          >
            <span>VIEW ALL APPLICATIONS</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </section>

      <PageCTA
        eyebrow="PRODUCT ENQUIRY"
        title="FIND THE RIGHT SOLUTION"
        text="Whether you are looking for a shipboard anti-drone system, offshore protection solution, 3D drone detection radar, RF detection system or integrated C-UAS platform, our engineering team can work with you."
        buttonLabel="SEND AN ENQUIRY"
      />

      {selectedProduct && <ProductOverviewModal product={selectedProduct} onClose={closeProduct} />}
    </>
  );
}
