# bevouac

## Site

```javascript
Accès

// http://localhost:8080/ ou http://192.168.1.16:8080/ -> 
```

## Install

Installer NodeJs en allant sur le site https://nodejs.org/en/ et en le téléchargeant.
Lancer git bash
Ecrire les lignes suivantes : 

```javascript
$ npm install -g @vue/cli
$ vue create bevouac // En Vue.js
$ cd bevouac
$ npm install axios // Appel d'API avec vue.js
$ curl -X POST https://entreprise.pole-emploi.fr/connexion/oauth2/access_token?realm=%2Fpartenaire -d "grant_type=client_credentials&client_id=PAR_testbevouac_aa9afbdc5775a3095e1db0269e82d46abb7911e08956fec04e02fdb699a7aaa0&client_secret=346fb216d17c0f15099e7998d36369d49fb6dbbcb2afa165220e71c6bc4c13e7&scope=application_PAR_testbevouac_aa9afbdc5775a3095e1db0269e82d46abb7911e08956fec04e02fdb699a7aaa0%20api_labonneboitev1"
$ npm install --save-dev sass sass-loader // Install pour Sass
$ npm install -g sass
$ cd src/assets/sass
$ sass  --watch app.scss:app.css --style compressed // creation du .css et compression
$ cd ../../
$ npm run serve

## API

https://pole-emploi.io/data/api/bonne-boite
Les ressources exposées permettant de : 
Récupérer la liste des entreprises classées par potentiel d embauche pour un métier (code ROME)

Identifiant : PAR_testbevouac_aa9afbdc5775a3095e1db0269e82d46abb7911e08956fec04e02fdb699a7aaa0
Clé : 346fb216d17c0f15099e7998d36369d49fb6dbbcb2afa165220e71c6bc4c13e7

API : https://api.emploi-store.fr/partenaire/labonneboite/v1/company/

accès Token : https://pole-emploi.io/data/documentation/utilisation-api-pole-emploi/generer-access-token

Exemple : https://labonneboite.pole-emploi.fr/

https://api.emploi-store.fr/partenaire/labonneboite/v1/company/?distance=30&latitude=49.119146&longitude=6.17602&rome_codes=M1607

https://api.emploi-store.fr/partenaire/labonneboite/v1/company/?latitude=48.856614&longitude=2.3522219&rome_codes=M1805&sort=score&page_size=10&page=$%7Bpage%7D


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Vérifications

- **La page est responsive, fonctionne sur Chrome, Firefox, Edge.**:
- **Le score au niveau des indicateurs de chrome lighthouse**:
- **Validation W3C : https://validator.w3.org/#validate_by_upload**:
- **Vérification chargement page : https://developers.google.com/speed/pagespeed/insights/?hl=fr**:
- **Convertisseur WEBP : https://www.onlineimagetool.com/fr/convert-png-jpg-webp-gif#**:

## License

The MIT License (MIT)

Copyright (c) 2021 Cécile

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
