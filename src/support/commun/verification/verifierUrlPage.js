import getUrl from '../../mapping/fonctions/url'
import attendreSecondes from '../navigation/attendreSecondes'
import getLocateur from '../../mapping/fonctions/locateurs'


/**
 * verifier l'url de la page
 * @param  {String} urlAttendue - URL a verifier
 */
export default async (urlAttendue) => {

    
        var pageOK = false
        var attente = 0
        //Recuperation de l'url reel
        if (!urlAttendue.startsWith('/')) {
            urlAttendue = getUrl(urlAttendue)
        }
        if (urlAttendue == "baseUrl") {
            urlAttendue = config.baseUrl
        }


        // Recuperation de l'url courante
        var urlCourante = await browser.getUrl()

        //decoupage des textes attendus
        urlAttendue = urlAttendue.split(' ou ')


        while (pageOK == false && attente < 3) {
            if (urlCourante.includes(urlAttendue[0]) || urlCourante.includes(urlAttendue[1])) {

                pageOK = true
            }
            else {
                await attendreSecondes(3)
                attente++
            }
        }

        // Recuperation de l'url courante
        urlCourante = await browser.getUrl()
        urlCourante = urlCourante.replace(/\/\//g, "/")

        urlAttendue = urlAttendue.toString()
        urlCourante = urlCourante.toString()


        if (!urlCourante.includes(urlAttendue)) {
            throw new Error("ERREUR - La page actuelle (" + urlCourante + ") ne contient pas l'url attendue (" + urlAttendue + ")")
        }

};
