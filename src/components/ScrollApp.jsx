'use client'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { SectionIntro } from '@/components/SectionIntro'
import {ScrollImg} from '@/components/Colls'
import {Textures} from '@/components/Textures'
import {Echarpes} from '@/components/Echarpes'
import { useDictionary } from '@/components/dictionary-provider'; // Assurez-vous que le chemin est correct


export function MyApp({}) {
  const dict = useDictionary()

  return (
    <FadeIn>

    <Container>
      <SectionIntro title={dict.MyApp.SectionIntro1.Title}
        className="mt-24 sm:mt-32 lg:mt-40"
      > {dict.MyApp.SectionIntro1.Description}</SectionIntro>
      
      </Container >
      <Container className="w-full h-full">
        <ScrollImg/>
        <SectionIntro title={dict.MyApp.SectionIntro2.Title}
        className="mt-24 sm:mt-32 lg:mt-40"
      > {dict.MyApp.SectionIntro2.Description}</SectionIntro>
          <Textures/>
         
          <SectionIntro title={dict.MyApp.SectionIntro3.Title}
        className="mt-24 sm:mt-32 lg:mt-40"
      > {dict.MyApp.SectionIntro3.Description}

      </SectionIntro>
      
      </Container >
      <Container className="w-full h-full">
        <Echarpes/>
      </Container>
      
      </FadeIn>
      
  );
}