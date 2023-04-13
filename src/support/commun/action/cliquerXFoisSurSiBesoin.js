import attendreSecondes from '../navigation/attendreSecondes';
import getLocateur from '../../mapping/fonctions/locateurs'
import cliquerSur from './cliquerSur';
import cliquerSurSiBesoin from './cliquerSurSiBesoin';

/**
 * Cliquer sur un locateur
 * @param  {String} nombreClics - nombre de clics a effectuer
 * @param  {String} locateur - locateur de l'element a cocher
 */
 export default async (nombreClics, locateur) => {
    
    //Recuperation du locateur reel si alias donne

    locateur = getLocateur(locateur)

    await $(locateur).waitForExist({
        timeout: 10000
    });


    for (var i = 0; i < nombreClics; i++) {

        await cliquerSurSiBesoin(locateur)
        await attendreSecondes(2)

    }

};
