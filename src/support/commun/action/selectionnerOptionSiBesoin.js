import getLocateur from '../../mapping/fonctions/locateurs'
import attendreSecondes from '../navigation/attendreSecondes';
/**
 * Selectionne une option dans une liste select
 * @param  {String} option - option a selectionner
 * @param  {String} locateur - liste contenant l'option
 */
export default async (option, locateur) => {
    
    //Recuperation du locateur reel si alias donne

    locateur = getLocateur(locateur)

    //Recuperation de l'element
    const element = await $(locateur)

    try {
        //Si l'element est visible uniquement
        if (await element.isDisplayed()) {
            //Selection de l'option en fonction de sa valeur
            await element.selectByAttribute('value', option)
            await attendreSecondes(0.25)
        }

    } catch {
        await attendreSecondes(1)
        try {
            //Si l'element est visible uniquement
            if (await element.isDisplayed()) {
                //Selection de l'option en fonction du texte
                await element.selectByVisibleText(option)
                await attendreSecondes(0.25)
            }

        } catch {
            try {
                //Si l'element est visible uniquement
                if (await element.isDisplayed()) {
                    //Selection de l'option en fonction du texte
                    await element.selectByVisibleText(option)
                    await attendreSecondes(0.25)
                }

            } catch {
                //Si l'element est visible uniquement
                if (await element.isDisplayed()) {
                    await attendreSecondes(1)
                    //Selection de l'option en fonction de sa valeur
                    await element.selectByAttribute('value', option)
                    await attendreSecondes(0.25)
                }

            }

        }

    }

};
