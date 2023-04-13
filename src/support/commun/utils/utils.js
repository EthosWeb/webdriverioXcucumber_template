/**
 * Genere un mot aleatoire
 */

 export function motAleatoire() {
    var mot = "";
    var lettres = "ABCDEFGHIJKLMNOPQRSTUVWXYZéèêï";

    for (var i = 0; i < 3; i++) {
        mot += lettres.charAt(Math.floor(Math.random() * lettres.length));
    }

    return mot;
}

export function replaceNbsps(str) {
    var re = new RegExp(String.fromCharCode(160), "g");
    return str.replace(re, " ");
  }