// dictionary-provider.js
'use client'
import React from 'react'; // Ajoutez cette ligne pour importer React

const DictionaryContext = React.createContext(null);

export default function DictionaryProvider({ dictionary, children }) {
  return (
    <DictionaryContext.Provider value={dictionary}>
      {children}
    </DictionaryContext.Provider>
  );
}

export function useDictionary() {
  const dictionary = React.useContext(DictionaryContext);
  if (dictionary === null) {
    throw new Error('useDictionary hook must be used within DictionaryProvider');
  }

  return dictionary;
}
