import reporter from 'wdio-cucumberjs-json-reporter';
import getLocateur from '../../mapping/fonctions/locateurs';

/**
 * verifier la cible d'un lien
 * @param  {String} locateur - element a verifier
 * @param  {String} pointer - pointer a verifier
 */
 export default async (locateur, pointer) => {

        
        //Recuperation du locateur reel
        locateur = getLocateur(locateur)

        const element = await $(locateur)

        const actualPointer = (await element.getCSSProperty('cursor').value).toString()

        if (actualPointer != pointer) {
            throw new Error("Erreur - Le pointer " + locateur + " n'est pas " + pointer + "(observe : " + actualPointer + ", attendu : " + pointer + ")")
        }

};
