import cliquerSur from '../../commun/action/cliquerSur';
import saisirTexte from '../../commun/action/saisirTexte';
import verifierUrlPage from '../../commun/verification/verifierUrlPage';
import verifierElementNonPresent from '../../commun/verification/verifierElementNonPresent';
/**
 * Authentification avec un user et un mot de passe et verification du blocage etape authentification
 * @param  {String} user - user a utiliser pour l'authentification
 * @param  {String} motDePasse - mot de passe a utiliser pour l'authentification
 */
export default async (user, motDePasse) => {


    // Saisie du username
    await saisirTexte(user, "Username")

    // Saisie du mot de Passe
    await saisirTexte(motDePasse, "Password")

    // Clic sur Login
    await cliquerSur("Login")

    // Verification du blocage a l'etape authentification
    await verifierUrlPage("Test Authentification")
    await verifierElementNonPresent("Produits")

};
