import Image from "next/image";
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { SectionIntro } from '@/components/SectionIntro'
import {ScrollImg} from '@/components/Colls'
import {Textures} from '@/components/Textures'
import {Echarpes} from '@/components/Echarpes'

function MyApp({}) {
  return (
    <FadeIn>

    <Container>
      <SectionIntro title="Apparel Trimming, Fashion collars and arm bands."
        className="mt-24 sm:mt-32 lg:mt-40"
      > Our knitted collars are available in a range of yarn materials, including cotton, polyester, acrylic, and more. As a result, they offer superior quality, durability, and vibrant colors compared to leading retailers. Additionally, we can accommodate other material combinations upon request.</SectionIntro>
      
      </Container >
      <Container className="w-full h-full">
        <ScrollImg/>
        <SectionIntro title="Fabrics, Jacquard and Ribs."
        className="mt-24 sm:mt-32 lg:mt-40"
      > Tricot Melbouci provides the opportunity to craft the fabric of your choice tailored to your preferences. Our versatile array of machines enables us to produce an endless variety of knitted fabrics, accommodating any pattern or design you have in mind.</SectionIntro>
          <Textures/>
         
          <SectionIntro title="Accessories, Scarves and beanies."
        className="mt-24 sm:mt-32 lg:mt-40"
      > Thanks to our expertise and state-of-the-art machinery, Tricot Melbouci is capable of crafting the finest knitted accessories for you, be it scarves or hats. This is achievable with a variety of yarns, including cotton, bamboo, baby alpaca, merino, or cashmere.

      </SectionIntro>
      
      </Container >
      <Container className="w-full h-full">
        <Echarpes/>
      </Container>
      
      </FadeIn>
      
  );
}

export default function Homepage(){
  return(
    <div className="w-full h-full">
    <MyApp/>
          <ContactSection />

    </div>
  )
};