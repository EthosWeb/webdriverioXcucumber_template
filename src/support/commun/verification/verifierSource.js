import getLocateur from '../../mapping/fonctions/locateurs';
import getUrl from '../../mapping/fonctions/url'

/**
 * verifier la source d'une image
 * @param  {String} locateur - element a verifier
 * @param  {String} source - url a verifier
 */
export default async (locateur, source) => {

        //Recuperation du locateur reel
        locateur = getLocateur(locateur)


        const element = $(locateur)

        const sourceImg = (await element.getProperty("src")).toString()

        if (!sourceImg.includes(source)) {
            throw new Error("Erreur - La source de l'image observee (" + sourceImg + ") ne correspond pas a l'attendu (" + source + ")")
        }
    


};
