#!/bin/bash

# Script pour pousser le code vers GitHub
# Ce script vous guidera à travers le processus

echo "🚀 Push vers GitHub - brsats-landing"
echo ""

# Vérifier que le remote est configuré
if ! git remote get-url origin &>/dev/null; then
    echo "❌ Le remote GitHub n'est pas configuré."
    echo "Configuration du remote..."
    git remote add origin https://github.com/martinbitha5/brsats-landing.git
fi

echo "📋 Remote configuré: $(git remote get-url origin)"
echo ""

# Vérifier s'il y a des changements non commités
if [ -n "$(git status --porcelain)" ]; then
    echo "📝 Changements détectés. Voulez-vous les commiter? (o/n)"
    read -r response
    if [[ "$response" =~ ^[Oo]$ ]]; then
        git add .
        git commit -m "Update project files"
    fi
fi

echo ""
echo "🔐 Pour pousser vers GitHub, vous avez plusieurs options:"
echo ""
echo "Option 1: Utiliser un Personal Access Token (Recommandé)"
echo "  1. Allez sur: https://github.com/settings/tokens"
echo "  2. Cliquez sur 'Generate new token (classic)'"
echo "  3. Donnez-lui un nom (ex: 'brsats-deploy')"
echo "  4. Cochez 'repo' dans les permissions"
echo "  5. Cliquez sur 'Generate token'"
echo "  6. Copiez le token"
echo "  7. Quand git vous demande le mot de passe, utilisez le token"
echo ""
echo "Option 2: Utiliser GitHub CLI"
echo "  Installez GitHub CLI: sudo apt install gh (ou brew install gh)"
echo "  Puis: gh auth login"
echo ""
echo "Option 3: Configurer SSH"
echo "  Suivez: https://docs.github.com/en/authentication/connecting-to-github-with-ssh"
echo ""

echo "💡 Commande à exécuter après avoir configuré l'authentification:"
echo "   git push -u origin main"
echo ""

# Essayer de pousser directement (peut échouer si pas d'auth)
echo "🔄 Tentative de push..."
if git push -u origin main 2>&1; then
    echo ""
    echo "✅ Succès! Le code a été poussé vers GitHub!"
    echo "🌐 Dépôt: https://github.com/martinbitha5/brsats-landing"
else
    echo ""
    echo "⚠️  L'authentification est requise."
    echo "Veuillez suivre une des options ci-dessus pour configurer l'authentification."
fi

