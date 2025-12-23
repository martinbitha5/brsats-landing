import React from 'react'
import { getTranslations, type Locale } from '@/lib/i18n'

export default function ReadyToUse({ locale = 'fr' }: { locale?: Locale }): JSX.Element {
  const t = getTranslations(locale)
  
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 md:mb-8 text-gray-900">
          {t.readyToUse.title}
        </h2>
        
        <div className="max-w-3xl mx-auto mb-8 md:mb-12">
          <p className="text-base md:text-lg text-gray-700 text-center leading-relaxed px-4">
            {t.readyToUse.description}
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center max-w-4xl mx-auto mb-8 md:mb-12 px-4">
          {/* App Store Button */}
          <a 
            href="https://apps.apple.com/app/brsats" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center bg-black text-white rounded-lg px-5 md:px-6 py-3 hover:opacity-90 transition-opacity shadow-lg w-full sm:w-auto justify-center"
            aria-label={`${t.readyToUse.appStore} App Store`}
          >
            <svg className="w-8 h-8 mr-3" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
            </svg>
            <div className="text-left">
              <div className="text-xs leading-tight">{t.readyToUse.appStore}</div>
              <div className="text-xl font-semibold leading-tight">App Store</div>
            </div>
          </a>
          
          {/* Google Play Button */}
          <a 
            href="https://play.google.com/store/apps/details?id=com.brsats.app" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center bg-black text-white rounded-lg px-5 md:px-6 py-3 hover:opacity-90 transition-opacity shadow-lg w-full sm:w-auto justify-center"
            aria-label={`${t.readyToUse.googlePlay} Google Play`}
          >
            <svg className="w-8 h-8 mr-3" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
            </svg>
            <div className="text-left">
              <div className="text-xs leading-tight">{t.readyToUse.googlePlay}</div>
              <div className="text-xl font-semibold leading-tight">Google Play</div>
            </div>
          </a>
        </div>
        
        <div className="text-center">
          <a href="#" className="text-blue-600 hover:text-blue-800 underline text-lg">
            {t.readyToUse.pricing}
          </a>
        </div>
        
        <div className="mt-12 md:mt-16 max-w-4xl mx-auto px-4">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-gray-900 text-center">
            {t.readyToUse.discover}
          </h3>
          {/* Video Container - Prêt pour votre vidéo */}
          <div className="relative bg-gray-900 rounded-xl overflow-hidden shadow-2xl aspect-video">
            {/* Placeholder - Remplacez cette div par votre iframe vidéo */}
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <p className="text-white/80 text-lg font-medium">Vidéo de démonstration</p>
                <p className="text-white/60 text-sm mt-2">Remplacez ce contenu par votre vidéo</p>
              </div>
            </div>
            
            {/* Exemple d'iframe - Décommentez et remplacez par votre URL */}
            {/* 
            <iframe
              className="absolute inset-0 w-full h-full"
              src="VOTRE_URL_VIDEO_ICI"
              title="Démonstration BRSATS"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            */}
          </div>
          <p className="mt-6 text-gray-600 text-center max-w-2xl mx-auto">
            {t.readyToUse.videoDescription}
          </p>
        </div>
      </div>
    </section>
  )
}

