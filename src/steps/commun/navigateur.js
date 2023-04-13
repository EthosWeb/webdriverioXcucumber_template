import { Given,When,Then } from '@cucumber/cucumber';
import logConsole from '../../support/commun/navigateur/logConsole';
import logCookies from '../../support/commun/navigateur/logCookies';
import precedentNavigateur from '../../support/commun/navigateur/precedentNavigateur';
import verifierNombreOnglet from '../../support/commun/navigateur/verifierNombreOnglet';
import verifierCookie from '../../support/commun/navigateur/verifierCookie';
import changerFenetre from '../../support/commun/navigateur/changerFenetre';

Given(
    /^Je log "(.*)" dans la console$/,
    logConsole
);

Given(
    /^Je reviens en arriere$/,
    precedentNavigateur
);

Given(
    /^Je log les cookies$/,
    logCookies
);

Given(
    /^Je verifie que le cookie "(.*)" a la valeur "(.*)"$/,
    verifierCookie
);

When(
    /^Je verifie que le nombre onglets navigateur ouverts est "(.*)"$/,
    verifierNombreOnglet
);


When(
    /^Je change de fenetre "(.*)"$/,
    changerFenetre
);
