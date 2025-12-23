import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mentions Légales - BRSATS',
  description: 'Mentions légales et informations sur BRSATS - Baggage Reconciliation System',
}

export default function MentionsLegales(): JSX.Element {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">Mentions Légales</h1>
        
        <div className="space-y-12 text-gray-700">
          {/* Informations légales */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">Informations légales</h2>
            <div className="space-y-2">
              <p><strong>Raison sociale :</strong> African Transport Systems</p>
              <p><strong>Siège social :</strong> Numéro 15, Boulevard du 30 juin, Commune de GOMBE, Kinshasa, République Démocratique du Congo</p>
              <p><strong>Téléphone :</strong> +243 819 929 881</p>
              <p><strong>Email :</strong> <a href="mailto:contact@brsats.com" className="text-blue-600 hover:underline">contact@brsats.com</a></p>
              <p><strong>Site web :</strong> <a href="https://www.ats-handling-rdc.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">www.ats-handling-rdc.com</a></p>
              <p><strong>Directeur de publication :</strong> African Transport Systems</p>
            </div>
          </section>

          {/* Responsabilité */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">Limitation de responsabilité</h2>
            <div className="space-y-4">
              <p>
                African Transport Systems ne saurait être tenu responsable des dommages directs ou indirects résultant 
                de l'utilisation du site ou de l'impossibilité de l'utiliser.
              </p>
              <p>
                African Transport Systems ne garantit pas que le site sera exempt d'erreurs, de virus ou d'autres éléments 
                nuisibles. L'utilisateur est seul responsable de l'utilisation qu'il fait du site.
              </p>
              <p>
                Les informations contenues sur ce site sont données à titre indicatif et peuvent être modifiées à tout moment. 
                African Transport Systems ne saurait être tenu responsable des erreurs ou omissions contenues dans ce site.
              </p>
            </div>
          </section>

          {/* Droit applicable */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">Droit applicable et juridiction</h2>
            <p>
              Les présentes mentions légales sont régies par le droit de la République Démocratique du Congo. En cas de litige, 
              et à défaut d'accord amiable, le litige sera porté devant les tribunaux compétents de Kinshasa.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">Contact</h2>
            <p>
              Pour toute question concernant les présentes mentions légales, vous pouvez nous contacter :
            </p>
            <div className="mt-4 space-y-2">
              <p><strong>Email :</strong> <a href="mailto:contact@brsats.com" className="text-blue-600 hover:underline">contact@brsats.com</a></p>
              <p><strong>Téléphone :</strong> +243 819 929 881</p>
              <p><strong>Adresse :</strong> Numéro 15, Boulevard du 30 juin, Commune de GOMBE, Kinshasa, RDC</p>
            </div>
          </section>

          {/* Dernière mise à jour */}
          <section className="border-t pt-6">
            <p className="text-sm text-gray-500">
              <strong>Dernière mise à jour :</strong> {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </section>
        </div>

        <div className="mt-12 text-center">
          <Link href="/" className="text-blue-600 hover:text-blue-800 font-semibold">
            ← Retour à l'accueil
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  )
}

