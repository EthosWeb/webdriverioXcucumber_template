import getLocateur from '../../mapping/fonctions/locateurs';
import getUrl from '../../mapping/fonctions/url'

/**
 * verifier la cible d'un lien
 * @param  {String} locateur - element a verifier
 * @param  {String} url - url a verifier
 */
export default async (locateur, url) => {

        //Recuperation du locateur reel
        var locateur2 = getLocateur(locateur)

        //Recuperation de l'url reel
        url = getUrl(url)

        const element = $(locateur2)

        var cible = await element.getAttribute('href')
        if (cible == undefined ||cible =='') {
                throw new Error("ERREUR - Le lien " + locateur + " n'a pas de cible")
        }
        else {
                cible = cible.toString()

                if (!cible.includes(url)) {
                        throw new Error("ERREUR - La cible du lien ne contient pas '" + url + "' (observe : '" + cible + "')")
                }
        }



};
