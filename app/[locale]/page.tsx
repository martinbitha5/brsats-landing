import { redirect } from 'next/navigation'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Services from '@/components/Services'
import ReadyToUse from '@/components/ReadyToUse'
import Footer from '@/components/Footer'
import { type Locale } from '@/lib/i18n'

export default function Home({ params }: { params: { locale: Locale } }) {
  return (
    <main className="min-h-screen">
      <Header locale={params.locale} />
      <Hero locale={params.locale} />
      <Features locale={params.locale} />
      <Services locale={params.locale} />
      <ReadyToUse locale={params.locale} />
      <Footer locale={params.locale} />
    </main>
  )
}

