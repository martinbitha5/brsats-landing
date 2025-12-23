import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { type Locale } from '@/lib/i18n'

export default function MentionsLegales({ params }: { params: { locale: Locale } }): JSX.Element {
  const t = params.locale === 'en' ? {
    title: 'Legal Notice',
    back: '← Back to home',
    sections: {
      legal: 'Legal Information',
      responsibility: "Limitation of Liability",
      jurisdiction: "Applicable Law and Jurisdiction",
      contact: "Contact"
    },
    content: {
      company: "Company name",
      address: "Headquarters",
      phone: "Phone",
      email: "Email",
      website: "Website",
      director: "Publication Director",
      responsibility1: "African Transport Systems cannot be held responsible for direct or indirect damages resulting from the use of the site or the inability to use it.",
      responsibility2: "African Transport Systems does not guarantee that the site will be free of errors, viruses or other harmful elements. The user is solely responsible for the use he makes of the site.",
      responsibility3: "The information contained on this site is provided for information purposes only and may be modified at any time. African Transport Systems cannot be held responsible for errors or omissions contained on this site.",
      jurisdiction: "These legal notices are governed by the law of the Democratic Republic of Congo. In case of dispute, and in the absence of an amicable agreement, the dispute will be brought before the competent courts of Kinshasa.",
      contactText: "For any questions regarding these legal notices, you can contact us:",
      lastUpdate: "Last update"
    }
  } : {
    title: 'Mentions Légales',
    back: '← Retour à l\'accueil',
    sections: {
      legal: 'Informations légales',
      responsibility: 'Limitation de responsabilité',
      jurisdiction: 'Droit applicable et juridiction',
      contact: 'Contact'
    },
    content: {
      company: "Raison sociale",
      address: "Siège social",
      phone: "Téléphone",
      email: "Email",
      website: "Site web",
      director: "Directeur de publication",
      responsibility1: "African Transport Systems ne saurait être tenu responsable des dommages directs ou indirects résultant de l'utilisation du site ou de l'impossibilité de l'utiliser.",
      responsibility2: "African Transport Systems ne garantit pas que le site sera exempt d'erreurs, de virus ou d'autres éléments nuisibles. L'utilisateur est seul responsable de l'utilisation qu'il fait du site.",
      responsibility3: "Les informations contenues sur ce site sont données à titre indicatif et peuvent être modifiées à tout moment. African Transport Systems ne saurait être tenu responsable des erreurs ou omissions contenues dans ce site.",
      jurisdiction: "Les présentes mentions légales sont régies par le droit de la République Démocratique du Congo. En cas de litige, et à défaut d'accord amiable, le litige sera porté devant les tribunaux compétents de Kinshasa.",
      contactText: "Pour toute question concernant les présentes mentions légales, vous pouvez nous contacter :",
      lastUpdate: "Dernière mise à jour"
    }
  }
  
  return (
    <main className="min-h-screen">
      <Header locale={params.locale} />
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">{t.title}</h1>
        
        <div className="space-y-12 text-gray-700">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">{t.sections.legal}</h2>
            <div className="space-y-2">
              <p><strong>{t.content.company} :</strong> African Transport Systems</p>
              <p><strong>{t.content.address} :</strong> Numéro 15, Boulevard du 30 juin, Commune de GOMBE, Kinshasa, République Démocratique du Congo</p>
              <p><strong>{t.content.phone} :</strong> +243 819 929 881</p>
              <p><strong>{t.content.email} :</strong> <a href="mailto:contact@brsats.com" className="text-blue-600 hover:underline">contact@brsats.com</a></p>
              <p><strong>{t.content.website} :</strong> <a href="https://www.ats-handling-rdc.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">www.ats-handling-rdc.com</a></p>
              <p><strong>{t.content.director} :</strong> African Transport Systems</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">{t.sections.responsibility}</h2>
            <div className="space-y-4">
              <p>{t.content.responsibility1}</p>
              <p>{t.content.responsibility2}</p>
              <p>{t.content.responsibility3}</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">{t.sections.jurisdiction}</h2>
            <p>{t.content.jurisdiction}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">{t.sections.contact}</h2>
            <p>{t.content.contactText}</p>
            <div className="mt-4 space-y-2">
              <p><strong>{t.content.email} :</strong> <a href="mailto:contact@brsats.com" className="text-blue-600 hover:underline">contact@brsats.com</a></p>
              <p><strong>{t.content.phone} :</strong> +243 819 929 881</p>
              <p><strong>{t.content.address} :</strong> Numéro 15, Boulevard du 30 juin, Commune de GOMBE, Kinshasa, RDC</p>
            </div>
          </section>

          <section className="border-t pt-6">
            <p className="text-sm text-gray-500">
              <strong>{t.content.lastUpdate} :</strong> {new Date().toLocaleDateString(params.locale === 'en' ? 'en-US' : 'fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </section>
        </div>

        <div className="mt-12 text-center">
          <Link href={`/${params.locale}`} className="text-blue-600 hover:text-blue-800 font-semibold">
            {t.back}
          </Link>
        </div>
      </div>
      <Footer locale={params.locale} />
    </main>
  )
}

