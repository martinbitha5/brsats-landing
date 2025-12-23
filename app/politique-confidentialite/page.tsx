import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Politique de confidentialité - BRSATS',
  description: 'Politique de confidentialité et protection des données de BRSATS - Baggage Reconciliation System',
}

export default function PolitiqueConfidentialite(): JSX.Element {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">Politique de confidentialité</h1>
        
        <div className="space-y-12 text-gray-700">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">1. Collecte des données</h2>
            <p>
              Dans le cadre de l'utilisation du site BRSATS, African Transport Systems peut être amené à collecter 
              certaines données personnelles vous concernant. Ces données sont collectées de manière licite et loyale.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">2. Données collectées</h2>
            <p>Les données personnelles susceptibles d'être collectées sont notamment :</p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li>Nom et prénom</li>
              <li>Adresse email</li>
              <li>Numéro de téléphone</li>
              <li>Informations relatives à votre utilisation du site</li>
              <li>Données de navigation (cookies, adresse IP)</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">3. Finalité du traitement</h2>
            <p>Les données collectées sont utilisées pour :</p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li>Permettre l'accès et l'utilisation du site</li>
              <li>Améliorer nos services</li>
              <li>Vous contacter concernant nos services</li>
              <li>Respecter nos obligations légales et réglementaires</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">4. Conservation des données</h2>
            <p>
              Les données personnelles sont conservées pour la durée nécessaire aux finalités pour lesquelles elles 
              ont été collectées, conformément à la législation en vigueur.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">5. Vos droits</h2>
            <p>Conformément à la réglementation en vigueur, vous disposez des droits suivants :</p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li>Droit d'accès à vos données personnelles</li>
              <li>Droit de rectification de vos données</li>
              <li>Droit à l'effacement de vos données</li>
              <li>Droit à la limitation du traitement</li>
              <li>Droit à la portabilité de vos données</li>
              <li>Droit d'opposition au traitement</li>
            </ul>
            <p className="mt-2">
              Pour exercer ces droits, vous pouvez nous contacter à l'adresse : 
              <a href="mailto:contact@brsats.com" className="text-blue-600 hover:underline ml-1">
                contact@brsats.com
              </a>
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">6. Cookies</h2>
            <p>
              Le site utilise des cookies pour améliorer votre expérience de navigation. Vous pouvez configurer votre 
              navigateur pour refuser les cookies, mais cela peut affecter certaines fonctionnalités du site.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">7. Sécurité</h2>
            <p>
              African Transport Systems met en œuvre toutes les mesures techniques et organisationnelles appropriées 
              pour assurer la sécurité et la confidentialité de vos données personnelles.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">8. Contact</h2>
            <p>
              Pour toute question concernant la politique de confidentialité, vous pouvez nous contacter :
            </p>
            <div className="mt-4 space-y-2">
              <p><strong>Email :</strong> <a href="mailto:contact@brsats.com" className="text-blue-600 hover:underline">contact@brsats.com</a></p>
              <p><strong>Téléphone :</strong> +243 819 929 881</p>
              <p><strong>Adresse :</strong> Numéro 15, Boulevard du 30 juin, Commune de GOMBE, Kinshasa, RDC</p>
            </div>
          </section>

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

