import getLocateur from '../../mapping/fonctions/locateurs'
/**
 * verifier que la taille d'une liste est supérieur à un nombre
 * @param  {String} locateur - element a verifier
 * @param  {String} valeur - valeur a verifier
 */
 export default async (locateur, valeur) => {

        
        //Recuperation du locateur reel
        locateur = getLocateur(locateur)

        const tabElement = await $$(locateur)

        const myValue = Number(valeur)
        
        await expect(tabElement.length).toBeGreaterThan(myValue);
    
};