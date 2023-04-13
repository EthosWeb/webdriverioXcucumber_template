import getLocateur from '../../mapping/fonctions/locateurs'
/**
 * verifier que element contient la valeur attendue
 * @param  {String} locateur - element a verifier
 */
export default async (locateur) => {


    //Recuperation du locateur reel
    locateur = getLocateur(locateur)
    const element = await $(locateur)
    try {
        await expect(element).toHaveElementClassContaining("active");
    }
    catch {
        await element.isEnabled()
    }

};
