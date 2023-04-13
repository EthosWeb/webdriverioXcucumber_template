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
        var valueElement = 0
        valueElement = await Number(element.getValue())
        const myValue = Number(valeur)
        
        await expect(valueElement).toBeLessThan(myValue);
    
};
