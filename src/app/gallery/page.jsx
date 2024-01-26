
import Image from "next/image";
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { SectionIntro } from '@/components/SectionIntro'
import {ScrollImg} from '@/components/Scroll'
function MyApp({ Component, pageProps }) {
  return (
    <FadeIn>

    <Container>
      <SectionIntro title="Please Scroll to View Gallery"
        className="mt-24 sm:mt-32 lg:mt-40"
      > </SectionIntro>
      
      </Container >
      <Container className="w-full">
        <ScrollImg/>
      </Container>
      </FadeIn>
      
  );
}

export default function Homepage(){
  return(
    <MyApp/>
  )
};