import getLocateur from '../../mapping/fonctions/locateurs'
/**
 * verifier que element est vide
 * @param  {String} locateur - element a verifier
 */
 export default async (locateur) => {

        
        //Recuperation du locateur reel
        locateur = getLocateur(locateur)

        const element = await $(locateur)
        const texte = await element.getText()

        if (texte != '' || texte.length != 0) {
            throw new Error("Erreur - Le texte de l'element " + locateur + " n'est pas vide")
        }

};
