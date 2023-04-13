import { Given, When, Then } from '@cucumber/cucumber';

import verifierUrlPage from '../../support/commun/verification/verifierUrlPage';
import verifierElementNonVisible from '../../support/commun/verification/verifierElementNonVisible';
import verifierElementVisible from '../../support/commun/verification/verifierElementVisible';
import verifierElementPresent from '../../support/commun/verification/verifierElementPresent';
import verifierElementNonPresent from '../../support/commun/verification/verifierElementNonPresent';
import verifierElementContientTexte from '../../support/commun/verification/verifierElementContientTexte';
import verifierElementContientTexteNonSensibleCasse from '../../support/commun/verification/verifierElementContientTexteNonSensibleCasse';
import verifierElementContientValeur from '../../support/commun/verification/verifierElementContientValeur';
import verifierElementCoche from '../../support/commun/verification/verifierElementCoche';
import verifierElementNonCoche from '../../support/commun/verification/verifierElementNonCoche';
import verifierElementNonCliquable from '../../support/commun/verification/verifierElementNonCliquable';
import verifierElementCliquable from '../../support/commun/verification/verifierElementCliquable';
import verifierPageContientTexte from '../../support/commun/verification/verifierPageContientTexte';
import verifierCibleLien from '../../support/commun/verification/verifierCibleLien';
import verifierElementVide from '../../support/commun/verification/verifierElementVide';
import verifierElementNonVide from '../../support/commun/verification/verifierElementNonVide';
import verifierCouleurTexte from '../../support/commun/verification/verifierCouleurTexte';
import verifierElementNeContientPasTexte from '../../support/commun/verification/verifierElementNeContientPasTexte';
import verifierPageNeContientPasTexte from '../../support/commun/verification/verifierPageNeContientPasTexte';
import verifierOptionSelectionnee from '../../support/commun/verification/verifierOptionSelectionnee';
import verifierOptionDansListe from '../../support/commun/verification/verifierOptionDansListe';
import verifierOptionPasDansListe from '../../support/commun/verification/verifierOptionPasDansListe';
import verifierTitrePage from '../../support/commun/verification/verifierTitrePage';
import verifierCouleurFond from '../../support/commun/verification/verifierCouleurFond';
import verifierSource from '../../support/commun/verification/verifierSource';
import verifierCouleurBordure from '../../support/commun/verification/verifierCouleurBordure';
import verifierCouleurEncadre from '../../support/commun/verification/verifierCouleurEncadre';
import verifierCouleurBordureHaute from '../../support/commun/verification/verifierCouleurBordureHaute';
import verifierElementContientClass from '../../support/commun/verification/verifierElementContientClass';
import verifierElementNeContientPasClass from '../../support/commun/verification/verifierElementNeContientPasClass';
import verifierElementDifferentAutreElement from '../../support/commun/verification/verifierElementDifferentAutreElement';
import verifierElementAuDessusElement from '../../support/commun/verification/verifierElementAuDessusElement';
import verifierElementContientPlaceholder from '../../support/commun/verification/verifierElementContientPlaceholder';
import verifierElementDesactive from '../../support/commun/verification/verifierElementDesactive';
import verifierElementNonDesactive from '../../support/commun/verification/verifierElementNonDesactive';
import verifierCouleurBordureGauche from '../../support/commun/verification/verifierCouleurBordureGauche';
import verifierElementGaucheAutreElement from '../../support/commun/verification/verifierElementGaucheAutreElement';
import verifierPlaceHolder from '../../support/commun/verification/verifierPlaceHolder';
import verifierUrlNonPage from '../../support/commun/verification/verifierUrlNonPage';
import verifierNonCouleurFond from '../../support/commun/verification/verifierNonCouleurFond';
import verifierElementActive from '../../support/commun/verification/verifierElementActive';
import verifierPageContientTexteNonSensibleCasse from '../../support/commun/verification/verifierPageContientTexteNonSensibleCasse';

When(
    /^Je verifie que je suis sur la page "(.*)"$/,
    verifierUrlPage
);

When(
    /^Je verifie que je ne suis pas sur la page "(.*)"$/,
    verifierUrlNonPage
);

When(
    /^Je verifie que l\'element "(.*)" est present$/,
    verifierElementPresent
);

When(
    /^Je verifie la presence de l'element "([^"]*)?"$/,
    verifierElementPresent
);

When(
    /^Je verifie que l\'element "([^"]*)?" est affiche$/,
    verifierElementVisible
);

When(
    /^Je verifie que l\'element "([^"]*)?" n\'est pas affiche$/,
    verifierElementNonVisible
);

When(
    /^Je verifie que l\'element "(.*)" n\'est pas present$/,
    verifierElementNonPresent
);

When(
    /^Je verifie la presence du texte "(.*)"$/,
    verifierPageContientTexte
);

When(
    /^Je verifie la presence du texte "(.*)" non sensible a la casse$/,
    verifierPageContientTexteNonSensibleCasse
);

When(
    /^Je verifie l'absence du texte "(.*)"$/,
    verifierPageNeContientPasTexte
);

When(
    /^Je verifie que "([^"]*)?" est encadré en "([^"]*)?"$/,
    verifierCouleurEncadre
);

When(
    /^Je verifie que la page contient le placeholder "([^"]*)?"$/,
    verifierPlaceHolder
);

When(
    /^Je verifie que "([^"]*)?" est vide$/,
    verifierElementVide
);

When(
    /^Je verifie que "(.*)" n'est pas vide$/,
    verifierElementNonVide
);

When(
    /^Je verifie que "([^"]*)?" contient le texte "(.*)"$/,
    verifierElementContientTexte
);

When(
    /^Je verifie que "([^"]*)?" contient le texte "(.*)" non sensible a la casse$/,
    verifierElementContientTexteNonSensibleCasse
);

When(
    /^Je verifie que "(.*)" ne contient pas le texte "(.*)"$/,
    verifierElementNeContientPasTexte
);

When(
    /^Je verifie que "(.*)" contient la valeur "(.*)"$/,
    verifierElementContientValeur
);

When(
    /^Je verifie que "(.*)" est coche$/,
    verifierElementCoche
);

When(
    /^Je verifie que "(.*)" n'est pas coche$/,
    verifierElementNonCoche
);

When(
    /^Je verifie que "(.*)" n'est pas cliquable$/,
    verifierElementNonCliquable
);

When(
    /^Je verifie que "(.*)" est cliquable$/,
    verifierElementCliquable
);

When(
    /^Je verifie que "(.*)" a pour cible "(.*)"$/,
    verifierCibleLien
);

When(
    /^Je verifie que le texte "(.*)" est de couleur "(.*)"$/,
    verifierCouleurTexte
);

When(
    /^Je verifie que le fond "(.*)" est de couleur "(.*)"$/,
    verifierCouleurFond
);

When(
    /^Je verifie que le fond "(.*)" n'est pas de couleur "(.*)"$/,
    verifierNonCouleurFond
);

When(
    /^Je verifie que la bordure "(.*)" est de couleur "(.*)"$/,
    verifierCouleurBordure
);

When(
    /^Je verifie que la bordure gauche de "([^"]*)?" est de couleur "([^"]*)?"$/,
    verifierCouleurBordureGauche
);

When(
    /^Je verifie que "([^"]*)?" est au-dessus de "([^"]*)?"$/,
    verifierElementAuDessusElement
);

When(
    /^Je verifie que "(.*)" est à gauche de "(.*)"$/,
    verifierElementGaucheAutreElement
);

When(
    /^Je verifie que "([^"]*)?" est different de "([^"]*)?"$/,
    verifierElementDifferentAutreElement
);

When(
    /^Je verifie que la bordure haute "([^"]*)?" est de couleur "([^"]*)?"$/,
    verifierCouleurBordureHaute
);

When(
    /^Je verifie que "(.*)" est selectionne dans la liste "(.*)"$/,
    verifierOptionSelectionnee
);

When(
    /^Je verifie que la liste "(.*)" contienne les valeurs "(.*)"$/,
    verifierOptionDansListe
);

When(
    /^Je verifie que la liste "(.*)" ne contienne pas les valeurs "(.*)"$/,
    verifierOptionPasDansListe
);

When(
    /^Je verifie que le titre de l'onglet est "(.*)"$/,
    verifierTitrePage
);

When(
    /^Je verifie que "(.*)" a comme source "(.*)"$/,
    verifierSource
);

When(
    /^Je verifie que "(.*)" a comme class "(.*)"$/,
    verifierElementContientClass
);

When(
    /^Je verifie que "(.*)" n'a pas comme class "(.*)"$/,
    verifierElementNeContientPasClass
);

When(
    /^Je verifie que "(.*)" a pour placeholder "(.*)"$/,
    verifierElementContientPlaceholder
);

When(
    /^Je verifie que "(.*)" est desactive$/,
    verifierElementDesactive
);

When(
    /^Je verifie que "(.*)" n'est pas desactive$/,
    verifierElementNonDesactive
);
When(
    /^Je verifie que "([^"]*)?" est active$/,
    verifierElementActive,

);
