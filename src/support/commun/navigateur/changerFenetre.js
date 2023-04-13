/**
 * Acceder à une Page sur une nouvelle fenetre
 * @param  {String} indiceFenetre - element de la Frame
 */
  export default async (indiceFenetre) => {
    
    //Récupération du tableau des ID des fenetres ouvertes
    const handles = await browser.getWindowHandles()
   
    // Changement de fenetre en fonction de l'indice
    await browser.switchToWindow(handles[indiceFenetre])
    
};

