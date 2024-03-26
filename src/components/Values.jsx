'use client'
import { useDictionary } from '@/components/dictionary-provider'; // Assurez-vous que le chemin est correct
import { Container } from '@/components/Container'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'

import { SectionIntro } from '@/components/SectionIntro'


export function Values() {
    const dict = useDictionary()

    return (
      <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
        <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
          <GridPattern
            className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
            yOffset={-270}
          />
        </div>
  
        <SectionIntro
          eyebrow={dict.ValuesSection.Eyebrow}
          title={dict.ValuesSection.Title}
        >
          <p>
          {dict.ValuesSection.Description} </p>
        </SectionIntro>
  
        <Container className="mt-24">
          <GridList>
            <GridListItem title={dict.ValuesSection.Values.SustainabilityTitle}>
            {dict.ValuesSection.Values.SustainabilityDescription}            </GridListItem>
            <GridListItem title={dict.ValuesSection.Values.CraftsmanshipTitle}    >
            {dict.ValuesSection.Values.CraftsmanshipDescription}             </GridListItem>
            <GridListItem title={dict.ValuesSection.Values.QualityTitle}>
            {dict.ValuesSection.Values.QualityDescription}             </GridListItem>
            <GridListItem title={dict.ValuesSection.Values.TransparencyTitle} >
            {dict.ValuesSection.Values.TransparencyDescription}             </GridListItem>
            <GridListItem title={dict.ValuesSection.Values.InnovationTitle} >
            {dict.ValuesSection.Values.InnovationDescription}            </GridListItem>
            <GridListItem title={dict.ValuesSection.Values.CommunityTitle} >
            {dict.ValuesSection.Values.CommunityDescription}         </GridListItem>
          </GridList>
        </Container>
      </div>
    )
  }