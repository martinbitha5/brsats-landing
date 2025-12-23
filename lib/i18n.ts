import fr from './translations/fr.json'
import en from './translations/en.json'

export const translations = {
  fr,
  en,
}

export type Locale = 'fr' | 'en'

export function getTranslations(locale: Locale) {
  return translations[locale] || translations.fr
}

export const defaultLocale: Locale = 'fr'
export const locales: Locale[] = ['fr', 'en']

