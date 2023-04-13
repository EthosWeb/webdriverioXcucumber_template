import getLocateur from '../../mapping/fonctions/locateurs'
/**
 * Attendre qu'un element soit visible
 * @param  {String} locateur - element a ettendre
 */
export default async (locateur) => {
    
        //Recuperation du locateur reel si alias donne

        locateur = getLocateur(locateur)

        const elem = await $(locateur)
        await elem.waitForDisplayed({
            timeout: 60000
        });
    
    
};
