import getLocateur from '../../mapping/fonctions/locateurs'
import attendreSecondes from '../navigation/attendreSecondes';
/**
 * verifier que la page contient le texte attendu
 * @param  {String} texte - texte a verifier
 */
export default async (texte) => {

    
        var texteOK = false

        var textElement = await $('body').getText()
        textElement = textElement.replace(/\r?\n/g, " ");


        //decoupage des textes attendus
        texte = texte.split(' ou ')

        for (var i = 0; i < texte.length; i++) {

            if (textElement.includes(texte[i])) {
                texteOK = true
            }
        }


        if (texteOK == false) {
            await attendreSecondes(5)

            textElement = await $('body').getText()
            textElement = textElement.replace(/\r?\n/g, " ");

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
