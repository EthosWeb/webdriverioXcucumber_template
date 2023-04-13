import getLocateur from '../../mapping/fonctions/locateurs';
import getUrl from '../../mapping/fonctions/url'

/**
 * Verifier la couleur de la bordure
 * @param  {String} locateur - element a verifier
 * @param  {String} couleur - url a verifier
 */
export default async (locateur, texte) => {

    if ((browser.getCookies(['paiement'])).value == undefined) {
        //Recuperation du locateur reel
        locateur = getLocateur(locateur)

    

        const element = $(locateur)

        const placeHolder = (element.getCSSProperty('placeholder').value).toString()


        if (!placeHolder.includes(texte)) {
            throw new Error("Erreur - Le placeholder de " + locateur + " n'est pas " + texte + "(observe : " + placeHolder + ", attendu : " + texte + ")")
    }
    }


};
