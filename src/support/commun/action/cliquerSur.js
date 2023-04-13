import getLocateur from '../../mapping/fonctions/locateurs'
import scrollerElement from '../navigation/scrollerElement';
import attendreSecondes from '../navigation/attendreSecondes';
import actualiserPage from '../navigation/actualiserPage';
import cliquerJQuerySur from './cliquerJQuerySur';
import logInfo from '../navigateur/logInfo'
import accepterBandeaux from '../navigation/accepterBandeaux';

/**
 * Cliquer sur un locateur
 * @param  {String} locateur - locateur de l'element a cocher
 */
export default async (locateur) => {

    

        const urlInitiale = await browser.getUrl()
        //Recuperation du locateur reel si alias donne

        await accepterBandeaux()

        var locateur2 = getLocateur(locateur)

        await $(locateur2).waitForExist({
            timeout: 10000
        });

        //Recuperation de l'element
        var element = $(locateur2)

        await attendreSecondes(1)

        try {
            await browser.execute("document.querySelector('" + locateur2 + "').click()")

        }
        catch {
            try {
                await attendreSecondes(1)
                await element.click()
            }
            catch {
                try {
                    await attendreSecondes(1)
                    await element.click()
                }
                catch (error) {
                    await attendreSecondes(3)
                    var elementFin = $(locateur2)
                    if (element == elementFin) {
                        throw new Error("ERREUR - Le clic sur " + locateur + " n'a pas pu etre effectue")
                    }
                    else {
                        console.log("ERREUR au clic sur " + locateur)
                    }
                }
            }
        }
    


};