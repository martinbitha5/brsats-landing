import React from 'react'
import LanguageSwitcher from './LanguageSwitcher'
import { getTranslations, type Locale } from '@/lib/i18n'

export default function Header({ locale = 'fr' }: { locale?: Locale }): JSX.Element {
  const t = getTranslations(locale)
  
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center space-x-2 md:space-x-4">
            <div className="bg-primary text-white px-4 md:px-6 py-2 md:py-3 rounded-lg font-bold text-lg md:text-xl">
              BRSATS
            </div>
            <div className="text-xs md:text-sm text-gray-600">
              <span className="font-semibold hidden sm:inline">{t.header.company}</span>
              <span className="font-semibold sm:hidden">{t.header.companyShort}</span>
            </div>
          </div>
          
          <div className="flex flex-wrap items-center gap-3 md:gap-6 text-xs md:text-sm">
            <LanguageSwitcher />
            <div className="flex items-center space-x-1 md:space-x-2 text-gray-700">
              <svg className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="whitespace-nowrap">+243 819 929 881</span>
            </div>
            
            <div className="flex items-center space-x-1 md:space-x-2 text-gray-700">
              <svg className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:contact@brsats.com" className="hover:text-primary break-all md:break-normal">contact@brsats.com</a>
            </div>
            
            <div className="flex items-center space-x-1 md:space-x-2 text-gray-700 hidden lg:flex">
              <svg className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <a href="https://www.ats-handling-rdc.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary whitespace-nowrap">www.ats-handling-rdc.com</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

