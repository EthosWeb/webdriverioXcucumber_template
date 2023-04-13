import { Given,When,Then } from '@cucumber/cucumber';

import accederPage from '../../support/commun/navigation/accederPage'
import attendreSecondes from '../../support/commun/navigation/attendreSecondes';
import attendreElementVisible from '../../support/commun/navigation/attendreElementVisible';
import attendreElementNonVisible from '../../support/commun/navigation/attendreElementNonVisible';
import actualiserPage from '../../support/commun/navigation/actualiserPage'
import scrollerElement from '../../support/commun/navigation/scrollerElement';
import attendreElementPresent from '../../support/commun/navigation/attendreElementPresent';
import attendreElementNonPresent from '../../support/commun/navigation/attendreElementNonPresent';

Given(
    /^J'accede a la page "(.*)"$/,
    accederPage
);

Given(
    /^J'attends "(.*)" secondes$/,
    attendreSecondes
);

Given(
    /^J'attends que "(.*)" soit visible$/,
    attendreElementVisible
);

Given(
    /^J'attends que "(.*)" soit present$/,
    attendreElementPresent
);


Given(
    /^J'attends que "(.*)" ne soit plus visible$/,
    attendreElementNonVisible
);

Given(
    /^J'attends que "(.*)" ne soit plus affiche$/,
    attendreElementNonPresent
);

When(
    /^J'actualise la page$/,
    actualiserPage
);

When(
    /^Je scroll jusqu'a l'element "(.*)"$/,
    scrollerElement
);