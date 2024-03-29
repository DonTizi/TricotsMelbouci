import { ContactSection } from '@/components/ContactSection'
import {MyApp} from '@/components/ScrollApp'
import { englishMetadata, frenchMetadata } from '@/metadata/gallery';


export async function generateMetadata({ params }) {
  return params.lang === "en-US" ? englishMetadata : frenchMetadata;
}


export default function Homepage(){
  return(
    <div className="w-full h-full">
    <MyApp/>
          <ContactSection />

    </div>
  )
};