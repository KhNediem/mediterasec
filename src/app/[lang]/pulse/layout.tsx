import { getDictionary } from "@/lib/dictionary";
import type { Locale } from "@/middleware";
import { Metadata } from "next";
import JsonLd from "@/components/JsonLd";

export async function generateMetadata(props: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await props.params;
  const locale = lang as Locale;
  const dict = (await getDictionary(locale)).metadata.pulse;

  return {
    title: dict.title,
    description: dict.description,
  };
}

export default async function PulseLayout(props: { 
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { children } = props;
  const { lang } = await props.params;
  const locale = lang as Locale;
  const dict = (await getDictionary(locale)).metadata.pulse;

  const pulseSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Pulse",
    "applicationCategory": "SecurityApplication",
    "operatingSystem": "Linux, Cloud",
    "description": dict.description,
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/PreOrder"
    }
  };

  return (
    <>
      <JsonLd data={pulseSchema} />
      {children}
    </>
  );
}
