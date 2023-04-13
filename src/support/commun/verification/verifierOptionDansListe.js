import getLocateur from '../../mapping/fonctions/locateurs'

/**
 * verifier qu'une option est selectionne dans une liste
 * @param  {String} locateur - element à vérifier
 * @param  {String} valeurs - valeur à vérifier
 */
export default async (locateur, valeurs) => {

        //Recuperation du locateur reel
        locateur = getLocateur(locateur)

        const element = $(locateur)
        const tab = valeurs.split(', ')

        for (var i = 0; i < tab.length; i++) {
            await expect(element).toHaveTextContaining(tab[i])
        }
    

};
