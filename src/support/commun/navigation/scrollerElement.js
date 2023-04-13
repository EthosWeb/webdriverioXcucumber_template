import getLocateur from '../../mapping/fonctions/locateurs'

/**
 * Scroller jusqu'a l'element
 * @param  {String} locateur - element vers lequel scroller
 */
export default async (locateur) => {
        //Recuperation du locateur reel si alias donne

        locateur = getLocateur(locateur)

        await $(locateur).waitForExist({
            timeout: 10000
        });

        //Recuperation de l'element
        const element = $(locateur)

        try {

            await element.scrollIntoView();

        }
        catch (e) {
            try {

                await element.scrollIntoView();

            }
            catch (e) {
                throw new Error("ERREUR - Scroll impossible : "+e)
            }
        }
    
    

};
