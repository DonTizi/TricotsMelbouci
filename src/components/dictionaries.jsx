import fs from 'fs';
import path from 'path';

export const getDictionary = async (locale) => {
  console.log("Demandé locale:", locale);

  // Vérifiez si la locale est supportée
  if (locale !== 'fr' && locale !== 'en-US') {
    console.error(`Locale non supporté: ${locale}`);
    throw new Error(`Dictionnaire non trouvé pour le locale: ${locale}`);
  }

  // Construisez le chemin du fichier basé sur la locale supportée
  let filePath;
  if (locale === 'fr' || locale === 'en-US') {
    filePath = path.join(process.cwd(), 'public', 'dictionaries', `${locale}.json`);
  } else {
    // Pour toute autre locale, lancez une erreur
    console.error(`Locale non supporté: ${locale}`);
    throw new Error(`Dictionnaire non trouvé pour le locale: ${locale}`);
  }

  try {
    const dictionary = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    return dictionary;
  } catch (error) {
    console.error(`Erreur lors du chargement du dictionnaire pour ${locale}:`, error);
    throw new Error(`Erreur lors du chargement du dictionnaire pour ${locale}`);
  }
};
