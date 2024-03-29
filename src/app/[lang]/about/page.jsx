import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { StatList, StatListItem } from '@/components/StatList'
import { loadArticles } from '@/lib/mdx'
import { Culture } from '@/components/Culture'
import { getDictionary } from '../dictionaries/dictionaries'
import { englishMetadata, frenchMetadata } from '@/metadata/about';


export async function generateMetadata({ params }) {
  return params.lang === "en-US" ? englishMetadata : frenchMetadata;
}

export default async function About({ params: { lang } }) {
  let blogArticles = (await loadArticles()).slice(0, 2)
  const dict = await getDictionary(lang)


  return (
    <>
      <PageIntro eyebrow={dict.RootLayout.About} title={dict.Culture.Decades}>
        <p>{dict.Culture.Sucesseur}</p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
          {dict.Culture.commitment}
          </p>
          <p>
          {dict.Culture.heritage} </p>
        </div>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="5" label={dict.Culture.members} />
          <StatListItem value="+25" label="clients" />
          <StatListItem value="+200k" label="Transactions" />
        </StatList>
      </Container>

      <Culture />


      <PageLinks
        className="mt-24 sm:mt-32 lg:mt-40"
        title={dict.Culture.blogtitle}
        intro={dict.Culture.blogdescription}
        pages={blogArticles}
      />

      <ContactSection />
    </>
  )
}
