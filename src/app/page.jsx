import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import logoBrightPath from '@/images/clients/bright-path/logo-light.svg'
import logoFamilyFund from '@/images/clients/family-fund/logo-light.svg'
import logoGreenLife from '@/images/clients/green-life/logo-light.svg'
import logoHomeWork from '@/images/clients/home-work/logo-light.svg'
import logoMailSmirk from '@/images/clients/mail-smirk/logo-light.svg'
import logoNorthAdventures from '@/images/clients/north-adventures/logo-light.svg'
import logoPhobiaDark from '@/images/clients/phobia/logo-dark.svg'
import logoPhobiaLight from '@/images/clients/phobia/logo-light.svg'
import logoUnseal from '@/images/clients/unseal/logo-light.svg'
import imageLaptop from '@/images/laptop.jpg'
import { loadCaseStudies } from '@/lib/mdx'
import { Button } from '@/components/Button'




const clients = [
  ['Joseph', logoPhobiaLight],
  ['Sophie', logoFamilyFund],
  ['Marie', logoUnseal],
  ['France', logoMailSmirk],
  ['Jonathan', logoHomeWork],
  ['Farah', logoGreenLife],
  ['Elyes', logoBrightPath],
  ['Lilya', logoNorthAdventures],
]

function Clients() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            We’ve worked with Dozens of amazing people, A REVOIR CETTE PARTIE LA JE DOIS METTRE LES COMPAGNIES AVEC LESQUELLES ON A TRAVAILLER
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {clients.map(([client, logo]) => (
              <li key={client}>
                <FadeIn>
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function CaseStudies({ caseStudies }) {
  return (
    <>
      <SectionIntro
        title="Learn about our products."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
<p>
  {"Discover our range of services that cater to all your textile design needs. From custom-made designs to fabric sourcing, we offer a variety of services to help bring your vision to life. Explore our services below to learn more."}
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
    <FadeIn className="bg-gray-50"> {/* Ajouter l'effet de fondu ici */}
    <div className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="sm:flex sm:items-baseline sm:justify-between">
          <h2 className="text-2xl font-mona-sans tracking-tight text-gray-900">Our Gallery</h2>
          <Button><Link href="/gallery">View Collection</Link></Button>
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
                    Accessories
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
                    Wool Sweaters
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
        title="We help you identify, explore and product to new Models."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
<p>
  {"As long as those opportunities involve giving us resources and passion."}
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
            <ListItem title="Needs Analysis">
           
We begin by carefully analyzing our customers' textile needs to craft products that meet their standards, while optimizing resource use and reducing waste. We also educate customers about the advantages of eco-friendly textiles.
            </ListItem>
            <ListItem title="Material Selection">
            Our choice of raw materials is pivotal to sustainable textile production. We favor eco-friendly options like organic, recycled, and renewable fibers. Collaborating closely with suppliers, we ensure materials meet the highest environmental standards.
            </ListItem>
            <ListItem title="Production Excellence">
            Our textile production prioritizes energy efficiency and waste reduction. With cutting-edge machinery, we minimize energy use while upholding quality. We employ waste management practices to maximize recycling and uphold ethical working conditions for our team.
            </ListItem>
            <ListItem title="Exportation">
            Our product exports are eco-driven, featuring sustainable transportation choices and carbon footprint reduction through streamlined logistics. Our eco-friendly packaging minimizes waste. We proudly hold international certifications affirming our dedication to environmentally responsible textile production.
            </ListItem>
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

          In the heart of Montreal, our artisans elegantly weave tradition with innovation, crafting textiles that embody the spirit of Quebec's rich craftsmanship. Each stitch is a testament to our dedication to Canadian excellence.          </p>
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
