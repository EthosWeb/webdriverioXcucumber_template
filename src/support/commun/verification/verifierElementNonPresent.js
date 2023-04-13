import getLocateur from '../../mapping/fonctions/locateurs'
import attendreSecondes from '../navigation/attendreSecondes';
/**
 * verifier que element n'est pas present dans le DOM
 * @param  {String} locateur - element a verifier
 */
export default async (locateur) => {

        //Recuperation du locateur reel
        locateur = getLocateur(locateur)

        const element = $(locateur)

        if (await element.isExisting()) {
                await attendreSecondes(5)

                if (await element.isExisting()) {
                        throw new Error("L'element " + element + " est present")
                }
        }

};
