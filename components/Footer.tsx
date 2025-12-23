import React from 'react'
import { getTranslations, type Locale } from '@/lib/i18n'

export default function Footer({ locale = 'fr' }: { locale?: Locale }): JSX.Element {
  const t = getTranslations(locale)
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8 mb-8">
          <div>
            <div className="bg-primary text-white px-6 py-3 rounded-lg font-bold text-xl inline-block mb-4">
              BRSATS
            </div>
            <p className="text-gray-400">
              {t.footer.description}
            </p>
            <div className="mt-4">
              <a 
                href="https://tracking.brsats.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center space-x-2 text-green-400 hover:text-green-300 font-semibold"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <span>{t.footer.trackBaggage}</span>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">{t.footer.contact}</h4>
            <div className="space-y-2 text-gray-400">
              <p className="font-medium text-white">African Transport Systems</p>
              <p>Numéro 15, Boulevard du 30 juin</p>
              <p>Commune de GOMBE, Kinshasa</p>
              <p className="mt-2">+243 819 929 881</p>
              <p>
                <a href="mailto:contact@ats-handling-rdc.com" className="hover:text-white">
                  contact@ats-handling-rdc.com
                </a>
              </p>
              <p className="mt-2">
                <a href="https://www.ats-handling-rdc.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  www.ats-handling-rdc.com
                </a>
              </p>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">{t.footer.technicalSupport}</h4>
            <div className="space-y-2 text-gray-400">
              <p className="font-medium text-white">BRSATS</p>
              <p>
                <a href="mailto:support@brsats.com" className="hover:text-white flex items-center space-x-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>support@brsats.com</span>
                </a>
              </p>
              <p>
                <a href="mailto:contact@brsats.com" className="hover:text-white flex items-center space-x-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>contact@brsats.com</span>
                </a>
              </p>
              <p className="mt-2">
                <a href="https://www.brsats.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  www.brsats.com
                </a>
              </p>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">{t.footer.airports}</h4>
            <ul className="space-y-1 text-gray-400 text-sm">
              <li>Kinshasa</li>
              <li>Kisangani</li>
              <li>Goma</li>
              <li>Lubumbashi</li>
              <li>Kolwezi</li>
              <li>Kananga</li>
              <li>Mbuji-Mayi</li>
              <li>Gemena</li>
              <li>Mbandaka</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">{t.footer.information}</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href={`/${locale}/mentions-legales`} className="hover:text-white">
                  {t.footer.legal}
                </a>
              </li>
              <li>
                <a href={`/${locale}/politique-confidentialite`} className="hover:text-white">
                  {t.footer.privacy}
                </a>
              </li>
              <li>
                <a href={`/${locale}/conditions-utilisation`} className="hover:text-white">
                  {t.footer.terms}
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} African Transport Systems. {t.footer.rights}</p>
        </div>
      </div>
    </footer>
  )
}

