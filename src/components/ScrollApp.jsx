'use client'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { SectionIntro } from '@/components/SectionIntro'
import {ImageSlider} from '@/components/ImageSlider'
import {IMAGES} from "./EcharpeImg";
import { TextureImg } from './TexturesImg'
import { ColsImg } from './ColsImg'

import { useDictionary } from '@/components/dictionary-provider'; // Assurez-vous que le chemin est correct
import './ImageSlider.css'

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
      <ImageSlider images={ColsImg} slidesToShow={5}/>
        <SectionIntro title={dict.MyApp.SectionIntro2.Title}
        className="mt-24 sm:mt-32 lg:mt-40"
      > {dict.MyApp.SectionIntro2.Description}</SectionIntro>
        <ImageSlider images={TextureImg} slidesToShow={5}/>
         
          <SectionIntro title={dict.MyApp.SectionIntro3.Title}
        className="mt-24 sm:mt-32 lg:mt-40"
      > {dict.MyApp.SectionIntro3.Description}

      </SectionIntro>
      
      </Container >
      <Container className="w-full h-full">
        <ImageSlider images={IMAGES} slidesToShow={5}/>
      </Container>
      
      </FadeIn>
      
  );
}