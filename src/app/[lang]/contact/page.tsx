import { getDictionary } from "@/lib/dictionary";
import type { Locale } from "@/middleware";
import ContactClient from "./ContactClient";

export default async function ContactPage(props: { params: Promise<{ lang: string }> }) {
  const { lang } = await props.params;
  const locale = lang as Locale;
  const dict = (await getDictionary(locale)).contact;

  return <ContactClient dict={dict} lang={lang} />;
}
