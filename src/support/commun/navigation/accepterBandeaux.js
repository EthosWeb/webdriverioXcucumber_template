
import logInfo from '../navigateur/logInfo'

/**
 * Accepte les bandeaux
 */
export default async () => {

    


        if (await $('#footer_tc_privacy_container_button > button:nth-of-type(2)').isExisting()) {
            await logInfo("Acceptation des cookies 1")
            try {
                await $('#footer_tc_privacy_container_button > button:nth-of-type(2)').click()
            }
            catch { }
        }

        if (await $('#popin_tc_privacy_button_2').isExisting()) {
            await logInfo("Acceptation des cookies 2")
            try {
                await $('#popin_tc_privacy_button_2').click()
            }
            catch { }
        }

        if (await $('#mfbExitPopupInvitation').isDisplayed()) {
            await logInfo("Acceptation des cookies 3")
            try {
                await $('#nogo').click()
            }
            catch { }
        }

        if (await $('.yw-notification-message').isDisplayed()) {
            await logInfo("Acceptation des cookies 4")
            try {
                await $('.yw-notification-message').click()
            }
            catch { }
        }
    


};