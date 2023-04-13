/**
 * Attendre X secondes
 * @param  {String} secondesAAttendre - nombre de secondes a attendre
 */
export default async (secondesAAttendre) => {
        
        let cookiePaiement = await browser.getCookies(['paiement'])
        if (cookiePaiement.length == 0) {
        // Convertion en ms
        const msAAttendre = secondesAAttendre * 1000

        // Attente de X ms
       await browser.pause(msAAttendre)
        }
    
};
