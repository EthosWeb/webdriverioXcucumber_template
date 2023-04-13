import getUrl from '../../mapping/fonctions/url'
import attendreSecondes from '../navigation/attendreSecondes';

/**
 * verifier l'url de la page
 * @param  {String} titre - titre à vérifier
 */
export default async (titre) => {

    
        var titreActuel = await browser.getTitle()

        if (titreActuel != titre) {
            throw new Error("ERREUR - Le titre de la page actuel ( " + titreActuel + " )ne correspond pas a l'attendu ( " + titre + " )")
        }

};
