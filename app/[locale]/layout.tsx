import type { Metadata } from 'next'
import '../globals.css'
import { getTranslations, type Locale } from '@/lib/i18n'

export async function generateMetadata({ params }: { params: { locale: Locale } }): Promise<Metadata> {
  const t = getTranslations(params.locale)
  
  return {
    title: params.locale === 'en' 
      ? 'BRSATS - Baggage Reconciliation System | African Transport Systems'
      : 'BRSATS - Système de réconciliation de bagages | African Transport Systems',
    description: params.locale === 'en'
      ? 'Baggage reconciliation system for air transport. Modern and efficient solution for baggage management.'
      : 'Système de réconciliation de bagages pour le transport aérien. Solution moderne et efficace pour la gestion des bagages.',
    keywords: 'BRSATS, réconciliation bagages, gestion bagages, transport aérien, scan codes-barres, African Transport Systems',
    authors: [{ name: 'African Transport Systems' }],
    openGraph: {
      title: 'BRSATS - Baggage Reconciliation System',
      description: params.locale === 'en'
        ? 'Baggage reconciliation system for air transport'
        : 'Système de réconciliation de bagages pour le transport aérien',
      type: 'website',
      locale: params.locale === 'en' ? 'en_US' : 'fr_FR',
    },
  }
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { locale: Locale }
}) {
  return (
    <html lang={params.locale}>
      <body className="antialiased">{children}</body>
    </html>
  )
}

