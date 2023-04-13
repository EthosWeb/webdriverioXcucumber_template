import getLocateur from '../../mapping/fonctions/locateurs';
import getUrl from '../../mapping/fonctions/url'

/**
 * Verifier la couleur de la bordure haute
 * @param  {String} locateur - element a verifier
 * @param  {String} couleur - url a verifier
 */
export default async (locateur, couleur) => {

        //Recuperation du locateur reel
        locateur = getLocateur(locateur)

        //Recuperation de la couleur
        switch (couleur) {
            case "Jaune":
                var couleurRGB = "rgb(255, 201, 40)"
                break;
            default:
                throw new Error("Erreur - La couleur " + couleur + " n'est pas definie")
                break;
        }

        const element = $(locateur)

        const couleurTexte = await (await element.getCSSProperty('border-top').value).toString()


        if (!couleurTexte.includes(couleurRGB)) {
            throw new Error("Erreur - Le texte " + locateur + " n'est pas de couleur " + couleur + "(observe : " + couleurTexte + ", attendu : " + couleurRGB + ")")
        }
    


};
