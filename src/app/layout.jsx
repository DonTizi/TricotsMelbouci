import { RootLayout } from '@/components/RootLayout'
import { SpeedInsights } from "@vercel/speed-insights/next"

import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - Tricots Melbouci',
    default: 'Tricots Melbouci - Textile Manufacturing.',
  },
  description:"Discover our textile manufacturing in Montreal, specializing in natural fiber production: Knitting in wool, cashmere, cotton, and more."
}

export default function Layout({ children }) {
  return (
    <html lang="en" className="h-full bg-neutral-950 text-base antialiased">
      <body className="flex min-h-full flex-col">
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  )
}
