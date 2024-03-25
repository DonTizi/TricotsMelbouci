import glob from 'fast-glob'

async function loadEntries(directory, metaName,lang) {
  return (
    await Promise.all(
      (await glob('**/page.mdx', { cwd: `src/app/${lang}/${directory}` })).map(
        async (filename) => {
          let metadata = (await import(`../app/${lang}/${directory}/${filename}`))[
            metaName
          ]
          return {
            ...metadata,
            metadata,
            href: `/${directory}/${filename.replace(/\/page\.mdx$/, '')}`,
          }
        },
      ),
    )
  ).sort((a, b) => b.date.localeCompare(a.date))
}

export function loadArticles(lang) {
  return loadEntries('blog', 'article', lang)
}

export function loadCaseStudies(lang) {
  return loadEntries('work', 'caseStudy',lang)
}