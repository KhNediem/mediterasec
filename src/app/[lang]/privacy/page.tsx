import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { getDictionary } from "@/lib/dictionary";
import type { Locale } from "@/middleware";
import { Metadata } from "next";

export async function generateMetadata(props: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await props.params;
  const locale = lang as Locale;
  const dict = (await getDictionary(locale)).metadata.privacy;

  return {
    title: dict.title,
    description: dict.description,
  };
}


export default async function PrivacyPage(props: { params: Promise<{ lang: string }> }) {
  const { lang } = await props.params;
  return (
    <div className="bg-meditera-white min-h-screen py-24 px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <Link href={`/${lang}`} className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-meditera-black mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to home
        </Link>
        <h1 className="text-3xl font-bold tracking-tight text-meditera-black sm:text-4xl mb-8">Privacy Policy</h1>
        <div className="prose prose-gray max-w-none text-gray-600">
          <p className="text-sm text-gray-400 mb-8">Last updated: May 2026</p>
          
          <h2 className="text-xl font-bold text-meditera-black mt-8 mb-4">1. Information We Collect</h2>
          <p className="mb-4">
            We collect information that you provide directly to us, such as when you fill out a contact form, request a demo, or interact with our support team. The Pulse platform itself collects specific system telemetry and network metadata required for intrusion detection purposes.
          </p>

          <h2 className="text-xl font-bold text-meditera-black mt-8 mb-4">2. How We Use Information</h2>
          <p className="mb-4">
            The telemetry collected by Pulse is used exclusively for anomaly detection, threat hunting, and alerting within your designated environment. Website interaction data is used to improve our services, communicate with you, and ensure platform stability.
          </p>

          <h2 className="text-xl font-bold text-meditera-black mt-8 mb-4">3. Data Security</h2>
          <p className="mb-4">
            We implement appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please note that no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure.
          </p>

          <h2 className="text-xl font-bold text-meditera-black mt-8 mb-4">4. Third-Party Sharing</h2>
          <p className="mb-4">
            MediteraSec does not sell your personal data or operational telemetry to third parties. Data may be shared with trusted infrastructure providers (such as hosting services) solely for the purpose of operating the Pulse platform.
          </p>

          <h2 className="text-xl font-bold text-meditera-black mt-8 mb-4">5. Contact Information</h2>
          <p className="mb-4">
            If you have questions or comments about this policy, you may email us or use our <Link href={`/${lang}/contact`} className="text-[var(--color-pulse-navy)] hover:underline">contact form</Link>.
          </p>
        </div>
      </div>
    </div>
  );
}
