import attendreSecondes from "../navigation/attendreSecondes";

/**
 * Appuyer sur une touche du clavier
 * @param  {String} touche La touche a taper
 */
 export default async (touche) => {
        
        await attendreSecondes(0.1)
        switch (touche) {
            case "Entree":
                touche = "Enter"
                await browser.keys(touche);
                break;
            default:
                await browser.keys(touche);
        }
        await attendreSecondes(0.1)
    
};
