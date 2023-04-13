import getLocateur from '../../mapping/fonctions/locateurs'
/**
 * verifier que element contient le placeholder attendu
 * @param  {String} locateur - element a verifier
 * @param  {String} texte - texte a verifier
 */
 export default async (locateur, texte) => {

        
        //Recuperation du locateur reel
        locateur = getLocateur(locateur)
        const element = await $(locateur)
        await expect(element).toHaveAttributeContaining('placeholder', texte)
    
};
