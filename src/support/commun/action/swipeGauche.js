
/**
 * Swipe vers la gauche
 */
 export default async () => {
    
    console.log("Scroll")
    browser.touchScroll(-10, -10)
    console.log("effectué")
    
};
