import getLocateur from '../../mapping/fonctions/locateurs'
/**
 * verifier que element est visible
 * @param  {String} locateur - element a verifier
 */
export default async (locateur, pseudoElement) => {

    
        //Recuperation du locateur reel
        locateur = getLocateur(locateur)

        var contentMode = browser.execute(([locateur, pseudoElement]) => {
            var style = document.defaultView.getComputedStyle(document.querySelector(locateur), '::'+pseudoElement);
            return style.getPropertyValue('content')
        }, [locateur, pseudoElement]);

        if (contentMode == null) {
            throw new Error("L'element ne contient pas de picto")
        }
    
};
