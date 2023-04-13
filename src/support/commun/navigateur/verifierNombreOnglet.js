/**
 * Verifie la valeur d'un cookie
 * @param  {String} nbrOnglets - nombre onglets
 */
export default async (nbrOnglets) => {

    //Récupérer la liste des onglets ouverts
    const listOnglet = browser.getWindowHandles();

    var nbrOngletsNav = 0;
    var i=0
    while (listOnglet[i] != null) {
        nbrOngletsNav = nbrOngletsNav +1;
        i++
    }

    if (nbrOngletsNav.toString() != nbrOnglets) {
        throw new Error("ERREUR - Le nombre d'onglets navigateur ouverts (" + nbrOngletsNav + ") ne correspond pas l'attendu (" + nbrOnglets + ")");
    }
};