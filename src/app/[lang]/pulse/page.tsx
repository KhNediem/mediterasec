"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Check, 
  ShieldCheck, 
  Activity, 
  Network, 
  BrainCircuit, 
  ArrowRight,
  X as XIcon
} from "lucide-react";

export default function PulsePage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "biannual" | "yearly">("monthly");

  const getDiscountMultiplier = () => {
    if (billingCycle === "biannual") return 0.95; // 5% off
    if (billingCycle === "yearly") return 0.85; // 15% off
    return 1;
  };

  const formatPrice = (basePrice: number) => {
    return Math.round(basePrice * getDiscountMultiplier());
  };

  const getTotal = (basePrice: number) => {
    const monthlyDiscounted = formatPrice(basePrice);
    if (billingCycle === "biannual") return monthlyDiscounted * 6;
    if (billingCycle === "yearly") return monthlyDiscounted * 12;
    return 0;
  };

  const getSavings = (basePrice: number) => {
    if (billingCycle === "monthly") return 0;
    const standardTotal = billingCycle === "biannual" ? basePrice * 6 : basePrice * 12;
    const discountedTotal = getTotal(basePrice);
    return standardTotal - discountedTotal;
  };

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

      {/* Unified Pricing Matrix Section */}
      <section id="pricing" className="relative py-32 px-6 lg:px-8 bg-[#FAFAFA] overflow-hidden">
        {/* Animated Background Orbs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100 rounded-full blur-[100px] opacity-40 animate-pulse pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gray-200 rounded-full blur-[100px] opacity-40 pointer-events-none" />

        <div className="mx-auto max-w-7xl text-center mb-16 relative z-10 animate-fade-in-up">
          <h2 className="text-sm font-bold tracking-widest text-[var(--color-pulse-navy)] uppercase mb-4">Pricing</h2>
          <h3 className="text-3xl font-bold text-meditera-black sm:text-4xl mb-4">
            Simple, Transparent Pricing
          </h3>
          <p className="text-lg text-gray-500">
            Enterprise-grade protection scaled perfectly for your infrastructure. Try Pulse risk-free with a 14-day free trial.
          </p>
        </div>

        <div className="mx-auto max-w-[1200px] overflow-x-auto pb-8 relative z-10 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          {/* Main Table Wrapper */}
          <div className="bg-white rounded-3xl shadow-2xl shadow-blue-900/5 border border-gray-200 relative">
            <table className="w-full border-collapse min-w-[900px] text-left table-fixed">
              
              {/* Sticky Header */}
              <thead className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b-2 border-gray-200 shadow-sm rounded-t-3xl">
                <tr className="divide-x divide-gray-100">
                  
                  {/* Column 1: Feature Title Area & Billing Toggle */}
                  <th className="p-8 w-1/4 align-top relative bg-gray-50/50 rounded-tl-3xl">
                    <h3 className="text-2xl font-bold text-meditera-black mb-2">Compare Plans</h3>
                    <p className="text-gray-500 text-sm font-normal mb-6">Choose the right tier for your network.</p>
                    
                    <div className="flex flex-col gap-2">
                      <button
                        onClick={() => setBillingCycle("monthly")}
                        className={`relative w-full rounded-xl py-2 px-3 text-xs font-semibold text-left transition-all duration-300 border hover:-translate-y-0.5 ${
                          billingCycle === "monthly" 
                            ? "bg-[var(--color-pulse-navy)] text-white border-[var(--color-pulse-navy)] shadow-md shadow-blue-900/20" 
                            : "bg-white text-gray-500 border-gray-200 hover:border-[var(--color-pulse-navy)]"
                        }`}
                      >
                        Monthly
                      </button>
                      <button
                        onClick={() => setBillingCycle("biannual")}
                        className={`relative w-full rounded-xl py-2 px-3 text-xs font-semibold text-left transition-all duration-300 border flex justify-between items-center hover:-translate-y-0.5 ${
                          billingCycle === "biannual" 
                            ? "bg-[var(--color-pulse-navy)] text-white border-[var(--color-pulse-navy)] shadow-md shadow-blue-900/20" 
                            : "bg-white text-gray-500 border-gray-200 hover:border-[var(--color-pulse-navy)]"
                        }`}
                      >
                        <span>6 Months</span>
                        <span className={`text-[9px] uppercase tracking-wider font-bold px-1.5 py-0.5 rounded-full transition-colors ${billingCycle === "biannual" ? "bg-white text-[var(--color-pulse-navy)]" : "bg-green-100 text-green-700"}`}>-5%</span>
                      </button>
                      <button
                        onClick={() => setBillingCycle("yearly")}
                        className={`relative w-full rounded-xl py-2 px-3 text-xs font-semibold text-left transition-all duration-300 border flex justify-between items-center hover:-translate-y-0.5 ${
                          billingCycle === "yearly" 
                            ? "bg-[var(--color-pulse-navy)] text-white border-[var(--color-pulse-navy)] shadow-md shadow-blue-900/20" 
                            : "bg-white text-gray-500 border-gray-200 hover:border-[var(--color-pulse-navy)]"
                        }`}
                      >
                        <span>Yearly</span>
                        <span className={`text-[9px] uppercase tracking-wider font-bold px-1.5 py-0.5 rounded-full transition-colors ${billingCycle === "yearly" ? "bg-white text-[var(--color-pulse-navy)]" : "bg-green-100 text-green-700"}`}>-15%</span>
                      </button>
                    </div>
                  </th>

                  {/* Column 2: ESSENTIAL */}
                  <th className="p-8 w-1/4 align-top relative font-normal transition-colors hover:bg-gray-50/50">
                    <h3 className="text-2xl font-bold text-meditera-black mb-1">Essential</h3>
                    <p className="text-gray-500 text-xs mb-6 h-8">Perfect for small environments.</p>
                    
                    <div className="mb-6 relative min-h-[90px]">
                      <div className="transform transition-all duration-500" key={billingCycle}>
                        <span className="text-4xl font-extrabold text-meditera-black">{formatPrice(49)}</span>
                        <span className="text-gray-500 text-sm font-medium"> DT/mo</span>
                      </div>
                      <div className={`mt-2 text-xs font-semibold flex flex-col gap-1 transition-all duration-300 origin-top ${billingCycle !== "monthly" ? "opacity-100 scale-100" : "opacity-0 scale-95 absolute"}`}>
                        <span className="inline-block px-2 py-1 rounded-md bg-gray-50 border border-gray-200 text-gray-500 w-fit">
                          {getTotal(49)} DT total
                        </span>
                        <span className="inline-block px-2 py-1 rounded-md bg-green-50 border border-green-200 text-green-700 w-fit">
                          Save {getSavings(49)} DT
                        </span>
                      </div>
                    </div>
                    
                    <button className="w-full py-3 rounded-xl border-2 border-gray-200 text-meditera-black hover:border-[var(--color-pulse-navy)] hover:text-[var(--color-pulse-navy)] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 font-bold text-sm">
                      Start 14-Day Free Trial
                    </button>
                  </th>

                  {/* Column 3: ADVANCED (Highlighted) */}
                  <th className="p-8 w-1/4 align-top relative font-normal bg-blue-50/20 border-t-4 border-t-[var(--color-pulse-navy)] shadow-[inset_0_4px_20px_rgba(18,65,112,0.03)] transition-colors hover:bg-blue-50/40">
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 bg-[var(--color-pulse-navy)] text-white px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase shadow-md shadow-blue-900/20 whitespace-nowrap z-40 animate-float">
                      Most Popular
                    </div>
                    <h3 className="text-2xl font-bold text-[var(--color-pulse-navy)] mb-1">Advanced</h3>
                    <p className="text-gray-500 text-xs mb-6 h-8">For growing SME networks.</p>
                    
                    <div className="mb-6 relative min-h-[90px]">
                      <div className="transform transition-all duration-500" key={billingCycle}>
                        <span className="text-4xl font-extrabold text-meditera-black">{formatPrice(159)}</span>
                        <span className="text-gray-500 text-sm font-medium"> DT/mo</span>
                      </div>
                      <div className={`mt-2 text-xs font-semibold flex flex-col gap-1 transition-all duration-300 origin-top ${billingCycle !== "monthly" ? "opacity-100 scale-100" : "opacity-0 scale-95 absolute"}`}>
                        <span className="inline-block px-2 py-1 rounded-md bg-blue-50 border border-blue-100 text-[var(--color-pulse-navy)] w-fit">
                          {getTotal(159)} DT total
                        </span>
                        <span className="inline-block px-2 py-1 rounded-md bg-green-50 border border-green-200 text-green-700 w-fit">
                          Save {getSavings(159)} DT
                        </span>
                      </div>
                    </div>
                    
                    <button className="w-full py-3.5 rounded-xl bg-[var(--color-pulse-navy)] text-white hover:bg-[#0c2c4d] shadow-lg shadow-blue-900/20 hover:-translate-y-1 transition-all duration-300 font-bold text-sm">
                      Start 14-Day Free Trial
                    </button>
                  </th>

                  {/* Column 4: ENTERPRISE */}
                  <th className="p-8 w-1/4 align-top relative font-normal transition-colors hover:bg-gray-50/50 rounded-tr-3xl">
                    <h3 className="text-2xl font-bold text-meditera-black mb-1">Enterprise</h3>
                    <p className="text-gray-500 text-xs mb-6 h-8">Custom deployment for MSSPs.</p>
                    
                    <div className="mb-6 relative min-h-[90px] flex items-start pt-1">
                      <span className="text-4xl font-extrabold text-meditera-black">Custom</span>
                    </div>
                    
                    <button className="w-full py-3 rounded-xl border-2 border-gray-200 text-meditera-black hover:border-[var(--color-pulse-navy)] hover:text-[var(--color-pulse-navy)] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 font-bold text-sm">
                      Contact Sales
                    </button>
                  </th>

                </tr>
              </thead>
              
              {/* Table Body - Features */}
              <tbody className="divide-y divide-gray-100 text-sm relative z-10">
                
                <tr className="hover:bg-blue-50/30 transition-colors group">
                  <td className="py-5 px-8 font-semibold text-gray-800 bg-gray-50/30">📦 Included devices</td>
                  <td className="py-5 px-8 text-gray-600">3 devices <span className="block text-xs text-gray-400 mt-1">(up to 10GB logs/mo)</span></td>
                  <td className="py-5 px-8 font-bold text-[var(--color-pulse-navy)] bg-blue-50/10 group-hover:bg-transparent">10 devices <span className="block text-xs text-[var(--color-pulse-navy)]/70 font-normal mt-1">(up to 50GB logs/mo)</span></td>
                  <td className="py-5 px-8 text-gray-600 font-semibold text-meditera-black">Custom</td>
                </tr>

                <tr className="hover:bg-blue-50/30 transition-colors group">
                  <td className="py-5 px-8 font-semibold text-gray-800 bg-gray-50/30">➕ Device expansion</td>
                  <td className="py-5 px-8 text-gray-600">Up to +5 devices <span className="block text-xs text-gray-400 mt-1">Overages trigger in-app prompts</span></td>
                  <td className="py-5 px-8 text-gray-600 bg-blue-50/10 group-hover:bg-transparent">Scalable via packs <span className="block text-xs text-gray-400 mt-1">Overages trigger in-app prompts</span></td>
                  <td className="py-5 px-8 text-gray-600">Fully custom</td>
                </tr>
                
                <tr className="hover:bg-blue-50/30 transition-colors group">
                  <td className="py-5 px-8 font-semibold text-gray-800 bg-gray-50/30">🛡️ Protection level</td>
                  <td className="py-5 px-8 text-gray-600">Basic protection</td>
                  <td className="py-5 px-8 text-gray-600 bg-blue-50/10 group-hover:bg-transparent">Advanced AI protection</td>
                  <td className="py-5 px-8 text-gray-600">Tailored enterprise protection</td>
                </tr>

                <tr className="hover:bg-blue-50/30 transition-colors group">
                  <td className="py-5 px-8 font-semibold text-gray-800 bg-gray-50/30">📊 Insights</td>
                  <td className="py-5 px-8 text-gray-600">Simple alerts</td>
                  <td className="py-5 px-8 text-gray-600 bg-blue-50/10 group-hover:bg-transparent">Advanced insights</td>
                  <td className="py-5 px-8 text-gray-600">Custom analytics</td>
                </tr>

                <tr className="hover:bg-blue-50/30 transition-colors group">
                  <td className="py-5 px-8 font-semibold text-gray-800 bg-gray-50/30">📩 Alerts</td>
                  <td className="py-5 px-8 text-gray-600">Email alerts</td>
                  <td className="py-5 px-8 text-gray-600 bg-blue-50/10 group-hover:bg-transparent">Email + SMS alerts</td>
                  <td className="py-5 px-8 text-gray-600">Full alert system</td>
                </tr>

                <tr className="hover:bg-blue-50/30 transition-colors group">
                  <td className="py-5 px-8 font-semibold text-gray-800 bg-gray-50/30">🕒 Data history</td>
                  <td className="py-5 px-8 text-gray-600">14 days</td>
                  <td className="py-5 px-8 text-gray-600 bg-blue-50/10 group-hover:bg-transparent">90 days</td>
                  <td className="py-5 px-8 text-gray-600">Custom retention</td>
                </tr>

                <tr className="hover:bg-blue-50/30 transition-colors group">
                  <td className="py-5 px-8 font-semibold text-gray-800 bg-gray-50/30">🤖 Intelligence</td>
                  <td className="py-5 px-8 text-gray-600">Basic detection</td>
                  <td className="py-5 px-8 text-[var(--color-pulse-navy)] font-semibold bg-blue-50/10 group-hover:bg-transparent">AI-powered detection</td>
                  <td className="py-5 px-8 text-[var(--color-pulse-navy)] font-semibold">Advanced + experimental AI</td>
                </tr>

                <tr className="hover:bg-blue-50/30 transition-colors group">
                  <td className="py-5 px-8 font-semibold text-gray-800 bg-gray-50/30">⚡ Support</td>
                  <td className="py-5 px-8 text-gray-600">Standard</td>
                  <td className="py-5 px-8 text-gray-600 font-semibold bg-blue-50/10 group-hover:bg-transparent">Priority</td>
                  <td className="py-5 px-8 text-gray-600 font-semibold">Dedicated</td>
                </tr>

                <tr className="hover:bg-blue-50/30 transition-colors group">
                  <td className="py-5 px-8 font-semibold text-gray-800 bg-gray-50/30">🔄 Updates</td>
                  <td className="py-5 px-8 text-gray-600">Regular updates</td>
                  <td className="py-5 px-8 text-gray-600 bg-blue-50/10 group-hover:bg-transparent">Early access updates</td>
                  <td className="py-5 px-8 text-gray-600">Custom roadmap access</td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>
        
        {/* Add-ons Section */}
        <div className="mx-auto max-w-[800px] mt-24 relative z-10 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <h3 className="text-2xl font-bold text-meditera-black mb-6 flex items-center justify-center gap-3">
            <ShieldCheck className="w-6 h-6 text-[var(--color-pulse-navy)]" />
            Optional Add-ons
          </h3>
          
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="py-4 px-6 font-semibold text-meditera-black w-1/3">Add-on type</th>
                  <th className="py-4 px-6 font-semibold text-meditera-black w-1/3">Essential</th>
                  <th className="py-4 px-6 font-semibold text-[var(--color-pulse-navy)] w-1/3">Advanced</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-6 font-semibold text-gray-800">+1 device</td>
                  <td className="py-4 px-6 text-gray-400">Not available</td>
                  <td className="py-4 px-6 text-gray-700 font-medium">15 DT / month</td>
                </tr>
                
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-6 font-semibold text-gray-800">+3 devices pack</td>
                  <td className="py-4 px-6 text-gray-700">+25 DT / month</td>
                  <td className="py-4 px-6 text-gray-700 font-medium">40 DT / month</td>
                </tr>
                
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-6 font-semibold text-gray-800">+5 devices pack</td>
                  <td className="py-4 px-6 text-gray-700">+40 DT / month <span className="block text-xs text-gray-400 mt-1">(max +5 total)</span></td>
                  <td className="py-4 px-6 text-gray-700 font-medium">65 DT / month</td>
                </tr>
                
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-6 font-semibold text-gray-800">+10 devices pack</td>
                  <td className="py-4 px-6 text-gray-400 flex items-center gap-1"><XIcon className="w-3 h-3" /> Not available</td>
                  <td className="py-4 px-6 text-[var(--color-pulse-navy)] font-bold">120 DT / month</td>
                </tr>
                
                <tr className="hover:bg-gray-50 transition-colors bg-gray-50/50">
                  <td className="py-4 px-6 font-semibold text-gray-800">
                    <div className="flex items-center gap-2">
                      Security Log History
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-[9px] font-bold bg-blue-100 text-[var(--color-pulse-navy)] uppercase tracking-wider">
                        Highly Recommended
                      </span>
                    </div>
                    <span className="block text-xs text-gray-500 font-normal mt-1">1-Year - for audits and investigations</span>
                  </td>
                  <td className="py-4 px-6 text-gray-700 font-medium">5 DT / month</td>
                  <td className="py-4 px-6 text-[var(--color-pulse-navy)] font-bold bg-blue-50/30">
                    Free included
                    <span className="block text-xs text-[var(--color-pulse-navy)]/70 font-normal mt-1">(up to 500GB)</span>
                  </td>
                </tr>
                
              </tbody>
            </table>
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
