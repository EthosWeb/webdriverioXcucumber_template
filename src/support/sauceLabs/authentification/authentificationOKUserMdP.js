import cliquerSur from '../../commun/action/cliquerSur';
import saisirTexte from '../../commun/action/saisirTexte';
import verifierUrlPage from '../../commun/verification/verifierUrlPage';
import verifierElementPresent from '../../commun/verification/verifierElementPresent';
/**
 * Authentification avec un user et un mot de passe et verification de l'acces aux resultats
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

    // Verification de l'acces a l'etape suivante
    await verifierUrlPage("Test Resultats")
    await verifierElementPresent("Produits")

};
