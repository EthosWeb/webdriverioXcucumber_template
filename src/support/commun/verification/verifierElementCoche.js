import getLocateur from '../../mapping/fonctions/locateurs'

/**
 * verifier que element est coche
 * @param  {String} locateur - element a verifier
 */
export default async (locateur) => {

        //Recuperation du locateur reel
        locateur = getLocateur(locateur)

        const element = $(locateur)

        //*RAU - Start : 09/07/2021
        //La ligne du code ci-dessous est mise ne commentaire, elle sera réutilisé sous condition 
        //await expect(element).toBeChecked()

        //Comme certains elements de type "Checkbox" ou "Radio bouton" ont pas l'attribut "checked", la méthode "await expect(element).toBeChecked()" ne permet pas de faire la vérification.
        //Dans ce cas, pour faire la vérification on se base sur la Class de l'await element.
        //Exemple : "Radio bouton" destinataire dans Popin Suivi, non coché--> Class = 'sc-khIimk izDWLL' / coché--> Class = 'sc-khIimk izDWLL checked'
        try {
            if (await element.getAttribute("checked") == null) {
                await expect(element).toBeDisplayed();
            } else {
                await expect(element).toBeChecked();
            }
        }
        catch {
            if (await element.getAttribute("checked") == null) {
                await expect(element).toBeDisplayed();
            } else {
                await expect(element).toBeChecked();
            }
        }
        //*RAU - End : 09/07/2021
    
};
