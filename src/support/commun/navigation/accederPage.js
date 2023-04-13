import getUrl from '../../mapping/fonctions/url'
import { config } from "../../../../wdio.conf";
import logCookies from "../navigateur/logCookies"
import accepterBandeaux from "./accepterBandeaux";

/**
 * Acceder a une URL
 * @param  {String} urlAVisiter - URL a visiter
 */
export default async (urlAVisiter) => {
    

        // Ciblage d'un front
        if (config.front != "") {
            await browser.setCookies(
                { name: 'BOUTIQUE', value: 'lpodc1lpuhyf' + config.front }
            )
        }

        //Recuperation du locateur reel si alias donne
        if (!urlAVisiter.startsWith("/")) {
            urlAVisiter = getUrl(urlAVisiter)
        }
        if (!urlAVisiter.startsWith("http")) {
            urlAVisiter = getUrl(urlAVisiter)
        }

        if (urlAVisiter == "baseUrl") {
            urlAVisiter = config.baseUrl
        }

        // Acces a la page
        try {
            await browser.url(urlAVisiter);

        }
        catch {
            try {
                await browser.url(urlAVisiter);

            }
            catch (e) {
                throw new Error("Impossible d'acceder a la page " + urlAVisiter + " (" + e + ")")

            }

        }
    
    await accepterBandeaux()
    //await logInfo("Acces a la page "+urlAVisiter)
    //let valCookieFront = await browser.getCookies(['BOUTIQUE'])
    //console.log(valCookieFront)
}