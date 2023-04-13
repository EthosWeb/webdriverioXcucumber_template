import getLocateur from '../../mapping/fonctions/locateurs'
/**
 * verifier que element n'est pas vide
 * @param  {String} locateur - element a verifier
 */
export default async (locateur) => {

        //Recuperation du locateur reel
        locateur = getLocateur(locateur)

        const element = $(locateur)
        const texte = await element.getText()
        const valeur = await element.getValue()

        if (texte == '' && valeur == '') {
            throw new Error("Erreur - L'element " + locateur + " est vide")
        }
    
};
