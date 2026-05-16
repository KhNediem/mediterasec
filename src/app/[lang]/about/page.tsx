import Link from "next/link";
import { ShieldAlert, BrainCircuit, Network, BookOpen, Quote } from "lucide-react";

import { getDictionary } from "@/lib/dictionary";
import type { Locale } from "@/middleware";
import { Metadata } from "next";

export async function generateMetadata(props: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await props.params;
  const locale = lang as Locale;
  const dict = (await getDictionary(locale)).metadata.about;

  return {
    title: dict.title,
    description: dict.description,
  };
}


export default async function AboutPage(props: { params: Promise<{ lang: string }> }) {
  const { lang } = await props.params;
  return (
    <div className="flex flex-col w-full bg-meditera-white overflow-hidden">
      
      {/* 1. Hero Section */}
      <section className="relative w-full min-h-[60vh] flex items-center pt-24 pb-16 px-6 lg:px-8 bg-[#FAFAFA]">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
           <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gray-100 rounded-full blur-3xl opacity-50 transform translate-x-1/2 -translate-y-1/2" />
        </div>
        
        <div className="mx-auto max-w-4xl text-center relative z-10 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 shadow-sm text-xs font-semibold text-meditera-darkgray mb-8 uppercase tracking-widest">
            About Us
          </div>
          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-meditera-black leading-[1.1] mb-8">
            Engineering security for the human element.
          </h1>
          <p className="text-xl font-light leading-relaxed text-gray-500 max-w-2xl mx-auto">
            Mediterasec is a cybersecurity company focused on building intelligent, accessible, and human-centered defensive technologies.
          </p>
        </div>
      </section>

      {/* 2. Floating Mission Banner */}
      <section className="relative z-20 -mt-10 px-6 lg:px-8">
        <div className="mx-auto max-w-5xl bg-meditera-black rounded-2xl shadow-2xl p-10 md:p-14 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0 p-4 bg-gray-800 border border-gray-700 rounded-full">
              <Quote className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-xl md:text-2xl font-light leading-relaxed text-gray-300 text-center md:text-left">
              Our mission is to make advanced cybersecurity more <strong className="text-white font-bold">accessible, adaptable, and effective</strong>. Security shouldn't be reserved for massive enterprises with dedicated SOCs.
            </h2>
          </div>
        </div>
      </section>

      {/* 3. Founder Section - Highly Prominent */}
      <section className="w-full py-32 px-6 lg:px-8 bg-white relative overflow-hidden">
        <div className="absolute left-0 top-1/2 w-[400px] h-[400px] border border-dashed border-gray-200 rounded-full animate-[spin_40s_linear_infinite] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        
        <div className="mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            {/* Animated Photo/Avatar */}
            <div className="relative w-64 h-64 lg:w-80 lg:h-80 flex-shrink-0 animate-float">
              <div className="absolute inset-0 bg-gray-100 rounded-[2rem] transform rotate-6 scale-105 border border-gray-200 transition-transform hover:rotate-12 duration-500" />
              <div className="absolute inset-0 bg-white rounded-[2rem] border border-gray-200 shadow-xl flex flex-col items-center justify-center overflow-hidden z-10 group cursor-default">
                <div className="absolute inset-0 bg-meditera-black opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
                <span className="text-7xl font-extrabold text-gray-300 tracking-tighter group-hover:scale-110 transition-transform duration-500">NK</span>
              </div>
            </div>

            {/* Founder Info */}
            <div className="text-center lg:text-left">
              <h2 className="text-sm font-bold tracking-widest text-gray-400 uppercase mb-4">The Founder</h2>
              <h3 className="text-4xl font-bold text-meditera-black mb-4">Nedim Khalfallah</h3>
              <p className="text-meditera-darkgray font-medium uppercase tracking-widest text-sm mb-8 border-b border-gray-200 pb-8 inline-block lg:block">
                Software Engineer & Security Researcher
              </p>
              
              <p className="text-lg leading-relaxed text-gray-500 max-w-xl mb-8">
                Building practical, intelligent cybersecurity systems that combine technical depth with accessibility. Nedim focuses on intrusion detection systems and machine learning applications in modern defensive technologies.
              </p>

              <div className="flex items-center justify-center lg:justify-start gap-4">
                <a href="#" className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-50 border border-gray-200 text-gray-500 hover:text-meditera-black hover:bg-white hover:shadow-md transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                <a href="#" className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-50 border border-gray-200 text-gray-500 hover:text-meditera-black hover:bg-white hover:shadow-md transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </a>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* 4. What We Focus On - Bento Grid */}
      <section className="w-full py-24 px-6 lg:px-8 bg-gray-50 border-y border-gray-200">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-widest text-gray-400 uppercase mb-4">Research & Engineering</h2>
            <h3 className="text-3xl font-bold text-meditera-black">What We Focus On</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="group relative bg-white p-10 rounded-[2rem] border border-gray-200 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-5 transition-opacity duration-500 transform group-hover:scale-110">
                 <ShieldAlert className="w-48 h-48" />
              </div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-gray-50 rounded-2xl border border-gray-100 flex items-center justify-center mb-8">
                  <ShieldAlert className="w-6 h-6 text-meditera-black group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h3 className="text-2xl font-bold text-meditera-black mb-3">Intrusion Detection</h3>
                <p className="text-gray-500 leading-relaxed text-lg max-w-sm">
                  Developing host and network-based technologies capable of identifying suspicious activity in real time.
                </p>
              </div>
            </div>

            <div className="group relative bg-meditera-black p-10 rounded-[2rem] border border-gray-800 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-10 transition-opacity duration-500 transform group-hover:scale-110">
                 <BrainCircuit className="w-48 h-48 text-white" />
              </div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-gray-800 rounded-2xl border border-gray-700 flex items-center justify-center mb-8">
                  <BrainCircuit className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">AI-Driven Security</h3>
                <p className="text-gray-400 leading-relaxed text-lg max-w-sm">
                  Applying machine learning to improve anomaly detection, threat analysis, and automated operations.
                </p>
              </div>
            </div>

            <div className="group relative bg-white p-10 rounded-[2rem] border border-gray-200 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-5 transition-opacity duration-500 transform group-hover:scale-110">
                 <Network className="w-48 h-48" />
              </div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-gray-50 rounded-2xl border border-gray-100 flex items-center justify-center mb-8">
                  <Network className="w-6 h-6 text-meditera-black group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h3 className="text-2xl font-bold text-meditera-black mb-3">Infrastructure Protection</h3>
                <p className="text-gray-500 leading-relaxed text-lg max-w-sm">
                  Designing scalable and lightweight systems that help organizations secure modern digital environments.
                </p>
              </div>
            </div>

            <div className="group relative bg-white p-10 rounded-[2rem] border border-gray-200 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-5 transition-opacity duration-500 transform group-hover:scale-110">
                 <BookOpen className="w-48 h-48" />
              </div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-gray-50 rounded-2xl border border-gray-100 flex items-center justify-center mb-8">
                  <BookOpen className="w-6 h-6 text-meditera-black group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h3 className="text-2xl font-bold text-meditera-black mb-3">Security Research</h3>
                <p className="text-gray-500 leading-relaxed text-lg max-w-sm">
                  Exploring modern cybersecurity challenges through continuous research, experimentation, and engineering.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Closing CTA */}
      <section className="w-full py-32 px-6 lg:px-8 bg-white text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold text-meditera-black mb-8">
            Interested in exploring collaboration opportunities?
          </h2>
          <Link 
            href={`/${lang}/contact`} 
            className="inline-flex items-center justify-center px-10 py-5 text-sm font-semibold transition-all duration-300 bg-meditera-black border border-transparent rounded-full text-white hover:bg-meditera-darkgray shadow-xl hover:-translate-y-1"
          >
            Get in Touch
          </Link>
        </div>
      </section>

    </div>
  );
}
