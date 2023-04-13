import getLocateur from '../../mapping/fonctions/locateurs'
import attendreElementVisible from '../navigation/attendreElementVisible';
import attendreSecondes from '../navigation/attendreSecondes';
import focusIframe from '../navigation/focusIframe';
import saisirTexteLentement from './saisirTexteLentement';

/**
 * Clear a given input field (placeholder for WDIO's clearElement)
 * @param  {String}   selector Element selector
 */
export default async (locateur, value) => {
    
    locateur = getLocateur(locateur)

    const element = $(locateur)
    await attendreElementVisible(locateur)
    await attendreSecondes(1)
    await focusIframe(locateur)
    await attendreSecondes(1)
    for (var i = 0; i < value.length; i++) {
        element.click({ x: 15 });
        browser.keys("Backspace");
        await attendreSecondes(0.2)
    }
    await attendreSecondes(1)
    
};
