'use client'

import { useRouter, usePathname } from 'next/navigation'
import { useState } from 'react'

export default function LanguageSwitcher(): JSX.Element {
  const router = useRouter()
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const currentLocale = pathname.split('/')[1] === 'en' ? 'en' : 'fr'
  
  const switchLanguage = (locale: string) => {
    let pathWithoutLocale = pathname.replace(/^\/(fr|en)/, '') || '/'
    if (pathWithoutLocale === '/') {
      pathWithoutLocale = ''
    }
    router.push(`/${locale}${pathWithoutLocale}`)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1 px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium transition-colors"
        aria-label="Change language"
      >
        <span className="uppercase">{currentLocale}</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {isOpen && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)}></div>
          <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg border border-gray-200 z-20">
            <button
              onClick={() => switchLanguage('fr')}
              className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 rounded-t-lg ${
                currentLocale === 'fr' ? 'bg-gray-100 font-semibold' : ''
              }`}
            >
              🇫🇷 Français
            </button>
            <button
              onClick={() => switchLanguage('en')}
              className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 rounded-b-lg ${
                currentLocale === 'en' ? 'bg-gray-100 font-semibold' : ''
              }`}
            >
              🇬🇧 English
            </button>
          </div>
        </>
      )}
    </div>
  )
}

