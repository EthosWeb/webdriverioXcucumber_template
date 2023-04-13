import getLocateur from '../../mapping/fonctions/locateurs'
/**
 * Attendre qu'un element ne soit plus present
 * @param  {String} locateur - element a attendre
 */
export default async (locateur) => {
    
        //Recuperation du locateur reel si alias donne

        locateur = getLocateur(locateur)

        const elem = await $(locateur)
        await elem.waitForExist({
            reverse: true,
            timeout: 60000
        });
};
