const { spawn } = require('child_process');
const path = require('path');

console.log('🔒 Démarrage du serveur de développement avec HTTPS...');
console.log('');

// Chemins vers les certificats
const certPath = path.join(__dirname, 'server.crt');
const keyPath = path.join(__dirname, 'server.key');

// Variables d'environnement pour React
const env = {
  ...process.env,
  HTTPS: 'true',
  SSL_CRT_FILE: certPath,
  SSL_KEY_FILE: keyPath,
  PORT: '3001'
};

// Démarrer le serveur React avec HTTPS
const reactProcess = spawn('npm', ['start'], {
  env: env,
  stdio: 'inherit',
  shell: true,
  cwd: path.join(__dirname, '..')
});

console.log('📋 Configuration HTTPS :');
console.log(`   - Certificat : ${certPath}`);
console.log(`   - Clé privée : ${keyPath}`);
console.log(`   - Port : 3001`);
console.log('');
console.log('🌐 Une fois démarré, votre application sera disponible sur :');
console.log('   https://localhost:3001');
console.log('');
console.log('⚠️  Votre navigateur affichera un avertissement de sécurité.');
console.log('   Cliquez sur "Avancé" puis "Continuer vers localhost"');
console.log('');
console.log('🛑 Pour arrêter le serveur, appuyez sur Ctrl+C');
console.log('');

reactProcess.on('close', (code) => {
  console.log(`\n🔴 Serveur HTTPS arrêté (code: ${code})`);
});

reactProcess.on('error', (error) => {
  console.error('❌ Erreur lors du démarrage du serveur HTTPS:', error.message);
  console.log('');
  console.log('💡 Solutions possibles :');
  console.log('   1. Vérifiez que Node.js et npm sont installés');
  console.log('   2. Exécutez "npm install" dans le répertoire du projet');
  console.log('   3. Vérifiez que les certificats SSL existent');
});
