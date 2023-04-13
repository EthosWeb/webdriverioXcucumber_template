import cliquerSur from '../../commun/action/cliquerSur';
import saisirTexte from '../../commun/action/saisirTexte';
import verifierUrlPage from '../../commun/verification/verifierUrlPage';
import verifierElementNonPresent from '../../commun/verification/verifierElementNonPresent';
import verifierPageContientTexte from '../../commun/verification/verifierPageContientTexte';
/**
 * Authentification avec un compte invalide
 */
export default async () => {

    const user = "fake_user"
    const motDePasse = "secret_sauce"

    // Saisie du username
    await saisirTexte(user, "Username")

    // Saisie du mot de Passe
    await saisirTexte(motDePasse, "Password")

    // Clic sur Login
    await cliquerSur("Login")

    // Verification du blocage a l'etape authentification avec le message d'erreur
    await verifierUrlPage("Test Authentification")
    await verifierElementNonPresent("Produits")
    await verifierPageContientTexte("Username and password do not match any user in this service")

};
