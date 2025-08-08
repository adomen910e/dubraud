# Certificats SSL pour HTTPS

Ce dossier contient les certificats SSL générés pour activer HTTPS sur votre application.

## Fichiers générés

- `server.key` - Clé privée RSA (2048 bits)
- `server.pub` - Clé publique RSA
- `server.crt` - Certificat SSL auto-signé
- `generate-cert.js` - Script de génération des clés
- `create-certificate.js` - Script de création du certificat (non utilisé)

## Utilisation avec Node.js/Express

```javascript
const https = require('https');
const fs = require('fs');
const express = require('express');

const app = express();

// Configuration HTTPS
const options = {
  key: fs.readFileSync('./ssl/server.key'),
  cert: fs.readFileSync('./ssl/server.crt')
};

// Créer le serveur HTTPS
https.createServer(options, app).listen(3001, () => {
  console.log('Serveur HTTPS démarré sur https://localhost:3001');
});
```

## Utilisation avec React (Create React App)

1. Installez le package `https-localhost` :
```bash
npm install --save-dev https-localhost
```

2. Modifiez votre `package.json` :
```json
{
  "scripts": {
    "start": "HTTPS=true SSL_CRT_FILE=./ssl/server.crt SSL_KEY_FILE=./ssl/server.key react-scripts start"
  }
}
```

Ou sur Windows :
```json
{
  "scripts": {
    "start": "set HTTPS=true&& set SSL_CRT_FILE=./ssl/server.crt&& set SSL_KEY_FILE=./ssl/server.key&& react-scripts start"
  }
}
```

## Utilisation avec un serveur web

### Apache
Ajoutez dans votre configuration Apache :
```apache
<VirtualHost *:443>
    ServerName localhost
    SSLEngine on
    SSLCertificateFile /path/to/ssl/server.crt
    SSLCertificateKeyFile /path/to/ssl/server.key
</VirtualHost>
```

### Nginx
Ajoutez dans votre configuration Nginx :
```nginx
server {
    listen 443 ssl;
    server_name localhost;
    
    ssl_certificate /path/to/ssl/server.crt;
    ssl_certificate_key /path/to/ssl/server.key;
}
```

## Avertissement de sécurité

⚠️ **IMPORTANT** : Ces certificats sont auto-signés et destinés uniquement au développement local.

- Votre navigateur affichera un avertissement de sécurité
- Cliquez sur "Avancé" puis "Continuer vers localhost (non sécurisé)"
- **NE PAS utiliser en production** - utilisez des certificats signés par une autorité de certification reconnue

## Régénération des certificats

Vous avez plusieurs options pour générer des certificats :

### Certificat standard (1 an)
```bash
node ssl/generate-real-cert.js
```

### Certificat longue durée (100 ans)
```bash
node ssl/generate-long-cert.js
```

### Certificat basique (clés seulement)
```bash
node ssl/generate-cert.js
```

## Validité

- **Émis pour** : localhost
- **Valide pendant** : 1 an à partir de la génération
- **Algorithme** : RSA 2048 bits
- **Signature** : SHA-256

## Dépannage

### Erreur "Certificate not trusted"
C'est normal pour un certificat auto-signé. Acceptez l'exception de sécurité dans votre navigateur.

### Erreur "ENOENT: no such file or directory"
Vérifiez que les chemins vers les fichiers de certificat sont corrects dans votre configuration.

### Port déjà utilisé
HTTPS utilise généralement le port 443, mais pour le développement local, utilisez un port comme 3001 ou 8443.
