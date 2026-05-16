"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronRight } from "lucide-react";
import Image from "next/image";
import LanguageToggle from "./LanguageToggle";

export default function Navbar({ lang, dict }: { lang: string, dict: any }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'py-4' : 'py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className={`transition-all duration-500 rounded-full border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.1)] backdrop-blur-xl ${scrolled ? 'bg-white/90 py-2.5 px-6' : 'bg-white/70 py-4 px-8'} flex items-center justify-between`}>
          {/* Logo Section */}
          <div className="flex items-center">
            <Link href={`/${lang}`} className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 overflow-hidden rounded-xl border border-gray-100 shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-md">
                <Image 
                  src="/SmallBlackOnWhite.jpg" 
                  alt="MediteraSec Logo" 
                  fill
                  className="object-cover"
                />
              </div>
              <span className="font-extrabold text-lg tracking-tight text-meditera-black hidden sm:block">
                MediteraSec
              </span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 bg-gray-100/50 p-1 rounded-full border border-gray-200/50">
            <Link 
              href={`/${lang}`} 
              className={`px-5 py-2 text-sm font-bold transition-all rounded-full ${pathname === `/${lang}` ? 'bg-white shadow-sm text-meditera-black' : 'text-gray-500 hover:text-meditera-black hover:bg-white/50'}`}
            >
              {dict.home}
            </Link>
            <Link 
              href={`/${lang}/about`} 
              className={`px-5 py-2 text-sm font-bold transition-all rounded-full ${pathname === `/${lang}/about` ? 'bg-white shadow-sm text-meditera-black' : 'text-gray-500 hover:text-meditera-black hover:bg-white/50'}`}
            >
              {dict.about}
            </Link>
            <Link 
              href={`/${lang}/partnership`} 
              className={`px-5 py-2 text-sm font-bold transition-all rounded-full ${pathname === `/${lang}/partnership` ? 'bg-white shadow-sm text-meditera-black' : 'text-gray-500 hover:text-meditera-black hover:bg-white/50'}`}
            >
              {dict.partnership}
            </Link>
            <Link 
              href={`/${lang}/contact`} 
              className={`px-5 py-2 text-sm font-bold transition-all rounded-full ${pathname === `/${lang}/contact` ? 'bg-white shadow-sm text-meditera-black' : 'text-gray-500 hover:text-meditera-black hover:bg-white/50'}`}
            >
              {dict.contact}
            </Link>
            <Link 
              href={`/${lang}/pulse`} 
              className={`px-5 py-2 text-sm font-extrabold transition-all rounded-full ${pathname === `/${lang}/pulse` ? 'bg-white shadow-sm text-[#22416c] border border-[#7fbd94]/30' : 'bg-gradient-to-r from-[#7fbd94] to-[#22416c] text-white shadow-md hover:shadow-lg hover:-translate-y-0.5'}`}
            >
              {dict.discoverPulse}
            </Link>
          </div>

          {/* Action Section */}
          <div className="hidden md:flex items-center gap-4">
            <LanguageToggle currentLang={lang} />
            <div className="h-6 w-px bg-gray-200 mx-2"></div>
            <Link 
              href={`/${lang}/pulse#early-access`} 
              className="group relative inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold text-white transition-all duration-300 bg-meditera-black rounded-full hover:bg-meditera-darkgray hover:shadow-xl hover:shadow-black/20 active:scale-95"
            >
              <span className="relative z-10">{dict.pricing}</span>
              <ChevronRight className="w-4 h-4 ml-1 relative z-10 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Controls */}
          <div className="flex md:hidden items-center gap-3">
             <LanguageToggle currentLang={lang} />
             <button
               onClick={() => setIsOpen(!isOpen)}
               className="p-2.5 rounded-full bg-gray-100 text-meditera-darkgray hover:text-meditera-black focus:outline-none transition-all active:scale-90"
             >
               {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
             </button>
          </div>
        </nav>
      </div>

      {/* Mobile Navigation Drawer */}
      <div className={`fixed inset-x-4 top-28 z-40 md:hidden transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1) transform ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-12 opacity-0 pointer-events-none'}`}>
        <div className="bg-white/95 backdrop-blur-2xl rounded-[2.5rem] border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.15)] p-8 space-y-6">
          <div className="flex flex-col gap-3">
            <Link 
              href={`/${lang}`} 
              className={`flex items-center justify-between px-6 py-4 rounded-2xl text-lg font-bold transition-all group ${pathname === `/${lang}` ? 'bg-gray-100 text-meditera-black' : 'text-gray-500 hover:text-meditera-black hover:bg-gray-50'}`}
              onClick={() => setIsOpen(false)}
            >
              {dict.home} 
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href={`/${lang}/about`} 
              className={`flex items-center justify-between px-6 py-4 rounded-2xl text-lg font-bold transition-all group ${pathname === `/${lang}/about` ? 'bg-gray-100 text-meditera-black' : 'text-gray-500 hover:text-meditera-black hover:bg-gray-50'}`}
              onClick={() => setIsOpen(false)}
            >
              {dict.about} 
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href={`/${lang}/partnership`} 
              className={`flex items-center justify-between px-6 py-4 rounded-2xl text-lg font-bold transition-all group ${pathname === `/${lang}/partnership` ? 'bg-gray-100 text-meditera-black' : 'text-gray-500 hover:text-meditera-black hover:bg-gray-50'}`}
              onClick={() => setIsOpen(false)}
            >
              {dict.partnership} 
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href={`/${lang}/contact`} 
              className={`flex items-center justify-between px-6 py-4 rounded-2xl text-lg font-bold transition-all group ${pathname === `/${lang}/contact` ? 'bg-gray-100 text-meditera-black' : 'text-gray-500 hover:text-meditera-black hover:bg-gray-50'}`}
              onClick={() => setIsOpen(false)}
            >
              {dict.contact} 
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href={`/${lang}/pulse`} 
              className={`flex items-center justify-between px-6 py-4 rounded-2xl text-lg font-extrabold transition-all group ${pathname === `/${lang}/pulse` ? 'bg-gray-100 text-[#22416c]' : 'bg-gradient-to-r from-[#7fbd94] to-[#22416c] text-white shadow-lg'}`}
              onClick={() => setIsOpen(false)}
            >
              {dict.discoverPulse} 
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="pt-6 border-t border-gray-100">
            <Link 
              href={`/${lang}/pulse#early-access`} 
              className="flex items-center justify-center w-full px-8 py-5 rounded-2xl text-lg font-extrabold bg-meditera-black text-white hover:bg-meditera-darkgray transition-all shadow-2xl active:scale-[0.97]"
              onClick={() => setIsOpen(false)}
            >
              {dict.pricing}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
