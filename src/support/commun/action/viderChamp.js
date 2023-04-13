import getLocateur from '../../mapping/fonctions/locateurs'
import attendreSecondes from '../navigation/attendreSecondes';
import perdreFocusElement from '../navigation/perdreFocusElement'
/**
 * Clear a given input field (placeholder for WDIO's clearElement)
 * @param  {String}   selector Element selector
 */
export default async (locateur) => {
    
        //Recuperation du locateur reel
        locateur = getLocateur(locateur)

        await $(locateur).waitForExist({
            timeout: 10000
        });

        //Recuperation de l'element
        const element = $(locateur)

        await element.clearValue();

        await attendreSecondes(1)
        await perdreFocusElement(element)
        await attendreSecondes(1)

};
