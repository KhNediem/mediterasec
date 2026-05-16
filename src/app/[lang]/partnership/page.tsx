import Link from "next/link";
import { 
  Building2, 
  FlaskConical, 
  Lightbulb, 
  ServerCog, 
  Microscope,
  UserCheck,
  Zap,
  Eye,
  Handshake,
  ArrowRight
} from "lucide-react";

import { getDictionary } from "@/lib/dictionary";
import type { Locale } from "@/middleware";
import { Metadata } from "next";

export async function generateMetadata(props: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await props.params;
  const locale = lang as Locale;
  const dict = (await getDictionary(locale)).metadata.partnership;

  return {
    title: dict.title,
    description: dict.description,
  };
}


export default async function PartnershipPage(props: { params: Promise<{ lang: string }> }) {
  const { lang } = await props.params;
  const locale = lang as Locale;
  const dict = (await getDictionary(locale)).partnership;

  return (
    <div className="flex flex-col w-full bg-meditera-white overflow-hidden">
      
      {/* 1. Hero Section */}
      <section className="relative w-full min-h-[60vh] flex items-center pt-24 pb-16 px-6 lg:px-8 bg-[#FAFAFA]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
           <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-gray-100 rounded-full blur-3xl opacity-50 transform -translate-x-1/2 translate-y-1/2" />
        </div>
        
        <div className="mx-auto max-w-4xl text-center relative z-10 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 shadow-sm text-xs font-semibold text-meditera-darkgray mb-8 uppercase tracking-widest">
            {dict.heroTag}
          </div>
          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-meditera-black leading-[1.1] mb-8">
            {dict.heroTitle}
          </h1>
          <p className="text-xl font-light leading-relaxed text-gray-500 max-w-3xl mx-auto mb-10">
            {dict.heroSubtitle}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href={`/${lang}/contact?reason=partnership`}
              className="group relative inline-flex items-center justify-center px-10 py-5 text-sm font-semibold text-white transition-all duration-200 bg-meditera-black border border-transparent rounded-full hover:bg-meditera-darkgray hover:shadow-xl hover:-translate-y-0.5"
            >
              {dict.ctaPrimary}
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Concrete Offer & Ask */}
      <section className="relative z-20 -mt-10 px-6 lg:px-8">
        <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-10 md:p-12 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-gray-50 rounded-xl">
                <Zap className="w-6 h-6 text-meditera-black" />
              </div>
              <h2 className="text-2xl font-bold text-meditera-black">{dict.offerTitle}</h2>
            </div>
            <p className="text-lg leading-relaxed text-gray-500">
              {dict.offerDesc}
            </p>
          </div>
          
          <div className="bg-meditera-black rounded-3xl shadow-xl border border-gray-800 p-10 md:p-12 text-white animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-gray-800 rounded-xl">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white">{dict.askTitle}</h2>
            </div>
            <p className="text-lg leading-relaxed text-gray-400">
              {dict.askDesc}
            </p>
          </div>
        </div>
      </section>

      {/* 3. Collaboration Streams */}
      <section className="w-full py-32 px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-widest text-gray-400 uppercase mb-4">{dict.areasTitle}</h2>
            <h3 className="text-3xl font-bold text-meditera-black">Specific Engagement Models</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-gray-50 rounded-[2rem] border border-gray-100 hover:bg-white hover:shadow-lg transition-all duration-300">
               <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6">
                 <Building2 className="w-6 h-6 text-meditera-black" />
               </div>
               <h4 className="text-xl font-bold mb-4">{dict.area1Title}</h4>
               <p className="text-gray-500">{dict.area1Desc}</p>
            </div>
            <div className="p-8 bg-gray-50 rounded-[2rem] border border-gray-100 hover:bg-white hover:shadow-lg transition-all duration-300">
               <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6">
                 <ServerCog className="w-6 h-6 text-meditera-black" />
               </div>
               <h4 className="text-xl font-bold mb-4">{dict.area2Title}</h4>
               <p className="text-gray-500">{dict.area2Desc}</p>
            </div>
            <div className="p-8 bg-gray-50 rounded-[2rem] border border-gray-100 hover:bg-white hover:shadow-lg transition-all duration-300">
               <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6">
                 <FlaskConical className="w-6 h-6 text-meditera-black" />
               </div>
               <h4 className="text-xl font-bold mb-4">{dict.area3Title}</h4>
               <p className="text-gray-500">{dict.area3Desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Final CTA */}
      <section className="w-full py-32 px-6 lg:px-8 bg-gray-50 border-t border-gray-200 text-center">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-sm font-bold tracking-widest text-gray-400 uppercase mb-8">{dict.areasTitle}</h2>
          <h3 className="text-4xl font-bold text-meditera-black mb-8 leading-tight">
            {dict.ctaFooterTitle}
          </h3>
          <p className="text-xl text-gray-500 mb-12 max-w-2xl mx-auto">
            Whether you represent a business infrastructure or an academic lab, we're ready to discuss how MediteraSec can support your security goals.
          </p>
          <Link 
            href={`/${lang}/contact?reason=partnership`} 
            className="inline-flex items-center justify-center px-12 py-5 text-sm font-semibold transition-all duration-300 bg-meditera-black border border-transparent rounded-full text-white hover:bg-meditera-darkgray shadow-2xl hover:-translate-y-1"
          >
            {dict.ctaFooterButton}
          </Link>
        </div>
      </section>

    </div>
  );
}
