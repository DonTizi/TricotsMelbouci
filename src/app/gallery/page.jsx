import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { SectionIntro } from '@/components/SectionIntro'
import {ScrollImg} from '@/components/Scroll'
import {Textures} from '@/components/Textures'
function MyApp({}) {
  return (
    <FadeIn>

    <Container>
      <SectionIntro title="Our Gallery"
        className="mt-24 sm:mt-32 lg:mt-40"
      > Discover the artistry of Tricots Melbouci in our gallery. See, touch, and feel the variety of textures that our skilled artisans and advanced knitting technology bring to life.</SectionIntro>
      
      </Container >
      <Container className="w-full h-full">
        <ScrollImg/>
        <SectionIntro title="Textures"
        className="mt-24 sm:mt-32 lg:mt-40"
      > Diverse Textures, Sustainable Knitwear Craft made responsibly.</SectionIntro>
          <Textures/>

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