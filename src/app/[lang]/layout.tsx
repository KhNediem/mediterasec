import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { Analytics } from "@vercel/analytics/react";
import { getDictionary } from "@/lib/dictionary";
import type { Locale } from "@/middleware";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(props: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await props.params;
  const locale = lang as Locale;
  const dict = (await getDictionary(locale)).metadata.home;

  return {
    metadataBase: new URL("https://mediterasec.com"),
    title: {
      default: dict.title,
      template: "%s | MediteraSec",
    },
    description: dict.description,
    keywords: ["cybersecurity", "SME", "Tunisia", "human-centered", "security", "startup", "intrusion detection", "PME"],
    authors: [{ name: "MediteraSec Team" }],
    creator: "MediteraSec",
    publisher: "MediteraSec",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: `https://mediterasec.com/${lang}`,
      languages: {
        'en-US': 'https://mediterasec.com/en',
        'fr-FR': 'https://mediterasec.com/fr',
      },
    },
    openGraph: {
      title: dict.title,
      description: dict.description,
      url: `https://mediterasec.com/${lang}`,
      siteName: "MediteraSec",
      images: [
        {
          url: "/pulseLogo.png",
          width: 800,
          height: 600,
          alt: "MediteraSec Logo",
        },
      ],
      locale: lang === "fr" ? "fr_FR" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: dict.title,
      description: dict.description,
      images: ["/pulseLogo.png"],
    },
  };
}

export default async function RootLayout(props: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { children } = props;
  const { lang } = await props.params;
  const locale = lang as Locale;
  const dict = await getDictionary(locale);

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "MediteraSec",
    "url": "https://mediterasec.com",
    "logo": "https://mediterasec.com/pulseLogo.png",
    "sameAs": [
      "https://www.linkedin.com/company/mediterasec"
    ],
    "description": dict.footer.description,
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "TN"
    }
  };

  return (
    <html
      lang={locale}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-meditera-white text-meditera-black">
        <JsonLd data={organizationSchema} />
        <Navbar lang={lang} dict={dict.navbar} />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer lang={lang} dict={dict.footer} />
        <Analytics />
      </body>
    </html>
  );
}
