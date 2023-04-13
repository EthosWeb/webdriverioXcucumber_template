import getLocateur from '../../mapping/fonctions/locateurs'
/**
 * verifier que element contient le texte attendu
 * @param  {String} locateur - element a verifier
 * @param  {String} texte - texte a verifier
 */
export default async (locateur, caractere) => {

    locateur = getLocateur(locateur)

    const element = $(locateur)

    var letterNumber = /^[0-9a-zA-Z]+$/

    var textElement = element.getText().replace(/\r?\n/g, " ");
    switch (caractere) {
        case "alphanumerique":
            if (!textElement.toLowerCase().match(letterNumber)) {
                throw new Error("ERREUR - Le texte (" + textElement + ") affiche contient des caractères non alphanumerique");
            }
            break;
        default:
            throw new Error("Erreur - Le caractere " + caractere + " n'est pas defini")
    }

};
