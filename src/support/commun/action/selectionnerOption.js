import getLocateur from '../../mapping/fonctions/locateurs'
import attendreSecondes from '../navigation/attendreSecondes';
import logInfo from '../navigateur/logInfo';
/**
 * Selectionne une option dans une liste select
 * @param  {String} option - option a selectionner
 * @param  {String} locateur - liste contenant l'option
 */
export default async (option, locateur) => {

    
    //Recuperation du locateur reel si alias donne

    locateur = getLocateur(locateur)


    await $(locateur).waitForExist({
        timeout: 10000
    });

    //Recuperation de l'element
    const element = $(locateur)

    try {
        //Selection de l'option en fonction de sa valeur
        await element.selectByAttribute('value', option)
        await attendreSecondes(0.25)

    } catch {
        await attendreSecondes(1)
        try {
            //Selection de l'option en fonction du texte
            await element.selectByVisibleText(option)
            await attendreSecondes(0.25)

        } catch {
            try {
                //Selection de l'option en fonction du texte
                await element.selectByVisibleText(option)
                await attendreSecondes(0.25)

            } catch {
                await attendreSecondes(1)
                //Selection de l'option en fonction de sa valeur
                await element.selectByAttribute('value', option)
                await attendreSecondes(0.25)

            }

        }

    }
    
};
