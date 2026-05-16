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
  const locale = lang as Locale;
  const dict = (await getDictionary(locale)).about;

  return (
    <div className="flex flex-col w-full bg-meditera-white overflow-hidden">
      
      {/* 1. Hero Section */}
      <section className="relative w-full min-h-[60vh] flex items-center pt-24 pb-16 px-6 lg:px-8 bg-[#FAFAFA]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
           <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gray-100 rounded-full blur-3xl opacity-50 transform translate-x-1/2 -translate-y-1/2" />
        </div>
        
        <div className="mx-auto max-w-4xl text-center relative z-10 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 shadow-sm text-xs font-semibold text-meditera-darkgray mb-8 uppercase tracking-widest">
            {dict.title}
          </div>
          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-meditera-black leading-[1.1] mb-8">
            {dict.subtitle}
          </h1>
        </div>
      </section>

      {/* 2. Mission Statement & Context */}
      <section className="relative z-20 -mt-10 px-6 lg:px-8">
        <div className="mx-auto max-w-5xl bg-meditera-black rounded-2xl shadow-2xl p-10 md:p-14 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0 p-4 bg-gray-800 border border-gray-700 rounded-full">
                <Quote className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-xl md:text-2xl font-bold leading-relaxed text-white text-center md:text-left">
                {dict.missionTitle}
              </h2>
            </div>
            <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed max-w-4xl mx-auto md:ml-24">
              {dict.missionSubtitle}
            </p>
          </div>
        </div>
      </section>

      {/* 3. The Story & Stage Section */}
      <section className="w-full py-32 px-6 lg:px-8 bg-gray-50 border-b border-gray-200">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Origin Story */}
            <div className="space-y-6">
              <h2 className="text-sm font-bold tracking-widest text-gray-400 uppercase">{dict.focusTitle}</h2>
              <h3 className="text-3xl font-bold text-meditera-black">{dict.storyTitle}</h3>
              <p className="text-lg leading-relaxed text-gray-500">
                {dict.storyDesc}
              </p>
            </div>
            
            {/* Company Stage */}
            <div className="space-y-6">
              <h2 className="text-sm font-bold tracking-widest text-gray-400 uppercase">Current Status</h2>
              <h3 className="text-3xl font-bold text-meditera-black">{dict.stageTitle}</h3>
              <p className="text-lg leading-relaxed text-gray-500">
                {dict.stageDesc}
              </p>
              <div className="flex items-center gap-2 text-[var(--color-pulse-navy)] font-bold">
                <div className="w-2 h-2 rounded-full bg-[var(--color-pulse-navy)] animate-pulse" />
                Early Access Open
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Founder Section */}
      <section className="w-full py-32 px-6 lg:px-8 bg-white relative overflow-hidden">
        <div className="absolute left-0 top-1/2 w-[400px] h-[400px] border border-dashed border-gray-200 rounded-full animate-[spin_40s_linear_infinite] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        
        <div className="mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="relative w-64 h-64 lg:w-80 lg:h-80 flex-shrink-0 animate-float">
              <div className="absolute inset-0 bg-gray-100 rounded-[2rem] transform rotate-6 scale-105 border border-gray-200" />
              <div className="absolute inset-0 bg-white rounded-[2rem] border border-gray-200 shadow-xl flex flex-col items-center justify-center overflow-hidden z-10 group cursor-default">
                <span className="text-7xl font-extrabold text-gray-300 tracking-tighter">NK</span>
              </div>
            </div>

            <div className="text-center lg:text-left">
              <h2 className="text-sm font-bold tracking-widest text-gray-400 uppercase mb-4">{dict.teamTitle}</h2>
              <h3 className="text-4xl font-bold text-meditera-black mb-2">{dict.founderName}</h3>
              <p className="text-meditera-darkgray font-medium uppercase tracking-widest text-sm mb-8 border-b border-gray-200 pb-8 inline-block lg:block">
                {dict.founderRole}
              </p>
              
              <p className="text-lg leading-relaxed text-gray-500 max-w-xl mb-8">
                {dict.founderBio}
              </p>

              <div className="flex items-center justify-center lg:justify-start gap-4">
                <a 
                  href="https://www.linkedin.com/in/nediem-khalfallah/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-50 border border-gray-200 text-gray-500 hover:text-[#0A66C2] hover:bg-white hover:shadow-md transition-all"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                <a 
                  href="https://github.com/KhNediem" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-50 border border-gray-200 text-gray-500 hover:text-black hover:bg-white hover:shadow-md transition-all"
                  aria-label="GitHub"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Closing CTA */}
      <section className="w-full py-32 px-6 lg:px-8 bg-white text-center border-t border-gray-100">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold text-meditera-black mb-8 leading-relaxed">
            {dict.ctaTitle}
          </h2>
          <Link 
            href={`/${lang}/contact`} 
            className="inline-flex items-center justify-center px-10 py-5 text-sm font-semibold transition-all duration-300 bg-meditera-black border border-transparent rounded-full text-white hover:bg-meditera-darkgray shadow-xl hover:-translate-y-1"
          >
            {dict.ctaButton}
          </Link>
        </div>
      </section>

    </div>
  );
}
