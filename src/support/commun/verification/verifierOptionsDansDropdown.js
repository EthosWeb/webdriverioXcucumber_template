import getLocateur from '../../mapping/fonctions/locateurs'

/**
 * verifier qu'une option est selectionne dans une liste
 * @param  {String} locateur - element à vérifier
 * @param  {String} valeurs - valeur à vérifier
 */
 export default async (locateur, valeurs) => {

        
        //Recuperation du locateur reel
        locateur = getLocateur(locateur)
        var i = 1
        const tab = valeurs.split(', ')

        for (i = 1; i <= tab.length; i++) {
            const element = await $(locateur+"["+i+"]")
            i--
            await expect(element).toHaveTextContaining(tab[i])
           i++
        }

};
