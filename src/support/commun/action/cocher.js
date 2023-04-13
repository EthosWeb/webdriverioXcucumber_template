import getLocateur from '../../mapping/fonctions/locateurs'
/**
 * Cocher un element
 * @param  {String} locateur - locateur de l'element a cocher
 */
 export default async (locateur) => {
    
        //Recuperation du locateur reel si alias donne

        locateur = getLocateur(locateur)


        await browser.pause(500)

        await $(locateur).waitForExist({
            timeout: 10000
        });

        //Recuperation de l'element
        const element = await $(locateur)

        try {
            //Si l'element est visible
            if (await element.isDisplayedInViewport()) {
                // Coche de l'element
                await element.click()
            }
            //Si l'element n'est pas visible 
            else {
                //Coche en JS
                var runInBrowser = async function (argument) {
                    await argument.click();
                };
                await browser.execute(runInBrowser, element);


            }
        } catch (StaleElementException) {
            //Si l'element est visible
            if (await element.isDisplayedInViewport()) {
                // Coche de l'element
                await element.click()
            }
            //Si l'element n'est pas visible 
            else {
                //Coche en JS
                var runInBrowser = async function (argument) {
                    await argument.click();
                };
                await browser.execute(runInBrowser, element);
            }
        }
    
};
