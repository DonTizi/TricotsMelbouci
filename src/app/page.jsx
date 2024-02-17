
import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import logoPhobiaDark from '@/images/clients/phobia/logo-dark.svg'
import imageLaptop from '@/images/laptop.jpg'
import { loadCaseStudies } from '@/lib/mdx'
import {Clients} from '@/components/Clients'





function CaseStudies({ caseStudies }) {
  return (
    <>
      <SectionIntro
        title="Learn about our products."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
<p>
  {"Create your vision with Tricots Melbouci's unique textiles. Join hands with our passionate team to bring your style to life using sustainable, quality fabrics. Every thread tells a story — let's weave yours. Begin your bespoke journey now."}
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
function Collection() {
  return (
    <FadeIn className=""> {/* Ajouter l'effet de fondu ici */}
    <div className=''>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="sm:flex sm:items-baseline sm:justify-between">
        <SectionIntro
        title="Our Gallery"
        className="mt-24 sm:mt-32 lg:mt-40"
      >       </SectionIntro>
       </div>

        <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
          <div className="group aspect-h-1 aspect-w-2 overflow-hidden rounded-lg sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2">
            <img
              src="https://i.postimg.cc/W1cwCc1b/bleu.jpg"
              alt="Two models wearing women's black cotton crewneck tee and off-white cotton crewneck tee."
              className="object-cover object-center group-hover:opacity-75"
            />
            <div aria-hidden="true" className="bg-gradient-to-b from-transparent to-black opacity-50" />
            <div className="flex items-end p-6">
              <div>
                <h3 className="font-mona-sans text-white">
                <Link href="/gallery">
                    <span className="absolute inset-0 " />
                    New Arrivals
               </Link>
                </h3>

              </div>
            </div>
          </div>
          <div className="group aspect-h-1 aspect-w-2 overflow-hidden rounded-lg sm:aspect-none sm:relative sm:h-full">
            <img
              src="https://i.postimg.cc/3JmcdByN/Screenshot-2024-01-24-at-9-32-17-PM.png"
              alt="Wooden shelf with gray and olive drab green baseball caps, next to wooden clothes hanger with sweaters."
              className="object-cover object-center group-hover:opacity-75 sm:absolute sm:inset-0 sm:h-full sm:w-full"
            />
            <div
              aria-hidden="true"
              className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
            />
            <div className="flex items-end p-6 sm:absolute sm:inset-0">
              <div>
                <h3 className="font-mona-sans text-white">
                <Link href="/gallery">
                    <span className="absolute inset-0 " />
                    </Link>
                </h3>

              </div>
            </div>
          </div>
          <div className="group aspect-h-1 aspect-w-2 overflow-hidden rounded-lg sm:aspect-none sm:relative sm:h-full">
            <img
              src="https://i.postimg.cc/DzZ6ddzq/Screenshot-2024-01-24-at-9-31-49-PM.png"
              alt="Walnut desk organizer set with white modular trays, next to porcelain mug on wooden desk."
              className="object-cover object-center group-hover:opacity-75 sm:absolute sm:inset-0 sm:h-full sm:w-full"
            />
            <div
              aria-hidden="true"
              className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
            />
            <div className="flex items-end p-6 sm:absolute sm:inset-0">
              <div>
                <h3 className="font-mona-sans text-white">
                  <Link href="/gallery">
                    <span className="absolute inset-0 " />
                    </Link>
                </h3>

              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
    </FadeIn> 

  )
}






function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="We assist you in recognizing, investigating, and crafting new textile designs."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
<p>
  {"We guide you in discovering, developing, and launching innovative textile designs. Your creative passion, combined with our expertise."}
</p>

      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Demand Assessment">
           
            We initiate our process by thoroughly examining our clients' textile requirements to design products that align with their aspirations, optimizing the use of resources and minimizing waste. We're also committed to informing our clients about the benefits of sustainable textiles.            </ListItem>
            <ListItem title="Eco-Conscious Material Choice">
            Selecting the right raw materials is crucial for our environmentally responsible textile production. We opt for green alternatives such as organic, upcycled, and renewable fibers. In close partnership with our suppliers, we strive to ensure our materials adhere to the strictest ecological standards.            </ListItem>
            <ListItem title="Sustainable Manufacturing">
            Our textile manufacturing sets the standard for energy efficiency and minimizing waste. With state-of-the-art technology, we aim to reduce energy consumption and promote high-quality production, while our waste reduction practices focus on recycling and ethical work environments.            </ListItem>
            <ListItem title="Green Export Practices">
            We ensure our exports reflect our commitment to the environment, with sustainable shipping and reduced carbon emissions. Our packaging choices further our waste reduction goals, and our international certifications speak to our dedication to responsible textile production.            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata = {
  description:
    'We are Tricots',
}

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
        Tricots Melbouci
          </h1>
          <p className="mt-6 text-xl text-neutral-600">

          In the heart of Montreal, Tricots Melbouci blends the old with the new. Our local artisans pour heart into every piece, celebrating Quebec's legacy of craftsmanship. We choose natural materials and thoughtful methods to make clothes that last and honor Canada's tradition of quality.</p>
        </FadeIn>
      </Container>

      <Clients />

      <CaseStudies caseStudies={caseStudies} />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Phobia', logo: logoPhobiaDark }}
      >
        The team at Studio went above and beyond with our onboarding, even
        finding a way to access the user’s microphone without triggering one of
        those annoying permission dialogs.
      </Testimonial>
      <Collection />

      <Services />

      <ContactSection />
    </>
  )
}
