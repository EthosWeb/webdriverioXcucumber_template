import getLocateur from '../../mapping/fonctions/locateurs'
import attendreSecondes from '../navigation/attendreSecondes';
import perdreFocusElement from '../navigation/perdreFocusElement';
import cliquerSur from './cliquerSur';
import taperTouche from './taperTouche';
/**
 * Saisir un texte lentement
 * @param  {String} texteASaisir - texte a saisir dans l'element
 * @param  {String} locateur - locateur de l'element dans lequel saisir
 */
export default async (texteASaisir, locateur) => {
    
    //Recuperation du locateur reel si alias donne

    locateur = getLocateur(locateur)


    await $(locateur).waitForExist({
        timeout: 10000
    });

    await browser.pause(150)

    //Recuperation de l'element
    const element = $(locateur)

    try {
        //Saisie du texte dans l'element
        await element.click()
        for (var char = 0; char < texteASaisir.length; char++) {
            await taperTouche(texteASaisir.charAt(char))
            await taperTouche('ArrowRight')
        }

    } catch (e) {
        console.log(e)
    }
    
};
