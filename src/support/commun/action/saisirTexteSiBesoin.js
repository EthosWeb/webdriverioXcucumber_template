import getLocateur from '../../mapping/fonctions/locateurs'
import saisirTexte from './saisirTexte';
/**
 * Saisir un texte si besoin
 * @param  {String} texteASaisir - texte a saisir dans l'element
 * @param  {String} locateur - locateur de l'element dans lequel saisir
 */
 export default async (texteASaisir, locateur) => {

        
        //Recuperation du locateur reel si alias donne

        locateur = getLocateur(locateur)

        await browser.pause(500)

        //Recuperation de l'element
        const element = await $(locateur)

        try {
            //Si l'element est visible uniquement
            if (await element.isDisplayed()) {
                await saisirTexte(texteASaisir, locateur)
            }
        } catch (StaleElementException) {

        }
    
};
