import getLocateur from '../../mapping/fonctions/locateurs'
 
/**
 * Cliquer sur un locateur
 * @param  {String} locateur - locateur de l'element a cocher
 */
export default async () => {
    
    await browser.keys("\uE007");  
    
};