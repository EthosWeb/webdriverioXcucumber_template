import getLocateur from '../../mapping/fonctions/locateurs';
import getUrl from '../../mapping/fonctions/url'

/**
 * Verifier la couleur de la bordure
 * @param  {String} locateur - element a verifier
 * @param  {String} couleur - url a verifier
 */
export default async (locateur, couleur) => {

    if ((browser.getCookies(['paiement'])).value == undefined) {
        //Recuperation du locateur reel
        locateur = getLocateur(locateur)

        //Recuperation de la couleur
        switch (couleur) {
            case "Bleu":
                var couleurRGB = "rgb(32, 69, 143)"
                var couleurRGB2 = "rgb(32, 69, 143)"
                break;
            case "Rouge":
                var couleurRGB = "rgb(217,83,79)"
                var couleurRGB2 = "rgb(217, 83, 79)"
                break;
            case "Violet":
                var couleurRGB = "rgb(146, 0, 77)"
                var couleurRGB2 = "rgb(217, 83, 79)"
                break;
            case "Jaune":
                var couleurRGB = "rgb(255, 201, 40)"
                break;
            default:
                throw new Error("Erreur - La couleur " + couleur + " n'est pas definie")
                break;
        }

        const element = $(locateur)

        const couleurTexte = (element.getCSSProperty('border-color').value).toString()


        if (!couleurTexte.includes(couleurRGB) && !couleurTexte.includes(couleurRGB2)) {
            throw new Error("Erreur - La bordure " + locateur + " n'est pas de couleur " + couleur + "(observe : " + couleurTexte + ", attendu : " + couleurRGB + ")")
    }
    }


};
