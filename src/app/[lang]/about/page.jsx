import Image from 'next/image'

import { Border } from '@/components/Border'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'
import { loadArticles } from '@/lib/mdx'

function Culture() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Our culture"
        title="Balance your passion with your passion for life."
        invert
      >
        <p>
          We are a group of like-minded people who share the same core values.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Loyalty" invert>
          Our dedication to loyalty is reflected in our enduring relationships with clients and partners, built on a foundation of trust and a shared passion for quality craftsmanship in textile art.
          </GridListItem>
          <GridListItem title="Trust" invert>
          Trust is at the core of everything we do, fostering a culture of reliability and integrity that resonates through our authentic, high-quality textile creations
          </GridListItem>
          <GridListItem title="Compassion" invert>
          In every stitch and pattern, we embodies compassion, crafting each piece with an understanding of our customers' desires and a deep respect for the artisanal textile tradition.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

const team = [
  {
    title: 'Leadership',
    people: [
      {
        name: 'Houria Melbouci',
        role: 'Co-Founder / CEO',
      },
    ],
  },
  {
    title: 'Team',
    people: [
      {
        name: 'Farah Melbouci',
        role: 'Designer',
      },
      {
        name: 'Lilya Melbouci',
        role: 'Administration/Designer',
      },
      {
        name: 'Elyes Rayane Melbouci',
        role: 'Software Engineer',
      },
      {
        name: 'Amine Melbouci',
        role: 'Electrical Engineer',
      },

    ],
  },
]

function Team() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <div className="space-y-24">
        {team.map((group) => (
          <FadeInStagger key={group.title}>
            <Border as={FadeIn} />
            <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
              <FadeIn>
                <h2 className="font-display text-2xl font-semibold text-neutral-950">
                  {group.title}
                </h2>
              </FadeIn>
              <div className="lg:col-span-3">
                <ul
                  role="list"
                  className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8"
                >
                  {group.people.map((person) => (
                    <li key={person.name}>
                      <FadeIn>
                        <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                          <Image
                            alt=""
                            {...person.image}
                            className="h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
                          />
                          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
                            <p className="font-display text-base/6 font-semibold tracking-wide text-white">
                              {person.name}
                            </p>
                            <p className="mt-2 text-sm text-white">
                              {person.role}
                            </p>
                          </div>
                        </div>
                      </FadeIn>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeInStagger>
        ))}
      </div>
    </Container>
  )
}

export const metadata = {
  title: 'About Us',
  description:
    'our strength lies in collaboration, uniting diverse skills and ideas to craft exceptional knitwear that stands at the crossroads of creativity and artisanal excellence.',
}

export default async function About({ params: { lang } }) {
  let blogArticles = (await loadArticles()).slice(0, 2)

  return (
    <>
      <PageIntro eyebrow="About us" title="Decades Legacy of Textile">
        <p>
        As the proud successor of Tricots Capraro, a name synonymous with textile craftsmanship for decades, Tricots Melbouci, led by Houria Melbouci, embodies the true spirit of a canadian family-run enterprise.         </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
          Our commitment at Tricots Melbouci is to produce high-quality, locally-made knitwear, combining the principles of sustainability and efficiency.           </p>
          <p>
          Upholding a rich heritage, we at Tricots Melbouci seamlessly blend traditional expertise with a modern approach to meet contemporary textile needs.          </p>
        </div>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="5" label="Members" />
          <StatListItem value="+25" label="clients" />
          <StatListItem value="+200k" label="Transactions" />
        </StatList>
      </Container>

      <Culture />


      <PageLinks
        className="mt-24 sm:mt-32 lg:mt-40"
        title="From the blog"
        intro="Have a look on our blog, where we weave together stories of artistry, innovation, and the timeless beauty of knitwear, reflecting the essence of our passion for textile craftsmanship."
        pages={blogArticles}
      />

      <ContactSection />
    </>
  )
}
