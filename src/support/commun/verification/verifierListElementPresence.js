import getLocateur from "../../mapping/fonctions/locateurs";

/**
 * Cliquer sur un locateur
 * @param  {String} locateur - locateur de l'element a cocher
 */
 export default async (locateur) => {

    //Recuperation du locateur reel si alias donne

    locateur = getLocateur(locateur)
    /*
    await $(locateur).waitForExist({
        timeout: 10000
    });
    */ 
    //Recuperation de l'element
    await browser.pause(6000)
    const listProduit = await $$(locateur)
    var myElement

    for(var itemProduit = 0 ; itemProduit < listProduit.length; itemProduit++){
        myElement = listProduit[itemProduit]
        expect(myElement).toBePresent()
    }
};
