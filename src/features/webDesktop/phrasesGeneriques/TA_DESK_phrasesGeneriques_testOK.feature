@SAUCELABS @PHRASESGENERIQUE
Feature: TA_DESK_phrasesGeneriques_testOK

        Scenario: TA_DESK_phrasesGeneriques_testOK

            Given J'accede a la page "Test Authentification"
             When Je m'authentifie avec le user "standard_user" et le mot de passe "secret_sauce"
             Then Je verifie que je suis sur la page "Test Resultats"
              And Je verifie que l'element "Produits" est affiche