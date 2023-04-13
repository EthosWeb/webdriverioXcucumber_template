import getLocateur from '../../mapping/fonctions/locateurs';
import getUrl from '../../mapping/fonctions/url'
import cliquerSur from '../action/cliquerSur';
import attendreSecondes from '../navigation/attendreSecondes';

/**
 * verifier la cible d'un lien
 * @param  {String} locateur - element a verifier
 * @param  {String} couleur - url a verifier
 */
 export default async (locateur, couleur) => {
        
        //Recuperation du locateur reel
        var locateurT = getLocateur(locateur)

        //Recuperation de la couleur
        switch (couleur) {
            case "Rouge":
                var couleurRGB = "rgb(255, 0, 0)"
                break;
            case "Orange":
                var couleurRGB = "rgb(238, 114, 3)"
                break;
            case "Jaune Orange":
                var couleurRGB = "rgb(255, 245, 204)"
                break;
            case "Noir":
                var couleurRGB = "rgb(60, 60, 59)"
                break;
            case "Gris Clair":
                var couleurRGB = "rgb(247, 247, 247)"
                break;
            case "Bleu":
                var couleurRGB = "rgb(109, 157, 247)"
                break;
            case "Vert":
                var couleurRGB = "rgb(11, 124, 41)"
                break;
            case "Vert Cyan":
                var couleurRGB = "rgb(218, 241, 228)"
                break;
            case "Rose":
                var couleurRGB = "rgb(255, 236, 242)"
                break;
            case "Jaune":
                var couleurRGB = "rgb(60, 60, 60)"
                break;
            default:
                throw new Error("Erreur - La couleur " + couleur + " n'est pas definie")
                break;
        }

        const element = $(locateurT)

             
             if (await element.isDisplayedInViewport()) {
                // Clic sur l'element
                //browser.keys('Control')
                await element.click()
            }
            else {
               

                // Clic sur l'element en JS
                browser.keys('Control')
                var runInBrowser = async function (argument) {
                    await argument.click();
                };
                await browser.execute(runInBrowser, element);
            }

            await attendreSecondes('5')


                //Recuperation du  pseudo element before to check animation after it happened. Locateur en css selector seulement
                var contentMode = await browser.execute(([locateurT]) => {
                    var style =document.defaultView.getComputedStyle(document.querySelector(locateurT), '::focus');
                    return style.getPropertyValue('outline-color')
                }, [locateurT]);

        // const couleurTexte = (element.getCSSProperty('outline-color').value).toString()

        if (contentMode != couleurRGB) {
            throw new Error("Erreur - L'Encadrement focus sur " + locateurT + " n'est pas de couleur " + couleur + "(observe : " + contentMode + ", attendu : " + couleurRGB + ")")
        }


};
