
'use client'
import Link from 'next/link'
import { FadeIn } from '@/components/FadeIn'
import { SectionIntro } from '@/components/SectionIntro'
import { useDictionary } from '@/components/dictionary-provider'; // Assurez-vous que le chemin est correct


export function Collection() {
    const dict = useDictionary()

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
                      {dict.Gallery.News}
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