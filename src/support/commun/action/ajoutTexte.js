import getLocateur from '../../mapping/fonctions/locateurs'
import taperTouche from './taperTouche';
/**
 * Saisir un texte (ajout))
 * @param  {String} texteASaisir - texte a saisir dans l'element
 * @param  {String} locateur - locateur de l'element dans lequel saisir
 */
 export default async (texteASaisir, locateur) => {

    
    //Recuperation du locateur reel si alias donne

    locateur = getLocateur(locateur)


    await $(locateur).waitForExist({
        timeout: 10000
    });

    await browser.pause(250)

    //Recuperation de l'element
    const element = await $(locateur)

    try {
        //Saisie du texte dans l'element
        await element.click()
        await taperTouche(texteASaisir)

    } catch (StaleElementException) {
        try {
            //Saisie du texte dans l'element
            await element.click()
            await taperTouche(texteASaisir)

        } catch (StaleElementException) {
            try {
                //Saisie du texte dans l'element
                await element.click()
                await taperTouche(texteASaisir)

            } catch (StaleElementException) {
            }
        }
    }

};
