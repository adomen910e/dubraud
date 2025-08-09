const fs = require('fs');
const path = require('path');

console.log('🧹 Nettoyage des fichiers SSL de développement...\n');

// Fichiers SSL à supprimer (uniquement pour le développement local)
const sslFiles = [
  'ssl/server.crt',
  'ssl/server.key',
  'ssl/server.pub'
];

// Scripts de génération SSL à conserver pour référence
const scriptsToKeep = [
  'ssl/README.md',
  'ssl/generate-cert.js',
  'ssl/create-certificate.js',
  'ssl/generate-domain-cert.js',
  'ssl/start-https.js',
  'ssl/generate-real-cert.js',
  'ssl/generate-long-cert.js'
];

console.log('📋 Fichiers SSL à supprimer :');
sslFiles.forEach(file => {
  if (fs.existsSync(file)) {
    try {
      fs.unlinkSync(file);
      console.log(`✅ Supprimé : ${file}`);
    } catch (error) {
      console.log(`❌ Erreur lors de la suppression de ${file} : ${error.message}`);
    }
  } else {
    console.log(`⚠️  Fichier non trouvé : ${file}`);
  }
});

console.log('\n📋 Scripts conservés pour référence :');
scriptsToKeep.forEach(file => {
  if (fs.existsSync(file)) {
    console.log(`📄 Conservé : ${file}`);
  }
});

console.log('\n✨ Nettoyage terminé !');
console.log('\n📝 Prochaines étapes :');
console.log('1. Suivez le guide GUIDE_SSL_NETLIFY.md');
console.log('2. Configurez le SSL automatique sur Netlify');
console.log('3. Supprimez le certificat manuel dans Netlify');
console.log('4. Activez Let\'s Encrypt certificate');
console.log('\n🔒 Votre site aura bientôt un certificat SSL valide !');
