import { getDictionary } from "@/lib/dictionary";
import type { Locale } from "@/middleware";
import { Metadata } from "next";

export async function generateMetadata(props: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await props.params;
  const locale = lang as Locale;
  const dict = (await getDictionary(locale)).metadata.contact;

  return {
    title: dict.title,
    description: dict.description,
  };
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
