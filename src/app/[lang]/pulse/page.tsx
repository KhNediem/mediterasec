"use client";

import Image from "next/image";
import Link from "next/link";
import { 
  ShieldCheck, 
  Activity, 
  Network, 
  BrainCircuit, 
  ArrowRight
} from "lucide-react";

export default function PulsePage() {

  return (
    <div className="min-h-screen bg-meditera-white text-meditera-black font-sans selection:bg-[var(--color-pulse-navy)] selection:text-white">
      
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-24 px-6 lg:px-8 overflow-hidden bg-[#FAFAFA] border-b border-gray-200">
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
           <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-gray-100 to-gray-200 rounded-full blur-3xl translate-x-1/3 -translate-y-1/4" />
        </div>
        
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 shadow-sm text-xs font-semibold text-meditera-darkgray mb-8 uppercase tracking-widest">
              Platform Overview
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-meditera-black mb-6">
              Pulse
            </h1>
            <p className="text-2xl font-light leading-relaxed text-gray-600 mb-6">
              An intelligent intrusion detection platform designed to make cybersecurity more accessible, adaptive, and effective.
            </p>
            <p className="text-sm font-semibold uppercase tracking-wide text-[var(--color-pulse-navy)] mb-10 border-l-4 border-[var(--color-pulse-navy)] pl-4">
              Host-based and network-aware threat detection powered by machine learning and real-time monitoring.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a 
                href="#what-is-pulse"
                className="group relative inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-white transition-all duration-200 bg-[var(--color-pulse-navy)] rounded-full hover:bg-[#0c2c4d] shadow-lg hover:-translate-y-1"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold transition-all duration-200 bg-white border border-gray-300 rounded-full text-meditera-black hover:bg-gray-50 hover:border-gray-400"
              >
                Contact Us
              </Link>
            </div>
          </div>
          
          {/* Hero Visual - Animated Nodes */}
          <div className="relative h-[400px] hidden lg:block animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative z-20 w-32 h-32 bg-white rounded-2xl shadow-xl border border-gray-200 flex items-center justify-center animate-float">
                <Image src="/pulseLogo.png" alt="Pulse" width={60} height={60} className="object-contain" />
              </div>
              <div className="absolute w-[350px] h-[350px] border border-dashed border-gray-300 rounded-full animate-[spin_30s_linear_infinite]" />
              <div className="absolute w-[200px] h-[200px] border border-gray-200 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
              <div className="absolute top-10 right-10 w-12 h-12 bg-white rounded-xl shadow-md border border-gray-100 flex items-center justify-center animate-float-delayed">
                <Activity className="w-5 h-5 text-[var(--color-pulse-navy)]" />
              </div>
              <div className="absolute bottom-10 left-10 w-12 h-12 bg-[var(--color-pulse-navy)] rounded-full shadow-md flex items-center justify-center animate-float" style={{ animationDelay: "1s" }}>
                <ShieldCheck className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. What is Pulse? */}
      <section id="what-is-pulse" className="py-24 px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-meditera-black sm:text-4xl mb-8">
            Built for Modern Threat Detection
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-gray-500 text-left md:text-center">
            <p>
              Pulse is an intrusion detection platform developed by Mediterasec to help organizations monitor, analyze, and respond to suspicious activity across modern digital environments.
            </p>
            <p>
              The platform combines host-based monitoring, network traffic analysis, and machine learning-driven anomaly detection to identify potential threats in real time while maintaining a lightweight and practical architecture.
            </p>
            <p>
              Designed with usability in mind, Pulse focuses on reducing unnecessary complexity and making advanced security technologies more accessible to modern teams and organizations.
            </p>
          </div>
        </div>
      </section>

      {/* 4. How Pulse Works - Redesigned Architecture Section */}
      <section className="py-32 px-6 lg:px-8 bg-[var(--color-pulse-navy)] text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        
        <div className="mx-auto max-w-6xl text-center relative z-10">
          <h2 className="text-sm font-bold tracking-widest text-blue-300 uppercase mb-4">Architecture</h2>
          <h3 className="text-4xl font-bold mb-20">How Pulse Works</h3>
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-4 relative">
            {/* Connecting Line Desktop */}
            <div className="hidden lg:block absolute top-10 left-[10%] w-[80%] h-0.5 bg-blue-500/30 z-0" />
            
            {/* Connecting Line Mobile */}
            <div className="lg:hidden absolute top-0 left-1/2 w-0.5 h-full bg-blue-500/30 -translate-x-1/2 z-0" />
            
            {/* Step 1 */}
            <div className="relative z-10 w-full lg:w-1/3 flex flex-col items-center bg-[var(--color-pulse-navy)] lg:bg-transparent py-4 group">
              <div className="w-20 h-20 bg-blue-900/50 border border-blue-400/30 rounded-2xl flex items-center justify-center mb-8 shadow-lg backdrop-blur-sm group-hover:scale-110 group-hover:bg-blue-800/80 transition-all duration-300">
                <Network className="w-8 h-8 text-blue-300" />
              </div>
              <h4 className="font-bold text-xl mb-3">Data Collection</h4>
              <p className="text-blue-200 text-sm leading-relaxed px-4">Continuous telemetry collection from endpoints and network traffic analysis.</p>
            </div>
            
            {/* Step 2 */}
            <div className="relative z-10 w-full lg:w-1/3 flex flex-col items-center bg-[var(--color-pulse-navy)] lg:bg-transparent py-4 transform lg:-translate-y-4 group">
              <div className="w-24 h-24 bg-blue-600 border border-blue-400 rounded-3xl flex items-center justify-center mb-8 shadow-2xl shadow-blue-500/20 backdrop-blur-sm relative group-hover:scale-110 transition-all duration-300">
                 <div className="absolute inset-0 border border-blue-300 rounded-3xl animate-ping opacity-20" />
                 <BrainCircuit className="w-10 h-10 text-white group-hover:text-blue-100" />
              </div>
              <h4 className="font-bold text-xl mb-3 text-white">Detection Engine</h4>
              <p className="text-blue-200 text-sm leading-relaxed px-4">Machine learning pipelines instantly classify threats and filter anomalies.</p>
            </div>
            
            {/* Step 3 */}
            <div className="relative z-10 w-full lg:w-1/3 flex flex-col items-center bg-[var(--color-pulse-navy)] lg:bg-transparent py-4 group">
              <div className="w-20 h-20 bg-white border border-gray-200 rounded-2xl flex items-center justify-center mb-8 shadow-xl group-hover:scale-110 transition-all duration-300">
                <Activity className="w-8 h-8 text-[var(--color-pulse-navy)]" />
              </div>
              <h4 className="font-bold text-xl mb-3">Alerts & Monitoring</h4>
              <p className="text-blue-200 text-sm leading-relaxed px-4">Actionable insights pushed directly to the dashboard for immediate response.</p>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Why Pulse */}
      <section className="py-24 px-6 lg:px-8 bg-white border-b border-gray-200">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-meditera-black sm:text-4xl mb-8">
            Why We Built Pulse
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-gray-500">
            <p>
              Many traditional security solutions are difficult to configure, resource-intensive, or inaccessible to organizations without dedicated security teams. Pulse was developed to bridge this gap by combining intelligent detection capabilities with a more practical and user-focused approach to cybersecurity.
            </p>
            <p className="font-medium text-meditera-black">
              Our goal is to create security technology that is technically capable, scalable, and easier to adopt in real-world environments.
            </p>
          </div>
        </div>
      </section>

      {/* Early Access Waitlist Section */}
      <section id="early-access" className="relative py-32 px-6 lg:px-8 bg-[#FAFAFA] overflow-hidden">
        {/* Animated Background Orbs with Pulse Effect */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100 rounded-full blur-[100px] opacity-40 animate-pulse pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gray-200 rounded-full blur-[100px] opacity-40 pointer-events-none" />

        <div className="mx-auto max-w-3xl relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-sm font-bold tracking-widest text-[var(--color-pulse-navy)] uppercase mb-4">Early Access</h2>
            <h3 className="text-3xl font-bold text-meditera-black sm:text-4xl mb-6">
              Join Early Access
            </h3>
            <p className="text-lg text-gray-500 mb-8">
              Be among the first to experience Pulse. Join our early access program and help shape the future of intelligent intrusion detection.
            </p>
          </div>

          {/* Waitlist Form Card */}
          <div className="mx-auto max-w-xl relative z-10 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              {/* Pulse Ring Animation */}
              <div className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[var(--color-pulse-navy)] to-blue-400 animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite]" />
              </div>

              <div className="relative bg-white rounded-2xl shadow-2xl shadow-blue-900/5 border border-gray-200 p-8 md:p-10">
                <form onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.currentTarget);
                  const data = Object.fromEntries(formData);
                  console.log("[v0] Waitlist signup:", data);
                  (e.target as HTMLFormElement).reset();
                }} className="space-y-5">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-meditera-black mb-2">
                      Full Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 text-meditera-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-pulse-navy)] focus:border-transparent transition-all duration-300"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-meditera-black mb-2">
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@company.com"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 text-meditera-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-pulse-navy)] focus:border-transparent transition-all duration-300"
                    />
                  </div>

                  {/* Company Field */}
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-meditera-black mb-2">
                      Company
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      placeholder="Your company"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 text-meditera-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-pulse-navy)] focus:border-transparent transition-all duration-300"
                    />
                  </div>

                  {/* Role Field */}
                  <div>
                    <label htmlFor="role" className="block text-sm font-semibold text-meditera-black mb-2">
                      Role
                    </label>
                    <select
                      id="role"
                      name="role"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 text-meditera-black focus:outline-none focus:ring-2 focus:ring-[var(--color-pulse-navy)] focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select your role</option>
                      <option value="security-engineer">Security Engineer</option>
                      <option value="ciso">CISO</option>
                      <option value="it-manager">IT Manager</option>
                      <option value="network-admin">Network Administrator</option>
                      <option value="researcher">Security Researcher</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 mt-6 rounded-xl bg-[var(--color-pulse-navy)] text-white font-bold text-sm hover:bg-[#0c2c4d] shadow-lg shadow-blue-900/20 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group"
                  >
                    <span>Join the Waitlist</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>

                <p className="text-xs text-gray-500 text-center mt-6 leading-relaxed">
                  We&apos;re preparing something special. Early access members will receive priority onboarding and exclusive insights into new features.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. CTA Section */}
      <section className="w-full py-32 px-6 lg:px-8 bg-white text-center border-t border-gray-200">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold text-meditera-black mb-8 leading-relaxed">
            Ready to explore intelligent threat detection for your infrastructure?
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold transition-all duration-300 bg-[var(--color-pulse-navy)] border border-transparent rounded-full text-white hover:bg-[#0c2c4d] shadow-xl hover:-translate-y-1"
            >
              Contact Sales
            </Link>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold transition-all duration-200 bg-white border border-gray-300 rounded-full text-meditera-black hover:bg-gray-50 hover:border-gray-400"
            >
              Request a Demo
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
