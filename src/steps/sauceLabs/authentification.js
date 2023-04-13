import { Given,When,Then } from '@cucumber/cucumber';

import authentificationUserMdP from '../../support/sauceLabs/authentification/authentificationUserMdP';
import authentificationOKUserMdP from '../../support/sauceLabs/authentification/authentificationOKUserMdP';
import authentificationValide from '../../support/sauceLabs/authentification/authentificationValide';
import authentificationKOUserMdP from '../../support/sauceLabs/authentification/authentificationKOUserMdP';
import authentificationInvalide from '../../support/sauceLabs/authentification/authentificationInvalide';
import authentificationDesactive from '../../support/sauceLabs/authentification/authentificationDesactive';


When(
    /^Je m'authentifie avec le user "(.*)" et le mot de passe "(.*)"$/,
    authentificationUserMdP
);

When(
    /^Je verifie que j'accede a la page des resultats lorsque je m'authentifie avec le user "(.*)" et le mot de passe "(.*)"$/,
    authentificationOKUserMdP
);

When(
    /^Je verifie que j'accede a la page des resultats lorsque je m'authentifie avec un compte valide$/,
    authentificationValide
);

When(
    /^Je verifie que je n'accede pas a la page des resultats lorsque je m'authentifie avec le user "(.*)" et le mot de passe "(.*)"$/,
    authentificationKOUserMdP
);

When(
    /^Je verifie que je n'accede pas a la page des resultats lorsque je m'authentifie avec un compte invalide$/,
    authentificationInvalide
);

When(
    /^Je verifie que je n'accede pas a la page des resultats lorsque je m'authentifie avec un compte desactive$/,
    authentificationDesactive
);
