import glob from 'fast-glob';

// Ajout d'un paramètre 'lang' à loadEntries pour charger les fichiers en fonction de la langue
async function loadEntries(directory, metaName, lang = 'en') {
  // Modification du chemin pour inclure la langue dans le répertoire cible
  const basePath = `src/app/${lang}/${directory}`;
  return (
    await Promise.all(
      (await glob('**/*.mdx', { cwd: basePath })).map(
        async (filename) => {
          // Correction du chemin d'importation pour utiliser 'basePath' et inclure la langue
          const metadata = (await import(`../app/${lang}/${directory}/${filename}`))[metaName];
          return {
            ...metadata,
            metadata,
            // Modification du chemin 'href' pour inclure la langue
            href: `/${lang}/${directory}/${filename.replace(/\/page\.mdx$/, '')}`,
          };
        }
      ),
    )
  ).sort((a, b) => b.date ? b.date.localeCompare(a.date) : 0);
}

// Modification de loadArticles et loadCaseStudies pour accepter un paramètre de langue
export function loadArticles(lang = 'en') {
  return loadEntries('blog', 'article', lang);
}

export function loadCaseStudies(lang = 'en') {
  return loadEntries('work', 'caseStudy', lang);
}
