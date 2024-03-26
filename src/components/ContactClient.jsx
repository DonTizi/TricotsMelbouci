'use client'
import Link from 'next/link'
import { Border } from '@/components/Border'
import { FadeIn } from '@/components/FadeIn'
import { Offices } from '@/components/Offices'
import { SocialMedia } from '@/components/SocialMedia'
import { useDictionary } from '@/components/dictionary-provider'; // Assurez-vous que le chemin est correct


export function ContactDetails() {
    const dict = useDictionary()


    return (
      <FadeIn>
        <h2 className="font-display text-base font-semibold text-neutral-950">
          {dict.ContactFooter.bureau}
        </h2>
  
        <Offices className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2" />
  
        <Border className="mt-16 pt-16">
          <h2 className="font-display text-base font-semibold text-neutral-950">
          {dict.ContactFooter.Email}
          </h2>
          <dl className="mt-6 grid grid-cols-1 gap-8 text-sm sm:grid-cols-2">
            {[
              ['Inquiries', 'info@tricotmelbouci.com'],
            ].map(([label, email]) => (
              <div key={email}>
                <dt className="font-semibold text-neutral-950">{label}</dt>
                <dd>
                  <Link
                    href={`mailto:${email}`}
                    className="text-neutral-600 hover:text-neutral-950"
                  >
                    {email}
                  </Link>
                </dd>
              </div>
            ))}
          </dl>
        </Border>
  
        <Border className="mt-16 pt-16">
          <h2 className="font-display text-base font-semibold text-neutral-950">
          {dict.RootLayout.Follow}
          </h2>
          <SocialMedia className="mt-6" />
        </Border>
      </FadeIn>
    )
  }