
import getLocateur from '../../mapping/fonctions/locateurs'
/**
 * verifier l'ordre d'une liste de commandes par date de création
 * @param  {String} locateur - element a verifier
 */

 export default async (locateur) => {

        
        //Recuperation du locateur reel des 10 lignes de la colonne
        const locateur1 = getLocateur(locateur)+"[1]"
        const locateur2 = getLocateur(locateur)+"[2]"
        const locateur3 = getLocateur(locateur)+"[3]"
        const locateur4 = getLocateur(locateur)+"[4]"
        const locateur5 = getLocateur(locateur)+"[5]"
        const locateur6 = getLocateur(locateur)+"[6]"
        const locateur7 = getLocateur(locateur)+"[7]"
        const locateur8 = getLocateur(locateur)+"[8]"
        const locateur9 = getLocateur(locateur)+"[9]"
        const locateur10 = getLocateur(locateur)+"[10]"


        const tabElement = [

            await $(locateur1),   
            await $(locateur2),
            await $(locateur3),
            await $(locateur4),
            await $(locateur5),
            await $(locateur6),
            await $(locateur7),
            await $(locateur8),
            await $(locateur9),
            await $(locateur10)
        ]

        //Instaurer les valeurs des dates de création des 10 lignes de la colonne dans une liste initiale

          const Liste_de_commandes = [       
			      new Date (await tabElement[0].getText()),
            new Date (await tabElement[1].getText()),
            new Date (await tabElement[2].getText()),
            new Date (await tabElement[3].getText()),
            new Date (await tabElement[4].getText()),
            new Date (await tabElement[5].getText()),
            new Date (await tabElement[6].getText()),
            new Date (await tabElement[7].getText()),
            new Date (await tabElement[8].getText()),
            new Date (await tabElement[9].getText())

          ]

        //Copier la liste initiale puis trier les valeurs dans la liste  Liste_de_commandes_verif 
          var Liste_de_commandes_verif = Liste_de_commandes;
          Liste_de_commandes_verif.sort((a, b) => a - b);

        //Comparer la liste initiale et la liste triée ==> si les commandes sont bien triées par ordre de date, les deux listes devrons étre identiques 
           
          for (var verif= 0; verif < 10; verif++) {
            expect(Liste_de_commandes[verif]).toBe(Liste_de_commandes_verif[verif]);
          }

          
}; 