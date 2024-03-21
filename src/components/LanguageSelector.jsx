// src/components/LanguageSelector.jsx
import Link from 'next/link';
import { useRouter } from 'next/router';

const LanguageSelector = () => {
  const router = useRouter();
  const { pathname, asPath, query } = router;

  return (
    <select
      value={router.locale}
      onChange={(e) => {
        const newLocale = e.target.value;
        router.push({ pathname, query }, asPath, { locale: newLocale });
      }}
    >
      <option value="en">English</option>
      <option value="fr">Français</option>
    </select>
  );
};

export default LanguageSelector;
