import getLocateur from '../../mapping/fonctions/locateurs'
/**
 * verifier que element est present dans le DOM
 * @param  {String} locateur - element a verifier
 */
 export default async (locateur, pseudoElement) => {

        
        //Recuperation du locateur reel
        var locateurT = getLocateur(locateur)
        //Recuperation du  pseudo element before to check animation after it happened. Locateur en css selector seulement
        var contentMode = await browser.execute(([locateurT, pseudoElement]) => {
            var style =document.defaultView.getComputedStyle(document.querySelector(locateurT), '::'+pseudoElement);
            return style.getPropertyValue('content')
        }, [locateurT, pseudoElement]);

        if (contentMode == null) {
            throw new Error("Le pseudo element est vide")
        }
};
