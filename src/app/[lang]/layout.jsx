import { RootLayout } from '@/components/RootLayout'
import { SpeedInsights } from "@vercel/speed-insights/next"
import '@/styles/tailwind.css'
import { Analytics } from "@vercel/analytics/react"
import { getDictionary } from './dictionaries/dictionaries'
import DictionaryProvider from '@/components/dictionary-provider'
import { englishMetadata, frenchMetadata } from '@/metadata/layout';




export async function generateMetadata({ params }) {
  return params.lang === "en-US" ? englishMetadata : frenchMetadata;
}



export default async function Layout({ children, params: {lang} }) {

    const dictionary = await getDictionary(lang);
  
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