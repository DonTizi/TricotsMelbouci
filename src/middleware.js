import { NextResponse } from "next/server";

let locales = ['en', 'fr'];

// Get the preferred locale from the request headers or use 'fr-FR' as default
function getLocale(request) {
  // Examine the Accept-Language header to determine the best locale
  const acceptLanguage = request.headers.get('accept-language');
  const requestedLocales = acceptLanguage ? acceptLanguage.split(',').map(lang => lang.split(';')[0]) : [];

  // Find the first requested locale that is supported, or default to French
  const locale = requestedLocales.find(lang => locales.includes(lang)) || 'en';

  return locale;
}

export function middleware(request) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Redirect if there is no locale
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  // e.g. incoming request is /products
  // The new URL is now /fr-FR/products
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next).*)',
  ],
};
