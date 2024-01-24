import { Blockquote } from '@/components/Blockquote'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'
import imageLaptop from '@/images/laptop.jpg'
import imageMeeting from '@/images/meeting.jpg'
import imageWhiteboard from '@/images/whiteboard.jpg'

function Section({ title, image, children }) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function Discover() {
  return (
    <Section title="Conceptualization and Design" image={{ src: imageWhiteboard }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          We work closely with our clients to understand their{' '}
          At Tricots Melbouci, each project begins with a thorough conceptualization phase. Our talented artisans work closely with clients to understand their vision and preferences. Drawing upon our rich tradition in knit textile craftsmanship, we craft exclusive textile designs that transform your concepts into tangible realities. 
        </p>
        <p>
        This initial stage is where creativity meets our expertise to lay the foundation for unique and personalized textile products.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>Custom Knit Design</TagListItem>
        <TagListItem>Artisanal Textile Creativity</TagListItem>
        <TagListItem>Personalized Knitting Projects</TagListItem>
        <TagListItem>Traditional Knit Craftsmanship</TagListItem>
        <TagListItem>Creative Textile Conceptualization</TagListItem>
        <TagListItem>Bespoke Knitwear Designing</TagListItem>
      </TagList>
    </Section>
  )
}

function Build() {
  return (
    <Section title="Fabric Sourcing and Selection" image={{ src: imageLaptop, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
        The heart of our process is the meticulous sourcing of fabrics. We navigate the complexities of finding the ideal fabric for each project, leveraging our extensive network of yarn suppliers and advanced machinery. 
        </p>
        <p>
        Our commitment to quality drives us to source the finest materials, ensuring each fabric aligns perfectly with the project's requirements and our dedication to artisanal excellence.
        </p>
      </div>

      <Blockquote
        author={{ name: 'Houria Cheurfi', role: 'CEO of Tricots Melbouci' }}
        className="mt-12"
      >
        T&M were so regular with their progress updates we almost began to
        think they were automated!
      </Blockquote>
      <TagList className="mt-4">
        <TagListItem>Quality Fabric Sourcing</TagListItem>
        <TagListItem>Artisanal Fabric Selection</TagListItem>
        <TagListItem>Premium Yarn Suppliers</TagListItem>
        <TagListItem>Textile Material Excellence</TagListItem>
        <TagListItem>Custom Fabric Matching</TagListItem>
        <TagListItem>Sustainable Fabric Procurement</TagListItem>
      </TagList>
    </Section>
  )
}

function Deliver() {
  return (
    <Section title="Material Consultation and Guidance" image={{ src: imageMeeting, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
        Understanding the intricacies of textile design can be challenging. That's where our material consultation service comes into play. Our experienced team offers personalized consultations to help you make informed decisions about materials and design approaches. 
        </p>
        <p>
        We provide expert advice and guidance, ensuring your textile project is not only visually stunning but also functionally superior.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <List className="mt-8">
        <ListItem title="Personalized Material Guidance">
          Our projects always have 100% test coverage, which would be impressive
          if our tests weren’t as porous as a sieve.
        </ListItem>
        <ListItem title="Knitting Project Consultancy">
          To ensure reliability we only use the best Digital Ocean droplets that
          $4 a month can buy.
        </ListItem>
        <ListItem title="Artisanal Textile Solutions">
          Because we hold the API keys for every critical service your business
          uses, you can expect a lifetime of support, and invoices, from us.
        </ListItem>
      </List>
    </Section>
  )
}

function Values() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>

      <SectionIntro
        eyebrow="Our values"
        title="Balancing reliability and innovation"
      >
        <p>
        we masterfully balance reliability and innovation, ensuring each piece of knitwear reflects our enduring commitment to dependable quality while embracing forward-thinking designs.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Meticulous">
          Emphasizing precision in every detail, from materials to the final product.          </GridListItem>
          <GridListItem title="Efficient">
            We pride ourselves on never missing a deadline which is easy because
            most of the work was done years ago.
          </GridListItem>
          <GridListItem title="Adaptable">
            Every business has unique needs and our greatest challenge is
            shoe-horning those needs into something we already built.
          </GridListItem>
          <GridListItem title="Honest">
            We are transparent about all of our processes, banking on the simple
            fact our clients never actually read anything.
          </GridListItem>
          <GridListItem title="Loyal">
            We foster long-term relationships with our clients that go beyond
            just delivering a product, allowing us to invoice them for decades.
          </GridListItem>
          <GridListItem title="Innovative">
            The technological landscape is always evolving and so are we. We are
            constantly on the lookout for new open source projects to clone.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata = {
  title: 'Our Process',
  description:
    'We approaches each creation with a mindset of blending innovation and tradition, focusing on meticulous craftsmanship and a deep passion for sustainable, high-quality knitwear.',
}

export default function Process() {
  return (
    <>
      <PageIntro eyebrow="Our process" title="How we work">
        <p>
        We approaches each creation with a mindset of blending innovation and tradition, focusing on meticulous craftsmanship and a deep passion for sustainable, high-quality knitwear.
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Discover />
        <Build />
        <Deliver />
      </div>

      <Values />

      <ContactSection />
    </>
  )
}
