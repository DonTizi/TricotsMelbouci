import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
 
let headers = { 'accept-language': 'en-US,en;q=0.5' }
let languages = new Negotiator({ headers }).languages()
let locales = ['en-US', 'fr']
let defaultLocale = 'en-US'
 
match(languages, locales, defaultLocale) // -> 'en-US'

import { NextResponse } from "next/server";
 
 
// Get the preferred locale, similar to the above or using a library
function getLocale(request) {
    // Extract the 'accept-language' header from the incoming request
    const headers = request.headers.get('accept-language');
  
    // Create a new Negotiator instance for the request's languages
    const negotiator = new Negotiator({ headers: { 'accept-language': headers } });
  
    // Get the list of languages preferred by the user's browser
    const languages = negotiator.languages();
  
    // Use the match function to find the best match between the preferred languages
    // and your supported locales, defaulting to French ('fr') if no match is found.
    const matchedLocale = match(languages, locales, defaultLocale);
  
    return matchedLocale;
  } 
export function middleware(request) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )
 
  if (pathnameHasLocale) return
 
  // Redirect if there is no locale
  const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname}`
  // e.g. incoming request is /products
  // The new URL is now /en-US/products
  return NextResponse.redirect(request.nextUrl)
}
 
export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!api|_next/static|_next/image|styles|fr|en-US|favicon.ico).*)"
    // Optional: only run on root (/) URL
    // '/'
  ],
}