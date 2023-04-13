import getLocateur from '../../mapping/fonctions/locateurs'

/**
 * Cliquer sur un locateur
 * @param  {String} locateur - locateur de l'element a cocher
 */
 export default async (locateur) => {

    //Recuperation du locateur reel si alias donne
    
    locateur = getLocateur(locateur)

    await $(locateur).waitForExist({
        timeout: 10000
    });

    //Recuperation de l'element
    const element = await $(locateur)
    await element.doubleClick()

};
