import getLocateur from '../../mapping/fonctions/locateurs';

/**
 * verifier si l'element est surligner
 * @param {String} locateur - element a verifier
 */
 export default async (locateur) => {
        
        //Recuperation du locateur reel
        locateur = getLocateur(locateur)

        const element = await $(locateur)
        const caracteristiqueText = (await element.getCSSProperty('text-decoration-line').value).toString()

        if (caracteristiqueText != "line-through") {
            throw new Error("Erreur - L'element " + locateur + " n'est pas surligne")
        }

};