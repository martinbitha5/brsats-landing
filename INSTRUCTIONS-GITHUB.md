# 📤 Instructions pour pousser le code vers GitHub

Votre dépôt GitHub est configuré : **https://github.com/martinbitha5/brsats-landing**

## Méthode rapide (avec script)

Exécutez simplement :
```bash
./push-to-github.sh
```

Le script vous guidera à travers le processus.

---

## Méthode manuelle

### Étape 1 : Créer un Personal Access Token GitHub

1. Allez sur : https://github.com/settings/tokens
2. Cliquez sur **"Generate new token"** → **"Generate new token (classic)"**
3. Donnez un nom au token (ex: "brsats-deploy")
4. Sélectionnez la durée d'expiration
5. **Cochez la case "repo"** (donne accès aux dépôts)
6. Cliquez sur **"Generate token"**
7. **COPIEZ LE TOKEN** (vous ne pourrez plus le voir après)

### Étape 2 : Pousser le code

Dans votre terminal, exécutez :

```bash
cd /home/goblaire/Bureau/landing
git push -u origin main
```

Quand Git vous demande :
- **Username** : `martinbitha5`
- **Password** : Collez le **Personal Access Token** (pas votre mot de passe GitHub)

---

## Alternative : Utiliser GitHub CLI

### Installer GitHub CLI

**Sur Ubuntu/Debian :**
```bash
curl -fsSL https://cli.github.com/packages/githubcli-archive-keyring.gpg | sudo dd of=/usr/share/keyrings/githubcli-archive-keyring.gpg
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/githubcli-archive-keyring.gpg] https://cli.github.com/packages stable main" | sudo tee /etc/apt/sources.list.d/github-cli.list > /dev/null
sudo apt update
sudo apt install gh
```

**Sur macOS :**
```bash
brew install gh
```

### S'authentifier

```bash
gh auth login
```

Suivez les instructions à l'écran.

### Pousser le code

```bash
git push -u origin main
```

---

## Vérifier que le code est sur GitHub

Une fois le push réussi, vérifiez sur :
**https://github.com/martinbitha5/brsats-landing**

Vous devriez voir tous vos fichiers !

---

## Déployer sur Hostinger Cloud

Une fois le code sur GitHub :

1. **Connectez-vous** à votre panneau Hostinger Cloud
2. Allez dans **"Applications"** ou **"Deployments"**
3. Cliquez sur **"Deploy from Git"** ou **"New Application"**
4. Sélectionnez **GitHub** comme source
5. **Autorisez** Hostinger à accéder à votre compte GitHub
6. Sélectionnez le dépôt **`brsats-landing`**
7. Configurez :
   - **Build Command** : `npm run build`
   - **Start Command** : `npm start`
   - **Node Version** : 18.x ou 20.x
   - **Port** : 3000
8. Cliquez sur **"Deploy"**

Hostinger va automatiquement :
- ✅ Cloner votre dépôt
- ✅ Installer les dépendances
- ✅ Builder le projet
- ✅ Démarrer l'application

---

## Mise à jour automatique

Dans Hostinger Cloud, vous pouvez activer **"Auto-deploy"** pour que chaque push sur GitHub déclenche automatiquement un nouveau déploiement.

---

## Besoin d'aide ?

Si vous rencontrez des problèmes :
- Vérifiez que le token GitHub a les permissions "repo"
- Vérifiez que vous êtes bien connecté à GitHub
- Consultez les logs dans le panneau Hostinger Cloud

