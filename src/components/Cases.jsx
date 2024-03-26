'use client'
import React from 'react';
import { FadeIn, FadeInStagger} from '@/components/FadeIn';
import { Container } from '@/components/Container'
import { useDictionary } from '@/components/dictionary-provider'; // Assurez-vous que le chemin est correct
import { SectionIntro } from '@/components/SectionIntro'
import Link from 'next/link'

export function CaseStudies({ caseStudies }) {
    const dict = useDictionary()
    
    
    return (
      <>
        <SectionIntro
          title={dict.Services.Title}
          className="mt-24 sm:mt-32 lg:mt-40"
        >
  <p>
    {dict.Services.Description}
  </p>
  
        </SectionIntro>
        <Container className="mt-16">
          <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {caseStudies.map((caseStudy) => (
              <FadeIn key={caseStudy.href} className="flex">
                <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                  <h3>
                    <Link href={caseStudy.href}>
                      <span className="absolute inset-0 rounded-3xl" />
                    </Link>
                  </h3>
                  <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                    <span className="text-neutral-300" aria-hidden="true">
                      /
                    </span>
                  </p>
                  <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                    {caseStudy.title}
                  </p>
                  <p className="mt-4 text-base text-neutral-600">
                    {caseStudy.description}
                  </p>
                </article>
              </FadeIn>
            ))}
          </FadeInStagger>
        </Container>
      </>
    )
  }