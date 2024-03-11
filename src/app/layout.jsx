import { RootLayout } from '@/components/RootLayout'

import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - Tricots Melbouci',
    default: 'Tricots Melbouci - Manifacturing Textile.',
  },
}

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'fr' }]
}

export default function Layout({ children, params }) {
  return (
    <html lang={params.lang} className="h-full bg-neutral-950 text-base antialiased">
      <body className="flex min-h-full flex-col">
        
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  )
}
