import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { getDictionary } from "@/lib/dictionary";
import type { Locale } from "@/middleware";
import { Metadata } from "next";

export async function generateMetadata(props: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await props.params;
  const locale = lang as Locale;
  const dict = (await getDictionary(locale)).metadata.terms;

  return {
    title: dict.title,
    description: dict.description,
  };
}


export default async function TermsPage(props: { params: Promise<{ lang: string }> }) {
  const { lang } = await props.params;
  return (
    <div className="bg-meditera-white min-h-screen py-24 px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <Link href={`/${lang}`} className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-meditera-black mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to home
        </Link>
        <h1 className="text-3xl font-bold tracking-tight text-meditera-black sm:text-4xl mb-8">Terms of Service</h1>
        <div className="prose prose-gray max-w-none text-gray-600">
          <p className="text-sm text-gray-400 mb-8">Last updated: May 2026</p>
          
          <h2 className="text-xl font-bold text-meditera-black mt-8 mb-4">1. Acceptance of Terms</h2>
          <p className="mb-4">
            By accessing and using the MediteraSec website and our Pulse intrusion detection services, you agree to comply with and be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our services.
          </p>

          <h2 className="text-xl font-bold text-meditera-black mt-8 mb-4">2. Description of Service</h2>
          <p className="mb-4">
            MediteraSec provides cybersecurity solutions, specifically focusing on the Pulse IDS platform for SME environments. We reserve the right to modify, suspend, or discontinue any part of the service at any time without prior notice.
          </p>

          <h2 className="text-xl font-bold text-meditera-black mt-8 mb-4">3. Privacy and Data Security</h2>
          <p className="mb-4">
            Your use of MediteraSec services is also governed by our Privacy Policy. As a cybersecurity provider, we take data protection seriously and adhere to industry standards regarding telemetry and customer data storage.
          </p>

          <h2 className="text-xl font-bold text-meditera-black mt-8 mb-4">4. Limitation of Liability</h2>
          <p className="mb-4">
            While Pulse is designed to detect and alert on security anomalies, no cybersecurity system can guarantee 100% protection against all potential threats. MediteraSec shall not be held liable for any data breaches, financial losses, or system compromises experienced by clients.
          </p>

          <h2 className="text-xl font-bold text-meditera-black mt-8 mb-4">5. Contact Information</h2>
          <p className="mb-4">
            For questions regarding these terms, please reach out to us via our <Link href={`/${lang}/contact`} className="text-[var(--color-pulse-navy)] hover:underline">contact page</Link>.
          </p>
        </div>
      </div>
    </div>
  );
}
