
import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import imageLaptop from '@/images/laptop.jpg'
import { loadCaseStudies } from '@/lib/mdx'
import {Clients} from '@/components/Clients'


export const dynamic = 'force-dynamic'


function CaseStudies({ caseStudies }) {
  
  return (
    <>
      <SectionIntro
        title="Learn about our Services."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
<p>
  {"Explore Our Services. Make something special with Tricots Melbouci. Our team is here to help you pick the perfect fabric for a look that's all your own. Start your custom knitwear project with us today."}
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
        <div className="">
        <SectionIntro
        title="Our Gallery"
        className="mt-24 sm:mt-32 lg:mt-40"
      >       </SectionIntro>
       </div>

        <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
          <div className="group aspect-h-1 aspect-w-2 overflow-hidden rounded-lg sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2">
            <img
              src="https://i.postimg.cc/5NT6tTNQ/24.jpg"
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
              src="https://i.postimg.cc/T35v7Zd9/IMG-2182.png"
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
              src="https://i.postimg.cc/50cj0B0B/IMG-2758.png"
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







export const metadata = {
  description:
    'Discover our textile manufacturing in Montreal, specializing in natural fiber production: Knitting in wool, cashmere, cotton, and more.',
}

export default async function Home({ params: { lang } }) {
  let caseStudies = (await loadCaseStudies(lang)).slice(0, 3)


  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
          Tricot Melbouci
          </h1>
          <p className="mt-6 text-xl text-neutral-600">

          In the heart of Montreal, Tricots Melbouci blends the old with the new. Our local artisans pour heart into every piece, celebrating Quebec's legacy of craftsmanship. We choose natural materials and thoughtful methods to make clothes that last and honor Canada's tradition of quality.</p>
        </FadeIn>
      </Container>

      <Clients />

      <CaseStudies caseStudies={caseStudies} />

      <Collection />




      <ContactSection />
    </>
  )
}