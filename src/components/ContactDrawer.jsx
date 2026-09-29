import React, { useState, useEffect } from 'react';
import { X, Send, ShieldCheck, Phone, Mail, MapPin, CheckCircle2 } from 'lucide-react';
import { companyDetails } from '../data/sovarData';

export default function ContactDrawer({ isOpen, onClose, initialProduct = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    application: 'Maritime Operations',
    productInquiry: initialProduct,
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialProduct) {
      setFormData(prev => ({ ...prev, productInquiry: initialProduct }));
    }
  }, [initialProduct]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-[#071B3A]/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-xl bg-white h-full shadow-2xl flex flex-col justify-between overflow-y-auto border-l border-slate-300">
        {/* Header */}
        <div>
          <div className="bg-[#071B3A] text-white p-6 flex items-center justify-between border-b border-[#0878D1]/30">
            <div>
              <div className="inline-flex items-center space-x-2 text-[#168BE8] text-[10px] font-mono font-bold tracking-widest uppercase bg-[#0B2347] px-2.5 py-1 rounded-xs border border-[#0878D1]/40">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>CONSULTATION & INQUIRY</span>
              </div>
              <h3 className="text-2xl font-extrabold uppercase mt-2 text-white tracking-wide">
                GET IN TOUCH
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                SOVAR TECH Engineering & Defense Sales Team
              </p>
            </div>

            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-[#0B2347] border border-slate-700 hover:border-[#168BE8] text-slate-300 hover:text-white flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Form Body */}
          <div className="p-6">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="text-2xl font-extrabold text-[#071B3A] uppercase">
                  INQUIRY RECEIVED
                </h4>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Thank you for reaching out to SOVAR TECH PRIVATE LIMITED. Our defense systems engineering team in Kochi will review your technical requirements and contact you promptly.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      onClose();
                    }}
                    className="bg-[#071B3A] hover:bg-[#0B2347] text-white font-extrabold text-xs tracking-wider px-6 py-3 rounded-xs"
                  >
                    RETURN TO WEBSITE
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-extrabold text-[#071B3A] uppercase tracking-wider mb-1">
                    FULL NAME *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Capt. Rajesh Kumar"
                    className="w-full px-4 py-3 bg-[#F4F7FA] border border-slate-300 rounded-xs text-sm text-slate-800 focus:outline-none focus:border-[#0878D1] focus:bg-white transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-extrabold text-[#071B3A] uppercase tracking-wider mb-1">
                      ORGANIZATION / VESSEL *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      placeholder="e.g. Maritime Energy Line"
                      className="w-full px-4 py-3 bg-[#F4F7FA] border border-slate-300 rounded-xs text-sm text-slate-800 focus:outline-none focus:border-[#0878D1] focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-extrabold text-[#071B3A] uppercase tracking-wider mb-1">
                      APPLICATION DOMAIN
                    </label>
                    <select
                      value={formData.application}
                      onChange={(e) => setFormData({ ...formData, application: e.target.value })}
                      className="w-full px-4 py-3 bg-[#F4F7FA] border border-slate-300 rounded-xs text-sm text-slate-800 focus:outline-none focus:border-[#0878D1] focus:bg-white transition-all"
                    >
                      <option value="Maritime Operations">Maritime Operations</option>
                      <option value="Oil & Gas Offshore">Oil & Gas Offshore</option>
                      <option value="Ports & Terminals">Ports & Terminals</option>
                      <option value="Industrial Facilities">Industrial Facilities</option>
                      <option value="Critical Infrastructure">Critical Infrastructure</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-extrabold text-[#071B3A] uppercase tracking-wider mb-1">
                      EMAIL ADDRESS *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@company.com"
                      className="w-full px-4 py-3 bg-[#F4F7FA] border border-slate-300 rounded-xs text-sm text-slate-800 focus:outline-none focus:border-[#0878D1] focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-extrabold text-[#071B3A] uppercase tracking-wider mb-1">
                      PHONE NUMBER *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full px-4 py-3 bg-[#F4F7FA] border border-slate-300 rounded-xs text-sm text-slate-800 focus:outline-none focus:border-[#0878D1] focus:bg-white transition-all"
                    />
                  </div>
                </div>

                {formData.productInquiry && (
                  <div className="p-3 bg-[#DCEEFF] border border-[#0878D1]/40 rounded-xs text-xs font-bold text-[#0878D1]">
                    INQUIRING ABOUT: {formData.productInquiry}
                  </div>
                )}

                <div>
                  <label className="block text-xs font-extrabold text-[#071B3A] uppercase tracking-wider mb-1">
                    PROJECT REQUIREMENTS / MESSAGE
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide details regarding vessel type, site location, timeline or defense parameters..."
                    className="w-full px-4 py-3 bg-[#F4F7FA] border border-slate-300 rounded-xs text-sm text-slate-800 focus:outline-none focus:border-[#0878D1] focus:bg-white transition-all"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-[#0878D1] hover:bg-[#168BE8] text-white font-extrabold text-sm tracking-wider py-4 rounded-xs flex items-center justify-center space-x-2 shadow-lg transition-all"
                  >
                    <span>SUBMIT TECHNICAL INQUIRY</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Contact Footer Quick Info */}
        <div className="p-6 bg-[#071B3A] text-slate-300 border-t border-slate-800 space-y-2 text-xs">
          <div className="text-[10px] font-mono text-[#168BE8] uppercase font-bold tracking-widest">DIRECT CONTACT</div>
          <div className="flex items-center space-x-2">
            <Mail className="w-3.5 h-3.5 text-[#168BE8]" />
            <span>{companyDetails.emails.join(' | ')}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Phone className="w-3.5 h-3.5 text-[#168BE8]" />
            <span>{companyDetails.phone}</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="w-3.5 h-3.5 text-[#168BE8]" />
            <span>{companyDetails.location}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
