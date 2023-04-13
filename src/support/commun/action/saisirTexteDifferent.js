import getLocateur from '../../mapping/fonctions/locateurs'
import saisirTexte from './saisirTexte';
/**
 * Saisir un texte si besoin
 * @param  {String} texteASaisir - texte a saisir dans l'element
 * @param  {String} locateur - locateur de l'element dans lequel saisir
 */
 export default async (texteASaisir,texteASaisir2, locateur) => {

        
        //Recuperation du locateur reel si alias donne

        locateur = getLocateur(locateur)

        await browser.pause(500)

        //Recuperation de l'element
        const element = await $(locateur)
        const inputel = await element.getValue()

            //Si le texte à rentrer est déjà présent uniquement
            if (inputel.includes(texteASaisir)) {
                await saisirTexte(texteASaisir2, locateur)
            }
            else {
                await saisirTexte(texteASaisir, locateur)
            }
    
};
