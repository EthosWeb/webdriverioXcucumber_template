import cliquerSurSiBesoin from "../action/cliquerSurSiBesoin";
import getUrl from '../../mapping/fonctions/url'

/**
 * Log dans la console la valeur des cookies
 */
export default async () => {

    const cookies = await browser.getCookies()
    console.log(cookies);

};
