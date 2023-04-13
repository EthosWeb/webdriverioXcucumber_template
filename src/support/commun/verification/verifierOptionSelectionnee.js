import getLocateur from '../../mapping/fonctions/locateurs'

/**
 * verifier qu'une option est selectionne dans une liste
 *  * @param  {String} valeur - valeur a verifier
 * @param  {String} locateur - element a verifier
 */
export default async (valeur, locateur) => {

        //Recuperation du locateur reel
        locateur = getLocateur(locateur)

        const element = $(locateur)

        await expect(valeur).toBeSelected()
    
};
