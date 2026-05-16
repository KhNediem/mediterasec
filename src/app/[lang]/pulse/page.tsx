import { getDictionary } from "@/lib/dictionary";
import type { Locale } from "@/middleware";
import PulseClient from "./PulseClient";

export default async function PulsePage(props: { params: Promise<{ lang: string }> }) {
  const { lang } = await props.params;
  const locale = lang as Locale;
  const dict = (await getDictionary(locale)).pulse;

  return <PulseClient dict={dict} lang={lang} />;
}
