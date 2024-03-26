'use client'
import { Blockquote } from '@/components/Blockquote'
import { TagList, TagListItem } from '@/components/TagList'
import imageLaptop from '@/images/laptop.jpg'
import { useDictionary } from '@/components/dictionary-provider'; // Assurez-vous que le chemin est correct
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { StylizedImage } from '@/components/StylizedImage'
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



export function Build() {
    const dict = useDictionary()

    return (
      <Section title={dict.BuildSection.Title} image={{ src: imageLaptop, shape: 1 }}>
        <div className="space-y-6 text-base text-neutral-600">
          <p>
          {dict.BuildSection.Description}
  
  
        </p>
        </div>
  
        <Blockquote
          author={{ name: 'Houria Cheurfi', role: dict.BuildSection.Blockquote.Role }}
          className="mt-12"
        >
          {dict.BuildSection.Blockquote.Text}
        </Blockquote>
        <TagList className="mt-4">
          <TagListItem>{dict.BuildSection.Tags.Cashmere}</TagListItem>
          <TagListItem>{dict.BuildSection.Tags.OrganicCotton}</TagListItem>
          <TagListItem>{dict.BuildSection.Tags.Polyester}</TagListItem>
          <TagListItem>{dict.BuildSection.Tags.OrganicBamboo}</TagListItem>
          <TagListItem>{dict.BuildSection.Tags.BabyAlpaca}</TagListItem>
          <TagListItem>{dict.BuildSection.Tags.Merino}</TagListItem>
        </TagList>
      </Section>
    )
  }