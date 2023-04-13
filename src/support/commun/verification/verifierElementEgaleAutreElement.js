import getLocateur from '../../mapping/fonctions/locateurs';
import getUrl from '../../mapping/fonctions/url'

/**
 * Verifier l'egalite entre 2 elements
 * @param  {String} locateur1 - element a verifier
 * @param  {String} element2 - element a verifier
 */
export default async (locateur1, locateur2) => {

    if ((browser.getCookies(['paiement'])).value == undefined) {
        //Recuperation du locateur reel
        locateur1 = getLocateur(locateur1)
        locateur2 = getLocateur(locateur2)

        //Recuperation de la couleur

        const element1 = $(locateur1)
        const element2 = $(locateur2)

        const texte1 = element1.getText().replace(/\r?\n/g, " ");
        const texte2 = element2.getText().replace(/\r?\n/g, " ");


        if (texte1 !== texte2) {
            throw new Error("Erreur - L'Element' " + locateur1 + " n'est pas égale à l'élément "+locateur2)
        }
    }


};
