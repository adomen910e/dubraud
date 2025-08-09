# Guide de résolution du problème SSL sur Netlify

## Problème identifié

Vous avez uploadé un certificat SSL auto-signé sur Netlify pour le domaine `domaine-dubraud.com`. Les certificats auto-signés ne sont pas reconnus par les navigateurs comme valides pour les sites publics, d'où l'erreur "Le certificat de ce site n'est pas valide".

## Solution recommandée : SSL automatique Netlify

### Étape 1 : Supprimer le certificat manuel

1. Connectez-vous à votre dashboard Netlify
2. Sélectionnez votre site
3. Allez dans **Site settings** → **Domain management** → **HTTPS**
4. Dans la section "Custom certificates", supprimez le certificat que vous avez uploadé manuellement
5. Cliquez sur "Delete certificate"

### Étape 2 : Configurer le domaine personnalisé

1. Dans **Site settings** → **Domain management** → **Custom domains**
2. Ajoutez votre domaine : `domaine-dubraud.com`
3. Configurez les enregistrements DNS chez votre registraire :

**Enregistrements DNS à configurer :**
```
Type: A
Name: @ (ou domaine-dubraud.com)
Value: [IP fournie par Netlify]

Type: CNAME
Name: www
Value: domaine-dubraud.com
```

### Étape 3 : Activer le SSL automatique

1. Retournez dans **Site settings** → **Domain management** → **HTTPS**
2. Dans la section "Let's Encrypt certificate", cliquez sur **"Provision certificate"**
3. Netlify générera automatiquement un certificat SSL valide
4. Activez **"Force HTTPS"** pour rediriger automatiquement le trafic HTTP vers HTTPS

### Étape 4 : Vérifier la configuration

1. Attendez quelques minutes que le certificat soit provisionné
2. Visitez votre site : `https://domaine-dubraud.com`
3. Vérifiez que le cadenas vert apparaît dans la barre d'adresse

## Configuration netlify.toml mise à jour

Le fichier `netlify.toml` a été mis à jour avec :
- Headers de sécurité
- Redirections HTTPS forcées
- Redirection www vers non-www

## Pourquoi cette solution ?

### ✅ Avantages du SSL automatique Netlify :
- **Certificat valide** : Signé par Let's Encrypt (autorité reconnue)
- **Renouvellement automatique** : Pas de gestion manuelle
- **Gratuit** : Inclus dans l'offre Netlify
- **Configuration simple** : Quelques clics suffisent

### ❌ Problèmes des certificats auto-signés :
- **Non reconnus** : Les navigateurs les rejettent
- **Avertissements de sécurité** : Mauvaise expérience utilisateur
- **Gestion manuelle** : Renouvellement à faire soi-même
- **Pas de confiance** : Aucune autorité de certification

## Dépannage

### Si le certificat ne se provisionne pas :
1. Vérifiez que les DNS pointent correctement vers Netlify
2. Attendez la propagation DNS (jusqu'à 48h)
3. Essayez de supprimer et re-ajouter le domaine

### Si vous voyez encore l'erreur :
1. Videz le cache de votre navigateur
2. Testez en navigation privée
3. Vérifiez avec un autre navigateur

### Vérification DNS :
```bash
# Vérifier les enregistrements A
nslookup domaine-dubraud.com

# Vérifier les enregistrements CNAME
nslookup www.domaine-dubraud.com
```

## Prochaines étapes

1. **Immédiat** : Suivre les étapes ci-dessus dans Netlify
2. **Après résolution** : Supprimer le dossier `ssl/` du projet (plus nécessaire)
3. **Optionnel** : Configurer un CDN ou des optimisations supplémentaires

## Contact support

Si le problème persiste après ces étapes :
- Support Netlify : https://www.netlify.com/support/
- Documentation SSL : https://docs.netlify.com/domains-https/https-ssl/

---

**Note importante** : Les certificats dans le dossier `ssl/` sont uniquement pour le développement local. Ne jamais les utiliser en production !
