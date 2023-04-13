import getLocateur from '../../mapping/fonctions/locateurs'
/**
 * verifier que element n'est pas visible
 * @param  {String} locateur - element a verifier
 */
export default async (locateur) => {


        if ((browser.getCookies(['paiement'])).value == undefined) {
                //Recuperation du locateur reel
                locateur = getLocateur(locateur)

                const element = $(locateur)

                await expect(element).not.toBeDisplayed()
        }

};
