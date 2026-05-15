"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LanguageToggle({ currentLang }: { currentLang: string }) {
  const pathname = usePathname();
  
  // Remove the current language prefix to get the raw path
  const pathWithoutLang = pathname.replace(`/${currentLang}`, "") || "/";
  
  return (
    <div className="flex items-center space-x-1 border border-gray-200 rounded-full p-1 bg-gray-50">
      <Link 
        href={`/en${pathWithoutLang}`}
        className={`px-3 py-1 rounded-full text-xs font-bold transition-colors ${currentLang === 'en' ? 'bg-white shadow-sm text-meditera-black' : 'text-gray-400 hover:text-gray-600'}`}
      >
        EN
      </Link>
      <Link 
        href={`/fr${pathWithoutLang}`}
        className={`px-3 py-1 rounded-full text-xs font-bold transition-colors ${currentLang === 'fr' ? 'bg-white shadow-sm text-meditera-black' : 'text-gray-400 hover:text-gray-600'}`}
      >
        FR
      </Link>
    </div>
  );
}
