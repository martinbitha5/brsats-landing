# Guide de déploiement sur Hostinger Cloud

## Prérequis
- Compte Hostinger Cloud actif
- Accès SSH à votre serveur Hostinger
- Node.js installé sur le serveur (version 18 ou supérieure)

## Étapes de déploiement

### 1. Préparer le projet localement

Le projet est déjà buildé. Vous pouvez vérifier avec :
```bash
npm run build
```

### 2. Se connecter au serveur Hostinger via SSH

```bash
ssh votre-utilisateur@votre-serveur-hostinger.com
```

### 3. Créer le dossier de l'application

```bash
cd ~
mkdir brsats-landing
cd brsats-landing
```

### 4. Transférer les fichiers

Depuis votre machine locale, utilisez SCP ou SFTP pour transférer tous les fichiers :

```bash
# Depuis votre machine locale
scp -r * votre-utilisateur@votre-serveur-hostinger.com:~/brsats-landing/
```

Ou utilisez FileZilla / WinSCP pour transférer les fichiers via interface graphique.

**Fichiers à transférer :**
- Tous les fichiers du projet (sauf node_modules et .next si vous préférez rebuild sur le serveur)
- Ou transférez tout et rebuild sur le serveur

### 5. Sur le serveur Hostinger

```bash
# Installer les dépendances
npm install --production

# Build le projet
npm run build

# Démarrer l'application
npm start
```

### 6. Configurer PM2 (recommandé pour la production)

```bash
# Installer PM2 globalement
npm install -g pm2

# Démarrer l'application avec PM2
pm2 start ecosystem.config.js

# Sauvegarder la configuration PM2
pm2 save

# Configurer PM2 pour démarrer au boot
pm2 startup
```

### 7. Configurer le reverse proxy (si nécessaire)

Si Hostinger Cloud utilise Nginx, créez/modifiez la configuration :

```nginx
server {
    listen 80;
    server_name votre-domaine.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

### 8. Configurer le domaine

Dans le panneau Hostinger :
1. Allez dans "Domaines"
2. Ajoutez votre domaine (ex: brsats.com)
3. Configurez les DNS pour pointer vers votre serveur

### 9. Activer HTTPS (SSL)

Dans le panneau Hostinger :
1. Allez dans "SSL"
2. Activez Let's Encrypt SSL pour votre domaine
3. Redémarrez Nginx si nécessaire

## Commandes utiles

```bash
# Voir les logs
pm2 logs brsats-landing

# Redémarrer l'application
pm2 restart brsats-landing

# Arrêter l'application
pm2 stop brsats-landing

# Voir le statut
pm2 status
```

## Variables d'environnement (si nécessaire)

Créez un fichier `.env` à la racine du projet si vous avez besoin de variables d'environnement :

```bash
nano .env
```

## Support

En cas de problème, vérifiez :
- Les logs PM2 : `pm2 logs`
- Les logs Nginx : `/var/log/nginx/error.log`
- Le port 3000 est bien ouvert dans le firewall

