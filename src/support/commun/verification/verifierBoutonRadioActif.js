import getLocateur from '../../mapping/fonctions/locateurs'

/**
 * verifier que element n'est pas vide
 * @param  {String} locateur - element a verifier
 */
export default async (locateur) => {


        //Recuperation du locateur reel
        locateur = getLocateur(locateur)

        const element = await $(locateur)
        try {
                await expect(element).toHaveAttrContaining('class', 'defaultRight') || await expect(element).toHaveAttrContaining('class', 'right')
        }

        catch {
                var couleurRGB = "rgb(60,60,60)"
                let couleurTexte = await element.getCSSProperty('background-color')
                couleurTexte = couleurTexte.value.toString()

                if (couleurTexte != couleurRGB) {
                        throw new Error("Le bouton radio" + locateur + " n'est pas selectionne")
                }

        }

}