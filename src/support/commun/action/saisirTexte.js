import getLocateur from '../../mapping/fonctions/locateurs'
import attendreSecondes from '../navigation/attendreSecondes';
/**
 * Saisir un texte
 * @param  {String} texteASaisir - texte a saisir dans l'element
 * @param  {String} locateur - locateur de l'element dans lequel saisir
 */
export default async (texteASaisir, locateur) => {
    
        //Recuperation du locateur reel si alias donne

        locateur = getLocateur(locateur)


        await $(locateur).waitForExist({
            timeout: 10000
        });

        //Recuperation de l'element
        const element = $(locateur)

        try {
            //Saisie du texte dans l'element
            await element.setValue("")
            await element.setValue(texteASaisir)

        } catch {
            await attendreSecondes(1)
            //Saisie du texte dans l'element
            await element.setValue("")
            await element.setValue(texteASaisir)
        }
        await attendreSecondes(0.5)
    
};
