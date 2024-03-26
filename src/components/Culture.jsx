'use client'
import { Container } from '@/components/Container'
import { GridList, GridListItem } from '@/components/GridList'
import { SectionIntro } from '@/components/SectionIntro'
import { useDictionary } from '@/components/dictionary-provider'; // Assurez-vous que le chemin est correct


export function Culture() {
    const dict = useDictionary()

  
    return (
      <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
        <SectionIntro
          eyebrow={dict.Culture.Eyebrow}
          title={dict.Culture.Title}
          invert
        >
          <p>
          {dict.Culture.Description}
          </p>
        </SectionIntro>
        <Container className="mt-16">
          <GridList>
            <GridListItem title={dict.Culture.Title1} invert>
            {dict.Culture.Description1}</GridListItem>
            <GridListItem title={dict.Culture.Title2} invert>
            {dict.Culture.Description2}
            </GridListItem>
            <GridListItem title={dict.Culture.Title3} invert>
            {dict.Culture.Description3}
            </GridListItem>
          </GridList>
        </Container>
      </div>
    )
  }