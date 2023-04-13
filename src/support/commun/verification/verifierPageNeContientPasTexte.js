import getLocateur from '../../mapping/fonctions/locateurs'
/**
 * verifier que la page ne contient pas le texte attendu
 * @param  {String} texte - texte a verifier
 */
export default async (texte) => {

        const element = await $('body')

        await expect(element).not.toHaveTextContaining(texte)
    

};
