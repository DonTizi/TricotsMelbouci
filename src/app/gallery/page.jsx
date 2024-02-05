import Image from "next/image";
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { SectionIntro } from '@/components/SectionIntro'
import {ScrollImg} from '@/components/Scroll'
import {Textures} from '@/components/Textures'
import '@/styles/gallery.css'

function MyApp({}) {
  return (
    <FadeIn>

    <Container>
      <SectionIntro title="Our Gallery"
        className="mt-24 sm:mt-32 lg:mt-40"
      > </SectionIntro>
      
      </Container >
      <Container className="w-full h-full">
        <ScrollImg/>
        <SectionIntro title="Textures"
        className="mt-24 sm:mt-32 lg:mt-40"
      > </SectionIntro>
          <Textures/>
          <SectionIntro title="Scarfs"
        className="mt-24 sm:mt-32 lg:mt-40"
      > </SectionIntro>
          <ScrollImg/>

      </Container>
      </FadeIn>
      
  );
}

export default function Homepage(){
  return(
    <div className="w-full h-full">
    <MyApp/>
    </div>
  )
};