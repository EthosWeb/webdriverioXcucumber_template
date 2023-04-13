import getLocateur from '../../mapping/fonctions/locateurs';
import getUrl from '../../mapping/fonctions/url'

/**
 * verifier que les 3 visuels mid panier sont differents
 */
 export default async (locateur1, locateur2) => {

        

        locateur1 = getLocateur(locateur1)
        locateur2 = getLocateur(locateur2)


        //Recuperation du locateur reel
        var visuel1 = await $(locateur1).getAttribute('src')
        var visuel2 = await $(locateur2).getAttribute('src')

        if (visuel1 !== visuel2) {
            throw new Error("Erreur, les visuels ne sont pas identiques")
        }


};
