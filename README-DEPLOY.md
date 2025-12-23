# 🚀 Déploiement sur Hostinger Cloud - Guide Rapide

## Méthode 1 : Déploiement Automatique (Recommandé)

### 1. Préparer le projet
```bash
npm run build
```

### 2. Utiliser le script de déploiement
```bash
./deploy.sh votre-utilisateur@votre-serveur-hostinger.com
```

Le script va :
- ✅ Transférer tous les fichiers
- ✅ Installer les dépendances
- ✅ Builder le projet
- ✅ Vous donner les instructions pour démarrer

---

## Méthode 2 : Déploiement Manuel

### Étape 1 : Transférer les fichiers

**Option A - Via SCP (ligne de commande) :**
```bash
scp -r * votre-utilisateur@votre-serveur-hostinger.com:~/brsats-landing/
```

**Option B - Via FileZilla/WinSCP (interface graphique) :**
1. Connectez-vous à votre serveur Hostinger via SFTP
2. Créez un dossier `brsats-landing`
3. Transférez tous les fichiers (sauf `node_modules` et `.next`)

### Étape 2 : Sur le serveur Hostinger

Connectez-vous via SSH :
```bash
ssh votre-utilisateur@votre-serveur-hostinger.com
```

Puis exécutez :
```bash
cd ~/brsats-landing
npm install --production
npm run build
npm start
```

### Étape 3 : Utiliser PM2 (pour que l'app reste active)

```bash
# Installer PM2
npm install -g pm2

# Démarrer l'application
pm2 start ecosystem.config.js

# Sauvegarder la configuration
pm2 save

# Configurer le démarrage automatique
pm2 startup
```

---

## Configuration du domaine

### 1. Dans le panneau Hostinger
- Allez dans "Domaines" → Ajoutez votre domaine (ex: brsats.com)
- Configurez les DNS pour pointer vers votre serveur

### 2. Configuration Nginx (si nécessaire)

Créez/modifiez `/etc/nginx/sites-available/brsats` :

```nginx
server {
    listen 80;
    server_name brsats.com www.brsats.com;

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

Activez le site :
```bash
sudo ln -s /etc/nginx/sites-available/brsats /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### 3. Activer SSL/HTTPS

Dans le panneau Hostinger :
- Allez dans "SSL"
- Activez Let's Encrypt pour votre domaine
- Redémarrez Nginx si nécessaire

---

## Commandes utiles

```bash
# Voir les logs de l'application
pm2 logs brsats-landing

# Redémarrer l'application
pm2 restart brsats-landing

# Arrêter l'application
pm2 stop brsats-landing

# Voir le statut
pm2 status

# Voir les logs en temps réel
pm2 logs --lines 50
```

---

## Dépannage

### L'application ne démarre pas
```bash
# Vérifier les logs
pm2 logs brsats-landing

# Vérifier que le port 3000 est libre
netstat -tulpn | grep 3000
```

### Erreur de permissions
```bash
# Donner les permissions au dossier
chmod -R 755 ~/brsats-landing
```

### Le build échoue
```bash
# Nettoyer et rebuilder
rm -rf .next node_modules
npm install
npm run build
```

---

## Support

Pour plus d'aide, consultez :
- Documentation Hostinger Cloud
- Logs PM2 : `pm2 logs`
- Logs Nginx : `/var/log/nginx/error.log`

