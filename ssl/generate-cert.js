const crypto = require('crypto');
const fs = require('fs');

console.log('Génération du certificat SSL...');

// Générer une paire de clés RSA
const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
  modulusLength: 2048,
  publicKeyEncoding: {
    type: 'spki',
    format: 'pem'
  },
  privateKeyEncoding: {
    type: 'pkcs8',
    format: 'pem'
  }
});

// Sauvegarder la clé privée
fs.writeFileSync('ssl/server.key', privateKey);
console.log('✓ Clé privée générée: ssl/server.key');

// Sauvegarder la clé publique
fs.writeFileSync('ssl/server.pub', publicKey);
console.log('✓ Clé publique générée: ssl/server.pub');

console.log('✓ Certificats SSL générés avec succès!');
console.log('');
console.log('Fichiers créés:');
console.log('- ssl/server.key (clé privée)');
console.log('- ssl/server.pub (clé publique)');
console.log('');
console.log('Pour utiliser HTTPS avec ces certificats:');
console.log('1. Utilisez server.key comme clé privée');
console.log('2. Créez un certificat auto-signé avec ces clés');
console.log('3. Configurez votre serveur pour utiliser HTTPS');
