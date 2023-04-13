import getLocateur from '../../mapping/fonctions/locateurs';
import getUrl from '../../mapping/fonctions/url'

/**
 * Verifier la couleur de la bordure
 * @param  {String} locateur - element a verifier
 * @param  {String} couleur - url a verifier
 */
export default async (locateur1, locateur2) => {

    if ((browser.getCookies(['paiement'])).value == undefined) {
        //Recuperation du locateur reel
        locateur1 = getLocateur(locateur1)
        locateur2 = getLocateur(locateur2)

        //Recuperation de la couleur

        const element1 = $(locateur1)
        const element2 = $(locateur2)

        const positionHorizontaleElement1 = element1.getLocation('x')
        const positionHorizontaleElement2 = element2.getLocation('x')

        //console.log(positionHorizontaleElement1)
        //console.log(positionHorizontaleElement2)


        if (positionHorizontaleElement1 > positionHorizontaleElement2) {
            throw new Error("Erreur - L'Element' " + locateur1 + " n'est pas à gauche de l'élément "+locateur2)
        }
    }


};
