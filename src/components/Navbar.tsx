"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import LanguageToggle from "./LanguageToggle";

export default function Navbar({ lang, dict }: { lang: string, dict: any }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white border-b border-meditera-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href={`/${lang}`} className="flex-shrink-0 flex items-center gap-3">
              <Image 
                src="/SmallBlackOnWhite.jpg" 
                alt="MediteraSec Logo" 
                width={40} 
                height={40}
                className="rounded-sm"
              />
              <span className="font-bold text-xl tracking-tight text-meditera-black">
                MediteraSec
              </span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link href={`/${lang}/about`} className="text-meditera-darkgray hover:text-meditera-black transition-colors font-medium">
              {dict.about}
            </Link>
            <Link href={`/${lang}/partnership`} className="text-meditera-darkgray hover:text-meditera-black transition-colors font-medium">
              {dict.partnership}
            </Link>
            <Link href={`/${lang}/contact`} className="text-meditera-darkgray hover:text-meditera-black transition-colors font-medium">
              {dict.contact}
            </Link>
            <Link href={`/${lang}/pulse#early-access`} className="text-meditera-darkgray hover:text-meditera-black transition-colors font-medium">
              {dict.pricing}
            </Link>
            
            <div className="pl-4 border-l border-gray-200">
              <LanguageToggle currentLang={lang} />
            </div>

            <Link 
              href={`/${lang}/pulse`} 
              className="ml-4 px-5 py-2.5 rounded-full bg-meditera-black text-white hover:bg-meditera-darkgray transition-all shadow-sm font-medium"
            >
              {dict.discoverPulse}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden gap-4">
            <LanguageToggle currentLang={lang} />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-meditera-darkgray hover:text-meditera-black hover:bg-meditera-gray focus:outline-none transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-meditera-gray">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              href={`/${lang}/about`} 
              className="block px-3 py-2 rounded-md text-base font-medium text-meditera-darkgray hover:text-meditera-black hover:bg-meditera-gray transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {dict.about}
            </Link>
            <Link 
              href={`/${lang}/partnership`} 
              className="block px-3 py-2 rounded-md text-base font-medium text-meditera-darkgray hover:text-meditera-black hover:bg-meditera-gray transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {dict.partnership}
            </Link>
            <Link 
              href={`/${lang}/contact`} 
              className="block px-3 py-2 rounded-md text-base font-medium text-meditera-darkgray hover:text-meditera-black hover:bg-meditera-gray transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {dict.contact}
            </Link>
            <Link 
              href={`/${lang}/pulse#early-access`} 
              className="block px-3 py-2 rounded-md text-base font-medium text-meditera-darkgray hover:text-meditera-black hover:bg-meditera-gray transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {dict.pricing}
            </Link>
            <Link 
              href={`/${lang}/pulse`} 
              className="block px-3 py-2 mt-4 text-center rounded-md text-base font-medium bg-meditera-black text-white hover:bg-meditera-darkgray transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {dict.discoverPulse}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
