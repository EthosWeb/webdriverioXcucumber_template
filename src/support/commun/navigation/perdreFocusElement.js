import attendreSecondes from '../navigation/attendreSecondes'

/**
 * Perdre le focus sur un element
 */
export default async (element) => {
    
    
        await attendreSecondes(2)
        $('body').keys(['Tab'])


};
