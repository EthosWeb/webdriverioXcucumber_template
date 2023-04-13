import getLocateur from '../../mapping/fonctions/locateurs'
import verifierElementDesactive from './verifierElementDesactive';
/**
 * verifier que element n'est pas vide
 * @param  {String} locateur - element a verifier
 */
 export default async (locateur) => {

        
        verifierElementDesactive(locateur)
        
        //Recuperation du locateur reel
        locateur = getLocateur(locateur)

        var element = $(locateur)

        if (await element.getTagName().includes('button') || await element.getTagName() == 'a' || await element.getTagName().includes('input')) {
            throw new Error("Erreur - L'element " + locateur + " peut être cliqué")
        }
       
        if (await element.getAttribute('href') != null) {
            throw new Error("Erreur - L'element " + locateur + " contient un lien : " + element.getAttribute('href'))
        }
};
