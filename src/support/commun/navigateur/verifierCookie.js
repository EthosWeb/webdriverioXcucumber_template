import cliquerSurSiBesoin from "../action/cliquerSurSiBesoin";
import getUrl from '../../mapping/fonctions/url'

/**
 * Verifie la valeur d'un cookie
 * @param  {String} cookie - cookie a verifier
 * @param  {String} valeur - valeur attendue
 * 
 */
export default async (cookie, valeur) => {

    const valcookie = browser.getCookies([cookie])[0].value

    if (!valcookie.includes(valeur)) {
        throw new Error("ERREUR - La valeur du cookie (" + valcookie + ") ne contient pas l'attendu (" + valeur + ")")
    }

};
