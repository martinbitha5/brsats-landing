# 🔑 Comment créer un Personal Access Token sur GitHub

## Méthode 1 : Créer un Token (pour HTTPS)

### Étapes détaillées :

1. **Allez sur GitHub.com** et connectez-vous
2. Cliquez sur votre **photo de profil** en haut à droite
3. Cliquez sur **"Settings"** (Paramètres)
4. Dans le menu de gauche, allez tout en bas et cliquez sur **"Developer settings"**
5. Dans le menu de gauche, cliquez sur **"Personal access tokens"**
6. Cliquez sur **"Tokens (classic)"** (pas "Fine-grained tokens")
7. Cliquez sur le bouton **"Generate new token"** → **"Generate new token (classic)"**
8. Remplissez le formulaire :
   - **Note** : Donnez un nom (ex: "brsats-deploy")
   - **Expiration** : Choisissez une durée (90 jours, 1 an, etc.)
   - **Scopes** : Cochez **"repo"** (cela cochera automatiquement toutes les sous-options)
9. Faites défiler vers le bas et cliquez sur **"Generate token"** (bouton vert)
10. **IMPORTANT** : Copiez le token immédiatement ! Il commence par `ghp_` et ressemble à : `ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`
11. **Sauvegardez-le** dans un endroit sûr (vous ne pourrez plus le voir après)

### Utiliser le token :

Quand vous faites `git push`, Git vous demandera :
- **Username** : `martinbitha5`
- **Password** : Collez le token (pas votre mot de passe GitHub normal)

---

## Méthode 2 : Utiliser SSH (Plus simple et sécurisé)

SSH est souvent plus simple car vous n'avez qu'à le configurer une fois.

### Étape 1 : Vérifier si vous avez déjà une clé SSH

```bash
ls -la ~/.ssh/id_*.pub
```

Si vous voyez des fichiers, vous avez déjà une clé SSH.

### Étape 2 : Créer une clé SSH (si vous n'en avez pas)

```bash
ssh-keygen -t ed25519 -C "goblaire50@gmail.com"
```

Appuyez sur **Entrée** pour accepter l'emplacement par défaut.
Si demandé, entrez un mot de passe (ou laissez vide pour plus de simplicité).

### Étape 3 : Afficher votre clé publique

```bash
cat ~/.ssh/id_ed25519.pub
```

**Copiez tout le contenu** qui s'affiche (commence par `ssh-ed25519`).

### Étape 4 : Ajouter la clé sur GitHub

1. Allez sur : https://github.com/settings/keys
2. Cliquez sur **"New SSH key"**
3. **Title** : Donnez un nom (ex: "Mon ordinateur")
4. **Key** : Collez la clé que vous avez copiée
5. Cliquez sur **"Add SSH key"**

### Étape 5 : Changer le remote pour utiliser SSH

```bash
cd /home/goblaire/Bureau/landing
git remote set-url origin git@github.com:martinbitha5/brsats-landing.git
```

### Étape 6 : Tester la connexion

```bash
ssh -T git@github.com
```

Vous devriez voir : "Hi martinbitha5! You've successfully authenticated..."

### Étape 7 : Pousser le code

```bash
git push -u origin main
```

Cette fois, ça devrait fonctionner sans demander de mot de passe !

---

## Quelle méthode choisir ?

- **SSH** : Plus simple à long terme, pas besoin de token
- **Token** : Plus rapide si vous ne voulez pas configurer SSH

Je recommande **SSH** car c'est plus sécurisé et vous n'aurez plus besoin de vous authentifier à chaque fois.

