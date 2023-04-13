import getLocateur from '../../mapping/fonctions/locateurs'
/**
 * verifier que element ne contient pas la valeur attendue
 * @param  {String} locateur - element a verifier
 * @param  {String} valeur - valeur a verifier
 */
 export default async (locateur, valeur) => {

        
        //Recuperation du locateur reel
        locateur = getLocateur(locateur)

        const element = await $(locateur)

        await expect(element).not.toHaveValueContaining(valeur)
    
};
