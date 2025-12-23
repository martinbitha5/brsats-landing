import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'BRSATS - Baggage Reconciliation System | African Transport Systems',
  description: 'Système de réconciliation de bagages pour le transport aérien. Solution moderne et efficace pour la gestion des bagages.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className="antialiased">{children}</body>
    </html>
  )
}

