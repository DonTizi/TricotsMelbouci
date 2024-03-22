import { RootLayout } from '@/components/RootLayout'
import {SpeedInsights} from "@/vercel/speed-insight/next"
import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - Tricots Melbouci',
    default: 'Tricots Melbouci - Manifacturing Textile.',
  },
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
