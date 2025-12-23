# ⚙️ Configuration Hostinger Cloud pour éviter l'erreur 503

## Configuration dans le panneau Hostinger Cloud

### 1. Variables d'environnement

Dans "Environment Variables", ajoutez :

```
NODE_ENV=production
PORT=3000
HOSTNAME=0.0.0.0
```

### 2. Build Settings

- **Build Command** : `npm run build`
- **Start Command** : `npm start`
- **Node Version** : 18.x ou 20.x (recommandé : 20.x)

### 3. Configuration du domaine

#### Étape importante : Redéployer après ajout du domaine

1. Ajoutez votre domaine dans "Domains"
2. **Redéployez** l'application (bouton "Redeploy" ou "Deploy")
3. Attendez que le déploiement soit terminé

### 4. Vérifier la configuration Nginx (si vous avez accès SSH)

Si vous avez accès SSH, vérifiez que Nginx pointe bien vers `localhost:3000` :

```nginx
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
    
    # Timeouts
    proxy_connect_timeout 60s;
    proxy_send_timeout 60s;
    proxy_read_timeout 60s;
}
```

## Checklist de dépannage

- [ ] Variables d'environnement configurées (PORT=3000, HOSTNAME=0.0.0.0)
- [ ] Application redéployée après ajout du domaine
- [ ] DNS du domaine pointent vers le serveur Hostinger
- [ ] SSL/HTTPS activé pour le domaine
- [ ] Build réussi (vérifier les logs)
- [ ] Application démarre correctement (vérifier les logs)

## Commandes de diagnostic (si accès SSH)

```bash
# Vérifier si l'app tourne
curl http://localhost:3000

# Vérifier les logs
pm2 logs brsats-landing
# ou
tail -f /var/log/nginx/error.log

# Vérifier le port
netstat -tulpn | grep 3000
```

## Solution rapide

1. **Dans Hostinger Cloud** :
   - Allez dans votre application
   - Section "Domains"
   - Supprimez temporairement votre domaine personnalisé
   - Redéployez
   - Réajoutez le domaine
   - Redéployez à nouveau

2. **Vérifiez les logs** dans le panneau Hostinger pour voir les erreurs exactes

3. **Contactez le support Hostinger** si le problème persiste avec :
   - Le nom de votre domaine
   - Les logs de l'application
   - L'erreur exacte (503)

