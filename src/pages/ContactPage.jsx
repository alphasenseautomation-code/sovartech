import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Phone, Send, ShieldCheck, CheckCircle2, MessageSquare } from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import { companyDetails } from '../data/sovarData';
import { enquiryInterests, contactPage } from '../data/pageContent';
import heroImg from '../assets/hero-bg.png';
import usePageMeta from '../hooks/usePageMeta';
import {
  fadeInUp,
  fadeInRight,
  staggerContainer,
  viewportOnce
} from '../hooks/useScrollAnimation';

// Server-side endpoint (api/enquiry.js) that sends the enquiry through Resend.
const ENQUIRY_ENDPOINT = '/api/enquiry';
const SEND_ERROR = 'Unable to send your enquiry at the moment. Please try again.';

const EMPTY_FORM = {
  name: '',
  company: '',
  email: '',
  phone: '',
  industry: '',
  message: '',
  website: '' // honeypot — hidden from visitors, only bots fill it
};

const inputClass =
  'w-full px-4 py-3 bg-[#F4F7FA] border border-slate-300 rounded-xs text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#0878D1] focus:bg-white transition-all';
const labelClass = 'block text-xs font-extrabold text-[#071B3A] uppercase tracking-wider mb-1';

export default function ContactPage() {
  usePageMeta(
    'Contact',
    "Contact SOVAR TECH PRIVATE LIMITED — let's protect the airspace together. projects@sovartech.com"
  );

  const [searchParams] = useSearchParams();
  const product = searchParams.get('product') || '';

  const [form, setForm] = useState(EMPTY_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (sending) return;
    setSending(true);
    setError('');
    try {
      const response = await fetch(ENQUIRY_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, product })
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok || !result.ok) {
        // Keep the entered data so the visitor can try again.
        setError(result.error || SEND_ERROR);
        return;
      }
      setForm(EMPTY_FORM);
      setSubmitted(true);
    } catch {
      setError(SEND_ERROR);
    } finally {
      setSending(false);
    }
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

      <section id="enquiry" className="py-14 md:py-28 bg-white text-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-tech-grid-light opacity-60 pointer-events-none" />
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Row 1: company content | Global Contact | Key Contacts
              (desktop 3 columns; tablet: content full width, cards side by side; mobile stacked) */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 items-start"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {/* Column 1: company content */}
            <div className="md:col-span-2 lg:col-span-1 space-y-8">
              <motion.div variants={fadeInUp}>
                <div className="inline-flex items-center space-x-2 bg-[#DCEEFF] text-[#0878D1] px-3.5 py-1.5 rounded-xs text-xs font-extrabold tracking-widest uppercase mb-4">
                  <ShieldCheck className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>CONTACT US</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#071B3A] uppercase tracking-tight leading-tight">
                  {companyDetails.name}
                  <span className="block text-[#0878D1]">{companyDetails.tagline}</span>
                </h2>
                <div className="w-20 h-1 bg-[#0878D1] rounded-full mt-5" />
                <p className="text-base text-slate-600 leading-relaxed mt-5">
                  {contactPage.intro}
                </p>
              </motion.div>
  
              <motion.ul variants={fadeInUp} className="flex flex-wrap gap-2" aria-label="Areas of expertise">
                {contactPage.services.map((s) => (
                  <li key={s} className="text-[11px] font-bold uppercase tracking-wider text-[#071B3A] bg-[#F4F7FA] border-l-4 border-[#0878D1] px-2.5 py-1.5 rounded-xs">
                    {s}
                  </li>
                ))}
              </motion.ul>
            </div>

            {/* Column 2: Global Contact */}
            <motion.div variants={fadeInUp} className="bg-[#071B3A] text-slate-300 p-6 rounded-xs border border-[#0878D1]/40 relative overflow-hidden">
              <div className="absolute inset-0 bg-tech-grid-dark opacity-40 pointer-events-none" />
              <div className="relative space-y-5">
                <div className="text-[10px] font-mono text-[#168BE8] uppercase font-bold tracking-widest">GLOBAL CONTACT</div>

                {contactPage.regions.map((region) => (
                  <div key={region.country}>
                    <div className="flex items-center space-x-2 text-xs font-extrabold text-white uppercase tracking-wider mb-2">
                      <span className="w-4 text-center text-sm leading-none" aria-hidden="true">{region.flag}</span>
                      <span>{region.country}</span>
                    </div>
                    <ul className="space-y-1.5 pl-6 text-sm">
                      {region.note && <li className="text-slate-400">{region.note}</li>}
                      {region.phones?.map((phone) => (
                        <li key={phone.href} className="flex items-center space-x-2">
                          <Phone className="w-3.5 h-3.5 text-[#168BE8] shrink-0" aria-hidden="true" />
                          <a href={phone.href} className="hover:text-[#168BE8] transition-colors">{phone.label}</a>
                        </li>
                      ))}
                      <li className="flex items-center space-x-2">
                        <Mail className="w-3.5 h-3.5 text-[#168BE8] shrink-0" aria-hidden="true" />
                        <a href={`mailto:${region.email}`} className="hover:text-[#168BE8] transition-colors break-all">{region.email}</a>
                      </li>
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Column 3: Key Contacts */}
            <motion.div variants={fadeInUp} className="bg-[#071B3A] text-slate-300 p-6 rounded-xs border border-[#0878D1]/40 relative overflow-hidden">
              <div className="absolute inset-0 bg-tech-grid-dark opacity-40 pointer-events-none" />
              <div className="relative space-y-5">
                <div className="text-[10px] font-mono text-[#168BE8] uppercase font-bold tracking-widest">KEY CONTACTS</div>

                {contactPage.keyContacts.map((person) => (
                  <div key={person.email}>
                    <div className="text-xs font-extrabold text-white uppercase tracking-wider">{person.name}</div>
                    <div className="text-[11px] font-bold text-[#168BE8] mt-0.5 mb-2">{person.title}</div>
                    <ul className="space-y-1.5 text-sm">
                      {person.phones.map((phone) => (
                        <li key={phone.href} className="flex items-center space-x-2">
                          <Phone className="w-3.5 h-3.5 text-[#168BE8] shrink-0" aria-hidden="true" />
                          <a href={phone.href} className="hover:text-[#168BE8] transition-colors">{phone.label}</a>
                        </li>
                      ))}
                      <li className="flex items-center space-x-2">
                        <Mail className="w-3.5 h-3.5 text-[#168BE8] shrink-0" aria-hidden="true" />
                        <a href={`mailto:${person.email}`} className="hover:text-[#168BE8] transition-colors break-all">{person.email}</a>
                      </li>
                    </ul>
                  </div>
                ))}

                <div className="pt-4 border-t border-slate-700">
                  <p className="text-xs font-extrabold uppercase tracking-widest text-[#168BE8]">{contactPage.closing.name}</p>
                  <p className="text-xs text-slate-400 mt-1">{contactPage.closing.tagline}</p>
                  <p className="text-[11px] text-slate-400 leading-relaxed mt-2">{contactPage.services.join(' | ')}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Row 2: full-width enquiry form */}
          <motion.div
            className="mt-16 md:mt-20"
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <div id="enquiry-form" data-anchor className="bg-white border border-[#DCE3EA] rounded-xs shadow-2xl overflow-hidden">
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
                    <h3 className="text-2xl font-extrabold text-[#071B3A] uppercase">Enquiry sent</h3>
                    <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                      Thank you for contacting SOVAR TECH. Your enquiry has been sent to our team and we will get back to you shortly.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="bg-[#071B3A] hover:bg-[#0B2347] text-white font-extrabold text-xs tracking-wider px-6 py-3 rounded-xs"
                    >
                      SEND ANOTHER ENQUIRY
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

                    <div>
                      <label htmlFor="c-industry" className={labelClass}>Industry *</label>
                      {/* Placeholder has an empty value, so `required` blocks submitting without a real choice */}
                      <select
                        id="c-industry"
                        name="industry"
                        required
                        value={form.industry}
                        onChange={update('industry')}
                        className={`${inputClass} ${form.industry ? '' : 'text-slate-400'}`}
                      >
                        <option value="" disabled>Select your industry</option>
                        {enquiryInterests.map((opt) => (
                          <option key={opt} value={opt} className="text-slate-800">{opt}</option>
                        ))}
                      </select>
                    </div>

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

                    {/* Honeypot: off-screen and hidden from assistive tech; bots that fill it are dropped server-side */}
                    <div className="absolute -left-[9999px] w-px h-px overflow-hidden" aria-hidden="true">
                      <label htmlFor="c-website">Website</label>
                      <input id="c-website" type="text" name="website" tabIndex={-1} autoComplete="off" value={form.website} onChange={update('website')} />
                    </div>

                    <div className="pt-1 flex flex-col sm:flex-row sm:items-center gap-4">
                      <button
                        type="submit"
                        disabled={sending}
                        aria-busy={sending}
                        className="inline-flex items-center justify-center space-x-3 bg-[#0878D1] hover:bg-[#168BE8] text-white font-extrabold text-sm tracking-wider px-8 py-4 rounded-xs shadow-[0_0_20px_rgba(8,120,209,0.4)] hover:shadow-[0_0_30px_rgba(22,139,232,0.7)] transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        <span>{sending ? 'SENDING…' : 'SEND ENQUIRY'}</span>
                        <Send className="w-4 h-4" />
                      </button>
                      {error && (
                        <p className="text-xs text-red-600" role="alert">
                          {error}
                        </p>
                      )}
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
