import getLocateur from '../../mapping/fonctions/locateurs'
/**
 * verifier que element ne contient pas le texte attendu
 * @param  {String} locateur - element a verifier
 * @param  {String} texte - texte a verifier
 */
export default async (locateur, texte) => {

        //Recuperation du locateur reel
        locateur = getLocateur(locateur)

        const element = $(locateur)

        await expect(element).not.toHaveTextContaining(texte)
    
};
