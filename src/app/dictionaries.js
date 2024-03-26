import 'server-only';

const dictionaries = {
  'en-US': () => import('./dictionariess/en.json').then((module) => module.default),
  'fr': () => import('./dictionariess/fr.json').then((module) => module.default),
}
export const getDictionary = async (locale) => {
  console.log("Demandé locale:", locale);
  console.log("Clés disponibles dans dictionaries:", Object.keys(dictionaries));

  try {
    if (typeof dictionaries[locale] === "function") {
      return await dictionaries[locale]();
    } else {
      console.error(`Locale non supporté: ${locale}`);
      throw new Error(`Dictionnaire non trouvé pour le locale: ${locale}`);
    }
  } catch (error) {
    console.error(`Erreur lors du chargement du dictionnaire pour ${locale}:`, error);
    throw new Error(`Erreur lors du chargement du dictionnaire pour ${locale}`);
  }
};

