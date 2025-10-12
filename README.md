# IA-pour-les-cours
Site statique expliquant comment utiliser l'IA pour les cours.

## Déploiement rapide
1. Créer un repo GitHub.
2. Copier les fichiers (index.html, styles.css, script.js, README.md).
3. Push :
   ```bash
   git init
   git add .
   git commit -m "init"
   git branch -M main
   git remote add origin <URL_DU_REPO>
   git push -u origin main
   ```
4. Sur Netlify : New site → Connect to Git → choisir le repo → Deploy (build command = vide, publish directory = `/`).
5. Option CLI :
   ```bash
   npm i -g netlify-cli
   netlify login
   netlify deploy --prod --dir=.
   ```

## Remarques
- Vérifie le règlement du prof avant d'utiliser ces aides pour un devoir.
- Personnalise les prompts selon le niveau (terminale / 2nde / collège).
