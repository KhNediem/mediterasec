"use client";

import { useState } from "react";
import { 
  CheckCircle2, 
  AlertCircle, 
  Mail, 
  MapPin, 
  Send,
  MessageSquare,
  Building2,
  User
} from "lucide-react";

const Linkedin = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

interface ContactClientProps {
  dict: any;
  lang: string;
}

export default function ContactClient({ dict, lang }: ContactClientProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ firstName: "", lastName: "", company: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="bg-meditera-white min-h-screen pt-32 pb-24 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Side: Contact Information */}
          <div className="animate-fade-in-up">
            <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-meditera-black mb-6">
              {dict.title}
            </h1>
            <p className="text-xl text-gray-500 leading-relaxed mb-12 max-w-lg">
              {dict.subtitle}
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center border border-gray-100 group-hover:bg-[var(--color-pulse-navy)] group-hover:text-white transition-all duration-300">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-meditera-black mb-1">{dict.emailLabel}</h3>
                  <a href={`mailto:${dict.emailValue}`} className="text-gray-500 hover:text-meditera-black transition-colors">
                    {dict.emailValue}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center border border-gray-100 group-hover:bg-[var(--color-pulse-navy)] group-hover:text-white transition-all duration-300">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-meditera-black mb-1">{dict.locationLabel}</h3>
                  <p className="text-gray-500">{dict.locationValue}</p>
                </div>
              </div>

              <div className="pt-8 border-t border-gray-100 max-w-xs">
                <h3 className="font-bold text-meditera-black mb-4">{dict.socialLabel}</h3>
                <div className="flex gap-4">
                  <a 
                    href="https://www.linkedin.com/company/mediterasec" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center border border-gray-100 hover:bg-[#0A66C2] hover:text-white transition-all duration-300"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="relative animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="absolute -inset-4 bg-gradient-to-tr from-gray-100 to-gray-50 rounded-[2.5rem] blur-2xl opacity-50 pointer-events-none" />
            
            <div className="relative bg-white rounded-3xl shadow-2xl shadow-blue-900/5 border border-gray-200 p-8 md:p-10">
              <h2 className="text-2xl font-bold text-meditera-black mb-8">{dict.formTitle}</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="relative group">
                    <label htmlFor="firstName" className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2 ml-1">
                      {dict.firstName}
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        required
                        type="text"
                        name="firstName"
                        id="firstName"
                        placeholder="John"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="block w-full bg-gray-50 border-gray-200 border rounded-xl pl-11 pr-4 py-3.5 text-meditera-black placeholder:text-gray-400 focus:ring-2 focus:ring-[var(--color-pulse-navy)] focus:border-transparent transition-all outline-none"
                      />
                    </div>
                  </div>

                  <div className="relative group">
                    <label htmlFor="lastName" className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2 ml-1">
                      {dict.lastName}
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        required
                        type="text"
                        name="lastName"
                        id="lastName"
                        placeholder="Doe"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="block w-full bg-gray-50 border-gray-200 border rounded-xl pl-11 pr-4 py-3.5 text-meditera-black placeholder:text-gray-400 focus:ring-2 focus:ring-[var(--color-pulse-navy)] focus:border-transparent transition-all outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div className="relative group">
                  <label htmlFor="company" className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2 ml-1">
                    {dict.company}
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                      <Building2 className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      name="company"
                      id="company"
                      placeholder="Acme Inc."
                      value={formData.company}
                      onChange={handleChange}
                      className="block w-full bg-gray-50 border-gray-200 border rounded-xl pl-11 pr-4 py-3.5 text-meditera-black placeholder:text-gray-400 focus:ring-2 focus:ring-[var(--color-pulse-navy)] focus:border-transparent transition-all outline-none"
                    />
                  </div>
                </div>

                <div className="relative group">
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2 ml-1">
                    {dict.email}
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <input
                      required
                      type="email"
                      name="email"
                      id="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="block w-full bg-gray-50 border-gray-200 border rounded-xl pl-11 pr-4 py-3.5 text-meditera-black placeholder:text-gray-400 focus:ring-2 focus:ring-[var(--color-pulse-navy)] focus:border-transparent transition-all outline-none"
                    />
                  </div>
                </div>

                <div className="relative group">
                  <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2 ml-1">
                    {dict.message}
                  </label>
                  <div className="relative">
                    <div className="absolute top-4 left-0 pl-4 flex items-start pointer-events-none text-gray-400">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <textarea
                      required
                      name="message"
                      id="message"
                      rows={4}
                      placeholder="How can we help?"
                      value={formData.message}
                      onChange={handleChange}
                      className="block w-full bg-gray-50 border-gray-200 border rounded-xl pl-11 pr-4 py-3.5 text-meditera-black placeholder:text-gray-400 focus:ring-2 focus:ring-[var(--color-pulse-navy)] focus:border-transparent transition-all outline-none resize-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-[var(--color-pulse-navy)] text-white rounded-xl py-4 font-bold text-sm shadow-xl shadow-blue-900/10 hover:bg-[#0c2c4d] hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 group disabled:opacity-70 disabled:hover:translate-y-0"
                >
                  {status === "loading" ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      {dict.sending}
                    </>
                  ) : (
                    <>
                      {dict.submit}
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>

                {/* Status Messages */}
                {status === "success" && (
                  <div className="mt-4 p-4 rounded-xl bg-green-50 border border-green-200 flex items-start gap-3 animate-fade-in">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-green-800 text-sm">{dict.successTitle}</h4>
                      <p className="text-xs text-green-700 mt-1">{dict.successDesc}</p>
                    </div>
                  </div>
                )}

                {status === "error" && (
                  <div className="mt-4 p-4 rounded-xl bg-red-50 border border-red-200 flex items-start gap-3 animate-fade-in">
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-red-800 text-sm">{dict.errorTitle}</h4>
                      <p className="text-xs text-red-700 mt-1">{dict.errorDesc}</p>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
