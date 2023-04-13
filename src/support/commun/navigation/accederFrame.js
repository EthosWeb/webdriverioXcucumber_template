import getLocateur from '../../mapping/fonctions/locateurs'

/**
 * Acceder à un Frame de la Page
 * @param  {String} locateur - element de la Frame
 */
 export default async (locateur) => {

        //Recuperation du locateur reel si alias donne

        locateur = getLocateur(locateur)

        //Recuperation de l'element
        const element = await $(locateur)

        await browser.switchToFrame(element)


};
