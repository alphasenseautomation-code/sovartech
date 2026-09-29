import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Phone, Send, ShieldCheck, CheckCircle2, MessageSquare } from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import { companyDetails } from '../data/sovarData';
import { enquiryInterests, contactInfo } from '../data/pageContent';
import heroImg from '../assets/hero-bg.png';
import usePageMeta from '../hooks/usePageMeta';
import {
  fadeInUp,
  fadeInRight,
  staggerContainer,
  viewportOnce
} from '../hooks/useScrollAnimation';

const ENQUIRY_TO = contactInfo.enquiryTo;
const ENQUIRY_CC = contactInfo.enquiryCc.join(',');
const ENQUIRY_CC_TEXT = contactInfo.enquiryCc.join(' and ');

const inputClass =
  'w-full px-4 py-3 bg-[#F4F7FA] border border-slate-300 rounded-xs text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#0878D1] focus:bg-white transition-all';
const labelClass = 'block text-xs font-extrabold text-[#071B3A] uppercase tracking-wider mb-1';

const solutionsSought = [
  'Shipboard anti-drone systems',
  'Offshore protection solutions',
  '3D drone detection radar',
  'RF detection systems',
  'Integrated C-UAS platforms'
];

function buildMailto(data, product) {
  const subject = `Website enquiry — ${data.industry}${product ? ` — ${product}` : ''}`;
  const lines = [
    `Name: ${data.name}`,
    `Company: ${data.company || '—'}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone || '—'}`,
    `Industry: ${data.industry}`,
    product ? `Product: ${product}` : null,
    '',
    data.message
  ].filter((l) => l !== null);
  // RFC 6068 mailto: TO projects@, CC the other two official addresses.
  return `mailto:${ENQUIRY_TO}?cc=${ENQUIRY_CC}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join('\n'))}`;
}

export default function ContactPage() {
  usePageMeta(
    'Contact',
    "Contact SOVAR TECH PRIVATE LIMITED — let's protect the airspace together. projects@sovartech.com"
  );

  const [searchParams] = useSearchParams();
  const product = searchParams.get('product') || '';

  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    industry: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = buildMailto(form, product);
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        breadcrumb="CONTACT"
        eyebrow="CONTACT US"
        icon={MessageSquare}
        title="LET'S PROTECT"
        accent="THE AIRSPACE TOGETHER"
        image={heroImg}
        imagePosition="70% center"
      />

      <section id="enquiry" className="py-20 md:py-28 bg-white text-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-tech-grid-light opacity-60 pointer-events-none" />
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left: introduction + contact details */}
          <motion.div
            className="lg:col-span-5 space-y-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <motion.div variants={fadeInUp}>
              <div className="inline-flex items-center space-x-2 bg-[#DCEEFF] text-[#0878D1] px-3.5 py-1.5 rounded-xs text-xs font-extrabold tracking-widest uppercase mb-4">
                <ShieldCheck className="w-3.5 h-3.5" aria-hidden="true" />
                <span>{companyDetails.name}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#071B3A] uppercase tracking-tight leading-tight">
                Talk to our
                <span className="block text-[#0878D1]">engineering team</span>
              </h2>
              <div className="w-20 h-1 bg-[#0878D1] rounded-full mt-5" />
              <p className="text-base text-slate-600 leading-relaxed mt-5">
                Whether you are looking for a shipboard anti-drone system, offshore protection solution, 3D drone detection radar, RF detection system or integrated C-UAS platform, our engineering team can work with you to develop a solution suited to your operational requirements.
              </p>
            </motion.div>

            <motion.ul variants={fadeInUp} className="flex flex-wrap gap-2" aria-label="Solutions">
              {solutionsSought.map((s) => (
                <li key={s} className="text-[11px] font-bold uppercase tracking-wider text-[#071B3A] bg-[#F4F7FA] border-l-4 border-[#0878D1] px-2.5 py-1.5 rounded-xs">
                  {s}
                </li>
              ))}
            </motion.ul>

            <motion.div variants={fadeInUp} className="bg-[#071B3A] text-slate-300 p-6 rounded-xs border border-[#0878D1]/40 relative overflow-hidden">
              <div className="absolute inset-0 bg-tech-grid-dark opacity-40 pointer-events-none" />
              <div className="relative space-y-5">
                <div className="text-[10px] font-mono text-[#168BE8] uppercase font-bold tracking-widest">DIRECT CONTACT</div>

                <div>
                  <div className="flex items-center space-x-2 text-xs font-extrabold text-white uppercase tracking-wider mb-2">
                    <Mail className="w-4 h-4 text-[#168BE8]" aria-hidden="true" />
                    <span>Email</span>
                  </div>
                  <ul className="space-y-1.5 pl-6">
                    {contactInfo.emails.map((email) => (
                      <li key={email}>
                        <a href={`mailto:${email}`} className="text-sm hover:text-[#168BE8] transition-colors break-all">
                          {email}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="flex items-center space-x-2 text-xs font-extrabold text-white uppercase tracking-wider mb-2">
                    <Phone className="w-4 h-4 text-[#168BE8]" aria-hidden="true" />
                    <span>Phone</span>
                  </div>
                  <p className="pl-6 text-sm">
                    <a href={contactInfo.phoneHref} className="hover:text-[#168BE8] transition-colors">
                      {contactInfo.phone}
                    </a>
                  </p>
                </div>

                <p className="pt-4 border-t border-slate-700 text-xs font-extrabold uppercase tracking-widest text-[#168BE8]">
                  Detect. Identify. Track. Protect.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            className="lg:col-span-7"
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <div className="bg-white border border-[#DCE3EA] rounded-xs shadow-2xl overflow-hidden">
              <div className="bg-[#071B3A] text-white px-6 sm:px-8 py-5 border-b border-[#0878D1]/30 flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-mono text-[#168BE8] uppercase font-bold tracking-widest">ENQUIRY FORM</div>
                  <h2 className="text-xl font-extrabold uppercase tracking-wide mt-0.5">Send us your requirements</h2>
                </div>
                <span className="hidden sm:flex w-10 h-10 rounded-full border border-[#168BE8]/50 items-center justify-center" aria-hidden="true">
                  <span className="w-2 h-2 rounded-full bg-[#168BE8] animate-pulse" />
                </span>
              </div>

              <div className="p-6 sm:p-8">
                {submitted ? (
                  <div className="py-10 text-center space-y-4" role="status" aria-live="polite">
                    <div className="w-16 h-16 rounded-full bg-[#DCEEFF] text-[#0878D1] mx-auto flex items-center justify-center">
                      <CheckCircle2 className="w-9 h-9" />
                    </div>
                    <h3 className="text-2xl font-extrabold text-[#071B3A] uppercase">Enquiry prepared</h3>
                    <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                      Your email application should have opened with your enquiry addressed to{' '}
                      <a href={`mailto:${ENQUIRY_TO}?cc=${ENQUIRY_CC}`} className="text-[#0878D1] font-bold">{ENQUIRY_TO}</a>
                      {' '}(copied to {ENQUIRY_CC_TEXT}).
                      Please press send there to complete it. If nothing opened, email us directly at those addresses.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="bg-[#071B3A] hover:bg-[#0B2347] text-white font-extrabold text-xs tracking-wider px-6 py-3 rounded-xs"
                    >
                      EDIT ENQUIRY
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5" noValidate={false}>
                    {product && (
                      <div className="p-3 bg-[#DCEEFF] border border-[#0878D1]/40 rounded-xs text-xs font-bold text-[#0878D1] uppercase tracking-wider">
                        Enquiring about: {product}
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="c-name" className={labelClass}>Name *</label>
                        <input id="c-name" type="text" required autoComplete="name" value={form.name} onChange={update('name')} className={inputClass} />
                      </div>
                      <div>
                        <label htmlFor="c-company" className={labelClass}>Company</label>
                        <input id="c-company" type="text" autoComplete="organization" value={form.company} onChange={update('company')} className={inputClass} />
                      </div>
                      <div>
                        <label htmlFor="c-email" className={labelClass}>Email *</label>
                        <input id="c-email" type="email" required autoComplete="email" value={form.email} onChange={update('email')} className={inputClass} />
                      </div>
                      <div>
                        <label htmlFor="c-phone" className={labelClass}>Phone</label>
                        <input id="c-phone" type="tel" autoComplete="tel" value={form.phone} onChange={update('phone')} className={inputClass} />
                      </div>
                    </div>

                    <fieldset>
                      <legend className={labelClass}>Industry *</legend>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-1">
                        {enquiryInterests.map((opt) => {
                          const checked = form.industry === opt;
                          return (
                            <label
                              key={opt}
                              className={`flex items-center justify-center text-center px-3 py-2.5 rounded-xs border text-xs font-bold uppercase tracking-wider cursor-pointer transition-all has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-[#168BE8] ${
                                checked
                                  ? 'bg-[#071B3A] border-[#0878D1] text-white'
                                  : 'bg-[#F4F7FA] border-slate-300 text-[#071B3A] hover:border-[#0878D1]'
                              }`}
                            >
                              <input
                                type="radio"
                                name="industry"
                                value={opt}
                                checked={checked}
                                onChange={update('industry')}
                                required
                                className="sr-only"
                              />
                              {opt}
                            </label>
                          );
                        })}
                      </div>
                    </fieldset>

                    <div>
                      <label htmlFor="c-message" className={labelClass}>Message *</label>
                      <textarea
                        id="c-message"
                        rows={5}
                        required
                        value={form.message}
                        onChange={update('message')}
                        placeholder="Tell us about your vessel, platform or facility and your operational requirements."
                        className={inputClass}
                      />
                    </div>

                    <div className="pt-1 flex flex-col sm:flex-row sm:items-center gap-4">
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center space-x-3 bg-[#0878D1] hover:bg-[#168BE8] text-white font-extrabold text-sm tracking-wider px-8 py-4 rounded-xs shadow-[0_0_20px_rgba(8,120,209,0.4)] hover:shadow-[0_0_30px_rgba(22,139,232,0.7)] transition-all"
                      >
                        <span>SEND ENQUIRY</span>
                        <Send className="w-4 h-4" />
                      </button>
                      <p className="text-xs text-slate-500">
                        Opens your email application with the enquiry addressed to {ENQUIRY_TO}, copied to {ENQUIRY_CC_TEXT}.
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
