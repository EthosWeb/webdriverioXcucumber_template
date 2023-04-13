import cliquerSur from '../../commun/action/cliquerSur';
import saisirTexte from '../../commun/action/saisirTexte';
import verifierUrlPage from '../../commun/verification/verifierUrlPage';
import verifierElementPresent from '../../commun/verification/verifierElementPresent';
import attendreSecondes from '../../commun/navigation/attendreSecondes';
/**
 * Authentification avec un user et un mot de passe
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


};
