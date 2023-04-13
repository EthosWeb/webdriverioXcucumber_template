import getLocateur from '../../mapping/fonctions/locateurs'
import focusIframe from '../navigation/focusIframe';
import perdreFocus from '../navigation/perdreFocus';
/**
 * Saisir un texte dans un iframe
 * @param  {String} texteASaisir - texte a saisir dans l'element
 * @param  {String} locateur - locateur de l'element dans lequel saisir
 * @param  {String} iframe - locateur de l'iframe dans lequel saisir
 * 
 */
export default async (texteASaisir, locateur, iframe) => {
    
    //Recuperation du locateur reel si alias donne
    locateur = getLocateur(locateur)
    iframe = getLocateur(iframe)

    $(iframe).waitForExist({
        timeout: 10000
    });

    //Recuperation de l'element
    const elementLocateur = $(locateur)

    try {
        await focusIframe(iframe)
        //Saisie du texte dans l'element
        await elementLocateur.click()
        await browser.keys(['Control', 'a'])
        await browser.keys("Delete")
        await elementLocateur.setValue(texteASaisir)
        await perdreFocus()

    } catch (StaleElementException) {
        await focusIframe(iframe)
        //Saisie du texte dans l'element
        await elementLocateur.click()
        await browser.keys(['Control', 'a'])
        await browser.keys("Delete")
        await elementLocateur.setValue(texteASaisir)
        await perdreFocus()
    }
    
};
