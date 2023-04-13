const path = require('path');
const fs = require('fs');

exports.config = {

    // ===================
    // Configuration des tests
    // ===================
    // ------------
    // Front
    // ------------
    // Ciblage d'un front particulier
    // Si plateforme de recette : Numero du front + "i"
    // Si prod : Numero du front + "p"
    // Exemples :
    // "01p" pour le front 1 de PROD
    // "03i" pour le front 3 de Recette
    front: "",
    //
    //
    //
    // ------------
    // Logs
    // ------------
    // Log des infos
    // true | false
    logInfo: true,
    // Niveau verbeux des logs
    // trace | debug | info | warn | error | silent
    logLevel: 'error',   
    logLevels: {
        'webdriver': 'info',
        'devtools': 'error',
        '@wdio/sync': 'info',
        '@wdio/local-runner': 'info',
        '@wdio/utils': 'silent',
        '@wdio/utils:shim': 'silent'
    },
    outputDir: "",
    //
    //
    //
    // ------------
    // Bail
    // ------------
    // Definition du nombre de tests FAILED avant de stopper l'execution
    // Si 0 : L'execution ne sera pas stoppee, peu importe le nombre de tests FAILED (valeur par defaut)
    bail: 0,
    //
    // ------------
    // Timeouts
    // ------------
    // Definition du timeout en ms pour les steps waitFor*
    waitforTimeout: 30000,
    // Definition du timeout en ms pour les requetes
    connectionRetryTimeout: 30000,
    // Definition du nombre de retry par defaut
    connectionRetryCount: 2,
    //
    //
    //
    // ===================
    // Services
    // ===================
    /*services: [
        [
            'geckodriver',
            {
                args: ['--log=info'],
                logs: './logs'
            }
        ],
        'iexplorerdriver'
    ],*/
    // Framework a utiliser
    framework: 'cucumber',
    //
    //
    //
    // ------------
    // Reporting
    // ------------
    reporters: [
        ['cucumberjs-json', {
            jsonFolder: 'reporting/rapports',
            language: 'en',
        },],

    ],
    //
    //
    //
    // ------------
    // Configuration de Cucumber
    // ------------
    // Laisser les valeurs non expliquees par defaut
    cucumberOpts: {
        backtrace: false,
        requireModule: ['@babel/register'],
        failAmbiguousDefinitions: true,
        failFast: false,
        ignoreUndefinedDefinitions: false,
        name: [],
        snippets: true,
        source: true,
        profile: [],
        require: [
            './src/**/*.js',
        ],
        snippetSyntax: undefined,
        strict: true,
        tagsInTitle: false,
        // Timeout d'un step par defaut
        timeout: 360000,
    },
    //
    //
    //
    // ===================
    // Hooks
    // ===================
    //
    /**
     * Gets executed once before all workers get launched.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     */
    onPrepare: async function (config, capabilities) {
    },
    /**
     * Gets executed before a worker process is spawned and can be used to initialize specific service
     * for that worker as well as modify runtime environments in an async fashion.
     * @param  {String} cid      capability id (e.g 0-0)
     * @param  {[type]} caps     object containing capabilities for session that will be spawn in the worker
     * @param  {[type]} specs    specs to be run in the worker process
     * @param  {[type]} args     object that will be merged with the main configuration once worker is initialized
     * @param  {[type]} execArgv list of string arguments passed to the worker process
     */
    onWorkerStart: async function (cid, caps, specs, args, execArgv) { },
    /**
     * Gets executed just before initializing the webdriver session and test framework. It allows you
     * to manipulate configurations depending on the capability or spec.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that are to be run
     */
    beforeSession: async function (config, capabilities, specs) { },
    /**
     * Gets executed before test execution begins. At this point you can access to all global
     * variables like `browser`. It is the perfect place to define custom commands.
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs        List of spec file paths that are to be run
     * @param {Object}         browser      instance of created browser/device session
     */
    before: async function (capabilities, specs, browser) {

        await browser.url('/')
        await browser.pause(2000)
        // Ciblage d'un front
        if (front != "") {
            await browser.setCookies(
                { name: 'BOUTIQUE', value: 'lpodc1lpuhyf' + config.front }
            )
        }
    },
    /**
     * Gets executed before the suite starts.
     * @param {Object} suite suite details
     */
    beforeSuite: async function (suite) { },
    /**
     * This hook gets executed _before_ every hook within the suite starts.
     * (For example, this runs before calling `before`, `beforeEach`, `after`, `afterEach` in Mocha.)
     *
     * (`stepData` and `world` are Cucumber-specific.)
     *
     */
    beforeHook: async function (test, context /*, stepData, world*/) { },
    /**
     * Hook that gets executed _after_ every hook within the suite ends.
     * (For example, this runs after calling `before`, `beforeEach`, `after`, `afterEach` in Mocha.)
     *
     * (`stepData` and `world` are Cucumber-specific.)
     */
    afterHook: async function (test, context, {
        error,
        result,
        duration,
        passed,
        retries
    } /*, stepData, world*/) { },
    /**
     * Function to be executed before a test (in Mocha/Jasmine) starts.
     */
    beforeTest: async function (test, context) { },
    /**
     * Runs before a WebdriverIO command is executed.
     * @param {String} commandName hook command name
     * @param {Array} args arguments that the command would receive
     */
    beforeCommand: async function (commandName, args) {
        /*if (await $('#footer_tc_privacy_container_button > button:nth-of-type(2)').isExisting()) {
            await $('#footer_tc_privacy_container_button > button:nth-of-type(2)').click()
        }*/
    },
    /**
     * Runs after a WebdriverIO command gets executed
     * @param {String} commandName hook command name
     * @param {Array} args arguments that command would receive
     * @param {Number} result 0 - command success, 1 - command error
     * @param {Object} error error object, if any
     */
    afterCommand: async function (commandName, args, result, error) { },
    /**
     * Function to be executed after a test (in Mocha/Jasmine)
     */
    afterTest: async function (test, context, {
        error,
        result,
        duration,
        passed,
        retries
    }) { },
    /**
     * Hook that gets executed after the suite has ended.
     * @param {Object} suite suite details
     */
    afterSuite: async function (suite) { },
    /**
     * Gets executed after all tests are done. You still have access to all global variables from
     * the test.
     * @param {Number} result 0 - test pass, 1 - test fail
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that ran
     */
    after: async function (result, capabilities, specs) { },
    /**
     * Gets executed right after terminating the webdriver session.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that ran
     */
    afterSession: async function (config, capabilities, specs) { },
    /**
     * Gets executed when a refresh happens.
     * @param {String} oldSessionId session ID of the old session
     * @param {String} newSessionId session ID of the new session
     */
    onReload: async function (oldSessionId, newSessionId) { },
    /**
     * Cucumber-specific hooks
     */
    beforeFeature: async function (uri, feature, scenarios) { },
    beforeScenario: async function (uri, feature, scenario, sourceLocation, context) { },
    beforeStep: async function ({
        uri,
        feature,
        step
    }, context) { },
    afterStep: async function ({
        uri,
        feature,
        step
    }, context, {
        error,
        result,
        duration,
        passed
    }) {
        if (error) {
            const cucumberJson = require('wdio-cucumberjs-json-reporter').default;
            cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
        }


    },
    afterScenario: async function (uri, feature, scenario, result, sourceLocation, context) { },
    afterFeature: async function (uri, feature, scenarios) { }
}


