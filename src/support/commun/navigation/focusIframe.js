import getLocateur from '../../mapping/fonctions/locateurs'
import attendreSecondes from './attendreSecondes';
/**
 * Mettre le focus sur un iframe
 * @param  {String} locateur - locateur de l'iframe sur lequel mettre le focus
 */
export default async (locateur) => {


    //Recuperation du locateur reel si alias donne

    locateur = getLocateur(locateur)


    await browser.pause(1500)

    //Recuperation de l'element
    const element = await $(locateur)

    await element.waitForExist({
        timeout: 10000
    });
    await element.waitForDisplayed({
        timeout: 10000
    });

    try {
        await browser.switchToFrame(element);
    }
    catch {
        try {
            await attendreSecondes(2)
            await browser.switchToFrame(element);
        }
        catch {
        }
    }


};
