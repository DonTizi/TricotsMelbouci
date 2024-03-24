import glob from 'fast-glob'

async function loadEntries(directory, metaName, locale) {
  // Construisez le chemin en fonction de la locale.

  return (
    await Promise.all(
      (await glob(`${directory}/**/*.mdx`, { cwd: `src/app/${locale}` })).map(
        async (filename) => {
          // Supprimez le préfixe 'directory/' de 'filename' si présent

          // Assurez-vous que le chemin d'importation est correct en fonction de la locale.
          console.log(`/src/app/${locale}/${filename}`); // Log le chemin complet

          let metadata = (await import(`/src/app/${locale}/${filename}`))[metaName];
          return {
            ...metadata,
            metadata,
            href: `/${locale}/${filename.replace(/\/page\.mdx$/, '')}`,
            
          }
        },
      ),
    )
  ).sort((a, b) => b.date.localeCompare(a.date))
}


export function loadArticles(locale) {
  return loadEntries('blog', 'article',locale)
}

export function loadCaseStudies(locale) {
  return loadEntries('work', 'caseStudy',locale)
}

