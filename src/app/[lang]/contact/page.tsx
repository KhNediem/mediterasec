"use client";

import { useState } from "react";
import { CheckCircle2, AlertCircle } from "lucide-react";

export default function ContactPage() {
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
        // Reset success message after 5 seconds
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
    <div className="bg-meditera-white min-h-screen py-24 px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-3xl font-bold tracking-tight text-meditera-black sm:text-4xl">Contact Sales</h1>
        <p className="mt-2 text-lg leading-8 text-meditera-darkgray">
          Have questions about Pulse or want to join our partner program? Let us know.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          
          <div>
            <label htmlFor="firstName" className="block text-sm font-semibold leading-6 text-meditera-black">
              First name *
            </label>
            <div className="mt-2.5">
              <input
                required
                type="text"
                name="firstName"
                id="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-meditera-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[var(--color-pulse-navy)] sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label htmlFor="lastName" className="block text-sm font-semibold leading-6 text-meditera-black">
              Last name *
            </label>
            <div className="mt-2.5">
              <input
                required
                type="text"
                name="lastName"
                id="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-meditera-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[var(--color-pulse-navy)] sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="company" className="block text-sm font-semibold leading-6 text-meditera-black">
              Company
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="company"
                id="company"
                value={formData.company}
                onChange={handleChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-meditera-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[var(--color-pulse-navy)] sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-meditera-black">
              Email *
            </label>
            <div className="mt-2.5">
              <input
                required
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-meditera-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[var(--color-pulse-navy)] sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-meditera-black">
              Message *
            </label>
            <div className="mt-2.5">
              <textarea
                required
                name="message"
                id="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-meditera-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[var(--color-pulse-navy)] sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>

        <div className="mt-10">
          <button
            type="submit"
            disabled={status === "loading"}
            className="block w-full rounded-md bg-[var(--color-pulse-navy)] px-3.5 py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-[#0c2c4d] disabled:opacity-70 transition-colors"
          >
            {status === "loading" ? "Sending..." : "Let's talk"}
          </button>
        </div>

        {/* Status Messages */}
        {status === "success" && (
          <div className="mt-4 p-4 rounded-md bg-green-50 border border-green-200 flex items-start">
            <CheckCircle2 className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-green-800">
              Message sent successfully! We will get back to you shortly.
            </p>
          </div>
        )}

        {status === "error" && (
          <div className="mt-4 p-4 rounded-md bg-red-50 border border-red-200 flex items-start">
            <AlertCircle className="w-5 h-5 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-red-800">
              Failed to send message. Please try again later or email us directly at contact@mediterasec.com.
            </p>
          </div>
        )}
      </form>
    </div>
  );
}
