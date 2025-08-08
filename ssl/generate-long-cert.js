const selfsigned = require('selfsigned');
const fs = require('fs');

console.log('🔒 Génération d\'un certificat SSL à très longue durée...');

// Attributs du certificat
const attrs = [
  { name: 'commonName', value: 'localhost' },
  { name: 'countryName', value: 'FR' },
  { name: 'stateOrProvinceName', value: 'France' },
  { name: 'localityName', value: 'Local' },
  { name: 'organizationName', value: 'Development' },
  { name: 'organizationalUnitName', value: 'IT Department' }
];

// Options du certificat avec une très longue validité
const options = {
  keySize: 2048, // Taille de la clé RSA
  days: 36500,   // Validité : 100 ans (36500 jours)
  algorithm: 'sha256',
  extensions: [
    {
      name: 'basicConstraints',
      cA: true
    },
    {
      name: 'keyUsage',
      keyCertSign: true,
      digitalSignature: true,
      nonRepudiation: true,
      keyEncipherment: true,
      dataEncipherment: true
    },
    {
      name: 'extKeyUsage',
      serverAuth: true,
      clientAuth: true,
      codeSigning: true,
      timeStamping: true
    },
    {
      name: 'subjectAltName',
      altNames: [
        {
          type: 2, // DNS
          value: 'localhost'
        },
        {
          type: 2, // DNS
          value: '*.localhost'
        },
        {
          type: 7, // IP
          ip: '127.0.0.1'
        },
        {
          type: 7, // IP
          ip: '::1'
        }
      ]
    }
  ]
};

try {
  // Générer le certificat auto-signé
  const pems = selfsigned.generate(attrs, options);
  
  // Sauvegarder la clé privée
  fs.writeFileSync('ssl/server.key', pems.private);
  console.log('✅ Clé privée générée: ssl/server.key');
  
  // Sauvegarder le certificat
  fs.writeFileSync('ssl/server.crt', pems.cert);
  console.log('✅ Certificat SSL généré: ssl/server.crt');
  
  // Sauvegarder la clé publique
  fs.writeFileSync('ssl/server.pub', pems.public);
  console.log('✅ Clé publique générée: ssl/server.pub');
  
  // Calculer les dates
  const now = new Date();
  const expiry = new Date(now.getTime() + (36500 * 24 * 60 * 60 * 1000));
  
  console.log('');
  console.log('🎉 Certificat SSL à très longue durée créé avec succès !');
  console.log('');
  console.log('📋 Détails du certificat :');
  console.log('   - Nom commun : localhost');
  console.log(`   - Date de début : ${now.toLocaleDateString('fr-FR')}`);
  console.log(`   - Date d'expiration : ${expiry.toLocaleDateString('fr-FR')} (dans 100 ans)`);
  console.log('   - Algorithme : SHA-256');
  console.log('   - Taille clé : 2048 bits');
  console.log('   - Extensions : SAN (Subject Alternative Names)');
  console.log('');
  console.log('⚠️  Note : Aucun certificat ne peut être "sans expiration"');
  console.log('   mais celui-ci est valide pendant 100 ans !');
  console.log('');
  console.log('🚀 Pour tester HTTPS :');
  console.log('   node ssl/start-https.js');
  console.log('');
  console.log('🌐 URL : https://localhost:3001');
  
} catch (error) {
  console.error('❌ Erreur lors de la génération du certificat:', error.message);
}
