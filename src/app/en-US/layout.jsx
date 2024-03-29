import { RootLayout } from '@/components/RootLayout'
import { SpeedInsights } from "@vercel/speed-insights/next"
import '@/styles/tailwind.css'
import { Analytics } from "@vercel/analytics/react"
import { getDictionary } from '@/components/dictionaries'
import DictionaryProvider from '@/components/dictionary-provider'

export const englishMetadata = {
  title: {
    template: '%s - Tricot Melbouci',
    default: 'Tricot Melbouci - Textile Manufacturing.',
  },
  description:"Discover our textile manufacturing in Montreal, specializing in natural fiber production: Knitting in wool, cashmere, cotton, and more."
}

export const frenchMetadata = {
  title: {
    template: '%s - Tricot Melbouci',
    default: 'Tricot Melbouci - Fabrication Textile.',
  },
  description: "Découvrez notre fabrication textile à Montréal, spécialisée dans la production de fibres naturelles : Tricot en laine, cachemire, coton, et plus encore."
}

export async function generateMetadata({ params }) {
  return params.lang === "en-US" ? englishMetadata : frenchMetadata;
}
  
  export default async function Layout({ children, params: {lang} }) {
  
      const dictionary = await getDictionary(lang || 'fr');
    
      return (
        <html lang={lang} className="h-full bg-neutral-950 text-base antialiased">
          <body className="flex min-h-full flex-col">
           <DictionaryProvider dictionary = {dictionary} > <RootLayout>{children}
            <SpeedInsights/>
            <Analytics/></RootLayout></DictionaryProvider>
          </body>
        </html>
      );
    }