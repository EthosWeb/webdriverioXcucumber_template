import getLocateur from '../../mapping/fonctions/locateurs'
/**
 * verifier que element n'est pas visible
 * @param  {String} locateur - element a verifier
 */
 export default async (locateur, visibility) => {

        
        //Recuperation du locateur reel
        locateur = getLocateur(locateur)

        const element = await $(locateur)

        const overflowValue = (await element.getCSSProperty('overflow').value).toString()

        if (overflowValue != visibility) {
            throw new Error("Erreur - L'element " + locateur + " est visible. CSS observe : " + overflowValue + ", attendu : "+visibility+")")
        }
    
};
