import getLocateur from '../../mapping/fonctions/locateurs';
import getUrl from '../../mapping/fonctions/url'

/**
 * Verifie la couleur du texte
 * @param  {String} locateur - element a verifier
 * @param  {String} couleur - url a verifier
 */
export default async (locateur, couleur) => {

        //Recuperation du locateur reel
        locateur = getLocateur(locateur)

        //Recuperation de la couleur
        switch (couleur) {
            case "Rouge":
                var couleurRGB = "rgb(255,0,0)"
                var couleurRGB2 = "rgb(153,7,5)"
                var couleurRGB3 = "rgb(238,43,11)"
                var couleurRGB4 = "rgb(174,27,2)"
                break;
            case "Orange":
                var couleurRGB = "rgb(238,114,3)"
                var couleurRGB2 = "rgb(238,114,3)"
                var couleurRGB3 = "rgb(238,114,3)"
                break;
            case "Noir":
                var couleurRGB = "rgb(60,60,59)"
                var couleurRGB2 = "rgb(60,60,60)"
                var couleurRGB3 = "rgb(60,60,59)"
                break;
            case "Blanc":
                var couleurRGB = "rgba(16,16,16,0.3)"
                var couleurRGB2 = "rgba(16,16,16,0.3)"
                var couleurRGB3 = "rgba(16,16,16,0.3)"
                break;
            case "Gris":
                var couleurRGB = "rgb(235,235,235)"
                var couleurRGB2 = "rgb(235,235,235)0,59)"
                var couleurRGB3 = "rgb(235,235,235)"
                break;
            case "Vert fonce":
                var couleurRGB = "rgb(0,128,0)"
                var couleurRGB2 = "rgb(102,170,93)"
                var couleurRGB3 = "rgb(0,128,0)"
                break
                case "Bleu":
                    var couleurRGB = "rgb(15,98,254)"
                    break
            default:
                throw new Error("Erreur - La couleur " + couleur + " n'est pas definie")
                break;
        }

        const element = $(locateur)

        let couleurTexte = await element.getCSSProperty('color')
        couleurTexte = couleurTexte.value.toString()

        if (couleurTexte != couleurRGB && couleurTexte != couleurRGB2 && couleurTexte != couleurRGB3 && couleurTexte != couleurRGB4) {
            throw new Error("Erreur - Le texte " + locateur + " n'est pas de couleur " + couleur + "(observe : " + couleurTexte + ", attendu : " + couleurRGB + ")")
        }
    


};
