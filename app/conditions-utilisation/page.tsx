import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Conditions d\'utilisation - BRSATS',
  description: 'Conditions générales d\'utilisation de BRSATS - Baggage Reconciliation System',
}

export default function ConditionsUtilisation(): JSX.Element {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">Conditions d'utilisation</h1>
        
        <div className="space-y-12 text-gray-700">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">1. Objet</h2>
            <p>
              Les présentes conditions générales d'utilisation (ci-après "CGU") ont pour objet de définir les modalités 
              et conditions d'utilisation du site web BRSATS ainsi que les droits et obligations des parties dans ce cadre.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">2. Acceptation des conditions</h2>
            <p>
              L'utilisation du site implique l'acceptation pleine et entière des présentes CGU. Si vous n'acceptez pas 
              ces conditions, nous vous invitons à ne pas utiliser le site.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">3. Accès au site</h2>
            <p>
              L'accès au site est gratuit. Tous les frais nécessaires pour l'accès aux services (matériel informatique, 
              connexion Internet, etc.) sont à la charge de l'utilisateur.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">4. Utilisation du site</h2>
            <p>
              L'utilisateur s'engage à utiliser le site de manière conforme à sa destination et dans le respect des 
              lois et règlements en vigueur. Il est strictement interdit d'utiliser le site à des fins illégales 
              ou frauduleuses.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">5. Propriété intellectuelle</h2>
            <p>
              L'ensemble du contenu du site (textes, images, vidéos, logos, etc.) est la propriété exclusive d'African 
              Transport Systems ou de ses partenaires et est protégé par les lois relatives à la propriété intellectuelle. 
              Toute reproduction, représentation, modification ou adaptation sans autorisation préalable est strictement interdite.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">6. Responsabilité</h2>
            <p>
              African Transport Systems s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées 
              sur le site. Toutefois, African Transport Systems ne saurait être tenu responsable des erreurs, omissions 
              ou résultats qui pourraient résulter de l'utilisation de ces informations.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">7. Modification des CGU</h2>
            <p>
              African Transport Systems se réserve le droit de modifier à tout moment les présentes CGU. Les utilisateurs 
              sont invités à les consulter régulièrement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">8. Droit applicable et juridiction</h2>
            <p>
              Les présentes CGU sont régies par le droit de la République Démocratique du Congo. En cas de litige, 
              et à défaut d'accord amiable, le litige sera porté devant les tribunaux compétents de Kinshasa.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">9. Contact</h2>
            <p>
              Pour toute question concernant les présentes conditions d'utilisation, vous pouvez nous contacter :
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

