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

export default async function Home(props: { params: Promise<{ lang: string }> }) {
  const { lang } = await props.params;
  const locale = lang as Locale;
  const dict = (await getDictionary(locale)).home;

  const techStack = [
    { name: dict.tech1, icon: <BrainCircuit className="w-4 h-4 mr-2" /> },
    { name: dict.tech2, icon: <GlobeLock className="w-4 h-4 mr-2" /> },
    { name: dict.tech3, icon: <ShieldAlert className="w-4 h-4 mr-2" /> },
    { name: dict.tech4, icon: <ServerCrash className="w-4 h-4 mr-2" /> },
    { name: dict.tech5, icon: <Terminal className="w-4 h-4 mr-2" /> },
    { name: dict.tech6, icon: <CloudCog className="w-4 h-4 mr-2" /> },
    { name: dict.tech7, icon: <Database className="w-4 h-4 mr-2" /> },
    { name: dict.tech8, icon: <Bot className="w-4 h-4 mr-2" /> },
  ];

  return (
    <div className="flex flex-col w-full bg-meditera-white overflow-hidden">
      
      {/* 1. Hero Section */}
      <section className="relative w-full min-h-[85vh] flex items-center pt-20 pb-16 px-6 lg:px-8 bg-[#FAFAFA]">
        {/* Abstract Background Elements */}
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
                href={`/${lang}/pulse`}
                className="group relative inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-white transition-all duration-200 bg-meditera-black border border-transparent rounded-full hover:bg-meditera-darkgray hover:shadow-xl hover:-translate-y-0.5"
              >
                {dict.exploreSolutions}
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href={`/${lang}/contact`} 
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold transition-all duration-200 bg-white border border-gray-300 rounded-full text-meditera-black hover:bg-gray-50 hover:border-gray-400"
              >
                {dict.contact}
              </Link>
            </div>
          </div>

          {/* Animated Hero Visuals */}
          <div className="relative h-[500px] lg:h-[600px] w-full hidden md:block animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Central Hub */}
              <div className="relative z-20 w-32 h-32 bg-white rounded-2xl shadow-2xl border border-gray-100 flex items-center justify-center animate-float">
                <ShieldAlert className="w-12 h-12 text-meditera-black" />
              </div>
              
              {/* Orbiting Elements */}
              <div className="absolute w-[400px] h-[400px] border border-dashed border-gray-300 rounded-full animate-[spin_40s_linear_infinite]" />
              <div className="absolute w-[250px] h-[250px] border border-gray-200 rounded-full animate-[spin_20s_linear_infinite_reverse]" />
              
              {/* Floating Nodes */}
              <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-white rounded-xl shadow-lg border border-gray-100 flex items-center justify-center animate-float-delayed">
                <Network className="w-6 h-6 text-gray-400" />
              </div>
              <div className="absolute bottom-1/4 left-1/4 w-16 h-16 bg-white rounded-xl shadow-lg border border-gray-100 flex items-center justify-center animate-float" style={{ animationDelay: "1s" }}>
                <ActivitySquare className="w-6 h-6 text-gray-400" />
              </div>
              <div className="absolute top-1/2 left-12 w-12 h-12 bg-meditera-black rounded-full shadow-lg flex items-center justify-center animate-float-delayed" style={{ animationDelay: "2s" }}>
                <Lock className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Company Introduction - Sleek Banner */}
      <section className="relative z-20 -mt-10 px-6 lg:px-8">
        <div className="mx-auto max-w-5xl bg-white rounded-2xl shadow-xl border border-gray-100 p-10 md:p-14 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0 p-4 bg-gray-50 rounded-full">
              <Component className="w-8 h-8 text-meditera-black" />
            </div>
            <h2 className="text-xl md:text-2xl font-medium leading-relaxed text-meditera-darkgray text-center md:text-left">
              <strong className="text-meditera-black font-bold">{dict.companyTitle}</strong> {dict.companyDescription}
            </h2>
          </div>
        </div>
      </section>

      {/* 3. Core Areas - Bento Grid */}
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

      {/* 5. Technology / Expertise Section - Marquee */}
      <section className="w-full py-20 bg-gray-50 border-t border-gray-200 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-10 text-center">
          <h3 className="text-sm font-bold tracking-widest text-meditera-darkgray uppercase">{dict.expertise}</h3>
        </div>
        
        {/* Infinite scrolling marquee */}
        <div className="relative w-full flex overflow-x-hidden group">
          <div className="animate-marquee whitespace-nowrap flex items-center group-hover:[animation-play-state:paused]">
            {/* Duplicate the array to create seamless loop */}
            {[...techStack, ...techStack].map((tech, idx) => (
              <div 
                key={idx} 
                className="mx-4 flex items-center px-6 py-4 rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md hover:border-gray-300 transition-all cursor-default"
              >
                <span className="text-gray-500">{tech.icon}</span>
                <span className="text-sm font-bold text-meditera-black">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
