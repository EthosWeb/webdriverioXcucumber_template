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
        './src/features/webDesktop/**/**/**.feature',
    ],
    // Suites de tests
    suites: {
        complet: [
            './src/features/webDesktop/**/**/**.feature',
        ],
        phrasesGeneriques: [
            './src/features/webDesktop/phrasesGeneriques/**/**.feature',
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
    capabilities: [/*{        
        // ------------
        // Firefox
        // ------------
        // Defintion du nombre d'instance a lancer en parallele (Firefox)
        maxInstances: 4,
        browserName: 'firefox',
        'moz:firefoxOptions': {
          args: [
                // Defintion du mode headless
                // Commenter la ligne pour voir l'execution
                //'--headless',
                // Arguments chrome necessaires aux tests autos stables
                "--disable-infobars",
                "--allow-running-insecure-content",
                "--disable-background-timer-throttling",
                "--disable-backgrounding-occluded-windows",
                "--disable-hang-monitor",
                "--disable-popup-blocking",
                "--disable-dev-shm-usage",
                "--disable-gpu",
                "--window-position=0,0",
                "--window-size=1200,700"
            ]
        },
    },*/
        // Configuration pour internet explorer
        /*{
                    // ------------
            // IE
            // ------------
            maxInstances: 4,
            browserName: 'internet explorer',
            "se:ieOptions": {
                ignoreZoomSetting: true,
                nativeEvents: false,
                "ie.ensureCleanSession": true,
            },
            timeouts: {}
        },*/
        {
            // ------------
            // Chrome
            // ------------
            // Defintion du nombre d'instance a lancer en parallele (Chrome)
            maxInstances:4 
            ,
            browserName: 'chrome',
            'goog:chromeOptions': {
                extensions: [],
                args: [
                    // Defintion du mode headless
                    // Commenter la ligne pour voir l'execution
                    '--headless',
                    // Arguments chrome necessaires aux tests autos stables
                    "--disable-infobars",
                    "--allow-running-insecure-content",
                    "--disable-background-timer-throttling",
                    "--disable-backgrounding-occluded-windows",
                    "--disable-hang-monitor",
                    "--disable-popup-blocking",
                    "--disable-gpu",
                    "--window-position=0,0",
                    "--window-size=1525,800",
                    "--disable-blink-features=AutomationControlled"
                ]
            },
        },
        /*{
            // ------------
            // Edge
            // ------------
            // Defintion du nombre d'instance a lancer en parallele (Edge)
            maxInstances: 1,
            browserName: 'edge',
            'ms:edgeOptions': {
                extensions: [],
                args: [
                    // Defintion du mode headless
                    // Commenter la ligne pour voir l'execution
                    '--headless',
                    // Arguments chrome necessaires aux tests autos stables
                    "--disable-infobars",
                    "--allow-running-insecure-content",
                    "--disable-background-timer-throttling",
                    "--disable-backgrounding-occluded-windows",
                    "--disable-hang-monitor",
                    "--disable-popup-blocking",
                    "--disable-gpu",
                    "--window-position=0,0",
                    "--window-size=1525,800",
                    "--disable-blink-features=AutomationControlled"
                ]
            },
        }*/
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
