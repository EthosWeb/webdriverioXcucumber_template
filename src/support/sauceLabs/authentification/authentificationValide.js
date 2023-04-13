import cliquerSur from '../../commun/action/cliquerSur';
import saisirTexte from '../../commun/action/saisirTexte';
import verifierUrlPage from '../../commun/verification/verifierUrlPage';
import verifierElementPresent from '../../commun/verification/verifierElementPresent';
/**
 * Authentification avec un compte valide
 */
export default async () => {

    const user = "standard_user"
    const motDePasse = "secret_sauce"

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
