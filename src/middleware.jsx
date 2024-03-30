
import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';
import { NextResponse } from 'next/server';

// Configuration
const locales = ['en-US', 'fr'];
const defaultLocale = 'en-US';

// Function to get preferred locale
function getLocale(request) {
  const acceptLanguageHeader = request.headers.get('accept-language');
  const languages = new Negotiator({ headers: { 'accept-language': acceptLanguageHeader } }).languages();
  return match(languages, locales, defaultLocale);
}

// Next.js middleware
export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Check if locale is already present in the pathname
  if (locales.some((locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`)) {
    return; // No redirect needed
  }

  // Get user's preferred locale and redirect
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!api|_next/static|_next/image|styles|fr|en-US|sitemap\.xml|robots\.txt|favicon.ico).*)"
    // Optional: only run on root (/) URL
    // '/'
  ],
}