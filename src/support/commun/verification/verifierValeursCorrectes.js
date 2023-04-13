import { config } from '../../../../wdio.conf';
import getLocateur from '../../mapping/fonctions/locateurs'
/**
 * Verifie que les valeurs affichees correspondent aux valeurs passees en ligne de commande
 */
export default async () => {
    // Récupération des paramètres de la ligne de commande
    const argumentsEntres = config.getAllArguments()

    // Récupération des données affichées dans la page web
    let body = await $('body').getHTML();
    body = body.replace(/<[^>]*>?/gm, '');
    body = body.split('\n');
    let donneesAffichees = [];
    for(let i=0;i<body.length;i++){
        if (body[i].includes(':')){
            let entry = body[i].split(':')[0].replace(/\s+/g, '') + ':' + body[i].split(':')[1].trimEnd();
            donneesAffichees.push(entry);
        }
    }

    // On construit un objet clés/valeurs avec les données affichées
    let donneesFormatees = {};
    for(let i = 0; i < donneesAffichees.length; i++){
        let t = donneesAffichees[i].split(':');
        donneesFormatees[t[0]] = t[1];
    }

    const valeursAffichees = donneesFormatees
    delete argumentsEntres['baseUrl'];
    let all_keys = Object.keys(argumentsEntres);
    let giveError = false
    for(let i = 0; i < all_keys.length; i ++) {    
        let res = {
            nomCle: all_keys[i],
            valeurLigneDeCommande: argumentsEntres[all_keys[i]],
            valeurAffichesPageWeb: valeursAffichees[all_keys[i]],
            resultatDeComparaison: argumentsEntres[all_keys[i]] === valeursAffichees[all_keys[i]]
        }
        console.log(res);
        // On vérifie si l'ensemble des clés/valeurs sont correctes
        if(res.resultatDeComparaison === false){
            giveError = true;
        }
    }

    await expect (giveError).toBe(false)

    // var valeurKeyAttendue = config.vault_key_1
    // // recuperation du texte html
    // var valeurKeyAffichee = await $('body').getText()

    // // decoupage par la key
    // valeurKeyAffichee = valeurKeyAffichee.split("vault_key_1:")[1]
    // valeurKeyAffichee = valeurKeyAffichee.split("\n")[0]

    // if(valeurKeyAffichee!=valeurKeyAttendue){
    //     throw new Error("ERREUR - La cle vault_key_1 n'a pas la valeur attendue (attendu : "+valeurKeyAttendue+" ; observe : "+valeurKeyAffichee+")")
    // }
};