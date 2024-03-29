
import Link from 'next/link'
import {CaseStudies} from '@/components/Cases'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'

import { SectionIntro } from '@/components/SectionIntro'

import { loadCaseStudies } from '@/lib/mdx'
import {Clients} from '@/components/Clients'
import { getDictionary } from './dictionaries/dictionaries'
import { englishMetadata, frenchMetadata } from '@/metadata/page';
import { Collection } from '@/components/Collection'

export const dynamic = 'force-dynamic'



/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/  






// Dans votre page Next.js

export async function generateMetadata({ params }) {
  return params.lang === "en-US" ? englishMetadata : frenchMetadata;
}


export default async function Home({ params: { lang } }) {
  let caseStudies = (await loadCaseStudies(lang)).slice(0, 3)
  const dict = await getDictionary(lang)


  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
          Tricot Melbouci
          </h1>
          <p className="mt-6 text-xl text-neutral-600">

          {dict.Homepage.Intro}</p>
        </FadeIn>
      </Container>

      <Clients />

      <CaseStudies caseStudies={caseStudies} />

      <Collection />




      <ContactSection />
    </>
  )
}