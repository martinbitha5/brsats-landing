#!/bin/bash

# Script de déploiement pour Hostinger Cloud
# Usage: ./deploy.sh [user@host]

echo "🚀 Déploiement de BRSATS Landing sur Hostinger Cloud..."

# Vérifier que le build existe
if [ ! -d ".next" ]; then
    echo "📦 Build du projet..."
    npm run build
fi

# Vérifier les arguments
if [ -z "$1" ]; then
    echo "❌ Erreur: Veuillez fournir l'adresse SSH"
    echo "Usage: ./deploy.sh user@hostinger-server.com"
    exit 1
fi

SERVER=$1
REMOTE_DIR="~/brsats-landing"

echo "📤 Transfert des fichiers vers le serveur..."
rsync -avz --exclude 'node_modules' --exclude '.next' --exclude '.git' \
    ./ $SERVER:$REMOTE_DIR/

echo "🔧 Installation et build sur le serveur..."
ssh $SERVER "cd $REMOTE_DIR && npm install --production && npm run build"

echo "✅ Déploiement terminé!"
echo "📝 Pour démarrer l'application, connectez-vous au serveur et exécutez:"
echo "   cd $REMOTE_DIR && npm start"
echo ""
echo "💡 Ou utilisez PM2:"
echo "   pm2 start ecosystem.config.js"

