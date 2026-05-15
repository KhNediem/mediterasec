import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const i18n = {
  defaultLocale: "en",
  locales: ["en", "fr"],
} as const;

export type Locale = (typeof i18n)["locales"][number];

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    // For example, incoming request is /pulse
    // The new URL is now /en/pulse
    
    // We can try to get preferred language from headers in a basic way
    const acceptLanguage = request.headers.get("accept-language") || "";
    const preferredLocale = acceptLanguage.includes("fr") ? "fr" : i18n.defaultLocale;
    
    return NextResponse.redirect(
      new URL(`/${preferredLocale}${pathname === "/" ? "" : pathname}`, request.url)
    );
  }
}

export const config = {
  // Matcher ignoring /_next/, /api/, and static assets
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|pulseLogo.png|SmallBlackOnWhite.jpg|.*\\.svg|.*\\.jpg|.*\\.png).*)"],
};
