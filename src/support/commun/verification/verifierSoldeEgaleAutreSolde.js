import getLocateur from '../../mapping/fonctions/locateurs';
import getUrl from '../../mapping/fonctions/url'

/**
 * Verifier la couleur de la bordure
 * @param  {String} fichierSolde - solde de l'element a rembourse
 * @param  {String} locateurSolde - solde dans le compte prepayer
 */
export default async (fichierSolde, locateurSolde) => {

    if ((browser.getCookies(['paiement'])).value == undefined) {

        // Recuperation du solde de l'element a rembourser
        const fs = require('fs');
        var dossierATraiter = "src/fichiers/scellius/prixProduit"
        var solde = fs.readFileSync(dossierATraiter + "/" + fichierSolde + ".txt").toString()
        solde = solde.split(";")[1]

        //Recuperation du montant du compte prépayé
        locateurSolde = $(locateurSolde).getText().split(" : ")[1]
        var montantSolde = locateurSolde.toString().split(" €")[0]

        if (solde !== montantSolde) {
            throw new Error("Erreur - L'Element' " + solde + " n'est pas égale à l'élément "+ montantSolde)
        }
    }
};
