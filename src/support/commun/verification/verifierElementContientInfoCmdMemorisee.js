/*import getLocateur from '../../mapping/fonctions/locateurs'
import attendreSecondes from '../navigation/attendreSecondes';
import getNumCommande from '../memorisation/getNumcommande';
import getPrixTotalDeLaCommande from '../memorisation/getPrixTotalDeLaCommande';
import getDateDeCreationDeCommande from '../memorisation/getDateDeCreationDeCommande';
/**
 * verifier que element contient le texte attendu
 * @param  {String} locateur - element a verifier
 * @param  {String} texte - texte a verifier
 * @param  {String} fichier - fichier des données mémorisées
 * 
 */
 export default async (locateur, texte, fichier) => {

  await attendreSecondes("2")

    var numCommande
    var PrixTotalDeLaCommande 
    var DateDeCreationDeCommande
    var HeureDeCreationDeCommande
    
        PrixTotalDeLaCommande = await getPrixTotalDeLaCommande(fichier);
        DateDeCreationDeCommande = await getDateDeCreationDeCommande(fichier);
        HeureDeCreationDeCommande = await getDateDeCreationDeCommande(fichier);
        numCommande = await getNumCommande(fichier);

        switch (texte) {
            case "Prix":
                texte = PrixTotalDeLaCommande
                break
            case "Date":
                texte = DateDeCreationDeCommande
                break
            case "Heure":
                texte = HeureDeCreationDeCommande
                break
        case "N° Commande":
                texte = numCommande
                break
        }

        
        //Recuperation du locateur reel
        locateur = getLocateur(locateur)

        const element = await $(locateur)

        await expect(element).toHaveValueContaining(texte) || expect(element).toHaveTextContaining(texte)
    
};





