import getLocateur from '../../mapping/fonctions/locateurs'
import saisirTexte from './saisirTexte';
/**
 * Saisir une adresse mail (ajout))
 * @param  {String} locateur - locateur de l'element dans lequel saisir
 */
export default async ( locateur) => {


    
        //Recuperation du locateur reel si alias donne

        locateur = getLocateur(locateur)


        $(locateur).waitForExist({
            timeout: 15000
        });

        browser.pause(250)

        //Recuperation de l'element
        const element = $(locateur)

        var valeurDynamique = new Date();
        valeurDynamique = String(valeurDynamique.getTime()).substring(6)
        var valeurAleatoire = Math.floor(Math.random() * Math.floor(100))
        var nouvelleAdresseMail = "WDIO_PART_" + valeurDynamique + "_" + valeurAleatoire + "@yopmail.com"

        //Saisie de l'adresse mail
        await saisirTexte(nouvelleAdresseMail, locateur)
    
};
