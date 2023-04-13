const path = require('path');
const fs = require('fs');
var defaults = require("./wdio.conf.js").config;
var _ = require("lodash");

var config = {

    // ------------------
    // features a executer
    // ------------------
    // Definition du ou des dossiers a prendre en compte pour l'execution.
    specs: [
        './src/features/webMobile/**/**.feature',


    ],
    // Suites de tests
    suites: {
        complet: [
            './src/features/webMobile/**/**/**.feature',
        ]
    },
    // Dossiers a exclure de l'execution
    exclude: [

    ],
    //
    //
    //
    // ============
    // Capabilities
    // ============
    // ------------
    // Defintion du nombre d'instance a lancer en parallele (tous navigateurs confondus)
    maxInstances: 10,
    // Definition du ou des navigateurs
    capabilities: [
        {
            // ------------
            // Chrome
            // ------------
            // Defintion du nombre d'instance a lancer en parallele (Chrome)
            maxInstances: 1
            ,
            browserName: 'chrome',
            'goog:chromeOptions': {
                // Emulation du device pour les tests mobiles
                mobileEmulation: { 'deviceName': 'iPhone X' },
                extensions: [],
                args: [
                    // Defintion du mode headless
                    // Commenter la ligne pour voir l'execution
                    //'--headless',
                    // User agent utilise pour les tests mobiles
                    "--user-agent=Mozilla/5.0 (Linux; Android 11; Pixel 5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.91 Mobile Safari/537.36",
                    // Arguments chrome necessaires aux tests autos stables
                    "--disable-infobars",
                    "--allow-running-insecure-content",
                    "--disable-background-timer-throttling",
                    "--disable-backgrounding-occluded-windows",
                    "--disable-hang-monitor",
                    "--disable-popup-blocking",
                    "--disable-gpu",
                    "--disable-blink-features=AutomationControlled"
                ]
            },
        },
    ],
    //
    //
    //
    // ------------
    // baseUrl
    // ------------
    // Defintion de la plateforme sur laquelle lancer les tests
    // Decommenter la plateforme voulue
    // DVP
    baseUrl: "https://www.saucedemo.com/",
    cucumberOpts: {
        // Tags a executer ou exclure
        //// Pas de filtre
        //tagExpression: 'not @NA',
        //// Platformes de recette par defaut
        tagExpression: 'not @BUG and not @NA and not @TODO',
    }

}

exports.config = _.defaultsDeep(config, defaults);
