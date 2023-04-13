import getLocateur from '../../mapping/fonctions/locateurs'
/**
 * verifier que element est present dans le DOM
 * @param  {String} locateur - element a verifier
 */
export default async (child, parent) => {

    
        //Recuperation du locateur reel
        if (child=='srcImage'){
            const fs = require('fs');
            child = '//*[contains(@src | @data-lps, \''+fs.readFileSync('src/fichiers/commandes/srcImage.txt','utf8')+'\')]'
        }
        else{
        child = getLocateur(child)
    }
        parent = getLocateur(parent)

        const childUnderParent = parent+child

        //console.log(childUnderParent)

        const elementChild = $(childUnderParent)
        const element = $(child)

        try{
        expect(elementChild).toBePresent()}
        catch{
            if(expect(element).toBePresent()){
            throw new Error("L'element fils"+child+" est bien présént mais n'est pas l'enfant du parent")
            }
            else{
            throw new Error("L'element fils n'a pas été trouvé")
            }
        }
};
