import getLocateur from '../../mapping/fonctions/locateurs'

/**
 * verifier que element est cliquable
 * @param  {String} locateur - element a verifier
 */
export default async (locateur) => {
        //Recuperation du locateur reel
        locateur = getLocateur(locateur)

        const element = $(locateur)

        await expect(element).toBeClickable()
    
};
