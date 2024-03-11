import { NextResponse } from "next/server";
import Cookies from 'js-cookie';

let locales = ['en', 'fr']

function getLocale(request) {
  // 1. Prioriser le cookie de langue
  const languageCookie = Cookies.get('preferredLocale'); 
  if (languageCookie && locales.includes(languageCookie)) {
    return languageCookie;
  }

  // 2. Prioriser l'en-tête "Accept-Language"
  const acceptLanguageHeader = request.headers.get('accept-language');
  if (acceptLanguageHeader) {
    const preferredLocale = acceptLanguageHeader.split(',')[0];
    if (locales.includes(preferredLocale)) {
      return preferredLocale;
    }
  }

  // 3. Revenir à l'anglais par défaut
  return 'en';
}

export function middleware(request) {
  // Vérifier si une locale est présente dans le chemin d'accès
  const { pathname } = request.nextUrl
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) return

  // Redirection si aucune locale n'est présente
  const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname}`
  // e.g. incoming request is /products
  // The new URL is now /en-US/products
  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: [
    '/((?!_next).*)',
  ],
}
