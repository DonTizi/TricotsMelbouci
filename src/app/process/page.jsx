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
    <Section title="Talking Stage" image={{ src: imageWhiteboard }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
        In the first step, we chat with you about your vision. We'll show you different styles to figure out what you like and what you don't. This helps us understand exactly what you're looking for in your knitwear, ensuring the final piece is perfectly tailored to your preferences.
        </p>

      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>Style Preferences</TagListItem>
        <TagListItem>Client Inspiration</TagListItem>
        <TagListItem>Fashion Models</TagListItem>
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
        Next, we focus on finding the right material. If you're not sure which fabric you want, we'll help you choose the best option. Our selection includes high-quality fabrics such as baby alpaca, merino, cashmere, and organic cotton, without forgetting other versatile threads like polyester, nylon, and organic bamboo, among others. Our goal is to select the perfect textile that meets your needs and enhances the quality of your knitwear, ensuring both comfort and style.


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
        <TagListItem>cashmere</TagListItem>
        <TagListItem>organic cotton</TagListItem>
        <TagListItem>polyester</TagListItem>
        <TagListItem>organic bamboo</TagListItem>
        <TagListItem>baby alpaca</TagListItem>
        <TagListItem>merino</TagListItem>
      </TagList>
    </Section>
  )
}

function Deliver() {
  return (
    <Section title="Conceptualization and Design" image={{ src: imageMeeting, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
        Finally, we bring your idea to life. We use our M1+ Software to create a detailed pattern of your design. Our experts work meticulously to ensure everything is just right. Then, we use our Stoll industrial machines to start the knitting process. Once we've finished, we'll show you the result to make sure you're completely satisfied with your unique piece of knitwear.
      </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>M1+ Software Design</TagListItem>
        <TagListItem>Knitting Technology</TagListItem>
        <TagListItem>Stoll Industrial Knitting</TagListItem>
        <TagListItem>Design Expertise</TagListItem>
        <TagListItem>Custom Knitwear Creation</TagListItem>
      </TagList>
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
          <GridListItem title="Sustainability">
          Embrace eco-friendly practices to protect our planet.
          </GridListItem>
          <GridListItem title="Craftsmanship">
          Value artisan skill in every knit.          </GridListItem>
          <GridListItem title="Quality">
          Ensure top-notch materials and durability.          </GridListItem>
          <GridListItem title="Transparency">
          Be open about our practices and sources.          </GridListItem>
          <GridListItem title="Innovation">
          Blend tradition with modern techniques.          </GridListItem>
          <GridListItem title="Community">
          Build strong, respectful relationships.          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata = {
  title: 'Our Process',
  description:
    'We make every piece with a mix of new ideas and old traditions, focusing on careful work and a love for long-lasting, quality knitwear.',
}

export default function Process() {
  return (
    <>
      <PageIntro eyebrow="Our process" title="How we work">
        <p>
        We make every piece with a mix of new ideas and old traditions, focusing on careful work and a love for long-lasting, quality knitwear.        </p>
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
