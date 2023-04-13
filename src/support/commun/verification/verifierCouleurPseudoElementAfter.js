import getLocateur from '../../mapping/fonctions/locateurs';
import getUrl from '../../mapping/fonctions/url'

/**
 * verifier la cible d'un lien
 * @param  {String} locateur - element a verifier
 * @param  {String} couleur - url a verifier
 */
 export default async (locateur, couleur) => {

        

        var locateurT = getLocateur(locateur)
        //Recuperation du  pseudo element before to check animation after it happened. Locateur en css selector seulement
        var contentMode = await browser.execute(([locateurT]) => {
            var style =document.defaultView.getComputedStyle(document.querySelector(locateurT), '::after');
            return style.getPropertyValue('background-color')
        }, [locateurT]);

        switch (couleur) {
            case "Rouge":
                var couleurRGB = "rgb(255, 0, 0)"
                break;
            case "Orange":
                var couleurRGB = "rgb(238, 114, 3)"
                break;
            case "Noir":
                var couleurRGB = "rgb(60, 60, 59)"
                break;
            case "Vert":
                var couleurRGB = "rgb(11, 124, 41)"
                break;
            case "Jaune":
                var couleurRGB = "rgb(255, 201, 5)"
                break;
            case "Gris":
                var couleurRGB = "rgb(76, 76, 76)"
                break;
            default:
                throw new Error("Erreur - La couleur " + couleur + " n'est pas definie")
        }

        if (contentMode != couleurRGB) {
            throw new Error("Erreur - L'Element'" + locateur + " n'est pas de couleur " + couleur + "(observe : " + contentMode + ", attendu : " + couleurRGB + ")")
        }


};
