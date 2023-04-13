import getLocateur from '../../mapping/fonctions/locateurs'
import attendreSecondes from '../navigation/attendreSecondes';
import cliquerSur from './cliquerSur';

/**
 * Cliquer sur un locateur
 * @param  {String} locateur - locateur de l'element sur lequel cliquer
 */
export default async (locateur) => {
    
        //Recuperation du locateur reel si alias donne

        locateur = getLocateur(locateur)

        await attendreSecondes(2)

        //Recuperation de l'element
        const element = await $(locateur)

        if (await element.isExisting()) {
            await cliquerSur(locateur)
        }
        else {

            await attendreSecondes(2)
            if (await element.isExisting()) {
                await cliquerSur(locateur)
            }
        }
    

};
