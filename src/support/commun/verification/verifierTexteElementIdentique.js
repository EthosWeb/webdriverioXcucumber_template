import cliquerSurSiBesoin from "../action/cliquerSurSiBesoin";
import getUrl from '../../mapping/fonctions/url'
import getLocateur from "../../mapping/fonctions/locateurs";

/**
 * Log dans la console
 * @param  {String} locateur1 - locateur a memoriser
 * @param  {String} variable - variable représentative du locateur

 */
 export default async (locateur1, locateur2) => {
    locateur1 = getLocateur(locateur1)
    locateur2 = getLocateur(locateur2)

    const element1 = await $(locateur1)
    const element2 = await $(locateur2)
 
     const value1 = await element1.getText().split("(")[1].split(")")[0]
    const value2 = await element2.getText().split(" ")[0]

    await expect(value1).toBe(value2)


};
