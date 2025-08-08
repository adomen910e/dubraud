const selfsigned = require('selfsigned');
const fs = require('fs');

console.log('🔒 Génération d\'un certificat SSL pour domaine-dubraud.com...');

// Attributs du certificat pour votre domaine
const attrs = [
  { name: 'commonName', value: 'domaine-dubraud.com' },
  { name: 'countryName', value: 'FR' },
  { name: 'stateOrProvinceName', value: 'France' },
  { name: 'localityName', value: 'Local' },
  { name: 'organizationName', value: 'Domaine Dubraud' },
  { name: 'organizationalUnitName', value: 'IT Department' }
];

// Options du certificat avec tous les domaines possibles
const options = {
  keySize: 2048,
  days: 36500, // 100 ans
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
        // Votre domaine principal
        {
          type: 2, // DNS
          value: 'domaine-dubraud.com'
        },
        {
          type: 2, // DNS
          value: '*.domaine-dubraud.com'
        },
        // Localhost pour le développement
        {
          type: 2, // DNS
          value: 'localhost'
        },
        {
          type: 2, // DNS
          value: '*.localhost'
        },
        // Adresses IP
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
  
  console.log('');
  console.log('🎉 Certificat SSL pour domaine-dubraud.com créé !');
  console.log('');
  console.log('📋 Domaines inclus :');
  console.log('   - domaine-dubraud.com');
  console.log('   - *.domaine-dubraud.com');
  console.log('   - localhost');
  console.log('   - *.localhost');
  console.log('   - 127.0.0.1');
  console.log('   - ::1');
  console.log('');
  console.log('⏰ Validité : 100 ans (jusqu\'en 2125)');
  console.log('');
  console.log('🚀 Pour tester HTTPS :');
  console.log('   node ssl/start-https.js');
  
} catch (error) {
  console.error('❌ Erreur lors de la génération du certificat:', error.message);
}
