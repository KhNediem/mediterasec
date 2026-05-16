"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ShieldCheck,
  Activity,
  Network,
  BrainCircuit,
  ArrowRight,
  CheckCircle,
  AlertCircle,
  Zap,
  Clock,
  Shield,
  Layers,
  MapPin,
  Tag
} from "lucide-react";

interface PulseClientProps {
  dict: any;
  lang: string;
}

export default function PulseClient({ dict, lang }: PulseClientProps) {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
  });
  const [submitStatus, setSubmitStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to join waitlist");
      }

      setSubmitStatus("success");
      setFormState({ name: "", email: "", company: "", role: "" });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch (error) {
      const message = error instanceof Error ? error.message : "An error occurred";
      setErrorMessage(message);
      setSubmitStatus("error");
    }
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
              {dict.heroTag}
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-meditera-black mb-6">
              {dict.heroTitle}
            </h1>
            <p className="text-2xl font-light leading-relaxed text-gray-600 mb-6">
              {dict.heroSubtitle}
            </p>
            <p className="text-sm font-semibold uppercase tracking-wide text-[var(--color-pulse-navy)] mb-10 border-l-4 border-[var(--color-pulse-navy)] pl-4">
              {dict.heroFocus}
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#early-access"
                className="group relative inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-white transition-all duration-200 bg-[var(--color-pulse-navy)] rounded-full hover:bg-[#0c2c4d] shadow-lg hover:-translate-y-1"
              >
                {dict.ctaWaitlist}
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <Link
                href={`/${lang}/contact`}
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold transition-all duration-200 bg-white border border-gray-300 rounded-full text-meditera-black hover:bg-gray-50 hover:border-gray-400"
              >
                {dict.ctaContact}
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
            {dict.whatIsTitle}
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-gray-500 text-left md:text-center">
            <p>{dict.whatIsDesc1}</p>
            <p>{dict.whatIsDesc2}</p>
            <p>{dict.whatIsDesc3}</p>
          </div>
        </div>
      </section>

      {/* 3. Dashboard Preview - NEW */}
      <section className="py-24 px-6 lg:px-8 bg-gray-50 border-y border-gray-200 overflow-hidden">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-3xl font-bold text-meditera-black mb-6">Visibility at Scale</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Stop chasing false positives. Pulse provides a unified view of your security posture, mapping every alert to the MITRE ATT&CK framework and enriching it with GeoIP intelligence.
              </p>
              <ul className="space-y-4">
                {[
                  { icon: MapPin, text: "Real-time GeoIP Threat Mapping" },
                  { icon: Tag, text: "MITRE ATT&CK Tactic Tagging" },
                  { icon: Layers, text: "Sigma Rule Review Queue" },
                  { icon: Zap, text: "Instant IOC Badges & Context" }
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-meditera-black font-medium">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-[var(--color-pulse-navy)]">
                      <item.icon className="w-4 h-4" />
                    </div>
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-tr from-[var(--color-pulse-navy)]/10 to-blue-400/10 rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 transform group-hover:scale-[1.02] transition-transform duration-500">
                <Image
                  src="/pulse_dashboard_final.png"
                  alt="Pulse Dashboard Mockup"
                  width={1200}
                  height={800}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. How Pulse Works - Redesigned Architecture Section */}
      <section id="how-it-works" className="py-32 px-6 lg:px-8 bg-[var(--color-pulse-navy)] text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

        <div className="mx-auto max-w-6xl text-center relative z-10">
          <h2 className="text-sm font-bold tracking-widest text-blue-300 uppercase mb-4">{dict.architectureTag}</h2>
          <h3 className="text-4xl font-bold mb-20">{dict.architectureTitle}</h3>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-4 relative">
            <div className="hidden lg:block absolute top-10 left-[10%] w-[80%] h-0.5 bg-blue-500/30 z-0" />
            <div className="lg:hidden absolute top-0 left-1/2 w-0.5 h-full bg-blue-500/30 -translate-x-1/2 z-0" />

            <div className="relative z-10 w-full lg:w-1/3 flex flex-col items-center bg-[var(--color-pulse-navy)] lg:bg-transparent py-4 group">
              <div className="w-20 h-20 bg-blue-900/50 border border-blue-400/30 rounded-2xl flex items-center justify-center mb-8 shadow-lg backdrop-blur-sm group-hover:scale-110 group-hover:bg-blue-800/80 transition-all duration-300">
                <Network className="w-8 h-8 text-blue-300" />
              </div>
              <h4 className="font-bold text-xl mb-3">{dict.step1Title}</h4>
              <p className="text-blue-200 text-sm leading-relaxed px-4">{dict.step1Desc}</p>
            </div>

            <div className="relative z-10 w-full lg:w-1/3 flex flex-col items-center bg-[var(--color-pulse-navy)] lg:bg-transparent py-4 transform lg:-translate-y-4 group">
              <div className="w-24 h-24 bg-blue-600 border border-blue-400 rounded-3xl flex items-center justify-center mb-8 shadow-2xl shadow-blue-500/20 backdrop-blur-sm relative group-hover:scale-110 transition-all duration-300">
                <div className="absolute inset-0 border border-blue-300 rounded-3xl animate-ping opacity-20" />
                <BrainCircuit className="w-10 h-10 text-white group-hover:text-blue-100" />
              </div>
              <h4 className="font-bold text-xl mb-3 text-white">{dict.step2Title}</h4>
              <p className="text-blue-200 text-sm leading-relaxed px-4">{dict.step2Desc}</p>
            </div>

            <div className="relative z-10 w-full lg:w-1/3 flex flex-col items-center bg-[var(--color-pulse-navy)] lg:bg-transparent py-4 group">
              <div className="w-20 h-20 bg-white border border-gray-200 rounded-2xl flex items-center justify-center mb-8 shadow-xl group-hover:scale-110 transition-all duration-300">
                <Activity className="w-8 h-8 text-[var(--color-pulse-navy)]" />
              </div>
              <h4 className="font-bold text-xl mb-3">{dict.step3Title}</h4>
              <p className="text-blue-200 text-sm leading-relaxed px-4">{dict.step3Desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Origin Story */}
      <section className="py-24 px-6 lg:px-8 bg-white border-b border-gray-200">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-meditera-black sm:text-4xl mb-8">
            {dict.whyTitle}
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-gray-500">
            <p>{dict.whyDesc1}</p>
            <p className="font-medium text-meditera-black">{dict.whyDesc2}</p>
          </div>
        </div>
      </section>

      {/* 6. Pricing Section - NEW */}
      <section id="pricing" className="py-32 px-6 lg:px-8 bg-[#FAFAFA]">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-sm font-bold tracking-widest text-[var(--color-pulse-navy)] uppercase mb-4">{dict.pricingTag}</h2>
          <h3 className="text-4xl font-bold text-meditera-black mb-6">{dict.pricingTitle}</h3>
          <p className="text-lg text-gray-600 mb-20 max-w-2xl mx-auto">{dict.pricingSubtitle}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Free Tier */}
            <div className="bg-white rounded-[2rem] border border-gray-200 p-10 flex flex-col items-start hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-6 text-gray-600">
                <Shield className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold mb-2">{dict.freeTierTitle}</h4>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-4xl font-black">{dict.freeTierPrice}</span>
              </div>
              <p className="text-gray-500 text-left mb-8">{dict.freeTierDesc}</p>
              <ul className="space-y-4 mb-10 w-full">
                {[dict.freeTierFeature1, dict.freeTierFeature2, dict.freeTierFeature3].map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#early-access" className="w-full py-3 rounded-full border border-gray-300 font-bold hover:bg-gray-50 transition-colors">Get Started</a>
            </div>

            {/* Pro Tier */}
            <div className="bg-[var(--color-pulse-navy)] rounded-[2rem] border border-blue-400/20 p-10 flex flex-col items-start shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-32 h-32 text-white" />
              </div>
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 text-blue-300 border border-blue-400/30">
                <Zap className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold mb-2 text-white">{dict.proTierTitle}</h4>
              <div className="flex items-baseline gap-1 mb-4 text-white">
                <span className="text-4xl font-black">{dict.proTierPrice}</span>
              </div>
              <p className="text-blue-100 text-left mb-8">{dict.proTierDesc}</p>
              <ul className="space-y-4 mb-10 w-full text-white">
                {[dict.proTierFeature1, dict.proTierFeature2, dict.proTierFeature3, dict.proTierFeature4].map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm">
                    <CheckCircle className="w-4 h-4 text-blue-400" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link href={`/${lang}/contact`} className="w-full py-3 rounded-full bg-white text-[var(--color-pulse-navy)] font-bold hover:bg-blue-50 transition-colors">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Early Access Waitlist Section */}
      <section id="early-access" className="relative py-32 px-6 lg:px-8 bg-white overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100 rounded-full blur-[100px] opacity-40 animate-pulse pointer-events-none" />
        <div className="mx-auto max-w-3xl relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-sm font-bold tracking-widest text-[var(--color-pulse-navy)] uppercase mb-4">{dict.waitlistTag}</h2>
            <h3 className="text-3xl font-bold text-meditera-black sm:text-4xl mb-6">{dict.waitlistTitle}</h3>
            <p className="text-lg text-gray-500 mb-8">{dict.waitlistSubtitle}</p>
          </div>

          <div className="mx-auto max-w-xl relative z-10 animate-fade-in-up">
            <div className="relative bg-white rounded-2xl shadow-2xl shadow-blue-900/5 border border-gray-200 p-8 md:p-10">
              {submitStatus === "success" ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-meditera-black mb-2">{dict.waitlistSuccessTitle}</h3>
                  <p className="text-gray-600 mb-4">{dict.waitlistSuccessDesc}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {submitStatus === "error" && (
                    <div className="flex items-gap-3 p-4 rounded-lg bg-red-50 border border-red-200">
                      <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-red-700">{errorMessage}</p>
                    </div>
                  )}

                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-meditera-black mb-2">{dict.formName}</label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="Your name"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      disabled={submitStatus === "loading"}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 text-meditera-black focus:outline-none focus:ring-2 focus:ring-[var(--color-pulse-navy)] transition-all disabled:opacity-50"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-meditera-black mb-2">{dict.formEmail}</label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="you@company.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      disabled={submitStatus === "loading"}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 text-meditera-black focus:outline-none focus:ring-2 focus:ring-[var(--color-pulse-navy)] transition-all disabled:opacity-50"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-meditera-black mb-2">{dict.formCompany}</label>
                    <input
                      id="company"
                      type="text"
                      placeholder="Your company"
                      value={formState.company}
                      onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                      disabled={submitStatus === "loading"}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 text-meditera-black focus:outline-none focus:ring-2 focus:ring-[var(--color-pulse-navy)] transition-all disabled:opacity-50"
                    />
                  </div>

                  <div>
                    <label htmlFor="role" className="block text-sm font-semibold text-meditera-black mb-2">{dict.formRole}</label>
                    <select
                      id="role"
                      value={formState.role}
                      onChange={(e) => setFormState({ ...formState, role: e.target.value })}
                      disabled={submitStatus === "loading"}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 text-meditera-black focus:outline-none focus:ring-2 focus:ring-[var(--color-pulse-navy)] transition-all disabled:opacity-50"
                    >
                      <option value="">Select your role</option>
                      <option value="security-engineer">{dict.roleSecurity}</option>
                      <option value="ciso">{dict.roleCiso}</option>
                      <option value="it-manager">{dict.roleIt}</option>
                      <option value="business-owner">{dict.roleOwner}</option>
                      <option value="researcher">{dict.roleResearcher}</option>
                      <option value="other">{dict.roleOther}</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={submitStatus === "loading"}
                    className="w-full py-4 mt-6 rounded-xl bg-[var(--color-pulse-navy)] text-white font-bold text-sm hover:bg-[#0c2c4d] shadow-lg transition-all flex items-center justify-center gap-2 group disabled:opacity-70"
                  >
                    {submitStatus === "loading" ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>{dict.formJoining}</span>
                      </>
                    ) : (
                      <>
                        <span>{dict.formSubmit}</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 9. CTA Section */}
      <section className="w-full py-32 px-6 lg:px-8 bg-white text-center border-t border-gray-200">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold text-meditera-black mb-8 leading-relaxed">
            {dict.ctaBottomTitle}
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href={`/${lang}/contact`}
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold transition-all duration-300 bg-[var(--color-pulse-navy)] border border-transparent rounded-full text-white hover:bg-[#0c2c4d] shadow-xl hover:-translate-y-1"
            >
              {dict.ctaBottomSales}
            </Link>
            <Link
              href={`/${lang}/contact?reason=demo`}
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold transition-all duration-200 bg-white border border-gray-300 rounded-full text-meditera-black hover:bg-gray-50 hover:border-gray-400"
            >
              {dict.ctaBottomDemo}
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
