# 🔧 Résolution de l'erreur 503 sur Hostinger Cloud

## Problème
- ✅ Domaine temporaire fonctionne
- ❌ Votre domaine personnalisé → Erreur 503

## Causes possibles

### 1. Configuration du reverse proxy (Nginx)

L'erreur 503 signifie généralement que Nginx ne peut pas atteindre votre application Next.js.

### 2. Port incorrect

Vérifiez que votre application écoute sur le bon port (généralement 3000).

## Solutions

### Solution 1 : Vérifier la configuration Nginx sur Hostinger

Dans votre panneau Hostinger Cloud, vérifiez la configuration du domaine :

**Configuration Nginx recommandée :**

```nginx
server {
    listen 80;
    server_name votre-domaine.com www.votre-domaine.com;

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
        
        # Timeouts pour éviter les erreurs 503
        proxy_connect_timeout 60s;
        proxy_send_timeout 60s;
        proxy_read_timeout 60s;
    }
}
```

### Solution 2 : Vérifier que l'application tourne

Connectez-vous en SSH à votre serveur Hostinger et vérifiez :

```bash
# Vérifier si l'application tourne sur le port 3000
netstat -tulpn | grep 3000
# ou
ss -tulpn | grep 3000

# Vérifier les processus Node.js
ps aux | grep node

# Vérifier les logs PM2 (si vous utilisez PM2)
pm2 logs brsats-landing
```

### Solution 3 : Vérifier les variables d'environnement

Dans le panneau Hostinger Cloud, vérifiez que les variables d'environnement sont correctes :

```
NODE_ENV=production
PORT=3000
HOSTNAME=0.0.0.0
```

### Solution 4 : Redémarrer l'application

```bash
# Si vous utilisez PM2
pm2 restart brsats-landing

# Ou redémarrer via le panneau Hostinger Cloud
```

### Solution 5 : Vérifier les DNS

Assurez-vous que votre domaine pointe bien vers le serveur Hostinger :

```bash
# Vérifier les DNS
dig votre-domaine.com
# ou
nslookup votre-domaine.com
```

Les DNS doivent pointer vers l'IP de votre serveur Hostinger Cloud.

### Solution 6 : Vérifier le firewall

Assurez-vous que le port 3000 est accessible localement :

```bash
# Tester la connexion locale
curl http://localhost:3000
```

Si ça fonctionne localement mais pas via le domaine, c'est un problème de configuration Nginx.

## Configuration dans Hostinger Cloud

### Dans le panneau Hostinger :

1. **Allez dans "Applications"** → Sélectionnez votre application
2. **Vérifiez "Domains"** :
   - Le domaine temporaire doit être actif
   - Votre domaine personnalisé doit être ajouté
   - Les deux doivent pointer vers la même application

3. **Vérifiez "Environment Variables"** :
   ```
   NODE_ENV=production
   PORT=3000
   ```

4. **Vérifiez "Build Settings"** :
   - Build Command : `npm run build`
   - Start Command : `npm start`
   - Node Version : 18.x ou 20.x

5. **Redéployez** l'application après avoir ajouté le domaine

## Test rapide

1. **Testez le domaine temporaire** : `https://votre-app.hostinger-temp.com`
2. **Testez votre domaine** : `https://votre-domaine.com`
3. **Vérifiez les logs** dans le panneau Hostinger Cloud

## Contact Hostinger Support

Si le problème persiste, contactez le support Hostinger avec :
- Le nom de votre domaine
- L'erreur exacte (503)
- Les logs de l'application
- La configuration actuelle

