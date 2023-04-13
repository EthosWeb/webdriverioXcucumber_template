import getLocateur from '../../mapping/fonctions/locateurs'
import attendreSecondes from '../navigation/attendreSecondes';
/**
 * verifier que element contient le texte attendu
 * @param  {String} locateur - element a verifier
 * @param  {String} texte - texte a verifier
 */
export default async (locateur, texte) => {

    texte = texte.toLowerCase()

    
    //Recuperation du locateur reel

    locateur = getLocateur(locateur)

    const element = $(locateur)

    var texteOK = false

    try {
        var textElement = await element.getText()
        textElement = textElement.replace(/\r?\n/g, " ");
        textElement = textElement.toLowerCase()
    }
    catch {
        var textElement = await element.getText()
        textElement = textElement.replace(/\r?\n/g, " ");
        textElement = textElement.toLowerCase()
    }


    //decoupage des textes attendus
    texte = texte.split(' ou ')

    for (var i = 0; i < texte.length; i++) {

        if (textElement.includes(texte[i])) {
            texteOK = true
        }
    }


    if (texteOK == false) {

        await attendreSecondes(10)

        try {
            textElement = await element.getText()
            textElement = textElement.replace(/\r?\n/g, " ");
            textElement = textElement.toLowerCase()
        }
        catch {
            textElement = await element.getText()
            textElement = textElement.replace(/\r?\n/g, " ");
            textElement = textElement.toLowerCase()
        }

        for (var i = 0; i < texte.length; i++) {

            if (textElement.includes(texte[i])) {
                texteOK = true
            }
        }

        if (texteOK == false) {
            throw new Error("ERREUR - Le texte (" + textElement + ") affiche ne correspond pas à l'attendu (" + texte + ")");
        }
    }
    

};
