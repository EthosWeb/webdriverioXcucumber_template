import getLocateur from '../../mapping/fonctions/locateurs'
/**
 * Verifier le nombre de caractères du texte d'un élément
 * @param  {String} locateur - élément a verifier
 */
export default async (locateur, NbrCaracteres) => {

        //Recupération du locateur réel
        locateur = getLocateur(locateur);
        //Localiser l'élément sur la page
        const element = $(locateur);
        //Déterminer le nombre de caractères du texte de l'élément
        var texteElement      = await element.getText().toString();
        var NbrCaracteresText = texteElement.length; 
       
        if (NbrCaracteres != NbrCaracteresText) {
            throw new Error("ERREUR - (" + NbrCaracteres + ") ne correspond pas au nombre de carracteres du texte (" + texteElement + ")");
        }
    
};
