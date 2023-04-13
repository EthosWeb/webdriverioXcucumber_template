# Automatisation Template

Projet d'automatisation des tests fonctionnels (Template)

## Prerequis

### Node version >=16

Une version stable est disponible [ici](https://nodejs.org/en/download/)
Pour installer nodeJS sans droits d'admin : https://theshravan.net/blog/how-to-use-node-and-npm-without-installation-or-admin-rights/

## Installation du projet

1. Désactiver les verifications SSL : 
`export GIT_SSL_NO_VERIFY=true`

`git config http.sslVerify false`

2. Récupérer le projet [ici](https://gitlab.udd.net.intra.laposte.fr/lpel/rrb-recette/webdriverio-template) ou cloner le repo
`git clone https://gitlab.udd.net.intra.laposte.fr/lpel/rrb-recette/webdriverio-template.git`

3. Ouvrir le projet avec Visual Studio (ou autre IDE)

4. Installer les dépendances (`npm install`)
>/!\ Ne pas se connecter avec Pulse ou tout autre réseau La Poste pour ne pas être bloqué par le proxy

```nodejs
git clone https://gitlab.udd.net.intra.laposte.fr/lpel/rrb-recette/webdriverio-template.git
npm install
```

## Fichiers de configuation
Les fichiers de configuration sont est wdio.conf.desktop.js & wdio.conf.mobile.js
Celui-ci contient les valeurs communes à chaque canal, chaque univers (Desktop/Mobile - PART/PRO)

Les fichiers de configuration enfants héritent de ces valeurs et permettent de définir de nouvelles valeurs spécifiques au canle & univers.

  
## Execution des tests en local

1. Configurer le fichier de configuration (_wdio.conf.xxx.js_)
Les valeurs a modifier sont principalement :
- specs 
_Definition du ou des dossiers a prendre en compte pour l'execution._
- capabilities - browserName
_Definition du navigateur a utiliser_
- capabilities - maxInstances 
_Definition du nombre d'instances de navigateur a ouvrir en parrallele_
- capabilities - --headless 
_Definition du mode headless ou non_
- baseUrl
_Defintion de la plateforme sur laquelle lancer les tests_
- tagExpression
_Definition des tags a executer ou exclure_
- paiement
_Activation ou désactivation des étapes de paiement (à désactiver lors des exécutions en environnement de PROD)_
- comptePART
_Activation ou désactivation des étapes d'authentification ou d'inscription côté PART_
- comptePRO
_Activation ou désactivation des étapes d'authentification ou d'inscription côté PRO_
- front
_Ciblage d'un front en particulier, celui-ci sera forcé via l'injection d'un cookie lors de l'accès à une page_

_Chaque valeur importante est documentée dans le fichier de configuration._

2. Exéxuter la commande dans le terminal

```nodejs
$ npm run wdio
```

OU

```nodejs
$ npx wdio run wdio.conf.xxx.js
```
Cette commande permet d'ajouter des paramètres utiles, tels que la suite à exécuter :

```nodejs
$ npx wdio run wdio.conf.xxx.js --suite beb
```

## Génération du rapport d'exécution

Pour chaque feature exécutée, un fichier .json est généré automatiquement, contenant toutes les informations utiles telles que le résultat, le temps d'exécution, le screenshot de l'erreur etc.

Deux commandes sont utilisées concernant le rapport d'exécution : 

```nodejs
npm run wdio:viderRapports
```
Permet de supprimer les fichiers logs & les rapports précédents

```nodejs
npm run wdio:genererRapport
```
Permet de générer un rapport HTML à partir des fichiers json créés automatiquement au fil de l'exécution
## Astuces

Quelques astuces utiles pour le developpement des tests automatiques : 

### Les extensions VS Code utiles (quasi indispensables)

- indent-rainbow
- Gherkin Beautifier
- Feature SyntaxHighlight and Snippets (Cucumber/Gherkin)
- Cucumber (Gherkin) Full Support


### Saisie predictive

#### Sur VS Code :

- Acceder a Fichier -> Preferences -> Parametres
- Dans la recherche, taper "quick suggestions"
- Cliquer sur "Modifer dans settings.json"
- Coller :
```nodejs
{
    "cucumberautocomplete.customParameters": [],
    // Settings ajoutés pour avoir le mapping entre les Steps et les Features (AutoComplete)
    "cucumberautocomplete.steps": [
        "src/steps/**/**/*.js"
    ],
    "cucumberautocomplete.syncfeatures": "src/features/**/*.feature",
    "cucumberautocomplete.strictGherkinCompletion": false,
    "cucumberautocomplete.smartSnippets": true,
    "cucumberautocomplete.stepsInvariants": true,
    "workbench.startupEditor": "welcomePage",
}
```

  
## En cas de problème

Si des erreurs surviennent au moment de l'execution, il est fortement conseille d'activer les logs complets dans le fichier de configuration :

```nodejs
logLevel: 'error',
    outputDir: ""
```

### Quelques erreurs et solutions connues :

```nodejs
Blocage lors de l'execution de npm install ou npm update
```

-> La commande est a effectuer en dehors du reseau La Poste, certaines dependances sont bloquees par le proxy.


```nodejs
> wdio: command not found
```

-> Le projet a certainement mal ete installe, voir la section **Installation du projet**

```nodejs
> pattern **.feature did not match any file
```

-> La valeur definie dans la variable **specs** du fichier de configuration ne correspond a aucune feature du projet.

```nodejs
> Unexpected token } in JSON at position XXX
```

-> Un des fichiers json (locateurs ou urls) contient une erreur (une virgule de trop, une accolade mal fermee...)

```nodejs
> wdio: throw new Error...
```

-> Une des features a exécuter contient une erreur fatale (un mot cle mal orthographie, une structure eronnee...)

```nodejs
> wdio: undefined:undefined
```

-> La phrase utilisee n'est pas definie dans les step definitions
Il est conseille d'utiliser le module de saisie predictive pour acceder aux phrases definies. Voir la section **Astuces**
## Contributeurs

- **Rémi Leclercq**
  
