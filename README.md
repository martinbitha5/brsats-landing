# BRSATS Landing Page

Page d'accueil pour BRSATS (Baggage Reconciliation System) développée pour **African Transport Systems**.

🌐 **Multilingue** : Français et Anglais  
🚀 **Prêt pour la production** : Optimisé et responsive  
📱 **Mobile-first** : Design adaptatif pour tous les appareils

## À propos

BRSATS est un système de réconciliation de bagages développé pour African Transport Systems, un groupe de handling aéroportuaire opérant dans plusieurs aéroports de la RDC (Kinshasa, Kisangani, Goma, Lubumbashi, Kolwezi, Kananga, Mbuji-Mayi, Gemena, Mbandaka).

**Contact :**
- Téléphone : +243 819 929 881
- Email : contact@ats-handling-rdc.com
- Site web : https://www.ats-handling-rdc.com/
- Adresse : Numéro 15, Boulevard du 30 juin, Commune de GOMBE, Kinshasa

## Technologies utilisées

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS

## Installation

1. Installez les dépendances :
```bash
npm install
```

2. Lancez le serveur de développement :
```bash
npm run dev
```

3. Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## Structure du projet

```
landing/
├── app/
│   ├── layout.tsx      # Layout principal
│   ├── page.tsx        # Page d'accueil
│   └── globals.css     # Styles globaux
├── components/
│   ├── Header.tsx      # En-tête avec logo et contact
│   ├── Hero.tsx        # Section hero principale
│   ├── Features.tsx    # Section caractéristiques
│   ├── Services.tsx    # Section services ATS
│   ├── ReadyToUse.tsx  # Section "Prêt à l'emploi"
│   └── Footer.tsx      # Pied de page
└── package.json
```

## Build pour la production

```bash
npm run build
npm start
```

