# 🚀 Configuration GitHub pour Hostinger Cloud

## Étapes pour créer le dépôt GitHub et déployer

### 1. Créer le dépôt sur GitHub

1. Allez sur [GitHub.com](https://github.com) et connectez-vous
2. Cliquez sur le bouton **"+"** en haut à droite → **"New repository"**
3. Remplissez les informations :
   - **Repository name** : `brsats-landing` (ou le nom de votre choix)
   - **Description** : "Landing page for BRSATS - Baggage Reconciliation System"
   - **Visibility** : Public ou Private (selon votre préférence)
   - **NE PAS** cocher "Initialize with README" (le projet existe déjà)
4. Cliquez sur **"Create repository"**

### 2. Connecter le dépôt local à GitHub

Une fois le dépôt créé, GitHub vous donnera des instructions. Exécutez ces commandes depuis votre terminal :

```bash
cd /home/goblaire/Bureau/landing

# Ajouter le remote GitHub (remplacez VOTRE-USERNAME par votre nom d'utilisateur GitHub)
git remote add origin https://github.com/VOTRE-USERNAME/brsats-landing.git

# Renommer la branche principale en main (si nécessaire)
git branch -M main

# Pousser le code vers GitHub
git push -u origin main
```

**Si vous utilisez SSH au lieu de HTTPS :**
```bash
git remote add origin git@github.com:VOTRE-USERNAME/brsats-landing.git
git push -u origin main
```

### 3. Déployer depuis Hostinger Cloud

1. Connectez-vous à votre **panneau Hostinger Cloud**
2. Allez dans **"Applications"** ou **"Deployments"**
3. Cliquez sur **"New Application"** ou **"Deploy from Git"**
4. Sélectionnez **GitHub** comme source
5. Autorisez Hostinger à accéder à votre compte GitHub (si demandé)
6. Sélectionnez le dépôt `brsats-landing`
7. Configurez les paramètres :
   - **Build Command** : `npm run build`
   - **Start Command** : `npm start`
   - **Node Version** : 18.x ou 20.x
   - **Port** : 3000
8. Cliquez sur **"Deploy"**

### 4. Configuration automatique

Hostinger Cloud va automatiquement :
- ✅ Cloner votre dépôt GitHub
- ✅ Installer les dépendances (`npm install`)
- ✅ Builder le projet (`npm run build`)
- ✅ Démarrer l'application (`npm start`)

### 5. Configuration du domaine

Après le déploiement :
1. Dans le panneau Hostinger, allez dans **"Domains"**
2. Ajoutez votre domaine (ex: brsats.com)
3. Configurez les DNS si nécessaire
4. Activez **SSL/HTTPS** via Let's Encrypt

---

## Commandes Git utiles

### Mettre à jour le dépôt après des modifications

```bash
# Ajouter les fichiers modifiés
git add .

# Créer un commit
git commit -m "Description des modifications"

# Pousser vers GitHub
git push origin main
```

### Créer une nouvelle branche

```bash
git checkout -b nom-de-la-branche
git push -u origin nom-de-la-branche
```

### Voir l'historique

```bash
git log --oneline
```

---

## Structure du dépôt

```
brsats-landing/
├── app/                    # Pages Next.js
├── components/             # Composants React
├── lib/                   # Utilitaires et traductions
├── public/                # Fichiers statiques
├── .next/                 # Build (ignoré par Git)
├── node_modules/          # Dépendances (ignoré par Git)
├── package.json           # Configuration npm
├── next.config.js        # Configuration Next.js
├── tailwind.config.js    # Configuration Tailwind
└── README.md             # Documentation
```

---

## Variables d'environnement (si nécessaire)

Si vous avez besoin de variables d'environnement, ajoutez-les dans le panneau Hostinger Cloud :
- Allez dans les paramètres de votre application
- Section **"Environment Variables"**
- Ajoutez vos variables (ex: `NODE_ENV=production`)

---

## Mise à jour automatique

Hostinger Cloud peut être configuré pour :
- **Auto-deploy** : Déploie automatiquement à chaque push sur la branche `main`
- **Webhook** : Configurez un webhook GitHub pour déclencher le déploiement

---

## Support

En cas de problème :
- Vérifiez les logs dans le panneau Hostinger Cloud
- Consultez la documentation Hostinger Cloud
- Vérifiez que tous les fichiers sont bien commités sur GitHub

