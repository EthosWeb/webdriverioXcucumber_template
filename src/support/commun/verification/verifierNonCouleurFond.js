import getLocateur from '../../mapping/fonctions/locateurs';
import getUrl from '../../mapping/fonctions/url'

/**
 * Verifier la couleur de fond
 * @param  {String} locateur - element a verifier
 * @param  {String} couleur - url a verifier
 */
export default async (locateur, couleur) => {

    //Recuperation du locateur reel
    locateur = getLocateur(locateur)

    //Recuperation de la couleur
    switch (couleur) {
        case "Rouge":
            var couleurRGB = "rgb(255, 0, 0)"
            break;
        case "Orange":
            var couleurRGB = "rgb(238,114,3)"
            break;
        case "Noir":
            var couleurRGB = "rgb(60,60,59)"
            break;
        case "Bleu":
            var couleurRGB = "rgb(32, 69, 143)"
            break;
        case "Rose":
            var couleurRGB = "rgb(245, 202, 203)"
            break;
        case "Vert clair":
            var couleurRGB = "rgb(198, 241, 192)"
            break;
        case "Violette":
            var couleurRGB = "rgb(148, 0, 77)"
            break;
        default:
            throw new Error("Erreur - La couleur " + couleur + " n'est pas definie")
    }

    const element = $(locateur)

    let couleurTexte = await element.getCSSProperty('background')
    couleurTexte = couleurTexte.value.toString()


    if (couleurTexte.includes(couleurRGB)) {
        throw new Error("Erreur - Le texte " + locateur + " n'est pas de couleur " + couleur + "(observe : " + couleurTexte + ", attendu : " + couleurRGB + ")")
    }



};
