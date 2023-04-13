import getLocateur from '../../mapping/fonctions/locateurs'
import scrollerElement from '../navigation/scrollerElement';
import attendreSecondes from '../navigation/attendreSecondes';
import actualiserPage from '../navigation/actualiserPage';
import accepterBandeaux from '../navigation/accepterBandeaux';

/**
 * Cliquer sur un locateur en JQuery
 * @param  {String} locateur - locateur de l'element a cocher
 */
export default async (locateur) => {

    
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
        catch (e1) {
            //console.log("e1\n" + e1)
            try {
                await browser.execute('document.querySelector("' + locateur2 + '").click()')
            }
            catch (e2) {
                console.log("e2\n" + e2)
                try {
                    await browser.execute('document.querySelector("' + locateur2 + '").click()')
                }
                catch (error) {
                    throw new Error("ERREUR - Le clic sur " + locateur + " n'a pas pu etre effectue \n" + error)
                }
            }
        }


};