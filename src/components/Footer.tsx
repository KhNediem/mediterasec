import Link from "next/link";
import Image from "next/image";

const Linkedin = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Footer({ lang, dict }: { lang: string, dict: any }) {
  return (
    <footer className="bg-white border-t border-meditera-gray py-12 px-4 sm:px-6 lg:px-8 mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand Column */}
        <div className="col-span-1 md:col-span-2">
          <Link href={`/${lang}`} className="flex items-center gap-3 mb-4">
            <Image 
              src="/SmallBlackOnWhite.jpg" 
              alt="MediteraSec Logo" 
              width={32} 
              height={32}
              className="rounded-sm"
            />
            <span className="font-bold text-xl tracking-tight text-meditera-black">
              MediteraSec
            </span>
          </Link>
          <p className="text-meditera-darkgray max-w-xs leading-relaxed">
            {dict.description}
          </p>
          <div className="mt-6 flex space-x-4">
            <a href="https://www.linkedin.com/company/mediterasec/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="text-meditera-darkgray hover:text-[#0A66C2] transition-colors">
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Links Columns */}
        <div>
          <h3 className="font-bold text-meditera-black mb-4 uppercase text-sm tracking-wider">{dict.solutions}</h3>
          <ul className="space-y-3">
            <li>
              <Link href={`/${lang}/pulse`} className="text-meditera-darkgray hover:text-meditera-black transition-colors">
                {dict.pulseIds}
              </Link>
            </li>
            <li>
              <Link href={`/${lang}/pulse#pricing`} className="text-meditera-darkgray hover:text-meditera-black transition-colors">
                {dict.pricing}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-meditera-black mb-4 uppercase text-sm tracking-wider">{dict.company}</h3>
          <ul className="space-y-3">
            <li>
              <Link href={`/${lang}/about`} className="text-meditera-darkgray hover:text-meditera-black transition-colors">
                {dict.aboutUs}
              </Link>
            </li>
            <li>
              <Link href={`/${lang}/partnership`} className="text-meditera-darkgray hover:text-meditera-black transition-colors">
                {dict.partnership}
              </Link>
            </li>
            <li>
              <Link href={`/${lang}/contact`} className="text-meditera-darkgray hover:text-meditera-black transition-colors">
                {dict.contact}
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-meditera-gray flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-meditera-darkgray">
          &copy; {new Date().getFullYear()} {dict.copyright}
        </p>
        <div className="flex space-x-6">
          <Link href={`/${lang}/terms`} className="text-sm text-meditera-darkgray hover:text-meditera-black transition-colors">
            {dict.terms}
          </Link>
          <Link href={`/${lang}/privacy`} className="text-sm text-meditera-darkgray hover:text-meditera-black transition-colors">
            {dict.privacy}
          </Link>
        </div>
      </div>
    </footer>
  );
}
