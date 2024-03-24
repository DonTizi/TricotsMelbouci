import glob from 'fast-glob'

async function loadEntries(directory, metaName, lang) {
  // Construisez le chemin en fonction de la locale.

  return (
    await Promise.all(
      (await glob(`${directory}/**/*.mdx`, { cwd: `src/app/${lang}` })).map(
        async (filename) => {
          // Supprimez le préfixe 'directory/' de 'filename' si présent

          // Assurez-vous que le chemin d'importation est correct en fonction de la locale.
          console.log(`/src/app/${lang}/${filename}`); // Log le chemin complet

          let metadata = (await import(`/src/app/${lang}/${filename}`))[metaName];
          return {
            ...metadata,
            metadata,
            href: `/${lang}/${filename.replace(/\/page\.mdx$/, '')}`,
            
          }
        },
      ),
    )
  ).sort((a, b) => b.date.localeCompare(a.date))
}


export function loadArticles(lang) {
  return loadEntries('blog', 'article',lang)
}

export function loadCaseStudies(lang) {
  return loadEntries('work', 'caseStudy',lang)
}

