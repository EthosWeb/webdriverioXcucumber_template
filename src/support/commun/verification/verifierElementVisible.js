import getLocateur from '../../mapping/fonctions/locateurs'
import accepterBandeaux from '../navigation/accepterBandeaux';
import attendreSecondes from '../navigation/attendreSecondes';
/**
 * verifier que element est visible
 * @param  {String} locateur - element a verifier
 */
export default async (locateur) => {

        await accepterBandeaux()
        //Recuperation du locateur reel
        var locateur2 = getLocateur(locateur)

        const element = $(locateur2)

        if (! await $(locateur2).isDisplayed()) {
                await attendreSecondes(5)

                if (! await $(locateur2).isDisplayed()) {
                        throw new Error("L'element " + locateur + " n'est pas visible")
                }
        }

};
