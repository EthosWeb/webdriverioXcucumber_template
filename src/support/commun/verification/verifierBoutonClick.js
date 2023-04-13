import getLocateur from '../../mapping/fonctions/locateurs'

/**
 * verifier que element n'est pas vide
 * @param  {String} locateur - element a verifier
 */
 export default async (locateur) => {

        
        //Recuperation du locateur reel
        locateur = getLocateur(locateur)

        var element = $(locateur)

            await expect(element).not.toHaveAttribute('disabled') && await expect(element).not.toHaveElementClassContaining("disabled") && await expect(element).toBeClickable()
        
    };