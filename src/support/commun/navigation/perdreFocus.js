/**
 * Perdre le focus sur un iframe
 * @param  -
 */
export default async () => {
        let cookiePaiement = await browser.getCookies(['paiement'])
        if (cookiePaiement.length == 0) {
        await browser.switchToFrame(null)
        }
    
};
