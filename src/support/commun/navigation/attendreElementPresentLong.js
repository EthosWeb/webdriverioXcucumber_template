import getLocateur from '../../mapping/fonctions/locateurs'
/**
 * Attendre qu'un element soit present
 * @param  {String} locateur - element a ettendre
 */
export default async (locateur) => {

    

    //Recuperation du locateur reel si alias donne

    locateur = getLocateur(locateur)


    const elem = $(locateur)
    await elem.waitForExist({
        timeout: 120000
    });


};
