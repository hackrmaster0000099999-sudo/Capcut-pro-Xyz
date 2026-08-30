'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Mail, ArrowLeft, Send, CheckCircle2, MessageSquare, Clock, Globe, ShieldCheck } from 'lucide-react';

export default function ContactUsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: 'General Question & Support',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#09242b] text-cyan-50 selection:bg-cyan-500/30 selection:text-white">
      <Navbar activeSection="contact-us" />

      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 py-10 sm:py-16 space-y-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs sm:text-sm text-cyan-300/80">
          <Link href="/" className="hover:text-cyan-200 transition-colors flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <span>/</span>
          <span className="text-gray-300">Contact Us</span>
        </div>

        {/* Header Banner */}
        <div className="bg-gradient-to-b from-[#0e3b46] to-[#0a2c34] p-6 sm:p-10 rounded-3xl border border-[#1b5e70] shadow-xl space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-[#144f5e] border border-[#1e687b] text-cyan-300 flex items-center justify-center shadow-inner">
            <Mail className="w-6 h-6 text-cyan-300" />
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Contact &amp; Creator Support
            </h1>
            <p className="text-xs sm:text-sm text-cyan-200/80 mt-1">
              Have questions, feedback, or need help with a tutorial? We&apos;re here for you.
            </p>
          </div>
          <p className="text-sm sm:text-base text-gray-200 leading-relaxed pt-2">
            If you have any questions, feedback, or suggestions, feel free to contact us. Our team is always here to help with anything related to CapCut Pro updates, features, or downloads.
          </p>
        </div>

        {/* Contact Information Grid & Form */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Info Side Panel */}
          <div className="space-y-4">
            
            <div className="p-5 rounded-2xl bg-[#0c313a] border border-[#16505e] space-y-2">
              <div className="flex items-center gap-2 text-cyan-300 font-bold text-sm">
                <Mail className="w-4 h-4" />
                <span>Direct Email</span>
              </div>
              <p className="text-xs text-gray-300 font-mono">support@capcutpro.org.in</p>
              <p className="text-xs text-gray-400">For general questions and inquiries</p>
            </div>

            <div className="p-5 rounded-2xl bg-[#0c313a] border border-[#16505e] space-y-2">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                <Clock className="w-4 h-4" />
                <span>Response Time</span>
              </div>
              <p className="text-xs text-gray-300">Within 24 to 48 hours</p>
              <p className="text-xs text-gray-400">Operating Monday – Saturday</p>
            </div>

            <div className="p-5 rounded-2xl bg-[#0c313a] border border-[#16505e] space-y-2">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                <ShieldCheck className="w-4 h-4" />
                <span>DMCA Inquiries</span>
              </div>
              <p className="text-xs text-gray-300 font-mono">dmca@capcutpro.org.in</p>
              <p className="text-xs text-gray-400">Dedicated legal compliance desk</p>
            </div>

          </div>

          {/* Contact Form */}
          <div className="md:col-span-2 p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#0c313a] to-[#082229] border border-[#16505e] shadow-lg">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Message Sent Successfully!</h3>
                <p className="text-sm text-gray-300 max-w-md mx-auto">
                  Thank you for reaching out, <strong className="text-white">{form.name}</strong>. Our editorial and technical support team will reply to <strong className="text-cyan-300">{form.email}</strong> shortly.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: '', email: '', subject: 'General Question & Support', message: '' });
                  }}
                  className="mt-4 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-[#144f5e] hover:bg-[#1a6071] text-cyan-200 transition-colors cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-cyan-300" />
                  <span>Send Us a Direct Message</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-gray-300" htmlFor="contact-name">Your Name</label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="e.g. Alex Miller"
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#09272f] border border-[#185969] text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-gray-300" htmlFor="contact-email">Email Address</label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="your.email@example.com"
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#09272f] border border-[#185969] text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-300" htmlFor="contact-subject">Topic / Subject</label>
                  <select
                    id="contact-subject"
                    value={form.subject}
                    onChange={e => setForm({ ...form, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#09272f] border border-[#185969] text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors cursor-pointer"
                  >
                    <option value="General Question & Support">General Question &amp; Support</option>
                    <option value="Installation / Bug Report">Installation / Bug Report</option>
                    <option value="Feature / Template Suggestion">Feature / Template Suggestion</option>
                    <option value="DMCA & Legal Notice">DMCA &amp; Legal Notice</option>
                    <option value="Partnership & Inquiries">Partnership &amp; Inquiries</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-300" htmlFor="contact-message">Message</label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    placeholder="Describe your question, error code, or suggestion in detail..."
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#09272f] border border-[#185969] text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  id="contact-submit-btn"
                  className="w-full py-3 rounded-xl font-bold bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer text-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Message</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </main>

      <Footer />
    </div>
  );
}
