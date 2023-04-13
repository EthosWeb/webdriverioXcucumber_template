import getLocateur from '../../mapping/fonctions/locateurs'
/**
 * verifier que element contient la valeur attendue
 * @param  {String} locateur - element a verifier
 * @param  {String} valeur - valeur a verifier
 */
export default async (locateur, valeur) => {

    
        //Recuperation du locateur reel
        locateur = getLocateur(locateur)

        const element = $(locateur)

        const texteElement = await element.getValue()
        var valeurOK = false


        //decoupage des valeurs attendus
        valeur = valeur.split(' ou ')

        for (var i = 0; i < valeur.length; i++) {

            if (texteElement.includes(valeur[i])) {
                valeurOK = true
            }
        }


        if (valeurOK == false) {
            throw new Error("ERREUR - La valeur (" + texteElement + ") affichee ne correspond pas à l'attendu (" + valeur + ")");

        }
    

};
