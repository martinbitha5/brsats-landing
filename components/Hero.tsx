import React from 'react'
import { getTranslations, type Locale } from '@/lib/i18n'

export default function Hero({ locale = 'fr' }: { locale?: Locale }): JSX.Element {
  const t = getTranslations(locale)
  
  return (
    <section className="bg-secondary-dark text-white py-8 sm:py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight">
              {t.hero.title}
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4 md:mb-6 text-blue-200 leading-snug">
              {t.hero.subtitle}
            </h2>
            <div className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6 md:mb-8 text-gray-200 leading-relaxed space-y-2">
              <p>{t.hero.description}</p>
              <p className="text-blue-200 font-medium">{t.hero.watchVideo}</p>
            </div>
            <a 
              href="#fonctionnalites" 
              className="inline-flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-lg font-semibold text-sm sm:text-base md:text-lg transition-colors w-full sm:w-auto justify-center shadow-lg hover:shadow-xl"
              aria-label={t.hero.learnMore}
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{t.hero.learnMore}</span>
            </a>
          </div>
          
          <div className="relative mt-6 sm:mt-8 md:mt-0 order-1 md:order-2">
            {/* Phone Mockup */}
            <div className="relative mx-auto max-w-[280px] sm:max-w-xs md:max-w-sm">
              {/* Phone Frame */}
              <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-[3rem] p-3 shadow-2xl">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10"></div>
                
                {/* Screen */}
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-[2.5rem] overflow-hidden shadow-inner">
                  {/* Status Bar */}
                  <div className="bg-white px-6 pt-8 pb-2 flex justify-between items-center text-xs font-semibold text-gray-900">
                    <span>9:41</span>
                    <div className="flex items-center space-x-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"/>
                      </svg>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/>
                      </svg>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                  </div>
                  
                  {/* App Content */}
                  <div className="px-6 pb-6 space-y-4">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-primary to-primary-dark rounded-2xl p-4 text-white">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-lg font-bold">BRSATS</h3>
                        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"/>
                          </svg>
                        </div>
                      </div>
                      <p className="text-xs opacity-90">Réconciliation de bagages</p>
                    </div>
                    
                    {/* Scanner Section */}
                    <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-semibold text-gray-700">Scanner code-barres</span>
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"/>
                          </svg>
                        </div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3 mb-3 border-2 border-dashed border-gray-300">
                        <div className="flex items-center space-x-2">
                          <div className="flex-1">
                            <div className="text-xs text-gray-500 mb-1">Code bagage</div>
                            <div className="text-sm font-mono font-semibold text-gray-800">ABC123456</div>
                          </div>
                          <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-lg text-xs font-semibold shadow-md hover:shadow-lg transition-shadow">
                            Scanner
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    {/* Status Card */}
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 border border-green-200">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-xs text-gray-600 mb-1">Statut</div>
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-sm font-bold text-green-700">Chargé</span>
                          </div>
                        </div>
                        <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    
                    {/* Action Button */}
                    <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl py-4 font-bold text-sm shadow-lg hover:shadow-xl transition-all transform hover:scale-105 flex items-center justify-center space-x-2">
                      <span>Valider et synchroniser</span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
                
                {/* Home Indicator */}
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white/30 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

