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
  return (
    <div className="flex flex-col w-full bg-meditera-white overflow-hidden">
      
      {/* 1. Hero Section */}
      <section className="relative w-full min-h-[60vh] flex items-center pt-24 pb-16 px-6 lg:px-8 bg-[#FAFAFA]">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
           <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-gray-100 rounded-full blur-3xl opacity-50 transform -translate-x-1/2 translate-y-1/2" />
        </div>
        
        <div className="mx-auto max-w-4xl text-center relative z-10 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 shadow-sm text-xs font-semibold text-meditera-darkgray mb-8 uppercase tracking-widest">
            Collaborate With Us
          </div>
          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-meditera-black leading-[1.1] mb-8">
            Partnerships
          </h1>
          <p className="text-xl font-light leading-relaxed text-gray-500 max-w-3xl mx-auto mb-10">
            We collaborate with organizations, researchers, and technology partners to advance accessible and intelligent cybersecurity solutions.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href={`/${lang}/contact`}
              className="group relative inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-white transition-all duration-200 bg-meditera-black border border-transparent rounded-full hover:bg-meditera-darkgray hover:shadow-xl hover:-translate-y-0.5"
            >
              Contact Us
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href={`/${lang}/contact`} 
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold transition-all duration-200 bg-white border border-gray-300 rounded-full text-meditera-black hover:bg-gray-50 hover:border-gray-400"
            >
              Discuss a Partnership
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Introduction Section - Floating Banner */}
      <section className="relative z-20 -mt-10 px-6 lg:px-8">
        <div className="mx-auto max-w-5xl bg-white rounded-2xl shadow-xl border border-gray-100 p-10 md:p-14 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <div className="flex flex-col lg:flex-row gap-10 items-center lg:items-start">
            <div className="flex-shrink-0 p-4 bg-gray-50 border border-gray-100 rounded-full">
              <Handshake className="w-8 h-8 text-meditera-black" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-meditera-black mb-4">Building Together</h2>
              <div className="space-y-4 text-lg leading-relaxed text-gray-500">
                <p>
                  At Mediterasec, we believe meaningful cybersecurity progress comes through collaboration. Modern security challenges require interdisciplinary thinking, continuous research, and strong technical partnerships.
                </p>
                <p>
                  We work with organizations and individuals who share our interest in building practical, scalable, and human-centered cybersecurity technologies.
                </p>
                <p>
                  Whether through research, technology integration, infrastructure collaboration, or strategic initiatives, we aim to create partnerships that deliver long-term value and innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Partnership Areas - Bento Grid */}
      <section className="w-full py-32 px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-widest text-gray-400 uppercase mb-4">Ecosystem</h2>
            <h3 className="text-3xl font-bold text-meditera-black">Partnership Areas</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Card 1 */}
            <div className="group relative bg-gray-50 p-10 rounded-[2rem] border border-gray-200 hover:bg-white hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500 transform group-hover:scale-110">
                 <FlaskConical className="w-48 h-48" />
              </div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                  <FlaskConical className="w-6 h-6 text-meditera-black" />
                </div>
                <h3 className="text-2xl font-bold text-meditera-black mb-4">Research Partnerships</h3>
                <p className="text-gray-500 leading-relaxed text-lg max-w-sm">
                  Collaborating with universities, researchers, and academic institutions on cybersecurity and AI-driven security initiatives.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative bg-gray-50 p-10 rounded-[2rem] border border-gray-200 hover:bg-white hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500 transform group-hover:scale-110">
                 <ServerCog className="w-48 h-48" />
              </div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                  <ServerCog className="w-6 h-6 text-meditera-black" />
                </div>
                <h3 className="text-2xl font-bold text-meditera-black mb-4">Technology Integration</h3>
                <p className="text-gray-500 leading-relaxed text-lg max-w-sm">
                  Working with platforms and infrastructure providers to integrate intelligent security capabilities into modern systems.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative bg-gray-50 p-10 rounded-[2rem] border border-gray-200 hover:bg-white hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500 transform group-hover:scale-110">
                 <Lightbulb className="w-48 h-48" />
              </div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                  <Lightbulb className="w-6 h-6 text-meditera-black" />
                </div>
                <h3 className="text-2xl font-bold text-meditera-black mb-4">Startup Ecosystems</h3>
                <p className="text-gray-500 leading-relaxed text-lg max-w-sm">
                  Partnering with incubators, accelerators, and innovation programs that support emerging cybersecurity technologies.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="group relative bg-meditera-black p-10 rounded-[2rem] border border-gray-800 hover:shadow-2xl hover:shadow-gray-900/50 hover:-translate-y-1 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-20 transition-opacity duration-500 transform group-hover:scale-110">
                 <Building2 className="w-48 h-48 text-white" />
              </div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-gray-800 rounded-2xl border border-gray-700 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Infrastructure Collaboration</h3>
                <p className="text-gray-400 leading-relaxed text-lg max-w-sm">
                  Supporting organizations seeking modern approaches to monitoring, intrusion detection, and infrastructure protection.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. What We Value - Dark Strip */}
      <section className="relative w-full py-24 px-6 lg:px-8 bg-meditera-black overflow-hidden flex items-center justify-center text-white">
        {/* Subtle grid background */}
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{ backgroundImage: "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)", backgroundSize: "40px 40px" }}
        />
        
        <div className="mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-6">Our Partnership Philosophy</h2>
          <div className="space-y-6 text-xl md:text-2xl font-light leading-relaxed text-gray-300">
            <p>
              We value partnerships built on <strong className="text-white font-medium">transparency, technical excellence, and shared long-term goals</strong>. Our approach emphasizes open collaboration, practical problem-solving, and continuous innovation.
            </p>
            <p className="text-lg">
              As an early-stage cybersecurity company, we are particularly interested in partnerships that encourage experimentation, research, and the development of impactful security technologies.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Why Partner With Mediterasec - Small Highlight Cards */}
      <section className="w-full py-24 px-6 lg:px-8 bg-gray-50 border-b border-gray-200">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl font-bold text-meditera-black text-center mb-12">Why Partner With Mediterasec</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-8 rounded-2xl border border-gray-200 flex flex-col items-center text-center">
              <Microscope className="w-8 h-8 text-meditera-black mb-4" />
              <h4 className="text-lg font-bold text-meditera-black mb-2">Research-Driven Engineering</h4>
              <p className="text-sm text-gray-500">Strong focus on modern cybersecurity research and AI applications.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl border border-gray-200 flex flex-col items-center text-center">
              <UserCheck className="w-8 h-8 text-meditera-black mb-4" />
              <h4 className="text-lg font-bold text-meditera-black mb-2">Human-Centered Approach</h4>
              <p className="text-sm text-gray-500">Building security technologies that prioritize usability and accessibility.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl border border-gray-200 flex flex-col items-center text-center">
              <Zap className="w-8 h-8 text-meditera-black mb-4" />
              <h4 className="text-lg font-bold text-meditera-black mb-2">Agile Development</h4>
              <p className="text-sm text-gray-500">Flexible and fast-moving engineering processes designed to adapt rapidly.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl border border-gray-200 flex flex-col items-center text-center">
              <Eye className="w-8 h-8 text-meditera-black mb-4" />
              <h4 className="text-lg font-bold text-meditera-black mb-2">Modern Cybersecurity Vision</h4>
              <p className="text-sm text-gray-500">Focused on scalable, intelligent, and adaptive security systems.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Collaboration Opportunities & 7. Final CTA */}
      <section className="w-full py-32 px-6 lg:px-8 bg-white text-center">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-sm font-bold tracking-widest text-gray-400 uppercase mb-4">Areas of Collaboration</h2>
          <h3 className="text-3xl font-bold text-meditera-black mb-8">Ready to explore the future together?</h3>
          
          <div className="space-y-6 text-lg text-gray-500 mb-12">
            <p>
              We are open to exploring partnerships across cybersecurity research, infrastructure security, AI-driven threat detection, software engineering, and innovation initiatives.
            </p>
            <p>
              If your organization is interested in collaborating with Mediterasec, we would be glad to start a conversation and explore potential opportunities.
            </p>
          </div>
          
          <div className="flex flex-col items-center gap-6">
            <h4 className="text-xl font-medium text-meditera-black">Interested in partnering with Mediterasec?</h4>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href={`/${lang}/contact`} 
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold transition-all duration-300 bg-meditera-black border border-transparent rounded-full text-white hover:bg-meditera-darkgray shadow-xl hover:-translate-y-1"
              >
                Contact Us
              </Link>
              <Link 
                href={`/${lang}/contact`} 
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold transition-all duration-200 bg-white border border-gray-300 rounded-full text-meditera-black hover:bg-gray-50 hover:border-gray-400"
              >
                Start a Conversation
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
