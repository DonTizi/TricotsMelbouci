import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Logo } from '@/components/Logo'
import { socialMediaProfiles } from '@/components/SocialMedia'



const navigation = [
  {
    title: 'Work',
    links: [
      { title: 'Custom Design', href: '/work/family-fund' },
      { title: 'Fabric Sourcing', href: '/work/unseal' },
      { title: 'Consultation', href: '/work/phobia' },
      {
        title: (
          <>
            See all <span aria-hidden="true">&rarr;</span>
          </>
        ),
        href: '/work',
      },
    ],
  },
  {
    title: 'Company',
    links: [
      { title: 'About', href: '/about' },
      { title: 'Process', href: '/process' },
      { title: 'Blog', href: '/blog' },
      { title: 'Contact us', href: '/contact' },
    ],
  },
  {
    title: 'Connect',
    links: socialMediaProfiles,
  },
]

function Navigation() {
  return (
    <nav>
      <ul role="list" className="grid grid-cols-2 gap-8 sm:grid-cols-3">
        {navigation.map((section, sectionIndex) => (
          <li key={sectionIndex}>
            <div className="font-display text-sm font-semibold tracking-wider text-neutral-950">
              {section.title}
            </div>
            <ul role="list" className="mt-4 text-sm text-neutral-700">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex} className="mt-4">
                  <Link
                    href={link.href}
                    className="transition hover:text-neutral-950"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  )
}

function ArrowIcon(props) {
  return (
    <svg viewBox="0 0 16 6" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 3 10 .5v2H0v1h10v2L16 3Z"
      />
    </svg>
  )
}

function NewsletterForm() {
  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault(); // Empêche le rechargement de la page
    const formData = new FormData(e.target);
    const data = new URLSearchParams(formData);

    // Envoie les données à Mailchimp
    fetch("https://gmail.us11.list-manage.com/subscribe/post?u=4806be22a68173f9cd7e25ffe&id=671796df78&f_id=0001b2e0f0", {
      method: "POST",
      body: data,
      mode: "no-cors", // Utilise le mode 'no-cors' pour éviter les problèmes de CORS
    })
    .then(response => {
      // Gérer la réponse ici (par exemple, afficher un message de succès)
      console.log("Form submitted");
    })
    .catch(error => console.error("Error:", error));
  };

  return (
    <form className="max-w-sm" onSubmit={handleSubmit}>
      <h2 className="font-display text-sm font-semibold tracking-wider text-neutral-950">
        Sign up for our newsletter
      </h2>
      <p className="mt-4 text-sm text-neutral-700">
        Subscribe to get the latest design news, articles, resources, and
        inspiration.
      </p>
      <div className="relative mt-6">
        <input
          name="EMAIL" // Nom du champ conforme à celui attendu par Mailchimp
          type="email"
          placeholder="Email address"
          autoComplete="email"
          aria-label="Email address"
          required // Assurez-vous que le champ est rempli
          className="block w-full rounded-2xl border border-neutral-300 bg-transparent py-4 pl-6 pr-20 text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5"
        />
        {/* Champ caché pour la sécurité et pour éviter les inscriptions de bot */}
        <input type="hidden" name="b_4806be22a68173f9cd7e25ffe_671796df78" tabIndex="-1" />
        <div className="absolute inset-y-1 right-1 flex justify-end">
          <button
            type="submit"
            aria-label="Submit"
            className="flex aspect-square h-full items-center justify-center rounded-xl bg-neutral-950 text-white transition hover:bg-neutral-800 w-12"
          >
            {/* Assurez-vous que le composant ArrowIcon est bien importé ou remplacé par un équivalent SVG/icone */}
            <ArrowIcon className="w-4" />
          </button>
        </div>
      </div>
    </form>
  );
}


export function Footer() {
  return (
    <Container as="footer" className="mt-24 w-full sm:mt-32 lg:mt-40">
      <FadeIn>
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
          <Navigation />
          <div className="flex lg:justify-end">
            <NewsletterForm />
          </div>
        </div>
        <div className="mb-20 mt-24 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t border-neutral-950/10 pt-12">
          <Link href="/" aria-label="Home">
            <Logo className="h-8" fillOnHover />
          </Link>
          <p className="text-sm text-neutral-700">
            © Tricots Melbouci Inc. {new Date().getFullYear()}
          </p>
        </div>
      </FadeIn>
    </Container>
  )
}
