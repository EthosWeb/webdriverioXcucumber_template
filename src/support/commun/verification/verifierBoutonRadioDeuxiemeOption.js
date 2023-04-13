import getLocateur from '../../mapping/fonctions/locateurs'

/**
 * verifier que element n'est pas vide
 * @param  {String} locateur - element a verifier
 */
 export default async (locateur) => {

        
        //Recuperation du locateur reel
        locateur = getLocateur(locateur)
        const element = await $(locateur)
        try{
            await expect(element).toHaveAttrContaining('class', 'defaultRight')
        }
        catch{
            await expect(element).toHaveAttrContaining('class', 'checkedRight')
        }
    
    };