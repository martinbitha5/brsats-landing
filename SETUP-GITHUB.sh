#!/bin/bash

# Script pour configurer le dépôt GitHub
# Usage: ./SETUP-GITHUB.sh VOTRE-USERNAME-GITHUB

if [ -z "$1" ]; then
    echo "❌ Erreur: Veuillez fournir votre nom d'utilisateur GitHub"
    echo "Usage: ./SETUP-GITHUB.sh votre-username-github"
    exit 1
fi

GITHUB_USER=$1
REPO_NAME="brsats-landing"

echo "🚀 Configuration du dépôt GitHub..."
echo ""

# Vérifier si git est installé
if ! command -v git &> /dev/null; then
    echo "❌ Git n'est pas installé. Veuillez l'installer d'abord."
    exit 1
fi

echo "📝 Instructions pour créer le dépôt sur GitHub:"
echo ""
echo "1. Allez sur https://github.com/new"
echo "2. Créez un nouveau dépôt nommé: $REPO_NAME"
echo "3. NE cochez PAS 'Initialize with README'"
echo "4. Cliquez sur 'Create repository'"
echo ""
read -p "Appuyez sur Entrée une fois le dépôt créé sur GitHub..."

echo ""
echo "🔗 Connexion du dépôt local à GitHub..."

# Ajouter le remote
git remote add origin https://github.com/$GITHUB_USER/$REPO_NAME.git 2>/dev/null || {
    echo "⚠️  Le remote existe déjà. Mise à jour..."
    git remote set-url origin https://github.com/$GITHUB_USER/$REPO_NAME.git
}

echo "✅ Remote configuré: https://github.com/$GITHUB_USER/$REPO_NAME.git"
echo ""
echo "📤 Poussage du code vers GitHub..."

# Pousser vers GitHub
git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Succès! Votre code est maintenant sur GitHub!"
    echo ""
    echo "🌐 Dépôt: https://github.com/$GITHUB_USER/$REPO_NAME"
    echo ""
    echo "📋 Prochaines étapes:"
    echo "1. Allez sur votre panneau Hostinger Cloud"
    echo "2. Créez une nouvelle application depuis GitHub"
    echo "3. Sélectionnez le dépôt: $REPO_NAME"
    echo "4. Configurez:"
    echo "   - Build Command: npm run build"
    echo "   - Start Command: npm start"
    echo "   - Port: 3000"
    echo ""
else
    echo ""
    echo "❌ Erreur lors du push. Vérifiez:"
    echo "   - Que le dépôt existe sur GitHub"
    echo "   - Vos identifiants GitHub"
    echo "   - Que vous avez les permissions"
fi

