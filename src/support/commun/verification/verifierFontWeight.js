import reporter from 'wdio-cucumberjs-json-reporter';
import getLocateur from '../../mapping/fonctions/locateurs';

/**
 * verifier la cible d'un lien
 * @param  {String} locateur - element a verifier
 * @param  {String} pointer - pointer a verifier
 */
 export default async (locateur, weight) => {

        
        //Recuperation du locateur reel
        locateur = getLocateur(locateur)

        const element = await $(locateur)

        const actualWeight = (await element.getCSSProperty('font-weight').value).toString()

        if (actualWeight != weight) {
            throw new Error("Erreur - Le pointer " + locateur + " n'est pas " + weight + "(observe : " + actualWeight + ", attendu : " + weight + ")")
        }
  
};
