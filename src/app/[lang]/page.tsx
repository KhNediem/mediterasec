import Link from "next/link";
import { 
  ShieldAlert, 
  ActivitySquare, 
  Component, 
  BrainCircuit, 
  ArrowRight,
  Database,
  Lock,
  GlobeLock,
  ServerCrash,
  Terminal,
  CloudCog,
  Bot,
  Network
} from "lucide-react";
import { getDictionary } from "@/lib/dictionary";
import type { Locale } from "@/middleware";
import { Metadata } from "next";

export async function generateMetadata(props: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await props.params;
  const locale = lang as Locale;
  const dict = (await getDictionary(locale)).metadata.home;

  return {
    title: dict.title,
    description: dict.description,
  };
}

export default async function Home(props: { params: Promise<{ lang: string }> }) {
  const { lang } = await props.params;
  const locale = lang as Locale;
  const dict = (await getDictionary(locale)).home;

  return (
    <div className="flex flex-col w-full bg-meditera-white overflow-hidden">
      
      {/* 1. Hero Section - Refocused on Problem/Solution */}
      <section className="relative w-full min-h-[85vh] flex items-center pt-20 pb-16 px-6 lg:px-8 bg-[#FAFAFA]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
           <div className="absolute top-1/4 right-0 w-[800px] h-[800px] bg-gray-100 rounded-full blur-3xl opacity-50 transform translate-x-1/2 -translate-y-1/4" />
           <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gray-200 rounded-full blur-3xl opacity-30 transform -translate-x-1/2 translate-y-1/4" />
        </div>
        
        <div className="mx-auto max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="text-left animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 shadow-sm text-xs font-semibold text-meditera-darkgray mb-8 uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-meditera-black animate-pulse-slow"></span>
              {dict.heroTag}
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-meditera-black leading-[1.1] mb-8">
              {dict.heroTitle}
            </h1>
            <p className="text-xl leading-relaxed text-gray-500 mb-10 max-w-lg">
              {dict.heroSubtitle}
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href={`/${lang}/pulse#early-access`}
                className="group relative inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-white transition-all duration-200 bg-meditera-black border border-transparent rounded-full hover:bg-meditera-darkgray hover:shadow-xl hover:-translate-y-0.5"
              >
                {dict.ctaPrimary}
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href={`/${lang}/pulse`} 
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold transition-all duration-200 bg-white border border-gray-300 rounded-full text-meditera-black hover:bg-gray-50 hover:border-gray-400"
              >
                {dict.ctaSecondary}
              </Link>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative h-[500px] lg:h-[600px] w-full hidden md:block animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative z-20 w-32 h-32 bg-white rounded-2xl shadow-2xl border border-gray-100 flex items-center justify-center animate-float">
                <ShieldAlert className="w-12 h-12 text-meditera-black" />
              </div>
              <div className="absolute w-[400px] h-[400px] border border-dashed border-gray-300 rounded-full animate-[spin_40s_linear_infinite]" />
              <div className="absolute w-[250px] h-[250px] border border-gray-200 rounded-full animate-[spin_20s_linear_infinite_reverse]" />
              <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-white rounded-xl shadow-lg border border-gray-100 flex items-center justify-center animate-float-delayed">
                <Network className="w-6 h-6 text-gray-400" />
              </div>
              <div className="absolute bottom-1/4 left-1/4 w-16 h-16 bg-white rounded-xl shadow-lg border border-gray-100 flex items-center justify-center animate-float" style={{ animationDelay: "1s" }}>
                <ActivitySquare className="w-6 h-6 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. What is Pulse? - Clear Product Explanation */}
      <section className="py-32 px-6 lg:px-8 bg-white overflow-hidden relative">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="absolute -top-20 -left-20 w-64 h-64 bg-gray-50 rounded-full blur-3xl opacity-70" />
              <div className="relative bg-gray-50 rounded-3xl p-8 border border-gray-100 shadow-sm overflow-hidden group">
                <div className="absolute top-0 right-0 p-10 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity">
                  <Database className="w-64 h-64" />
                </div>
                <div className="flex flex-col gap-6 relative z-10">
                   <div className="w-12 h-12 bg-meditera-black rounded-xl flex items-center justify-center shadow-lg">
                      <Lock className="w-6 h-6 text-white" />
                   </div>
                   <h2 className="text-3xl font-bold text-meditera-black">{dict.whatIsPulseTitle}</h2>
                   <p className="text-lg text-gray-500 leading-relaxed">
                      {dict.whatIsPulseDesc1}
                   </p>
                   <p className="text-lg text-gray-500 leading-relaxed">
                      {dict.whatIsPulseDesc2}
                   </p>
                   <Link href={`/${lang}/pulse`} className="inline-flex items-center font-bold text-meditera-black hover:gap-2 transition-all">
                      Learn about the technology <ArrowRight className="w-4 h-4 ml-1" />
                   </Link>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-bold text-xl mb-2 flex items-center gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm">1</span>
                  Network-Aware
                </h3>
                <p className="text-gray-500 pl-11">Watches the traffic flowing into your office or cloud infrastructure.</p>
              </div>
              <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-bold text-xl mb-2 flex items-center gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm">2</span>
                  Host-Based
                </h3>
                <p className="text-gray-500 pl-11">Monitors the critical servers and devices where your data lives.</p>
              </div>
              <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-bold text-xl mb-2 flex items-center gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm">3</span>
                  Clear Dashboard
                </h3>
                <p className="text-gray-500 pl-11">No jargon. Just clear alerts and suggested actions for your team.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Who Is This For? - Targeting Statement */}
      <section className="relative z-20 px-6 lg:px-8">
        <div className="mx-auto max-w-5xl bg-meditera-black rounded-[3rem] shadow-2xl p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
          <div className="relative z-10">
            <h2 className="text-white text-3xl md:text-5xl font-bold mb-8 leading-tight">
              {dict.companyTitle}
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 font-light max-w-3xl mx-auto leading-relaxed">
              {dict.companyDescription}
            </p>
          </div>
        </div>
      </section>

      {/* 4. Core Areas - Bento Grid (Outcomes) */}
      <section className="w-full py-32 px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-meditera-black sm:text-4xl">{dict.coreAreas}</h2>
            <p className="mt-4 text-lg text-gray-500">{dict.coreSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="group relative bg-gray-50 p-10 rounded-[2rem] border border-gray-200 hover:bg-white hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500 transform group-hover:scale-110 group-hover:rotate-12">
                 <ShieldAlert className="w-48 h-48" />
              </div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                  <ShieldAlert className="w-6 h-6 text-meditera-black" />
                </div>
                <h3 className="text-2xl font-bold text-meditera-black mb-4">{dict.core1Title}</h3>
                <p className="text-gray-500 leading-relaxed text-lg max-w-sm">
                  {dict.core1Desc}
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative bg-gray-50 p-10 rounded-[2rem] border border-gray-200 hover:bg-white hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500 transform group-hover:scale-110 group-hover:-rotate-12">
                 <ActivitySquare className="w-48 h-48" />
              </div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                  <ActivitySquare className="w-6 h-6 text-meditera-black" />
                </div>
                <h3 className="text-2xl font-bold text-meditera-black mb-4">{dict.core2Title}</h3>
                <p className="text-gray-500 leading-relaxed text-lg max-w-sm">
                  {dict.core2Desc}
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative bg-gray-50 p-10 rounded-[2rem] border border-gray-200 hover:bg-white hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500 transform group-hover:scale-110 group-hover:rotate-6">
                 <Network className="w-48 h-48" />
              </div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                  <Network className="w-6 h-6 text-meditera-black" />
                </div>
                <h3 className="text-2xl font-bold text-meditera-black mb-4">{dict.core3Title}</h3>
                <p className="text-gray-500 leading-relaxed text-lg max-w-sm">
                  {dict.core3Desc}
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="group relative bg-meditera-black p-10 rounded-[2rem] border border-gray-800 hover:shadow-2xl hover:shadow-gray-900/50 hover:-translate-y-1 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-20 transition-opacity duration-500 transform group-hover:scale-110 group-hover:-rotate-6">
                 <BrainCircuit className="w-48 h-48 text-white" />
              </div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-gray-800 rounded-2xl border border-gray-700 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                  <BrainCircuit className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{dict.core4Title}</h3>
                <p className="text-gray-400 leading-relaxed text-lg max-w-sm">
                  {dict.core4Desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Performance & Proof Section */}
      <section className="w-full py-32 bg-gray-50 border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-sm font-bold tracking-widest text-meditera-darkgray uppercase mb-6">{dict.expertise}</h3>
              <div className="text-6xl md:text-8xl font-black text-meditera-black mb-6">
                {dict.proofStat}
              </div>
              <p className="text-2xl text-gray-500 font-light leading-relaxed">
                {dict.proofDesc}
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-4">
               <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm flex items-center gap-6">
                  <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center">
                    <ShieldAlert className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">High Detection Accuracy</h4>
                    <p className="text-gray-500 text-sm">Validated against industry standard benchmarks.</p>
                  </div>
               </div>
               <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm flex items-center gap-6">
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
                    <ActivitySquare className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Resource Efficient</h4>
                    <p className="text-gray-500 text-sm">Low CPU/RAM overhead for SME infrastructure.</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Trust & Recognition Section */}
      <section className="py-24 px-6 lg:px-8 bg-white border-t border-gray-100">
         <div className="mx-auto max-w-7xl">
            <h2 className="text-center text-sm font-bold tracking-widest text-gray-400 uppercase mb-12">{dict.trustTitle}</h2>
            <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-60 hover:opacity-100 transition-opacity">
               <div className="flex flex-col items-center">
                  <span className="font-bold text-lg text-meditera-black">{dict.trust1}</span>
               </div>
               <div className="flex flex-col items-center">
                  <span className="font-bold text-lg text-meditera-black">{dict.trust2}</span>
               </div>
               <div className="flex flex-col items-center">
                  <span className="font-bold text-lg text-meditera-black">{dict.trust3}</span>
               </div>
            </div>
         </div>
      </section>

    </div>
  );
}
