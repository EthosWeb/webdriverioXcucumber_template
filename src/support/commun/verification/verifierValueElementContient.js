import getLocateur from '../../mapping/fonctions/locateurs'
/**
 * verifier que element contient la valeur attendue
 * @param  {String} locateur - element a verifier
 * @param  {String} valeur - valeur a verifier
 */
 export default async (locateur, valeur) => {

        
        //Recuperation du locateur reel
        locateur = getLocateur(locateur)

        const element = await $(locateur)
        //var valueElement = element.getValue()
        const myValue = valeur
        
        await expect(element).toHaveValueContaining(myValue);
    
};