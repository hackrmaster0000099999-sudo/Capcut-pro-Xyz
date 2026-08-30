import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ShieldAlert, ArrowLeft, Mail, FileCheck, AlertCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'DMCA Copyright Policy | CapCut Pro APK Portal',
  description: 'Digital Millennium Copyright Act (DMCA) compliance notice, copyright infringement notification procedure, and designated agent contact for CapCutPro.Org.in.',
};

export default function DmcaPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#09242b] text-cyan-50 selection:bg-cyan-500/30 selection:text-white">
      <Navbar activeSection="dmca" />

      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 py-10 sm:py-16 space-y-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs sm:text-sm text-cyan-300/80">
          <Link href="/" className="hover:text-cyan-200 transition-colors flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <span>/</span>
          <span className="text-gray-300">DMCA Policy</span>
        </div>

        {/* Header Banner */}
        <div className="bg-gradient-to-b from-[#0e3b46] to-[#0a2c34] p-6 sm:p-10 rounded-3xl border border-[#1b5e70] shadow-xl space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-[#144f5e] border border-[#1e687b] text-red-400 flex items-center justify-center shadow-inner">
            <ShieldAlert className="w-6 h-6 text-red-400" />
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              DMCA Copyright Policy
            </h1>
            <p className="text-xs sm:text-sm text-cyan-200/80 mt-1">
              Digital Millennium Copyright Act Compliance • CapCutPro.Org.in
            </p>
          </div>
          <p className="text-sm sm:text-base text-gray-200 leading-relaxed pt-2">
            CapCutPro.Org.in complies with 17 U.S.C. § 512 and the Digital Millennium Copyright Act (&ldquo;DMCA&rdquo;). It is our strict policy to respond promptly to any infringement notices and take appropriate legal actions under the DMCA and other applicable intellectual property laws.
          </p>
        </div>

        {/* Detailed Guidelines */}
        <div className="space-y-6 text-sm sm:text-base text-gray-200 leading-relaxed bg-gradient-to-b from-[#0c313a] to-[#082229] p-6 sm:p-10 rounded-3xl border border-[#16505e] shadow-lg">
          
          <section className="space-y-3">
            <div className="flex items-center gap-2.5 text-lg font-bold text-white">
              <FileCheck className="w-5 h-5 text-cyan-400" />
              <h2>1. Filing a DMCA Notice of Copyright Infringement</h2>
            </div>
            <p>
              If your copyrighted material has been indexed on our website or if hyperlinks to your copyrighted work are listed and you wish to have this material removed, you must provide a written communication containing the elements described below:
            </p>
            <ol className="list-decimal list-inside space-y-2 pl-2 text-gray-300">
              <li>Evidence of authorized authority to act on behalf of the owner of the exclusive right that is allegedly infringed.</li>
              <li>Sufficient contact information (including a valid email address, phone number, and physical mailing address).</li>
              <li>Precise identification and full URLs of the copyrighted work claimed to have been infringed.</li>
              <li>A statement that the complaining party has a good faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law.</li>
              <li>A statement that the information in the notification is accurate, and under penalty of perjury, that the complaining party is authorized to act on behalf of the owner.</li>
              <li>A physical or electronic signature of the authorized person.</li>
            </ol>
          </section>

          <section className="space-y-3 pt-4 border-t border-[#134956]">
            <div className="flex items-center gap-2.5 text-lg font-bold text-white">
              <Mail className="w-5 h-5 text-emerald-400" />
              <h2>2. Designated DMCA Copyright Agent</h2>
            </div>
            <p>
              Please send all written DMCA notifications to our designated copyright response desk:
            </p>
            <div className="p-4 rounded-2xl bg-[#0e3b46] border border-[#1b5e70] space-y-1 font-mono text-xs sm:text-sm text-cyan-200">
              <p><strong>Recipient:</strong> DMCA Compliance Officer</p>
              <p><strong>Website:</strong> https://capcutpro.org.in</p>
              <p><strong>Direct Email:</strong> dmca@capcutpro.org.in</p>
              <p><strong>Contact Form:</strong> <Link href="/contact-us" className="text-emerald-400 underline font-sans">Submit via Online Desk</Link></p>
            </div>
          </section>

          <section className="space-y-3 pt-4 border-t border-[#134956]">
            <div className="flex items-center gap-2.5 text-lg font-bold text-white">
              <AlertCircle className="w-5 h-5 text-amber-400" />
              <h2>3. Processing &amp; Removal Timeline</h2>
            </div>
            <p>
              Upon receiving a complete and valid notification meeting statutory requirements, our technical team will act immediately to remove or disable access to the infringing material within <strong>24 to 48 business hours</strong>.
            </p>
          </section>

        </div>

      </main>

      <Footer />
    </div>
  );
}
