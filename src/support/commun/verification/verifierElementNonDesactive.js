import getLocateur from '../../mapping/fonctions/locateurs'
/**
 * Verifie qu'un element possede une classe css
 * @param  {String} element - element a verifier
 */
export default async (locateur) => {

    
        var locateur2 = getLocateur(locateur)
        $(locateur2).waitForExist({
            timeout: 15000
        });
        //Recuperation de l'element
        const element = $(locateur2)
        var disabled = await element.getAttribute("disabled")
        if (disabled!=undefined) {
            throw new Error("L'element " + locateur + " est desactive")
        }
    
};