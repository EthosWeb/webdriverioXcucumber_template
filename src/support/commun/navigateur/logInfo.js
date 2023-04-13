import cliquerSurSiBesoin from "../action/cliquerSurSiBesoin";
import getUrl from '../../mapping/fonctions/url'
import { config } from "../../../../wdio.conf.js";

/**
 * Log dans la console (niveau INFO)
 * @param  {String} texte - texte a log dans la console
 */
export default async (texte) => {

    if (config.logInfo == true) {
        console.log("INFO - " + texte)
    }

};
