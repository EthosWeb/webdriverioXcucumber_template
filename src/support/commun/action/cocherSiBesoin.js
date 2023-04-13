import getLocateur from '../../mapping/fonctions/locateurs'
import cliquerSur from './cliquerSur';

/**
 * Cliquer sur un locateur
 * @param  {String} locateur - locateur de l'element sur lequel cliquer
 */
 export default async (locateur) => {

        
        //Recuperation du locateur reel si alias donne

        locateur = getLocateur(locateur)

        await browser.pause(2500)

        //Recuperation de l'element
        const element = await $(locateur)

        try {
            //Si l'element est visible uniquement
            if (await element.isExisting()) {
                // Clic sur l'element

                await cliquerSur(locateur)
            }
        } catch (StaleElementException) {
            try {
                //Si l'element est visible uniquement
                if (await element.isExisting()) {
                    // Clic sur l'element

                    await cliquerSur(locateur)
                }
            } catch (StaleElementException) {
            }
        }
    
};
